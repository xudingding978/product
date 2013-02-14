<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once $path_doc_root . "/config.php";

class TplShadowDirectoryAdditionalOfferingDiscountDAO {

    private $SQLSELECTINSERT = "INSERT INTO tpl_shadow_directory_additional_offering_discount (`SHADOW_REC_ID`,`MASTER_REC_ID`, `REC_DATETIME`, `REC_TIMESTAMP`, `REC_ACTION`,`SHADOW_DIRECTORY_ADDITIONAL_OFFERING_REC_ID`,`VOLUME`, `DISCOUNT_PER_UNIT`) SELECT ?,DIRECTORY_ADDITIONAL_OFFERING_REC_ID,NOW(), NOW(), NULL, ?,`VOLUME`, `DISCOUNT_PER_UNIT` FROM tpl_directory_additional_offering_discount WHERE (DIRECTORY_ADDITIONAL_OFFERING_REC_ID =?)";

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
