<?php
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . "/common/sessionhandler.php");
include_once("../config.php");
//include_once($path_doc_root . "/include/db_class.php");
//include_once($path_doc_root . "/include/tpldb_class.php");
include_once($path_doc_root . "/include/KoolPHPSuite/KoolAjax/koolajax.php");
include_once($path_doc_root . "/include/KoolPHPSuite/KoolTabs/kooltabs.php");
include_once "../common/util/DBTransaction.php";
include_once "../common/dao/TplSupplierAccreditationsDAO.php";
include_once($path_doc_root . "/include/KoolPHPSuite/KoolCalendar/koolcalendar.php");
$datepicker = new KoolDatePicker("datepicker"); //Create calendar object
$datepicker->scriptFolder = "../include/KoolPHPSuite/KoolCalendar"; //Set scriptFolder
$datepicker->styleFolder = "default";
$datepicker->Init();
if ($GLOBALS["shadow_state"] == 'OPEN') {
    $readonly = "";
} else {
    $readonly = "readonly='1' disabled='true'";
}




//if ($client_user) {
    echo "<table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\n";
    echo "  <tr>\n";
    echo "    <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"805\" height=\"8\" /></td>\n";
    echo "  </tr>\n";
    echo "  <tr>\n";
    echo "    <td valign=\"top\" width=\"100%\" class=\"BodyText\">\n";

    $dbtrans = new DBTransaction();
    $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
    $tplshadowsupplieraccreditationsdao = new TplSupplierAccreditationsDAO();
    $array = array($GLOBALS["shadow_supplier_rec_id"]);
    $supplieraccreds = $tplshadowsupplieraccreditationsdao->select($dbconn, $array);
//
//
//    $tpl_db = new tpldb;
//    $supplieraccreds = $tpl_db->getShadowRecordsBySupplier("tpl_supplier_accreditations", $shadow_root['CLIENT_REC_ID'], $shadow_root['CLIENT_REC_ID'], "tpl_supplier_accreditations.NAME", "INNER JOIN tpl_shadow_supplier ON (tpl_supplier_accreditations.SUPPLIER_REC_ID=tpl_shadow_supplier.REC_ID)");

    echo "      <table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\n";
    echo "        <tr>\n";

    if ($GLOBALS["shadow_state"] == "OPEN")
        echo "          <td valign=\"top\" width=\"10%\" class=\"BodyText\"><button id='add_new_accreditations'><b>Add New</b></button></td>\n";

    echo "          <td valign=\"top\" width=\"15%\" class=\"BodyText\"><b><u>Accreditation Name</u></b></td>\n";
    echo "          <td valign=\"top\" width=\"10%\" class=\"BodyText\"><b><u>Date Achieved</u></b></td>\n";
    echo "          <td valign=\"top\" width=\"10%\" class=\"BodyText\"><b><u>Issued By</u></b></td>\n";
    echo "          <td valign=\"top\" width=\"20%\" class=\"BodyText\"><b><u>Accred. Logo URL</u></b></td>\n";
    echo "          <td valign=\"top\" width=\"25%\" class=\"BodyText\"><b><u>Accred. Logo Link</u></b></td>\n";
    echo "          <td valign=\"top\" width=\"10%\" class=\"BodyText\"><b><u>Year Won</u></b></td>\n";
    echo "        </tr>\n";

    if ($supplieraccreds) {

        foreach ($supplieraccreds as $key => $supplieraccreditation) {           
            echo "        <tr>\n";

            $label = htmlspecialchars($supplieraccreditation["NAME"]);
            $label = str_replace("'", "\'", $label);

            if ($GLOBALS["shadow_state"] == "OPEN")
                echo "          <td valign=\"top\" width=\"10%\" class=\"BodyText\"><button  onclick=\"DoSupplierAccreditationUpdate('" . $supplieraccreditation["REC_ID"] . "', '" . htmlspecialchars($supplieraccreditation["NAME"]) . "', '" . htmlspecialchars($supplieraccreditation["TYPE"]) . "', '" . htmlspecialchars($supplieraccreditation["ISSUED_BY"]) . "', '" . htmlspecialchars($supplieraccreditation["YEAR_WON"]) . "', '" . htmlspecialchars($supplieraccreditation["CERTIFICATE_NUMBER"]) . "', '" . htmlspecialchars($supplieraccreditation["ACCRED_LOGO_URL"]) . "', '" . htmlspecialchars($supplieraccreditation["ACCRED_LOGO_LINK"]) . "');return false\"><b>Edit</b></button><button  onclick=\"DoSupplierAccredDelete('" . $supplieraccreditation["REC_ID"] . "');return false\"><b>Delete</b></button></td>\n";

            echo "          <td valign=\"top\" width=\"15%\" class=\"BodyText\">" . $supplieraccreditation["NAME"] . "</td>\n";

            echo "          <td valign=\"top\" width=\"10%\" class=\"BodyText\">" . date('Y-m-d', strtotime($supplieraccreditation["DATE_ACHIEVED"])) . "</td>\n";
            echo "          <td valign=\"top\" width=\"10%\" class=\"BodyText\">" . $supplieraccreditation["ISSUED_BY"] . "</td>\n";
            echo "          <td valign=\"top\" width=\"20%\" class=\"BodyText\">" . $supplieraccreditation["ACCRED_LOGO_URL"] . "</td>\n";
            echo "          <td valign=\"top\" width=\"25%\" class=\"BodyText\">" . $supplieraccreditation["ACCRED_LOGO_LINK"] . "</td>\n";
            echo "          <td valign=\"top\" width=\"10%\" class=\"BodyText\">" . $supplieraccreditation["YEAR_WON"] . "</td>\n";

            echo "        </tr>\n";
        }
    }

    echo "      </table>\n";

    echo "    </td>\n";
    echo "  </tr>\n";
    echo "</table>\n";
//}
//else {
//    echo "<table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\n";
//    echo "  <tr>\n";
//    echo "    <td valign=\"top\" height=\"472\" width=\"100%\">\n";
//    echo "      <p class=\"ErrorText\"><b>Session Expired</b></p>\n";
//    echo "    </td>\n";
//    echo "  </tr>\n";
//    echo "</table>\n";
//
//    echo "<script language=\"javascript\">";
//    echo "  parent.location='/portal';\n";
//    echo "</script>\n";
//}
   // error_log("Accreditations.......................................................................:1");
?>
<script type="text/javascript">    
    var instanceID='<?php echo $instanceID; ?>';
    var rec_id=0;
    
    function DoSupplierAccredDelete(recid)
    {
	  	  
        koolajax.callback(DoTPLDeleteSupplierAccredDetails(recid,instanceID)); 
        //tabpanel.update("/dashboard/supplier-accreditations.php?instanceID="+instanceID);
   	   
    }	  
    
    function DoSupplierAccreditationUpdate(recid,name,accredtype,issued_by,year_won,certificate_number,accred_logo_url,accred_logo_link)
    {
        rec_id=recid;        
        $("#name").val(name);
        $("#accredtype").val(accredtype);
        $("#issued_by").val(issued_by);
        $("#certificate_number").val(certificate_number);
        $("#accred_logo_url").val(accred_logo_url);
        $("#accred_logo_link").val(accred_logo_link);
        $("#year_won").val(year_won);
        openEditWindow();
    }
    function openEditWindow(){
        $("#dialog_accreditations" ).dialog({
            title:"Supplier Accreditations",
            autoOpen: true,
            visibility:true,
            width: 850,
            height: 725,
            modal: true,
            buttons: {
                "Save Changes": function() {
                    DoSaveSupplierAccredDetails(document.forms["supplier_accreditation_detail"],this);
                    $(this).dialog('close');
                    //$(this).empty().remove();
                },
                "Cancel": function() {
                    $(this).dialog('close');
                    //$(this).empty().remove();
                }
            }
        });
    }
    
    
    function DoSaveSupplierAccredDetails(thisform)
    {
       
        if (thisform.name.value != "" && thisform.accredtype.value != "" && thisform.year_won.value != "")
        {                    
            //thisform.datepicker.value
            koolajax.callback(DoTPLUpdateSupplierAccredDetails(rec_id, thisform.name.value, thisform.accredtype.value, '', thisform.issued_by.value, thisform.certificate_number.value, thisform.accred_logo_url.value, thisform.accred_logo_link.value, thisform.year_won.value,instanceID));
            //parent.tabpanel.update("/dashboard/supplier-accreditations.php");
           
                                       
        }
        else
        {
           
            alert("Please complete all of the mandatory fields before clicking the save changes button.");
        }
    }
    
  
    
    $(document).ready(function() {
        $("#add_new_accreditations").click(function() {
           
            $("#dialog_accreditations" ).dialog({
                title:"Supplier Accreditations",
                autoOpen: true,
                visibility:true,
                width: 850,
                height: 725,
                modal: true,
                buttons: {
                    "Save Changes": function() {                       
                        DoSaveSupplierAccredDetails(document.forms["supplier_accreditation_detail"],this);
                        //$(this).empty().remove();                         
                        $(this).dialog('close');
                    },
                    "Cancel": function() {
                        //$(this).empty().remove();
                        $(this).dialog('close');
                    }
                }
            });
           

        });
        
    });
    
    

</script>
<div id="dialogwrap" style="background-color: #EEEEEE;visibility: hidden"> 
    <div id="dialog_accreditations" style="background-color: #EEEEEE;"> 
        <table width="100%" border="0" cellpadding="8" cellspacing="0">
            <tr>
                <td valign="top" width="100%" class="BodyText">
                    <form id="supplier_accreditation_detail" >
                        <table width="100%" border="0" cellpadding="0" cellspacing="0">
                            <tr>
                                <td><img src="/images/spacer.gif" border="0" width="120" height="8" /></td>
                                <td><img src="/images/spacer.gif" border="0" width="485" height="8" /></td>
                            </tr>
                            <tr>
                                <td valign="top" class="BodyText" tableLabel><br/>Accreditation Name <font color="#FF0000"><b>*</b></font></td>
                                <td valign="top" class="BodyText">eg: <i>Name of the Accreditation issued</i><br/><input class="ui_input" type="text" name="name" id="name" <?php echo $readonly ?> value="" size="32" maxlength="1000" /></td>
                            </tr>
                            <tr>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            </tr>

                            <tr>
                                <td valign="top" class="BodyText tableLabel"><br/>Type <font color="#FF0000"><b>*</b></font></td>
                                <td valign="top" class="BodyText">eg: <i>Certificate, Degree, Post Grad, Diploma etc</i><br/><input class="ui_input" type="text" name="accredtype" id="accredtype" <?php echo $readonly ?> value="" size="32" maxlength="1000" /></td>
                            </tr>
                            <tr>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            </tr>
                            <tr>
                                <td valign="top" class="BodyText tableLabel"><br/>Date Achieved</td>
                                <td valign="top" class="BodyText">eg: <i>Date achieved'</i><br/>
                                    
                                </td>
                            </tr>
                            <tr>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            </tr>
                            <tr>
                                <td valign="top" class="BodyText tableLabel"><br/>Issued By</td>
                                <td valign="top" class="BodyText">eg: <i>Governing body that issued the Accreditation</i><br/><input class="ui_input" type="text" name="issued_by" id="issued_by"  <?php echo $readonly ?> value="" size="32" maxlength="255" /></td>
                            </tr>
                            <tr>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            </tr>
                            <tr>
                                <td valign="top" class="BodyText tableLabel"><br/>Certificate Number</td>
                                <td valign="top" class="BodyText">eg: <i>Code or number of the Certificate</i><br/><input class="ui_input" type="text" name="certificate_number" id="certificate_number"  <?php echo $readonly ?> value="" size="32" maxlength="255" /></td>
                            </tr>
                            <tr>
                            <tr>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            </tr>
                            <tr>
                                <td valign="top" class="BodyText tableLabel"><br/>Accred. Logo URL</td>
                                <td valign="top" class="BodyText">eg: <i>Accreditation Logo URL'</i><br/><input class="ui_input" type="text" name="accred_logo_url" id="accred_logo_url"  <?php echo $readonly ?> value="" size="60" maxlength="2560" /></td>
                            </tr>
                            <tr>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            </tr>
                            <tr>
                                <td valign="top" class="BodyText tableLabel"><br/>Accred. Logo Link</td>
                                <td valign="top" class="BodyText">eg: <i>Link to the Accreditors website</i><br/><input class="ui_input" type="text" name="accred_logo_link" id="accred_logo_link" <?php echo $readonly ?> value="" size="60" maxlength="2560" /></td>
                            </tr>
                            <tr>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            </tr>
                            <tr>
                                <td valign="top" class="BodyText tableLabel"><br/>Year Won <font color="#FF0000"><b>*</b></font></td>
                                <td valign="top" class="BodyText">eg: <i>Year achieved</i><br/><input class="ui_input" type="text" name="year_won" id="year_won"  <?php echo $readonly ?> value="" size="4" maxlength="6" /></td>
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
