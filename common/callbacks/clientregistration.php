<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . '/config.php');
include_once $path_doc_root . "/common/util/DBTransaction.php";
include_once $path_doc_root . "/common/dao/TplClientDAO.php";
include_once($path_doc_root . "/dashboard/dm/media_handler.php");
include_once($path_doc_root . '/include/recaptchalib.php');

$action = $_REQUEST["action"];
error_log("Action....................?????...............................................:".$action);
/* Login Validation */
if ($action == 'loginValidation') {
    error_log("loginValidation");
    loginValidation();
}
if ($action == 'checkemailexist') {
    error_log("checkemailexist");
    checkEmailExist();
}
error_log("Action................................................:".$action);
if ($action == 'captchaVerify') {
    error_log("captchaVerify");
    captchaVerify();
}
if ($action == 'clientregister') {
    error_log("clientregister");
    clientRegister();
}
if ($action == 'curruncyconversion') {
    error_log("curruncyconversion");
    curruncyConversion();
}


function loginValidation() {
    try {
        $username = $_REQUEST["email"];
        $password = $_REQUEST["password"];

        $dbtrans = new DBTransaction();
        $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
        $tplclientdao = new TplClientDAO();
        $array = array($username);
        $records = $tplclientdao->selectEmail($dbconn, $array);

        if (count($records) > 0) {
            $user = $records[0];
            if (MD5($password) == $user["PASSWORD"]) {

                $session_maintain = new session_maintain();
                if (!isset($_SESSION['instanceID'])) {

                    $_SESSION['instanceID'] = md5(uniqid(rand(), true));
                } else {
                    if (!isset($_SESSION))
                        session_start();
                    $_SESSION['instanceID'] = md5(uniqid(rand(), true));
                }
                $array_client = $session_maintain->add_client_field("client_user", $username, $_SESSION['instanceID'], "client_data");
                $array_client = $session_maintain->add_client_field("client_username", $username, $_SESSION['instanceID'], "client_data");
                $array_client = $session_maintain->add_client_field("client_firstname", $username, $_SESSION['instanceID'], "client_data");
                $array_client = $session_maintain->add_client_field("client_active_tab", "client_profile", $_SESSION['instanceID'], "client_data");
                $array_client = $session_maintain->add_client_field("user", $username, $_SESSION['instanceID'], "client_data");
                $array_client = $session_maintain->add_client_field("client_role", "nosetyet", $_SESSION['instanceID'], "client_data");
                $array_client = $session_maintain->add_client_field("client_id", $user['REC_ID'], $_SESSION['instanceID'], "client_data");
                $array_client = $session_maintain->add_client_field("client_name", $user['NAME'], $_SESSION['instanceID'], "client_data");
                $_SESSION["user"] = $username;
                $_SESSION["user_type"] = IS_SHADOW_USER;

                $retval = "SUCCESS";
            } else {
                $retval = INVALID_PASSWORD;
            }
        } else {
            $retval = INVALID_USER;
        }
        //error_log("Finish:".$retval);


        $retval = "Success";
    } catch (Exception $e) {
        echo "Error!: " . $e->getMessage();
        $retval = "Fail";
        ;
    }
    echo $retval;
}

function checkEmailExist() {
    $email = $_REQUEST["email"];
    $dbtrans = new DBTransaction();
    $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
    $tplclientdao = new TplClientDAO();
    $array = array($email);
    $records = $tplclientdao->selectCheckEmailExist($dbconn, $array);
    $retval = "Email OK";
    if ($records > 0) {
        $retval = "Email Already Exist";
    }
    echo $retval;
}

function captchaVerify() {
    $recaptcha_challenge_field = $_REQUEST["recaptcha_challenge_field"];
    $recaptcha_response_field = $_REQUEST["recaptcha_response_field"];
    $privatekey = "6Ld_hNkSAAAAAHh4P6kVg-4878I9yiREaLB55Ptt";
    $response = "FAIL";

    $resp = recaptcha_check_answer($privatekey, $_SERVER["REMOTE_ADDR"], $recaptcha_challenge_field, $recaptcha_response_field);
    if ($resp->is_valid) {
       $response = "OK";
    }
    error_log($response);
    echo $response;
 
}

function clientRegister() {
    $dbtrans = new DBTransaction();
    $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
    $tplclientdao = new TplClientDAO();


    $name = $_REQUEST["firstname"];
    $firstName = $_REQUEST["firstname"];
    $lastName = $_REQUEST["lastname"];
    $email = $_REQUEST["email"];
    $userName = $_REQUEST["email"];
    $pw = $_REQUEST["password"];
    $activation = md5(uniqid(rand(), true));
    $array = array($name, $firstName, $lastName, $userName, md5($pw), $email, $activation);
    $tplclientdao->addClientBasic($dbconn, $array);

    $activationURL = $PORTAL_URL . 'verify.php?email=' . urlencode($email) . "&key=$activation";

    error_log($activationURL);


    $to = $email;
//    $subject = 'Registration successful and Activation   ';
//    $message = 'Thank you for registering! Please click following  URL and activate your account in Another innovation directory service account .'
//            . $activationURL;
//    $headers = 'From: AnotherInnovation<anotherinnovationnz@gmail.com>';
//    mail($to, $subject, $message, $headers);
    $retval = "Regitered";
    echo $retval;
}
function curruncyConversion() {
    $from=$_REQUEST["fromcurruncy"];
    $to=$_REQUEST["convertcurruncy"];
    $string = "1" . $from . "=?" . $to;
    error_log("Toooooooooooooooooo................................:".$from);
    //Call Google API
    $google_url = "http://www.google.com/ig/calculator?hl=en&q=" . $string;
    error_log("Google URL................................:".$google_url);
    $result = file_get_contents($google_url);
    $result = explode('"', $result);
    $converted_amount = explode(' ', $result[3]);
    $conversion = $converted_amount[0];
    echo $conversion;
}


?>
