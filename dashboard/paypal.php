<?php

if (!isset($_SESSION)) {
    session_start();
}
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . "/common/paypal.class.php");
include_once $path_doc_root . "/common/util/DBTransaction.php";
include_once $path_doc_root . "/common/dao/TplClientDAO.php";


//include_once "../common/dao/TplDirectoryPeriodDAO.php";
$p = new paypal_class;             // initiate an instance of the class


$p->paypal_url = 'https://www.sandbox.paypal.com/cgi-bin/webscr';   // testing paypal url

$this_script = 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['PHP_SELF'];

if (empty($_GET['action']))
    $_GET['action'] = 'process';

switch ($_GET['action']) {
    case 'process':      // Process and order
        $p->add_field('first_name', $_SESSION["firstname"]);
        $p->add_field('last_name', $_SESSION["lastname"]);
        $p->add_field('business', $PAYPAL_BUISNESS_EMAIL);
        $p->add_field('return', $this_script . '?action=success');
        $p->add_field('cancel_return', $this_script . '?action=cancel');
        $p->add_field('notify_url', $this_script . '?action=ipn');
        $p->add_field('item_name', 'Directory service purchasing');
        $p->add_field('amount', $_SESSION["amount"]);
        $p->add_field('currency_code', $_SESSION["curruncy_code"]);       

        //$p->submit_paypal_post();
        header("location:/dashboard/index.php");
        break;

    case 'success':      // Order was successful... 
        
        foreach ($this->ipn_data as $key=>$value) {
         
         echo $key."=".$value;
      }    
        
        echo "<html>\n";
        echo "<head><title>Success</title></head>\n";
        echo "<body onLoad=\"document.forms['success_form'].submit();\">\n";
        echo "<h3>Thank you for your order.</h3>\n";
        echo "<center><h2>Please wait, your payment is success and you";
        echo " will be redirected to the paypal website.</h2></center>\n";
        echo "<form method=\"post\" name=\"success_form\" ";
        echo "action=\"/dashboard/index.php\">\n";
        echo "<center><br/><br/>If you are not automatically redirected to ";
        echo "paypal within 5 seconds...<br/><br/>\n";
        echo "<input type=\"submit\" value=\"Click Here\"></center>\n";

        echo "</form>\n";
        echo "</body></html>\n";

        break;

    case 'cancel':

        echo "<html><head><title>Canceled</title></head><body><h3>The order was canceled.</h3>";
        echo "</body></html>";

        break;

    case 'ipn':          // Paypal is calling page for IPN validation...      

        if ($p->validate_ipn()) {

            $subject = 'Instant Payment Notification - Recieved Payment';
            $to = $PAYPAL_BUISNESS_EMAIL;    //  your email
            $body = "An instant payment notification was successfully recieved\n";
            $body .= "from " . $p->ipn_data['payer_email'] . " on " . date('m/d/Y');
            $body .= " at " . date('g:i A') . "\n\nDetails:\n";
        }
        break;
}

function objectToArray($d) {
    if (is_object($d)) {
        // Gets the properties of the given object
        // with get_object_vars function
        $d = get_object_vars($d);
    }

    if (is_array($d)) {
        /*
         * Return array converted to object
         * Using __FUNCTION__ (Magic constant)
         * for recursive call
         */
        return array_map(__FUNCTION__, $d);
    } else {
        // Return array
        return $d;
    }
}

?>