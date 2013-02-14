<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once $path_doc_root . "/config.php";

class TplTransactionsDAO {

    private $_SQLINSERT = <<<'QUERY'
            INSERT INTO tpl_transactions(TRANSACTION_ID,AMOUNT,DESCRIPTION,PAYMENT_METHOD,PAYMENT_REFERENCE_NUMBER,REC_TIMESTAMP,REC_DATETIME)VALUES(?,?,?,?,?,NOW(),NOW())
QUERY;

    private $_SQLSELECT = <<<'QUERY'
            select * from tpl_transactions where REC_ID=?";
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
