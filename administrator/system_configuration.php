<?php
if (!isset($_SESSION)) {
    session_start();
}
if (!isset($_SESSION["uid"])) {
    include("login.php");
    return;
} else {
    if (isset($_SESSION['LAST_ACTIVITY']) && (time() - $_SESSION['LAST_ACTIVITY'] > $_SESSION['TIMEOUT'])) {
        unset($_SESSION['uid']);
        session_destroy();   // destroy session data in storage
        session_unset();     // unset $_SESSION variable for the runtime
        include("login.php");
        return;
    }
    $_SESSION['LAST_ACTIVITY'] = time();
}
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once("callbacks.php");
require_once($path_doc_root . "/include/KoolPHPSuite/KoolAjax/koolajax.php");
$koolajax->scriptFolder = "./../include/KoolPHPSuite/KoolAjax";
if ($koolajax->isCallback)
    sleep(0);
date_default_timezone_set("Pacific/Auckland");
?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="chrome=1"/>
        <script></script>
        <?php include($path_doc_root . "/include/messaging.php"); ?>
        <link rel="stylesheet" type="text/css" href="styles/style.css" />
        <link type="text/css" href="styles/themes/redmond/jquery-theme.css" rel="stylesheet" />
        <script type="text/javascript" src="scripts/jquery-min.js"></script>
        <script type="text/javascript" src="scripts/jquery-ui.min.js"></script>
        <script type="text/javascript" src="scripts/administrator.js"></script> <!-- directory business procedures -->
        <title>Hubstar | Setup Control Panel</title>
        <?php echo $koolajax->Render(); ?>
    </head>
    <body>
        <div id="wrapper">
            <div class="admin-panel">
                <div class="header-panel">
                    <?php include "header_navigation.php"; ?>
                </div>
                <div class="mainbody-panel">
                    <div class="top-panels">
                        <div class="export-options-panel">
                            <div id="tabs">
                                <ul>
                                    <li><a href="#tab-content-1">Domains Setup</a></li>
                                </ul>
                                <div id="tab-content">
                                    <?php include("domain_setup.php"); ?>
                                </div>
                            </div>
                        </div>
                        <div class="footer-panel"/>
                    </div>
                </div>
            </div> 
        </div>
    </body>
</html>
