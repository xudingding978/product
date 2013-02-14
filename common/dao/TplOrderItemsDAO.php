<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once $path_doc_root . "/config.php";

class TplOrderItemsDAO {

    private $_SQLINSERT = <<<'QUERY'
            INSERT INTO tpl_order_items(EXCL_GST_TOTAL,GST_RATE,LINE_TOTAL,ORDER_REC_ID,PACKAGE,PAYMENT_TYPE,
            SHADOW_DIR_PER_ADD_OFF_REC_ID,SHADOW_DIR_PER_OFF_REC_ID)VALUES(?,?,?,?,?,?,?,?);
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
