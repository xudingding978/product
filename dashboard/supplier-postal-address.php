<?php

if (!isset($_SESSION))
    session_start();

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . "/config.php");
//  include_once($path_doc_root."/include/db_class.php");
//  include_once($path_doc_root."/include/tpldb_class.php");
include_once($path_doc_root . "/dashboard/initialize-callbacks.php");
include_once($path_doc_root . "/common/sessionhandler.php");
include_once "../common/util/DBTransaction.php";
include_once "../common/dao/TplShadowSupplierDAO.php";
$dbtrans = new DBTransaction();
$dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
$tplshadowsupplierdao = new TplShadowSupplierDAO();

echo "<table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\n";
echo "  <tr>\n";
echo "    <td valign=\"top\" width=\"100%\" class=\"BodyText\">\n";
$array = array($GLOBALS["client_id"]);
$shadow_suppliers = $tplshadowsupplierdao->selectSupplierList($dbconn, $array);
$supplier = $shadow_suppliers[0];
//$tpl_db = new tpldb;
//$supplier = $tpl_db->getShadowRecord("tpl_shadow_supplier", $shadow_supplier_rec_id);

if ($shadow_root["STATE"] == 'OPEN') {
    $readonly = "";
} else {
    $readonly = "readonly='1' disabled='true'";
}

echo "      <form id=\"supplier_postal_address\">\n";
echo "        <table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\n";
echo "          <tr>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"175\" height=\"8\" /></td>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"630\" height=\"8\" /></td>\n";
echo "          </tr>\n";
echo "          <tr>\n";
echo "            <td valign=\"top\" class=\"BodyText\"><br/>Postal Building Address</td>\n";
echo "            <td valign=\"top\" class=\"BodyText\">eg <i>Level 12</i><br/><input type=\"text\" name=\"postal_address_building_address\" $readonly value=\"" . htmlspecialchars($supplier['POSTAL_ADDRESS_BUILDING_ADDRESS']) . "\" size=\"32\" maxlength=\"255\" /></td>\n";
echo "          </tr>\n";
echo "          <tr>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"100%\" height=\"8\" /></td>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"100%\" height=\"8\" /></td>\n";
echo "          </tr>\n";
echo "          <tr>\n";
echo "            <td valign=\"top\" class=\"BodyText\"><br/>Postal Street/Box Address <font color=\"#FF0000\"><b>*</b></font></td>\n";
echo "            <td valign=\"top\" class=\"BodyText\">eg <i>123 Some Street</i> or <i>PO Box 12345</i><br/><input type=\"text\" name=\"postal_address_street_address\" $readonly value=\"" . htmlspecialchars($supplier['POSTAL_ADDRESS_STREET_ADDRESS']) . "\" size=\"64\" maxlength=\"255\" /></td>\n";
echo "          </tr>\n";
echo "          <tr>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"100%\" height=\"8\" /></td>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"100%\" height=\"8\" /></td>\n";
echo "          </tr>\n";
echo "          <tr>\n";
echo "            <td valign=\"top\" class=\"BodyText\"><br/>Postal Suburb</td>\n";
echo "            <td valign=\"top\" class=\"BodyText\">eg <i>Greenlane</i><br/><input type=\"text\" name=\"postal_address_suburb\" $readonly value=\"" . htmlspecialchars($supplier['POSTAL_ADDRESS_SUBURB']) . "\" size=\"32\" maxlength=\"255\" /></td>\n";
echo "          </tr>\n";
echo "          <tr>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"100%\" height=\"8\" /></td>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"100%\" height=\"8\" /></td>\n";
echo "          </tr>\n";
echo "          <tr>\n";
echo "            <td valign=\"top\" class=\"BodyText\"><br/>Postal City/Town <font color=\"#FF0000\"><b>*</b></font></td>\n";
echo "            <td valign=\"top\" class=\"BodyText\">eg <i>Auckland</i><br/><input type=\"text\" name=\"postal_address_city\" $readonly value=\"" . htmlspecialchars($supplier['POSTAL_ADDRESS_CITY']) . "\" size=\"32\" maxlength=\"255\" /></td>\n";
echo "          </tr>\n";
echo "          <tr>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"100%\" height=\"8\" /></td>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"100%\" height=\"8\" /></td>\n";
echo "          </tr>\n";
echo "          <tr>\n";
echo "            <td valign=\"top\" class=\"BodyText\"><br/>Postal State</td>\n";
echo "            <td valign=\"top\" class=\"BodyText\">eg <i>NSW</i><br/><input type=\"text\" name=\"postal_address_state\" $readonly value=\"" . htmlspecialchars($supplier['POSTAL_ADDRESS_STATE']) . "\" size=\"32\" maxlength=\"255\" /></td>\n";
echo "          </tr>\n";
echo "          <tr>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"100%\" height=\"8\" /></td>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"100%\" height=\"8\" /></td>\n";
echo "          </tr>\n";
echo "          <tr>\n";
echo "            <td valign=\"top\" class=\"BodyText\"><br/>Postal Post Code <font color=\"#FF0000\"><b>*</b></font></td>\n";
echo "            <td valign=\"top\" class=\"BodyText\">eg <i>1182</i><br/><input type=\"text\" name=\"postal_address_post_code\" $readonly value=\"" . htmlspecialchars($supplier['POSTAL_ADDRESS_POST_CODE']) . "\" size=\"12\" maxlength=\"12\" /></td>\n";
echo "          </tr>\n";
echo "          <tr>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"100%\" height=\"8\" /></td>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"100%\" height=\"8\" /></td>\n";
echo "          </tr>\n";
echo "          <tr>\n";
echo "            <td valign=\"top\" class=\"BodyText\"><br/>Postal Country</td>\n";
echo "            <td valign=\"top\" class=\"BodyText\">eg <i>New Zealand</i><br/><input type=\"text\" name=\"postal_address_country\" $readonly value=\"" . htmlspecialchars($supplier['POSTAL_ADDRESS_COUNTRY']) . "\" size=\"32\" maxlength=\"255\" /></td>\n";
echo "          </tr>\n";
echo "          <tr>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"100%\" height=\"16\" /></td>\n";
echo "            <td><img src=\"/images/spacer.gif\" border=\"0\" width=\"100%\" height=\"16\" /></td>\n";
echo "          </tr>\n";
echo "          <tr>\n";
echo "            <td><input type=\"hidden\" name=\"tabsel\" value=\"supplier-postal-address.php\" /></td>\n";
echo "            <td align=\"left\"><input type=\"button\" value=\"Save Changes\" onclick=\"DoSaveSupplierPostalAddress(this.form); return false;\"/></td>\n";
echo "          </tr>\n";
echo "        </table>\n";
echo "      </form>\n";
echo "    </td>\n";
echo "  </tr>\n";
echo "</table>\n";
?>
