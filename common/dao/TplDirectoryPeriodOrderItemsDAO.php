<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once $path_doc_root . "/config.php";

class TplDirectoryPeriodOrderItemsDAO {

    private $_SQLINSERT = <<<'QUERY'
            INSERT INTO tpl_directory_period_order_items(DIRECTORY_PERIOD_ORDER_REC_ID,EXCL_TAX_TOTAL,LINE_TOTAL,PACKAGE,PAYMENT_TERMS,SHADOW_DIR_PER_ADD_OFF_REC_ID,
            SHADOW_DIR_PER_OFF_REC_ID,STATUS,TAX_RATE,REC_TIMESTAMP,REC_DATETIME)VALUES(?,?,?,?,?,?,?,?,?,NOW(),NOW());;
QUERY;
    private $_SQLSELECT = <<<'QUERY'
            select * from tpl_directory_period_order_items where ORDER_REC_ID=?";
QUERY;
    private $_SQLInnerJoinSelect = <<<'QUERY'
            select tpl_directory_period_order_items.REC_ID as REC_ID,tpl_directory_period_order_items.PACKAGE as PACKAGE,tpl_directory_period_order_items.PAYMENT_TERMS as PAYMENT_TERMS,
            tpl_directory_period_order_items.LINE_TOTAL as LINE_TOTAL,tpl_directory_period_orders.DIRE_PERIOD_ID as DIRE_PER_ID,tpl_directory_period_order_items.STATUS as STATUS from tpl_directory_period_order_items inner join tpl_directory_period_orders 
            on tpl_directory_period_order_items.DIRECTORY_PERIOD_ORDER_REC_ID=tpl_directory_period_orders.REC_ID where 
            tpl_directory_period_orders.ORDER_ID=?
QUERY;
    private $_SQLOrderItemStatusUpdate = <<<'QUERY'
          UPDATE tpl_directory_period_order_items SET STATUS = ? WHERE REC_ID=?;
QUERY;

    function selectOrderItems($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->_SQLInnerJoinSelect);
            $stmt->execute($param_arr);
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            error_log($ex);
            throw new PDOException($ex);
        }
    }

    function select($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->_SQLSELECT);
            $stmt->execute($param_arr);
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            error_log($ex);
            throw new PDOException($ex);
        }
    }

    function insert($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->_SQLINSERT);
            $stmt->execute($param_arr);
            return $dbconn->lastInsertId();
        } catch (Exception $ex) {
            error_log($ex);
            throw new PDOException($ex);
        }
    }

    function orderItemStatusUpdate($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->_SQLOrderItemStatusUpdate);
            $stmt->execute($param_arr);
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

}

?>
