<?php
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . "/common/sessionhandler.php");
include_once($path_doc_root . "/config.php");
//include_once($path_doc_root . "/include/db_class.php");
//include_once($path_doc_root . "/include/tpldb_class.php");
include_once "../common/util/DBTransaction.php";
include_once "../common/dao/TplShadowSupplierDAO.php";
include_once "../common/dao/TplSupplierTypeDAO.php";
$dbtrans = new DBTransaction();
$dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
$tplshadowsupplierdao = new TplShadowSupplierDAO();
?>
<script language="javascript"> 
    //DoSelectTab("supplier-physical-address.php");   
    af_initialise(document.getElementById("address_complete"), show_address);   
    initialize_map();
   
</script> 



  
    <table width="100%" border="0" cellpadding="0" cellspacing="0">
        <tr>
            <td valign="top" width="100%" class="BodyText">
                <?php
//                $tpl_db = new tpldb;
//                $supplier = $tpl_db->getShadowRecord("tpl_shadow_supplier", $shadow_supplier_rec_id);
                $array = array($GLOBALS["client_id"]);
                $shadow_suppliers = $tplshadowsupplierdao->selectSupplierList($dbconn, $array);
                $supplier=$shadow_suppliers[0];               

                if ($shadow_root["STATE"] == 'OPEN') {
                    $readonly = "";
                } else {
                    $readonly = "readonly='1' disabled='true'";
                }
                ?>

                <div id="info" style="width: 500px; height: 300px; position:relative; float: right; left: -130px; top: -8px; display: none;"></div>
                <div id="map_canvas" style="width: 300px; height: 300px; position:relative; float: right; left: -30px; top: 167px; border: thin solid #000"></div>
                <div id="form_container" style="float:left; position: relative; top: -300px;">
                    <form id="supplier_physical_address">
                        <table width="100%" border="0" cellpadding="0" cellspacing="0">
                            <tr>
                                <td><img src="/images/spacer.gif" border="0" width="175" height="8" /></td>
                                <td><img src="/images/spacer.gif" border="0" width="630" height="8" /></td>
                            </tr>
                            <tr>
                                <td valign="top" class="BodyText"><br/>Auto Complete Search </td>
                                <td valign="top" class="BodyText">eg <i>enter the first line of your address (AbleTech, AddressFinder.co.nz Technology)</i><br/>
                                    <input id="address_complete" class="ac_input" style="width: 500px;" type="text" name="physical_address_complete" <?php echo $readonly ?> value="<?php echo htmlspecialchars($supplier["PHYSICAL_ADDRESS_COMPLETE"]) ?>" size="150" maxlength="200" autocomplete="on" />
                                </td>
                            </tr>
                            <tr>
                                <td valign="top" class="BodyText"><br/>Physical Building Address</td>
                                <td valign="top" class="BodyText">eg <i>Level 12</i><br/>
                                    <input id="physical_address_building_address" type="text" name="physical_address_building_address" <?php echo $readonly ?> value="<?php echo htmlspecialchars($supplier["PHYSICAL_ADDRESS_BUILDING_ADDRESS"]) ?>" size="32" maxlength="255" /></td>
                            </tr>
                            <tr>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            </tr>
                            <tr>
                                <td valign="top" class="BodyText"><br/>Physical Street Address <font color="#FF0000"><b>*</b></font></td>
                                <td valign="top" class="BodyText">eg <i>123 Some Street</i><br/>
                                    <input id="physical_address_street_address" type="text" name="physical_address_street_address" <?php echo $readonly ?> value="<?php echo htmlspecialchars($supplier["PHYSICAL_ADDRESS_STREET_ADDRESS"]) ?>" size="44" maxlength="255" /></td>
                            </tr>
                            <tr>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            </tr>
                            <tr>
                                <td valign="top" class="BodyText"><br/>Physical Suburb</td>
                                <td valign="top" class="BodyText">eg <i>Greenlane</i><br/>
                                    <input id="physical_address_suburb" type="text" name="physical_address_suburb" <?php echo $readonly ?> value="<?php echo htmlspecialchars($supplier["PHYSICAL_ADDRESS_SUBURB"]) ?>" size="32" maxlength="255" /></td>
                            </tr>
                            <tr>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            </tr>
                            <tr>
                                <td valign="top" class="BodyText"><br/>Physical City/Town <font color="#FF0000"><b>*</b></font></td>
                                <td valign="top" class="BodyText">eg <i>Auckland</i><br/>
                                    <input id="physical_address_city" type="text" name="physical_address_city" <?php echo $readonly ?> value="<?php echo htmlspecialchars($supplier["PHYSICAL_ADDRESS_CITY"]) ?>" size="32" maxlength="255" /></td>
                            </tr>
                            <tr>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            </tr>
                            <tr>
                                <td valign="top" class="BodyText"><br/>Physical State/Region <font color="#FF0000"><b>*</b></font></td>
                                <td valign="top" class="BodyText">eg <i>NSW</i><br/>
                                    <input id="physical_address_state" type="text" name="physical_address_state" <?php echo $readonly ?> value="<?php echo htmlspecialchars($supplier["PHYSICAL_ADDRESS_STATE"]) ?>" size="32" maxlength="255" /></td>
                            </tr>
                            <tr>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            </tr>
                            <tr>
                                <td valign="top" class="BodyText"><br/>Physical Post Code</td>
                                <td valign="top" class="BodyText">eg <i>1182</i><br/>
                                    <input id="physical_address_post_code" type="text" name="physical_address_post_code" <?php echo $readonly ?> value="<?php echo htmlspecialchars($supplier["PHYSICAL_ADDRESS_POST_CODE"]) ?>" size="12" maxlength="12" /></td>
                            </tr>
                            <tr>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                            </tr>
                            <tr>
                                <td valign="top" class="BodyText"><br/>Physical Country</td>
                                <td valign="top" class="BodyText">eg <i>New Zealand</i><br/>
                                    <input id="physical_address_country" type="text" name="physical_address_country" <?php echo $readonly ?> value="<?php echo htmlspecialchars($supplier["PHYSICAL_ADDRESS_COUNTRY"]) ?>" size="32" maxlength="255" /></td>
                            </tr>
                            <tr>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="16" /></td>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="16" /></td>
                            </tr>
                            <tr>
                                <td valign="top" class="BodyText"><br/>Delivery Point ID (DPID)</td>
                                <td valign="top" class="BodyText">eg <i>NZ Post DPID</i><br/>
                                    <input id="dpid" type="text" name="physical_address_dpid" <?php echo $readonly ?> value="<?php echo htmlspecialchars($supplier["PHYSICAL_ADDRESS_DPID"]) ?>" size="32" maxlength="255" /></td>
                            </tr>
                            <tr>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="16" /></td>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="16" /></td>
                            </tr>    
                            <tr>
                                <td valign="top" class="BodyText"><br/>Address Finder ID (PXID)</td>
                                <td valign="top" class="BodyText">eg <i>Address Finder ID</i><br/>
                                    <input id="pxid" type="text" name="physical_address_pxid" <?php echo $readonly ?> value="<?php echo htmlspecialchars($supplier["PHYSICAL_ADDRESS_PXID"]) ?>" size="32" maxlength="255" /></td>
                            </tr>
                            <tr>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="16" /></td>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="16" /></td>
                            </tr>
                            <tr> 
                                <td valign="top" class="BodyText"><br/>Physical Latitude [X]</td>
                                <td valign="top" class="BodyText">eg <i>"x": "174.775751850054"</i><br/>
                                    <input id="longitude" type="text" name="physical_address_longitude" <?php echo $readonly ?> value="<?php echo htmlspecialchars($supplier["PHYSICAL_ADDRESS_LONGITUDE"]) ?>" size="32" maxlength="255" onkeypress="return restrictCharacters(this, event, integerOnly);"/></td>
                            </tr>
                            <tr>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="16" /></td>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="16" /></td>
                            </tr>     
                            <tr>
                                <td valign="top" class="BodyText"><br/>Physical Longitude [Y]</td>
                                <td valign="top" class="BodyText">eg <i>"y": "-41.2790160514851"</i><br/>
                                    <input id="latitude" type="text" name="physical_address_latitude" <?php echo $readonly ?> value="<?php echo htmlspecialchars($supplier["PHYSICAL_ADDRESS_LATITUDE"]) ?>" size="32" maxlength="255" onkeypress="return restrictCharacters(this, event, integerOnly);"/></td>
                            </tr>
                            <tr>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="16" /></td>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="16" /></td>
                            </tr>      
                            <tr>
                                <td valign="top" class="BodyText"><br/>Physical Height [Z]</td>
                                <td valign="top" class="BodyText">eg <i>"z": "15"</i><br/>
                                    <input id="height" type="text" name="physical_address_height" <?php echo $readonly ?> value="<?php echo htmlspecialchars($supplier["PHYSICAL_ADDRESS_HEIGHT"]) ?>" size="32" maxlength="255" onkeypress="return restrictCharacters(this, event, integerOnly);"/></td>
                            </tr>
                            <tr>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="16" /></td>
                                <td><img src="/images/spacer.gif" border="0" width="100%" height="16" /></td>
                            </tr>
                            <tr>
                                <td><input type="hidden" name="tabsel" value="supplier-physical-address.php" /></td>
                                <td align="left"><input class="btnSave" type="button" value="Save Changes" onclick="DoSaveSupplierPhysicalAddress(this.form); return false;"/><input class="btnSave" type="button" value="Reset" onclick="resetForm('supplier_physical_address')"/></td>
                                
                            </tr>
                        </table>
                    </form>
                </div>
            </td>
        </tr>
    </table>

   

