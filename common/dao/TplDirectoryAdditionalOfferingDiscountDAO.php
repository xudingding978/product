<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once $path_doc_root . "/config.php";

class TplDirectoryAdditionalOfferingDiscountDAO {

    private $SQLSELECTINSERT = "INSERT INTO tpl_shadow_root (`REC_DATETIME`, `REC_TIMESTAMP`, `CLIENT_REC_ID`,`DIRECTORY_REC_ID`, `DIRECTORY_YEAR`, `STATE`, `USERNAME`, `PASSWORD`, `USER_EMAIL_ADDRESS`,`LISTING_COST_EXCL_GST`,`LISTING_COST_INCL_GST`,`TRANSACTION_TOTAL_EXCL_GST`,`TRANSACTION_TOTAL_INCL_GST`,`TOTAL_PAID_TO_DATE`) VALUE(NOW(),NOW(),?,?,?,'OPEN',?,?,?,0.00,0.00,0.00,0.00,0.00)";

    function selectInsert($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLSELECTINSERT);
            $stmt->execute($param_arr);
            $result = $stmt->fetch(PDO::FETCH_ASSOC);
            return $result;
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

}

?>
