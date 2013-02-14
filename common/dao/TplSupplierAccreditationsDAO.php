<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
require $path_doc_root . "/config.php";

class TplSupplierAccreditationsDAO {

    private $SQLSELECT = "SELECT * FROM tpl_supplier_accreditations  WHERE (SUPPLIER_REC_ID = ?) ORDER BY NAME";
    private $SQLInsert = "INSERT INTO tpl_supplier_accreditations (REC_DATETIME,REC_TIMESTAMP,NAME,TYPE,DATE_ACHIEVED,ISSUED_BY,YEAR_WON,CERTIFICATE_NUMBER,ACCRED_LOGO_URL,ACCRED_LOGO_LINK,SUPPLIER_REC_ID)  VALUES(NOW(),NOW(),?,?,NOW(),?,?,?,?,?,?)";
    private $SQLDELETEUPDATE = "UPDATE tpl_supplier_accreditations SET `REC_ACTION` = ?  WHERE REC_ID = ? ";
    private $SQLUPDATE = "UPDATE tpl_supplier_accreditations SET  REC_DATETIME = NOW(), REC_TIMESTAMP = NOW(), NAME = ?, TYPE = ?, DATE_ACHIEVED = NOW(),  ISSUED_BY = ?, YEAR_WON = ?, CERTIFICATE_NUMBER = ?, ACCRED_LOGO_URL = ?, ACCRED_LOGO_LINK = ? WHERE (REC_ID = ?)";
    private $SQLDelete = "DELETE FROM tpl_supplier_accreditations where (REC_ID = ?)";
    
    function delete($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLDelete);
            $stmt->execute($param_arr);            
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }
    function update($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLUPDATE);
            $stmt->execute($param_arr);            
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }
    function select($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLSELECT);
            $stmt->execute($param_arr);
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }
    function insert($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLInsert);
            $stmt->execute($param_arr);            
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }
    function deleteUpdate($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLDELETEUPDATE);
            $stmt->execute($param_arr);
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }
}

?>
