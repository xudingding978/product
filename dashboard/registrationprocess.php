<style type="text/css">
    body {
        font-family:"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif;
        font-size:12px;
    }

</style>


<?php
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once "../common/util/DBTransaction.php";
include_once "../common/dao/TplClientDAO.php";

if (!isset($_SESSION))
    session_start();
$instanceID = md5(uniqid(rand(), true));
$_SESSION['instanceID'] = $instanceID;

$dbtrans = new DBTransaction();
$dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
$tplclientdao = new TplClientDAO();


$name = $_POST["firstname"];
$firstName = $_POST["firstname"];
$lastName = $_POST["lastname"];
$email = $_POST["email"];
$userName = $_POST["email"];
$pw = $_POST["password"];
$activation = md5(uniqid(rand(), true));
$array = array($name, $firstName, $lastName, $userName, md5($pw), $email, $activation);
$tplclientdao->addClientBasic($dbconn, $array);

$activationURL = $PORTAL_URL . 'verify.php?email=' . urlencode($email) . "&key=$activation";

error_log($activationURL);


$to = $email;
$subject = 'Registration successful and Activation   ';
$message = 'Thank you for registering! Please click following  URL and activate your account in Another innovation directory service account .' 
                   .$activationURL;
$headers = 'From: AnotherInnovation<anotherinnovationnz@gmail.com>';

if (mail($to, $subject, $message, $headers)){?>
    <div id="Layer2" style="position:absolute; 
                           visibility:visible; 
                           width:100%; 
                           height:100px; 
                           background-color:#EEEEEE; 
                           layer-background-color:#CCFFCC; 
                           border:1px none #000000; 
                           z-index:2"> 
     <center><p>Thank you for
        registering! A confirmation email
        has been sent to <b> <?php echo $email ;?> </b> Please check the email and click on the Activation Link to Activate your account </div> </br></br></br></br></p></center>
   </div>
<?php }else {?>
   <div id="Layer3" style="position:absolute; 
                           visibility:visible; 
                           width:100%; 
                           height:50px; 
                           background-color:#EEEEEE; 
                           layer-background-color:#CCFFCC; 
                           border:1px none #000000; 
                           z-index:2"> 
     <center><p>Error. Registration process is not completed.</p></center>
   </div>
  
<?php }?>


   

