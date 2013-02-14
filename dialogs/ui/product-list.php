<?php
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . "/config.php");
include_once $path_doc_root . "/common/util/DBTransaction.php";
include_once $path_doc_root . "/common/dao/TplShadowSupplierCategoryProductDAO.php";
$supplierid = $_GET["supplierid"];
$categoryid = $_GET["categoryid"];
$dbtrans = new DBTransaction();
$dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
$tplshadowsuppliercategoryproductdao = new TplShadowSupplierCategoryProductDAO();
$array = array($categoryid, $supplierid);
$suppliersuppliercategoryproducts = $tplshadowsuppliercategoryproductdao->select($dbconn, $array);
?>

<link rel="stylesheet" type="text/css" href="/common/ui/css/silk/silk-sprite.css"/>
<script type="text/javascript"> 

    function DoSupplierProductDelete(productcatogoryid)
    {    
        $('#productcatogoryid').val(productcatogoryid);
        
         $( "#rec_id").val(productcatogoryid);
        $.post( 
        "/common/callbacks/categoryproduct.php",
        $("#product_list").serialize(),
        function(data) {
            if($.trim(data)=='Success'){                
                alert("Succesfully deleted.");
                $( "#categorytab" ).tabs( "option", "selected", 1 );
                $( "#categorytab" ).tabs( "option", "selected", 0 );
            }else{                  
                alert("Record is not deleted.");  
            }                
        }
    );
        return true;
    }
    function  productCategoryEdit(recid){       
       
        this.rec_id=recid;  
        $( "#categorytab" ).tabs( "option", "selected", 1 );        
        
    }
    function  addNewProduct(recid){
        this.rec_id=recid;
        $( "#categorytab" ).tabs( "option", "selected", 1 );        
        
    }
      
  
</script>

<table width=100% border=0 cellpadding=0 cellspacing=0>
    <tr>
        <td><img src="/images/spacer.gif" border="0" width="805" height="8" /></td>
    </tr>
    <tr>
        <td valign=top width=100% class="BodyText">

            <table width=100% border=0 cellpadding=0 cellspacing=0>
                <tr>
                    <td valign="top" width="5%" class="BodyText"><div class="icn"  title="Add New Product"> <a href="#" onclick="addNewProduct(0)" id="add_new_header" class="ui-silk ui-silk-add" ></a></div></td>
                    <td valign="top" width="15%" class="BodyText"><b><u>Product Title</u></b></td>
                    <td valign="top" width="38%" class="BodyText"><b><u>Product description</u></b></td> 
                    <td valign="top" width="15%" class="BodyText"><b><u>Pro. Price</u></b></td>
                    <td valign="top" width="15%" class="BodyText"><b><u>Pro. Offer Pri.</u></b></td> 
                    <td valign="top" width="12%" class="BodyText" colspan="2"><b><u>Actions.</u></b></td>
                </tr>
                <?php if ($suppliersuppliercategoryproducts) { ?>

                    <?php
                    foreach ($suppliersuppliercategoryproducts as $key => $suppliersuppliercategoryproduct) {
                        ?>

                        <tr>                           
                            <td valign=top width=5% class=BodyText></td>
                            <td valign=top width=15% class=BodyText><?php echo $suppliersuppliercategoryproduct["PRODUCT_TITLE"] ?></td>
                            <td valign=top width=38% class=BodyText><?php echo $suppliersuppliercategoryproduct["PRODUCT_DESCRIPTION"] ?></td>
                            <td valign=top width=15% class=BodyText><?php echo $suppliersuppliercategoryproduct["PRODUCT_VALUE_PRICE"] ?></td>   
                            <td valign=top width=15% class=BodyText><?php echo $suppliersuppliercategoryproduct["PRODUCT_OFFER_PRICE"] ?></td>     
                            <td valign=top width=6% class=BodyText><div class="icn"  title="Edit"> <a href="#"  onclick="productCategoryEdit('<?php echo $suppliersuppliercategoryproduct["REC_ID"] ?>')" class="ui-silk ui-silk-application-edit" ><b>Edit</b></a></div></td>
                            <td valign=top width=6% class=BodyText><div class="icn"  title="Delete"><a href="#"  onclick="DoSupplierProductDelete('<?php echo $suppliersuppliercategoryproduct["REC_ID"] ?>');return false"class="ui-silk ui-silk-application-delete"><b>Delete</b></a></div>

                            </td>
                        </tr>
                    <?php } ?>
                <?php } ?>

            </table>

        </td>
    </tr>
</table>
<form id="product_list" method="post" name="product_list">
    <input type="hidden" value="productdelete" id="action" name="action"> 
    <input type="hidden" value="" id="rec_id" name="productcatogoryid"> 
</form>