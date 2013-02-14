<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once $path_doc_root . "/config.php";

class TplShadowSupplierBrandMediaDAO {

    private $SQLSelect = <<<'QUERY'
            SELECT SUPPLIER_MEDIA_ID FROM tpl_shadow_supplier_brand_media where SHADOW_SUPPLIER_BRAND_ID=?  
QUERY;
    private $SQLInsert = <<<'QUERY'
            INSERT INTO tpl_shadow_supplier_brand_media (REC_DATETIME,SHADOW_SUPPLIER_BRAND_ID,SUPPLIER_MEDIA_ID)VALUES(NOW(),?,?)
QUERY;
    private $SQLDelete = "DELETE FROM tpl_shadow_supplier_brand_media where (SHADOW_SUPPLIER_BRAND_ID = ?)";

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
