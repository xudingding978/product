<?php
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . '/config.php');
include_once $path_doc_root . "/common/util/DBTransaction.php";
include_once $path_doc_root . "/common/dao/TplSupplierMediaDAO.php";
include_once $path_doc_root . "/common/dao/TplShadowSupplierCategoryProductDAO.php";
include_once $path_doc_root . "/common/dao/TplShadowSupplierCategoryproductMediaDAO.php";

$supplierid = $_GET["supplierid"];
$categoryid = $_GET["categoryid"];
$recid = $_GET["rec_id"];



$dbtrans = new DBTransaction();
$dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
$tplsuppliermediadao = new TplSupplierMediaDAO();
$array = array($supplierid, "logos");
$supplierlogos = $tplsuppliermediadao->select($dbconn, $array);

$array = array($supplierid, "video");
$suppliervideos = $tplsuppliermediadao->select($dbconn, $array);

$array = array($supplierid, "pdf");
$supplierpdfs = $tplsuppliermediadao->select($dbconn, $array);

$categoryproductdata = null;
$categoryproductmedia = null;
if ($recid != 0) {
    $tplshadowsuppliercategoryproductdao = new TplShadowSupplierCategoryProductDAO();
    $array = array($recid);
    $categoryproductdata = $tplshadowsuppliercategoryproductdao->selectCategoryProduct($dbconn, $array);

    $tplshadowsuppliercategoryproductmediadao = new TplShadowSupplierCategoryproductMediaDAO();
    $categoryproductmedia = $tplshadowsuppliercategoryproductmediadao->categorySelect($dbconn, $array);
}
?>



<style type="text/css">

    #photos{

        width:550px;
        padding:10px 0;
        background-color:#fafafa;

    }
    #photos div { 

        padding:0 10px;
        overflow:auto;
    }
    img.photo{
        border:5px solid #fff;
        float:left;
        display:inline;
        margin-right:10px;
    }
</style>


<table border="0">
    <tbody>
        <tr>
            <td>
                <div class="boxuploader"> 

                    <div style="width:600px; height:330px; overflow: auto;"> 	

                        <table width="100%" border="0" cellpadding="8" cellspacing="0">
                            <tr>
                                <td valign="top" width="100%" class="BodyText">
                                    <form id="product_category" method="post" name="product_category">
                                        <table width="100%" border="0" cellpadding="0" cellspacing="0">

                                            <tr>
                                                <td valign="top" class="BodyText"><br/>Product Title <font color="#FF0000"><b>*</b></font></td>                                                
                                                <td valign="top" class="BodyText">eg <i>Jacob's Creek Reserve</i><br/><input type="text" id="name" name="name"  value="<?php if (count($categoryproductdata) > 0) echo $categoryproductdata[0]["PRODUCT_TITLE"] ?>" size="32" maxlength="255" /></td>
                                            </tr>
                                            <tr>
                                                <td valign="top" class="BodyText"><br/>Product Description <font color="#FF0000"><b>*</b></font></td>                                                
                                                <td valign="top" class="BodyText">eg <i>Jacob's Creek Reserve</i><br/><input type="text" id="desc" name="desc"  value="<?php if (count($categoryproductdata) > 0) echo $categoryproductdata[0]["PRODUCT_DESCRIPTION"] ?>" size="32" maxlength="255" /></td>
                                            </tr>
                                             <tr>
                                                <td valign="top" class="BodyText"><br/>Product Value Price</td>                                                
                                                <td valign="top" class="BodyText">eg <i>NZ$ 110</i><br/><input type="text" id="pro_price" name="pro_price"  value="<?php if (count($categoryproductdata) > 0) echo $categoryproductdata[0]["PRODUCT_VALUE_PRICE"] ?>" size="32" maxlength="255" /></td>
                                            </tr>
                                            <tr>
                                                <td valign="top" class="BodyText"><br/>Product Offer Price</td>                                                
                                                <td valign="top" class="BodyText">eg <i>NZ$ 100</i><br/><input type="text" id="pro_offer_price" name="pro_offer_price"  value="<?php if (count($categoryproductdata) > 0) echo $categoryproductdata[0]["PRODUCT_OFFER_PRICE"] ?>" size="32" maxlength="255" /></td>
                                            </tr>

                                            <tr>
                                                <td valign="top" class="BodyText"><br/>Product Checkout URL</td>                                            
                                                <td valign="top" class="BodyText">eg <i>kttp://www.hospitalitybiz.co.nz</i><br/><input type="text"  name="pro_checkout_url" id="pro_checkout_url" value="<?php if (count($categoryproductdata) > 0) echo $categoryproductdata[0]["PRODUCT_CHECKOUT_URL"] ?>" size="32" maxlength="255" /></td>
                                            </tr>



                                        </table>



                                        <table  width="100%">

                                            <tr>
                                                <td></td>
                                                <td align="left">

                                                    <div id="photos" width="100%">
                                                        <div>
                                                            <table width=100% border=0 cellpadding=0 cellspacing=0>
                                                                <tr>
                                                                    <?php foreach ($supplierlogos as $key => $supplierlogo) { ?>      
                                                                        <td valign=top  class=BodyText> <input type="checkbox" id ="imagelist" name="imagelist" value="<?php echo $supplierlogo["REC_ID"] ?>" <?php
                                                                    if (in_array($supplierlogo["REC_ID"], $categoryproductmedia)) {
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
                                            
                                            
                                            <tr>
                                                <td></td>
                                                <td align="left">

                                                    <div id="photos" width="100%">
                                                        <div >
                                                            <table width=100% border=0 cellpadding=0 cellspacing=0>
                                                                <tr>
                                                                    <?php foreach ($suppliervideos as $key => $suppliervideo) { ?>      
                                                                        <td valign=top height="30" class=BodyText> <input type="checkbox" id ="imagelist" name="imagelist" value="<?php echo $suppliervideo["REC_ID"] ?>" <?php
                                                                    if (in_array($suppliervideo["REC_ID"], $categoryproductmedia)) {
                                                                        echo "checked";
                                                                    }
                                                                        ?>/><a href="#"  onclick="playvideo('<?php echo htmlspecialchars($suppliervideo["MEDIA_EMBED_SOURCE"]) ?>')" class="ui-silk ui-silk-bullet-go"></a><?php echo $suppliervideo["NAME"] ?> </td>   
                                                                        <?php } ?>   
                                                                </tr>
                                                                
                                                            </table>
                                                        </div>
                                                    </div>


                                                </td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td align="left">

                                                    <div id="photos" width="100%">
                                                        <div>
                                                            <table width=100% border=0 cellpadding=0 cellspacing=0>
                                                                <tr>
                                                                    <?php foreach ($supplierpdfs as $key => $supplierpdf) { ?>      
                                                                        <td valign=top width="150" class=BodyText> <input type="checkbox" id ="imagelist" name="imagelist" value="<?php echo $supplierpdf["REC_ID"] ?>" <?php
                                                                    if (in_array($supplierpdf["REC_ID"], $categoryproductmedia)) {
                                                                        echo "checked";
                                                                    }
                                                                        ?>/> <a href="#"   class="ui-silk ui-silk-page-white-acrobat"></a><?php echo $supplierpdf["MEDIA_NAME"] ?></td>   
                                                                        <?php } ?>   
                                                                </tr>
                                                                
                                                            </table>
                                                        </div>
                                                    </div>


                                                </td>
                                            </tr>
                                            
                                            
                                        </table>




                                        <table  width="100%">

                                            <tr>
                                                <td></td>
                                                <td align="left"><button id="saveProductBtn" >  Save Changes </button><button id="resetBtn" >  Reset </button></td>
                                            </tr>
                                        </table>
                                        <input type="hidden" value="" id="imageliststr" name="imageliststr">
                                        <input type="hidden" value="<?php echo $recid ?>" id="recid" name="recid">
                                        <input type="hidden" value="<?php echo $categoryid ?>" id="catogoryid" name="catogoryid">
                                        <input type="hidden" value="<?php echo $supplierid ?>" id="supplierid" name="supplierid">      
                                        <input type="hidden" value="<?php if ($recid != 0) echo "productupdate";else echo "productinsert"; ?>" id="action" name="action">  
                                    </form>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>       
            </td> </tr>   
    </tbody>
</table>                                         

<script type = "text/javascript">
    $(function() {   
        $("#resetBtn").click(function() {
            $('#name').val('');  
            $('#region_of_origin').val('');  
            $('#country_of_origin').val(''); 
            $('input[name=imagelist]').attr('checked', false);
            $('#recid').val('0');   
            $('#action').val('productinsert');
            return false;
        });
     
        $("#saveProductBtn").click(function() {
            if($('#name').val()==""){
                alert("Please enter valid product name");
                return false;
            }
            if($('#region_of_origin').val()==""){
                alert("Please Enter region of origin");
                return false;
            }  
            if($('#country_of_origin').val()==""){
                alert("Please Enter country of origin");
                return false;
            } 
            var imagelist="";           
            $('#imagelist:checked').each(function() {                
                if(imagelist!=""){
                    imagelist=imagelist+"|"+$(this).val();
                }else{
                    imagelist=$(this).val(); 
                }
            });
            
            $('#imageliststr').val(imagelist);            
            $.post( 
            "/common/callbacks/categoryproduct.php",
            $("#product_category").serialize(),
            function(data) {
                if($.trim(data)=='Success'){
                    $('#name').val('');  
                    $('#region_of_origin').val('');  
                    $('#country_of_origin').val(''); 
                    $('input[name=imagelist]').attr('checked', false);
                    $('#recid').val('0');   
                    $('#action').val('productinsert'); 
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