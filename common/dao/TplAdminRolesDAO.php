<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once $path_doc_root . "/config.php";
include_once $path_doc_root . '/common/util/BaseDAO.php';

class TplAdminRolesDAO {


    private $_SQLSelect = <<<'QUERY'
                  SELECT * FROM tpl_admin_roles where TENANT_ID=?;
QUERY;

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
