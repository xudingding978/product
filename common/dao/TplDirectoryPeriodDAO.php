<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once $path_doc_root . "/config.php";
include_once $path_doc_root . '/common/util/BaseDAO.php';

class TplDirectoryPeriodDAO extends BaseDAO {

    private $_SQLDEFAULTYEARS = <<<'QUERY'
            SELECT dp.REC_ID as REC_ID, dp.DIRECTORY_YEAR, dp.DIRECTORY_PERIOD_START as START_DATE, dp.DIRECTORY_PERIOD_END as END_DATE, dp.DIRECTORY_PERIOD_NAME
            FROM {DB_NAME}.{DB_PREFIX}_directory d INNER JOIN {DB_NAME}.{DB_PREFIX}_directory_period dp ON d.REC_ID=dp.DIRECTORY_REC_ID 
            WHERE d.REC_ID = ? and dp.IS_DEFAULT=1 ORDER BY dp.DIRECTORY_YEAR DESC;
QUERY;
    private $_SQLSelectPeriods = <<<'QUERY'
            SELECT dp.REC_ID as REC_ID, dp.DIRECTORY_YEAR as CURRENT_YEAR, dp.DIRECTORY_PERIOD_START as START_DATE, dp.DIRECTORY_PERIOD_END as END_DATE, dp.IS_DEFAULT, dp.DIRECTORY_PERIOD_NAME, 
            dp.DIRECTORY_PERIOD, dp.DIRECTORY_PERIOD_TYPE 
            FROM {DB_NAME}.{DB_PREFIX}_directory d INNER JOIN {DB_NAME}.{DB_PREFIX}_directory_period dp ON d.REC_ID=dp.DIRECTORY_REC_ID 
            WHERE d.REC_ID = ? ORDER BY dp.DIRECTORY_PERIOD_START ASC;
QUERY;
    private $_SQLSelectDirPeriodSummary = <<<'QUERY'
            SELECT dp.DIRECTORY_YEAR, dp.DIRECTORY_PERIOD_NAME, dp.DIRECTORY_PERIOD, dp.DIRECTORY_PERIOD_TYPE FROM tpl_directory_period dp WHERE dp.REC_ID = ?
QUERY;
    private $_SQLSelectDirPeriodsAdditionalOffers = <<<'QUERY'
            SELECT REC_ID,NAME,DESCRIPTION,COST_EXCL_GST,PERIOD_TYPE_COST_EXCL_GST FROM tpl_directory_period_additional_offering  where DIRECTORY_PERIOD_REC_ID=? order by REC_ID;
QUERY;
    private $_SQLSelectDirPeriodsDetail = <<<'QUERY'
           SELECT dir_per.REC_ID as REC_ID,dir_per.DIRECTORY_PERIOD_START as DIRECTORY_PERIOD_START,dir_per.DIRECTORY_PERIOD_END as DIRECTORY_PERIOD_END,
           dir_per.IS_MULTI_PAYMENT as IS_MULTI_PAYMENT, dir_per.DIRECTORY_PERIOD_TYPE as PAY_TYPE, dir_per.DIRECTORY_YEAR as YEAR, 
           (SELECT NAME as NAME FROM tpl_directory WHERE REC_ID=dir_per.DIRECTORY_REC_ID) as NAME,
           (Select DIRECTORY_DESC as DESCRI from tpl_directory where REC_ID=dir_per.DIRECTORY_REC_ID) AS DESCRI,
           offer.NAME as PACK_NAME, offer.COST_EXCL_GST,offer.PERIOD_TYPE_COST_EXCL_GST,offer.TAX_RATE  
           FROM tpl_directory_period  dir_per INNER JOIN tpl_directory_period_offering offer on dir_per.REC_ID= offer.DIRECTORY_PERIOD_REC_ID order by dir_per.REC_ID;
QUERY;
    private $_SQLSelectDirDetail = "SELECT REC_ID as REC_ID,(Select NAME as NAME from tpl_directory where REC_ID=DIRECTORY_REC_ID) as NAME,DIRECTORY_YEAR  FROM tpl_directory_period where REC_ID=?";

    function selectDefaultYears($dbconn, $param_arr) {
        try {
            $stmt = $this->parseFilterValues($this->_SQLDEFAULTYEARS);
            $stmt = $dbconn->prepare($stmt);
            $stmt->execute($param_arr);
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

    function selectPeriodsByDirRecId($dbconn, $param_arr) {
        try {
            $stmt = $this->parseFilterValues($this->_SQLSelectPeriods);
            $stmt = $dbconn->prepare($stmt);
            $stmt->execute($param_arr);
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

    function selectDirPeriodSummary($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->_SQLSelectDirPeriodSummary);
            //error_log(var_export($stmt,true));
            $stmt->execute($param_arr);
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

    function selectDirPeriodsDetail($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->_SQLSelectDirPeriodsDetail);
            $stmt->execute();
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

    function selectDirPeriodsAdditionalOffers($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->_SQLSelectDirPeriodsAdditionalOffers);
            $stmt->execute($param_arr);
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

    function selectDirDetail($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->_SQLSelectDirDetail);
            $stmt->execute($param_arr);
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

}

function test() {
    echo 'ttttttttttttttttttttttt';
}
?>
