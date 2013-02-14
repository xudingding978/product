<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once $path_doc_root . "/config.php";
require_once $path_doc_root . '/common/util/BaseDAO.php';

class TplShadowRootDAO extends BaseDAO {

    private $SQLSELECTMERGE = "SELECT * FROM tpl_shadow_root where (STATE = 'MERGED') AND (DIRECTORY_REC_ID = ?) AND (DIRECTORY_YEAR = ?)";
    private $SQLSELECT = "SELECT * FROM tpl_shadow_root WHERE REC_ID = ?";
    private $SQLSELECTPERIOD = "SELECT * FROM tpl_shadow_root WHERE DIRECTORY_PERIOD_REC_ID = ?";
    private $SQLUPDATE = "UPDATE tpl_shadow_root SET STATE=? WHERE REC_ID = ?";
//    private $SQL_InsertNewClient = <<<'QUERY'
//            INSERT INTO tpl_shadow_root (`REC_DATETIME`, `REC_TIMESTAMP`, `CLIENT_REC_ID`,`DIRECTORY_REC_ID`, `DIRECTORY_PERIOD_REC_ID`, `STATE`, `USERNAME`, `PASSWORD`, 
//            `USER_EMAIL_ADDRESS`,`LISTING_COST_EXCL_GST`,`LISTING_COST_INCL_GST`,`TRANSACTION_TOTAL_EXCL_GST`,`TRANSACTION_TOTAL_INCL_GST`,`TOTAL_PAID_TO_DATE`) 
//            VALUE(NOW(),NOW(),?,?,?,'OPEN',?,?,?,0.00,0.00,0.00,0.00,0.00);
//QUERY;
    private $SQLClientSelect = "select * ,(select DIRECTORY_YEAR from tpl_directory_period where REC_ID=DIRECTORY_PERIOD_REC_ID) as DIRECTORY_YEAR from tpl_shadow_root where (CLIENT_REC_ID = ?)";
    private $SQLUPDATEALL = "UPDATE tpl_shadow_root SET SHADOW_DIRECTORY_OFFERING_REC_ID =?, TRANSACTION_TOTAL_EXCL_GST = ?, TRANSACTION_TOTAL_INCL_GST = ? WHERE REC_ID = ?";
    private $SQLSelectDirectorySummaryInfo = <<<'QUERY'
        SELECT sr.STATE, COUNT(sr.REC_ID) as NUM, CAST(CAST(SUM(sdpo.COST_EXCL_GST) AS DECIMAL(9,0)) AS CHAR) AS TOTALREVENUE 
        FROM {DB_NAME}.{DB_PREFIX}_shadow_root sr 
        INNER JOIN {DB_NAME}.{DB_PREFIX}_shadow_directory_period_offering sdpo ON sr.REC_ID = sdpo.SHADOW_ROOT_REC_ID 
        WHERE sr.DIRECTORY_PERIOD_REC_ID = ? GROUP BY STATE;
QUERY;
    
    private $SQL_InsertNewClientPeriod = "INSERT INTO tpl_shadow_root (REC_DATETIME, REC_TIMESTAMP, CLIENT_REC_ID, DIRECTORY_PERIOD_REC_ID,STATE, LISTING_COST_EXCL_GST,
                    LISTING_COST_INCL_GST, TRANSACTION_TOTAL_EXCL_GST, TRANSACTION_TOTAL_INCL_GST,
                    TOTAL_PAID_TO_DATE) 
                    VALUE( NOW(), NOW(),?,?,'OPEN', 0, 0, 0, 0, 0)";

    
    private $SQL_SelectDirectoryList = <<<'QUERY'
             SELECT sr.REC_ID as REC_ID,(SELECT NAME from {DB_NAME}.{DB_PREFIX}_directory where REC_ID=dp.DIRECTORY_REC_ID ) AS DIR_NAME,
              ( SELECT count(*) FROM {DB_NAME}.{DB_PREFIX}_shadow_supplier_key_personnel where shadow_supplier_rec_id= CLIENT_REC_ID) AS KEY_PERSONNEL_NUMBER,
             ( SELECT count(*) FROM {DB_NAME}.{DB_PREFIX}_shadow_supplier_category where shadow_supplier_rec_id= CLIENT_REC_ID) AS CATEGORIES_NUMBER,
             ( SELECT count(*) FROM {DB_NAME}.{DB_PREFIX}_shadow_supplier_branch where shadow_supplier_rec_id= CLIENT_REC_ID) AS BRANCHES_NUMBER,
             dp.DIRECTORY_YEAR as DIR_YEAR, dp.DIRECTORY_PERIOD_START as START_DATE, dp.DIRECTORY_PERIOD_END AS END_DATE, dp.REC_ID AS DP_REC_ID 
             FROM {DB_NAME}.{DB_PREFIX}_shadow_root sr INNER JOIN  {DB_NAME}.{DB_PREFIX}_directory_period dp on sr.DIRECTORY_PERIOD_REC_ID=dp.REC_ID where CLIENT_REC_ID=?;
QUERY;

    //select sr.REC_ID as REC_ID,(Select NAME from tpl_directory where REC_ID=dp.DIRECTORY_REC_ID ) as DIR_NAME,( select count(*) from db_live.tpl_shadow_supplier_key_personnel where shadow_supplier_rec_id= CLIENT_REC_ID) as Key_Personell_Number,( select count(*) from db_live.tpl_shadow_supplier_category where shadow_supplier_rec_id= CLIENT_REC_ID) as CATEGORIES_NUMBER,( select count(*) from db_live.tpl_shadow_supplier_branch where shadow_supplier_rec_id= CLIENT_REC_ID) as BRANCHES_NUMBER,dp.DIRECTORY_YEAR as DIR_YEAR,dp.DIRECTORY_PERIOD_START as START_DATE,dp.DIRECTORY_PERIOD_END as END_DATE,dp.REC_ID as DP_REC_ID from tpl_shadow_root sr INNER JOIN  tpl_directory_period dp on sr.DIRECTORY_PERIOD_REC_ID=dp.REC_ID where CLIENT_REC_ID=?";


    function selectDirectoryList($dbconn, $param_arr) {
        try {
            $stmt = $this->parseFilterValues($this->SQL_SelectDirectoryList);
            error_log($stmt);
            $stmt = $dbconn->prepare($stmt);
            $stmt->execute($param_arr);
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

    function selectPeriod($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLSELECTPERIOD);
            $stmt->execute($param_arr);
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

    function selectClient($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLClientSelect);
            $stmt->execute($param_arr);
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

    function insertNewClientPeriod($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQL_InsertNewClientPeriod);
            $stmt->execute($param_arr);
            return $dbconn->lastInsertId();
        } catch (Exception $ex) {
            error_log("ex:" . $ex);
            echo $ex;
            throw new PDOException($ex);
        }
    }

    function selectMerge($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLSELECTMERGE);
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

    function update($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLUPDATE);
            $stmt->execute($param_arr);
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

    function updateAll($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLUPDATEALL);
            $stmt->execute($param_arr);
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

    function selectDirectorySummaryInfo($dbconn, $param_arr) {
        try {
            $stmt = $this->parseFilterValues($this->SQLSelectDirectorySummaryInfo);
            $stmt = $dbconn->prepare($stmt);
            $stmt->setFetchMode(PDO::FETCH_ASSOC);
            $stmt->execute($param_arr);
            $result = $stmt->fetchAll();
            foreach ($result as $k => $v) {
                unset($result[$k]);
                $new_key = $v['STATE'];
                $result[$new_key] = $v;
            }
            return $result;
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

}

?>
