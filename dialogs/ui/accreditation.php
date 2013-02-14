<?php
if (!isset($_SESSION))
    session_start();

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . "/config.php");
include_once($path_doc_root . "/include/db_class.php");
include_once($path_doc_root . "/include/tpldb_class.php");
include_once($path_doc_root . "/include/KoolPHPSuite/KoolAjax/koolajax.php");
include_once($path_doc_root . "/include/KoolPHPSuite/KoolCalendar/koolcalendar.php");
$datepicker = new KoolDatePicker("datepicker"); //Create calendar object
$datepicker->scriptFolder = "../include/KoolPHPSuite/KoolCalendar"; //Set scriptFolder
$datepicker->styleFolder = "default";
$datepicker->Init();
include_once($path_doc_root . "/common/sessionhandler.php");
global $client_user;
$supplieraccredition = Array();
$field = false;
$tpl_db = new tpldb;
if ($client_user) {
    if ($active_accreditation_rec_id != 0) {
        $field = true;
        $supplieraccreditation = $tpl_db->getLiveRecord("tpl_supplier_accreditations", $active_accreditation_rec_id);
    }
    ?>

    <script language="javascript"> 
        var instanceID='<?php echo $instanceID; ?>';
        function DoSaveSupplierAccredDetails(thisform)
        {
            if (thisform.name.value != "" && thisform.accredtype.value != "" && thisform.year_won.value != "")
            {                    
                koolajax.callback(DoTPLUpdateSupplierAccredDetails(<?php echo $active_accreditation_rec_id; ?>, thisform.name.value, thisform.accredtype.value, thisform.datepicker.value, thisform.issued_by.value, thisform.certificate_number.value, thisform.accred_logo_url.value, thisform.accred_logo_link.value, thisform.year_won.value,instanceID));
                parent.tabpanel.update("/dashboard/supplier-accreditations.php");
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
    $accredtype = "";
    $date_achieved = "";
    $issued_by = "";
    $certificate_number = "";
    $accred_logo_url = "";
    $accred_logo_link = "";
    $year_won = "";


    $readonly = "";
    if ($field == true) {
        if ($shadow_root["state"] == 'OPEN') {
            $readonly = "";
        } else {
            $readonly = "readonly='1'";
        }

        $name = $supplieraccreditation["NAME"];
        $accredtype = $supplieraccreditation["TYPE"];
        $date_achieved = $supplieraccreditation["DATE_ACHIEVED"];
        $issued_by = $supplieraccreditation["ISSUED_BY"];
        $certificate_number = $supplieraccreditation["CERTIFICATE_NUMBER"];
        $accred_logo_url = $supplieraccreditation["ACCRED_LOGO_URL"];
        $accred_logo_link = $supplieraccreditation["ACCRED_LOGO_LINK"];
        $year_won = $supplieraccreditation["YEAR_WON"];
    }
    ?>
    <table width="100%" border="0" cellpadding="8" cellspacing="0">
        <tr>
            <td valign="top" width="100%" class="BodyText">
                <form id="supplier_accreditation_detail" onsubmit="DoSaveSupplierAccredDetails(this); return false;">
                    <table width="100%" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                            <td><img src="/images/spacer.gif" border="0" width="120" height="8" /></td>
                            <td><img src="/images/spacer.gif" border="0" width="485" height="8" /></td>
                        </tr>
                        <tr>
                            <td valign="top" class="BodyText" tableLabel><br/>Accreditation Name <font color="#FF0000"><b>*</b></font></td>
                            <td valign="top" class="BodyText">eg: <i>Name of the Accreditation issued</i><br/><input class="ui_input" type="text" name="name" <?php echo $readonly ?> value="<?php echo $name ?>" size="32" maxlength="1000" /></td>
                        </tr>
                        <tr>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                        </tr>

                        <tr>
                            <td valign="top" class="BodyText tableLabel"><br/>Type <font color="#FF0000"><b>*</b></font></td>
                            <td valign="top" class="BodyText">eg: <i>Certificate, Degree, Post Grad, Diploma etc</i><br/><input class="ui_input" type="text" name="accredtype" <?php echo $readonly ?> value="<?php echo $accredtype ?>" size="32" maxlength="1000" /></td>
                        </tr>
                        <tr>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                        </tr>
                        <tr>
                            <td valign="top" class="BodyText tableLabel"><br/>Date Achieved</td>
                            <td valign="top" class="BodyText">eg: <i>Date achieved'</i><br/>
                                <?php echo $datepicker->Render(); ?>
                            </td>
                        </tr>
                        <tr>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                        </tr>
                        <tr>
                            <td valign="top" class="BodyText tableLabel"><br/>Issued By</td>
                            <td valign="top" class="BodyText">eg: <i>Governing body that issued the Accreditation</i><br/><input class="ui_input" type="text" name="issued_by"  <?php echo $readonly ?> value=" <?php echo $issued_by ?>" size="32" maxlength="255" /></td>
                        </tr>
                        <tr>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                        </tr>
                        <tr>
                            <td valign="top" class="BodyText tableLabel"><br/>Certificate Number</td>
                            <td valign="top" class="BodyText">eg: <i>Code or number of the Certificate</i><br/><input class="ui_input" type="text" name="certificate_number"  <?php echo $readonly ?> value=" <?php echo $certificate_number ?>" size="32" maxlength="255" /></td>
                        </tr>
                        <tr>
                        <tr>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                        </tr>
                        <tr>
                            <td valign="top" class="BodyText tableLabel"><br/>Accred. Logo URL</td>
                            <td valign="top" class="BodyText">eg: <i>Accreditation Logo URL'</i><br/><input class="ui_input" type="text" name="accred_logo_url"  <?php echo $readonly ?> value=" <?php echo $accred_logo_url ?>" size="60" maxlength="2560" /></td>
                        </tr>
                        <tr>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                        </tr>
                        <tr>
                            <td valign="top" class="BodyText tableLabel"><br/>Accred. Logo Link</td>
                            <td valign="top" class="BodyText">eg: <i>Link to the Accreditors website</i><br/><input class="ui_input" type="text" name="accred_logo_link"  <?php echo $readonly ?> value="<?php echo $accred_logo_link ?>" size="60" maxlength="2560" /></td>
                        </tr>
                        <tr>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                        </tr>
                        <tr>
                            <td valign="top" class="BodyText tableLabel"><br/>Year Won <font color="#FF0000"><b>*</b></font></td>
                            <td valign="top" class="BodyText">eg: <i>Year achieved</i><br/><input class="ui_input" type="text" name="year_won"  <?php echo $readonly ?> value="<?php echo $year_won ?>" size="4" maxlength="6" /></td>
                        </tr>
                        <tr>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="15" /></td>
                            <td><img src="/images/spacer.gif" border="0" width="100%" height="15" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td align="left"><input class="btnSave ui-icon ui-icon-circle-check" type="submit" value="Save Changes" /></td>
                        </tr>
                    </table>
                </form>
            </td>
        </tr>
    </table>

    <script language="javascript">
//        if($date_achieved != ""){
//            document.getElementById("datepicker").value='".date('m/d/Y',strtotime($date_achieved))."'"
//        }else{
//            document.getElementById("datepicker").value='".date('m/d/Y')."'"
//        }
    </script>
<?php } ?>