<?php
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . "/common/sessionhandler.php");
include_once($path_doc_root . "/config.php");
include_once($path_doc_root . "/include/db_class.php");
include_once($path_doc_root . "/include/tpldb_class.php");
include_once($path_doc_root . "/include/KoolPHPSuite/KoolAjax/koolajax.php");
include_once "../common/util/DBTransaction.php";
include_once "../common/dao/TplShadowDirectoryPeriodOfferingDAO.php";
$dbtrans = new DBTransaction();
$dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
?>
<script type="text/javascript" src="../administrator/scripts/jquery-min.js"></script>
<script type="text/javascript" src="../administrator/scripts/jquery-ui.min.js"></script>
<div class="summary_dashboard">
    <div class="step three">
        <div class="step_number">3</div>
        <div class="step_text">Submit Your Listing for Approval</div>
        <div class="step_desc">With your listing now completed and confirmed, submit your listing through to be approved.</div>
    </div>
    <div class="step two">
        <div class="step_number">2</div>
        <div class="step_text">Confirm Your Listing Details</div>
        <div class="step_desc">Confirm all your details are correct and sign your listing as ready for publishing.</div>
    </div>
    <div class="step one">
        <div class="step_number">1</div>
        <div class="step_text">Complete Your Listing Details</div>
        <div class="step_desc">Complete all the details about your listing, upload photo's and embed your video.</div>
    </div>
</div>
<div id="listing_summary_wrapper">
    <table id="Directory_Offerings" width="100%" border="0" cellpadding="0" cellspacing="8">
        <tr valign="top">
            <td width="60%" valign="top" class="BodyText">
                <table border="0" cellpadding="0" cellspacing="4">
                    <tr valign="top">
                        <td valign="top" class="BodyText">
                            <h3>Welcome to your Profile Center.</h3>
                            <br/>
                            This portal interface allows you to update your directory listing details and submit your changes to our production team.
                            Currently, we offer three different listing levels. Premium, Advanced, and Standard. 
                        </td>
                    </tr>
                    <tr valign="top">
                        <td valign="top" class="BodyText"><br />
                            <table border="0" cellpadding="1" cellspacing="1">
                                <tr>
                                    <td></td>
                                    <td>
                                        <form id="Standard_Listing">
                                            <?php
                                            $tpldirectoryperiodofferdao = new TplShadowDirectoryPeriodOfferingDAO();
//                                        $tpl_db = new tpldb;
//                                        $directory_offerings = $tpl_db->getDirectoryOfferings($session_maintain->get_client_field("shadow_root_id", $instanceID, "client_data"));
                                            $array = array($shadow_root['REC_ID']);
                                            $directory_offerings = $tpldirectoryperiodofferdao->selectOffer($dbconn, $array);

                                            if ($directory_offerings) {
                                                foreach ($directory_offerings as $key => $directory_offering) {
                                                    if ($directory_offering["NAME"] == 'Standard Listing')
                                                        echo "<input NAME=\"Premium_Listing'\" TYPE=\"button\" VALUE=\"Premium\" onClick=\"DoChangeListingType('" . $directory_offering["REC_ID"] . "');return false\"/>";
                                                }
                                            }
                                            ?>
                                        </form>
                                    </td>
                                    <td>
                                        <form id="Advanced_Listing">
                                            <?php
                                            $tpldirectoryperiodofferdao = new TplShadowDirectoryPeriodOfferingDAO();
//                                        $tpl_db = new tpldb;
//                                        $directory_offerings = $tpl_db->getDirectoryOfferings($session_maintain->get_client_field("shadow_root_id", $instanceID, "client_data"));
                                            $array = array($shadow_root['REC_ID']);
                                            $directory_offerings = $tpldirectoryperiodofferdao->selectOffer($dbconn, $array);

                                            if ($directory_offerings) {
                                                foreach ($directory_offerings as $key => $directory_offering) {
                                                    if ($directory_offering["NAME"] == 'Premium Listing')
                                                        echo "<input NAME=\"Premium_Listing'\" TYPE=\"button\" VALUE=\"Premium\" onClick=\"DoChangeListingType('" . $directory_offering["REC_ID"] . "');return false\"/>";
                                                }
                                            }
                                            ?>
                                        </form>
                                    </td>
                                    <td><form id="Premium_Listing">
                                            <?php
                                            $tpldirectoryperiodofferdao = new TplShadowDirectoryPeriodOfferingDAO();
//                                        $tpl_db = new tpldb;
//                                        $directory_offerings = $tpl_db->getDirectoryOfferings($session_maintain->get_client_field("shadow_root_id", $instanceID, "client_data"));
                                            $array = array($shadow_root['REC_ID']);
                                            $directory_offerings = $tpldirectoryperiodofferdao->selectOffer($dbconn, $array);

                                            if ($directory_offerings) {
                                                foreach ($directory_offerings as $key => $directory_offering) {
                                                    if ($directory_offering["NAME"] == 'Premium Listing')
                                                        echo "<input NAME=\"Premium_Listing'\" TYPE=\"button\" VALUE=\"Premium\" onClick=\"DoChangeListingType('" . $directory_offering["REC_ID"] . "');return false\"/>";
                                                }
                                            }
                                            ?>
                                        </form>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="BodyText"> Company Logo</td>
                                    <td class="BodyText"><center> - </center></td>
                        <td class="BodyText"><center> - </center></td>
            <td class="BodyText"><center>
            <img src="/images/tick-black_30x23.png"/></center>
        </td>
        </tr>
        <tr>
            <td class="BodyText"> Company Profile</td>
            <td class="BodyText"><center>
            - 
        </center>
        </td>
        <td class="BodyText"><center>
            <img src="/images/tick-black_30x23.png"> </img>
        </center></td>
        <td class="BodyText"><center>
            <img src="/images/tick-black_30x23.png"> </img>
        </center></td>
        </tr>
        <tr>
            <td class="BodyText"> Contact Details</td>
            <td class="BodyText"><center>
            <img src="/images/tick-black_30x23.png"> </img>
        </center></td>
        <td class="BodyText"><center>
            <img src="/images/tick-black_30x23.png"> </img>
        </center></td>
        <td class="BodyText"><center>
            <img src="/images/tick-black_30x23.png"> </img>
        </center></td>
        </tr>
        <tr>
            <td class="BodyText"> Key Executives Contact</td>
            <td class="BodyText"><center>
            -
        </center></td>
        <td class="BodyText"><center>
            <img src="/images/tick-black_30x23.png"> </img>
        </center></td>
        <td class="BodyText"><center>
            <img src="/images/tick-black_30x23.png"> </img>
        </center></td>
        </tr>
        <tr>
            <td class="BodyText"> Branches/Agents</td>
            <td class="BodyText"><center>
            -
        </center></td>
        <td class="BodyText"><center>
            -
        </center></td>
        <td class="BodyText"><center>
            <img src="/images/tick-black_30x23.png"> </img>
        </center></td>
        </tr>
        <tr>
            <td class="BodyText"> Product and Service Listings</td>
            <td class="BodyText"><center>
            5
        </center></td>
        <td class="BodyText"><center>
            12
        </center></td>
        <td class="BodyText"><center>
            UNLIMITED!
        </center></td>
        </tr>
        <tr>
            <td class="BodyText">Brand Listings</td>
            <td class="BodyText"><center>
            -
        </center></td>
        <td class="BodyText"><center>
            5
        </center></td>
        <td class="BodyText"><center>
            UNLIMITED!
        </center></td>
        </tr>
    </table>
</td>
</tr>
</table>
</td>
<td abswidth="40%" valign="top" class="BodyText">
    <table id="Transaction Details" border="0" cellpadding="8" cellspacing="0">
        <tr>
            <td height="100%"><?php echo KoolScripting::Start(); ?>
        <updatepanel id="transactionpanel" class="cssframe">
            <content>
                <?php include $path_doc_root . "/dashboard/transaction-details.php"; ?>
            </content>
            <loading image=<?php $path_doc_root ?>"/include/KoolPHPSuite/KoolAjax/loading/5.gif"/>
        </updatepanel>
        
    <?php echo KoolScripting::End(); ?></td>
</tr>
</table><!--Transaction Details-->
</td>
</tr>
</table><!--Directory_Offerings-->
</div>

