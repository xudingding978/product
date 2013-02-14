<?php
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . "/common/sessionhandler.php");
include_once($path_doc_root . "/config.php");
//include_once($path_doc_root . "/include/db_class.php");
//include_once($path_doc_root . "/include/tpldb_class.php");
include_once($path_doc_root . "/include/KoolPHPSuite/KoolAjax/koolajax.php");
include_once($path_doc_root . "/include/KoolPHPSuite/KoolTabs/kooltabs.php");
include_once "../common/util/DBTransaction.php";
include_once "../common/dao/TplShadowSupplierBranchDAO.php";
$dbtrans = new DBTransaction();
$dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
$tplshadowsupplierbranchdao = new TplShadowSupplierBranchDAO();
if ($shadow_root["STATE"] == 'OPEN') {
    $readonly = "";
} else {
    $readonly = "readonly='1' disabled='true'";
}
?>

<script type="text/javascript">
    function tabReload(){       
        var current_index = $("#tabs").tabs("option","selected");       
        $("#tabs").tabs('load',3);       
    }
    function openEditWindow(){
        $("#branches_dialog").dialog({
            title:"Supplier Branches",
            autoOpen: true,
            visibility:true,
            width: 930,
            height: 575,
            modal: true,
            closeText: '',
            buttons: {
                "Save Changes": function() {
                    DoSaveSupplierBranchDetails(document.forms["supplier_branch_detail"],this);                    
                    $(this).dialog('close');
                },
                "Cancel": function() {
                    document.forms["supplier_branch_detail"].reset();
                    $(this).dialog('close');
                }
            }
            
        });
        
    }
    $(document).ready(function() {         
        $("#add_new_branch").click(function() {   
            branchrecID=0;
            $( "#branches_dialog" ).dialog({
                title:"Supplier Branches",
                autoOpen: true,
                visibility:true,
                width: 930,
                //height for branch window
                height: 625,
                modal: true,
                closeText: '',
                buttons: {
                    "Save Changes": function() {
                        DoSaveSupplierBranchDetails(document.forms["supplier_branch_detail"],this);
                        tabReload();
                        $(this).dialog('close');
                        
                    },
                    "Cancel": function() { 
                        //alert("Cancel");
                        //$(this).empty().remove(); 
                       
                        $(this).dialog('close');
                    }
                }
               
            });
  
        });

    });
    var instanceID='<?php echo $instanceID; ?>';
    var branchrecID=0;
    
    
    function DoSupplierBranchDelete(recid)
    {   	  	  
      
        koolajax.callback(DoTPLDeleteSupplierBranchDetails(recid,instanceID));
        tabReload();
        //tabpanel.update("/dashboard/supplier-branches.php?instanceID="+instanceID);
    }    
    
    function DoSupplierBranchUpdate(recid,branch_name,postal_address_building_address,postal_address_street_address,postal_address_suburb,postal_address_city,postal_address_state,postal_address_post_code,postal_address_country,telephone_no,fax_no)
    {       
      
        branchrecID=recid;        
        $("#branch_name").val(branch_name);
        $("#postal_address_building_address").val(postal_address_building_address);
        $("#postal_address_street_address").val(postal_address_street_address);
        $("#postal_address_suburb").val(postal_address_suburb);
        $("#postal_address_city").val(postal_address_city);
        $("#postal_address_state").val(postal_address_state);
        $("#postal_address_post_code").val(postal_address_post_code);
        $("#postal_address_country").val(postal_address_country);
        $("#telephone_no").val(telephone_no);
        $("#fax_no").val(fax_no);
       
        openEditWindow();
    }
    function DoSaveSupplierBranchDetails(thisform,thisob)
    {
                   
        if (thisform.branch_name.value != "" && thisform.postal_address_building_address.value != "")
        {               
            koolajax.callback(DoTPLUpdateSupplierBranchDetails(branchrecID, thisform.branch_name.value, thisform.postal_address_building_address.value, thisform.postal_address_street_address.value, thisform.postal_address_suburb.value, thisform.postal_address_city.value, thisform.postal_address_state.value, thisform.postal_address_post_code.value, thisform.postal_address_country.value, thisform.telephone_no.value, thisform.fax_no.value,instanceID));
            //parent.tabpanel.update("/dashboard/supplier-branches.php"); 
            //$(thisob).empty().remove();
            $(this).dialog('close');
        }
        else
        {
            alert("Please complete all of the mandatory fields before clicking the save changes button.");
        }
      
    }
</script>
<table width="100%" border="0" cellpadding="0" cellspacing="0">
    <tr>
        <td><img src="/images/spacer.gif" border="0" width="805" height="3" /></td>
    </tr>
    <tr>
        <td valign="top" width="100%" class="BodyText">
            <?php
//            $tpl_db = new tpldb;
//            $supplierbranches = $tpl_db->getShadowRecordsBySupplier("tpl_shadow_supplier_branch", $session_maintain->get_client_field("shadow_root_id", $instanceID, "client_data"), $session_maintain->get_client_field("shadow_supplier_id", $instanceID, "client_data"), "NAME", "");
            $array = array($GLOBALS["shadow_supplier_rec_id"]);
            $supplierbranches = $tplshadowsupplierbranchdao->select($dbconn, $array);
            ?>
            <table width="100%" border="0" cellpadding="0" cellspacing="0">
                <tr>
                    <?php if ($shadow_root["STATE"] == "OPEN") { ?>
                        <td valign="top" width="10%" class="BodyText"><button id="add_new_branch"><b>Add New</b></button></td>
                        <td valign="top" width="14%" class="BodyText"><b><u>Name</u></b></td>
                        <td valign="top" width="50%" class="BodyText"><b><u>Address</u></b></td>
                        <td valign="top" width="13%" class="BodyText"><b><u>Phone</u></b></td>
                        <td valign="top" width="13%" class="BodyText"><b><u>Fax</u></b></td>
                    </tr>
                    <?php
                    if ($supplierbranches) {
                        foreach ($supplierbranches as $key => $supplierbranch) {
                            ?>
                            <tr>
                                <?php if ($shadow_root["STATE"] == "OPEN")
                                    
                                    ?>
                                <td valign="top" width="10%" class="BodyText">

                                    <button id="edit" onclick="DoSupplierBranchUpdate('<?php echo $supplierbranch["REC_ID"]; ?>','<?php echo $supplierbranch["NAME"]; ?>','<?php echo $supplierbranch["POSTAL_ADDRESS_BUILDING_ADDRESS"]; ?>','<?php echo $supplierbranch["POSTAL_ADDRESS_STREET_ADDRESS"]; ?>','<?php echo $supplierbranch["PHYSICAL_ADDRESS_SUBURB"]; ?>','<?php echo $supplierbranch["POSTAL_ADDRESS_CITY"]; ?>','<?php echo $supplierbranch["POSTAL_ADDRESS_STATE"]; ?>','<?php echo $supplierbranch["POSTAL_ADDRESS_POST_CODE"]; ?>','<?php echo $supplierbranch["POSTAL_ADDRESS_COUNTRY"]; ?>','<?php echo $supplierbranch["TELEPHONE_NO"]; ?>','<?php echo $supplierbranch["FAX_NO"]; ?>');return false"><b>Edit</b></button><button id="delete" onclick="DoSupplierBranchDelete('<?php echo $supplierbranch["REC_ID"]; ?>');return false"><b>Delete</b></button>
                                </td>
                                <td valign="top" width="14%" class="BodyText"><?php echo $supplierbranch["NAME"]; ?></td>
                                <td valign="top" width="50%" class="BodyText">
                                    <?php
                                    if ($supplierbranch["POSTAL_ADDRESS_BUILDING_ADDRESS"] != "")
                                        echo $supplierbranch["POSTAL_ADDRESS_BUILDING_ADDRESS"] . ", ";
                                    echo $supplierbranch["POSTAL_ADDRESS_STREET_ADDRESS"] . ", " . $supplierbranch["POSTAL_ADDRESS_SUBURB"] . ", " . $supplierbranch["POSTAL_ADDRESS_CITY"] . ", ";
                                    if ($supplierbranch["POSTAL_ADDRESS_STATE"] != "")
                                        echo $supplierbranch["POSTAL_ADDRESS_STATE"] . ", ";
                                    echo $supplierbranch["POSTAL_ADDRESS_POST_CODE"]
                                    ?>
                                </td>
                                <td valign="top" width="13%" class="BodyText"><?php echo $supplierbranch["TELEPHONE_NO"]; ?></td>
                                <td valign="top" width="13%" class="BodyText"><?php $supplierbranch["FAX_NO"]; ?></td>
                            </tr>
                            <?php
                        }
                    }
                    ?>
                </table>
            </td>
        </tr>
    </table>
    <div id="dialogwrap" style="background-color: #EEEEEE;visibility: hidden"> 
        <div id="branches_dialog" style="background-color: #EEEEEE;">       
            <table width="100%" border="0" cellpadding="8" cellspacing="0">
                <tr>
                    <td valign="top" width="100%" class="BodyText">
                        <form id="supplier_branch_detail" name="supplier_branch_detail" onsubmit="DoSaveSupplierBranchDetails(this); return false;">
                            <fieldset id="dataEntry">
                                <legend class="formLegend">Create New And/Or Edit Your Branches</legend>
                                <ol>
                                    <li id="fields" tabindex="1">
                                        <label class="BodyText fieldLabel">Branch Name<font color="#FF0000"><b>*</b></font></label><span class="fieldIcon ui-silk ui-silk-application-form-edit"></span>
                                        <input class="ui_input" type="text" name="branch_name" id="branch_name" <?php echo $readonly ?> value="" size="64" maxlength="255" tabindex="1" /><span class="fieldIcon ui-silk gray ui-silk-help"></span>
                                    </li>
                                    <li id="fields" tabindex="2">
                                        <label class="BodyText fieldLabel">Postal Building Address<font color="#FF0000"><b>*</b></font></label><span class="fieldIcon ui-silk ui-silk-application-form-edit"></span>
                                        <input class="ui_input" type="text" name="postal_address_building_address" id="postal_address_building_address" <?php echo $readonly ?> value="" size="32" maxlength="255" tabindex="2" /><span class="fieldIcon ui-silk gray ui-silk-help"></span>
                                    </li>
                                    <li id="fields" tabindex="3">
                                        <label class="BodyText fieldLabel">Postal Street/Box Address<font color="#FF0000"><b>*</b></font></label><span class="fieldIcon ui-silk ui-silk-application-form-edit"></span>
                                        <input class="ui_input" type="text" name="postal_address_street_address"  id="postal_address_street_address" <?php echo $readonly ?> value="" size="64" maxlength="255" tabindex="3" /><span class="fieldIcon ui-silk gray ui-silk-help"></span>
                                    </li>
                                    <li id="fields" tabindex="4">
                                        <label class="BodyText fieldLabel">Postal Suburb<font color="#FF0000"><b>*</b></font></label><span class="fieldIcon ui-silk ui-silk-application-form-edit"></span>
                                        <input class="ui_input" type="text" name="postal_address_suburb" id="postal_address_suburb" <?php echo $readonly ?> value="" size="32" maxlength="255" tabindex="4" /><span class="fieldIcon ui-silk gray ui-silk-help"></span>
                                    </li>
                                    <li id="fields" tabindex="5">
                                        <label class="BodyText  fieldLabel">Postal City/Town<font color="#FF0000"><b>*</b></font></label><span class="fieldIcon ui-silk ui-silk-application-form-edit"></span>
                                        <input class="ui_input" type="text" name="postal_address_city" id="postal_address_city" <?php echo $readonly ?> value="" size="32" maxlength="255" tabindex="5" /><span class="fieldIcon ui-silk gray ui-silk-help"></span>
                                    </li>
                                    <li id="fields" tabindex="6">
                                        <label class="BodyText fieldLabel">Postal State<font color="#FF0000"><b>*</b></font></label><span class="fieldIcon ui-silk ui-silk-application-form-edit"></span>
                                        <input class="ui_input" type="text" name="postal_address_state" id="postal_address_state" <?php echo $readonly ?> value="" size="32" maxlength="255" tabindex="6" /><span class="fieldIcon ui-silk gray ui-silk-help"></span>
                                    </li>
                                    <li id="fields" tabindex="7">
                                        <label class="BodyText fieldLabel">Postal Post Code<font color="#FF0000"><b>*</b></font></label><span class="fieldIcon ui-silk ui-silk-application-form-edit"></span>
                                        <input class="ui_input" type="text" name="postal_address_post_code"  id="postal_address_post_code" <?php echo $readonly ?> value="" size="12" maxlength="12" tabindex="7" /><span class="fieldIcon ui-silk gray ui-silk-help"></span>
                                    </li>
                                    <li id="fields" tabindex="8">
                                        <label class="BodyText fieldLabel">Postal Country<font color="#FF0000"><b>*</b></font></label><span class="fieldIcon ui-silk ui-silk-application-form-edit"></span>
                                        <input class="ui_input" type="text" name="postal_address_country" id="postal_address_country" <?php echo $readonly ?> value="" size="32" maxlength="255" tabindex="8" /><span class="fieldIcon ui-silk gray ui-silk-help"></span>
                                    </li>
                                    <li id="fields" tabindex="9">
                                        <label class="BodyText fieldLabel">Telephone Number</label><span class="fieldIcon ui-silk ui-silk-application-form-edit"></span>
                                        <input class="ui_input" type="text" name="telephone_no" id="telephone_no" <?php echo $readonly ?> value="" size="24" maxlength="48" tabindex="9" /><span class="fieldIcon ui-silk gray ui-silk-help"></span>
                                    </li>
                                    <li id="fields" tabindex="10">
                                        <label class="BodyText fieldLabel">Fax Number</label><span class="fieldIcon ui-silk ui-silk-application-form-edit"></span>
                                        <input class="ui_input" type="text" name="fax_no" id="fax_no" <?php echo $readonly ?> value="" size="24" maxlength="48" tabindex="10" /><span class="fieldIcon ui-silk gray ui-silk-help"></span>
                                    </li>

                                </ol>
                            </fieldset>
                        </form>
                    </td>
                </tr>
            </table>
        </div>
    </div>
<?php } ?>
