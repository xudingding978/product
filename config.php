<?PHP

if (!isset($_SESSION)) session_start();

//*******************************************************************************
//****                MAIN APPLICATION CONFIGURATION FILE                    ****    
//*******************************************************************************	
//****    Version: 3.0.0
//****    	
//*******************************************************************************	
// ****     Web Server Setup
//*******************************************************************************

global $path_doc_root;
global $TemplateDir;
global $IncludeDir;
global $KoolControlsFolder;
global $KoolControlsFolderName;
global $KoolPHPSuiteDir;
global $DEBUG_LOG_DIRECTORY;

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
$TemplateDir = $path_doc_root.'/templates/';
$IncludeDir = $path_doc_root.'/include/';
$KoolPHPSuiteDir = $path_doc_root.'/include/KoolPHPSuite/';
$KoolControlsFolder = $path_doc_root.'/include/KoolPHPSuite/';
$KoolControlsFolderName = 'KoolPHPSuite';
$PAYPAL_BUISNESS_EMAIL = "susa_1335310285_biz@gmail.com";

//*******************************************************************************	
// ****     Directory Application Setup
//*******************************************************************************
$DOMAINHOST = "http://directory.local/";
$DOMAINPORT = "80";
$PORTAL_URL = "http://localhost/dashboard/";
$DIRECTORIES = array(1, 2, 3, 4);  //array of directories in order to build tree view

//*******************************************************************************	
// ****     Database Connections Variables
//*******************************************************************************

global $DBTYPE;
global $DB_HOST;
global $DB_PORT;
global $DB_NAME;
global $DB_PREFIX;
global $DB_USER;
global $DB_PASS;
global $ADMIN_DB_NAME;
global $DBM_USER;
global $DBM_PASS;
global $TENANT_REC_ID;

$DBTYPE =                             'mysql';
$DB_HOST =                          '127.0.0.1';
$DB_PORT =                           '3306'; //default 3306
$DB_NAME =                          'db_live';
$DB_PREFIX =                         'tpl';
$DB_USER =                          'tplweb';
$DB_PASS =                          'S3cr3t!';
$ADMIN_DB_NAME =             'db_admin';
$DBM_USER =                       'tplweb';
$DBM_PASS =                       'S3cr3t!';
$TENANT_REC_ID =                4;

//*******************************************************************************
//****    Application Variables
//*******************************************************************************
$BaseDir = $_SERVER["DOCUMENT_ROOT"];
$TemplateDir = $BaseDir . "/templates/";
$IncludeDir = $BaseDir . "/include/";
$KoolPHPSuiteDir = $BaseDir . "/include/KoolPHPSuite";

global $KoolPHPSuiteDir;

if (!defined("IS_SYSTEM_USER")) {
    define("IS_SYSTEM_USER", "You are a system user");
}
if (!defined("IS_SHADOW_USER")) {
    define("IS_SHADOW_USER", "You are a portal user");
}
if (!defined("INVALID_USER")) {
    define("INVALID_USER", "Username is invalid. Please re-enter username and password.");
}
if (!defined("INVALID_PASSWORD")) {
    define("INVALID_PASSWORD", "Password is invalid. Please re-enter username and password.");
}
if (!defined("TREENODE_DELIMETER")) {
    define("TREENODE_DELIMETER", ";");
}

// static constants
static $cp, $sp, $bp, $pp = 1;

$ATitle = 'The Corporate Toolbox';
global $ATitle;

//*******************************************************************************
//**** set variables for the mobile site for m.tonz.co.nz
//*******************************************************************************
//$drec = the directory ID for the query to enquire into ( 6 = TONZ directory) 
$drec = 6;
//$maxr = maximum number of results to return for any query 
$maxr = 1000;
//$page = the page of records to return 
$page = 1;
//$rad = radius to be used to show the radius in which to show (in meters)
$rad = 5000;

//**** Address Finder API Service Key
global $AddressFinderAPIKey;
$AddressFinderAPIKey = "24b133d0-2923-012f-0c81-000c2987bf2e";



//*******************************************************************************
//****    Logging configuration setup
//*******************************************************************************
include_once($path_doc_root . "/include/debuglog.php");
$LOGGER_PATH = "/var/log/bds";
global $dblog;
$dblog = debuglog::getInstance();
$dblog->setlogfile($LOGGER_PATH);

$FUNC_DUMP_DEBUG = true; // no support yet
$S2L_STEP_DUMP_DEBUG = true; // shadow to live - step log
$L2S_STEP_DUMP_DEBUG = true; // live to shadow - step log
$QUERY_DUMP_DEBUG = true; //this will dump the query - for debug purpose only
// $OUTPUT = "F:\\Inetpub\\HospitalityBiz\\test.hospitalitybiz.co.nz\\administrator\\output";
// $SHAWS_HEADER = "F:\\Inetpub\\HospitalityBiz\\test.hospitalitybiz.co.nz\\administrator\\headers";
$SESSION_TIMEOUT = 28800; // 8 hrs (28800) 30mins (1800)

// Global Recaptcha Key - should work across all domains
// 6LfmYdkSAAAAAObW854YDdFghGOk_bStO--tPtLK

?>
