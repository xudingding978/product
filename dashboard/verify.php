<style type="text/css">
    body {
        font-family:"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif;
        font-size:12px;
    }

</style>


<?php
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . "/common/sessionmaintain.php");
include_once "../common/util/DBTransaction.php";
include_once "../common/dao/TplClientDAO.php";

if (!isset($_SESSION))
    session_start();
$session_maintain = new session_maintain();
$instanceID = md5(uniqid(rand(), true));
$_SESSION['instanceID'] = $instanceID;

$dbtrans = new DBTransaction();
$dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
$tplclientdao = new TplClientDAO();

$email = $_GET["email"];
$activation_code = $_GET["key"];
$array = array($activation_code, $email);
$tplclient =$tplclientdao->selectRegisteredClient($dbconn, $array);
?>
<body>
<?php
if (count($tplclient) > 0) {
    $name = $tplclient[0]["FIRST_NAME"];
    $firstName = $tplclient[0]["FIRST_NAME"];
    $lastName = $tplclient[0]["LAST_NAME"];
    $email = $tplclient[0]["EMAIL_ADDRESS"];
    $userName = $tplclient[0]["EMAIL_ADDRESS"];
    $pw = $tplclient[0]["PASSWORD"];


    $_SESSION["instanceID"] = $instanceID;
    $session_maintain->add_client_field('user', $email, $instanceID, 'client_data');
    $session_maintain->add_client_field('client_user', $userName, $instanceID, 'client_data');
    $session_maintain->add_client_field("client_active_tab", "client_profile", $instanceID, "client_data");
    $session_maintain->add_client_field("user_type", IS_SHADOW_USER, $instanceID, "client_data");
    $session_maintain->add_client_field("role", "dummy", $instanceID, "client_data");
    $session_maintain->add_client_field("name", $firstName . " " . $lastName, $instanceID, "client_data");
    header("Location: /dashboard/client_cart.php");  
}else{
?>
    <div id="Layer3" style="position:absolute; 
                           visibility:visible; 
                           width:100%; 
                           height:50px; 
                           background-color:#EEEEEE; 
                           layer-background-color:#CCFFCC; 
                           border:1px none #000000; 
                           z-index:2"> 
     <center><p>Invalid activation code is provided.</p></center>
   </div>
    
<?php } ?>
</body>




  