<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once $path_doc_root . "/config.php";


class TplSupplierDirectoryDAO {
    private $SQLUPDATE="UPDATE tpl_supplier_directory SET DIRECTORY_YEAR = ?,SHADOW_ROOT_REC_ID = ? WHERE (SUPPLIER_REC_ID = ?) AND (DIRECTORY_REC_ID = ?)";
    private $SQLINSERT="INSERT INTO tpl_supplier_directory(REC_DATETIME, REC_TIMESTAMP, SUPPLIER_REC_ID, DIRECTORY_REC_ID, DIRECTORY_YEAR, SHADOW_ROOT_REC_ID) VALUE (NOW(),NOW(),?,?,?,?)";
    private $SQLSELECT = "SELECT * FROM tpl_supplier_directory WHERE (SUPPLIER_REC_ID =?) AND (DIRECTORY_REC_ID = ?)";

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
    function update($dbconn, $param_arr) {       
        try {            
            $stmt = $dbconn->prepare($this->SQLUPDATE);           
            $stmt->execute($param_arr);            
        } catch (Exception $ex) {
            throw new PDOException($ex);
        }
    }
    function insert($dbconn, $param_arr) {       
        try {            
            $stmt = $dbconn->prepare($this->SQLINSERT);           
            $stmt->execute($param_arr);            
        } catch (Exception $ex) {
            throw new PDOException($ex);
        }
    }
 
}

?>
