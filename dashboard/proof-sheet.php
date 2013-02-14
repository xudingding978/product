<?php
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . "/common/sessionhandler.php");
include_once($path_doc_root . "/config.php");
include_once($path_doc_root . "/include/db_class.php");
include_once($path_doc_root . "/include/tpldb_class.php");
include_once($path_doc_root . "/include/KoolPHPSuite/KoolAjax/koolajax.php");
include_once($path_doc_root . "/include/KoolPHPSuite/KoolTabs/kooltabs.php");


$tpl_db = new tpldb;

$user = $client_user;

$shadow_root = $tpl_db->getShadowRootOfUser($user);

$session_maintain->add_client_field('shadow_root', $shadow_root, $GLOBALS["instanceID"], 'client_data');
$session_maintain->add_client_field('shadow_root_id', $shadow_root["REC_ID"], $GLOBALS["instanceID"], 'client_data');
$session_maintain->add_client_field('shadow_directory_id', $shadow_root["DIRECTORY_REC_ID"], $GLOBALS["instanceID"], 'client_data');
$session_maintain->add_client_field('shadow_state', $shadow_root["STATE"], $GLOBALS["instanceID"], 'client_data');

$tpl_db = new tpldb;
$directory = $tpl_db->getRecord('tpl_directory', $shadow_directory_id);
$shadow_offering = $tpl_db->getShadowRecord('tpl_shadow_directory_offering', $shadow_root['SHADOW_DIRECTORY_OFFERING_REC_ID']);
$directory_offering = $tpl_db->getShadowRecord("tpl_shadow_directory_offering", $shadow_root["SHADOW_DIRECTORY_OFFERING_REC_ID"]);
$supplier = $tpl_db->getShadowRecord("tpl_shadow_supplier", $shadow_supplier_rec_id);
$supplierbranches = $tpl_db->getShadowRecordsBySupplier("tpl_shadow_supplier_branch", $shadow_root_id, $shadow_supplier_id, "NAME", "");
$keypersons = $tpl_db->getShadowRecordsBySupplier("tpl_shadow_supplier_key_personnel", $shadow_root_id, $shadow_supplier_id, "NAME", "");
$supplierbrands = $tpl_db->getShadowRecordsBySupplier("tpl_shadow_supplier_brand", $shadow_root_id, $shadow_supplier_id, "tpl_brand.NAME", "INNER JOIN tpl_brand ON (tpl_shadow_supplier_brand.BRAND_REC_ID = tpl_brand.REC_ID)");
?>
<script language="javascript">
    function DoSendToProduction(thisform)
    {       

        if (document.forms['proofsheet'].agree.checked && document.forms['proofsheet'].fullname.value != "" && document.forms['proofsheet'].position.value != "")
        {
           
            koolajax.callback(DoTPLSendToProduction(document.forms['proofsheet'].fullname.value, document.forms['proofsheet'].position.value));
            self.location='/dashboard/index.php';
        }
        else
        {
            alert("Please complete the acceptance form below before clicking the Submit button.")
        }
    }
</script>
<table border="0" cellpadding="2" cellspacing="0">
    <tr>
        <td width="100%">
            <h1 class="client_title">Confirm Order:<span class="client-title"><?php echo $client_user;?></span></h1>
        </td>
    </tr>
    <tr valign="top">
        <td width="100%" valign="top" class="BodyText">

            <!-- COMPANY DETAILS -->

            <table border="0" cellpadding="4" cellspacing="0">
                <tr>
                    <td class="BodyText" colspan="3" align="right"><a class="BodyText" target="_blank" href="/dashboard/proof-doc.php?instanceID=<?php echo $GLOBALS["instanceID"];?>">Click here to download a PDF version of this document</a></td>
                </tr>
                <tr>
                    <td><img src="/images/spacer.gif" border="0" width="150" height="8" /></td>
                    <td><img src="/images/spacer.gif" border="0" width="5" height="8" /></td>
                    <td><img src="/images/spacer.gif" border="0" width="630" height="8" /></td>
                </tr>
                <tr>
                    <td class="BodyText" colspan="3"><b><u>Directory Listing Proof Sheet</u></b></td>
                </tr>
                <tr>
                    <td class="BodyText" colspan="3">Please check the following proof sheet to ensure that the details of your listing are correct.  If you are happy with all the details below, please submit the acceptance form at the bottom of this proof sheet.  If you would like to modify any of these details, please click <a class="BodyText" href="/portal">here</a>.</td>
                </tr>
            </table>

            <!--  TRANSACTION DETAILS -->
            <table border="0" cellpadding="4" cellspacing="0">
                <tr>
                    <td><img src="/images/spacer.gif" border="0" width="150" height="8" /></td>
                    <td><img src="/images/spacer.gif" border="0" width="5" height="8" /></td>
                    <td><img src="/images/spacer.gif" border="0" width="630" height="8" /></td>
                </tr>
                <tr>
                    <td class="BodyText" colspan="3"><b><u>Transaction Details</u></b></td>
                </tr>
                <tr>
                    <td valign="top" class="BodyText">Listing Directory</td>
                    <td valign="top" class="BodyText">:</td>
                    <td valign="top" class="BodyText"><?php echo $directory["NAME"]; ?></td>
                </tr>
                <tr valign="top">
                    <td valign="top" class="BodyText">Listing Type</td>
                    <td valign="top" class="BodyText">:</td>
                    <td valign="top" class="BodyText">
                        <?php
                        if ($directory_offering) {
                            echo $directory_offering["NAME"];
                        } else {
                            ?>
                            <font color="#FF0000"><b>ERROR</b></font>
<?php }; ?>
                    </td>
                </tr>
                <tr valign="top">
                    <td valign="top" class="BodyText">Order Value (Excl TAX)</td>
                    <td valign="top" class="BodyText">:</td>
                    <td valign="top" class="BodyText">$<?php echo number_format($shadow_root["TRANSACTION_TOTAL_EXCL_GST"], 2); ?></td>
                </tr>
                <tr valign="top">
                    <td valign="top" class="BodyText">Order Value (Incl TAX)</td>
                    <td valign="top" class="BodyText">:</td>
                    <td valign="top" class="BodyText">$<?php echo number_format($shadow_root["TRANSACTION_TOTAL_INCL_GST"], 2); ?></td>
                </tr>
            </table>

            <!-- COMPANY DETAILS -->

            <table border="0" cellpadding="4" cellspacing="0">
                <tr>
                    <td><img src="/images/spacer.gif" border="0" width="150" height="8" /></td>
                    <td><img src="/images/spacer.gif" border="0" width="5" height="8" /></td>
                    <td><img src="/images/spacer.gif" border="0" width="630" height="8" /></td>
                </tr>
                <tr>
                    <td class="BodyText" colspan="3"><b><u>Company Details - General</u></b></td>
                </tr>
                <tr>
                    <td valign="top" class="BodyText">Company Name</td>
                    <td valign="top" class="BodyText">:</td>
                    <td valign="top" class="BodyText"><?php echo htmlspecialchars($supplier["NAME"]); ?></td>
                </tr>
                <tr>
                    <td valign="top" class="BodyText">Trading As</td>
                    <td valign="top" class="BodyText">:</td>
                    <td valign="top" class="BodyText"><?php echo htmlspecialchars($supplier["TRADING_AS_NAME"]); ?></td>
                </tr>
                <tr>
                    <td valign = "top" class = "BodyText">Contact Person</td>
                    <td valign = "top" class = "BodyText">:</td>
                    <td valign = "top" class = "BodyText"><?php echo htmlspecialchars($supplier["CONTACT_NAME"]); ?></td>
                </tr>
                <tr>
                    <td valign="top" class="BodyText">Contact Job Title</td>
                    <td valign="top" class="BodyText">:</td>
                    <td valign="top" class="BodyText"><?php echo htmlspecialchars($supplier["CONTACT_POSITION"]); ?></td>
                </tr>
                <tr>
                    <td valign="top" class="BodyText">Company Profile</td>
                    <td valign="top" class="BodyText">:</td>
                    <td valign="top" class="BodyText"><?php echo htmlspecialchars($supplier["COMPANY_PROFILE_TEXT"]); ?></td>
                </tr>
                <tr>
                    <td><img src="/images/spacer.gif" border="0" width="150" height="8" /></td>
                    <td><img src="/images/spacer.gif" border="0" width="5" height="8" /></td>
                    <td><img src="/images/spacer.gif" border="0" width="630" height="8" /></td>
                </tr>
                <tr>
                    <td class="BodyText" colspan="3"><b><u>Company Details - Physical Address</u></b></td>
                </tr>
                <tr>
                    <td valign="top" class="BodyText">Physical Building Address</td>
                    <td valign="top" class="BodyText">:</td>
                    <td valign="top" class="BodyText"><?php echo htmlspecialchars($supplier["PHYSICAL_ADDRESS_BUILDING_ADDRESS"]); ?></td>
                </tr>
                <tr>
                    <td valign="top" class="BodyText">Physical Street Address</td>
                    <td valign="top" class="BodyText">:</td>
                    <td valign="top" class="BodyText"><?php echo htmlspecialchars($supplier["PHYSICAL_ADDRESS_STREET_ADDRESS"]); ?></td>
                </tr>
                <tr>
                    <td valign="top" class="BodyText">Physical Suburb</td>
                    <td valign="top" class="BodyText">:</td>
                    <td valign="top" class="BodyText"><?php echo htmlspecialchars($supplier["PHYSICAL_ADDRESS_SUBURB"]); ?></td>
                </tr>
                <tr>
                    <td valign = "top" class = "BodyText">Physical City/Town</td>
                    <td valign = "top" class = "BodyText">:</td>
                    <td valign = "top" class = "BodyText"><?php echo htmlspecialchars($supplier["PHYSICAL_ADDRESS_CITY"]); ?></td>
                </tr>
                <tr>
                    <td valign = "top" class = "BodyText">Physical State</td>
                    <td valign = "top" class = "BodyText">:</td>
                    <td valign = "top" class = "BodyText"><?php echo htmlspecialchars($supplier["PHYSICAL_ADDRESS_STATE"]); ?></td>
                </tr>
                <tr>
                    <td valign = "top" class = "BodyText">Physical Post Code</td>
                    <td valign = "top" class = "BodyText">:</td>
                    <td valign = "top" class = "BodyText"><?php echo htmlspecialchars($supplier["PHYSICAL_ADDRESS_POST_CODE"]); ?></td>
                </tr>
                <tr>
                    <td valign = "top" class = "BodyText">Physical Country</td>
                    <td valign = "top" class = "BodyText">:</td>
                    <td valign = "top" class = "BodyText"><?php echo htmlspecialchars($supplier["PHYSICAL_ADDRESS_COUNTRY"]); ?></td>
                </tr>
                <tr>
                    <td><img src = "/images/spacer.gif" border = "0" width = "150" height = "8" /></td>
                    <td><img src = "/images/spacer.gif" border = "0" width = "5" height = "8" /></td>
                    <td><img src = "/images/spacer.gif" border = "0" width = "630" height = "8" /></td>
                </tr>
                <tr>
                    <td class = "BodyText" colspan = "3"><b><u>Company Details - Postal Address</u></b></td>
                </tr>
                <tr>
                    <td valign = "top" class = "BodyText">Postal Building Address</td>
                    <td valign = "top" class = "BodyText">:</td>
                    <td valign = "top" class = "BodyText"><?php echo htmlspecialchars($supplier["POSTAL_ADDRESS_BUILDING_ADDRESS"]); ?></td>
                </tr>
                <tr>
                    <td valign = "top" class = "BodyText">Postal Street/Box Address</td>
                    <td valign = "top" class = "BodyText">:</td>
                    <td valign = "top" class = "BodyText"><?php echo htmlspecialchars($supplier["POSTAL_ADDRESS_STREET_ADDRESS"]); ?></td>
                </tr>
                <tr>
                    <td valign = "top" class = "BodyText">Postal Suburb</td>
                    <td valign = "top" class = "BodyText">:</td>
                    <td valign = "top" class = "BodyText"><?php echo htmlspecialchars($supplier["POSTAL_ADDRESS_SUBURB"]); ?></td>
                </tr>
                <tr>
                    <td valign = "top" class = "BodyText">Postal City/Town</td>
                    <td valign = "top" class = "BodyText">:</td>
                    <td valign = "top" class = "BodyText"><?php echo htmlspecialchars($supplier["POSTAL_ADDRESS_CITY"]); ?></td>
                </tr>
                <tr>
                    <td valign = "top" class = "BodyText">Postal State</td>
                    <td valign = "top" class = "BodyText">:</td>
                    <td valign = "top" class = "BodyText"><?php echo htmlspecialchars($supplier["POSTAL_ADDRESS_STATE"]); ?></td>
                </tr>
                <tr>
                    <td valign = "top" class = "BodyText">Postal Post Code</td>
                    <td valign = "top" class = "BodyText">:</td>
                    <td valign = "top" class = "BodyText"><?php echo htmlspecialchars($supplier["POSTAL_ADDRESS_POST_CODE"]); ?></td>
                </tr>
                <tr>
                    <td valign = "top" class = "BodyText">Postal Country</td>
                    <td valign = "top" class = "BodyText">:</td>
                    <td valign = "top" class = "BodyText"><?php echo htmlspecialchars($supplier["POSTAL_ADDRESS_COUNTRY"]); ?></td>
                </tr>
                <tr>
                    <td><img src = "/images/spacer.gif" border = "0" width = "150" height = "8" /></td>
                    <td><img src = "/images/spacer.gif" border = "0" width = "5" height = "8" /></td>
                    <td><img src = "/images/spacer.gif" border = "0" width = "630" height = "8" /></td>
                </tr>
                <tr>
                    <td class = "BodyText" colspan = "3"><b><u>Company Details - Contact Details</u></b></td>
                </tr>
                <tr>
                    <td valign = "top" class = "BodyText">Telephone Number</td>
                    <td valign = "top" class = "BodyText">:</td>
                    <td valign = "top" class = "BodyText"><?php echo htmlspecialchars($supplier["TELEPHONE_NO"]); ?></td>
                </tr>
                <tr>
                    <td valign = "top" class = "BodyText">Freephone Number</td>
                    <td valign = "top" class = "BodyText">:</td>
                    <td valign = "top" class = "BodyText"><?php echo htmlspecialchars($supplier["FREE_TELEPHONE_NO"]); ?></td>
                </tr>
                <tr>
                    <td valign = "top" class = "BodyText">Fax Number</td>
                    <td valign = "top" class = "BodyText">:</td>
                    <td valign = "top" class = "BodyText"><?php echo htmlspecialchars($supplier["FAX_NO"]); ?></td>
                </tr>
                <tr>
                    <td valign = "top" class = "BodyText">Freefax Number</td>
                    <td valign = "top" class = "BodyText">:</td>
                    <td valign = "top" class = "BodyText"><?php echo htmlspecialchars($supplier["FREE_FAX_NO"]); ?></td>
                </tr>
                <tr>
                    <td valign = "top" class = "BodyText">Email Address</td>
                    <td valign = "top" class = "BodyText">:</td>
                    <td valign = "top" class = "BodyText"><?php echo htmlspecialchars($supplier["EMAIL_ADDRESS"]); ?></td>
                </tr>
                <tr>
                    <td valign = "top" class = "BodyText">Website Address</td>
                    <td valign = "top" class = "BodyText">:</td>
                    <td valign = "top" class = "BodyText"><?php echo htmlspecialchars($supplier["WEBSITE_ADDRESS"]); ?></td>
                </tr>
            </table>

            <! -- BRANCH LIST -->
<?php if (($shadow_offering) AND ($shadow_offering["MAX_BRANCH_COUNT"] > 0)) { ?>
                <table border = "0" cellpadding = "4" cellspacing = "0">
                    <tr>
                        <td><img src = "/images/spacer.gif" border = "0" width = "785" height = "8" /></td>
                    </tr>
                    <tr>
                        <td class = "BodyText"><b><u>Branch Details</u></b></td>
                    </tr>
                    <tr>
                        <td>
                            <table width = "100%" border = "0" cellpadding = "0" cellspacing = "0">
                                <tr>
                                    <td valign = "top" width = "14%" class = "BodyText"><b><u>Name</u></b></td>
                                    <td valign = "top" width = "50%" class = "BodyText"><b><u>Address</u></b></td>
                                    <td valign = "top" width = "13%" class = "BodyText"><b><u>Phone</u></b></td>
                                    <td valign = "top" width = "13%" class = "BodyText"><b><u>Fax</u></b></td>
                                </tr>
                                <?php
                                if ($supplierbranches) {
                                    $recordcounter = 1;
                                    foreach ($supplierbranches as $key => $supplierbranch) {
                                        if ($recordcounter <= $shadow_offering["MAX_BRANCH_COUNT"]) {
                                            ?>
                                            <tr>
                                                <td valign = "top" width = "14%" class = "BodyText"><?php echo $supplierbranch["NAME"]; ?></td>
                                                <td valign = "top" width = "50%" class = "BodyText">
                                                    <?php
                                                    if ($supplierbranch["POSTAL_ADDRESS_BUILDING_ADDRESS"] != "")
                                                        echo $supplierbranch["POSTAL_ADDRESS_BUILDING_ADDRESS"] . ", ";
                                                    echo $supplierbranch["POSTAL_ADDRESS_STREET_ADDRESS"] . ", " . $supplierbranch["POSTAL_ADDRESS_SUBURB"] . ", " . $supplierbranch["POSTAL_ADDRESS_CITY"] . ", ";
                                                    if ($supplierbranch["POSTAL_ADDRESS_STATE"] != "")
                                                        echo $supplierbranch["POSTAL_ADDRESS_STATE"] . ", ";
                                                    echo $supplierbranch["POSTAL_ADDRESS_POST_CODE"];
                                                    ?>
                                                </td>
                                                <td valign = "top" width = "13%" class = "BodyText"><?php echo $supplierbranch["TELEPHONE_NO"]; ?></td>
                                                <td valign = "top" width = "13%" class = "BodyText"><?php echo $supplierbranch["FAX_NO"]; ?></td>
                                            </tr>
                                            <?php
                                        }
                                        $recordcounter = $recordcounter + 1;
                                    }
                                }
                                ?>
                            </table>
                        </td>
                    </tr>
                </table>
                <?php
            }
            //PERSONNEL LIST
            if (($shadow_offering) AND ($shadow_offering["MAX_KEY_PERSONNEL_COUNT"] > 0)) {
                ?>
                <table border = "0" cellpadding = "4" cellspacing = "0">
                    <tr>
                        <td><img src = "/images/spacer.gif" border = "0" width = "785" height = "8" /></td>
                    </tr>
                    <tr>
                        <td class = "BodyText"><b><u>Key Personnel</u></b></td>
                    </tr>
                    <tr>
                        <td>
                            <table width = "100%" border = "0" cellpadding = "0" cellspacing = "0">
                                <tr>
                                    <td valign = "top" width = "20%" class = "BodyText"><b><u>Name</u></b></td>
                                    <td valign = "top" width = "25%" class = "BodyText"><b><u>Position</u></b></td>
                                    <td valign = "top" width = "25%" class = "BodyText"><b><u>Email Address</u></b></td>
                                    <td valign = "top" width = "10%" class = "BodyText"><b><u>Phone</u></b></td>
                                    <td valign = "top" width = "10%" class = "BodyText"><b><u>Fax</u></b></td>
                                </tr>
                                <?php
                                if ($keypersons) {
                                    $recordcounter = 1;
                                    foreach ($keypersons as $key => $keyperson) {
                                        if ($recordcounter <= $shadow_offering["MAX_KEY_PERSONNEL_COUNT"]) {
                                            ?>
                                            <tr>
                                                <td valign = "top" width = "20%" class = "BodyText"><?php echo $keyperson["NAME"]; ?></td>
                                                <td valign = "top" width = "25%" class = "BodyText"><?php echo $keyperson["POSITION"]; ?></td>
                                                <td valign = "top" width = "25%" class = "BodyText"><?php echo $keyperson["EMAIL_ADDRESS"]; ?></td>
                                                <td valign = "top" width = "10%" class = "BodyText"><?php echo $keyperson["TELEPHONE_NO"]; ?></td>
                                                <td valign = "top" width = "10%" class = "BodyText"><?php echo $keyperson["FAX_NO"]; ?></td>
                                            </tr>
                                            <?php
                                        }
                                        $recordcounter = $recordcounter + 1;
                                    }
                                }
                                ?>
                            </table>
                        </td>
                    </tr>
                </table>
    <?php
}
if (($shadow_offering) AND ($shadow_offering["MAX_BRAND_COUNT"] > 0)) {
    ?>
                <table border = "0" cellpadding = "4" cellspacing = "0">
                    <tr>
                        <td><img src = "/images/spacer.gif" border = "0" width = "785" height = "8" /></td>
                    </tr>
                    <tr>
                        <td class = "BodyText"><b><u>Brands</u></b></td>
                    </tr>
                    <tr>
                        <td>
                            <table width = "100%" border = "0" cellpadding = "0" cellspacing = "0">
                                <?php
                                if ($supplierbrands) {
                                    $recordcounter = 1;
                                    foreach ($supplierbrands as $key => $supplierbrand) {
                                        if ($recordcounter <= $shadow_offering["MAX_BRAND_COUNT"]) {
                                            $brand = $tpl_db->getRecord("tpl_brand", $supplierbrand["BRAND_REC_ID"]);
                                            ?>
                                            <tr>
                                                <td valign = "top" width = "25%" class = "BodyText"><?php echo $brand["NAME"]; ?></td>
                                            </tr>
                                            <?php
                                        }
                                        $recordcounter = $recordcounter + 1;
                                    }
                                }
                                ?>
                            </table>
                        </td>
                    </tr>
                </table>
                <?php
            }

            //CATEGORY LIST
            ?>
            <table border = "0" cellpadding = "4" cellspacing = "0">
                <tr>
                    <td><img src = "/images/spacer.gif" border = "0" height = "8" /></td>
                </tr>
                <tr>
                    <td class = "BodyText"><b><u>Category / Product Listings</u></b></td>
                </tr>
                <tr>
                    <td>
                        <table width = "100%" border = "0" cellpadding = "0" cellspacing = "0">
                            <?php
                            if ($directory["IS_PRODUCT_BASED"] == 1) {

                                function TPLProductPanelDrawPath($recid) {
                                    $tpl_db = new tpldb;
                                    $productcategory = $tpl_db->getRecord('tpl_product_category', $recid);
                                    if ($productcategory["PARENT_PRODUCT_CATEGORY_REC_ID"] != 0) {
                                        TPLProductPanelDrawPath($productcategory["PARENT_PRODUCT_CATEGORY_REC_ID"]);
                                    }
                                    echo "> " . $productcategory["NAME"];
                                }

                                $tpl_db = new tpldb;
                                $categories = $tpl_db->GetProductBasedCategorySummary($shadow_root_id, $supplier["MASTER_REC_ID"]);
                                if ($categories) {
                                    foreach ($categories as $key => $category) {
                                        ?>
                                        <tr>
                                            <td valign = "middle" width = "10%" class = "BodyText">
                                                <b>
            <?php TPLProductPanelDrawPath($category["PRODUCT_CATEGORY_REC_ID"]); ?>
                                                </b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td valign = "middle" width = "10%" class = "BodyText">
                                                <img src = "/images/spacer.gif" border = "0" width = "4" height = "4" />
                                            </td>
                                        </tr>
            <?php
            $products = $tpl_db->getShadowProductsByCategory($_SESSION["shadow_root_id"], $shadow_supplier_id, $category["PRODUCT_CATEGORY_REC_ID"]);
            if ($products) {
                foreach ($products as $key => $product) {
                    ?>
                                                <tr>
                                                    <td width = "100%">
                                                        <table border = "0" cellpadding = "4" cellspacing = "0">
                                                            <tr>
                                                                <td><img src = "/images/spacer.gif" border = "0" width = "40" height = "4" /></td>
                                                                <td valign = "middle" width = "320" class = "BodyText">
                                                                    <?php echo htmlspecialchars($product["LABEL_NAME"]); ?>
                                                                </td>
                                                                <td valign = "middle" width = "100" class = "BodyText">
                                                                    <?php echo htmlspecialchars($product["VARIETAL"]); ?>
                                                                </td>
                                                                <td valign = "middle" width = "100" class = "BodyText">
                                                                <?php echo htmlspecialchars($product["VINTAGE"]); ?>
                                                                </td>
                                                                <td valign = "middle" width = "200" class = "BodyText">
                                                                    <?php echo htmlspecialchars($product["REGION_OF_ORIGIN"]) . " - " . htmlspecialchars($product["COUNTRY_OF_ORIGIN"]); ?>
                                                                </td>
                                                                <?php if ($product["IS_LOGO_LISTING"] == 1) { ?>
                                                                    <td valign = "middle" width = "50" class = "BodyText">LOGO</td>
                                                                <?php } else { ?>
                                                                    <td valign = "middle" width = "50" class = "BodyText">
                                                                        <img src = "/images/spacer.gif" border = "0" width = "8" height = "8" />
                                                                    </td> 
                                                                <?php }; ?>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                    <?php
                }
            }
            ?>
                                        <tr>
                                            <td valign = "middle" width = "10%" class = "BodyText">
                                                <img src = "/images/spacer.gif" border = "0" width = "8" height = "8" />
                                            </td>
                                        </tr>
                                        <?php
                                    }
                                } // has categories
                            } else { // is product based 

                                function DoHasSelectedChildren($directory_rec_id, $parent_rec_id) {
                                    $tpl_db = new tpldb;
                                    $categories = $tpl_db->GetDirectoryCategories($directory_rec_id, $parent_rec_id);
                                    $result = FALSE;

                                    if ($categories) {
                                        foreach ($categories as $key => $category) {
                                            if ($result != TRUE) {
                                                $isdirectorycategory = $tpl_db->IsDirectoryCategory($directory_rec_id, $category["REC_ID"]);
                                                if ($isdirectorycategory == TRUE) {
                                                    $result = $tpl_db->IsShadowDirectoryCategoryListed($shadow_root_id, $category["REC_ID"]);

                                                    if ($result != TRUE) {
                                                        $result = DoHasSelectedChildren($directory_rec_id, $category["REC_ID"]);
                                                    }
                                                }
                                            }
                                        }
                                    }

                                    return $result;
                                }

                            }

                            function DoBuildCategories($directory_rec_id, $parent_rec_id, $level) {
                                $tpl_db = new tpldb;
                                $categories = $tpl_db->GetDirectoryCategories($directory_rec_id, $parent_rec_id);
                                $disabled = "disabled";

                                if ($categories) {
                                    foreach ($categories as $key => $category) {
                                        $isdirectorycategory = $tpl_db->IsDirectoryCategory($directory_rec_id, $category["REC_ID"]);
                                        if ($isdirectorycategory == TRUE) {
                                            $ischecked = $tpl_db->IsShadowDirectoryCategoryListed($shadow_root_id, $category["REC_ID"]);

                                            $lineout = FALSE;
                                            if (($ischecked == TRUE) or (DoHasSelectedChildren($directory_rec_id, $category["REC_ID"]))) {
                                                $lineout = TRUE;
                                                ?>
                                                <tr>
                                                <?php if ($ischecked == TRUE) { ?>
                                                        <td valign = "middle" width = "10%" class = "BodyText">
                                                            <img src = "/images/spacer.gif" border = "0" width = "<?php echo($level * 12); ?>" height = "8" />- 
                                                            <b><?php htmlspecialchars($category["NAME"]); ?></b></td> 
                                                <?php } else { ?>
                                                        <td valign = "middle" width = "10%" class = "BodyText">
                                                            <img src = "/images/spacer.gif" border = "0" width = "<?php echo($level * 12); ?>" height = "8" />+ <?php htmlspecialchars($category["NAME"]); ?>
                                                        </td>
                                                    </tr>
                    <?php
                    }
                    $nextlevel = $level + 1;
                    DoBuildCategories($directory_rec_id, $category["REC_ID"], $nextlevel);
                }

                if (($parent_rec_id == 0) AND ($lineout == TRUE)) {
                    ?>
                                                <tr>
                                                    <td valign = "middle" width = "10%" class = "BodyText">
                                                        <img src = "/images/spacer.gif" border = "0" width = "4" height = "4" />
                                                    </td>
                                                </tr>
                    <?php
                }
            }
        } // each category
    } // has categories

    DoBuildCategories($shadow_directory_id, 0, 0);
}
?>

                        </table>
                    </td>
                </tr>
            </table>

            <!-- ACCEPT CONDITIONS -->
            <table border = "0" cellpadding = "4" cellspacing = "0">
                <tr>
                    <td><img src = "/images/spacer.gif" border = "0" width = "785" height = "8" /></td>
                </tr>
                <tr>
                    <td class = "BodyText"><b><u>Acceptance</u></b></td>
                </tr>
                <tr>
                    <td>

                        <form id = "proofsheet" >
                            <table width = "100%" border = "0" cellpadding = "0" cellspacing = "0">
                                <tr>
                                    <td><img src = "/images/spacer.gif" border = "0" width = "120" height = "8" /></td>
                                    <td><img src = "/images/spacer.gif" border = "0" width = "685" height = "8" /></td>
                                </tr>
                                <tr>
                                    <td valign = "top" class = "BodyText"><br/>Full Name<font color = "#FF0000"><b>*</b></font></td>
                                    <td valign = "top" class = "BodyText">Name <i>insert the name of the person who approved the proof sheet</i><br/><input type = "text" name = "fullname" value = "" size = "64" maxlength = "255" /></td>
                                </tr>
                                <tr>
                                    <td><img src = "/images/spacer.gif" border = "0" width = "100%" height = "8" /></td>
                                    <td><img src = "/images/spacer.gif" border = "0" width = "100%" height = "8" /></td>
                                </tr>
                                <tr>
                                    <td valign = "top" class = "BodyText"><br/>Position<font color = "#FF0000"><b>*</b></font></td>
                                    <td valign = "top" class = "BodyText">eg <i>Brand Manager, Administrator, Agency etc...</i><br/><input type = "text" name = "position" value = "" size = "64" maxlength = "255" /></td>
                                </tr>
                                <tr>
                                    <td><img src = "/images/spacer.gif" border = "0" width = "100%" height = "8" /></td>
                                    <td><img src = "/images/spacer.gif" border = "0" width = "100%" height = "8" /></td>
                                </tr>
                                <tr>
                                    <td valign = "top" class = "BodyText"></td>
                                    <td valign = "top" class = "BodyText">
                                        <table width = "100%" border = "0" cellpadding = "0" cellspacing = "0">
                                            <tr>
                                                <td valign = "top" class = "BodyText"><input type = "checkbox" name = "agree" /></td>
                                                <td valign = "top" class = "BodyText">The information provided here from companies listing in this directory is accepted in good faith by MediaWeb and on the basis that it does not knowingly infringe any other organizations copyrights, intellectual property rights or agency agreements. In the case of any disputes the listings will be removed until a resolution is reached.<br><br>I hereby confirm that I have read and understand the above statement.</td>
                                            </tr>
                                        </table>
                                </tr>
                                <tr>
                                    <td><img src = "/images/spacer.gif" border = "0" width = "100%" height = "8" /></td>
                                    <td><img src = "/images/spacer.gif" border = "0" width = "100%" height = "8" /></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td align = "right"><input type = "button" onClick = "DoSendToProduction(); return false;" value = "Submit" /></td>
                                </tr>
                            </table>
                        </form>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>