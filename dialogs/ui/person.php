<?php
if (!isset($_SESSION))
    session_start();

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once ($path_doc_root . "/config.php");
include_once ($path_doc_root . "/include/db_class.php");
include_once ($path_doc_root . "/include/tpldb_class.php");
include_once ($path_doc_root . "/include/KoolPHPSuite/KoolAjax/koolajax.php");
include_once ($path_doc_root . "/include/KoolPHPSuite/KoolTabs/kooltabs.php");
include_once ($path_doc_root . "/include/KoolPHPSuite/KoolTreeView/kooltreeview.php");
include_once($path_doc_root . "/common/sessionhandler.php");
$tpl_db = new tpldb;
if ($client_user) {
    if ($active_person_rec_id != 0) {
        $supplierperson = $tpl_db->getShadowRecord("tpl_shadow_supplier_key_personnel", $active_person_rec_id);
    }
    ?>

    <script language="javascript">
      	  
        function DoSaveSupplierPersonDetails(thisform)
        {
            koolajax.callback(DoTPLUpdateSupplierPersonDetails(<?php echo $active_person_rec_id; ?>, thisform.name.value, thisform.position.value, thisform.postal_address_building_address.value, thisform.postal_address_street_address.value, thisform.postal_address_suburb.value, thisform.postal_address_city.value, thisform.postal_address_post_code.value, thisform.postal_address_country.value, thisform.telephone_no.value, thisform.fax_no.value, thisform.email_address.value));
            parent.tabpanel.update('/dashboard/supplier-personnel.php');
            parent.adpHide('adpModal');
            parent.adpHideMask('adpMask');
        }
    </script>

    <?php
    if ($shadow_root["STATE"] == 'OPEN') {
        $readonly = "";
    } else {
        $readonly = "readonly='1'";
    }
    $name = "";
    $postal_address_sub = "";
    $position = "";
    $postal_address_city = "";
    $postal_address_bldg = "";
    $postal_address_code = "";
    $postal_address_street = "";
    $postal_address_country = "";
    $tel = "";
    $fax = "";
    $email = "";
    if (isset($supplierperson)) {
        $name = $supplierperson['NAME'];
        $position = $supplierperson['POSITION'];
        $postal_address_bldg = $supplierperson['POSTAL_ADDRESS_BUILDING_ADDRESS'];
        $postal_address_street = $supplierperson['POSTAL_ADDRESS_STREET_ADDRESS'];
        $postal_address_sub = $supplierperson['POSTAL_ADDRESS_SUBURB'];
        $postal_address_city = $supplierperson['POSTAL_ADDRESS_CITY'];
        $postal_address_code = $supplierperson['POSTAL_ADDRESS_POST_CODE'];
        $postal_address_country = $supplierperson['POSTAL_ADDRESS_COUNTRY'];
        $tel = $supplierperson['TELEPHONE_NO'];
        $fax = $supplierperson['FAX_NO'];
        $email = $supplierperson['EMAIL_ADDRESS'];
    } ?>
    <table width="100%" border="0" cellpadding="8" cellspacing="0">
      <tr>
        <td valign="top" width="100%" class="BodyText">
          <form id="supplier_branch_detail" onsubmit="DoSaveSupplierPersonDetails(this); return false;">
            <table width="100%" border="0" cellpadding="0" cellspacing="0">
              <tr>
                <td><img src="/images/spacer.gif" border="0" width="120" height="8" /></td>
                <td><img src="/images/spacer.gif" border="0" width="485" height="8" /></td>
              </tr>
          	<tr>
              <td valign="top" class="BodyText tableLabel"><br/>Person Name</td>
              <td valign="top" class="BodyText">eg <i>Bob Smith</i><br/><input class="ui_input"  type="text" name="name" <?php echo $readonly ?> value="<?php echo $name  ?>" size="64" maxlength="255" /></td>
      	    </tr>
              <tr>
                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
              </tr>
          	<tr>
              <td valign="top" class="BodyText tableLabel"><br/>Position</td>
              <td valign="top" class="BodyText">eg <i>Brand Manager</i><br/><input class="ui_input" type="text" name="position" <?php echo $readonly ?> value="<?php echo $position ?>" size="64" maxlength="255" /></td>
      	    </tr>
              <tr>
                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
              </tr>
              <tr>
                <td valign="top" class="BodyText tableLabel"><br/>Postal Building Address</td>
                <td valign="top" class="BodyText">eg <i>Level 12</i><br/><input class="ui_input" type="text" name="postal_address_building_address" <?php echo $readonly ?> value="<?php echo $postal_address_bldg ?>" size="32" maxlength="255" /></td>
              </tr>
              <tr>
                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
              </tr>
              <tr>
                <td valign="top" class="BodyText tableLabel"><br/>Postal Street/Box Address</td>
                <td valign="top" class="BodyText">eg <i>123 Some Street</i> or <i>PO Box 12345</i><br/><input class="ui_input" type="text" name="postal_address_street_address" <?php echo $readonly ?> value="<?php echo $postal_address_street ?>" size="64" maxlength="255" /></td>
              </tr>
              <tr>
                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
              </tr>
              <tr>
                <td valign="top" class="BodyText tableLabel"><br/>Postal Suburb</td>
                <td valign="top" class="BodyText">eg <i>Greenlane</i><br/><input class="ui_input" type="text" name="postal_address_suburb" <?php echo $readonly ?> value="<?php echo $postal_address_sub ?>" size="32" maxlength="255" /></td>
              </tr>
              <tr>
                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
              </tr>
              <tr>
                <td valign="top" class="BodyText tableLabel"><br/>Postal City/Town</td>
                <td valign="top" class="BodyText">eg <i>Auckland</i><br/><input class="ui_input" type="text" name="postal_address_city" <?php echo $readonly ?> value="<?php echo $postal_address_city ?>" size="32" maxlength="255" /></td>
              </tr>
              <tr>
                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
              </tr>
              <tr>
                <td valign="top" class="BodyText tableLabel"><br/>Postal Post Code</td>
                <td valign="top" class="BodyText">eg <i>1182</i><br/><input class="ui_input" type="text" name="postal_address_post_code" <?php echo $readonly ?> value="<?php echo $postal_address_code ?>" size="12" maxlength="12" /></td>
              </tr>
              <tr>
                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
              </tr>
              <tr>
                <td valign="top" class="BodyText tableLabel"><br/>Postal Country</td>
                <td valign="top" class="BodyText">eg <i>New Zealand</i><br/><input class="ui_input" type="text" name="postal_address_country" <?php echo $readonly ?> value="<?php echo $postal_address_country ?>" size="32" maxlength="255" /></td>
              </tr>
              <tr>
                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
              </tr>
              <tr>
                <td valign="top" class="BodyText tableLabel"><br/>Telephone Number</td>
                <td valign="top" class="BodyText">eg <i>09 222 2222</i> or <i>+64 9 222 2222</i><br/><input class="ui_input" type="text" name="telephone_no" <?php echo $readonly ?> value="<?php echo $tel ?>" size="24" maxlength="24" /></td>
              </tr>
              <tr>
                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
              </tr>
              <tr>
                <td valign="top" class="BodyText tableLabel"><br/>Fax Number</td>
                <td valign="top" class="BodyText">eg <i>09 222 2222</i> or <i>+64 9 222 2222</i><br/><input class="ui_input" type="text" name="fax_no" <?php echo $readonly ?> value="<?php echo $fax ?>" size="24" maxlength="24" /></td>
              </tr>
              <tr>
                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
              </tr>
          	<tr>
              <td valign="top" class="BodyText tableLabel"><br/>Email Address</td>
              <td valign="top" class="BodyText">eg <i>bob@abc.co.nz</i><br/><input class="ui_input" type="text" name="email_address" <?php echo $readonly ?> value="<?php echo $email ?>" size="64" maxlength="255" /></td>
      	    </tr>
              <tr>
                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
              </tr>
              <tr>
                <td></td>
                <td align="right"><input type="submit" value="Save Changes" /></td>
              </tr>
            </table>
          </form>
        </td>
      </tr>
    </table>
<?php }?>