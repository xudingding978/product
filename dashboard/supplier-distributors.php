

<?php
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . "/common/sessionhandler.php");
include_once($path_doc_root . "/config.php");
//include_once($path_doc_root . "/include/db_class.php");
//include_once($path_doc_root . "/include/tpldb_class.php");
include_once($path_doc_root . "/include/KoolPHPSuite/KoolAjax/koolajax.php");
include_once($path_doc_root . "/include/KoolPHPSuite/KoolTabs/kooltabs.php");
include_once "../common/util/DBTransaction.php";
include_once "../common/dao/TplShadowSupplierDistributorDAO.php";
$dbtrans = new DBTransaction();
$dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
$tplshadowsupplierdistributerdao = new TplShadowSupplierDistributorDAO();
if ($shadow_root["STATE"] == 'OPEN') {
    $readonly = "";
} else {
    $readonly = "readonly='1' disabled='true'";
}
echo "<table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\n";
echo "  <tr>\n";
echo "    <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"805\" height=\"8\" /></td>\n";
echo "  </tr>\n";
echo "  <tr>\n";
echo "    <td valign=\"top\" width=\"100%\" class=\"BodyText\">\n";

//$tpl_db = new tpldb;
//$supplierdistributors = $tpl_db->getShadowRecordsBySupplier("tpl_shadow_supplier_distributor", $session_maintain->get_client_field("shadow_root_id", $instanceID, "client_data"), $session_maintain->get_client_field("shadow_supplier_id", $instanceID, "client_data"), "NAME", "");
$array = array($GLOBALS["shadow_supplier_rec_id"]);
$supplierdistributors = $tplshadowsupplierdistributerdao->select($dbconn, $array);
echo "      <table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\n";
echo "        <tr>\n";

if ($shadow_root["STATE"] == "OPEN")
    echo "          <td valign=\"top\" width=\"10%\" class=\"BodyText\"><button id=\"add_new\"><b>Add New</b></button></td>\n";

echo "          <td valign=\"top\" width=\"65%\" class=\"BodyText\"><b><u>Name</u></b></td>\n";
echo "          <td valign=\"top\" width=\"25%\" class=\"BodyText\"><b><u>Telephone No</u></b></td>\n";
echo "        </tr>\n";

if ($supplierdistributors) {
    foreach ($supplierdistributors as $key => $supplierdistributor) {
        echo "        <tr>\n";

        if ($shadow_root["STATE"] == "OPEN")
            echo "          <td valign=\"top\" width=\"10%\" class=\"BodyText\"><button id=\"edit\" onclick=\"DoSupplierDistributorUpdate('" . $supplierdistributor["REC_ID"] . "', '" . htmlspecialchars($supplierdistributor["NAME"]) . "', '" . htmlspecialchars($supplierdistributor["TELEPHONE_NO"]) . "');return false\"><b>Edit</b></button><button id=\"delete\" onclick=\"DoSupplierDistributorDelete('" . $supplierdistributor["REC_ID"] . "');return false\"><b>Delete</b></button></td>\n";

        echo "          <td valign=\"top\" width=\"65%\" class=\"BodyText\">" . htmlspecialchars($supplierdistributor["NAME"]) . "</td>\n";
        echo "          <td valign=\"top\" width=\"25%\" class=\"BodyText\">" . htmlspecialchars($supplierdistributor["TELEPHONE_NO"]) . "</td>\n";
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
    
    function DoSupplierDistributorDelete(recid)
    {      	  	  
        
        koolajax.callback(DoTPLDeleteSupplierDistributorDetails(recid,instanceID));        	
        //tabpanel.update("/dashboard/supplier-distributors.php?instanceID="+instanceID);
    }    
    
    function DoSupplierDistributorUpdate(recid,dis_name,dis_tele)
    {
        rec_id=recid;
        $("#distributer_name").val(dis_name);
        $("#distributer_tele").val(dis_tele);       
        openEditWindow();
    }
    function DoSaveSupplierDistributorDetails(thisform1)
    {
        var thisform=document.forms["supplier_distributor_detail"];
        if (thisform.name.value != "" )
        {          
            koolajax.callback(DoTPLUpdateSupplierDistributorDetails(rec_id, thisform.name.value, thisform.telephone_no.value,instanceID));          
            //parent.tabpanel.update("/dashboard/supplier-distributors.php");
        }
        else
        {
            alert("Please complete all of the manditory fields before clicking the save changes button.");
        }
    }
    function openEditWindow(){
        
        $("#dialog_distributors" ).dialog({
            
            title:"Supplier Distributers",
            autoOpen: true,
            visibility:true,
            width: 700,
            height: 320,
            modal: true,
            buttons: {
                "Save Changes": function() {
                    DoSaveSupplierDistributorDetails(this);                    
                    $(this).dialog('close');
                },
                "Cancel": function() {  
                    document.forms["supplier_distributor_detail"].reset();
                     $(this).dialog('close');
                }
            }
            
        });
      
    }
    $(document).ready(function() {
        //$("#id31").bind("click",function(){alert("id31");});  
        //    $("#add_new").bind("click",function(){$("#dialog").dialog("open")}); 
        $("#add_new").click(function() {
           
            $("#dialog_distributors" ).dialog({
                title:"Supplier Distributers",
                autoOpen: true,
                visibility:true,
                width: 700,
                height: 320,
                modal: true,
                buttons: {
                    "Save Changes": function() {
                        DoSaveSupplierDistributorDetails(this);  
                         $(this).dialog('close');
                        //$(this).empty().remove();
                    },
                    "Cancel": function() { 
                        document.forms["supplier_distributor_detail"].reset();
                         $(this).dialog('close');
                       // $(this).empty().remove();
                    }
                }
            });
           
   
        });

    });
    
    

</script>
<div id="dialogwrap" style="background-color: #EEEEEE;visibility: hidden"> 
    <div id="dialog_distributors" style="background-color: #EEEEEE;">       
        <table width='100%' border='0' cellpadding='8' cellspacing='0'>
            <tr>
                <td valign="top" width="100%" class="BodyText">
                    <form id="supplier_distributor_detail" name="supplier_distributor_detail">
                        <table width="100%" border="0" cellpadding="0" cellspacing="0">
                            <tr>
                                <td><img src="/images/spacer.gif" border="0" width="100" height="8" /></td>
                                <td><img src="/images/spacer.gif" border="0" width="485" height="8" /></td>
                            </tr>
                            <tr>
                                <td valign="top" class="BodyText tableLabel"><br/>Distributor Name <font color="#FF0000"><b>*</b></font></td>
                                <td valign="top" class="BodyText">eg <i>Mainline Distributors</i><br/><input class="ui_input" type="text" id="distributer_name" name="name" <?php echo $readonly ?> value="" size="50" maxlength="255" /></td>
                            </tr>
                            <tr>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            </tr>
                            <tr>
                                <td valign="top" class="BodyText tableLabel"><br/>Telephone Number</td>
                                <td valign="top" class="BodyText">eg <i>09 222 2222</i> or <i>+64 9 222 2222</i><br/><input class="ui_input" type="text"  id="distributer_tele" name="telephone_no" <?php echo $readonly ?> value="" size="24" maxlength="48" /></td>
                            </tr>
                            <tr>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            </tr>
                            
                        </table>
                    </form>
                </td>
            </tr>
        </table>
    </div>
</div>