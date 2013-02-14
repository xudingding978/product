<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
require $path_doc_root . "/config.php";

class TplSupplierCategoryMediaDAO {

    private $SQLInsert = "INSERT INTO tpl_supplier_category_media(REC_DATETIME,SUPPLIER_CATEGORY_REC_ID,SUPPLIER_MEDIA_REC_ID) VALUES (NOW(),?,?)";
    private $SQLSELECT = "SELECT * FROM tpl_supplier_category_media where SUPPLIER_CATEGORY_REC_ID=? ";
    private $SQLDelete = "DELETE FROM tpl_supplier_category_media where (SUPPLIER_CATEGORY_REC_ID = ?) and (SUPPLIER_MEDIA_REC_ID = ?)";
    private $SQLDeleteAll = "DELETE FROM tpl_supplier_category_media where (SUPPLIER_CATEGORY_REC_ID = ?)";
    private $SQLCategoryVideoSelect = "SELECT SUPPLIER_MEDIA_REC_ID FROM tpl_supplier_category_media where SUPPLIER_CATEGORY_REC_ID=? ";

    function deleteAll($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLDeleteAll);
            $stmt->execute($param_arr);
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

    function delete($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLDelete);
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
            error_log($ex);
            throw new PDOException($ex);
        }
    }

    function categoryVideoSelect($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLCategoryVideoSelect);
            $stmt->execute($param_arr);
            return $stmt->fetchAll(PDO::FETCH_COLUMN, 0);
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

}

?>
