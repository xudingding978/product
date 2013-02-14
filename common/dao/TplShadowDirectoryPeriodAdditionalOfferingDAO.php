<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once $path_doc_root . "/config.php";


class TplShadowDirectoryPeriodAdditionalOfferingDAO {

private $SQLSELECTINSERT = "INSERT INTO tpl_shadow_directory_additional_offering (`SHADOW_REC_ID`,`MASTER_REC_ID`, `REC_DATETIME`, `REC_TIMESTAMP`, `REC_ACTION`,  `CODE`, `NAME`, `DESCRIPTION`, `COST_EXCL_GST`, `GST_RATE`) SELECT ?,REC_ID,NOW(), NOW(), NULL , `CODE`, `NAME`, `DESCRIPTION`, `COST_EXCL_GST`, `GST_RATE` FROM tpl_directory_additional_offering WHERE (REC_ID=?)";
private $SQLInsert = "INSERT INTO tpl_shadow_directory_period_additional_offering(CODE,COST_EXCL_GST,DESCRIPTION,GST_RATE,
                       NAME,REC_ACTION,REC_DATETIME,REC_TIMESTAMP,SHADOW_ROOT_REC_ID)VALUES('ADDOFFER',?,?,15.00,?,'INSERT',NOW(),NOW(),?)";
    function selectInsert($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLSELECTINSERT);
            $stmt->execute($param_arr);
            $result = $stmt->fetch(PDO::FETCH_ASSOC);           
            return $result;
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
            echo $ex;
            throw new PDOException($ex);
        }
    }

}

?>
