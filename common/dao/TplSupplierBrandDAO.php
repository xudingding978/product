<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once $path_doc_root . "/config.php";


class TplSupplierBrandDAO {

private $SQLSELECTINSERT = "INSERT INTO tpl_supplier_brand (REC_DATETIME,REC_TIMESTAMP,SUPPLIER_REC_ID,BRAND_REC_ID,IS_LOGO_LISTING) SELECT REC_DATETIME,REC_TIMESTAMP,SUPPLIER_REC_ID,BRAND_REC_ID,IS_LOGO_LISTING FROM tpl_shadow_supplier_brand WHERE REC_ID = ?";
private $SQLSELECTUPDATE = "UPDATE tpl_supplier_brand SET REC_DATETIME = ?, REC_TIMESTAMP = ?,SUPPLIER_REC_ID = ?,BRAND_REC_ID = ?,IS_LOGO_LISTING = ? WHERE REC_ID = ?";
private $SQLDELETE = "DELETE FROM tpl_supplier_brand WHERE REC_ID = ?"; 
private $SQLSELECT = "SELECT * FROM tpl_supplier_brand WHERE SUPPLIER_REC_ID = ?";

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
            $tplshadowsupplierbrand =new TplShadowSupplierBrandDAO();
            $branddata=$tplshadowsupplierbrand->selectFilter($dbconn, $param_arr);
            
            $stmt = $dbconn->prepare($this->SQLSELECTUPDATE);
            $stmt->execute($branddata);           
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
