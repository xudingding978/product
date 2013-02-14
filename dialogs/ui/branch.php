<?php
if (!isset($_SESSION))
    session_start();

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . "/config.php");
include_once($path_doc_root . "/include/db_class.php");
include_once($path_doc_root . "/include/tpldb_class.php");
include_once($path_doc_root . "/include/KoolPHPSuite/KoolAjax/koolajax.php");
include_once($path_doc_root . "/include/KoolPHPSuite/KoolTabs/kooltabs.php");
include_once($path_doc_root . "/include/KoolPHPSuite/KoolTreeView/kooltreeview.php");
include_once($path_doc_root . "/common/sessionhandler.php");

$supplierbranch = Array();
$field = false;
$tpl_db = new tpldb;
if ($client_user) {
    if ($active_branch_rec_id != 0) {
        $field = true;
        $supplierbranch = $tpl_db->getShadowRecord("tpl_shadow_supplier_branch", $active_branch_rec_id);
    }
    ?>

    <script language="javascript">
        var instanceID='<?php echo $instanceID; ?>';	  
        function DoSaveSupplierBranchDetails(thisform)
        {
                      
            if (thisform.name.value != "" && thisform.postal_address_post_code.value != "")
            {               
                koolajax.callback(DoTPLUpdateSupplierBranchDetails(<?php echo $active_branch_rec_id ?>, thisform.name.value, thisform.postal_address_building_address.value, thisform.postal_address_street_address.value, thisform.postal_address_suburb.value, thisform.postal_address_city.value, thisform.postal_address_state.value, thisform.postal_address_post_code.value, thisform.postal_address_country.value, thisform.telephone_no.value, thisform.fax_no.value,instanceID));
                parent.tabpanel.update("/dashboard/supplier-branches.php");
                parent.adpHide('adpModal');               
                parent.adpHideMask('adpMask');
            }
            else
            {
                alert("11Please complete all of the mandatory fields before clicking the save changes button.");
            }
        }
    </script>

    <?php
    $name = "";
    $post_building_add = "";
    $post_sreet_add = "";
    $post_sub_add = "";
    $post_city_add = "";
    $post_state_add = "";
    $post_code_add = "";
    $post_country_add = "";
    $telephone = "";
    $fax = "";
    $readonly = "";
    if ($field == true) {
//        if ($_SESSION["shadow_state"] == 'OPEN') {
//            $readonly = "readonly='0'";
//        } else {
//            $readonly = "readonly='1'";
//        }

        if ($shadow_root["STATE"] == 'OPEN') {
            $readonly = "";
        } else {
            $readonly = "readonly='1'";
        }
        $name = $supplierbranch["NAME"];
        $post_building_add = $supplierbranch["POSTAL_ADDRESS_BUILDING_ADDRESS"];
        $post_sreet_add = $supplierbranch["POSTAL_ADDRESS_STREET_ADDRESS"];
        $post_sub_add = $supplierbranch["POSTAL_ADDRESS_SUBURB"];
        $post_city_add = $supplierbranch["POSTAL_ADDRESS_CITY"];
        $post_state_add = $supplierbranch["POSTAL_ADDRESS_STATE"];
        $post_code_add = $supplierbranch["POSTAL_ADDRESS_POST_CODE"];
        $post_country_add = $supplierbranch["POSTAL_ADDRESS_COUNTRY"];
        $telephone = $supplierbranch["TELEPHONE_NO"];
        $fax = $supplierbranch["FAX_NO"];
    }
    ?>
    <table width="100%" border="0" cellpadding="8" cellspacing="0">
        <tr>
            <td valign="top" width="100%" class="BodyText">
                <form id="supplier_branch_detail" onsubmit="DoSaveSupplierBranchDetails(this); return false;">
                    <table width="100%" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                            <td><img src="/images/spacer.gif" border="0" width="120" height="8" /></td>
                            <td><img src="/images/spacer.gif" border="0" width="485" height="8" /></td>
                        </tr>
                        <tr>
                            <td valign="top" class="BodyText tableLabel"><br/>Branch Name <font color="#FF0000"><b>*</b></font></td>
                            <td valign="top" class="BodyText">eg <i>Hamilton</i><br/><input class="ui_input" type="text" name="name" <?php echo $readonly ?> value="<?php echo $name ?>" size="64" maxlength="255" /></td>
                        </tr>
                        <tr>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                        </tr>
                        <tr>
                            <td valign="top" class="BodyText tableLabel"><br/>Postal Building Address</td>
                            <td valign="top" class="BodyText">eg <i>Level 12</i><br/><input class="ui_input" type="text" name="postal_address_building_address" <?php echo $readonly ?> value="<?php echo $post_building_add ?>" size="32" maxlength="255" /></td>
                        </tr>
                        <tr>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                        </tr>
                        <tr>
                            <td valign="top" class="BodyText tableLabel"><br/>Postal Street/Box Address</td>
                            <td valign="top" class="BodyText">eg <i>123 Some Street</i> or <i>PO Box 12345</i><br/><input class="ui_input" type="text" name="postal_address_street_address" <?php echo $readonly ?> value="<?php echo $post_sreet_add ?>" size="64" maxlength="255" /></td>
                        </tr>
                        <tr>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                        </tr>
                        <tr>
                            <td valign="top" class="BodyText tableLabel"><br/>Postal Suburb</td>
                            <td valign="top" class="BodyText">eg <i>Greenlane</i><br/><input class="ui_input" type="text" name="postal_address_suburb" <?php echo $readonly ?> value="<?php echo $post_sub_add ?>" size="32" maxlength="255" /></td>
                        </tr>
                        <tr>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                        </tr>
                        <tr>
                            <td valign="top" class="BodyText  tableLabel"><br/>Postal City/Town</td>
                            <td valign="top" class="BodyText">eg <i>Auckland</i><br/><input class="ui_input" type="text" name="postal_address_city" <?php echo $readonly ?> value="<?php echo $post_city_add ?>" size="32" maxlength="255" /></td>
                        </tr>
                        <tr>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                        </tr>
                        <tr>
                            <td valign="top" class="BodyText tableLabel"><br/>Postal State</td>
                            <td valign="top" class="BodyText">eg <i>NSW</i><br/><input class="ui_input" type="text" name="postal_address_state" <?php echo $readonly ?> value="<?php echo $post_state_add ?>" size="32" maxlength="255" /></td>
                        </tr>
                        <tr>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                        </tr>
                        <tr>
                            <td valign="top" class="BodyText tableLabel"><br/>Postal Post Code <font color="#FF0000"><b>*</b></font></td>
                            <td valign="top" class="BodyText">eg <i>1234</i><br/><input class="ui_input" type="text" name="postal_address_post_code" <?php echo $readonly ?> value="<?php echo $post_code_add ?>" size="12" maxlength="12" /></td>
                        </tr>
                        <tr>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                        </tr>
                        <tr>
                            <td valign="top" class="BodyText tableLabel"><br/>Postal Country</td>
                            <td valign="top" class="BodyText">eg <i>New Zealand</i><br/><input class="ui_input" type="text" name="postal_address_country" <?php echo $readonly ?> value="<?php echo $post_country_add ?>" size="32" maxlength="255" /></td>
                        </tr>
                        <tr>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                        </tr>
                        <tr>
                            <td valign="top" class="BodyText tableLabel"><br/>Telephone Number</td>
                            <td valign="top" class="BodyText">eg <i>+64 9 222 2222</i><br/><input class="ui_input" type="text" name="telephone_no" <?php echo $readonly ?> value="<?php echo $telephone ?>" size="24" maxlength="48" /></td>
                        </tr>
                        <tr>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                        </tr>
                        <tr>
                            <td valign="top" class="BodyText tableLabel"><br/>Fax Number</td>
                            <td valign="top" class="BodyText">eg <i>09 123 4567</i> or <i>+64 9 123 4567</i><br/><input class="ui_input" type="text" name="fax_no" <?php echo $readonly ?> value="<?php echo $fax ?>" size="24" maxlength="48" /></td>
                        </tr>
                        <tr>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td align="left"><input class="btnSave" type="submit" value="Save Changes"/></td>
                        </tr>
                    </table>
                </form>
            </td>
        </tr>
    </table>
<?php } ?>