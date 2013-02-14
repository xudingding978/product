<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once $path_doc_root . "/config.php";

class TplDirectoryPeriodOrdersDAO {

    private $_SQLINSERT = <<<'QUERY'
            INSERT INTO tpl_directory_period_orders(DIRE_PERIOD_ID,LAST_INVOICE_DATE,NEXT_INVOICE_DATE,ORDER_ID,PAYMENT_TERMS,STATUS,REC_DATETIME,REC_TIMESTAMP)VALUES(?,?,?,?,?,?,NOW(),NOW())
QUERY;

    private $_SQLSELECT = <<<'QUERY'
            select * from tpl_order_items where ORDER_REC_ID=?";
QUERY;

    function select($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->_SQLSELECT);
            $stmt->execute($param_arr);
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            error_log($ex) ;
            throw new PDOException($ex);
        }
    }


    function insert($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->_SQLINSERT);
            $stmt->execute($param_arr);
            return $dbconn->lastInsertId();
        } catch (Exception $ex) {
            error_log($ex) ;
            throw new PDOException($ex);
        }
    }

}
?>
