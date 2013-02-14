
<?php
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . "/common/sessionhandler.php");
include_once("../config.php");
//include_once($path_doc_root . "/include/db_class.php");
//include_once($path_doc_root . "/include/tpldb_class.php");
include_once($path_doc_root . "/include/KoolPHPSuite/KoolAjax/koolajax.php");
include_once($path_doc_root . "/include/KoolPHPSuite/KoolTabs/kooltabs.php");
include_once "../common/util/DBTransaction.php";
include_once "../common/dao/TplShadowSupplierBrandDAO.php";
include_once "../common/dao/TplBrandDAO.php";
initialPage();

function initialPage($para) {

    echo "<table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\n";
    echo "  <tr>\n";
    echo "    <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"805\" height=\"8\" /></td>\n";
    echo "  </tr>\n";
    echo "  <tr>\n";
    echo "    <td valign=\"top\" width=\"100%\" class=\"BodyText\">\n";

    $dbtrans = new DBTransaction();
    $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
    $tplshadowsupplierbranddao = new TplShadowSupplierBrandDAO();
    $array = array($GLOBALS["shadow_supplier_rec_id"]);
    $supplierbrands = $tplshadowsupplierbranddao->selectInnerBrand($dbconn, $array);

//$tpl_db = new tpldb;
//$supplierbrands = $tpl_db->getShadowRecordsBySupplier("tpl_shadow_supplier_brand", $session_maintain->get_client_field("shadow_root_id", $instanceID, "client_data"), $session_maintain->get_client_field("shadow_supplier_id", $instanceID, "client_data"), "tpl_brand.NAME", "INNER JOIN tpl_brand ON (tpl_shadow_supplier_brand.BRAND_REC_ID = tpl_brand.REC_ID)");

    echo "      <table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\n";
    echo "        <tr>\n";

    if ($shadow_root["STATE"] == "OPEN")
        echo "";
    echo "      <td valign=\"top\" width=\"10%\" class=\"BodyText\"><button id=\"add_new_brand\"><b>Add New</b></button></td> ";
    echo "          <td valign=\"top\" width=\"75%\" class=\"BodyText\"><b><u>Name</u></b></td>";
    echo "          <td valign=\"top\" width=\"10%\" class=\"BodyText\"><b><u>Logo Listing</u></b></td>";
    echo "        </tr>\n";


    if ($supplierbrands) {
        foreach ($supplierbrands as $key => $supplierbrand) {
            //$brand = $tpl_db->getRecord("tpl_brand", $supplierbrand["BRAND_REC_ID"]);
//        $dbtrans = new DBTransaction();
//        $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
//        $tplbranddao = new TplBrandDAO();
//        $param_arr = array($supplierbrand["BRAND_REC_ID"]);
//        $brandlist =$tplbranddao->select($dbconn, $param_arr);
//        $brand=$brandlist[0];
            echo "        <tr>\n";

            $label = htmlspecialchars($supplierbrand["NAME"]);
            $label = str_replace("'", "\'", $label);

            if ($shadow_root["STATE"] == "OPEN")
                echo "";
            echo "          <td valign=\"top\" width=\"10%\" class=\"BodyText\"><button id=\"edit\" onclick=\"DoSupplierBrandUpdate('" . $supplierbrand["REC_ID"] . "', '" . htmlspecialchars($supplierbrand["NAME"]) . "', '" . htmlspecialchars($supplierbrand["IS_LOGO_LISTING"]) . "');return false\"><b><i class=\"icon-edit\"></i>Edit</b></button><button id=\"delete\" onclick=\"DoSupplierBrandDelete('" . $supplierbrand["REC_ID"] . "');return false\"><i class=\"icon-trash\"></i><b>Delete</b></button></td>\n";
            echo "          <td valign=\"top\" width=\"25%\" class=\"BodyText\">" . htmlspecialchars($supplierbrand["NAME"]) . "</td>\n";
            echo "          <td valign=\"top\" width=\"25%\" class=\"BodyText\">";

            if ($supplierbrand["IS_LOGO_LISTING"] == true)
                echo "Yes";
            else
                echo "No";

            echo "</td>\n";
            echo "        </tr>\n";
        }
    }
    echo "      </table>\n";

    echo "    </td>\n";
    echo "  </tr>\n";
    echo "</table>\n";

    return;
}

$koolajax->enablefunction("initialPage");
?>



<script type="text/javascript">    
    var instanceID='<?php echo $instanceID; ?>';
    var rec_id=0;   
    var dir_id='<?php echo $instanceID; ?>';
    function DoSupplierBrandDelete(recid)
    {      	  	  
        rec_id=recid;
        koolajax.callback(DoTPLDeleteSupplierBrandDetails(recid,instanceID));        
        koolajax.callback(initialPage("logout"));            	
        //activedoc="/dashboard/supplier-brands.php?instanceID="+instanceID;
        //parent.tabpanel.update(activedoc);
    }    
    
    function DoSupplierBrandUpdate(recid,brandname,is_logo_listing)
    {
        rec_id=recid;        
        $("#BrandName").val(brandname);
        if(is_logo_listing==0){
            $("#logo_listing").attr('checked', true);   
        }
        openEditWindow();
    }
    function openEditWindow(){
        $("#dialog_brand" ).dialog({
            title:"Supplier Brands",
            autoOpen: true,
            visibility:true,
            width: 850,
            height: 475,
            modal: true,
            buttons: {
                "Save Changes": function() {
                    DoSaveSupplierBrandDetails(document.forms["supplier_brand_detail"],this);
                    $(this).dialog('close');
                },
                "Cancel": function() {
                    $(this).dialog('close');
                }
            }
        });
    }
    
    
    function DoSaveSupplierBrandDetails(thisform,thisob)
    {
        if(thisform.BrandName.value==""){
            alert("Brand name should be mandatory.");  
            return false;  
        }      
        
        if (thisform.auth.checked)
        {
            var oldvalue;
            oldvalue=0;
            
            if (oldvalue != 0)
            {
                koolajax.callback(DoTPLDeleteSupplierBrandDetails(oldvalue,instanceID));  
            }        

            var brandexists;
            brandexists=koolajax.callback(DoTPLConfirmBrandExists(thisform.BrandName.value,instanceID));

            if (brandexists == false)
            {
                var createbrand;
                createbrand=confirm('The brand that you have entered does not exist on the database.  Please check that it is correctly spelt, and if so, click OK, else click Cancel');
              
                if (createbrand)
                {
                    koolajax.callback(DoTPLAddSupplierBrandDetails(rec_id,1, thisform.BrandName.value, thisform.logo_listing.checked,instanceID));
                    //parent.tabpanel.update("/dashboard/supplier-brands.php");
                    $(this).dialog('close');                    
                }            
            }
            else
            {
                
                koolajax.callback(DoTPLAddSupplierBrandDetails(rec_id,1, thisform.BrandName.value, thisform.logo_listing.checked,instanceID));
                // parent.tabpanel.update("/dashboard/supplier-brands.php");
                $(this).dialog('close');
                
            }
        }
        else
        {
            alert("You must confirm your authorization to add this brand before you can do so.");
        }
    }
  
    
    
    $(document).ready(function() {    
        $("#add_new_brand").click(function() {          
            $("#dialog_brand" ).dialog({
                title:"Supplier Brand",
                autoOpen: true,
                visibility:true,
                width: 850,
                height: 475,
                modal: true,
                buttons: {
                    "Save Changes": function() {
                        DoSaveSupplierBrandDetails(document.forms["supplier_brand_detail"],this);
                        $(this).dialog('close');
                    },
                    "Cancel": function() {
                        $(this).dialog('close');
                        // $(this).empty().remove();
                    }
                }
            });
           

        });        
        
    });
    
    

</script>
<div id="dialogwrap" style="background-color: #EEEEEE;visibility: hidden"> 
    <div id="dialog_brand" style="background-color: #EEEEEE;"> 

        <table width="100%" border="0" cellpadding="24" cellspacing="0">
            <tr>
                <td valign="top" width="100%" class="BodyText">
                    <form id="supplier_brand_detail" onsubmit="DoSaveSupplierBrandDetails(this); return false;">
                        <table width="100%" border="0" cellpadding="0" cellspacing="0">
                            <tr>
                                <td><img src="/images/spacer.gif" border="0" width="120" height="8" /></td>
                                <td><img src="/images/spacer.gif" border="0" width="485" height="8" /></td>
                            </tr>
                            <tr>
                                <td><img src="/images/spacer.gif" border="0" width="120" height="8" /></td>
                                <td class="BodyText">Please enter your brand name in the field below.  Please type a few characters that exist in the brand name and use the drop down list to select the brand from the list.  If you are adding a new brand, that is not in the list, then please type the brand in the field below and click save.</td>
                            </tr>
                            <tr>
                                <td><img src="/images/spacer.gif" border="0" width="120" height="8" /></td>
                                <td><img src="/images/spacer.gif" border="0" width="485" height="8" /></td>
                            </tr>
                            <tr>
                                <td valign="top" class="BodyText tableLabel"><br/>Brand Name</td>
                                <td valign="top" class="BodyText">eg: <i>Toyota</i><br/>
                                    <?php
                                    if (isset($supplierbrand)) {
                                        ?>
                                        <input class="ui_input" type="text" id="BrandName" autocomplete="off" value="" size="64" maxlength="255" />
                                    <?php } else { ?>
                                        <input class="ui_input" type="text" id="BrandName" autocomplete="off" size="64" maxlength="255" />
                                    <?php } ?>
                                    <!-- Initiate autocomplete attaching to txtText and use the server-side service() function -->

                                    <?php echo KoolScripting::Start(); ?>
                            <koolautocomplete id="kac" attachTo="BrandName" serviceFunction="DoTPLLookupBrandList" styleFolder="KoolPHPSuite/KoolAutoComplete/styles/default" >
                                <templates>
                                    <itemtemplate>
                                        <table style='text-align:left'><tr><td class='bodytext'>{text}</td></tr></table>
                                    </itemtemplate>
                                </templates>
                            </koolautocomplete>
                            <?php echo KoolScripting::End(); ?>

                            </td>
                            </tr>
                            <tr>
                                <td><img src="/images/spacer.gif" border="0" width="120" height="8" /></td>
                                <td><img src="/images/spacer.gif" border="0" width="485" height="8" /></td>
                            </tr>
                            <tr>
                                <td></td>
                                <?php
                                $checked = '';

                                if (isset($supplierbrand)) {
                                    if ($supplierbrand['IS_LOGO_LISTING'])
                                        $checked = 'checked';
                                }
                                ?>

                                <td valign="middle" class="BodyText"><input type="checkbox" name="logo_listing" id="logo_listing" <?php $checked ?> />Logo Listing</td>
                            </tr>
                            <tr>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            </tr>

                            <tr>
                                <td></td>
                                <td valign="top" class="BodyText"><input type="checkbox" name="auth" />I hereby confirm that I am authorized to sell or represent this brand.</td>
                            </tr>

                            <tr>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="24" /></td>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="24" /></td>
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
        <?php
        include $path_doc_root . "/administrator/frontgrid.php";
        ?>      
    </div>
</div>

