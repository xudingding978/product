<?php


$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once $path_doc_root . "/config.php";
require_once $path_doc_root .'/common/util/BaseDAO.php';

class TplSupplierShadowRootDAO extends BaseDAO{

   
    private $SQL_Select = "SELECT * FROM tpl_supplier_shadow_root WHERE SUPPLIER_REC_ID = ?";
   

    function select($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQL_Select);
            $stmt->execute($param_arr);
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

}
?>
