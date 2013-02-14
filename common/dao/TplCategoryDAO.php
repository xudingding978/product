<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once $path_doc_root . "/config.php";
//TplProductCategoryDAO
class TplCategoryDAO {

    private $SQLInnerSelect = <<<'QUERY'
            SELECT tpl_category.*  FROM tpl_category 
        INNER JOIN tpl_category_directory ON (tpl_category.REC_ID = tpl_category_directory.CATEGORY_REC_ID)
         WHERE (tpl_category_directory.DIRECTORY_REC_ID = ?) and (tpl_category.TREE_LEVEL>0) order by tpl_category.NODE_ID ;
QUERY;
    private $SQLMaxTreeLevel = <<<'QUERY'
            SELECT MAX(tpl_category.TREE_LEVEL) as maxtreelevel FROM tpl_category 
        INNER JOIN tpl_category_directory ON (tpl_category.REC_ID = tpl_category_directory.CATEGORY_REC_ID)
         WHERE (tpl_category_directory.DIRECTORY_REC_ID = ?);
QUERY;
    private $SQLSelect = <<<'QUERY'
        SELECT * FROM tpl_category  WHERE (REC_ID = ?);
QUERY;
    function select($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLInnerSelect);
            $stmt->execute($param_arr);
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }
    function selectRecID($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLSelect);
            $stmt->execute($param_arr);
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }
    function selectMaxTreeLevel($dbconn, $param_arr) {
        try {
            
            $stmt = $dbconn->prepare($this->SQLMaxTreeLevel);
            $stmt->execute($param_arr);            
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

}

?>
