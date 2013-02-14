<?php
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . "/common/sessionhandler.php");
include_once($path_doc_root . "/config.php");
include_once($path_doc_root . "/include/db_class.php");
include_once($path_doc_root . "/include/tpldb_class.php");
include_once ($path_doc_root . "/include/KoolPHPSuite/KoolAjax/koolajax.php");
require $path_doc_root . "/include/KoolPHPSuite/KoolImageView/koolimageview.php";
include_once "../../common/util/DBTransaction.php";
include_once "../../common/dao/TplSupplierMediaDAO.php";


$dbtrans = new DBTransaction();
$dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
$tplsuppliermediadao = new TplSupplierMediaDAO();
$process_type = "";
$table_name = "";
$field_name = "";

if ($GLOBALS["active_function_type"] == 'C') {
    $process_type = "category";
    $table_name = "tpl_supplier_productcategory_media";
    $field_name = "SUPPLIER_PRODUCTCATEGORY_REC_ID";
} else {
    $process_type = "product";
    $table_name = "tpl_supplier_product_media";
    $field_name = "SUPPLIER_PRODUCT_REC_ID";
}
$tpl_db = new tpldb;

if (isset($_POST['Posted'])) {
    $arrMedia = explode("|", $_POST['media']);
    $existed_media_ids = explode("|", $_POST['existing_media_ids']);
    $product_rec_id = $_POST['product_rec_id'];
    $optionvalue = $_POST['optionvalue'];
    for ($j = 0; $j < count($existed_media_ids); $j++) {
        if (!in_array($existed_media_ids[$j], $arrMedia)) {
            if ($existed_media_ids[$j] != "") {
                $tpl_db->DeleteRecord("$table_name", "($field_name=$product_rec_id) and (SUPPLIER_MEDIA_REC_ID=$existed_media_ids[$j])");
            }
        }
    }
    for ($i = 0; $i < count($arrMedia); $i++) {
        if (!in_array($arrMedia[$i], $existed_media_ids)) {
            if (in_array($optionvalue, $arrMedia)) {
                if ($GLOBALS["active_function_type"] == 'P') {
                    $tpl_db->UpdateSupplierProductMedia("0", $product_rec_id, $arrMedia[$i], "1");
                } else {
                    $tpl_db->UpdateSupplierProductCategoryMedia("0", $product_rec_id, $arrMedia[$i], "1");
                }
            } else {
                if ($GLOBALS["active_function_type"] == 'P') {
                    $tpl_db->UpdateSupplierProductMedia("0", $product_rec_id, $arrMedia[$i], "0");
                } else {
                    $tpl_db->UpdateSupplierProductCategoryMedia("0", $product_rec_id, $arrMedia[$i], "0");
                }
            }
        }
    }
}
$param_arr = array($GLOBALS["shadow_supplier_rec_id"], "logos");
$supplierlogos = $tplsuppliermediadao->select($dbconn, $param_arr);
//$supplierlogos = $tpl_db->getMediaRecordsBySupplier("tpl_supplier_media", $shadow_supplier_id, "tpl_supplier_media.NAME", "INNER JOIN tpl_media_types ON (tpl_supplier_media.MEDIA_TYPE_REC_ID = tpl_media_types.REC_ID)", "logos");

$is_high_resolution = "";
$is_internal_source = "";

//Take the existing assigned media detail
//$medialogos = array();
//$medialogos = $tpl_db->getProductCategoryMedia($table_name, $active_product_rec_id, $process_type);
//$arr = array();
$existing_media_ids = "";
//$checkedoptionval = "";
//foreach ($medialogos as $key => $medialogo) {
//    $arr[] = $medialogo["SUPPLIER_MEDIA_REC_ID"];
//    if ($medialogo["IS_MANDATORY_MEDIA"] == 1) {
//        $checkedoptionval = $medialogo["SUPPLIER_MEDIA_REC_ID"];
//    }
//}
//for ($j = 0; $j < count($arr); $j++) {
//    if ($j == "0" && $arr[$j] != "") {
//        $existing_media_ids = $arr[$j];
//    } else {
//        $existing_media_ids = $existing_media_ids . "|" . $arr[$j];
//    }
//}

//if ($checkedoptionval == $brand) {      echo " checked ";                                                      }
?>

<style type="text/css">
    .boxuploader
    {
        float:left;
        background:#EEEEEE;
        border:groove 1px #CCCCCC;
        width:630px;
        height:365px; 
        padding:10px;
    }
</style>
<script language="javascript">		
    var startTime ;
    var existing_media_ids="<?php echo $existing_media_ids ?>";
    var optionvalue="";
    function submitSelection()
    {        
        if(product_rec_id==0 && function_type=='P'){
            alert("Please save the product first.");
            return;
        }  
            
        var request = new KoolAjaxRequest({
            method:"post",		
            url:"/dashboard/dm/supplier-category-selection.php",
            onDone:function(result){   
                showMessage('success','Successfully updated.');
                subtabpanel.update("/dashboard/dm/supplier-category-selection.php");					
            }});
        var myitem=document.forms["supplier_category"].elements['media'];
        var mediavalues="";
        var mediaArray=new Array();
        for (var loop=0; loop<myitem.length; loop++) {
            if((loop==0) && (myitem[loop].checked == true)){                
                mediavalues=myitem[loop].value;
            }else if (myitem[loop].checked == true) {
               
                mediavalues= myitem[loop].value + "|"+mediavalues ; 
            }
        }           
        request.addArg("Posted",'start');
        request.addArg("media",mediavalues);  
        request.addArg("product_rec_id",product_rec_id);
        request.addArg("existing_media_ids",existing_media_ids);
        request.addArg("optionvalue",optionvalue);  
      
        //alert("product_rec_id:"+product_rec_id);
        //alert("existing_media_ids:"+existing_media_ids);
        koolajax.sendRequest(request);					
    }
    function checkValue(optionValue,item,valu)
    {
        if(document.forms["supplier_category"].elements['media'][optionValue].checked!= true){
            alert("Please first select the proper check box");
            item.checked=false;            
            return ;
        } 
        optionvalue=valu;
        
    }
    
</script>
<form id="supplier_category" onsubmit="DoSaveSupplierProductDetails(this); return false;">
    <table border="0">
        <tbody>
            <tr>
                <td>
                    <div class="boxuploader"> 

                        <div style="width:630px; height:328px; overflow: auto;"> 


                            <table width=100% border=0 cellpadding=0 cellspacing=0>
                                <tr>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td valign=top width=100% class="BodyText">

                                        <table width=100% border=0 cellpadding=0 cellspacing=0>
                                            <tr>

                                                <?php if ($GLOBALS["shadow_root"]["STATE"] == "OPEN")
                                                    
                                                    ?>
                                                <td valign="top" width="10%" class="BodyText"><b>View</b></td>

                                                <td valign="top" width="10%" class="BodyText"><b><u>Media Name</u></b></td>
                                                <td valign="top" width="30%" class="BodyText"><b><u>Media Description</u></b></td>
                                                <td valign="top" width="15%" class="BodyText"><b><u>Reco. Date</u></b></td>  
                                                <td valign="top" width="15%" class="BodyText"><b><u>Size(Bytes)</u></b></td> 
                                                <td valign="top" width="10%" class="BodyText"><b><u>Select</u></b></td>
                                                <td valign="top" width="10%" class="BodyText"><b><u>Web Logo</u></b></td>

                                            </tr>
                                            <?php if ($supplierlogos) { ?>

                                                <?php
                                                $optionbuttonvalue = 0;

                                                foreach ($supplierlogos as $key => $supplierlogo) {
                                                    $brand = $supplierlogo["REC_ID"];
                                                    $label = htmlspecialchars($supplierlogo["NAME"]);
                                                    $label = str_replace("'", "\'", $label);
                                                    $is_high_resolution = $supplierlogo["IS_HIGH_RESO"];
                                                    $is_internal_source = $supplierlogo["IS_INTERNAL_SOURCE"];
                                                    if ($is_high_resolution == '0') {
                                                        $kiv = new KoolImageView("kiv" . $brand);
                                                        $kiv->scriptFolder = "../../include/KoolPHPSuite/KoolImageView";
                                                        $kiv->styleFolder = "../../include/KoolPHPSuite/KoolImageView/styles/simple";
                                                        if ($is_internal_source == '1') {
                                                            $kiv->bigImageUrl = "../../media/logos/" . $supplierlogo["MEDIA_NAME"];
                                                        } else {
                                                            $kiv->bigImageUrl = $supplierlogo["MEDIA_URL"];
                                                        }
                                                        $kiv->description = $supplierlogo["NAME"];
                                                        $brand1 = $brand . "()";
                                                        $scriptsection = "<script type=\"text/javascript\"> function preview" . $brand . "(){kiv" . $brand . ".open(); }</script>";
                                                    }
                                                    ?>
                                                    <?php if ($is_high_resolution == '0') { ?>
                                                        <?php echo $kiv->Render(); ?>
                                                        <?php echo $scriptsection; ?>
                                                    <?php } ?>
                                                    <tr>

                                                        <?php if ($GLOBALS["STATE"] == "OPEN")
                                                            
                                                            ?>
                                                        <td valign=top width=10% class=BodyText><a class=BodyText href="/" onclick="DoSupplierMediaDelete('<?php echo $supplierlogo["REC_ID"] ?>', '<?php echo $label ?>','<?php echo $supplierlogo["MEDIA_NAME"] ?>','logos','/dashboard/dm/supplier-category-selection.php');return false">Del.</a><img src="/images/spacer.gif" border=0 width=4 height=8 /><?php if ($is_high_resolution == '0') { ?><a class=BodyText href="#" onclick="preview<?php echo $brand1 ?>">Prev.</a><?php } ?></td>
                                                        <td valign=top width=10% class=BodyText><?php echo $supplierlogo["NAME"] ?></td>
                                                        <td valign=top width=30% class=BodyText><?php echo $supplierlogo["DESCRIPTION"] ?></td>
                                                        <td valign=top width=15% class=BodyText><?php echo date('Y-m-d', strtotime($supplierlogo["REC_DATETIME"])) ?></td>               
                                                        <td valign=top width=15% class=BodyText><?php echo $supplierlogo["MEDIA_FILE_SIZE"] ?></td>
                                                        <td valign=top width=10% class=BodyText><input type="checkbox" id="media" name="media" value="<?php echo $brand ?>" <?php
                                            if (in_array($brand, $arr)) {
                                                echo " checked ";
                                            }
                                                        ?>/></td>
                                                        <td valign=top width=10% class=BodyText><input type="radio" name="web_image"   value="<?php echo $brand ?>" onClick="checkValue('<?php echo $optionbuttonvalue;
                                                                                               $optionbuttonvalue++; ?>',this,'<?php echo $brand ?>');"  /> </td>

                                                    </tr>
    <?php } ?>
                                                <tr height="20">
                                                    <td valign=top width=10%  class=BodyText></td>
                                                    <td valign=top width=10% class=BodyText></td>
                                                    <td valign=top width=30% class=BodyText></td>
                                                    <td valign=top width=15% class=BodyText></td>               
                                                    <td valign=top width=15% class=BodyText></td>
                                                    <td valign=top width=10% class=BodyText></td>
                                                    <td valign=top width=10% class=BodyText> </td>
                                                </tr>
                                                <tr>
                                                    <td valign=top width=10% class=BodyText><input type="button" id="btnSubmit" class="btn"  value="Update"  onclick="submitSelection()"/></td>
                                                    <td valign=top width=10% class=BodyText></td>
                                                    <td valign=top width=30% class=BodyText></td>
                                                    <td valign=top width=15% class=BodyText></td>               
                                                    <td valign=top width=15% class=BodyText></td>
                                                    <td valign=top width=10% class=BodyText></td>
                                                    <td valign=top width=10% class=BodyText> </td>
                                                </tr>
<?php } ?>

                                        </table>

                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>       
                </td> </tr>   
        </tbody>
    </table>    
</form>