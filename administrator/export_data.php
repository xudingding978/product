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

$koolajax->enableFunction("CB_SaveBrandTemplate");
$koolajax->enableFunction("CB_SaveProductTemplate");
$koolajax->enableFunction("CB_SaveSupplierTemplate");
$koolajax->enableFunction("CB_SaveShawsTemplate");

$koolajax->enableFunction("CB_GetAvailableDirYears");
$koolajax->enableFunction("CB_NewTemplate");
$koolajax->enableFunction("CB_ExportData");
$koolajax->enableFunction("CB_CheckTimeout");
?>
<!DOCTYPE html>
<html>
    <head>
        <script></script>
        <link rel="stylesheet" type="text/css" href="styles/style.css" />
        <link type="text/css" href="styles/themes/redmond/jquery-theme.css" rel="stylesheet" />
        <script type="text/javascript" src="scripts/jquery-min.js"></script>
        <script type="text/javascript" src="scripts/jquery-ui.min.js"></script>
        <script type="text/javascript" src="scripts/administrator.js"></script> <!-- directory business procedures -->
        <title>Hubstar | Export Control Panel</title>
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
                                    <li><a href="#tab-content-1">Brand</a></li>
                                    <li><a href="#tab-content-2">Product</a></li>
                                    <li><a href="#tab-content-3">Supplier</a></li>
                                    <li><a href="#tab-content-4">Shaws</a></li>
                                </ul>
                                <div id="tab-content-1">
                                    <?php
                                    include("brandtab.php");
                                    ?>
                                </div>
                                <div id="tab-content-2">
                                    <?php
                                    include("producttab.php");
                                    ?>
                                </div>
                                <div id="tab-content-3">
                                    <?php
                                    include("suppliertab.php");
                                    ?>
                                </div>
                                <div id="tab-content-4">
                                    <?php
                                    include("shawstab.php");
                                    ?>
                                </div>
                            </div>
                        </div>
                        <!--<div class="right-border">
                                <img src="images/vdivider.png"/>
                        </div>-->
                        <div class="footer-panel"/>
                        <?php include("../dashboard/mainfooter.php"); ?>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>