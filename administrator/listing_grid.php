<?php
if (!isset($_SESSION)) {
    session_start();
}
if (!isset($_SESSION["uid"])) {
    include("login.php");
    return;
}
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
require_once ($path_doc_root . "/config.php");
require_once($path_doc_root . "/include/KoolPHPSuite/KoolAjax/koolajax.php");
$koolajax->scriptFolder = "./../include/KoolPHPSuite/KoolAjax";
require_once($path_doc_root . "/include/KoolPHPSuite/KoolGrid/koolgrid.php");
require_once($path_doc_root . "/include/KoolPHPSuite/KoolCalendar/koolcalendar.php");
include_once("callbacks.php");
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"> 
    <head>
        <script type="text/javascript" src="scripts/jquery-min.js"></script>
        <script type="text/javascript" src="scripts/administrator.js"></script>
        <script type="text/javascript" >
            function Handle_OnRowSelect(sender, args) {
                var _row = args["Row"];
                var _event = args["Event"];
                $("input#rid").val(_row.getDataItem()["RID"]);
                $("input#recid").val(_row.getDataItem()["REC_ID"]);
                $("input#nam").val(_row.getDataItem()["NAME"]);
                $("input#usr").val(_row.getDataItem()["USERNAME"]);
                $("input#pwd").val(_row.getDataItem()["PASSWORD"]);
            }
            function Handle_OnRowDoubleClick(sender,args)
            {
                var _row = args["Row"];
                var _event = args["Event"];
                if ($("input#usr").val(_row.getDataItem()["USERNAME"]) != "") {               
                    var callbackresult = koolajax.callback(DoTPLLogin(_row.getDataItem()["USERNAME"], _row.getDataItem()["PASSWORD"]));
                    if (callbackresult == "SUCCESS") {
                        new_window = window.open("/dashboard/");
                        //new_window.adpHide('adpModal');
                        //new_window.adpHideMask('adpMask');
                    }
                    return false;
                }
            }
        </script>
        <?php echo $koolajax->Render(); ?>
    </head>
    <?php
    $db_con = mysql_connect($DB_HOST, $DB_USER, $DB_PASS);
    mysql_select_db($DB_NAME, $db_con);
    
    $ds_client_contact = new MySQLDataSource($db_con);
    $ds_client_contact->SelectCommand = "SELECT tpl_client.NAME AS 'Client Name', tpl_shadow_supplier.CONTACT_NAME AS 'Contact Name', tpl_shadow_supplier.CONTACT_POSITION AS 'Contact Position', tpl_shadow_supplier.PHYSICAL_ADDRESS_STATE AS Region, "
            . "tpl_client.TELEPHONE_NO as 'Telephone', tpl_shadow_root.STATE as 'State', tpl_shadow_root.DIRECTORY_YEAR as 'Year', tpl_shadow_directory_offering.NAME AS 'Offer', CONCAT(\"$\",CAST(CAST(tpl_shadow_directory_offering.COST_EXCL_GST AS DECIMAL(9,2)) AS CHAR)) AS 'Price', "
            . "tpl_client.REC_ID as C_REC_ID,   tpl_client.USERNAME, tpl_client.PASSWORD, tpl_shadow_root.REC_ID as RID  "
            . "FROM " . $DB_NAME . ".tpl_client "
            . "INNER JOIN " . $DB_NAME . ".tpl_shadow_root ON tpl_client.REC_ID = tpl_shadow_root.CLIENT_REC_ID "
            . "INNER JOIN " . $DB_NAME . ".tpl_shadow_supplier ON (tpl_shadow_root.rec_id = tpl_shadow_supplier.shadow_rec_id) "
            . "INNER JOIN " . $DB_NAME . ".tpl_shadow_directory_offering ON (tpl_shadow_directory_offering.REC_ID = tpl_shadow_root.SHADOW_DIRECTORY_OFFERING_REC_ID) "
            . "WHERE tpl_shadow_root.DIRECTORY_REC_ID = " . $_GET['dir'] . " and tpl_shadow_root.DIRECTORY_YEAR = \"" . $_GET['yr'] . "\" and  tpl_client.IS_DELETED=0 "
            . "ORDER BY tpl_client.NAME ASC";

    $ds_client_contact_details = new MySQLDataSource($db_con);
    $ds_client_contact_details->SelectCommand = "SELECT  tpl_client.REC_ID as REC_ID, tpl_client.NAME as NAME, tpl_client.USERNAME as USERNAME, tpl_client.TELEPHONE_NO, tpl_client.PASSWORD as PASSWORD, tpl_client.FIRST_NAME as FIRST_NAME, tpl_client.LAST_NAME as LAST_NAME, tpl_client.EMAIL_ADDRESS as EMAIL_ADDRESS, tpl_client.REC_DATETIME as REC_DATETIME"
            . " FROM " . $DB_NAME . ".tpl_client"
            . " LEFT JOIN " . $DB_NAME . ".tpl_shadow_root"
            . " ON tpl_client.REC_ID  = tpl_shadow_root.CLIENT_REC_ID"
            . " WHERE tpl_client.IS_DELETED=0 and tpl_shadow_root.DIRECTORY_REC_ID =" . $_GET['dir'];


//    $ds->SelectCommand = $ds_client_contact;
//    $ds->UpdateCommand = "UPDATE " . $DB_NAME . ".tpl_client SET NAME = '@NAME',FIRST_NAME = '@FIRST_NAME',LAST_NAME = '@LAST_NAME',USERNAME = '@USERNAME',PASSWORD = '@PASSWORD',EMAIL_ADDRESS = '@EMAIL_ADDRESS' where REC_ID=@REC_ID";
//    $ds->DeleteCommand = "UPDATE " . $DB_NAME . ".tpl_client SET IS_DELETED=1 where REC_ID=@REC_ID";

    $grid = new KoolGrid("grid");
    $grid->scriptFolder = "./../include/KoolPHPSuite/KoolGrid";
    $grid->styleFolder = "default";
    $grid->Width = "1024px";
    $grid->AllowEditing = true;
    $grid->AllowHovering = true;
    $grid->AllowSelecting = true;
    $grid->RowAlternative = true;
    $grid->AllowDeleting = true;
    $grid->AllowFiltering = true;
    $grid->AjaxEnabled = true;
    $grid->AjaxLoadingImage =  "./../include/KoolPHPSuite/KoolAjax/loading/5.gif";
    $grid->ColumnWrap = false;
    $grid->FilterOptions = array("Start_With", "Equal", "Contain", "End_With");
    $grid->PageSize = 25;
    
    $client_contact_details = new GridTableView();
    $client_contact_details->Width = "100%";
    $client_contact_details->DataSource = $ds_client_contact_details;
    $client_contact_details->AddRelationField("tpl_client.REC_ID", "tpl_client.REC_ID");
    $client_contact_details->AutoGenerateColumns = true;
    $client_contact_details->DisableAutoGenerateDataFields = "tpl_client.REC_ID";
  

    $grid->MasterTable->DataSource = $ds_client_contact;
    $grid->MasterTable->EditSettings->Mode = "Inline";
    $grid->MasterTable->AddDetailTable($ds_client_contact_details);
    $grid->MasterTable->AutoGenerateExpandColumn = true;
    $grid->MasterTable->AutoGenerateColumns = true;
    $grid->MasterTable->DisableAutoGenerateDataFields ='tpl_client.USERNAME,tpl_client.PASSWORD, C_REC_ID,  tpl_client.REC_DATETIME, tpl_shadow_root.REC_ID, RID';
    $grid->MasterTable->Pager = new GridPrevNextAndNumericPager();
    $grid->MasterTable->AutoGenerateEditColumn = true;
    $grid->MasterTable->EditSettings->Mode = "Form";
//Step 4: Process Grid
    $grid->Process();
    $grid->ClientSettings->ClientEvents["OnRowSelect"] = "Handle_OnRowSelect";
    $grid->ClientSettings->ClientEvents["OnRowClick"] = "Handle_OnRowClick";
    $grid->ClientSettings->ClientEvents["OnRowDoubleClick"] = "Handle_OnRowDoubleClick";
    if ($koolajax->isCallback)
        sleep(1);

    $result = mysql_query("SELECT NAME from " . $DB_NAME . ".tpl_directory WHERE REC_ID = " . $_GET['dir']);
    while ($row = mysql_fetch_array($result)) {
        echo "<div style='font-family: Arial; font-size: 12pt; font-weight: bold;'>" . $row['NAME'] . '&nbsp;&nbsp;&nbsp;&nbsp;' . $_GET['yr'] . '</div>';
        //echo "<br />";
    }
    ?>
    <form id="theform" method="post">
        <?php
        echo $koolajax->Render();
        echo $grid->Render();
        echo '<input type="hidden" id="nam"/>';
        echo '<input type="hidden" id="recid"/>';
        echo '<input type="hidden" id="rid"/>';
        echo '<input type="hidden" id="usr"/>';
        echo '<input type="hidden" id="pwd"/>';
        ?>
    </form>





