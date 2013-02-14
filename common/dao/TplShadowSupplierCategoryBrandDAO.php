<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once $path_doc_root . "/config.php";

class TplShadowSupplierCategoryBrandDAO {


    private $SQLSELECT = "SELECT SHADOW_SUPPLIER_BRAND_ID FROM tpl_shadow_supplier_category_brand WHERE (SUPPLIER_CATEGORY_ID = ?)";
    private $SQLINSERT = "INSERT INTO tpl_shadow_supplier_category_brand(REC_DATETIME,SHADOW_SUPPLIER_BRAND_ID,SUPPLIER_CATEGORY_ID)VALUES(NOW(),?,?)";
    //private $SQLUpdate = "update tpl_shadow_supplier_category_brand set REC_TIMESTAMP = NOW(),REC_ACTION = ?, BRAND_REC_ID = ?, IS_LOGO_LISTING = ? where (REC_ID =?)";
    private $SQLDelete = "DELETE FROM tpl_shadow_supplier_category_brand where (SHADOW_SUPPLIER_BRAND_ID = ?) and (SUPPLIER_CATEGORY_ID = ?)";

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

    function insert($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLINSERT);
            $stmt->execute($param_arr);
            return $dbconn->lastInsertId();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }    
    }

    function select($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLSELECT);
            $stmt->execute($param_arr);
            return $stmt->fetchAll(PDO::FETCH_COLUMN, 0);
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

}

?>
