<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
require $path_doc_root . "/config.php";
include_once 'constants.php';
include_once $path_doc_root . "/common/util/DBTransaction.php";
include_once $path_doc_root . "/common/dao/TplInvoiceItemsDAO.php";
include_once $path_doc_root . "/common/dao/TplInvoicesDAO.php";

class ClientInvoice {
    
    private $tplinvoiceitemsdao = null;
    private $tplinvoicessdao = null;   

    function __construct() {
        $this->tplinvoiceitemsdao = new TplInvoiceItemsDAO();
        $this->tplinvoicessdao = new TplInvoicesDAO();       
    }

    function invoiceUpdate() {
        
    }

//    function invoiceProcess($dbconn) {
//        $tplordersdao = new TplOrdersDAO();
//        $array = array($_SESSION["client_id"], $_SESSION["curruncy_code"], ($_SESSION["amount"] * 100 / 115), 15, $_SESSION["amount"], "Order_" . rand(100000, 900000), self::PENDING, self::PAYPAL, self::PENDING_ID);
//        $orderid = $tplordersdao->insert($dbconn, $array);
//        return $orderid;
//    }
    function addInvoice($dbconn,$array) {
        $orderid = $this->tplinvoicessdao->insert($dbconn, $array);
        return $orderid;
    }
    function addInvoiceItem($dbconn,$array) {
        $orderid = $this->tplinvoiceitemsdao->insert($dbconn, $array);
        return $orderid;
    }
    

}

?>
