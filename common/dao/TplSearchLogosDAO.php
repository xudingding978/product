<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once $path_doc_root . "/config.php";
require_once $path_doc_root . '/common/util/BaseDAO.php';

class TplSearchLogosDAO extends BaseDAO {

    private $_SQLSelectForFrontGrid = <<<'QUERY'
            SELECT DISTINCT search_text AS Keyword, COUNT(REC_ID) AS Hits, NUM_MATCHES AS 'Matches' from tpl_search_logs 
                WHERE search_text <> '' GROUP BY search_text ORDER BY Hits DESC
QUERY;
    private $_SQLCountForFrontGrid = <<<'QUERY'
   SELECT count(*) from tpl_search_logs WHERE search_text <> '' GROUP BY search_text   
QUERY;

    function selectForFrontGrid($para) {
        try {
            $dbconn = $para[0];
            $limit = $para[2];
            $stmt = $dbconn->prepare($this->_SQLSelectForFrontGrid . $limit);
            $stmt->execute();
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

    function countForFrontGrid($para) {
        try {
            $dbconn = $para[0];
            $stmt = $dbconn->prepare($this->_SQLCountForFrontGrid);
            $stmt->execute();
            return $stmt->fetch();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

}

?>
