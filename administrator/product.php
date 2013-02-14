<?php

require_once ('export.php');

class Product extends Export {
	
	protected $_documentObj = null;
	private $_filename = "output\products.txt";
	
	public function exec() {
		$bRet = true;
		//var_dump("Processing product export...");
		$this->_documentObj = new document();
		if ( isset($this->_targetDirectory) && isset($this->_targetYear) )
		{
			if ($this->openDbConnection()) 
			{
				//var_dump("Connected [Successful].");
				$records = $this->_dbConnectionObj->doQuery("SELECT * from tpl_directory where REC_ID = ?", $this->_targetDirectory);
				if (count($records) == 1) // it should only be one otherwise this is not valid result
				{
					//var_dump("Collecting information...");
					$this->_documentObj->add($this->_template['HEADER_TAG']);
					$this->doBuildProductTree(0, '', '');
					//var_dump("Saving information to ".$this->_filename);
					//$this->_documentObj->save($this->_filename);
                                        $this->setDocContent($this->_documentObj->getContent());
				}
				else
				{
					$this->_errHandler = new ErrorHandler(ERR_DB_NODIRECTORYTABLE);
					$bRet = true;
				}
				$this->closeDbConnection();
			}
			else {
				$this->_errHandler = new ErrorHandler(ERR_DB_CONNECT);
				$bRet = false;
			}
		}
		else {
			$this->_errHandler = new ErrorHandler(ERR_EMPTY_PARAM);
			$bRet = false;
		}
		return $bRet;
	}
	
	private function doBuildProductTree($parentNode, $parentPrefix, $thisPrefix) 
	{
		$bRet = true;
		$this->_dbConnectionObj->doFreeResult();
		$results = $this->_dbConnectionObj->doStoredProcQuery("CALL getProdCategoryInfo(" . $parentNode . ",". $this->_targetDirectory .")");
		if ($results->num_rows > 0) {
			if ($parentPrefix == '') {
				$nPos = $this->_documentObj->add($this->_template['PRODUCTNAME_TAG'].$thisPrefix);
			} 
			else {
				$nPos = $this->_documentObj->add($this->_template['PRODUCTNAME_TAG']. $parentPrefix . ' > ' .$thisPrefix);
			}
			while ( ($product = $results->fetch_array(MYSQLI_ASSOC)) == true)
			{
				if ($parentPrefix == '') {
					$bRet = $this->doBuildProductTree($product['REC_ID'], $thisPrefix, $product['NAME']);
				}
				else {
					$bRet = $this->doBuildProductTree($product['REC_ID'], $thisPrefix . ' > ' . $product['NAME'], $product['NAME']);
				}
			}
			if ($bRet == false) {
				$this->_documentObj->delete($nPos);
			}
		}
		else {
			$this->_dblog->error_log("node does not have children");
			$this->_dbConnectionObj->doFreeResult();
			//{ OK, if this node does not have children, then lets check which suppliers are linked to it }
			$results = $this->_dbConnectionObj->doStoredProcQuery("CALL getSupplierProdCatInfo(".$parentNode.",".$this->_targetDirectory.",".$this->_targetYear.")");
			if ($results && $results->num_rows > 0) {
				$this->_documentObj->add($this->_template['PRODUCTNAME_TAG'].$parentPrefix); // write the product name
			}
			if ($results) // protect from null result
			{
				while( ($supplier = $results->fetch_array(MYSQLI_ASSOC)) == true ) {
					$bRet = true;	
					$this->_documentObj->add($this->_template['SUPPLIERNAME_TAG'].$supplier['NAME']); // write the supplier name
                                                                                          $this->_dblog->error_log("Supplier Name: " . $supplier['NAME']);
                                                                                          $this->_dblog->error_log(var_export($supplier,true));
					if ( $supplier['IS_LOGO_LISTING'] == '1' || $supplier['IS_LOGO_LISTING'] == 'true' ) {
						$this->_documentObj->add($this->_template['PRODUCTLOGO_TAG']);
                                                                                                            $this->_dblog->error_log("Supplier Name: " . $supplier['NAME'] . " has a LOGO Listing");
					}
				}
			}
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