<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once $path_doc_root . "/config.php";

class TplInvoiceItemsDAO {

    private $_SQLINSERT = <<<'QUERY'
            INSERT INTO tpl_invoice_items(DIRECTORY_PERIOD_ORDER_ITEMS_ID,INVOICE_ID,SUB_TOTAL,REC_DATETIME,REC_TIMESTAMP)VALUES(?,?,?,NOW(),NOW());
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
        } catch (Exception $ex) {
            error_log($ex) ;
            throw new PDOException($ex);
        }
    }

}
?>
