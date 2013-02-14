<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once $path_doc_root . "/config.php";


class TplShadowSupplierCategoryProductDAO {

    private $SQLSelect = <<<'QUERY'
            SELECT * FROM tpl_shadow_supplier_category_product where CATEGORY_REC_ID=? and SHADOW_SUPPLIER_REC_ID=? 
QUERY;
    private $SQLCategoryProductSelect = <<<'QUERY'
            SELECT * FROM tpl_shadow_supplier_category_product where REC_ID=? 
QUERY;
  
    private $SQLupdate = <<<'QUERY'
            UPDATE tpl_shadow_supplier_category_product 
            SET CATEGORY_REC_ID=?,
            PRODUCT_CHECKOUT_URL=?,
            DIRECTORY_REC_ID=?,
            PRODUCT_TITLE=?,
            REC_ACTION='UPDATE',
            REC_DATETIME=NOW(),
            REC_TIMESTAMP=NOW(),
            PRODUCT_DESCRIPTION=?,
            PRODUCT_VALUE_PRICE=?,
            PRODUCT_OFFER_PRICE=?,
            SHADOW_SUPPLIER_REC_ID=?,
            TEXT=''
            WHERE REC_ID=? 
QUERY;
   // SQLupdate   
    //$name, $desc, $pro_price,$pro_offer_price,$pro_checkout_url
    private $SQLInsert = <<<'QUERY'
            INSERT INTO tpl_shadow_supplier_category_product
            (CATEGORY_REC_ID,
            PRODUCT_CHECKOUT_URL,
            DIRECTORY_REC_ID,
            PRODUCT_TITLE,
            REC_ACTION,
            REC_DATETIME,
            REC_TIMESTAMP,            
            PRODUCT_DESCRIPTION,
            PRODUCT_VALUE_PRICE,
            PRODUCT_OFFER_PRICE,
            SHADOW_SUPPLIER_REC_ID,
            TEXT) VALUES(?,?,?,?,'INSERT',NOW(),NOW(),?,?,?,?,''); 
QUERY;
    private $SQLDelete = "DELETE FROM tpl_shadow_supplier_category_product where (REC_ID = ?)";

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

    function selectCategoryProduct($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLCategoryProductSelect);
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
            return $dbconn->lastInsertId();
        } catch (Exception $ex) {
            error_log($ex);
            echo $ex;
            throw new PDOException($ex);
        }
    }
    function update($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLupdate);
            $stmt->execute($param_arr);
            //return $dbconn->lastInsertId();
        } catch (Exception $ex) {
            error_log($ex);
            echo $ex;
            throw new PDOException($ex);
        }
    }

}

?>
