<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . '/config.php');
include_once $path_doc_root . "/common/util/DBTransaction.php";
include_once $path_doc_root . "/common/dao/TplOrdersDAO.php";
include_once $path_doc_root . "/common/dao/TplDirectoryPeriodOrderItemsDAO.php";

$action = $_REQUEST["action"];

if ($action == 'orderdelete') {
    error_log("orderdelete");
    orderDelete();
}
if ($action == 'orderstatusupdate') {
    error_log("orderstatusupdate");
    orderStatusUpdate();
}
if ($action == 'orderitemstatusupdate') {
    error_log("orderitemstatusupdate");
    orderItemStatusUpdate();
}

function orderDelete() {
    try {
        $orderid=$_REQUEST["orderid"];
        $dbtrans = new DBTransaction();
        $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
        $array = array($supplier_brand_id, $supplier_category_id);
        $tplordersdao = new TplOrdersDAO();
        $tplordersdao->delete($dbconn, $array);
        echo "Success";
    } catch (Exception $e) {
        echo "Error!: " . $e->getMessage();
        echo "Fail";
        ;
    }
}
function orderStatusUpdate() {
    try {
        $status=$_REQUEST["status"];
        $recid=$_REQUEST["rec_id"];       
        $dbtrans = new DBTransaction();
        $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
        $array = array($status,$recid);
        $tplordersdao = new TplOrdersDAO();
        $tplordersdao->orderStatusUpdate($dbconn, $array);
        echo "Success";
    } catch (Exception $e) {
        echo "Error!: " . $e->getMessage();
        echo "Fail";
        ;
    }
}
function orderItemStatusUpdate() {
    try {
        $status=$_REQUEST["status"];
        $recid=$_REQUEST["rec_id"];       
        $dbtrans = new DBTransaction();
        $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
        $array = array($status,$recid);
        $tpldirectoryperiodorderitemsdao = new TplDirectoryPeriodOrderItemsDAO();
        $tpldirectoryperiodorderitemsdao->orderItemStatusUpdate($dbconn, $array);
        echo "Success";
    } catch (Exception $e) {
        echo "Error!: " . $e->getMessage();
        echo "Fail";
        ;
    }
}

?>
