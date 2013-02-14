<?php
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
//include_once($path_doc_root . "/common/sessionhandler.php");
include_once($path_doc_root . "/config.php");
//include_once($path_doc_root . "/include/tpldb_class.php");
include_once "../common/util/DBTransaction.php";
include_once "../common/dao/TplShadowSupplierDAO.php";
include_once "../common/dao/TplSupplierTypeDAO.php";
include_once("../common/sessionhandler.php");

$dbtrans = new DBTransaction();
$dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
$tplshadowsupplierdao = new TplShadowSupplierDAO();
$tplsuppliertypedao = new TplSupplierTypeDAO();

?>


<?php if ($GLOBALS["client_user"]) { ?>
    <table width="100%" border="0" cellpadding="0" cellspacing="0">
        <tr>
            <td valign="top" width="100%" class="BodyText">
                <?php
                //$tpl_db = new tpldb;
                //$supplier = $tpl_db->getShadowRecord("tpl_shadow_supplier",$session_maintain->get_client_field("shadow_supplier_rec_id", $_GET["instanceID"], "client_data"));
                $array = array($GLOBALS["client_id"]);
                $shadow_suppliers = $tplshadowsupplierdao->selectSupplierList($dbconn, $array);
                $supplier=$shadow_suppliers[0];               
                if ($GLOBALS["shadow_state"] == 'OPEN') {
                    $readonly = "";
                } else {
                    $readonly = "readonly='1' disabled='true'";
                }
                ?>
                <form id="supplier_detail">
                    <table width="100%" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                            <td><img src="/images/spacer.gif" border="0" width="120" height="8" /></td>
                            <td><img src="/images/spacer.gif" border="0" width="685" height="8" /></td>
                        </tr>
                        <tr>
                            <td valign="top" class="BodyText">
                                <br/>Company Name: <font color="#FF0000"><b>*</b></font>
                            </td>
                            <td valign="top" class="BodyText">
                                eg: <i>ABC Suppliers Limited</i><br/>
                                <input type="text" name="name" <?php echo $readonly ?> value="<?php echo htmlspecialchars($supplier['NAME']) ?>" size="64" maxlength="255" />
                            </td>
                        </tr>
                        <tr>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                        </tr>
                        <tr>
                            <td valign="top" class="BodyText">
                                <br/>Trading As: <font color="#FF0000"><b>*</b></font>
                            </td>
                            <td valign="top" class="BodyText">
                                eg: <i>ABC Suppliers</i><br/>
                                <input type="text" name="trading_as_name" <?php echo $readonly ?> value="<?php echo htmlspecialchars($supplier['TRADING_AS_NAME']) ?>" size="64" maxlength="255" />
                            </td>
                        </tr>
                        <tr>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                        </tr>
                        <tr>
                            <td valign="top" class="BodyText">
                                <br/>Contact Person:
                            </td>
                            <td valign="top" class="BodyText">
                                eg: <i>Bob Smith</i><br/>
                                <input type="text" name="contact_name" <?php echo $readonly ?> value="<?php echo htmlspecialchars($supplier['CONTACT_NAME']) ?>" size="64" maxlength="255" />
                            </td>
                        </tr>
                        <tr>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                        </tr>
                        <tr>
                            <td valign="top" class="BodyText">
                                <br/>Contact Job Title:
                            </td>
                            <td valign="top" class="BodyText">
                                eg: <i>Marketing and Brand Manager</i><br/>
                                <input type="text" name="contact_position" <?php echo $readonly ?> value="<?php echo htmlspecialchars($supplier['CONTACT_POSITION']) ?>" size="64" maxlength="255" />
                            </td>
                        </tr>
                        <tr>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                        </tr>
                        <?php
                        $param_arr=array();
                        $suppliertypes = $tplsuppliertypedao->selectSupplierList($dbconn, $param_arr);
                        //$suppliertypes = $tpl_db->getSupplierTypes($session_maintain->get_client_field("shadow_directory_id", $_GET["instanceID"], "client_data"));
                        if ($suppliertypes) {
                            ?>
                            <tr>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            </tr>      
                            <tr>
                                <td valign="top" class="BodyText">Supplier Type</td>
                                <td valign="top" class="BodyText">

                                    <?php if ($shadow_root["STATE"] == "OPEN") {
                                        ?>
                                        <select name="supplier_type">
                                            <option value="0" >NO SELECTION</option>

                                            <?php foreach ($suppliertypes as $key => $suppliertype) {
                                                if ($suppliertype["REC_ID"] == $supplier["SUPPLIER_TYPE_REC_ID"]) { ?>                                                       
                                                    <option value="<?php echo $suppliertype["REC_ID"] ?>" selected="yes"><?php echo $suppliertype["NAME"] ?></option>
                                                <?php } else { ?>
                                                    <option value="<?php echo $suppliertype["REC_ID"] ?>" ><?php echo $suppliertype["NAME"] ?></option>
                                                <?php }
                                            } ?>
                                        </select>
                                        <?php
                                    } else {
                                        $suppliertype = $suppliertypes[0];
                                        if ($suppliertype)
                                            echo $suppliertype["NAME"];
                                        else
                                            echo "NO SELECTION";
                                    }
                                    ?>
                                </td>
                            </tr>
                            <tr>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            </tr>      
    <?php } ?>
                        <tr>
                            <td><input type="hidden" name="tabsel" value="supplier-details.php" /></td>
                            <td align="left"><input class="btnSave" type="button" value="Save Changes" onclick="DoSaveSupplierDetails(this.form); return false;"/></td>
                        </tr>
                    </table>
                </form>
            </td>
        </tr>
    </table>
    <?php
}
else {
    ?>
    <table width="100%" border="0" cellpadding="0" cellspacing="0">
        <tr>
            <td valign="top" height="472" width="100%">
                <p class="ErrorText"><b>Session Expired</b></p>
            </td>
        </tr>
    </table>

    <script language="javascript">
        parent.location='/dashboard';
    </script> 
    <?php
}
?>
