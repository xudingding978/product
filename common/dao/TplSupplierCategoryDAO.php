<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
require $path_doc_root . "/config.php";

class TplSupplierCategoryDAO {

   private $SQLInsert = "INSERT INTO tpl_supplier_category(CATEGORY_REC_ID,IS_LOGO_LISTING,REC_DATETIME,REC_TIMESTAMP,SUPPLIER_REC_ID) VALUES (?,'0',NOW(),NOW(),?)";
   private $SQLDelete = "DELETE FROM tpl_supplier_category where (CATEGORY_REC_ID = ?) and (SUPPLIER_REC_ID = ?)";

   private $SQLSelect = "SELECT * FROM tpl_supplier_category where (CATEGORY_REC_ID = ?) and (SUPPLIER_REC_ID = ?) ";
   private $SQLSelectSupplierCategories = "select tpl_category.NODE_ID from tpl_category inner join tpl_supplier_category on  tpl_category.REC_ID=tpl_supplier_category.CATEGORY_REC_ID where (SUPPLIER_REC_ID = ?) ";
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
            $stmt = $dbconn->prepare($this->SQLInsert);
            $stmt->execute($param_arr);
        } catch (Exception $ex) {
            error_log($ex);
            throw new PDOException($ex);
        }
    }

    function selectSupplierCategories($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLSelectSupplierCategories);
            $stmt->execute($param_arr);
            return $stmt->fetchAll(PDO::FETCH_COLUMN, 0);           
        } catch (Exception $ex) {
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

}

?>
