<?php
if (!isset($_SESSION)) {
    session_start();
}
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . "/common/sessionhandler.php");
include_once($path_doc_root . "/config.php");

global $path_doc_root;
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Client Dashboard <?php echo $client_name ?> -  Hubstar</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="chrome=1"/>
        <META NAME="Title" CONTENT="Business Directory - $ATitle"/>
        <META NAME="Description" CONTENT=""/>
        <META NAME="Keywords" CONTENT=""/>
        <META NAME="Copyright" CONTENT="Copyright  <?php echo date("Y") ?> All rights reserved."/>
        <META HTTP-EQUIV="CONTENT-LANGUAGE" CONTENT="English"/>
        <link rel="shortcut icon" href="/images/icon.ico" type="image/x-icon"/>
        <script type="text/javascript" >
            var instanceID;  
<?php if (!isset($_POST['instanceID'])) { ?>
        instanceID= '<?php echo $_SESSION['instanceID']; ?>';
<?php } else { ?>
        instanceID= '<?php echo $_POST['instanceID']; ?>';
<?php } ?>  
    function checkRefresh() {     
        $('#instanceID').val(instanceID);
        $('#target').submit();          
    };   

        
     
                
        </script>

        <script language="javascript" src="/ac.js" ></script>
        <script language="javascript" type="text/javascript" src="/dashboard/js/portal.js" ></script>
        <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
        <script type="text/javascript" src="http://api.addressfinder.co.nz/af?key=<?php echo $AddressFinderAPIKey; ?>&v=1" ></script>
        <script type="text/javascript" src="/include/js/address-helper.js"></script>
        <script type="text/javascript" src="/common/ui/js/jquery-ui.min.js"></script>
        <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
        <link rel="stylesheet" href="http://bdsnewschema.local/dashboard/styles/FortAwesome/css/font-awesome.css">
        <link rel="stylesheet" type="text/css" href="/common/ui/css/smoothness/jquery-ui.css"/>

        <script type="text/javascript" src="/common/ui/js/jquery-ui-1.8.22.custom.min.js"></script>


        <link href="/common/ui/css/tab_menu.css" rel="stylesheet" type="text/css">
        <link rel="stylesheet" type="text/css" href="/common/ui/css/silk/silk-sprite.css"/>
        <link rel="stylesheet" type="text/css" href="/dashboard/styles/dashboard.css"/> 
        <link rel="stylesheet" type="text/css" href="/dashboard/styles/dropdown.css">
        <!--<link rel="stylesheet" type="text/css" href="/dashboard/styles/kooltabs_override.css"/>
        <link rel="stylesheet" type="text/css" href="/dashboard/styles/dashboard.css"/>
        <link href="/common/ui/css/tab_menu.css" rel="stylesheet" type="text/css"> -->


        <style type="text/css">
            /*demo page css*/
            body{ font: 62.5% "Trebuchet MS", sans-serif; margin: 50px;}
            .demoHeaders { margin-top: 2em; }
            #dialog_link {padding: .4em 1em .4em 20px;text-decoration: none;position: relative;}
            #dialog_link span.ui-icon {margin: 0 5px 0 0;position: absolute;left: .2em;top: 50%;margin-top: -8px;}
            ul#icons {margin: 0; padding: 0;}
            ul#icons li {margin: 2px; position: relative; padding: 4px 0; cursor: pointer; float: left;  list-style: none;}
            ul#icons span.ui-icon {float: left; margin: 0 4px;}
        </style>

    </head>
    <body bgcolor="#f7f7f7" LeftMargin="0" TopMargin="0" MarginWidth="0" MarginHeight="0" onUnload="checkRefresh()">
        <?php include_once("login-script.php"); ?>

        <div id="wrapper">

            <?php include_once("dashboard_navigation.php"); ?>
            <div id="mainbodycontent">
                <table height="100%" width="1024px" border="0" cellpadding="0" cellspacing="0">
                    <tbody valign="top">
                        <tr>
                            <td bgcolor="#FFFFFF">
                                <div id="dashboard_content">
                                    <?php
                                    // this session variable ('client_active_tab') is set on the administrator/callbacks.php in DoTPLLogin function

                                    if (($GLOBALS["client_tab"] != NULL) && ($GLOBALS["client_tab"] != '')) {
                                        //error_log("Globals..............................".$GLOBALS["client_tab"]);
                                        include $path_doc_root . "/dashboard/" . $GLOBALS["client_tab"] . ".php";
                                    } else {

                                        include $path_doc_root . "/dashboard/client_dashboard.php";
                                    }
                                    ?>
                                    <loading image="/include/KoolPHPSuite/KoolAjax/loading/5.gif"></loading>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <?php include("dashboard_footer.php"); ?>
        </div>    
        <form id="target" name="target" action="/dashboard/" method="POST">
            <input type="hidden" value="" id="instanceID" name="instanceID">
        </form>  
    </body>
</html>


