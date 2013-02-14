<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
require $path_doc_root . "/config.php";

class TplSupplierMediaDAO {

    private $SQLInsert = "INSERT INTO tpl_supplier_media(NAME,MEDIA_NAME,MEDIA_URL,MEDIA_TYPE_REC_ID,DESCRIPTION,IS_INTERNAL_SOURCE,MEDIA_EMBED_SOURCE,IS_EMBED_SOURCE,REC_DATETIME,SUPPLIER_REC_ID,IS_HIGH_RESO,MEDIA_FILE_SIZE)VALUES(?,?,?,?,?,?,?,?,NOW(),?,?,?)";
    private $SQLUpdate = "UPDATE tpl_supplier_media SET NAME = ?, MEDIA_NAME = ?, MEDIA_URL = ?, DESCRIPTION = ?,IS_INTERNAL_SOURCE = ?,MEDIA_EMBED_SOURCE = ?,IS_EMBED_SOURCE = ?,REC_DATETIME = NOW(),  IS_HIGH_RESO = ? ,MEDIA_FILE_SIZE = ? WHERE REC_ID =?";
    private $SQLSELECT = "SELECT tpl_supplier_media.* FROM tpl_supplier_media INNER JOIN tpl_media_types ON (tpl_supplier_media.MEDIA_TYPE_REC_ID = tpl_media_types.REC_ID) where (SUPPLIER_REC_ID = ?) and (MEDIA_CATEGORY = ?)  ORDER BY tpl_supplier_media.NAME ";
    private $SQLDelete = "DELETE FROM tpl_supplier_media where (REC_ID = ?)";
    private $SQLSelectRecord = "SELECT * FROM tpl_supplier_media where REC_ID=? ";
    
    function selectRecord($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLSelectRecord);
            $stmt->execute($param_arr);
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }
    
    
    function delete($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLDelete);
            $stmt->execute($param_arr);           
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

    function insert($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLInsert);
            $stmt->execute($param_arr);
        } catch (Exception $ex) {
            error_log($ex) ;
            throw new PDOException($ex);
        }
    }

    function update($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLUpdate);
            $stmt->execute($param_arr);
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

}

?>
