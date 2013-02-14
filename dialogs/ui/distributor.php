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
    if ($active_distributor_rec_id != 0) {
        $supplierdistributor = $tpl_db->getShadowRecord("tpl_shadow_supplier_distributor", $active_distributor_rec_id);
    }
    ?>

    <script language="javascript">
      	var instanceID='<?php echo $instanceID; ?>';  
        function DoSaveSupplierDistributorDetails(thisform)
        {
            if (thisform.name.value != "" )
            {
                koolajax.callback(DoTPLUpdateSupplierDistributorDetails(<?php echo $active_distributor_rec_id; ?>, thisform.name.value, thisform.telephone_no.value));
                parent.tabpanel.update("/dashboard/supplier-distributors.php");
                parent.adpHide('adpModal');
                parent.adpHideMask('adpMask');
            }
            else
            {
                alert("Please complete all of the manditory fields before clicking the save changes button.");
            }
        }
    </script>

    <?php
    if ($shadow_root["STATE"] == 'OPEN') {
        $readonly = "";
    } else {
        $readonly = "readonly='1'";
    }
    $name = "";
    $tel = "";
    if (isset($supplierdistributor)) {
        $name = $supplierdistributor['NAME'];
        $tel = $supplierdistributor['TELEPHONE_NO'];
    }?>
    <table width='100%' border='0' cellpadding='8' cellspacing='0'>
      <tr>
        <td valign="top" width="100%" class="BodyText">
          <form id="supplier_distributor_detail" onsubmit="DoSaveSupplierDistributorDetails(this); return false;">
            <table width="100%" border="0" cellpadding="0" cellspacing="0">
              <tr>
                <td><img src="/images/spacer.gif" border="0" width="100" height="8" /></td>
                <td><img src="/images/spacer.gif" border="0" width="485" height="8" /></td>
              </tr>
          	<tr>
              <td valign="top" class="BodyText tableLabel"><br/>Distributor Name <font color="#FF0000"><b>*</b></font></td>
              <td valign="top" class="BodyText">eg <i>Mainline Distributors</i><br/><input class="ui_input" type="text" name="name" <?php echo $readonly ?> value="<?php echo $name ?>" size="50" maxlength="255" /></td>
      	    </tr>
              <tr>
                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
              </tr>
              <tr>
                <td valign="top" class="BodyText tableLabel"><br/>Telephone Number</td>
                <td valign="top" class="BodyText">eg <i>09 222 2222</i> or <i>+64 9 222 2222</i><br/><input class="ui_input" type="text" name="telephone_no" <?php echo $readonly ?> value="<?php echo $tel ?>" size="24" maxlength="48" /></td>
              </tr>
              <tr>
                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
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
<?php }?>