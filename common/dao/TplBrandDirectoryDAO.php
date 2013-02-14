<?php 

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once $path_doc_root . "/config.php";

class TplBrandDirectoryDAO {

    private $SQLSELECT = "SELECT * FROM tpl_brand_directory where (BRAND_REC_ID = ?) AND (DIRECTORY_REC_ID = ?)";
    private $SQLNameSelect = "SELECT * FROM tpl_brand WHERE NAME = ?";
    private $SQLInsert = "INSERT INTO tpl_brand_directory (REC_DATETIME, REC_TIMESTAMP, BRAND_REC_ID, DIRECTORY_REC_ID)  VALUE  (NOW(), NOW(), ?, ?)";

    function insert($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLInsert);
            $stmt->execute($param_arr);
            return $dbconn->lastInsertId();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

    function select($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLSELECT);
            $stmt->execute($param_arr);
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }


}
?>
