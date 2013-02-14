<?php
// session and instance handling
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
global $koolajax;
require $path_doc_root . '/dashboard/initialize-callbacks.php';
require $path_doc_root . '/include/KoolPHPSuite/KoolAjax/koolajax.php';
$koolajax->scriptFolder = './../include/KoolPHPSuite/KoolAjax';
?>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Dashboard | Client Login</title>
        <script type="text/javascript" src="../../common/ui/js/jquery-min.js"></script>
        <script type="text/javascript" src="../../common/ui/js/jquery-ui.min.js"></script>
        <script type="text/javascript" src="../../include/js/login_client.js"></script>
        <?php require $path_doc_root . '/include/messaging.php'; ?>
        <link href="../administrator/styles/themes/redmond/jquery-theme.css" type="text/css" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="../site.css"/>
        <link rel="shortcut icon" href="/images/icon.ico" type="image/x-icon"/>
        <link href='http://fonts.googleapis.com/css?family=Gentium+Basic:400italic' rel='stylesheet' type='text/css'>
        <?php echo $koolajax->Render(); ?>
    </head>
    <body class="login">
        <div class="nav"><?php //echo var_export($_SESSION,true); //echo var_export($_SERVER, true);       ?>
            <div id="nav_text">
                Dashboard | Client Login
            </div>
        </div>
        <div class="wrapper">
            <div class="document" style="width: 100%; background-color: white; min-height: 300px;"></div>
            <div class="BackgroundShadow">
                <div id="FormImageWrapper">
                    <div  class="loginform">
                        <div id="submitform">
                            <img src="../images/secure.gif" height="16px" width="16px"/>
                            <b><font color="#C00000">Secure Sign-In Form</font></b>
                            <a class="registerlink" href="registration.php">Register</a>
                            <br/><div class="FormInnerContainer">
                                <input id="login_username" class="inputtext"  type="text" name="username" class="username" autofocus="autofocus" autocorrect="off" spellcheck="false" placeholder="email address" onkeypress="searchKeyPress(event);"/>
                            </div>
                            <div class="FormInnerContainer">
                                <input id="login_password" class="inputtext" type="password"  name="password" class="password" autocorrect="off" spellcheck="false" placeholder="password" onkeypress="searchKeyPress(event);"/>
                            </div>
                            <div id="errormsg" class="ErrorText" style="height: 35px; min-height: 35px;"></div>
                            <button id="loginbtn" tabindex="3" type="button">Login</button>
                            <div id="forgotpwd">
                                <a class="reset" href="#">Forgot your password?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </body>
</html>