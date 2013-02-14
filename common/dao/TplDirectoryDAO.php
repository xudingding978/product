<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once $path_doc_root . "/config.php";
require_once $path_doc_root .'/common/util/BaseDAO.php';

class TplDirectoryDAO extends BaseDAO{
    
    private $_SQLSELECT =" SELECT * FROM tpl_directory WHERE REC_ID =?";
    private $_SQLSELECTCOMPLETEDIRECTORY = <<<'QUERY'
        SELECT d.NAME, d.DIRECTORY_DESC, dp.DIRECTORY_PERIOD_NAME, dp.DIRECTORY_PERIOD_CODE, dp.DIRECTORY_YEAR, dp.DIRECTORY_PERIOD, dp.DIRECTORY_PERIOD_TYPE, dp.DIRECTORY_PERIOD_START, dp.DIRECTORY_PERIOD_END
        FROM {DB_NAME}.{DB_PREFIX}_directory d INNER JOIN {DB_PREFIX}_directory_period dp ON d.DIRECTORY_PERIOD_REC_ID = dp.REC_ID WHERE d.REC_ID = ?;            
QUERY;
    private $_SQLINSERT = <<<'QUERY'
            INSERT INTO role (ROLE_ID,ROLE_NAME) VALUES(?,?);
QUERY;
    private $_SQLDELETE = <<<'QUERY'
            INSERT INTO user (USER_ID,USER_NAME) VALUES(?,?);
QUERY;
    private $_SQLSELECTDIRECTORIES = <<<'QUERY'
            SELECT REC_ID, NAME, DIRECTORY_DESC FROM tpl_directory;
QUERY;
      
    
    function insert($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->_SQLINSERT);
            $stmt->execute($param_arr);
        } catch (Exception $ex) {
            throw new PDOException($ex);
        }
    }

    function select($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->_SQLSELECT);
            //error_log("SQL.................................:".$this->_SQLSELECT);
            $stmt->execute($param_arr);
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }
    
    function selectCompleteDirectory($dbconn, $param_arr) {
        try {
            $stmt = $this->parseFilterValues($this->_SQLSELECTCOMPLETEDIRECTORY);
            $stmt = $dbconn->prepare($stmt);
            $stmt->execute($param_arr);
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }
    
    function selectDirectories($dbconn) {
        try {
            //$stmt = $this->parseFilterValues($this->_SQLSELECTDIRECTORIES);
            //error_log(var_export($stmt, true));
            $stmt = $dbconn->prepare($this->_SQLSELECTDIRECTORIES);
            //error_log(var_export($stmt,true));
            $stmt->execute();
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

    function delete($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->_SQLDELETE);
            $stmt->execute($param_arr);
        } catch (Exception $ex) {
            throw new PDOException($ex);
        }
    }

}

?>
