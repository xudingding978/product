<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . "/config.php"); // this is the configuration of the database
include_once("dbwrapper.php");

class DataConnection extends DatabaseWrapper {

    private $dbname;

    function    __construct() {
        global $DB_HOST, $DB_PORT, $DB_NAME, $DB_USER, $DB_PASS;
        $this->dbname = $DB_NAME;
        $argv = func_get_args();
        switch (func_num_args()) {
            case 1:
                self::__construct1($argv[0]); // type
                break;
            case 2:
                self::__construct2($argv[0], $argv[1]); // type, dbname
                $this->dbname = $argv[1];
                break;
            case 3:
                self::__construct3($argv[0], $argv[1], $argv[2]); // type, user, pass
                break;
            case 6:
                self::__construct4($argv[0], $argv[1], $argv[2], $argv[3], $argv[4], $argv[5]); // type, host, port, dbname, user, pass
                $this->dbname = $argv[3];
                break;
        }
    }

    function __construct1($DBType) {
        global $DB_HOST, $DB_PORT, $DB_NAME, $DB_USER, $DB_PASS;
        parent::setConnectionString($DBType, $DB_HOST, $DB_PORT, $DB_NAME, $DB_USER, $DB_PASS);
    }

    function __construct2($DBType, $DBName) {
        //include_once("../config.php");
        global $DB_HOST, $DB_PORT, $DB_USER, $DB_PASS;
        parent::setConnectionString($DBType, $DB_HOST, $DB_PORT, $DBName, $DB_USER, $DB_PASS);
    }

    function __construct3($DBType, $DBUser, $DBPass) {
        global $DB_HOST, $DB_PORT, $DB_NAME;
        parent::setConnectionString($DBType, $DB_HOST, $DB_PORT, $DB_NAME, $DBUser, $DBPass);
    }

    function __construct4($DBType, $DBHost, $DBPort, $DBName, $DBUser, $DBPass) {
        parent::setConnectionString($DBType, $DBHost, $DBPort, $DBName, $DBUser, $DBPass);
    }

    function __destruct() {
        
    }

    public function Connect() {
        $bResult = true;
        $bResult = parent::connect();
        if (!$bResult) {
            //$this->_errHandler = new ErrorHandler(ERR_DB_RESULT); 
            $bResult = false;
            $this->_connected = false;
        }
        else
            $this->_connected = true;
        return $bResult;
    }

    public function Disconnect() {
        return parent::disconnect();
    }

    public function doQuery($query_statement, $params=false) {
        $result = parent::mysql_safe($query_statement, $params);
        return $result;
    }

    public function doFreeResult() {
        parent::free_result();
    }

    public function doStoredProcQuery($query, $params=false) {
        $result = parent::mysql_safe($query, $params);

        return $result;
    }

    public function doSelectDb($dbname) {
        $result = parent::selectdb($dbname);
        return $result;
    }

    public function getAdminRoles() {
        return $this->doQuery("SELECT * FROM " . $this->dbname . ".tpl_admin_roles");
    }

    public function getAdminRoleNameById($id) {
        return $this->doQuery("SELECT ROLE FROM " . $this->dbname . ".tpl_admin_roles WHERE REC_ID=" . $id);
    }

    public function getDirectories() {
        // problem connectng db here if second time
        global $DB_NAME;
        //$q = "SELECT DISTINCT D.REC_ID, D.NAME FROM ".$DB_NAME.".tpl_directory AS D INNER JOIN ".$DB_NAME.".tpl_shadow_root ON D.REC_ID = tpl_shadow_root.DIRECTORY_REC_ID";
        $q = "SELECT REC_ID, NAME,DIRECTORY_DESC FROM " . $DB_NAME . ".tpl_directory";
        return $this->doQuery($q);
    }

    public function getNoExeptDirectories() {
        // problem connectng db here if second time
        global $DB_NAME;
        $q = "SELECT DISTINCT D.REC_ID, D.NAME FROM " . $DB_NAME . ".tpl_directory AS D";
        return $this->doQuery($q);
        //return $this->doQuery("SELECT * FROM ".$DB_NAME.".tpl_directory WHERE ");
    }

    public function getDefaultDirPlusYear($admin_user_rec_id) {
        global $DB_NAME;
        $q = "SELECT DIRECTORY_REC_ID, DIRECTORY_YEAR FROM " . $DB_NAME . "tpl_admin_users WHERE REC_ID =" . $admin_user_rec_id;
    }

    public function getAvailableDirYear($dir) {

        global $DB_NAME;
        //error_log("DB_NAME..............." . $DB_NAME);
        ///error_log("Query&&&&&&&&&&&&&&&&&&:" . "SELECT tpl_per.DIRECTORY_YEAR as CURRENT_YEAR,tpl_per.DIRECTORY_PERIOD_START as START_DATE,tpl_per.DIRECTORY_PERIOD_END as END_DATE FROM " . $DB_NAME . ".tpl_directory tpl_dir INNER JOIN " . $DB_NAME . ".tpl_directory_period tpl_per ON tpl_dir.REC_ID=tpl_per.DIRECTORY_REC_ID WHERE tpl_dir.REC_ID = " . $dir . "  ORDER BY tpl_dir.CURRENT_YEAR DESC");
        
        return $this->doQuery("SELECT tpl_per.REC_ID as REC_ID,tpl_per.DIRECTORY_YEAR as CURRENT_YEAR,tpl_per.DIRECTORY_PERIOD_START as START_DATE,tpl_per.DIRECTORY_PERIOD_END as END_DATE FROM " . $DB_NAME . ".tpl_directory tpl_dir INNER JOIN " . $DB_NAME . ".tpl_directory_period tpl_per ON tpl_dir.REC_ID=tpl_per.DIRECTORY_REC_ID WHERE tpl_dir.REC_ID = " . $dir . "  ORDER BY tpl_dir.CURRENT_YEAR DESC");
        //return $this->doQuery("SELECT CURRENT_YEAR FROM ".$DB_NAME.".tpl_directory WHERE REC_ID = ".$dir." ORDER BY CURRENT_YEAR DESC");
    }

    public function verifyProdCategory($db, $code) {
        return $this->doQuery("SELECT * FROM " . $db . ".tpl_product_category WHERE CODE ='" . $code . "'");
    }

    public function getUserDetailsByID($id) {
        return $this->doQuery("SELECT * FROM " . $this->dbname . ".tpl_admin_users WHERE REC_ID =" . $id);
    }
    
    public function getDefaultPackage($recid) {
        global $DB_NAME;
        return $this->doQuery("SELECT * FROM " . $DB_NAME . ".tpl_directory_offering WHERE DIRECTORY_REC_ID=" . $recid . " and  IS_DEFAULT =1");
    }
    
    public function getDirectory($id) {
        // problem connectng db here if second time
        global $DB_NAME;
        $data_obj = null;
        $data = $this->doQuery("SELECT * FROM " . $DB_NAME . ".tpl_directory WHERE REC_ID = " . $id);
        if ($data)
            $data_obj = $data->fetch_assoc();
        return $data_obj;
    }

    function getDirectoryCategories($directory_rec_id, $parent_rec_id) {
        global $DB_NAME;
        $query = "SELECT tpl_product_category.REC_ID, tpl_product_category.NAME FROM " . $DB_NAME . ".tpl_product_category INNER JOIN " . $DB_NAME . ".tpl_product_category_directory ON (tpl_product_category.REC_ID = tpl_product_category_directory.PRODUCT_CATEGORY_REC_ID) WHERE (tpl_product_category_directory.DIRECTORY_REC_ID = " . $directory_rec_id . ") AND";
        if ($parent_rec_id > 0)
            $query = $query . " (tpl_product_category.PARENT_PRODUCT_CATEGORY_REC_ID = " . $parent_rec_id . ")";
        else
            $query = $query . " (tpl_product_category.PARENT_PRODUCT_CATEGORY_REC_ID IS NULL)";
        $categories = $this->doQuery($query);
        return $categories;
    }

}

?>