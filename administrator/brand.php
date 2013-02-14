<?php

require_once ('export.php');

class Brand extends Export {

    protected $_documentObj;
    private $_filename = "brands.txt";

    public function exec() {
        require_once("../config.php");
        global $dblog;
        $bRet = true;
        $tag = $this->_template;
        $dblog->error_log("Processing brand export...");
        $this->_documentObj = new document();
        if (isset($this->_targetDirectory) && isset($this->_targetYear)) {
            if ($this->openDbConnection()) {
                $dblog->error_log("Connected [Successful].");
                $records = $this->_dbConnectionObj->doQuery("SELECT * from tpl_directory where REC_ID = ?", $this->_targetDirectory);
                if (count($records) == 1) { // it should only be one otherwise this is not valid result
                    $this->_documentObj->add($tag['HEADER_TAG']);
                    $query = "SELECT B.* from tpl_brand as B INNER JOIN tpl_brand_directory ON (B.REC_ID = tpl_brand_directory.BRAND_REC_ID)
  						WHERE tpl_brand_directory.DIRECTORY_REC_ID = ? ORDER BY NAME";
                    $brands = $this->_dbConnectionObj->doQuery($query, array($this->_targetDirectory));
                    //error_log("");
                    if (count($brands) > 0) {
                        $dblog->error_log("Collecting information...");
                        while (($brand = $brands->fetch_array(MYSQLI_ASSOC)) == true) {
                            // $this->_documentObj->add($tag['BRANDNAME_TAG'].$brand['NAME']); // as rules reported by TPL - every brand have supplier (move this together with supplier if found)
                            // Free stored results
                            $this->_dbConnectionObj->doFreeResult();
                            $supplier_brand_infos = $this->_dbConnectionObj->doStoredProcQuery("CALL getSupplierBrandInfo(" . $brand['REC_ID'] . "," . $this->_targetDirectory . "," . $this->_targetYear . ")");
                            if ($supplier_brand_infos && $supplier_brand_infos->num_rows > 0) {
                                while (($info = $supplier_brand_infos->fetch_array(MYSQLI_ASSOC)) == true) {
                                    $this->_documentObj->add($tag['BRANDNAME_TAG'] . $brand['NAME']);
                                    $this->_documentObj->add($tag['SUPPLIERNAME_TAG'] . $info['NAME']);
                                    if ($info['IS_LOGO_LISTING'] == '1' || $info['IS_LOGO_LISTING'] == 'true') {
                                        $this->_documentObj->add($tag['SUPPLIERBRANDLOGO_TAG']);
                                        $dblog->error_log("Logo Listing");
                                       
                                    }
                                } //while
                            }
                            $supplier_brand_infos->close();
                        } //for
                        //$dblog->error_log("Saving information to " . $this->_filename);
                        $this->_documentObj->save($this->_filename);
                        $this->setDocContent($this->_documentObj->getContent());
                        $this->_dbConnectionObj->doFreeResult();
                    } else {
                        $this->_errHandler = new ErrorHandler(ERR_REC_NOBRANDS);
                        $bRet = false;
                    }
                } else {
                    $this->_errHandler = new ErrorHandler(ERR_DB_NODIRECTORY);
                    $bRet = false;
                }
                $this->closeDbConnection();
            } else {
                $this->_errHandler = new ErrorHandler(ERR_DB_CONNECT);
                $bRet = false;
            }
        } else {
            $this->_errHandler = new ErrorHandler(ERR_EMPTY_PARAM);
            $bRet = false;
        }
        return $bRet;
    }

    public function setfile($filename) {
        $this->_filename = $filename;
    }

    public function getsqlext() {
        return MYSQLI;
    }

}

?>
