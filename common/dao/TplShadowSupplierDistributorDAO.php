<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once $path_doc_root . "/config.php";

class TplShadowSupplierDistributorDAO {

    private $SQLSELECT = "SELECT * FROM tpl_shadow_supplier_distributor WHERE (SHADOW_SUPPLIER_REC_ID = ?) and REC_ACTION!='DELETE' ORDER BY REC_ID";
    private $SQLUPDATE = "UPDATE tpl_shadow_supplier_distributor SET `REC_DATETIME` = NOW(), `REC_TIMESTAMP` = NOW(), `REC_ACTION` = ? ,NAME=? ,TELEPHONE_NO=?  WHERE REC_ID = ?";
    private $SQLSELECTINSERT = "INSERT INTO tpl_shadow_supplier_distributor (`SHADOW_REC_ID`,`MASTER_REC_ID`, `REC_DATETIME`, `REC_TIMESTAMP`, `REC_ACTION`, `SUPPLIER_REC_ID`, `DIRECTORY_REC_ID`, `NAME`, `ORDER`, `TELEPHONE_NO`) SELECT 1,`REC_ID`,NOW(),NOW(),NULL, `SUPPLIER_REC_ID`, `DIRECTORY_REC_ID`, `NAME`, `ORDER`, `TELEPHONE_NO` FROM tpl_supplier_distributor WHERE (SUPPLIER_REC_ID = ?)";
    private $SQLINSERT = "INSERT INTO tpl_shadow_supplier_distributor(REC_DATETIME,REC_TIMESTAMP,REC_ACTION,SHADOW_SUPPLIER_REC_ID,NAME,TELEPHONE_NO)VALUES(NOW(),NOW(),?,?,?,?)";
    private $SQLDELETEUPDATE = "UPDATE tpl_shadow_supplier_distributor SET `REC_DATETIME` = NOW(), `REC_TIMESTAMP` = NOW(), `REC_ACTION` = ?  WHERE REC_ID = ?";  
    
    function selectInsert($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLSELECTINSERT);
            $stmt->execute($param_arr);
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }
    function insert($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLINSERT);
            $stmt->execute($param_arr);
            return $stmt->fetchAll();
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

}

?>
