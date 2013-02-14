<?php
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once ($path_doc_root . "/config.php");
include_once($path_doc_root . "/common/sessionhandler.php");
include_once $path_doc_root . "/common/util/DBTransaction.php";
include_once $path_doc_root . "/common/dao/TplSupplierMediaDAO.php";
include_once $path_doc_root . "/common/dao/TplShadowSupplierBrandMediaDAO.php";
include_once $path_doc_root . "/common/dao/TplShadowSupplierBrandDAO.php";


$supplierid = $_GET["supplierid"];
$categoryid = $_GET["categoryid"];
$recid = $_GET["rec_id"];
$dbtrans = new DBTransaction();
$dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
//error_log("Recid...................:".$recid);
if ($recid != 0) {
    $array = array($recid);
    $tplshadowsupplierbranddao = new TplShadowSupplierBrandDAO();
    $supplierbrand = $tplshadowsupplierbranddao->brandSelect($dbconn, $array);
    $tplshadowsupplierbrandmediadao = new TplShadowSupplierBrandMediaDAO();
    $upplierbrandmedia = $tplshadowsupplierbrandmediadao->select($dbconn, $array);
    //error_log("Supplier Brand...................:".$supplierbrand[0]["REC_ID"]);
    //$supplierbrand[0]["REC_ID"];
}

$tplsuppliermediadao = new TplSupplierMediaDAO();
$array = array($supplierid, "logos");
$supplierlogos = $tplsuppliermediadao->select($dbconn, $array);
//if ($active_brand_rec_id != 0) {
//    $supplierbrand = $tpl_db->getShadowRecord("tpl_shadow_supplier_brand", $active_brand_rec_id);
//}
//$categoryproductmedia
?>



<script type="text/javascript">
    $(document).ready(function()
    {        
        $('#BrandName').autocomplete(
        {            
            source: "/common/autocomplete.php",
            minLength: 2
        });
         
    });
    $(function() {       
        $("#savebutton").click(function() {
            $('#branddetailaction').val("brandaddremove"); 
            if($("#BrandName").val()==""){
                alert("Brand name should be mandatory.");  
                return false;  
            } 
            if(!$('#auth').attr('checked')){
                alert("You must confirm your authorization to add this brand before you can do so.");
                return false;  
            }             
            if($('#logo_listing').attr('checked')){
                $('#logo_listing').val("1");
            }            
            $.post( 
            "/common/callbacks/categoryproduct.php",
            $("#supplier_brand_detail").serialize(),
            function(data) {
                if($.trim(data)=='Success'){
                    $('#BrandName').val('');  
                    $('#auth').attr('checked', false);
                    $('#logo_listing').attr('checked', false);
                    $("#imagelist").removeAttr("checked");
                    //$('#imagelist').attr('checked', false);
                    $('#recid').val('0');   
                    $('#action').val('brandinsert');
                    alert("Succesfully saved.");
                }else{                  
                    alert("Record is not saved.");  
                }
                            
            }
        );
            return false;
        });
    });
</script>     

<table width="100%" border="0" cellpadding="24" cellspacing="0">
    <tr>
        <td valign="top" width="100%" class="BodyText">
            <form id="supplier_brand_detail" onsubmit="DoSaveSupplierBrandDetails(this); return false;">
                <table width="100%" border="0" cellpadding="0" cellspacing="0">
                    <tr>
                        <td><img src="/images/spacer.gif" border="0" width="120" height="8" /></td>
                        <td><img src="/images/spacer.gif" border="0" width="485" height="8" /></td>
                    </tr>
                    <tr>
                        <td><img src="/images/spacer.gif" border="0" width="120" height="8" /></td>
                        <td class="BodyText">Please enter your brand name in the field below.  Please type a few characters that exist in the brand name and use the drop down list to select the brand from the list.  If you are adding a new brand, that is not in the list, then please type the brand in the field below and click save.</td>
                    </tr>
                    <tr>
                        <td><img src="/images/spacer.gif" border="0" width="120" height="8" /></td>
                        <td><img src="/images/spacer.gif" border="0" width="485" height="8" /></td>
                    </tr>
                    <tr>
                        <td valign="top" class="BodyText tableLabel"><br/>Brand Name</td>
                        <td valign="top" class="BodyText">eg: <i>Toyota</i><br/>

                            <input class="ui_input" type="text" name="BrandName" id="BrandName" autocomplete="off" value="<?php if (count($supplierbrand) > 0) echo $supplierbrand[0]["NAME"] ?>" size="64" maxlength="255" />

                        </td>
                    </tr>
                    <tr>
                        <td><img src="/images/spacer.gif" border="0" width="120" height="8" /></td>
                        <td><img src="/images/spacer.gif" border="0" width="485" height="8" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <?php
                        $checked = '';
                        echo "Count:" . count($supplierbrand);
                        if (isset($supplierbrand)) {
                            if ($supplierbrand[0]['IS_LOGO_LISTING'] == "1")
                                $checked = 'checked';
                        }
                        ?>

                        <td valign="middle" class="BodyText"><input type="checkbox" value="0" id="logo_listing" name="logo_listing" <?php echo $checked; ?> />Logo Listing</td>
                    </tr>
                    <tr>
                        <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                        <td><img src="/images/spacer.gif" border="0" width="100%" height="8" /></td>
                    </tr>

                    <tr>
                        <td></td>
                        <td valign="top" class="BodyText"><input type="checkbox" name="auth" id="auth" />I hereby confirm that I am authorized to sell or represent this brand.</td>
                    </tr>

                    <tr>
                        <td><img src="/images/spacer.gif" border="0" width="100%" height="24" /></td>
                        <td><img src="/images/spacer.gif" border="0" width="100%" height="24" /></td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <table  width="100%">

                                <tr>
                                    <td></td>
                                    <td align="left">

                                        <div id="photos" width="100%">
                                            <div>
                                                <table width=100% border=0 cellpadding=0 cellspacing=0>
                                                    <tr>
                                                        <?php foreach ($supplierlogos as $key => $supplierlogo) { ?>      
                                                            <td valign=top  class=BodyText> <input type="radio" id ="imagelist" name="imagelist" value="<?php echo $supplierlogo["REC_ID"] ?>" <?php
                                                        if (in_array($supplierlogo["REC_ID"], $upplierbrandmedia)) {
                                                            echo "checked";
                                                        }
                                                            ?>/><?php echo $supplierlogo["MEDIA_NAME"] ?></td>   
                                                            <?php } ?>   
                                                    </tr>
                                                    <tr>
                                                        <?php foreach ($supplierlogos as $key => $supplierlogo) { ?>        
                                                            <td valign=top  ><img src="/media/logos/<?php echo $supplierlogo["MEDIA_NAME"] ?>" height="85" alt="<?php echo $supplierlogo["MEDIA_NAME"] ?>"/></td>
                                                        <?php } ?>   
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>


                                    </td>
                                </tr>



                            </table>


                        </td>

                    </tr>
                    <tr>
                        <td><img src="/images/spacer.gif" border="0" width="100%" height="24" /></td>
                        <td><img src="/images/spacer.gif" border="0" width="100%" height="24" /></td>
                    </tr>
                    <tr>
                        <td><button id="savebutton" name="savebutton">Save Changes </button></td>
                        <td align="left"></td>
                    </tr>
                </table>
                <input type="hidden" value="brandassign" id="branddetailaction" name="action"> 
                <input type="hidden" value="<?php echo $recid ?>" id="recid" name="recid">
                <input type="hidden" value="<?php echo $categoryid ?>" id="catogoryid" name="catogoryid">
                <input type="hidden" value="<?php echo $supplierid ?>" id="supplierid" name="supplierid">  
            </form>

        </td>
    </tr>
</table>
