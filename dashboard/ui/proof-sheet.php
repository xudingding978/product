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

$session_maintain->add_client_field('shadow_root', $shadow_root, $instanceID, 'client_data');
$session_maintain->add_client_field('shadow_root_id', $shadow_root["REC_ID"], $instanceID, 'client_data');
$session_maintain->add_client_field('shadow_directory_id', $shadow_root["DIRECTORY_REC_ID"], $instanceID, 'client_data');
$session_maintain->add_client_field('shadow_state', $shadow_root["STATE"], $instanceID, 'client_data');

$tpl_db = new tpldb;
$shadow_offering = $tpl_db->getShadowRecord('tpl_shadow_directory_offering', $shadow_root['SHADOW_DIRECTORY_OFFERING_REC_ID']);

echo "<script language=\"javascript\">\n";
echo "\n";
echo "function DoSendToProduction(thisform)\n";
echo "{\n";
echo "  if (thisform.agree.checked && thisform.fullname.value != \"\" && thisform.position.value != \"\")\n";
echo "  {\n";
echo "    koolajax.callback(DoTPLSendToProduction(thisform.fullname.value, thisform.position.value));\n";
echo "    self.location='/dashboard/index.php';\n";
echo "  }\n";
echo "  else\n";
echo "  {\n";
echo "    alert(\"Please complete the acceptance form below before clicking the Submit button.\")\n";
echo "  }\n";
echo " }\n";
echo "\n";
echo "</script>\n";

echo "<table border=\"0\" cellpadding=\"2\" cellspacing=\"0\">\n";
echo "  <tr valign=\"top\">\n";
echo "    <td width=\"100%\" valign=\"top\" class=\"BodyText\">\n";

//COMPANY DETAILS

echo "<table border=\"0\" cellpadding=\"4\" cellspacing=\"0\">\n";
echo "  <tr>\n";
echo "    <td class=\"BodyText\" colspan=\"3\">The <i>HospitalityBiz.co.nz</i> industry directory website includes five industry directories from MediaWeb:  <i>The Hospitality Source, Shaw's Liquor Directory, Coffee Culture Directory, Packaging & Printing Buyer's Guide and Directory</i> and <i>Wine Technology Directory</i>.  It is your one-stop online resource from MediaWeb.</td>\n";
echo "  </tr>\n";
echo "  <tr>\n";
echo "    <td class=\"BodyText\" colspan=\"3\" align=\"right\"><a class=\"BodyText\" href=\"/dashboard/proof-doc.php\">Click here to download a printable version of this document</a></td>\n";
echo "  </tr>\n";
echo "  <tr>\n";
echo "    <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"150\" height=\"8\" /></td>\n";
echo "    <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"5\" height=\"8\" /></td>\n";
echo "    <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"630\" height=\"8\" /></td>\n";
echo "  </tr>\n";
echo "  <tr>\n";
echo "    <td class=\"BodyText\" colspan=\"3\"><b><u>Directory Listing Proof Sheet</u></b></td>\n";
echo "  </tr>\n";
echo "  <tr>\n";
echo "    <td class=\"BodyText\" colspan=\"3\">Please check the following proof sheet to ensure that the details of your listing are correct.  If you are happy with all the details below, please submit the acceptance form at the bottom of this proof sheet.  If you would like to modify any of these details, please click <a class=\"BodyText\" href=\"/portal\">here</a>.</td>\n";
echo "  </tr>\n";
echo "</table>\n";

// TRANSACTION DETAILS
echo "<table border=\"0\" cellpadding=\"4\" cellspacing=\"0\">\n";
echo "  <tr>\n";
echo "    <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"150\" height=\"8\" /></td>\n";
echo "    <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"5\" height=\"8\" /></td>\n";
echo "    <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"630\" height=\"8\" /></td>\n";
echo "  </tr>\n";
echo "  <tr>\n";
echo "    <td class=\"BodyText\" colspan=\"3\"><b><u>Transaction Details</u></b></td>\n";
echo "  </tr>\n";

echo "  <tr valign=\"top\">\n";
echo "    <td valign=\"top\" class=\"BodyText\">Listing Type</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">:</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">";

$directory_offering = $tpl_db->getShadowRecord("tpl_shadow_directory_offering", $shadow_root["SHADOW_DIRECTORY_OFFERING_REC_ID"]);
if ($directory_offering)
    echo $directory_offering["NAME"];
else
    echo "<font color=\"#FF0000\"><b>ERROR</b></font>";

echo "</td>\n";
echo "  </tr>\n";

echo "  <tr valign=\"top\">\n";
echo "    <td valign=\"top\" class=\"BodyText\">Order Value (Excl GST)</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">:</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">$" . number_format($shadow_root["TRANSACTION_TOTAL_EXCL_GST"], 2) . "</td>\n";
echo "  </tr>\n";
echo "  <tr valign=\"top\">\n";
echo "    <td valign=\"top\" class=\"BodyText\">Order Value (Incl GST)</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">:</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">$" . number_format($shadow_root["TRANSACTION_TOTAL_INCL_GST"], 2) . "</td>\n";
echo "  </tr>\n";

echo "</table>\n";

//COMPANY DETAILS

echo "<table border=\"0\" cellpadding=\"4\" cellspacing=\"0\">\n";
echo "  <tr>\n";
echo "    <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"150\" height=\"8\" /></td>\n";
echo "    <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"5\" height=\"8\" /></td>\n";
echo "    <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"630\" height=\"8\" /></td>\n";
echo "  </tr>\n";
echo "  <tr>\n";
echo "    <td class=\"BodyText\" colspan=\"3\"><b><u>Company Details - General</u></b></td>\n";
echo "  </tr>\n";

$supplier = $tpl_db->getShadowRecord("tpl_shadow_supplier", $shadow_supplier_rec_id);

echo "  <tr>\n";
echo "    <td valign=\"top\" class=\"BodyText\">Company Name</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">:</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">" . htmlspecialchars($supplier["NAME"]) . "</td>\n";
echo "  </tr>\n";
echo "  <tr>\n";
echo "    <td valign=\"top\" class=\"BodyText\">Trading As</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">:</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">" . htmlspecialchars($supplier["TRADING_AS_NAME"]) . "</td>\n";
echo "  </tr>\n";
echo "  <tr>\n";
echo "    <td valign=\"top\" class=\"BodyText\">Contact Person</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">:</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">" . htmlspecialchars($supplier["CONTACT_NAME"]) . "</td>\n";
echo "  </tr>\n";
echo "  <tr>\n";
echo "    <td valign=\"top\" class=\"BodyText\">Contact Job Title</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">:</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">" . htmlspecialchars($supplier["CONTACT_POSITION"]) . "</td>\n";
echo "  </tr>\n";
// added by archer - refer to email from anthony (28,Apr.2011)
if ($directory_offering["NAME"] != "Standard Listing") {
    echo "  <tr>\n";
    echo "    <td valign=\"top\" class=\"BodyText\">Company Profile</td>\n";
    echo "    <td valign=\"top\" class=\"BodyText\">:</td>\n";
    echo "    <td valign=\"top\" class=\"BodyText\">" . htmlspecialchars($supplier["COMPANY_PROFILE_TEXT"]) . "</td>\n";
    echo "  </tr>\n";
}
echo "  <tr>\n";
echo "    <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"150\" height=\"8\" /></td>\n";
echo "    <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"5\" height=\"8\" /></td>\n";
echo "    <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"630\" height=\"8\" /></td>\n";
echo "  </tr>\n";
echo "  <tr>\n";
echo "    <td class=\"BodyText\" colspan=\"3\"><b><u>Company Details - Physical Address</u></b></td>\n";
echo "  </tr>\n";
echo "  <tr>\n";
echo "    <td valign=\"top\" class=\"BodyText\">Physical Building Address</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">:</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">" . htmlspecialchars($supplier["PHYSICAL_ADDRESS_BUILDING_ADDRESS"]) . "</td>\n";
echo "  </tr>\n";
echo "  <tr>\n";
echo "    <td valign=\"top\" class=\"BodyText\">Physical Street Address</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">:</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">" . htmlspecialchars($supplier["PHYSICAL_ADDRESS_STREET_ADDRESS"]) . "</td>\n";
echo "  </tr>\n";
echo "  <tr>\n";
echo "    <td valign=\"top\" class=\"BodyText\">Physical Suburb</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">:</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">" . htmlspecialchars($supplier["PHYSICAL_ADDRESS_SUBURB"]) . "</td>\n";
echo "  </tr>\n";
echo "  <tr>\n";
echo "    <td valign=\"top\" class=\"BodyText\">Physical City/Town</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">:</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">" . htmlspecialchars($supplier["PHYSICAL_ADDRESS_CITY"]) . "</td>\n";
echo "  </tr>\n";
echo "  <tr>\n";
echo "    <td valign=\"top\" class=\"BodyText\">Physical State</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">:</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">" . htmlspecialchars($supplier["PHYSICAL_ADDRESS_STATE"]) . "</td>\n";
echo "  </tr>\n";
echo "  <tr>\n";
echo "    <td valign=\"top\" class=\"BodyText\">Physical Post Code</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">:</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">" . htmlspecialchars($supplier["PHYSICAL_ADDRESS_POST_CODE"]) . "</td>\n";
echo "  </tr>\n";
echo "  <tr>\n";
echo "    <td valign=\"top\" class=\"BodyText\">Physical Country</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">:</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">" . htmlspecialchars($supplier["PHYSICAL_ADDRESS_COUNTRY"]) . "</td>\n";
echo "  </tr>\n";
echo "  <tr>\n";
echo "    <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"150\" height=\"8\" /></td>\n";
echo "    <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"5\" height=\"8\" /></td>\n";
echo "    <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"630\" height=\"8\" /></td>\n";
echo "  </tr>\n";
echo "  <tr>\n";
echo "    <td class=\"BodyText\" colspan=\"3\"><b><u>Company Details - Postal Address</u></b></td>\n";
echo "  </tr>\n";
echo "  <tr>\n";
echo "    <td valign=\"top\" class=\"BodyText\">Postal Building Address</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">:</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">" . htmlspecialchars($supplier["POSTAL_ADDRESS_BUILDING_ADDRESS"]) . "</td>\n";
echo "  </tr>\n";
echo "  <tr>\n";
echo "    <td valign=\"top\" class=\"BodyText\">Postal Street/Box Address</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">:</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">" . htmlspecialchars($supplier["POSTAL_ADDRESS_STREET_ADDRESS"]) . "</td>\n";
echo "  </tr>\n";
echo "  <tr>\n";
echo "    <td valign=\"top\" class=\"BodyText\">Postal Suburb</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">:</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">" . htmlspecialchars($supplier["POSTAL_ADDRESS_SUBURB"]) . "</td>\n";
echo "  </tr>\n";
echo "  <tr>\n";
echo "    <td valign=\"top\" class=\"BodyText\">Postal City/Town</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">:</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">" . htmlspecialchars($supplier["POSTAL_ADDRESS_CITY"]) . "</td>\n";
echo "  </tr>\n";
echo "  <tr>\n";
echo "    <td valign=\"top\" class=\"BodyText\">Postal State</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">:</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">" . htmlspecialchars($supplier["POSTAL_ADDRESS_STATE"]) . "</td>\n";
echo "  </tr>\n";
echo "  <tr>\n";
echo "    <td valign=\"top\" class=\"BodyText\">Postal Post Code</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">:</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">" . htmlspecialchars($supplier["POSTAL_ADDRESS_POST_CODE"]) . "</td>\n";
echo "  </tr>\n";
echo "  <tr>\n";
echo "    <td valign=\"top\" class=\"BodyText\">Postal Country</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">:</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">" . htmlspecialchars($supplier["POSTAL_ADDRESS_COUNTRY"]) . "</td>\n";
echo "  </tr>\n";
echo "  <tr>\n";
echo "    <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"150\" height=\"8\" /></td>\n";
echo "    <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"5\" height=\"8\" /></td>\n";
echo "    <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"630\" height=\"8\" /></td>\n";
echo "  </tr>\n";
echo "  <tr>\n";
echo "    <td class=\"BodyText\" colspan=\"3\"><b><u>Company Details - Contact Details</u></b></td>\n";
echo "  </tr>\n";
echo "  <tr>\n";
echo "    <td valign=\"top\" class=\"BodyText\">Telephone Number</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">:</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">" . htmlspecialchars($supplier["TELEPHONE_NO"]) . "</td>\n";
echo "  </tr>\n";
echo "  <tr>\n";
echo "    <td valign=\"top\" class=\"BodyText\">Freephone Number</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">:</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">" . htmlspecialchars($supplier["FREE_TELEPHONE_NO"]) . "</td>\n";
echo "  </tr>\n";
echo "  <tr>\n";
echo "    <td valign=\"top\" class=\"BodyText\">Fax Number</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">:</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">" . htmlspecialchars($supplier["FAX_NO"]) . "</td>\n";
echo "  </tr>\n";
echo "  <tr>\n";
echo "    <td valign=\"top\" class=\"BodyText\">Freefax Number</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">:</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">" . htmlspecialchars($supplier["FREE_FAX_NO"]) . "</td>\n";
echo "  </tr>\n";
echo "  <tr>\n";
echo "    <td valign=\"top\" class=\"BodyText\">Email Address</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">:</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">" . htmlspecialchars($supplier["EMAIL_ADDRESS"]) . "</td>\n";
echo "  </tr>\n";
echo "  <tr>\n";
echo "    <td valign=\"top\" class=\"BodyText\">Website Address</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">:</td>\n";
echo "    <td valign=\"top\" class=\"BodyText\">" . htmlspecialchars($supplier["WEBSITE_ADDRESS"]) . "</td>\n";
echo "  </tr>\n";


echo "</table>\n";

//BRANCH LIST

if (($shadow_offering) AND ($shadow_offering["MAX_BRANCH_COUNT"] > 0)) {
    echo "<table border=\"0\" cellpadding=\"4\" cellspacing=\"0\">\n";
    echo "  <tr>\n";
    echo "    <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"785\" height=\"8\" /></td>\n";
    echo "  </tr>\n";
    echo "  <tr>\n";
    echo "    <td class=\"BodyText\"><b><u>Branch Details</u></b></td>\n";
    echo "  </tr>\n";
    echo "  <tr>\n";
    echo "    <td>\n";


    $supplierbranches = $tpl_db->getShadowRecordsBySupplier("tpl_shadow_supplier_branch", $shadow_root_id, $shadow_supplier_id, "NAME", "");

    echo "      <table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\n";
    echo "        <tr>\n";
    echo "          <td valign=\"top\" width=\"14%\" class=\"BodyText\"><b><u>Name</u></b></td>\n";
    echo "          <td valign=\"top\" width=\"50%\" class=\"BodyText\"><b><u>Address</u></b></td>\n";
    echo "          <td valign=\"top\" width=\"13%\" class=\"BodyText\"><b><u>Phone</u></b></td>\n";
    echo "          <td valign=\"top\" width=\"13%\" class=\"BodyText\"><b><u>Fax</u></b></td>\n";
    echo "        </tr>\n";

    if ($supplierbranches) {
        $recordcounter = 1;
        foreach ($supplierbranches as $key => $supplierbranch) {
            if ($recordcounter <= $shadow_offering["MAX_BRANCH_COUNT"]) {
                echo "        <tr>\n";

                echo "          <td valign=\"top\" width=\"14%\" class=\"BodyText\">" . $supplierbranch["NAME"] . "</td>\n";
                echo "          <td valign=\"top\" width=\"50%\" class=\"BodyText\">";

                if ($supplierbranch["POSTAL_ADDRESS_BUILDING_ADDRESS"] != "")
                    echo $supplierbranch["POSTAL_ADDRESS_BUILDING_ADDRESS"] . ", ";

                echo $supplierbranch["POSTAL_ADDRESS_STREET_ADDRESS"] . ", " . $supplierbranch["POSTAL_ADDRESS_SUBURB"] . ", " . $supplierbranch["POSTAL_ADDRESS_CITY"] . ", ";

                if ($supplierbranch["POSTAL_ADDRESS_STATE"] != "")
                    echo $supplierbranch["POSTAL_ADDRESS_STATE"] . ", ";

                echo $supplierbranch["POSTAL_ADDRESS_POST_CODE"] . "</td>\n";
                echo "          <td valign=\"top\" width=\"13%\" class=\"BodyText\">" . $supplierbranch["TELEPHONE_NO"] . "</td>\n";
                echo "          <td valign=\"top\" width=\"13%\" class=\"BodyText\">" . $supplierbranch["FAX_NO"] . "</td>\n";
                echo "        </tr>\n";
            }

            $recordcounter = $recordcounter + 1;
        }
    }

    echo "      </table>\n";
    echo "    </td>\n";
    echo "  </tr>\n";
    echo "</table>\n";
}

//PERSONNEL LIST
if (($shadow_offering) AND ($shadow_offering["MAX_KEY_PERSONNEL_COUNT"] > 0)) {
    echo "<table border=\"0\" cellpadding=\"4\" cellspacing=\"0\">\n";
    echo "  <tr>\n";
    echo "    <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"785\" height=\"8\" /></td>\n";
    echo "  </tr>\n";
    echo "  <tr>\n";
    echo "    <td class=\"BodyText\"><b><u>Key Personnel</u></b></td>\n";
    echo "  </tr>\n";
    echo "  <tr>\n";
    echo "    <td>\n";

    $keypersons = $tpl_db->getShadowRecordsBySupplier("tpl_shadow_supplier_key_personnel", $shadow_root_id, $shadow_supplier_id, "NAME", "");

    echo "      <table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\n";
    echo "        <tr>\n";

    echo "          <td valign=\"top\" width=\"20%\" class=\"BodyText\"><b><u>Name</u></b></td>\n";
    echo "          <td valign=\"top\" width=\"25%\" class=\"BodyText\"><b><u>Position</u></b></td>\n";
    echo "          <td valign=\"top\" width=\"25%\" class=\"BodyText\"><b><u>Email Address</u></b></td>\n";
    echo "          <td valign=\"top\" width=\"10%\" class=\"BodyText\"><b><u>Phone</u></b></td>\n";
    echo "          <td valign=\"top\" width=\"10%\" class=\"BodyText\"><b><u>Fax</u></b></td>\n";
    echo "        </tr>\n";

    if ($keypersons) {
        $recordcounter = 1;
        foreach ($keypersons as $key => $keyperson) {
            if ($recordcounter <= $shadow_offering["MAX_KEY_PERSONNEL_COUNT"]) {
                echo "        <tr>\n";
                echo "          <td valign=\"top\" width=\"20%\" class=\"BodyText\">" . $keyperson["NAME"] . "</td>\n";
                echo "          <td valign=\"top\" width=\"25%\" class=\"BodyText\">" . $keyperson["POSITION"] . "</td>\n";
                echo "          <td valign=\"top\" width=\"25%\" class=\"BodyText\">" . $keyperson["EMAIL_ADDRESS"] . "</td>\n";
                echo "          <td valign=\"top\" width=\"10%\" class=\"BodyText\">" . $keyperson["TELEPHONE_NO"] . "</td>\n";
                echo "          <td valign=\"top\" width=\"10%\" class=\"BodyText\">" . $keyperson["FAX_NO"] . "</td>\n";
                echo "        </tr>\n";
            }

            $recordcounter = $recordcounter + 1;
        }
    }

    echo "      </table>\n";
    echo "    </td>\n";
    echo "  </tr>\n";
    echo "</table>\n";
}

//BRAND LIST

if (($shadow_offering) AND ($shadow_offering["MAX_BRAND_COUNT"] > 0)) {
    echo "<table border=\"0\" cellpadding=\"4\" cellspacing=\"0\">\n";
    echo "  <tr>\n";
    echo "    <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"785\" height=\"8\" /></td>\n";
    echo "  </tr>\n";
    echo "  <tr>\n";
    echo "    <td class=\"BodyText\"><b><u>Brands</u></b></td>\n";
    echo "  </tr>\n";
    echo "  <tr>\n";
    echo "    <td>\n";

    $supplierbrands = $tpl_db->getShadowRecordsBySupplier("tpl_shadow_supplier_brand", $shadow_root_id, $shadow_supplier_id, "tpl_brand.NAME", "INNER JOIN tpl_brand ON (tpl_shadow_supplier_brand.BRAND_REC_ID = tpl_brand.REC_ID)");

    echo "      <table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\n";

    if ($supplierbrands) {
        $recordcounter = 1;
        foreach ($supplierbrands as $key => $supplierbrand) {
            if ($recordcounter <= $shadow_offering["MAX_BRAND_COUNT"]) {
                $brand = $tpl_db->getRecord("tpl_brand", $supplierbrand["BRAND_REC_ID"]);

                echo "        <tr>\n";
                echo "          <td valign=\"top\" width=\"25%\" class=\"BodyText\">" . $brand["NAME"] . "</td>\n";
                echo "        </tr>\n";
            }

            $recordcounter = $recordcounter + 1;
        }
    }

    echo "      </table>\n";
    echo "    </td>\n";
    echo "  </tr>\n";
    echo "</table>\n";
}

//CATEGORY LIST

echo "<table border=\"0\" cellpadding=\"4\" cellspacing=\"0\">\n";
echo "  <tr>\n";
echo "    <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"785\" height=\"8\" /></td>\n";
echo "  </tr>\n";
echo "  <tr>\n";
echo "    <td class=\"BodyText\"><b><u>Category / Product Listings</u></b></td>\n";
echo "  </tr>\n";
echo "  <tr>\n";
echo "    <td>\n";
echo "      <table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\n";

$tpl_db = new tpldb;
$directory = $tpl_db->getRecord('tpl_directory', $_SESSION["shadow_directory_id"]);
if ($directory["IS_PRODUCT_BASED"] == 1) {

    function TPLProductPanelDrawPath($recid) {
        $tpl_db = new tpldb;
        $productcategory = $tpl_db->getRecord('tpl_product_category', $recid);

        if ($productcategory["PARENT_PRODUCT_CATEGORY_REC_ID"] != 0) {
            TPLProductPanelDrawPath($productcategory["PARENT_PRODUCT_CATEGORY_REC_ID"]);
        }

        echo " > " . $productcategory["NAME"];
    }

    $tpl_db = new tpldb;
    $categories = $tpl_db->GetProductBasedCategorySummary($shadow_root_id, $supplier["MASTER_REC_ID"]);

    if ($categories) {
        foreach ($categories as $key => $category) {
            echo "        <tr>\n";
            echo "          <td valign=\"middle\" width=\"10%\" class=\"BodyText\"><b>";
            TPLProductPanelDrawPath($category["PRODUCT_CATEGORY_REC_ID"]);
            echo "</b></td>\n";
            echo "        </tr>\n";

            echo "        <tr>\n";
            echo "          <td valign=\"middle\" width=\"10%\" class=\"BodyText\"><img src=\"/images/spacer.gif\" border=\"0\" width=\"4\" height=\"4\" /></td>\n";
            echo "        </tr>\n";

            $products = $tpl_db->getShadowProductsByCategory($_SESSION["shadow_root_id"], $shadow_supplier_id, $category["PRODUCT_CATEGORY_REC_ID"]);
            if ($products) {
                foreach ($products as $key => $product) {
                    echo "        <tr>\n";
                    echo "          <td width=\"100%\">\n";
                    echo "            <table border=\"0\" cellpadding=\"4\" cellspacing=\"0\">\n";
                    echo "              <tr>\n";
                    echo "                <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"40\" height=\"4\" /></td>\n";
                    echo "                <td valign=\"middle\" width=\"320\" class=\"BodyText\">" . htmlspecialchars($product["LABEL_NAME"]) . "</td>\n";
                    echo "                <td valign=\"middle\" width=\"100\" class=\"BodyText\">" . htmlspecialchars($product["VARIETAL"]) . "</td>\n";
                    echo "                <td valign=\"middle\" width=\"100\" class=\"BodyText\">" . htmlspecialchars($product["VINTAGE"]) . "</td>\n";
                    echo "                <td valign=\"middle\" width=\"200\" class=\"BodyText\">" . htmlspecialchars($product["REGION_OF_ORIGIN"]) . ", " . htmlspecialchars($product["COUNTRY_OF_ORIGIN"]) . "</td>\n";

                    if ($product["IS_LOGO_LISTING"] == 1)
                        echo "                <td valign=\"middle\" width=\"50\" class=\"BodyText\">LOGO</td>\n";
                    else
                        echo "                <td valign=\"middle\" width=\"50\" class=\"BodyText\"></td>\n";

                    echo "              </tr>\n";
                    echo "            </table>\n";
                    echo "          <td>\n";
                    echo "        </tr>\n";
                }
            }

            echo "        <tr>\n";
            echo "          <td valign=\"middle\" width=\"10%\" class=\"BodyText\"><img src=\"/images/spacer.gif\" border=\"0\" width=\"8\" height=\"8\" /></td>\n";
            echo "        </tr>\n";
        }
    }
}
else {

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
                        echo "        <tr>\n";

                        if ($ischecked == TRUE)
                            echo "          <td valign=\"middle\" width=\"10%\" class=\"BodyText\"><img src=\"/images/spacer.gif\" border=\"0\" width=\"" . ($level * 12) . "\" height=\"8\" />- <b>" . htmlspecialchars($category["NAME"]) . "</b></td>\n";
                        else
                            echo "          <td valign=\"middle\" width=\"10%\" class=\"BodyText\"><img src=\"/images/spacer.gif\" border=\"0\" width=\"" . ($level * 12) . "\" height=\"8\" />+ " . htmlspecialchars($category["NAME"]) . "</td>\n";

                        echo "        </tr>\n";
                    }

                    $nextlevel = $level + 1;
                    DoBuildCategories($directory_rec_id, $category["REC_ID"], $nextlevel);
                }

                if (($parent_rec_id == 0) AND ($lineout == TRUE)) {
                    echo "        <tr>\n";
                    echo "          <td valign=\"middle\" width=\"10%\" class=\"BodyText\"><img src=\"/images/spacer.gif\" border=\"0\" width=\"4\" height=\"4\" /></td>\n";
                    echo "        </tr>\n";
                }
            }
        }
    }

    DoBuildCategories($shadow_directory_id, 0, 0);
}

echo "      </table>\n";
echo "    </td>\n";
echo "  </tr>\n";
echo "</table>\n";

// ACCEPT CONDITIONS
echo "<table border=\"0\" cellpadding=\"4\" cellspacing=\"0\">\n";
echo "  <tr>\n";
echo "    <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"785\" height=\"8\" /></td>\n";
echo "  </tr>\n";
echo "  <tr>\n";
echo "    <td class=\"BodyText\"><b><u>Acceptance</u></b></td>\n";
echo "  </tr>\n";
echo "  <tr>\n";
echo "    <td>\n";

echo "      <form id=\"proofsheet\" onsubmit=\"DoSendToProduction(this); return false;\">\n";
echo "        <table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\n";
echo "          <tr>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"120\" height=\"8\" /></td>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"685\" height=\"8\" /></td>\n";
echo "          </tr>\n";
echo "      	<tr>\n";
echo "          <td valign=\"top\" class=\"BodyText\"><br/>Full Name<font color=\"#FF0000\"><b>*</b></font></td>\n";
echo "          <td valign=\"top\" class=\"BodyText\">Name <i>insert the name of the person who approved the proof sheet</i><br/><input type=\"text\" name=\"fullname\" value=\"\" size=\"64\" maxlength=\"255\" /></td>\n";
echo "  	    </tr>\n";
echo "          <tr>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"100%\" height=\"8\" /></td>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"100%\" height=\"8\" /></td>\n";
echo "          </tr>\n";
echo "      	<tr>\n";
echo "          <td valign=\"top\" class=\"BodyText\"><br/>Position<font color=\"#FF0000\"><b>*</b></font></td>\n";
echo "          <td valign=\"top\" class=\"BodyText\">eg <i>Brand Manager, Administrator, Agency etc...</i><br/><input type=\"text\" name=\"position\" value=\"\" size=\"64\" maxlength=\"255\" /></td>\n";
echo "  	    </tr>\n";
echo "          <tr>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"100%\" height=\"8\" /></td>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"100%\" height=\"8\" /></td>\n";
echo "          </tr>\n";
echo "      	<tr>\n";
echo "          <td valign=\"top\" class=\"BodyText\"></td>\n";
echo "          <td valign=\"top\" class=\"BodyText\">\n";
echo "            <table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\n";
echo "              <tr>\n";
echo "                <td valign=\"top\" class=\"BodyText\"><input type=\"checkbox\" name=\"agree\" /></td>\n";
echo "                <td valign=\"top\" class=\"BodyText\">The information provided here from companies listing in this directory is accepted in good faith by MediaWeb and on the basis that it does not knowingly infringe any other organizations' copyrights, intellectual property rights or agency agreements.  In the case of any disputes the listings will be removed until a resolution is reached.<br><br>I hereby confirm that I have read and understand the above statement.</td>\n";
echo "              </tr>\n";
echo "            </table>\n";
echo "  	    </tr>\n";
echo "          <tr>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"100%\" height=\"8\" /></td>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"100%\" height=\"8\" /></td>\n";
echo "          </tr>\n";
echo "          <tr>\n";
echo "            <td></td>\n";
echo "            <td align=\"right\"><input type=\"submit\" value=\"Submit\" /></td>\n";
echo "          </tr>\n";
echo "        </table>\n";
echo "      </form>\n";

echo "    </td>\n";
echo "  </tr>\n";
echo "</table>\n";

echo "    </td>\n";
echo "  </tr>\n";
echo "</table>\n";
?>
