<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once $path_doc_root . "/config.php";

class TplProduct {

    private $SQLSELECTINSERT = "INSERT INTO tpl_product (REC_DATETIME,REC_TIMESTAMP,PRODUCT_CATEGORY_REC_ID,SUPPLIER_REC_ID,DIRECTORY_REC_ID,LABEL_NAME,VARIETAL,VINTAGE, REGION_OF_ORIGIN,COUNTRY_OF_ORIGIN ) select REC_DATETIME,REC_TIMESTAMP,PRODUCT_CATEGORY_REC_ID,SUPPLIER_REC_ID,DIRECTORY_REC_ID,LABEL_NAME,VARIETAL,VINTAGE, REGION_OF_ORIGIN,COUNTRY_OF_ORIGIN from tpl_shadow_product where REC_ID =?";
    private $SQLSELECTUPDATE = "UPDATE tpl_product SET REC_DATETIME = ?, REC_TIMESTAMP = ?, PRODUCT_CATEGORY_REC_ID = ?, SUPPLIER_REC_ID=?, DIRECTORY_REC_ID = ?, LABEL_NAME = ?, VARIETAL = ?, VINTAGE = ?, REGION_OF_ORIGIN = ?,COUNTRY_OF_ORIGIN = ? WHERE REC_ID = ?";
    private $SQLDELETE = "DELETE FROM tpl_product WHERE REC_ID = ?";
    private $SQLSELECT = "SELECT * FROM tpl_product WHERE SUPPLIER_REC_ID = ?";
private $_SQLSelectForFrontGrid = <<<'QUERY'
            SELECT DISTINCT Label_Name as Label, Country_of_Origin AS Origin FROM tpl_supplier_category_product ORDER BY REC_ID DESC
QUERY;
    private $_SQLCountForFrontGrid = <<<'QUERY'
   SELECT count(*) FROM tpl_product   
QUERY;
    
    
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
      function selectForFrontGrid($para) {
        try {
            $dbconn = $para[0];           
            $limit = $para[2];
            $stmt = $dbconn->prepare($this->_SQLSelectForFrontGrid . $limit);
            $stmt->execute();
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

    function countForFrontGrid($para) {
        try {
            $dbconn = $para[0];
            $stmt = $dbconn->prepare($this->_SQLCountForFrontGrid);
            $stmt->execute();
            return $stmt->fetch();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

}

?>
