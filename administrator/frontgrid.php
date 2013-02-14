

<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . '/config.php');
include_once($path_doc_root . '/common/ui/datagrid/datagridController.php');
include_once $path_doc_root . "/common/dao/TplClientDAO.php";
include_once $path_doc_root . "/common/dao/TplProduct.php";
include_once $path_doc_root . "/common/dao/TplSearchLogosDAO.php";

$datagrid = new datagrid();
$tplclientdao = new TplClientDAO();
$datagrid->setDAOClass($tplclientdao);
$datagrid->addColumnHeader("Client Name");
$datagrid->addColumnHeader("Trading Name");
$datagrid->addColumnHeader("Contact Number");
$datagrid->addColumnHeader("Email Address");
$datagrid->setDAOName("TplClientDAO");
$array = array();
$datagrid->setDAOParaArr($array);
$datagrid->setDAOCountMethod("countForFrontGrid");
$datagrid->setDAOMethod("selectForFrontGrid");
$datagrid->setItemPerPage(10);
$datagrid->setDBName($GLOBALS["DB_NAME"]);
$datagrid->render();
?>