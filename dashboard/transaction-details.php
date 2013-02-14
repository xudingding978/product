<?php
if (!isset($_SESSION))
    session_start();
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . "/common/sessionhandler.php");
include_once($path_doc_root . "/config.php");
include_once($path_doc_root . "/include/db_class.php");
include_once($path_doc_root . "/include/tpldb_class.php");
include_once($path_doc_root . "/include/KoolPHPSuite/KoolAjax/koolajax.php");
include_once($path_doc_root . "/include/KoolPHPSuite/KoolTabs/kooltabs.php");
if (isset($client_user)) {
include_once "../common/util/DBTransaction.php";
include_once "../common/dao/TplClientDAO.php";
include_once "../common/dao/TplShadowRootDAO.php";
include_once "../common/dao/TplShadowSupplierDAO.php";
include_once "../common/dao/TplDirectoryPeriodDAO.php";
include_once "../common/dao/TplShadowDirectoryPeriodOfferingDAO.php";
    $dbtrans = new DBTransaction();
    $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
    $tplclientdao = new TplClientDAO();
    $tplshadowrootdao = new TplShadowRootDAO();
    $tplshadowsupplierdao = new TplShadowSupplierDAO();
    $tpldirectoryperioddao = new TplDirectoryPeriodDAO();
    $tpldirectoryperiodofferdao = new TplShadowDirectoryPeriodOfferingDAO();
    
    
    $session_maintain = new session_maintain();
    //$shadow_root = $tpl_db->getShadowRootOfUser($client_user);
    
    $array = array($GLOBALS["client_id"]);
    $shadow_root_list =$tplshadowrootdao->selectClient($dbconn, $array);
    $shadow_root=$shadow_root_list[0];
    
    $array = array($GLOBALS["client_id"]);
    $shadow_suppliers =$tplshadowsupplierdao->selectSupplierList($dbconn, $array);
    
    
    
   // $shadow_suppliers = $tpl_db->getShadowSuppliersByRoot($shadow_root['REC_ID']);
    //$shadow_directory = $tpl_db->getDirectoryDetails($shadow_root['DIRECTORY_REC_ID']);
    $array = array($shadow_root['DIRECTORY_PERIOD_REC_ID']);
    error_log("DIRECTORY_PERIOD_REC_ID:".$shadow_root['DIRECTORY_PERIOD_REC_ID']);
    $shadow_directory = $tpldirectoryperioddao->selectDirDetail($dbconn, $array);
    global $supplier;
   // error_log("OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO:".count($shadow_suppliers));
    if (count($shadow_suppliers)>0) {
        $supplier=$shadow_suppliers[0];     
        //$supplier = $tpl_db->getShadowRecord('tpl_shadow_supplier', $shadow_suppliers[0]['REC_ID']);
        //var_export($supplier, true);
        
        $array = array($shadow_root['REC_ID']);
        $directory_offering_list =$tpldirectoryperiodofferdao->selectOffer($dbconn, $array);
        $directory_offering=$directory_offering_list[0];
       // $directory_offering = $tpl_db->getShadowRecord('tpl_shadow_directory_offering', $shadow_root['SHADOW_DIRECTORY_OFFERING_REC_ID']);
    }
   // $directory = $tpl_db->getRecord('tpl_directory', $shadow_root['DIRECTORY_REC_ID']);
    //$session_maintain->add_client_field('product_based', ($directory['IS_PRODUCT_BASED'] == 1), $instanceID, 'client_data');
    $session_maintain->add_client_field('shadow_root', $shadow_root, $instanceID, 'client_data');
    $session_maintain->add_client_field('shadow_root_id', $shadow_root['REC_ID'], $instanceID, 'client_data');
    $session_maintain->add_client_field('shadow_directory_id', $shadow_root['DIRECTORY_PERIOD_REC_ID'], $instanceID, 'client_data');
    $session_maintain->add_client_field('shadow_state', $shadow_root['STATE'], $instanceID, 'client_data');
}
?>
<div class="offer-wrapper">
<table width="100%" border="0" cellpadding="0" cellspacing="4">
    <tr>
        <td colspan="3">
            <h3>Directory Offering</h3>
        </td>
    </tr>
    <tr valign="top">
        <td valign="top" class="BodyText">
            Listing Type
        </td>
        <td valign="top" class="BodyText">
            <?php
            if ($shadow_root["STATE"] == 'OPEN') {
                echo ": <select onchange=\"DoChangeListingType(this[selectedIndex].value)\" id =\"listingTypeCombo\">";
                echo "    <option value=\"0\" >NO SELECTION</option>";
//                $tpl_db = new tpldb;
//                $directory_offerings = $tpl_db->getDirectoryOfferings($shadow_root['REC_ID']);

                if ($directory_offering_list) {
                    foreach ($directory_offering_list as $key => $directory_offering) {
                        if ($directory_offering["REC_ID"] == $shadow_root["SHADOW_DIRECTORY_OFFERING_REC_ID"]) {
                            $directory_offer = $directory_offering["NAME"];
                            echo "<option value=\"" . $directory_offering["REC_ID"] . "\" selected=\"yes\">" . $directory_offering["NAME"] . "</option>";
                        } else {
                            echo "<option value=\"" . $directory_offering["REC_ID"] . "\">" . $directory_offering["NAME"] . "</option>";
                        }
                    }
                }

                echo ": </select>";
            } else {
               // $directory_offering = $tpl_db->getShadowRecord("tpl_shadow_directory_offering", $shadow_root["SHADOW_DIRECTORY_OFFERING_REC_ID"]);
                if ($directory_offering)
                    echo ": <b>" . $directory_offering["NAME"] . "</b>";
            }
            ?>
        </td>
    </tr>
    <tr valign="top">
        <td valign="top" class="BodyText">
            Current Year
        </td>
        <td valign="top" class="BodyText">
            : <b><?php echo $shadow_root["DIRECTORY_YEAR"] ?></b>
        </td>
    </tr>
    <tr valign="top">
        <td valign="top" class="BodyText">
            Current Status
        </td>
        <td valign="top" class="BodyText">
            : <b><?php echo $shadow_root["STATE"] ?></b>
        </td>
    </tr>
    <tr valign="top">
        <td valign="top" class="BodyText">
            Directory Offer
        </td>
        <td valign="top" class="BodyText">
            <?php
            //$directory_offering = $tpl_db->getShadowRecord("tpl_shadow_directory_offering", $shadow_root["SHADOW_DIRECTORY_OFFERING_REC_ID"]);
            if ($directory_offering)
                echo ": <b>" . $directory_offering["NAME"] . "</b>";
            ?>
        </td>
    </tr>
    <tr valign="top">
        <td valign="top" class="BodyText">
            Order Value (Excl Tax)
        </td>
        <td valign="top" class="BodyText">
            <?php
            echo ': <b>$' . number_format($shadow_root["TRANSACTION_TOTAL_EXCL_GST"], 2) . "</b>";
            ?>
        </td>
    </tr>
    <tr valign="top">
        <td valign="top" class="BodyText">
            Order Value (Incl Tax)
        </td>
        <td valign="top" class="BodyText">
            <?php
            echo ': <b>$' . number_format($shadow_root["TRANSACTION_TOTAL_INCL_GST"], 2) . "</b>";
            ?>
        </td>
    </tr>
<!--    <tr>
        <td colspan="2">
            <table width="100%">
                <tr valign="top">
                    <td valign="top" class="BodyText">
                        <img src="/images/spacer.gif" border="0" width="8" height="8" />
                    </td>
                    <td valign="top" class="BodyText">
                        <input class="btnStandard" type="button" onclick="DoConfirmOrder();" value="Confirm Order" />
                        <input type="submit" onclick="javascript:mainpanel.update('/dashboard/proof-sheet.php?instanceID=<?php echo $instanceID ?>')" value="Confirm Order" />
                    </td>
                </tr>
                <tr valign="top">
                    <td valign="top" class="BodyText">
                         <img src="/images/spacer.gif" border="0" width="8" height="8" />
                    </td>
                    <td valign="top" class="BodyText">
                        <input class="btnStandard" type="button" onclick="DoSubmitForApproval('<?php echo $shadow_root["DIRECTORY_REC_ID"]; ?>' ,'<?php echo $shadow_root["DIRECTORY_YEAR"]; ?>','<?php echo $shadow_root["REC_ID"]; ?>')" value="Submit For Approval" />
                    </td>
                </tr>
                <tr valign="top">
                    <td valign="top" class="BodyText">
                         <img src="/images/spacer.gif" border="0" width="8" height="8" />
                    </td>
                    <td valign="top" class="BodyText">
                        <input class="btnStandard" type="button" onclick="DoSubmitForOpening('<?php echo $shadow_root["DIRECTORY_REC_ID"]; ?>' ,'<?php echo $shadow_root["DIRECTORY_YEAR"]; ?>','<?php echo $shadow_root["REC_ID"]; ?>')" value="Request to Reopen" />
                    </td>
                </tr>
            </table>
        </td>
    </tr>-->
    <?php if ($shadow_root["STATE"] == "OPEN") { ?>
        <tr valign="top">
            <td valign="top" class="BodyText" colspan="2">
                <input class="process_button" type="button" onclick="DoConfirmOrder();" value="Confirm Order" />
            </td>
        </tr>
    <?php } else if ($shadow_root["STATE"] == "CLOSED") { ?>
        <tr valign="top">
            <td valign="top" class="BodyText" colspan="2">
                <input class="process_button" type="button" onclick="DoSubmitForApproval('<?php echo $shadow_root["DIRECTORY_REC_ID"]; ?>' ,'<?php echo $shadow_root["DIRECTORY_YEAR"]; ?>','<?php echo $shadow_root["REC_ID"]; ?>')" value="Submit For Approval" />
            </td>
        </tr>
    <?php } else if ($shadow_root["STATE"] == "MERGED") { ?>
        <tr valign="top">
            <td valign="top" class="BodyText" colspan="2">
                <input class="process_button" type="button" onclick="DoSubmitForOpening('<?php echo $shadow_root["DIRECTORY_REC_ID"]; ?>' ,'<?php echo $shadow_root["DIRECTORY_YEAR"]; ?>','<?php echo $shadow_root["REC_ID"]; ?>')" value="Request to Reopen" />
            </td>
        </tr>
    <?php } ?>
</table>
</div>
<div class="pdf-wrapper">
    <div class="pdf-panel">
        <h3>Directory Listing</h3>
        <input type="button" width="100%" onclick="javascript:window.open('/dashboard/proof-doc.php?instanceID=<?php echo $instanceID; ?>')" value="Download Full Listing PDF" />
    </div>
</div>
