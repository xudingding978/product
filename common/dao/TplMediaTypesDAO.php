<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once $path_doc_root . "/config.php";

class TplMediaTypesDAO {

private $SQLSelect = <<<'QUERY'
        SELECT * FROM tpl_media_types  WHERE (MEDIA_CATEGORY=?) and (MEDIA_TYPE=?);
QUERY;





    function select($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLSelect);
            $stmt->execute($param_arr);
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

}

?>
