<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once $path_doc_root . "/config.php";
include_once $path_doc_root .'/common/util/BaseDAO.php';


class TplShadowDirectoryPeriodOfferingDAO extends BaseDAO {

    private $SQL_AddNewShadowDirectoryOffer = <<<'QUERY'
        
QUERY;

private $SQLSELECTINSERT = <<<'QUERY'
        INSERT INTO tpl_shadow_directory_offering (`SHADOW_REC_ID`,`MASTER_REC_ID`, `REC_DATETIME`, `REC_TIMESTAMP`, `REC_ACTION`, `NAME`, `DESCRIPTION`, 
        `COST_EXCL_GST`, `GST_RATE`, `MAX_BRANCH_COUNT`,`MAX_KEY_PERSONNEL_COUNT`, `MAX_BRAND_COUNT`, `MAX_PRODUCT_CATEGORY_COUNT`) 
        SELECT ?,REC_ID,NOW(), NOW(), NULL, 'NAME',DESCRIPTION,COST_EXCL_GST,GST_RATE,MAX_BRANCH_COUNT,MAX_KEY_PERSONNEL_COUNT,MAX_BRAND_COUNT,MAX_PRODUCT_CATEGORY_COUNT 
        FROM tpl_directory_offering WHERE SHADOW_REC_ID =?;
QUERY;
private $SQLInsert = <<<'QUERY'
        INSERT INTO tpl_shadow_directory_period_offering (SHADOW_ROOT_REC_ID,  REC_DATETIME,REC_TIMESTAMP, NAME,DESCRIPTION, COST_EXCL_GST, GST_RATE, MAX_BRANCH_COUNT, MAX_KEY_PERSONNEL_COUNT,MAX_BRAND_COUNT, MAX_PRODUCT_CATEGORY_COUNT ) 
         values(?,NOW(),NOW(),?,?,?, 15.0, 0, 0, 0,?);
QUERY;
private $SQLSELECTJOIN = "SELECT sdo.NAME FROM tpl_shadow_root sr INNER JOIN tpl_shadow_directory_offering sdo ON (sr.SHADOW_DIRECTORY_OFFERING_REC_ID = sdo.REC_ID) WHERE sr.DIRECTORY_YEAR = ? AND sr.DIRECTORY_REC_ID = ? AND sr.CLIENT_REC_ID = ?";
private $_SELECT_Dir_Per_Offer = "SELECT *  FROM tpl_shadow_directory_period_offering WHERE SHADOW_ROOT_REC_ID = ?";


    function insert($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLInsert);
            $stmt->execute($param_arr);
            return $dbconn->lastInsertId();;
        } catch (Exception $ex) {
            error_log($ex) ;
            throw new PDOException($ex);
        }
    }
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
    function selectJoin($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLSELECTJOIN);
            $stmt->execute($param_arr);
            return $stmt->fetchAll();
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
    function selectOffer($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->_SELECT_Dir_Per_Offer);
            $stmt->execute($param_arr);
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }
    function selectExceptName($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLSELECTEXCEPTNAME);
            $stmt->execute($param_arr);
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }
}

?>
