<?php

if (!isset($_SESSION))
    session_start();

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . "/common/sessionhandler.php");
include_once("../config.php");
//  include_once($path_doc_root."/include/db_class.php");
//  include_once($path_doc_root."/include/tpldb_class.php");
include_once "../common/util/DBTransaction.php";
include_once "../common/dao/TplShadowSupplierDAO.php";
$dbtrans = new DBTransaction();
$dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
$tplshadowsupplierdao = new TplShadowSupplierDAO();

echo "<table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\n";
echo "  <tr>\n";
echo "    <td valign=\"top\" width=\"100%\" class=\"BodyText\">\n";

//    $tpl_db = new tpldb;
//    $supplier=$tpl_db->getShadowRecord("tpl_shadow_supplier",$shadow_supplier_rec_id);
$array = array($GLOBALS["client_id"]);
$shadow_suppliers = $tplshadowsupplierdao->selectSupplierList($dbconn, $array);
$supplier = $shadow_suppliers[0];

if ($shadow_root["STATE"] == 'OPEN') {
    $readonly = "";
} else {
    $readonly = "readonly='1' disabled='true'";
}

echo "      <form id=\"supplier_website_details\">\n";
echo "        <table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\n";
echo "          <tr>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"120\" height=\"8\" /></td>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"685\" height=\"8\" /></td>\n";
echo "          </tr>\n";
echo "          <tr>\n";
echo "            <td valign=\"top\" class=\"BodyText\"><br/>Company Website URL</td>\n";
echo "            <td valign=\"top\" class=\"BodyText\">eg: <i>www.abc-company.com</i><br/>";
echo "				<input type=\"text\" name=\"website_address\" $readonly value=\"" . htmlspecialchars($supplier["WEBSITE_ADDRESS"]) . "\" size=\"48\" maxlength=\"255\" /></td>\n";
echo "          </tr>\n";
echo "          <tr>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"100%\" height=\"8\" /></td>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"100%\" height=\"8\" /></td>\n";
echo "          </tr>\n";
echo "          <tr>\n";
echo "            <td valign=\"top\" class=\"BodyText\"><br/>Facebook Page URL</td>\n";
echo "            <td valign=\"top\" class=\"BodyText\">eg: <i>www.facebook.com/abc-company</i><br/>";
echo "				<input type=\"text\" name=\"facebook_address\" $readonly value=\"" . htmlspecialchars($supplier["FACEBOOK_ADDRESS_URL"]) . "\" size=\"48\" maxlength=\"255\" /></td>\n";
echo "          </tr>\n";
echo "          <tr>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"100%\" height=\"8\" /></td>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"100%\" height=\"8\" /></td>\n";
echo "          </tr>\n";
echo "          <tr>\n";
echo "            <td valign=\"top\" class=\"BodyText\"><br/>Twitter Page URL</td>\n";
echo "            <td valign=\"top\" class=\"BodyText\">eg: <i>twitter.com/abc-company</i><br/>";
echo "				<input type=\"text\" name=\"twitter_address\" $readonly value=\"" . htmlspecialchars($supplier["TWITTER_ADDRESS_URL"]) . "\" size=\"48\" maxlength=\"255\" /></td>\n";
echo "          </tr>\n";
echo "          <tr>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"100%\" height=\"8\" /></td>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"100%\" height=\"8\" /></td>\n";
echo "          </tr>\n";
echo "          <tr>\n";
echo "            <td valign=\"top\" class=\"BodyText\"><br/>LinkedIn Page URL</td>\n";
echo "            <td valign=\"top\" class=\"BodyText\">eg: <i>linkedin.com/abc-company</i><br/>";
echo "				<input type=\"text\" name=\"linkedin_address\" $readonly value=\"" . htmlspecialchars($supplier["LINKEDIN_ADDRESS_URL"]) . "\" size=\"48\" maxlength=\"255\" /></td>\n";
echo "          </tr>\n";
echo "          <tr>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"100%\" height=\"8\" /></td>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"100%\" height=\"8\" /></td>\n";
echo "          </tr>\n";
echo "          <tr>\n";
echo "            <td valign=\"top\" class=\"BodyText\"><br/>YouTube Page URL</td>\n";
echo "            <td valign=\"top\" class=\"BodyText\">eg <i>youtube.com/abc</i><br/>";
echo "				<input type=\"text\" name=\"youtube_address\" $readonly value=\"" . htmlspecialchars($supplier["YOUTUBE_ADDRESS_URL"]) . "\" size=\"48\" maxlength=\"255\" /></td>\n";
echo "          </tr>\n";
echo "          <tr>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"100%\" height=\"8\" /></td>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"100%\" height=\"8\" /></td>\n";
echo "          </tr>\n";
echo "          <tr>\n";
echo "            <td valign=\"top\" class=\"BodyText\"><br/>FourSquare URL</td>\n";
echo "            <td valign=\"top\" class=\"BodyText\">eg <i>www.fousquare.com/abc-company.com</i><br/>";
echo "				<input type=\"text\" name=\"foursquare_address\" $readonly value=\"" . htmlspecialchars($supplier["FOURSQUARE_ADDRESS_URL"]) . "\" size=\"48\" maxlength=\"255\" /></td>\n";
echo "          </tr>\n";
echo "          <tr>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"100%\" height=\"16\" /></td>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"100%\" height=\"16\" /></td>\n";
echo "          </tr>\n";
echo "          <tr>\n";
echo "            <td><input type=\"hidden\" name=\"tabsel\" value=\"supplier-website-details.php\" /></td>\n";
echo "            <td align=\"left\"><input type=\"button\" value=\"Save Changes\"  onclick=\"DoSaveSupplierWebsiteDetails(this.form); return false;\"/></td>\n";
echo "          </tr>\n";
echo "        </table>\n";
echo "      </form>\n";
echo "    </td>\n";
echo "  </tr>\n";
echo "</table>\n";
?>
