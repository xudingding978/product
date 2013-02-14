<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once $path_doc_root . "/config.php";
include_once $path_doc_root . '/common/util/BaseDAO.php';

class TplShadowSupplierShadowRootDAO extends BaseDAO {

    private $SQLInsert = <<<'QUERY'
        INSERT INTO tpl_shadow_supplier_shadow_root (REC_DATETIME,REC_TIMESTAMP, SHADOW_SUPPLIER_REC_ID, SHADOW_ROOT_REC_ID ) 
         values(NOW(),NOW(),?,?);
QUERY;

    function insert($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLInsert);
            $stmt->execute($param_arr);
            return $dbconn->lastInsertId();
        } catch (Exception $ex) {
            error_log($ex);            
            throw new PDOException($ex);
        }
    }

}

?>
