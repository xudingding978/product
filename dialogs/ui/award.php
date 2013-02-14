<?php
if (!isset($_SESSION))
    session_start();

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . "/config.php");
include_once($path_doc_root . "/include/db_class.php");
include_once($path_doc_root . "/include/tpldb_class.php");
include_once($path_doc_root . "/include/KoolPHPSuite/KoolAjax/koolajax.php");
include_once($path_doc_root . "/common/sessionhandler.php");
global $client_user;
$supplieraward = Array();
$field = false;
$tpl_db = new tpldb;
if ($client_user) {
    if ($active_award_rec_id != 0) {
        $field = true;
        $supplieraward = $tpl_db->getLiveRecord("tpl_supplier_awards", $active_award_rec_id);
    }
    ?>

    <script language="javascript">
        var instanceID='<?php echo $instanceID; ?>';        
        function DoSaveSupplierAwardDetails(thisform)
        {
            if (thisform.name.value != "" && thisform.issued_by.value != ""&& thisform.year_won.value != "")
            {       
                koolajax.callback(DoTPLUpdateSupplierAwardDetails(<?php echo $active_award_rec_id; ?>, thisform.name.value, thisform.issued_by.value, thisform.year_won.value, thisform.award_logo_url.value, thisform.award_logo_link.value));
                parent.tabpanel.update("/dashboard/supplier-awards.php");
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
    $name = "";
    $issued_by = "";
    $award_logo_url = "";
    $award_logo_link = "";
    $year_won = "";


    $readonly = "";
    if ($field == true) {
        if ($shadow_root["STATE"] == 'OPEN') {
            $readonly = "";
        } else {
            $readonly = "readonly='1'";
        }

        $name = $supplieraward["NAME"];
        $issued_by = $supplieraward["ISSUED_BY"];
        $award_logo_url = $supplieraward["AWARD_LOGO_URL"];
        $award_logo_link = $supplieraward["AWARD_LOGO_LINK"];
        $year_won = $supplieraward["YEAR_WON"];
    }
    ?>

    <table width="100%" border="0" cellpadding="8" cellspacing="0">
        <tr>
            <td valign="top" width="100%" class="BodyText">
                <form id="supplier_branch_detail" onsubmit="DoSaveSupplierAwardDetails(this); return false;">
                    <table width="100%" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                            <td><img src="/images/spacer.gif" border="0" width="120" height="8" /></td>
                            <td><img src="/images/spacer.gif" border="0" width="485" height="8" /></td>
                        </tr>
                        <tr>
                            <td valign="top" class="BodyText tableLabel"><br/>Award Name <font color="#FF0000"><b>*</b></font></td>
                            <td valign="top" class="BodyText">eg: <i> The name of the award itself or the organisation</i><br/>
                                <input class="ui_input" type="text" name="name" <?php echo $readonly ?> value="<?php echo $name ?>" size="32" maxlength="255" />
                            </td>
                        </tr>
                        <tr>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                        </tr>

                        <tr>
                            <td valign="top" class="BodyText tableLabel"><br/>Issued By <font color="#FF0000"><b>*</b></font></td>
                            <td valign="top" class="BodyText">eg: <i>Governing body that issued the award</i><br/>
                                <input class="ui_input" type="text" name="issued_by" <?php echo $readonly ?> value="<?php echo $issued_by ?>" size="32" maxlength="255" />
                            </td>
                        </tr>
                        <tr>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                        </tr>
                        <tr>
                            <td valign="top" class="BodyText tableLabel"><br/>Award Logo URL</td>
                            <td valign="top" class="BodyText">eg: <i>Award Logo URL</i> <br/>
                                <input class="ui_input" type="text" name="award_logo_url" <?php echo $readonly ?> value="<?php echo $award_logo_url ?>" size="80" maxlength="2560" />
                            </td>
                        </tr>
                        <tr>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                        </tr>
                        <tr>
                            <td valign="top" class="BodyText tableLabel"><br/>Award Logo Link</td>
                            <td valign="top" class="BodyText">eg: <i>Link to the award website</i><br/>
                                <input class="ui_input" type="text" name="award_logo_link"  <?php echo $readonly ?> value="<?php echo $award_logo_link ?>" size="80" maxlength="2560" />
                            </td>
                        </tr>
                        <tr>
                        <tr>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                        </tr>
                        <tr>
                            <td valign="top" class="BodyText tableLabel"><br/>Year Won<font color="#FF0000"><b>*</b></font></td>
                            <td valign="top" class="BodyText">eg: <i>Year  the award was won</i><br/>
                                <input class="ui_input" type="text" name="year_won" <?php echo $readonly ?> value="" size="6" maxlength="6" />
                            </td>
                        </tr>
                        <tr>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="15" /></td>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="15" /></td>
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
<?php } ?>