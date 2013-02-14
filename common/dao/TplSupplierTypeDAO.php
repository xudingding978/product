<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
require $path_doc_root . "/config.php";
require_once $path_doc_root .'/common/util/BaseDAO.php';

class TplSupplierTypeDAO extends BaseDAO{

    private $SQL_SelectSupplierType ="SELECT * from tpl_supplier_type";
    
    function selectSupplierList($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQL_SelectSupplierType);
            $stmt->execute();
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

    
}
?>
