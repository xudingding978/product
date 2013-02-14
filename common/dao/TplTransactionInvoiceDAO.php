<?php
//TplTransactionInvoiceDAO
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once $path_doc_root . "/config.php";

class TplTransactionInvoiceDAO {

    private $_SQLINSERT = <<<'QUERY'
            INSERT INTO tpl_transaction_invoice(INVOICE_ID,TRANSACTION_INVOICE_ID) VALUES (?,?)
QUERY;

    private $_SQLSELECT = <<<'QUERY'
            select * from tpl_transaction_invoice where REC_ID=?";
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
