<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . "/common/sessionhandler.php");
include_once("../config.php");
//include_once($path_doc_root . "/include/db_class.php");
//include_once($path_doc_root . "/include/tpldb_class.php");
include_once "../common/util/DBTransaction.php";
include_once "../common/dao/TplShadowSupplierDAO.php";
//include_once "../common/dao/TplSupplierTypeDAO.php";
include_once("../common/sessionhandler.php");
$dbtrans = new DBTransaction();
$dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
$tplshadowsupplierdao = new TplShadowSupplierDAO();
//$tplsuppliertypedao = new TplSupplierTypeDAO();
?>
    <table width="100%" border="0" cellpadding="0" cellspacing="0">
        <tr>
            <td valign="top" width="100%" class="BodyText">
                <?php
                //$tpl_db = new tpldb;
                //$supplier = $tpl_db->getShadowRecord("tpl_shadow_supplier", $shadow_supplier_rec_id);
                $array = array($GLOBALS["client_id"]);
                $shadow_suppliers = $tplshadowsupplierdao->selectSupplierList($dbconn, $array);
                $supplier=$shadow_suppliers[0];
                if ($shadow_root["STATE"] == 'OPEN') {
                    $readonly = "";
                } else {
                    $readonly = "readonly='1' disabled='true'";
                }
                ?>
                <form id="supplier_profile">
                    <table width="100%" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                            <td><img src="/images/spacer.gif" border="0" width="120" height="8" /></td>
                            <td><img src="/images/spacer.gif" border="0" width="685" height="8" /></td>
                        </tr>
                         <tr>
                            <td valign="top" class="BodyText" align="right">
                                <label class="fieldLabel"><font color="#FF0000"><b>*&nbsp;</b></font>Business Strap line:</label> 
                            </td>
                            <td valign="top" class="BodyText">
                                <i>Please enter the strap line for your business below. (up to 100 characters)</i><br/>
                                <input type="text" id="company_strapline_text" name="company_strapline_text" <?php echo $readonly ?> cols="80" size="70" rows="1" value="<?php echo htmlspecialchars($supplier["COMPANY_STRAPLINE_TEXT"])?>" tabindex="1"/>
                            </td>
                        </tr>
                        <tr>
                            <td valign="top"  class="BodyText">
                                <label class="fieldLabel"><font color="#FF0000"><b>*&nbsp;</b></font>Business Profile:</label>  
                            </td>
                            <td valign="top" class="BodyText">
                                <i>Please enter a business profile promoting your businesses products &amp; services. Ensure to include a "Call To Action"...</i><br/>
                                <textarea type="text" name="company_profile_text" <?php echo $readonly ?> cols="80" rows="8" id="company_profile_text" tabindex="2"><?php echo htmlspecialchars($supplier["COMPANY_PROFILE_TEXT"])?></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td valign="top" class="BodyText">
                                <label class="fieldLabel"><font color="#FF0000"><b>*&nbsp;</b></font>About Us:</label>  
                            </td>
                            <td valign="top" class="BodyText">
                                <i>Enter the About Us information for your business below.</i><br/>
                                <textarea name="company_aboutus_text" <?php echo $readonly ?> cols="80" rows="8" id="company_aboutus_text" tabindex="3"/><?php echo htmlspecialchars($supplier["COMPANY_ABOUTUS_TEXT"])?></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="16" /></td>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="16" /></td>
                        </tr>
                        <tr>
                            <td>
                                <input type="hidden" name="tabsel" value="supplier-company-profile.php" />
                            </td>
                            <td align="left">
                                <input class="btnSave" type="button" value="Save Changes" onclick="DoSaveSupplierCompanyProfile(this.form); return false;"/>
                            </td>
                        </tr>
                    </table>
                </form>
            </td>
        </tr>
    </table>


