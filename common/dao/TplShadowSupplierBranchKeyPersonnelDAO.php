<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once $path_doc_root . "/config.php";

class TplShadowSupplierBranchKeyPersonnelDAO {

    private $SQLUPDATE = "UPDATE tpl_shadow_supplier_branch_key_personnel SET `MASTER_REC_ID` = ?,`REC_DATETIME` = NOW(), `REC_TIMESTAMP` = NOW(), `REC_ACTION` = NULL  WHERE `SHADOW_REC_ID` = ?  AND `SUPPLIER_BRANCH_REC_ID` = ? AND `SUPPLIER_KEY_PERSONNEL_REC_ID` = ?";
    private $SQLSELECTINSERT = "INSERT INTO tpl_shadow_supplier_branch_key_personnel(`SHADOW_REC_ID`, `MASTER_REC_ID`, `REC_DATETIME`, `REC_TIMESTAMP`, `REC_ACTION`, `SUPPLIER_BRANCH_REC_ID`, `SUPPLIER_KEY_PERSONNEL_REC_ID`, `ORDER`) SELECT ?, `REC_ID`, NOW(),NOW(),NULL, `SUPPLIER_BRANCH_REC_ID`, `SUPPLIER_KEY_PERSONNEL_REC_ID`, `ORDER` FROM tpl_supplier_branch_key_personnel WHERE (SUPPLIER_KEY_PERSONNEL_REC_ID = ?)";

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
