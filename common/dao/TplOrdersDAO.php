<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once $path_doc_root . "/config.php";

class TplOrdersDAO {

    private $_SQLINSERT = <<<'QUERY'
            INSERT INTO tpl_orders(CLIENT_REC_ID,CURRENCY_CODE,EXCL_GST_TOTAL,GST_RATE, ORDER_AMOUNT,ORDER_NUMBER,
            REC_DATETIME,REC_TIMESTAMP)VALUES(?,?,?,?,?,?,NOW(),NOW());;
QUERY;
    private $_SQLUPDATE = <<<'QUERY'
          UPDATE tpl_orders SET PAYMANT_RESPONSE_STATUS = ?,
          PAYMENT_REFERENCE_NUMBER = ?,PAYMENT_STATUS = ? WHERE ORDER_NUMBER=?;
QUERY;
    private $_SQLSELECT = "SELECT (select NAME from tpl_client where REC_ID=CLIENT_REC_ID) as CLIENT_NAME,ORDER_AMOUNT,ORDER_NUMBER,REC_DATETIME,REC_ID,STATUS FROM db_live.tpl_orders";
     
    private $_SQLSelectForGrid = "SELECT ORDER_NUMBER,(select NAME from tpl_client where REC_ID=CLIENT_REC_ID) as CLIENT_NAME,ORDER_AMOUNT,REC_DATETIME,REC_ID,STATUS FROM db_live.tpl_orders ";
    private $_SQLCountForGrid = "SELECT count(*) FROM db_live.tpl_orders";
    
    private $_SQLDelete = <<<'QUERY'
            delete from tpl_orders REC_ID=?;
QUERY;
        private $_SQLOrderStatusUpdate = <<<'QUERY'
          UPDATE tpl_orders SET STATUS = ? WHERE REC_ID=?;
QUERY;

    function delete($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->_SQLDelete );
            $stmt->execute($param_arr);           
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

    function select($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->_SQLSELECT);
            $stmt->execute();
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }
    
    function orderStatusUpdate($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->_SQLOrderStatusUpdate);
            $stmt->execute($param_arr);
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

    function update($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->_SQLUPDATE);
            $stmt->execute($param_arr);
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

    function insert($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->_SQLINSERT);
            $stmt->execute($param_arr);
            return $dbconn->lastInsertId();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }
    function selectForGrid($para) {
        try {
            $dbconn=$para[0];         
            $limit=$para[2]; 
            $stmt = $dbconn->prepare($this->_SQLSelectForGrid.$limit);         
            $stmt->execute();
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }
    function countForGrid($para) {
        try {
            $dbconn=$para[0];
            $stmt = $dbconn->prepare($this->_SQLCountForGrid);
            $stmt->execute();
            return $stmt->fetch();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

}

?>
