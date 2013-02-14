<?php
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . "/administrator/helper.php");
include_once($path_doc_root . "/common/sessionmaintain.php");
if (!isset($_SESSION)) {
   session_start();
   //$_SESSION['client_active_tab'] = "profile";
   session_maintain::add_client_field('client_active_tab', 'profile', $instanceID, "client_data");
}
$helper = new Helper();
$helper->initdb($DB_HOST, $DB_PORT, $DB_USER, $DB_PASS, $DB_NAME);
$helper->tpldb($DB_NAME);
$result = $helper->changeClientStatus($_GET["email"],1);
header("Location: ".$PORTAL_URL);
/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
?>
