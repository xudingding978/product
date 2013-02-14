<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once $path_doc_root . "/config.php";

class TplInvoicesDAO {

    private $_SQLINSERT = <<<'QUERY'
            INSERT INTO tpl_invoices(AMOUNT,DESCRIPTION,DUE_DATE,INVOICE_NUMBER,INVOICE_SEQ,NOTES,ORDER_ID,PAYMENT_METHOD_REC_ID,PAYMENT_STATUS_ID,
            TAX_RATE,REC_DATETIME,REC_TIMESTAMP)VALUES(?,?,DATE_ADD(NOW() , INTERVAL 1 MONTH),?,?,?,?,?,?,?,NOW(),NOW())
QUERY;

    private $_SQLSELECT = <<<'QUERY'
            select * from tpl_invoices
QUERY;
    
    private $_SQLSelectForGrid ="select INVOICE_NUMBER,(select ORDER_NUMBER from tpl_orders where REC_ID=ORDER_ID) as ORDER_NUMBER,AMOUNT,
            DESCRIPTION,DUE_DATE from tpl_invoices";
    private $_SQLCountForGrid = "select count(*) from tpl_invoices";
        
    

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
