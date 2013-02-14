<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once $path_doc_root . "/config.php";

class TplShadowSupplierCategoryproductMediaDAO {

    private $SQLSelect = <<<'QUERY'
            SELECT * FROM tpl_shadow_supplier_categoryproduct_media where SHADOW_SUPPLIER_ID=?  
QUERY;
    private $SQLCategorySelect = <<<'QUERY'
            SELECT SUPPLIER_MEDIA_REC_ID FROM tpl_shadow_supplier_categoryproduct_media where SHADOW_SUPPLIER_CATEGORYPRODUCT_ID=?  
QUERY;
    private $SQLInsert = <<<'QUERY'
            INSERT INTO tpl_shadow_supplier_categoryproduct_media(IS_MANDOTORY,REC_DATETIME,SHADOW_SUPPLIER_CATEGORYPRODUCT_ID,
            SUPPLIER_MEDIA_REC_ID,SHADOW_SUPPLIER_ID) VALUES(0,NOW(),?,?,?) 
QUERY;
    private $SQLDelete = "DELETE FROM tpl_shadow_supplier_categoryproduct_media where (SHADOW_SUPPLIER_CATEGORYPRODUCT_ID = ?)";

    function delete($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLDelete);
            $stmt->execute($param_arr);
        } catch (Exception $ex) {
            error_log($ex);
            echo $ex;
            throw new PDOException($ex);
        }
    }

    function select($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLSelect);
            $stmt->execute($param_arr);
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }
       function categorySelect($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLCategorySelect);
            $stmt->execute($param_arr);
            return $stmt->fetchAll(PDO::FETCH_COLUMN, 0);
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    } 

    function insert($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLInsert);
            $stmt->execute($param_arr);
            return $dbconn->lastInsertId();
        } catch (Exception $ex) {
            error_log($ex);
            echo $ex;
            throw new PDOException($ex);
        }
    }

}

?>
