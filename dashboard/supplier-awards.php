<?php
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . "/common/sessionhandler.php");
include_once($path_doc_root . "/config.php");
//include_once($path_doc_root . "/include/db_class.php");
//include_once($path_doc_root . "/include/tpldb_class.php");
include_once($path_doc_root . "/include/KoolPHPSuite/KoolAjax/koolajax.php");
include_once($path_doc_root . "/include/KoolPHPSuite/KoolTabs/kooltabs.php");
include_once "../common/util/DBTransaction.php";
include_once "../common/dao/TplSupplierAwardsDAO.php";
?>


<?php
//SUPPLIER_REC_ID
$dbtrans = new DBTransaction();
$dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
$tplshadowsupplierawardsdao = new TplSupplierAwardsDAO();
$array = array($GLOBALS["shadow_supplier_rec_id"]);
$supplierawards = $tplshadowsupplierawardsdao->select($dbconn, $array);
//$supplierawards = db::getrows("CLIENT_REC_ID = " . $shadow_root['CLIENT_REC_ID'], "tpl_supplier_awards", "ORDER BY tpl_supplier_awards.NAME");
if ($GLOBALS["shadow_state"] == 'OPEN') {
    $readonly = "";
} else {
    $readonly = "readonly='1' disabled='true'";
}
?>

<script type="text/javascript">    
    var instanceID='<?php echo $instanceID; ?>';
    var rec_id=0;
    
    function DoSupplierAwardDelete(recid, name)
    {
 	  	  
        koolajax.callback(DoTPLDeleteSupplierAwardDetails(recid,instanceID)); 
       
        // tabpanel.update("/dashboard/supplier-awards.php?instanceID="+instanceID);
   	   
    }	   
   
    function DoSupplierAwardUpdate(recid,name,issued_by,year_won,award_logo_url,award_logo_link)
    {        
        rec_id=recid;        
        $("#name").val(name);
        $("#issued_by").val(issued_by);
        $("#award_logo_url").val(award_logo_url);
        $("#award_logo_link").val(award_logo_link);
        $("#year_won").val(year_won);
        openEditWindow();
    }
    function openEditWindow(){
        $("#dialog_awards" ).dialog({
            title:"Supplier Awards",
            autoOpen: true,
            visibility:true,
            width: 930,
            height: 575,
            modal: true,
            buttons: {
                "Save Changes": function() {
                    DoSaveSupplierAwardDetails(this);                    
                    $(this).dialog('close');
                },
                "Cancel": function() {                    
                    $(this).dialog('close');
                }
            }
        });
    }
    
    
    function DoSaveSupplierAwardDetails(thisob)
    {
        var thisform=document.forms["supplier_awards"];
        if (thisform.name.value != "" && thisform.issued_by.value != ""&& thisform.year_won.value != "")
        {  
            koolajax.callback(DoTPLUpdateSupplierAwardDetails(rec_id, thisform.name.value, thisform.issued_by.value, thisform.year_won.value, thisform.award_logo_url.value, thisform.award_logo_link.value,instanceID));
            //parent.tabpanel.update("/dashboard/supplier-awards.php");          
            $(this).dialog('close');
        }
        else
        {
            alert("Please complete all of the mandatory fields before clicking the save changes button.");
        }
    }
  
    
    
  
    
    $(document).ready(function() {   
        $("#add_new_awards").click(function() {
          
            $("#dialog_awards" ).dialog({
                title:"Supplier Awards",
                autoOpen: true,
                visibility:true,
                width: 930,
                height: 575,
                modal: true,
                buttons: {
                    "Save Changes": function() {
                        DoSaveSupplierAwardDetails(this);
                        $(this).dialog('close');
                    },
                    "Cancel": function() {                       
                        $(this).dialog('close');
                    }
                }
            });
           

        });
        
    });
    
    

</script>



<table width="100%" border="0" cellpadding="0" cellspacing="0">
    <tr>
        <td><img src="/images/spacer.gif" border="0" width="805" height="8" /></td>
    </tr>
    <tr>
        <td valign="top" width="100%" class="BodyText">
            <table width="100%" border="0" cellpadding="0" cellspacing="0">
                <tr>
                    <?php if ($GLOBALS["shadow_state"] == "OPEN")
                        
                        ?>
                    <td valign="top" width="10%" class="BodyText"><button id="add_new_awards"><b>Add New</b></button></td>

                    <td valign="top" width="20%" class="BodyText"><b><u>Award Name</u></b></td>
                    <td valign="top" width="10%" class="BodyText"><b><u>Issued By</u></b></td>
                    <td valign="top" width="25%" class="BodyText"><b><u>Award Logo URL</u></b></td>
                    <td valign="top" width="25%" class="BodyText"><b><u>Award Logo Link</u></b></td>
                    <td valign="top" width="10%" class="BodyText"><b><u>Year Won</u></b></td>
                </tr>
                <tr>
                    <td colspan="6"><img src="/images/spacer.gif" border="0" width="100%" height="5" /></td>
                </tr>

                <?php
                foreach ($supplierawards as $supplieraward) {
                    $label = htmlspecialchars($supplieraward["NAME"]);
                    $label = str_replace("'", "\'", $label);
                    ?>
                    <tr>
                        <?php if ($GLOBALS["shadow_state"] == "OPEN") { ?>
                            <td valign="top" width="10%" class="BodyText">

                                <button id="edit" onclick="DoSupplierAwardUpdate('<?php echo $supplieraward["REC_ID"]; ?>','<?php echo $supplieraward["NAME"]; ?>','<?php echo $supplieraward["ISSUED_BY"]; ?>','<?php echo $supplieraward["YEAR_WON"]; ?>','<?php echo $supplieraward["AWARD_LOGO_URL"]; ?>','<?php echo $supplieraward["AWARD_LOGO_LINK"]; ?>');return false"><b>Edit</b></button>
                                <button id="delete" onclick="DoSupplierAwardDelete('<?php echo $supplieraward["REC_ID"]; ?>');return false"><b>Delete</b></button>

                            </td>
                        <?php } ?>
                        <td valign="top" width="20%" class="BodyText"><?php echo $supplieraward['NAME'] ?></td>
                        <td valign="top" width="10%" class="BodyText"><?php echo $supplieraward['ISSUED_BY'] ?></td>
                        <td valign="top" width="25%" class="BodyText"><a href="<?php echo $supplieraward['AWARD_LOGO_LINK'] ?>" target="_blank"/><img src="<?php echo $supplieraward['AWARD_LOGO_URL'] ?>" height="50px" border="0"/></a></td>
                        <td valign="top" width="25%" class="BodyText"><?php echo $supplieraward['AWARD_LOGO_LINK'] ?></td>
                        <td valign="top" width="10%" class="BodyText"><?php echo $supplieraward['YEAR_WON'] ?></td>
                    </tr>
                    <tr>
                        <td colspan="6"><img src="/images/spacer.gif" border="0" width="100%" height="15" /></td>
                    </tr>
                <?php } ?>
            </table>
        </td>
    </tr>
</table>
<div id="dialogwrap" style="background-color: #EEEEEE;visibility: hidden"> 
    <div id="dialog_awards" style="background-color: #EEEEEE;"> 
        <table width="100%" border="0" cellpadding="8" cellspacing="0">
            <tr>
                <td valign="top" width="100%" class="BodyText">
                    <form id="supplier_awards" name="supplier_awards">
                        <table width="100%" border="0" cellpadding="0" cellspacing="0">
                            <tr>
                                <td><img src="/images/spacer.gif" border="0" width="120" height="8" /></td>
                                <td><img src="/images/spacer.gif" border="0" width="485" height="8" /></td>
                            </tr>
                            <tr>
                                <td valign="top" class="BodyText tableLabel"><br/>Award Name <font color="#FF0000"><b>*</b></font></td>
                                <td valign="top" class="BodyText">eg: <i> The name of the award itself or the organisation</i><br/>
                                    <input class="ui_input" type="text" name="name" id="name" <?php echo $readonly ?> value="" size="32" maxlength="255" />
                                </td>
                            </tr>
                            <tr>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            </tr>

                            <tr>
                                <td valign="top" class="BodyText tableLabel"><br/>Issued By <font color="#FF0000"><b>*</b></font></td>
                                <td valign="top" class="BodyText">eg: <i>Governing body that issued the award</i><br/>
                                    <input class="ui_input" type="text" name="issued_by" id="issued_by" <?php echo $readonly ?> value="" size="32" maxlength="255" />
                                </td>
                            </tr>
                            <tr>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            </tr>
                            <tr>
                                <td valign="top" class="BodyText tableLabel"><br/>Award Logo URL</td>
                                <td valign="top" class="BodyText">eg: <i>Award Logo URL</i> <br/>
                                    <input class="ui_input" type="text" name="award_logo_url" id="award_logo_url" <?php echo $readonly ?> value="" size="80" maxlength="2560" />
                                </td>
                            </tr>
                            <tr>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            </tr>
                            <tr>
                                <td valign="top" class="BodyText tableLabel"><br/>Award Logo Link</td>
                                <td valign="top" class="BodyText">eg: <i>Link to the award website</i><br/>
                                    <input class="ui_input" type="text" name="award_logo_link" id="award_logo_link" <?php echo $readonly ?> value="" size="80" maxlength="2560" />
                                </td>
                            </tr>
                            <tr>
                            <tr>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            </tr>
                            <tr>
                                <td valign="top" class="BodyText tableLabel"><br/>Year Won<font color="#FF0000"><b>*</b></font></td>
                                <td valign="top" class="BodyText">eg: <i>Year  the award was won</i><br/>
                                    <input class="ui_input" type="text" name="year_won" id="year_won" <?php echo $readonly ?> value="" size="6" maxlength="6" />
                                </td>
                            </tr>
                            <tr>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="15" /></td>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="15" /></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td align="left"></td>
                            </tr>
                        </table>
                    </form>
                </td>
            </tr>
        </table>   
    </div>
</div>        
