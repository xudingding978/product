<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
require $path_doc_root . "/config.php";
include_once $path_doc_root . "/common/util/DBTransaction.php";
include_once $path_doc_root . "/common/dao/TplDirectoryPeriodOrdersDAO.php";
include_once $path_doc_root . "/common/dao/TplDirectoryPeriodOrderItemsDAO.php";
include_once $path_doc_root . "/common/dao/TplOrdersDAO.php";

class ClientOrder {

    private $tplordersdao = null;
    private $tpldirectoryperiodordersdao = null;
    private $tpldirectoryperiodorderitemsdao = null;

    function __construct() {
        $this->tplordersdao=new TplOrdersDAO();
        $this->tpldirectoryperiodordersdao=new TplDirectoryPeriodOrdersDAO();
        $this->tpldirectoryperiodorderitemsdao=new TplDirectoryPeriodOrderItemsDAO();
    }

    function orderUpdate() {
        
    }

//    function orderProcess($dbconn) {
//        //$tplordersdao = new TplOrdersDAO();
//        $array = array($_SESSION["client_id"], $_SESSION["curruncy_code"], ($_SESSION["amount"] * 100 / 115), 15, $_SESSION["amount"], "Order_" . rand(100000, 900000), PENDING, PAYPAL, PENDING_ID);
//        $orderid = $this->tplordersdao->insert($dbconn, $array);
//        return $orderid;
//    }
    function addOrder($dbconn,$array) {
        $orderid = $this->tplordersdao->insert($dbconn, $array);
        return $orderid;
    }
    function addDirectoryPeriodOrder($dbconn,$array) {
        $directoryperiodorderid = $this->tpldirectoryperiodordersdao->insert($dbconn, $array);
        return $directoryperiodorderid;
    }
    function addDirectoryPeriodOrderItem($dbconn,$array) {
        return $this->tpldirectoryperiodorderitemsdao->insert($dbconn, $array);       
    }
    

}

?>
