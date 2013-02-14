<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
require $path_doc_root . "/config.php";

class DBTransaction {

    function getConnection($dbName) {
        $path_doc_root = $_SERVER["DOCUMENT_ROOT"];
        require $path_doc_root . "/config.php";
        global $dbconn;
        $dsn = $GLOBALS["DBTYPE"] . ":host=" . $GLOBALS["DB_HOST"] . ";dbname=" . $dbName;
        try {
            $dbconn = new PDO($dsn, $DB_USER, $DB_PASS);
            $dbconn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            echo "Error!: " . $e->getMessage();
            throw $e;
        } catch (Exception $e) {
            echo "Error!: " . $e->getMessage();
            throw $e;
        }
        return $dbconn;
    }

    function beginTransaction() {
        global $dbconn;
        $dbconn->beginTransaction();
    }

    function commitTransaction() {
        global $dbconn;
        $dbconn->commit();
    }

    function rollbackTransaction() {
        global $dbconn;
        $dbconn->rollBack();
    }

}

?>
