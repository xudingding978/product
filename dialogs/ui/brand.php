<?php
if (!isset($_SESSION))
    session_start();

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once ($path_doc_root . "/config.php");
include_once ($path_doc_root . "/include/db_class.php");
include_once ($path_doc_root . "/include/tpldb_class.php");
include_once ($path_doc_root . "/include/KoolPHPSuite/KoolAjax/koolajax.php");
include_once ($path_doc_root . "/include/KoolPHPSuite/KoolTabs/kooltabs.php");
include_once ($path_doc_root . "/include/KoolPHPSuite/KoolAutoComplete/koolautocomplete.php");
include_once($path_doc_root . "/common/sessionhandler.php");
$tpl_db = new tpldb;

if ($active_brand_rec_id != 0) {
    $supplierbrand = $tpl_db->getShadowRecord("tpl_shadow_supplier_brand", $active_brand_rec_id);
}
?>

<script language="javascript">
    var instanceID='<?php echo $instanceID; ?>';  	  
    function DoSaveSupplierBrandDetails(thisform)
    {
        if(thisform.BrandName.value==""){
            alert("Brand name should be mandatory.");  
            return false;  
        }      
        
        if (thisform.auth.checked)
        {
            var oldvalue;
            oldvalue=<?php echo $active_brand_rec_id; ?>;
            
            if (oldvalue != 0)
            {
                koolajax.callback(DoTPLDeleteSupplierBrandDetails(oldvalue,instanceID));  
            }        

            var brandexists;
            brandexists=koolajax.callback(DoTPLConfirmBrandExists(<?php echo $shadow_directory_id; ?>, thisform.BrandName.value,instanceID));

            if (brandexists == false)
            {
                var createbrand;
                createbrand=confirm('The brand that you have entered does not exist on the database.  Please check that it is correctly spelt, and if so, click OK, else click Cancel');
              
                if (createbrand)
                {
                    koolajax.callback(DoTPLAddSupplierBrandDetails(<?php echo $shadow_directory_id; ?>, thisform.BrandName.value, thisform.logo_listing.checked,instanceID));
                    parent.tabpanel.update("/dashboard/supplier-brands.php");
                    parent.adpHide('adpModal');
                    parent.adpHideMask('adpMask');
                }            
            }
            else
            {
                alert("2");
                koolajax.callback(DoTPLAddSupplierBrandDetails(<?php echo $shadow_directory_id; ?>, thisform.BrandName.value, thisform.logo_listing.checked,instanceID));
                parent.tabpanel.update("/dashboard/supplier-brands.php");
                parent.adpHide('adpModal');
                parent.adpHideMask('adpMask');
            }
        }
        else
        {
            alert("You must confirm your authorization to add this brand before you can do so.");
        }
    }
</script>

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
                                $brand = $tpl_db->getRecord('tpl_brand', $supplierbrand['BRAND_REC_ID']);
                                ?>
                                <input class="ui_input" type="text" id="BrandName" autocomplete="off" value="<?php htmlspecialchars($brand['NAME']) ?>" size="64" maxlength="255" />
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

                        <td valign="middle" class="BodyText"><input type="checkbox" name="logo_listing" <?php $checked ?> />Logo Listing</td>
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
                        <td align="left"><input class="btnSave" type="submit" value="Save Changes" /></td>
                    </tr>
                </table>
            </form>

        </td>
    </tr>
</table>
