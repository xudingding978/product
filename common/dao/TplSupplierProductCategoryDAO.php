<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once $path_doc_root . "/config.php";

class TplSupplierProductCategoryDAO {

    private $SQLSELECTINSERT = "INSERT INTO tpl_supplier_category (REC_DATETIME, REC_TIMESTAMP, SUPPLIER_REC_ID, CATEGORY_REC_ID, IS_LOGO_LISTING) select REC_DATETIME, REC_TIMESTAMP, SUPPLIER_REC_ID, CATEGORY_REC_ID, IS_LOGO_LISTING from tpl_shadow_supplier_product_category where REC_ID= ?";
    private $SQLSELECTUPDATE = "UPDATE tpl_supplier_category SET REC_DATETIME = ?, REC_TIMESTAMP = ?,SUPPLIER_REC_ID = ?, CATEGORY_REC_ID = ?, IS_LOGO_LISTING = ? WHERE REC_ID = ?";
    private $SQLDELETE = "DELETE FROM tpl_supplier_category WHERE REC_ID = ?";
    private $SQLSELECT = "SELECT * FROM tpl_supplier_category WHERE SUPPLIER_REC_ID = ?";

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

    function selectInsert($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLSELECTINSERT);
            $stmt->execute($param_arr);
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

    function selectUpdate($dbconn, $param_arr) {
        try {
            $tplshadowsupplierkeypersonnel = new TplShadowSupplierKeyPersonnelDAO();
            $keypersonneldata = $tplshadowsupplierkeypersonnel->selectFilter($dbconn, $param_arr);

            $stmt = $dbconn->prepare($this->SQLSELECTUPDATE);
            $stmt->execute($keypersonneldata);
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

    function delete($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLDELETE);
            $stmt->execute($param_arr);
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

}

?>
