<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . '/config.php');
include_once $path_doc_root . "/common/util/DBTransaction.php";
include_once $path_doc_root . "/common/dao/TplClientDAO.php";
include_once $path_doc_root . "/common/dao/TplShadowSupplierCategoryProductDAO.php";
include_once($path_doc_root . "/common/sessionmaintain.php");


$action = $_REQUEST["action"];

if ($action == 'timeout') {
    error_log("timeout");
    echo checkTimeout();
    //error_log("timeout".checkTimeout());
}
if ($action == 'dotplogin') {
    
    error_log("dotplogin");
    echo DoTPLLogin();
    //error_log("timeout".checkTimeout());
}

function checkTimeout() {
    $_SESSION['TIMEOUT'] = 60;
    if (isset($_SESSION['LAST_ACTIVITY']) && (time() - $_SESSION['LAST_ACTIVITY'] > $_SESSION['TIMEOUT'])) {
        CB_Logout();
        return "EXPIRE";
    }
    $_SESSION['LAST_ACTIVITY'] = time();
    return "OK";
}

function CB_Logout() {
    unset($_SESSION['sessid']);
    unset($_SESSION['uid']);
    unset($_SESSION['user']);
    unset($_SESSION['role']);
    unset($_SESSION['name']);
    unset($_SESSION['fgid']);
    unset($_SESSION['TIMEOUT']);
    unset($_SESSION['LAST_ACTIVITY']);
    session_unset();
    session_destroy();
    return true;
}

function DoTPLLogin() {
    $recid = $_REQUEST["rec_id"];
    $per_id = $_REQUEST["per_id"];

    $dbtrans = new DBTransaction();
    $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
    $tplclientdao = new TplClientDAO();
    $array = array($recid);
    $records = $tplclientdao->selectClient($dbconn, $array);


    if (!isset($_SESSION))
        session_start();
    $session_maintain = new session_maintain();
    $_SESSION['instanceID'] = md5(uniqid(rand(), true));

    $session_maintain->add_client_field("client_user", $records[0]["NAME"], $_SESSION['instanceID'], "client_data");
    $session_maintain->add_client_field("client_username", $records[0]["NAME"], $_SESSION['instanceID'], "client_data");
    $session_maintain->add_client_field("client_firstname", $records[0]["FIRST_NAME"], $_SESSION['instanceID'], "client_data");
    $session_maintain->add_client_field("client_active_tab", "client_profile", $_SESSION['instanceID'], "client_data");
    $session_maintain->add_client_field("user", $records[0]["NAME"], $_SESSION['instanceID'], "client_data");
    $session_maintain->add_client_field("client_id", $recid, $_SESSION['instanceID'], "client_data");
    $session_maintain->add_client_field("name", $records[0]["NAME"], $_SESSION['instanceID'], "client_data");
    $session_maintain->add_client_field("directory_period_id", $per_id,$_SESSION['instanceID'], "client_data");   
    $_SESSION["uid"] = $records[0]["NAME"];
    $_SESSION["user_type"] = IS_SHADOW_USER;
    return "SUCCESS";
}

?>
