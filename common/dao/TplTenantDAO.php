<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once $path_doc_root . "/config.php";

class TplTenantDAO {

    private $_SQLSelectUpdate = <<<'QUERY'
              select LAST_INVOICE_ID,LAST_ORDER_ID,LAST_TRANSACTION_ID from tpl_tenant where REC_ID=?;
              update tpl_tenant set LAST_INVOICE_ID=(LAST_INVOICE_ID +1),LAST_ORDER_ID=(LAST_ORDER_ID +1),LAST_TRANSACTION_ID=(LAST_TRANSACTION_ID +1)  where REC_ID=?
QUERY;
    private $_SQLSelect = <<<'QUERY'
              select NAME,REC_ID from tpl_tenant
QUERY;

    function selectUpdate($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->_SQLSelectUpdate);
            $stmt->execute($param_arr);
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

    function select($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->_SQLSelect);
            $stmt->execute($param_arr);
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

}

?>
