<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once $path_doc_root . "/config.php";
include_once $path_doc_root . '/common/util/BaseDAO.php';

class TplAdminUsersDAO extends BaseDAO {

    private $_SQLVerifyUserNameAndPassword = "SELECT ROLE_ID, DIRECTORY_PERIOD_REC_ID FROM tpl_admin_users WHERE USERNAME = ? AND PASSWORD = ?";
    private $_SQLUpdateSuccessfulLogin = <<<'QUERY'
            UPDATE {ADMIN_DB_NAME}.{DB_PREFIX}_admin_users SET SESSIONID = MD5(RAND()), LASTLOGIN = NOW() WHERE USERNAME = ? AND PASSWORD = ?;
QUERY;
    private $_SQLSelectAdminUserDetails = <<<'QUERY'
            SELECT au.REC_ID, au.SESSIONID, au.USERNAME, au.ROLE_ID, au.FIRSTNAME, au.LASTNAME, au.FRONTGRID_ID, au.DIRECTORY_PERIOD_REC_ID, d.NAME, 
            dp.DIRECTORY_YEAR asCURRENT_YEAR, d.REC_ID AS DIR_REC_ID, au.TENANT_ID
            FROM {ADMIN_DB_NAME}.{DB_PREFIX}_admin_users au
            INNER JOIN {DB_NAME}.{DB_PREFIX}_directory_period dp ON au.DIRECTORY_PERIOD_REC_ID = dp.REC_ID
            INNER JOIN {DB_NAME}.{DB_PREFIX}_directory d ON dp.DIRECTORY_REC_ID = d.REC_ID
            WHERE USERNAME =  ? AND PASSWORD = ?;
QUERY;
    private $_SQLSelectNewAdminUserDetails = <<<'QUERY'
            SELECT au.REC_ID, au.SESSIONID, au.USERNAME, au.ROLE_ID, au.FIRSTNAME, au.LASTNAME, au.FRONTGRID_ID, au.DIRECTORY_PERIOD_REC_ID, au.TENANT_ID 
            FROM {ADMIN_DB_NAME}.{DB_PREFIX}_admin_users au
            WHERE USERNAME =  ? AND PASSWORD = ?;
QUERY;
    private $_SQLSelectDirectoryDefaults = <<<'QUERY'
            SELECT au.REC_ID AS ADMIN_USER_REC_ID, au.DIRECTORY_PERIOD_REC_ID, 
            d.NAME AS DIRECTORY_NAME, d.CURRENT_YEAR AS DIRECTORY_CURRENT_YEAR, d.REC_ID AS DIRECTORY_REC_ID, 
            dp.DIRECTORY_PERIOD, dp.DIRECTORY_PERIOD_TYPE, dp.DIRECTORY_PERIOD_CODE, dp.DIRECTORY_PERIOD_NAME, dp.DIRECTORY_PERIOD_START, dp.DIRECTORY_PERIOD_END  
            FROM {ADMIN_DB_NAME}.{DB_PREFIX}_admin_users au 
            INNER JOIN {DB_NAME}.{DB_PREFIX}_directory_period dp ON au.DIRECTORY_PERIOD_REC_ID = dp.REC_ID
            INNER JOIN {DB_NAME}.{DB_PREFIX}_directory d ON dp.DIRECTORY_REC_ID = d.REC_ID
            WHERE au.REC_ID = ?;
QUERY;
    private $_SQLUpdateDefaultDirectoryPeriod = <<<'QUERY'
            UPDATE {ADMIN_DB_NAME}.{DB_PREFIX}_admin_users SET DIRECTORY_PERIOD_REC_ID = ? 
            WHERE REC_ID = ?;
QUERY;
    private $_SQLInsertUser = <<<'QUERY'
            INSERT INTO tpl_admin_users(ROLE_ID, USERNAME, PASSWORD, FIRSTNAME, LASTNAME, CREATED, CREATEDBY,TENANT_ID)
            VALUE(?, ?, ?, ?, ?, NOW(), ?,?);
QUERY;
    private $_SQLUserDetailsByID = <<<'QUERY'
                  SELECT * FROM tpl_admin_users WHERE REC_ID =?;
QUERY;
    private $_SQLUserDetailsUpdate = <<<'QUERY'
                  UPDATE tpl_admin_users SET ROLE_ID = ?, USERNAME = ?, PASSWORD = ?, FIRSTNAME = ?, LASTNAME = ? WHERE REC_ID = ?;
QUERY;
    private $_SQLDelete = <<<'QUERY'
                  DELETE FROM tpl_admin_users WHERE REC_ID = ?;
QUERY;
    private $_SQLFrontGridDefault = <<<'QUERY'
                  SELECT FRONTGRID_ID AS ITEM_ID FROM tpl_admin_users WHERE REC_ID = ?
QUERY;
    function selectFrontGridDefault($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->_SQLFrontGridDefault);
            $stmt->execute($param_arr);
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }
    
    function deleteUser($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->_SQLDelete);
            $stmt->execute($param_arr);
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    } 
    function updateUser($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->_SQLUserDetailsUpdate);
            $stmt->execute($param_arr);
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

    function selectUserDetailsByID($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->_SQLUserDetailsByID);
            $stmt->execute($param_arr);
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

    function insertUser($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->_SQLInsertUser);
            $stmt->execute($param_arr);
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

    function selectVerifyUserNameAndPassword($dbconn, $param_arr) {
        try {
            // $stmt = $this->parseFilterValues($this->_SQLVerifyUserNameAndPassword);
            $stmt = $dbconn->prepare($this->_SQLVerifyUserNameAndPassword);
            //error_log(var_export($stmt,true));
            $stmt->execute($param_arr);
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

    function updateSuccessfulLogin($dbconn, $param_arr) {
        try {
            $stmt = $this->parseFilterValues($this->_SQLUpdateSuccessfulLogin);
            $stmt = $dbconn->prepare($stmt);
            $stmt->execute($param_arr);
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

    function selectAdminUserDetails($dbconn, $param_arr) {
        try {
            $stmt = $this->parseFilterValues($this->_SQLSelectAdminUserDetails);
            $stmt = $dbconn->prepare($stmt);
            error_log(var_export($stmt, true));
            $stmt->execute($param_arr);
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

    function selectNewAdminUserDetails($dbconn, $param_arr) {
        try {
            $stmt = $this->parseFilterValues($this->_SQLSelectNewAdminUserDetails);
            $stmt = $dbconn->prepare($stmt);
            error_log(var_export($stmt, true));
            $stmt->execute($param_arr);
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

    function selectDirectoryDefaults($dbconn, $param_arr) {
        try {
            $stmt = $this->parseFilterValues($this->_SQLSelectDirectoryDefaults);
            $stmt = $dbconn->prepare($stmt);
            $stmt->execute($param_arr);
            error_log(var_export($stmt, true));
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

    function updateDefaultDirectory($dbconn, $param_arr) {
        try {
            $stmt = $this->parseFilterValues($this->_SQLUpdateDefaultDirectoryPeriod);
            $stmt = $dbconn->prepare($stmt);
            $stmt->execute($param_arr);
            return "SUCCESS";
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

}

?>
