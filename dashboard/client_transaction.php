<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
require $path_doc_root . "/config.php";
include_once 'constants.php';
include_once $path_doc_root . "/common/util/DBTransaction.php";
include_once $path_doc_root . "/common/dao/TplTransactionsDAO.php";


class ClientTransaction {  

    private $tpltransactiondao = null;
    

    function __construct() {
        $this->tpltransactiondao = new TplTransactionsDAO();       
    }

    function transactionUpdate() {
        
    }

//    function transactionProcess($dbconn) {
//        $tplordersdao = new TplOrdersDAO();
//        $array = array($_SESSION["client_id"], $_SESSION["curruncy_code"], ($_SESSION["amount"] * 100 / 115), 15, $_SESSION["amount"], "Order_" . rand(100000, 900000), self::PENDING, self::PAYPAL, self::PENDING_ID);
//        $orderid = $tplordersdao->insert($dbconn, $array);
//        return $orderid;
//    }
    function addTransaction($dbconn,$array) {
        $orderid = $this->tpltransactiondao->insert($dbconn, $array);
        return $orderid;
    }
}

?>
