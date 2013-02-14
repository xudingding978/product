


<?php
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once("../config.php");
include_once($path_doc_root . "/common/sessionhandler.php");
//include_once($path_doc_root . "/include/db_class.php");
//include_once($path_doc_root . "/include/tpldb_class.php");
include_once($path_doc_root . "/include/KoolPHPSuite/KoolAjax/koolajax.php");
include_once($path_doc_root . "/include/KoolPHPSuite/KoolTabs/kooltabs.php");
include_once "../common/util/DBTransaction.php";
include_once "../common/dao/TplShadowSupplierKeyPersonnelDAO.php";


echo "<table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\n";
echo "  <tr>\n";
echo "    <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"805\" height=\"8\" /></td>\n";
echo "  </tr>\n";
echo "  <tr>\n";
echo "    <td valign=\"top\" width=\"100%\" class=\"BodyText\">\n";
$dbtrans = new DBTransaction();
$dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
$tplshadowsupplierkeypersonaldao = new TplShadowSupplierKeyPersonnelDAO();
$array = array($GLOBALS["shadow_supplier_rec_id"]);
$keypersons = $tplshadowsupplierkeypersonaldao->select($dbconn, $array);


if ($shadow_root["STATE"] == 'OPEN') {
    $readonly = "";
} else {
    $readonly = "readonly='1' disabled='true'";
}
//$tpl_db = new tpldb;
//$keypersons = $tpl_db->getShadowRecordsBySupplier("tpl_shadow_supplier_key_personnel", $shadow_root_id, $shadow_supplier_id, "NAME", "");

echo "      <table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\n";
echo "        <tr>\n";

if ($shadow_root["STATE"] == "OPEN")
    echo "          <td valign=\"top\" width=\"10%\" class=\"BodyText\"><button id='add_new_personnel'><b>Add New</b></button></td>\n";

echo "          <td valign=\"top\" width=\"20%\" class=\"BodyText\"><b><u>Name</u></b></td>\n";
echo "          <td valign=\"top\" width=\"25%\" class=\"BodyText\"><b><u>Position</u></b></td>\n";
echo "          <td valign=\"top\" width=\"25%\" class=\"BodyText\"><b><u>Email Address</u></b></td>\n";
echo "          <td valign=\"top\" width=\"10%\" class=\"BodyText\"><b><u>Phone</u></b></td>\n";
echo "          <td valign=\"top\" width=\"10%\" class=\"BodyText\"><b><u>Fax</u></b></td>\n";
echo "        </tr>\n";

if ($keypersons) {
    foreach ($keypersons as $key => $keyperson) {
        echo "        <tr>\n";

        if ($shadow_root["STATE"] == "OPEN")
            echo "          <td valign=\"top\" width=\"10%\" class=\"BodyText\"><button  onclick=\"DoSupplierPersonUpdate('" . $keyperson["REC_ID"] . "', '" . htmlspecialchars($keyperson["NAME"]) . "', '" . htmlspecialchars($keyperson["POSITION"]) . "', '" . htmlspecialchars($keyperson["POSTAL_ADDRESS_BUILDING_ADDRESS"]) . "', '" . htmlspecialchars($keyperson["POSTAL_ADDRESS_STREET_ADDRESS"]) . "', '" . htmlspecialchars($keyperson["POSTAL_ADDRESS_SUBURB"]) . "', '" . htmlspecialchars($keyperson["POSTAL_ADDRESS_CITY"]) . "', '" . htmlspecialchars($keyperson["POSTAL_ADDRESS_POST_CODE"]) . "', '" . htmlspecialchars($keyperson["POSTAL_ADDRESS_COUNTRY"]) . "', '" . htmlspecialchars($keyperson["TELEPHONE_NO"]) . "', '" . htmlspecialchars($keyperson["FAX_NO"]) . "', '" . htmlspecialchars($keyperson["EMAIL_ADDRESS"]) . "');return false\"><b>Edit</b></button><button  onclick=\"DoSupplierPersonDelete('" . $keyperson["REC_ID"] . "');return false\"><b>Delete</b></button>    </td>\n";

        echo "          <td valign=\"top\" width=\"20%\" class=\"BodyText\">" . $keyperson["NAME"] . "</td>\n";
        echo "          <td valign=\"top\" width=\"25%\" class=\"BodyText\">" . $keyperson["POSITION"] . "</td>\n";
        echo "          <td valign=\"top\" width=\"25%\" class=\"BodyText\">" . $keyperson["EMAIL_ADDRESS"] . "</td>\n";
        echo "          <td valign=\"top\" width=\"10%\" class=\"BodyText\">" . $keyperson["TELEPHONE_NO"] . "</td>\n";
        echo "          <td valign=\"top\" width=\"10%\" class=\"BodyText\">" . $keyperson["FAX_NO"] . "</td>\n";
        echo "        </tr>\n";
    }
}

echo "      </table>\n";

echo "    </td>\n";
echo "  </tr>\n";
echo "</table>\n";
?>
<script type="text/javascript">    
    var instanceID='<?php echo $instanceID; ?>';
    var rec_id=0;
    
    function DoSupplierPersonDelete(recid)
    {      	  	  
        rec_id=recid;
        koolajax.callback(DoTPLDeleteSupplierPersonDetails(recid,instanceID));        	
        //activedoc="/dashboard/supplier-personnel.php?instanceID="+instanceID;
        //parent.tabpanel.update(activedoc);
    }    
    
    function DoSupplierPersonUpdate(recid,name,position,postal_address_building_address,postal_address_street_address,postal_address_suburb,postal_address_city,postal_address_post_code,postal_address_country,telephone_no,fax_no,email_address)
    {
        rec_id=recid;        
        $("#name").val(name);
        $("#position").val(position);
        $("#postal_address_building_address").val(postal_address_building_address);
        $("#postal_address_street_address").val(postal_address_street_address);
        $("#postal_address_suburb").val(postal_address_suburb);
        $("#postal_address_city").val(postal_address_city);
        $("#postal_address_post_code").val(postal_address_post_code);
        $("#postal_address_country").val(postal_address_country);        
        $("#telephone_no").val(telephone_no);
        $("#fax_no").val(fax_no);
        $("#email_address").val(email_address);
        openEditWindow();
    }
    function openEditWindow(){
        $("#dialog_keypersonal" ).dialog({
                title:"Key Personnel",
                autoOpen: true,
                visibility:true,
                width: 800,
                height: 850,
                modal: true,
                buttons: {
                    "Save Changes": function() {
                        DoSaveSupplierPersonDetails(document.forms["supplier_personnel"]);
                        document.forms["supplier_personnel"].reset();
                        $(this).dialog('close');
                    },
                    "Cancel": function() {
                         document.forms["supplier_personnel"].reset();
                         $(this).dialog('close');
                    }
                }
            });
    }
    
    function DoSaveSupplierPersonDetails(thisform)
    {
        
        if (thisform.name.value != "" )
        {          
            koolajax.callback(DoTPLUpdateSupplierPersonDetails(rec_id, thisform.name.value, thisform.position.value, thisform.postal_address_building_address.value, thisform.postal_address_street_address.value, thisform.postal_address_suburb.value, thisform.postal_address_city.value, thisform.postal_address_post_code.value, thisform.postal_address_country.value, thisform.telephone_no.value, thisform.fax_no.value, thisform.email_address.value,instanceID));          
            //activedoc="/dashboard/supplier-personnel.php?instanceID="+instanceID;
            //parent.tabpanel.update(activedoc);            
        }
        else
        {
            alert("Please complete all of the manditory fields before clicking the save changes button.");
        }
    }
    
    $(document).ready(function() {
        //$("#id31").bind("click",function(){alert("id31");});  
        //    $("#add_new").bind("click",function(){$("#dialog").dialog("open")}); 
       
        $("#add_new_personnel").click(function() {         
            $("#dialog_keypersonal" ).dialog({
                title:"Key Personnel",
                autoOpen: true,
                visibility:true,
                width: 800,
                height: 850,
                modal: true,
                buttons: {
                    "Save Changes": function() {
                        DoSaveSupplierPersonDetails(document.forms["supplier_personnel"]);
                        document.forms["supplier_personnel"].reset();
                        $(this).dialog('close');
                    },
                    "Cancel": function() {
                         document.forms["supplier_personnel"].reset();
                         $(this).dialog('close');
                    }
                }
            });

        });

    });
    
    

</script>
<div id="dialogwrap" style="background-color: #EEEEEE;visibility: hidden"> 
    <div id="dialog_keypersonal" style="background-color: #EEEEEE;">       
        <table width="100%" border="0" cellpadding="8" cellspacing="0">
            <tr>
                <td valign="top" width="100%" class="BodyText">
                    <form id="supplier_personnel" >
                        <table width="100%" border="0" cellpadding="0" cellspacing="0">
                            <tr>
                                <td><img src="/images/spacer.gif" border="0" width="120" height="8" /></td>
                                <td><img src="/images/spacer.gif" border="0" width="485" height="8" /></td>
                            </tr>
                            <tr>
                                <td valign="top" class="BodyText tableLabel"><br/>Person Name</td>
                                <td valign="top" class="BodyText">eg <i>Bob Smith</i><br/><input class="ui_input"  type="text" name="name" id="name" <?php echo $readonly ?> value="" size="64" maxlength="255" /></td>
                            </tr>
                            <tr>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            </tr>
                            <tr>
                                <td valign="top" class="BodyText tableLabel"><br/>Position</td>
                                <td valign="top" class="BodyText">eg <i>Brand Manager</i><br/><input class="ui_input" type="text" name="position" id="position" <?php echo $readonly ?> value="" size="64" maxlength="255" /></td>
                            </tr>
                            <tr>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            </tr>
                            <tr>
                                <td valign="top" class="BodyText tableLabel"><br/>Postal Building Address</td>
                                <td valign="top" class="BodyText">eg <i>Level 12</i><br/><input class="ui_input" type="text" name="postal_address_building_address"  id="postal_address_building_address" <?php echo $readonly ?> value="" size="32" maxlength="255" /></td>
                            </tr>
                            <tr>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            </tr>
                            <tr>
                                <td valign="top" class="BodyText tableLabel"><br/>Postal Street/Box Address</td>
                                <td valign="top" class="BodyText">eg <i>123 Some Street</i> or <i>PO Box 12345</i><br/><input class="ui_input" type="text" name="postal_address_street_address" id="postal_address_street_address" <?php echo $readonly ?> value="" size="64" maxlength="255" /></td>
                            </tr>
                            <tr>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            </tr>
                            <tr>
                                <td valign="top" class="BodyText tableLabel"><br/>Postal Suburb</td>
                                <td valign="top" class="BodyText">eg <i>Greenlane</i><br/><input class="ui_input" type="text" name="postal_address_suburb" id="postal_address_suburb" <?php echo $readonly ?> value="" size="32" maxlength="255" /></td>
                            </tr>
                            <tr>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            </tr>
                            <tr>
                                <td valign="top" class="BodyText tableLabel"><br/>Postal City/Town</td>
                                <td valign="top" class="BodyText">eg <i>Auckland</i><br/><input class="ui_input" type="text" name="postal_address_city" id="postal_address_city" <?php echo $readonly ?> value="" size="32" maxlength="255" /></td>
                            </tr>
                            <tr>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            </tr>
                            <tr>
                                <td valign="top" class="BodyText tableLabel"><br/>Postal Post Code</td>
                                <td valign="top" class="BodyText">eg <i>1182</i><br/><input class="ui_input" type="text" name="postal_address_post_code" id="postal_address_post_code" <?php echo $readonly ?> value="" size="12" maxlength="12" /></td>
                            </tr>
                            <tr>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            </tr>
                            <tr>
                                <td valign="top" class="BodyText tableLabel"><br/>Postal Country</td>
                                <td valign="top" class="BodyText">eg <i>New Zealand</i><br/><input class="ui_input" type="text" name="postal_address_country" id="postal_address_country" <?php echo $readonly ?> value="" size="32" maxlength="255" /></td>
                            </tr>
                            <tr>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            </tr>
                            <tr>
                                <td valign="top" class="BodyText tableLabel"><br/>Telephone Number</td>
                                <td valign="top" class="BodyText">eg <i>09 222 2222</i> or <i>+64 9 222 2222</i><br/><input class="ui_input" type="text" name="telephone_no" id="telephone_no" <?php echo $readonly ?> value="" size="24" maxlength="24" /></td>
                            </tr>
                            <tr>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            </tr>
                            <tr>
                                <td valign="top" class="BodyText tableLabel"><br/>Fax Number</td>
                                <td valign="top" class="BodyText">eg <i>09 222 2222</i> or <i>+64 9 222 2222</i><br/><input class="ui_input" type="text" name="fax_no" id="fax_no" <?php echo $readonly ?> value="" size="24" maxlength="24" /></td>
                            </tr>
                            <tr>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            </tr>
                            <tr>
                                <td valign="top" class="BodyText tableLabel"><br/>Email Address</td>
                                <td valign="top" class="BodyText">eg <i>bob@abc.co.nz</i><br/><input class="ui_input" type="text" name="email_address" id="email_address" <?php echo $readonly ?> value="" size="64" maxlength="255" /></td>
                            </tr>
                            <tr>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
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