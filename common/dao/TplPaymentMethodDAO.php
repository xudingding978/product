<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once $path_doc_root . "/config.php";

class TplPaymentMethodDAO {

    private $_SQLSELECT = <<<'QUERY'
            SELECT * FROM tpl_payment_method where REC_ID=?

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


}
?>
