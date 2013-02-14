<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . "/common/sessionhandler.php");
include_once("../config.php");
//  include_once($path_doc_root."/include/db_class.php");
//  include_once($path_doc_root."/include/tpldb_class.php");
include_once($path_doc_root . "/dashboard/initialize-callbacks.php");
include_once "../common/util/DBTransaction.php";
include_once "../common/dao/TplShadowSupplierDAO.php";
$dbtrans = new DBTransaction();
$dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
$tplshadowsupplierdao = new TplShadowSupplierDAO();


echo "<table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\n";
echo "  <tr>\n";
echo "    <td valign=\"top\" width=\"100%\" class=\"BodyText\">\n";

//$tpl_db = new tpldb;
//$supplier = $tpl_db->getShadowRecord("tpl_shadow_supplier", $session_maintain->get_client_field("shadow_supplier_rec_id", $instanceID, "client_data"));
$array = array($GLOBALS["client_id"]);
$shadow_suppliers = $tplshadowsupplierdao->selectSupplierList($dbconn, $array);
$supplier = $shadow_suppliers[0];
if ($shadow_root["STATE"] == 'OPEN') {
    $readonly = "";
} else {
    $readonly = "readonly='1' disabled='true'";
}

echo "      <form id=\"supplier_contact_details\">\n";
echo "        <table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\n";
echo "          <tr>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"150\" height=\"8\" /></td>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"655\" height=\"8\" /></td>\n";
echo "          </tr>\n";
echo "          <tr>\n";
echo "            <td valign=\"top\" class=\"BodyText\"><br/>Telephone Number <font color=\"#FF0000\"><b>*</b></font></td>\n";
echo "            <td valign=\"top\" class=\"BodyText\">eg <i>09 222 2222</i> or <i>+64 9 222 2222</i><br/><input type=\"text\" name=\"telephone_no\" $readonly value=\"" . htmlspecialchars($supplier["TELEPHONE_NO"]) . "\" size=\"24\" maxlength=\"48\" /></td>\n";
echo "          </tr>\n";
echo "          <tr>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"100%\" height=\"8\" /></td>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"100%\" height=\"8\" /></td>\n";
echo "          </tr>\n";
echo "          <tr>\n";
echo "            <td valign=\"top\" class=\"BodyText\"><br/>Freephone Number</td>\n";
echo "            <td valign=\"top\" class=\"BodyText\">eg <i>0800 ABC ABC</i> or <i>0800 222 222</i><br/><input type=\"text\" name=\"free_telephone_no\" $readonly value=\"" . htmlspecialchars($supplier["FREE_TELEPHONE_NO"]) . "\" size=\"24\" maxlength=\"48\" /></td>\n";
echo "          </tr>\n";
echo "          <tr>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"100%\" height=\"8\" /></td>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"100%\" height=\"8\" /></td>\n";
echo "          </tr>\n";
echo "          <tr>\n";
echo "            <td valign=\"top\" class=\"BodyText\"><br/>Fax Number</td>\n";
echo "            <td valign=\"top\" class=\"BodyText\">eg <i>09 222 2222</i> or <i>+64 9 222 2222</i><br/><input type=\"text\" name=\"fax_no\" $readonly value=\"" . htmlspecialchars($supplier["FAX_NO"]) . "\" size=\"24\" maxlength=\"48\" /></td>\n";
echo "          </tr>\n";
echo "          <tr>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"100%\" height=\"8\" /></td>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"100%\" height=\"8\" /></td>\n";
echo "          </tr>\n";
echo "          <tr>\n";
echo "            <td valign=\"top\" class=\"BodyText\"><br/>Freefax Number</td>\n";
echo "            <td valign=\"top\" class=\"BodyText\">eg <i>0800 ABC ABC</i> or <i>0800 222 222</i><br/><input type=\"text\" name=\"free_fax_no\" $readonly value=\"" . htmlspecialchars($supplier["FREE_FAX_NO"]) . "\" size=\"24\" maxlength=\"48\" /></td>\n";
echo "          </tr>\n";
echo "          <tr>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"100%\" height=\"8\" /></td>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"100%\" height=\"8\" /></td>\n";
echo "          </tr>\n";
echo "          <tr>\n";
echo "            <td valign=\"top\" class=\"BodyText\"><br/>Email Address</td>\n";
echo "            <td valign=\"top\" class=\"BodyText\">eg <i>info@abc.co.nz</i><br/><input type=\"text\" name=\"email_address\" $readonly value=\"" . htmlspecialchars($supplier["EMAIL_ADDRESS"]) . "\" size=\"32\" maxlength=\"255\" /></td>\n";
echo "          </tr>\n";
echo "          <tr>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"100%\" height=\"8\" /></td>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"100%\" height=\"8\" /></td>\n";
echo "          </tr>\n";
echo "          <tr>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"100%\" height=\"16\" /></td>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"100%\" height=\"16\" /></td>\n";
echo "          </tr>\n";
echo "          <tr>\n";
echo "            <td><input type=\"hidden\" name=\"tabsel\" value=\"supplier-contact-details.php\" /></td>\n";
echo "            <td align=\"left\"><input type=\"button\" value=\"Save Changes\"  onclick=\"DoSaveSupplierContactDetails(this.form); return false;\"/></td>\n";
echo "          </tr>\n";
echo "        </table>\n";
echo "      </form>\n";
echo "    </td>\n";
echo "  </tr>\n";
echo "</table>\n";
?>
