<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once $path_doc_root . "/config.php";

class TplShadowSupplierKeyPersonnelBrandDAO {

    private $SQLUPDATE = "UPDATE tpl_shadow_supplier_key_personnel_brand SET `MASTER_REC_ID`=?,`REC_DATETIME` = NOW(), `REC_TIMESTAMP` = NOW(), `REC_ACTION` = NULL WHERE `SHADOW_REC_ID` = ? AND `SUPPLIER_KEY_PERSONNEL_REC_ID` = ? AND `SUPPLIER_BRAND_REC_ID` = ?";
    private $SQLSELECTINSERT = "INSERT INTO tpl_shadow_supplier_key_personnel_brand(`SHADOW_REC_ID`, `MASTER_REC_ID`, `REC_DATETIME`, `REC_TIMESTAMP`, `REC_ACTION`, `SUPPLIER_KEY_PERSONNEL_REC_ID`, `SUPPLIER_BRAND_REC_ID`, `ROLE`, `ORDER`) SELECT ?, `REC_ID`,NOW(),NOW(),NULL, `SUPPLIER_KEY_PERSONNEL_REC_ID`, `SUPPLIER_BRAND_REC_ID`, `ROLE`, `ORDER` FROM tpl_supplier_key_personnel_brand WHERE (SUPPLIER_KEY_PERSONNEL_REC_ID =?)";

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

    function update($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLUPDATE);
            $stmt->execute($param_arr);
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

}

?>
