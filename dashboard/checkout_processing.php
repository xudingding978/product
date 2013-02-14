<?php

if (!isset($_SESSION)) {
    session_start();
}
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
//include_once($path_doc_root . "/dashboard/paypal.php");
include_once $path_doc_root . "/common/util/DBTransaction.php";
include_once $path_doc_root . "/common/dao/TplClientDAO.php";
include_once $path_doc_root . "/common/dao/TplShadowRootDAO.php";
include_once $path_doc_root . "/common/dao/TplShadowSupplierDAO.php";
include_once $path_doc_root . "/common/dao/TplShadowDirectoryPeriodOfferingDAO.php";
include_once $path_doc_root . "/common/dao/TplShadowSupplierShadowRootDAO.php";
include_once $path_doc_root . "/common/dao/TplShadowDirectoryPeriodAdditionalOfferingDAO.php";
include_once $path_doc_root . "/common/dao/TplTransactionInvoiceDAO.php";
include_once $path_doc_root . "/common/dao/TplTenantDAO.php";
include_once $path_doc_root . "/dashboard/client_order.php";
include_once $path_doc_root . "/dashboard/client_invoice.php";
include_once $path_doc_root . "/dashboard/client_transaction.php";
include_once $path_doc_root . "/common/util/DurationCalculator.php";
include_once($path_doc_root . "/common/sessionmaintain.php");


include_once 'constants.php';

$session_maintain = new session_maintain();
$instanceID = md5(uniqid(rand(), true));
$_SESSION['instanceID'] = $instanceID;




$cart_arr = json_decode($_POST['client_cart'], true);
$_SESSION["client_cart"] = $cart_arr;
$_SESSION["amount"] = $_POST['total_amount'];
$_SESSION["curruncy_code"] = $_POST['curruncy_code'];
$_SESSION["tenantId"] = 1;

$dbtrans = new DBTransaction();
$dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
$tplclientdao = new TplClientDAO();
$email = $_POST['email'];
//$clientorderplace = new ClientOrderPlace();
//$clientorderplace->orderProcess($cart_arr, $_POST['total_amount']);
error_log("Email:::::.....................................:".$email);
$array = array($email);
$client = $tplclientdao->selectEmail($dbconn, $array);
$client_id = 0;
$firstname = "";
$lastname = "";

$name = "";
$userName = "";
$pw = "";
if (count($client) > 0) {
    $firstname = $client[0]["FIRST_NAME"];
    $lastname = $client[0]["LAST_NAME"];
    $client_id = $client[0]["REC_ID"];
    $name = $client[0]["FIRST_NAME"];
    $userName = $client[0]["EMAIL_ADDRESS"];
    $pw = $client[0]["PASSWORD"];
}

$_SESSION["instanceID"] = $instanceID;
$session_maintain->add_client_field('user', $email, $instanceID, 'client_data');
$session_maintain->add_client_field('client_user', $userName, $instanceID, 'client_data');
$session_maintain->add_client_field("client_active_tab", "client_profile", $instanceID, "client_data");
$session_maintain->add_client_field("user_type", IS_SHADOW_USER, $instanceID, "client_data");
$session_maintain->add_client_field("role", "dummy", $instanceID, "client_data");
$session_maintain->add_client_field("name", $firstName . " " . $lastName, $instanceID, "client_data");
$session_maintain->add_client_field("client_id", $client_id, $instanceID, "client_data");

$_SESSION["firstname"] = $firstname;
$_SESSION["lastname"] = $lastname;
$_SESSION["client_id"] = $client_id;


/* Order Processing   */



$checkoutstatus=checkoutProcess($client_id, $cart_arr);


/* Papal Transaction */
if($checkoutstatus){
   header("location:/dashboard/paypal.php");
}

//header("location:/dashboard/paypal.php?total_amount=".$_POST['total_amount']."&curruncy_code=".$_POST['curruncy_code']."&firstname=".$firstname."&lastname=".$lastname);
function checkoutProcess($client_id, $cart_arr) {
    //require_once ($GLOBALS["path_doc_root"] . "/common/sessionhandler.php");
    $dbconn = null;
    //$cart_arr = $_SESSION["client_cart"];
    error_log("checkoutProcess.....................................................");
    $shadowSupplierLastID = 0;
    try {
        $queryStartTransaction = "";
        $queryEndTransaction = "";
        $packageDes = "";
        $packageType = "";
        $categoryCount = 5;
        $queryShadowRootLastID = 0;
        $dbtrans = new DBTransaction();
        
        
        $clientorder = new ClientOrder();
        $clientinvoice = new ClientInvoice();
        $clienttransaction = new ClientTransaction();
        
        $transactioninvoice = new TplTransactionInvoiceDAO();
        
        //$tplorderitemdao = new TplOrderItemsDAO();
        
        
        $tplshadowrootdao = new TplShadowRootDAO();
        $tplshadowsupplierdao = new TplShadowSupplierDAO();
        
        $tpltenantdao = new TplTenantDAO();
        
        $dbconn = $dbtrans->getConnection($GLOBALS["ADMIN_DB_NAME"]);
        /* Generate Invoice Reference,Order Reference and Transaction Reference    */
        error_log($_SESSION["tenantId"]."Tenant ");
        $array = array($_SESSION["tenantId"],$_SESSION["tenantId"]);
        $tpltenant=$tpltenantdao->selectUpdate($dbconn, $array);
        $invoice_ref=  str_pad($tpltenant[0]["LAST_INVOICE_ID"], 7,"0",STR_PAD_LEFT);
        $order_ref=str_pad($tpltenant[0]["LAST_ORDER_ID"], 7,"0",STR_PAD_LEFT);
        $trn_ref=str_pad($tpltenant[0]["LAST_TRANSACTION_ID"], 7,"0",STR_PAD_LEFT);
        
        $invoice_ref="INV_".$invoice_ref;
        $order_ref="ORD_".$order_ref;
        $trn_ref="TRN_".$trn_ref;
        //error_log($tpltenant[0]["LAST_INVOICE_ID"]."Test ");
        
        
        $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
        
        $dbconn->beginTransaction();
        
        
        /* Add Order     */       
        $array = array($_SESSION["client_id"], $_SESSION["curruncy_code"], ($_SESSION["amount"] * 100 / 115), 15, $_SESSION["amount"], $order_ref);
        $order_id = $clientorder->addOrder($dbconn, $array);
        
        /* Add Invoice   */        
        $array = array($_SESSION["amount"],'',$invoice_ref,1,'NOTES',$order_id,PAYPAL ,PENDING,15 );
        $invoice_id = $clientinvoice->addInvoice($dbconn, $array);
        
        /* Add Transaction   */
        $array = array($trn_ref,$_SESSION["amount"],'',PAYPAL,'');
        $transaction_id=$clienttransaction->addTransaction($dbconn, $array);
        $_SESSION["transaction_id"]=$transaction_id;
         /* Add Transaction_Invoioce   */
        $array = array($invoice_id,$transaction_id);
        $transactioninvoice->insert($dbconn, $array);        
        
        $shadowdirectoryadditionalofferID = 0;
        $shadowdirectoryofferID = 0;
        $directoryperiodorderid = 0;
        $directoryperiodorderitemid = 0;
        
        $lastinvoicedate;
        $nextinvoicedate;
        
        $duration = new DurationCalculator();
        
        foreach ($cart_arr["client_cart"] as $directory) {

            if ($directory["parentid"] == '0') {
                /* Period Order add                */
                
               //"startdate":"'+startdate+'","enddate":"'+enddate+'",
                $lastinvoicedate=$directory["enddate"];
                if($directory["payment_method"]=="one_off"){                    
                    $nextinvoicedate=$directory["enddate"];
                }else{                    
                    $nextinvoicedate=$duration->nextDueDate($directory["startdate"], $directory["payment_method"], 1);
                }
                
                $array = array($directory["dirid"], $lastinvoicedate,$nextinvoicedate, $order_id, $directory["payment_method"],ACTIVE);
                $directoryperiodorderid=$clientorder->addDirectoryPeriodOrder($dbconn, $array);
                if ($directory["packagename"] == 'Standard') {
                    $packageType = 'Standard Listing';
                    $packageDes = "A standard listing in the Pack and Print directory for 2010 allows you to list your basic contact details as well as five product and service listings.";
                } else if ($directory["packagename"] == 'Advanced Listing') {
                    $packageType = 'Advanced';
                    $packageDes = "An advanced listing in the Pack and Print directory for 2010 allows you to list your contact details, company profile, key personnel, five brand listings and twelve product and service listings.";
                    $categoryCount = 12;
                } else {
                    $packageType = 'Premium Listing';
                    $packageDes = "A premium listing in the Pack and Print directory for 2010 allows you to list your company logo, contact details, company profile, key personnel, branches/agents, unlimited brand listings and unlimited product and service listings.";
                    $categoryCount = 25;
                }
                $array = array($client_id, $directory["dirid"]);
                $queryShadowRootLastID = $tplshadowrootdao->insertNewClientPeriod($dbconn, $array);

                if ($shadowSupplierLastID == 0) {

                    $array = array($queryShadowRootLastID, $client_id, $directory["productname"] . "_supplier", 'INSERT');
                    $shadowSupplierLastID = $tplshadowsupplierdao->insertNewShadowSupplier($dbconn, $array);
                }

                $tplshadowdirectoryofferdao = new TplShadowDirectoryPeriodOfferingDAO();
                $array = array($queryShadowRootLastID, $packageType, $packageDes, $directory["price"], $categoryCount);
                $shadowdirectoryofferID = $tplshadowdirectoryofferdao->insert($dbconn, $array);

                $tplshadowsuppliershadowrootdao = new TplShadowSupplierShadowRootDAO();
                $array = array($shadowSupplierLastID, $queryShadowRootLastID);
                $tplshadowsuppliershadowrootdao->insert($dbconn, $array);
            } else {
                $tplshadowtplshadowdirectoryperiodadditionalofferingdao = new TplShadowDirectoryPeriodAdditionalOfferingDAO();
                $array = array($directory["price"], '', $directory["productname"], $queryShadowRootLastID);
                $shadowdirectoryadditionalofferID = $tplshadowtplshadowdirectoryperiodadditionalofferingdao->insert($dbconn, $array);
            }

            error_log("shadowdirectoryadditionalofferID..........:" . $shadowdirectoryadditionalofferID);
            error_log("shadowdirectoryofferID..........:" . $shadowdirectoryofferID);
            /* Period Order Item add                */
            
            $array = array($directoryperiodorderid,$directory["price"], $directory["linetotal"],  $directory["packagename"], $directory["payment_method"], $shadowdirectoryadditionalofferID, $shadowdirectoryofferID,'',15);
            $directoryperiodorderitemid=$clientorder->addDirectoryPeriodOrderItem($dbconn, $array);
            
            /* Add Invoice Item  */           
            $array = array($directoryperiodorderitemid,$invoice_id,$directory["linetotal"]);
            $clientinvoice->addInvoiceItem($dbconn, $array);
            //$tplorderitemdao->insert($dbconn, $array);

            //"productname":"Camping Guide - New Zealand","parentid":"0","payment_method":"one_off","rec_id":2,"dirid":2, "packagename":"Standard", "year":2012 ,"price":400.00 , "packageid":1 , "linetotal":424},{"objectid":"6","productname":"My Fishing Guide - New Zealand","parentid":"0","payment_method":"one_off","rec_id":3,"dirid" :3,"packagename":"Standard","year":2012,"price":100.00 ,"packageid":1,"linetotal":106}] }
        }
        $dbconn->commit();
        return true;
        error_log("After....... Foreach.....................................................");
    } catch (Exception $e) {
        error_log("Exception.....................................");
        if ($dbconn != null) {
            $dbconn->rollBack();
        }
        echo "Failed: " . $e->getMessage();
        return false;
    }
}

?>
