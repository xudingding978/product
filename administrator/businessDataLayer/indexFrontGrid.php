<?php
session_start();
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once $path_doc_root . "/config.php";
include $path_doc_root . "/common/ui/datagrid/datagridController.php";
include_once $path_doc_root . "/common/dao/TplClientDAO.php";
include_once $path_doc_root . "/common/dao/TplProduct.php";
include_once $path_doc_root . "/common/dao/TplSearchLogosDAO.php";

$datagridController = new datagridController();
$tplclientdao = new TplClientDAO();
$datagridController->setDAOClass($tplclientdao);
$_SESSION["TableData"]["col_headers"] = array("Client Name", "Trading Name", "Contact Number", "Email Address");
$datagridController->setDAOName("TplClientDAO");
$datagridController->setDAOMethod('selectAllClients');
$_SESSION["TableData"]["dataGrid"] = $datagridController->prepareDataGrid();
$_SESSION["TableData"]["rowPerPage"] = 5;
if (isset($_POST['action'])) {
    if ($_POST['action'] == "next") {

        echo json_encode($_SESSION["TableData"]);
    }
}


?>
   


