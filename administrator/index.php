<?php
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
require($path_doc_root . "/config.php");
include_once $path_doc_root . "/common/util/DBTransaction.php";
include_once $path_doc_root . "/common/dao/TplAdminUsersDAO.php";

if (!isset($_SESSION)) {
    session_start();
    unset($_SESSION['TableData']);
} else {
    unset($_SESSION['TableData']);
}

if (!isset($_SESSION["username"])) {
    include("login.php");
    return;
}

include_once("callbacks.php");
include_once("constants.php");
//include_once("frontgrid.php");

if (!isset($_POST["selected_query"]))
    $_POST["selected_query"] = $_SESSION["fgid"];

if ($koolajax->isCallback) {
    sleep(0);
    date_default_timezone_set("Pacific/Auckland");
}

function isAllowed($view, $role) {
    $bRet = true;
    switch ($view) {
        case ACCOUNT: if ($role != SUPERADMIN)
                $bRet = false; break;
        case CLIENT: if ($role != SUPERADMIN)
                $bRet = false; break;
        case CATEGORY: if ($role != SUPERADMIN)
                $bRet = false; break;
        case DIRECTORY: if ($role != SUPERADMIN)
                $bRet = false; break;
        case S2L2S: if ($role != SUPERADMIN)
                $bRet = false; break;
    }
    return $bRet;
}
?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head> 
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="chrome=1"/>
        <title>HubStar | Administrator Control Panel</title> 
        <script type="text/javascript" src="../../include/js/jquery-latest.min.js"></script>
        <script type="text/javascript" src="../../include/js/coolmessage.js"></script>
        <script type="text/javascript" src="scripts/jquery-ui.min.js"></script>
        <script type="text/javascript" src="scripts/directory-control.js"></script>
        <script type="text/javascript" charset="UTF-8" src="scripts/administrator.js"></script>
        

        <script type="text/javascript" src="scripts/epoch_classes.js"></script>
        <link rel="stylesheet" type="text/css" href="../../include/css/coolmessage.css" />
        <link rel="stylesheet" type="text/css" href="styles/epoch_styles.css" />
        <link type="text/css" href="styles/themes/redmond/jquery-theme.css" rel="stylesheet" />
        <link rel="stylesheet" href="../dashboard/styles/fontawesome/css/font-awesome.css"/>
        <link type="text/css" href="styles/style.css" media="all" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" href="/common/ui/css/silk/silk-sprite.css"/>
        <link rel="stylesheet" type="text/css" href="/common/ui/css/ui.datagrid.css" />
        <link type="text/css" href="/common/ui/css/grid.css" rel="stylesheet">
            <?php echo $koolajax->Render(); ?>
    </head>
    <body>
        <div id="wrapper">
            <div class="admin-panel">            
                <?php include "header_navigation.php"; ?>
                <div class="mainbody-panel">
                    <div class="top-panels">
                        <div class="client-options-panel">
                            <div id="tab1s">
                                <ul>
                                    <li><a href="#tab-content-1">Clients</a></li>
                                    <li><a href="#tab-content-1-Directory-Listings">Listings</a></li>
                                </ul>
                                <div id="tab-content-1">
                                    <button id="addclient">Add Client</button>
                                    <button id="editclient">Edit Client</button>
                                    <?php
                                    if (isAllowed(ACCOUNT, $_SESSION["role"]) == true)
                                        echo '<button id="removeclient">Remove Client</button>';
                                    else
                                        echo '<button id="removeclient" disabled>Remove Client</button>';
                                    ?>
                                </div>
                                <div id ="tab-content-1-Directory-Listings">
                                    <button id="all_listings">All Listings</button>
                                    <button id="listings_by_directory">Listings By Directory</button>
                                    <button id="listings_by_client">Listings By Client</button>
                                </div>
                            </div>
                        </div>
                        <div class="directory-status-panel">
                            <div id="tab5s">
                                <ul>
                                    <li><a href="#tab-content-1">Directory Selection</a></li>
                                    <li><a href="#tab-content-directory-options-2">Directory Options</a></li>
                                    <li><a href="#tab-content-directory-reports-3">Directory Reports</a></li>
                                </ul>
                                <div id="tab-content-1">
                                    <?php
                                    //include_once ("helper.php");
                                    //$helper = new Helper();
                                    ?>
                                    <form id="thestatusform">
                                        <table width="100%" border="0">
                                            <tr>
                                                <td>
                                                    <div id="dirDiv">
                                                        <select id="directorySelector" name="directorySelector" onChange="reLoadPeriods('periodSelector', $('#directorySelector option:selected').val());
                                                                updateHeader();
                                                                updateContent($('#periodSelector option:selected').val());
                                                                updateDefaultDirectoryPeriod($('#periodSelector option:selected').val());">
                                                            <option selected value="0">Select Default Directory</option>
                                                        </select>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div id="periodDiv">
                                                        <select id="periodSelector" name="periodSelector" onChange="updateHeader();
                                                                updateContent($('#periodSelector option:selected').val());
                                                                updateDefaultDirectoryPeriod($('#periodSelector option:selected').val());">
                                                            <option selected value="0">Select Default Period</option>
                                                        </select>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="3">
                                                    <div id="contentDiv">
                                                        <table width="100%" border="0">
                                                            <tr>
                                                                <td>
                                                                    <table width="100%" border="0">
                                                                        <tr>
                                                                            <td width="20%" align="right"><b><small><span class="directory_status_label">OPEN</span></small></b></td>
                                                                            <td width="20px" align="center"><span class="ui-silk ui-silk-report-edit"></span></td>
                                                                            <td width="50px" align="left"><b><small><span id="cnt_open" class="directory_status_count">0</span></small></b></td>
                                                                            <td width="5px"><img src="/images/spacer.gif" width="5px" height="20px"/></td>
                                                                            <td width="20px"><span class ="ui-silk ui-silk-money"></span></td>
                                                                            <td width="100px"><b><small id="rev_open">$0.00</small></b></td>
                                                                            <td><b><small> </small></b></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td width="20%" align="right"><b><small><span class="directory_status_label">CLOSED</span></small></b></td>
                                                                            <td width="20px" align="center"><span class="ui-silk ui-silk-lock"></span></td>
                                                                            <td width="50px" align="left"><b><small><span id="cnt_closed" class="directory_status_count">0</span></small></b></td>
                                                                            <td width="5px"><img src="/images/spacer.gif" width="5px" height="20px"/></td>
                                                                            <td width="20px"><span class ="ui-silk ui-silk-money"></span></td>
                                                                            <td width="100px"><b><small id="rev_closed">$0.00</small></b></td>
                                                                            <td><b><small> </small></b></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td width="20%" align="right"><b><small><span class="directory_status_label">MERGED</span></small></b></td>
                                                                            <td width="20px" align="center"><span class="ui-silk ui-silk-world-go"></span></td>
                                                                            <td width="50px" align="left"><b><small><span id="cnt_merged" class="directory_status_count">0</span></small></b></td>
                                                                            <td width="5px"><img src="/images/spacer.gif" width="5px" height="20px"/></td>
                                                                            <td width="20px"><span class ="ui-silk ui-silk-money"></span></td>
                                                                            <td width="100px"><b><small id="rev_merged">$0.00</small></b></td>
                                                                            <td><b><small></small></b></td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                                <td><img src="/images/spacer.gif" width="50px"/></td>
                                                                <td width=50%>
                                                                    <table width="100%" border="0">
                                                                        <tr>
                                                                            <td width="40%" align="right"><span class="fieldLabel">Directory Year</span></td>
                                                                            <td width="5px"><img src="/images/spacer.gif" width="5px" height="20px"/></td>
                                                                            <td width="20px"><span class ="ui-silk ui-silk-calendar-view-week"></span></td>
                                                                            <td><b><small><span id="directory_year"></span></small></b></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td width="40%" align="right"><span class="fieldLabel">Directory Period</span></td>
                                                                            <td width="5px"><img src="/images/spacer.gif" width="5px" height="20px"/></td>
                                                                            <td width="20px"><span class ="ui-silk ui-silk-calendar-view-day"></span></td>
                                                                            <td><b><small><span id="directory_period"></span></small></b></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td width="40%" align="right"><span class="fieldLabel">Directory Period Name</span></td>
                                                                            <td width="5px"><img src="/images/spacer.gif" width="5px" height="20px"/></td>
                                                                            <td width="20px"><span class ="ui-silk ui-silk-calendar-view-month"></span></td>
                                                                            <td><b><small><span id="directory_period_name"></b></small></span></td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </td>
                                            </tr>

                                        </table>
                                    </form>
                                </div>
                                <div id="tab-content-directory-options-2">
                                    <?php
                                    echo '<button id="directory">Manage Directory</button>';
                                    if (isAllowed(ACCOUNT, $_SESSION["role"]) == true) {
                                        echo '<button id="exportpage">Export Directory</button>';
                                        echo '<button id="shadow2live2shadow">Shadow >> Live >> Shadow</button>';
                                    } else {
                                        echo '<button id="exportpage" disabled>Export Directory</button>';
                                        echo '<button id="shadow2live2shadow" disabled>Shadow >> Live >> Shadow</button>';
                                    }
                                    ?>								
                                </div>
                                <div id="tab-content-directory-reports-3">
                                    <?php
                                    if (isAllowed(ACCOUNT, $_SESSION["role"]) == true) {
                                        echo '<button id="finreports">Financial Reports</button>';
                                        echo '<button id="clientreports">Client Reports</button>';
                                        echo '<button id="dirreports">Directory Reports</button>';
                                    } else {
                                        echo '<button id="finreports" disabled>Financial Reports</button>';
                                        echo '<button id="adduser" disabled>Client Reports</button>';
                                        echo '<button id="removeuser" disabled>Client Reports</button>';
                                    }
                                    ?>		
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mid-panels">
                        <div class="category-options-panel">
                            <div id="tab3s">
                                <ul>
                                    <li><a href="#tab-content-1">Category Options</a></li>
                                </ul>
                                <div id="tab-content-1">
                                    <button id="addcat">Add Category</button>
                                    <button id="editcat">Edit Category</button>
                                    <?php
                                    if (isAllowed(ACCOUNT, $_SESSION["role"]) == true) {
                                        echo '<button id="removecat">Remove Category</button>';
                                    } else {
                                        echo '<button id="removecat" disabled>Remove Category</button>';
                                    }
                                    ?>
                                    <button id="editcat">Search Categories</button>
                                </div>
                            </div>
                        </div>
                        <div class="query-panel">
                            <div id="query-list">
                                <select id="custom_query" onChange="OnSelChange();">
                                    <?php
//                                    include_once ("helper.php");
//                                    $helper = new Helper();
//                                    $helper->initdb($DB_HOST, $DB_PORT, $DB_USER, $DB_PASS, $ADMIN_DB_NAME);
//                                    $default = $helper->getFrontGridDefault($_SESSION["uid"]);
                                    $dbtrans = new DBTransaction();
                                    $dbconn = $dbtrans->getConnection($GLOBALS["ADMIN_DB_NAME"]);
                                    $tpladminusersdao = new TplAdminUsersDAO();
                                    $param_arr = array($_SESSION["uid"]);
                                    $tpladminusers = $tpladminusersdao->selectFrontGridDefault($dbconn, $param_arr);
                                    $default = $tpladminusers[0]["ITEM_ID"];
                                    $sel1 = "";
                                    $sel2 = "";
                                    $sel3 = "";
                                    if ($default == 2)
                                        $sel2 = "selected";
                                    else if ($default == 3)
                                        $sel3 = "selected";
                                    else
                                        $sel1 = "selected";

                                    echo '<option value="1" ' . $sel1 . '>Latest Clients</option>';
                                    echo '<option value="2" ' . $sel2 . '>Latest 10 Products</option>';
                                    echo '<option value="3" ' . $sel3 . '>Top 10 Search Keywords</option>';
                                    ?>
                                </select>
                                <button id="setdefault">Set Default</button>
                                <button id="exportToPDF" disabled>Export to PDF</button>
                            </div>
                            <div id="query-result"></div>
                        </div>
                        <div class="member-options-panel">
                            <div id="tab4s">
                                <ul>
                                    <li><a href="#tab-content-1">Member Options</a></li>
                                </ul>
                                <div id="tab-content-1">
                                    <?php
                                    if (isAllowed(ACCOUNT, $_SESSION["role"]) == true) {
                                        echo '<button id="adduser">Add User</button>';
                                        echo '<button id="edituser">Edit User</button>';
                                        echo '<button id="removeuser">Remove User</button>';
                                    } else {
                                        echo '<button id="myaccount">My Account</button>';
                                        echo '<button id="adduser" disabled>Add User</button>';
                                        echo '<button id="removeuser" disabled>Remove User</button>';
                                    }
                                    ?>		
                                </div>
                            </div>
                        </div>                    
                    </div>
                    <div class="bottom-panels">
                        <div class="controlpanel1-options-panel">
                            <div id="tab6s">
                                <ul>
                                    <li><a href="#tab-content-1">Product Options</a></li>
                                </ul>
                                <div id="tab-content-1">
                                    <?php
                                    if (isAllowed(ACCOUNT, $_SESSION["role"]) == true) {
                                        echo '<button id="adduser">Regions + Locations</button>';
                                        echo '<button id="edituser">Reserved + Inactive</button>';
                                        echo '<button id="removeuser">Reserved + Inactive</button>';
                                    } else {
                                        echo '<button id="myaccount">My Account</button>';
                                        echo '<button id="adduser" disabled>Reserved + Inactive</button>';
                                        echo '<button id="removeuser" disabled>Reserved + Inactive</button>';
                                    }
                                    ?>		
                                </div>
                            </div>
                        </div>
                        <div class="controlpanel2-options-panel">
                            <div id="tab7s">
                                <ul>
                                    <li><a href="#tab-content-1">Billing Options</a></li>
                                </ul>
                                <div id="tab-content-1">
                                    <?php
                                    if (isAllowed(ACCOUNT, $_SESSION["role"]) == true) {
                                        echo '<button id="allinvoices">Invoices</button>';
                                        echo '<button id="edituser">Transactions</button>';
                                        echo '<button id="removeuser">Payment Gateways</button>';
                                    } else {
                                        echo '<button id="myaccount">Invoices</button>';
                                        echo '<button id="adduser" disabled>Transactions</button>';
                                        echo '<button id="removeuser" disabled>Payment Gateways</button>';
                                    }
                                    ?>		
                                </div>
                            </div>
                        </div>
                        <div class="controlpanel3-options-panel">
                            <div id="tab8s">
                                <ul>
                                    <li><a href="#tab-content-1">Orders</a></li>
                                </ul>
                                <div id="tab-content-1">
                                    <?php
                                    echo '<button id="allorder">All Orders</button>';
                                    echo '<button id="pendingorder">Pending Orders</button>';
                                    echo '<button id="exiredorder">Expired Orders</button>';
                                    ?>		
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--				<div class="right-border">
                                                            <img src="images/vdivider.png"/>
                                                    </div>-->

                </div>

            </div>
            <div class="footer-panel"/>
            <?php include($_SERVER["DOCUMENT_ROOT"] . "/administrator/admin_footer.php"); ?>
        </div>
        <div id="popup_form2">
            <div id="dataGridInfo">

            </div>
        </div>
        <div id="popup_form"></div>
        <input id='userid' type='hidden' value="<?php echo $_SESSION["uid"] ?>"/>
        <script type="text/javascript" >
                                                            $('#popup_form').hide();
                                                            $('#popup_form2').hide();



        </script>

    </body>
</html>
