<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once $path_doc_root . "/config.php";
require_once $path_doc_root . '/common/util/BaseDAO.php';

class TplClientDAO extends BaseDAO {

    private $SQLSELECTINSERT = <<<'QUERY'
            INSERT INTO tpl_client (`REC_DATETIME`, `REC_TIMESTAMP`, `NAME`, `TRADING_AS_NAME`, `TELEPHONE_NO`, `FREE_TELEPHONE_NO`, `FAX_NO`,  `FREE_FAX_NO`, `EMAIL_ADDRESS`, 
            `WEBSITE_ADDRESS`, `PHYSICAL_ADDRESS_BUILDING_ADDRESS`, `PHYSICAL_ADDRESS_STREET_ADDRESS`, `PHYSICAL_ADDRESS_SUBURB`, `PHYSICAL_ADDRESS_CITY`, `PHYSICAL_ADDRESS_STATE`, 
            `PHYSICAL_ADDRESS_COUNTRY`, `PHYSICAL_ADDRESS_POST_CODE`,  `PHYSICAL_ADDRESS_PXID`, `PHYSICAL_ADDRESS_DPID`, `PHYSICAL_ADDRESS_LATITUDE`, `PHYSICAL_ADDRESS_LONGITUDE`, 
            `PHYSICAL_ADDRESS_HEIGHT`, `PHYSICAL_ADDRESS_COMPLETE`,   `POSTAL_ADDRESS_BUILDING_ADDRESS`, `POSTAL_ADDRESS_STREET_ADDRESS`, `POSTAL_ADDRESS_SUBURB`, `POSTAL_ADDRESS_CITY`, 
            `POSTAL_ADDRESS_STATE`,  `POSTAL_ADDRESS_COUNTRY`, `POSTAL_ADDRESS_POST_CODE`) 
            SELECT `REC_DATETIME`, `REC_TIMESTAMP`, `NAME`, `TRADING_AS_NAME`, `TELEPHONE_NO`, `FREE_TELEPHONE_NO`, `FAX_NO`,  `FREE_FAX_NO`, `EMAIL_ADDRESS`, 
            `WEBSITE_ADDRESS`, `PHYSICAL_ADDRESS_BUILDING_ADDRESS`, `PHYSICAL_ADDRESS_STREET_ADDRESS`,  `PHYSICAL_ADDRESS_SUBURB`, `PHYSICAL_ADDRESS_CITY`, `PHYSICAL_ADDRESS_STATE`, 
            `PHYSICAL_ADDRESS_COUNTRY`, `PHYSICAL_ADDRESS_POST_CODE`,  `PHYSICAL_ADDRESS_PXID`, `PHYSICAL_ADDRESS_DPID`, `PHYSICAL_ADDRESS_LATITUDE`, `PHYSICAL_ADDRESS_LONGITUDE`, 
            `PHYSICAL_ADDRESS_HEIGHT`, `PHYSICAL_ADDRESS_COMPLETE`,   `POSTAL_ADDRESS_BUILDING_ADDRESS`, `POSTAL_ADDRESS_STREET_ADDRESS`, `POSTAL_ADDRESS_SUBURB`, `POSTAL_ADDRESS_CITY`, 
            `POSTAL_ADDRESS_STATE`,  `POSTAL_ADDRESS_COUNTRY`, `POSTAL_ADDRESS_POST_CODE` FROM tpl_shadow_supplier WHERE SHADOW_REC_ID = ?;
QUERY;
    private $SQLUPDATE = <<<'QUERY'
            UPDATE tpl_client SET REC_DATETIME = ?, REC_TIMESTAMP = ?, NAME = ?, TRADING_AS_NAME = ?, TELEPHONE_NO = ?, FREE_TELEPHONE_NO = ?, FAX_NO = ?, FREE_FAX_NO =?, EMAIL_ADDRESS = ?, 
            WEBSITE_ADDRESS = ?, PHYSICAL_ADDRESS_BUILDING_ADDRESS = ?, PHYSICAL_ADDRESS_STREET_ADDRESS = ?, PHYSICAL_ADDRESS_SUBURB = ?, PHYSICAL_ADDRESS_CITY = ?, PHYSICAL_ADDRESS_STATE = ?, 
            PHYSICAL_ADDRESS_COUNTRY = ?, PHYSICAL_ADDRESS_POST_CODE = ?, PHYSICAL_ADDRESS_PXID = ?, PHYSICAL_ADDRESS_DPID = ?, PHYSICAL_ADDRESS_LATITUDE = ?, PHYSICAL_ADDRESS_LONGITUDE = ?, 
            PHYSICAL_ADDRESS_HEIGHT = ?, PHYSICAL_ADDRESS_COMPLETE = ?, POSTAL_ADDRESS_BUILDING_ADDRESS = ?, POSTAL_ADDRESS_STREET_ADDRESS = ?, POSTAL_ADDRESS_SUBURB = ?, POSTAL_ADDRESS_CITY = ?, 
            POSTAL_ADDRESS_STATE = ?, POSTAL_ADDRESS_COUNTRY = ?, POSTAL_ADDRESS_POST_CODE = ?  WHERE REC_ID = ?;
QUERY;
    private $_selectAllClients = <<<'QUERY'
            SELECT name, trading_as_name, telephone_no, email_address, username FROM db_live.tpl_client LIMIT :rowStart, :rowPerPage;
QUERY;
    private $SQLSelectClient = "SELECT * FROM tpl_client where REC_ID=?";
    private $SQLSELECTEMAIL = "select * from tpl_client where (USERNAME = ?)";
    private $_SQLSelectCheckEmailExist = "SELECT * FROM tpl_client WHERE USERNAME = ?";
    private $_SQLAddClientBasic = "INSERT INTO tpl_client (`REC_DATETIME`, `REC_TIMESTAMP`, `NAME`, `FIRST_NAME`, `LAST_NAME`, `USERNAME`, `PASSWORD`, `EMAIL_ADDRESS`,`IS_DELETED`,ACTIVATION_CODE) 
            VALUES (NOW(),NOW(),?,?,?,?,?,?,0,?)";
    private $SQLSelectRegisteredClient = "SELECT * FROM tpl_client where (ACTIVATION_CODE=?) and (EMAIL_ADDRESS=?)";
    private $_SQLSelectForGrid = <<<'QUERY'
            SELECT   tpl_client.FIRST_NAME as 'First Name', tpl_client.LAST_NAME as 'Last Name', tpl_client.USERNAME as 'Username', 
            tpl_client.EMAIL_ADDRESS as 'Email', tpl_client.REC_DATETIME as 'Last Login',tpl_client.REC_ID as REC_ID , tpl_client.PASSWORD as 'Password'   
            FROM tpl_client
QUERY;
    private $_SQLCountForGrid = <<<'QUERY'
   SELECT count(*) FROM tpl_client   
QUERY;
    private $_selectForFrontGrid = <<<'QUERY'
            SELECT NAME AS 'Client Name',TRADING_AS_NAME AS 'Trading Name', TELEPHONE_NO AS 'Contact Number',  
             tpl_client.USERNAME, tpl_client.PASSWORD, tpl_client.EMAIL_ADDRESS AS 'Email Address' FROM tpl_client ORDER BY REC_ID DESC
QUERY;
    private $_SQLCountForFrontGrid = <<<'QUERY'
   SELECT count(*) FROM tpl_client   
QUERY;

    function addClientBasic($dbconn, $param_arr) {
        try {
            //$stmt = $this->parseFilterValues($this->_SQLAddClientBasic);
            $stmt = $dbconn->prepare($this->_SQLAddClientBasic);
            $stmt->execute($param_arr);
            // return $dbconn->lastInsertId();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

    function selectCheckEmailExist($dbconn, $param_arr) {
        try {
            $stmt = $this->parseFilterValues($this->_SQLSelectCheckEmailExist);
            $stmt = $dbconn->prepare($stmt);
            $stmt->execute($param_arr);
            return $stmt->rowCount();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

    function selectRegisteredClient($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLSelectRegisteredClient);
            $stmt->execute($param_arr);
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

    function selectAllClients($dbconn, $param_arr) {
        try {
            //      $param_arr = array('rowStart' => 5, 'rowPerPage' => 6);
            $stmt = $dbconn->prepare($this->_selectAllClients);
            $stmt->bindParam(':rowStart', $param_arr['rowStart'], PDO::PARAM_INT);
            $stmt->bindParam(':rowPerPage', $param_arr['rowPerPage'], PDO::PARAM_INT);
            error_log(var_export($stmt, true));
            $stmt->execute();

            return $stmt->fetchAll(PDO::FETCH_NUM);
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

    function selectAllClientsBackup($dbconn) {
        try {
            $stmt = $dbconn->query($this->_selectAllClients);
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

    function selectClient($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLSelectClient);
            $stmt->execute($param_arr);
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

    function selectEmail($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLSELECTEMAIL);

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
            //$result = $stmt->fetch(PDO::FETCH_ASSOC);
            //return $result["employee_id"]; 
        } catch (Exception $ex) {
            throw new PDOException($ex);
        }
    }

    function selectupdate($dbconn, $param_arr) {
        try {
            $tplshadowdao = new TplShadowSupplierDAO();
            $Suppliers_result = $tplshadowdao->selectsupplier1($dbconn, $param_arr);
            $stmt = $dbconn->prepare($this->SQLUPDATE);
            $stmt->execute($Suppliers_result);
        } catch (Exception $ex) {
            throw new PDOException($ex);
        }
    }

    function selectForGrid($para) {
        try {
            $dbconn = $para[0];
            $para_arr = $para[1];
            $limit = $para[2];
            $stmt = $dbconn->prepare($this->_SQLSelectForGrid . $limit);
            $stmt->execute($para_arr);
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

    function countForGrid($para) {
        try {
            $dbconn = $para[0];
            $stmt = $dbconn->prepare($this->_SQLCountForGrid);
            $stmt->execute();
            return $stmt->fetch();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

    function selectForFrontGrid($para) {
        try {
            $dbconn = $para[0];
            $limit = $para[2];
            $stmt = $dbconn->prepare($this->_SQLSelectForFrontGrid . $limit);
            $stmt->execute();
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

    function countForFrontGrid($dbconn) {
        try {
            $stmt = $dbconn->prepare($this->_SQLCountForFrontGrid);
            $stmt->execute();
            return $stmt->fetch();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

}

?>
