<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . '/config.php');
include_once "../../common/util/DBTransaction.php";
include_once "../../common/dao/TplSupplierMediaDAO.php";
include_once($path_doc_root . '/include/KoolPHPSuite/KoolAjax/koolajax.php');
include_once "../../common/dao/TplSupplierCategoryDAO.php";
include_once "../../common/dao/TplSupplierCategoryMediaDAO.php";

$supplierid = $_GET["supplierid"];
$categoryid = $_GET["categoryid"];

$dbtrans = new DBTransaction();
$dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
$tplsuppliermediadao = new TplSupplierMediaDAO();
$array = array($supplierid, "logos");
$supplierheaders = $tplsuppliermediadao->select($dbconn, $array);


$is_high_resolution = "";
$is_internal_source = "";



$tplsuppliercategorydao = new TplSupplierCategoryDAO();
$array = array($categoryid, $supplierid);
$suppliercategory = $tplsuppliercategorydao->select($dbconn, $array);

$tplsuppliercategorymediadao = new TplSupplierCategoryMediaDAO();
$array = array($suppliercategory[0]["REC_ID"]);
$categoryvideos=$tplsuppliercategorymediadao->categoryVideoSelect($dbconn, $array);



?>

<link rel="stylesheet" type="text/css" href="/common/ui/css/silk/silk-sprite.css"/>

  <script type="text/javascript"> 
   
   
    function DoSupplierLogoDelete(recid)
    {   
        $('#imagerecid').val(recid);       
        $('#imageaction').val("imagedelete"); 
        $.post( 
        "/common/callbacks/categoryproduct.php",
        $("#image_form").serialize(),
        function(data) {
            if($.trim(data)=='Success'){                
                alert("Succesfully deleted.");
                $( "#categorytab" ).tabs( "option", "selected", 7 );
                $( "#categorytab" ).tabs( "option", "selected", 6 );
            }else{                  
                alert("Record is not deleted.");  
            }                
        }
    );
       
    }	 
    
    function setVideo(recid,thisob)
    {   
        //        $('input[name=foo]').attr('checked')
        $('#imagerecid').val(recid);  
         $('#imageaction').val("imageassign"); 
        //alert($(thisob).is(':checked'));
        if($(thisob).is(':checked')){            
            $('#imagestate').val("add"); 
        }else{
            $('#imagestate').val("remove"); 
        }
        //alert($('#action').val());
        $.post( 
        "/common/callbacks/categoryproduct.php",
        $("#image_form").serialize(),
        function(data) {
            if($.trim(data)=='Success'){                
                alert("Image asigned process was succesful.");                
            }else{                  
                alert("Image asigned process was failed.");  
            }                
        }
    );
       
    }	
    
    
    
    
    function openEditWindow(recid){
        this.rec_id=recid;  
        $( "#categorytab" ).tabs( "option", "selected", 7 );
    } 
    
 
    
    function openNewWindow(recid){ 
        this.rec_id=recid;
        $( "#categorytab" ).tabs( "option", "selected", 7 ); 
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

                    <td valign=top width=10% class=BodyText></td>
                    <td valign="top" width="17%" class="BodyText"><div class="icn"  title="Add New Header"> <a href="#" onclick="openNewWindow(0)" id="add_new_header" class="ui-silk ui-silk-add" ><b>Add New</b></a></div></td>

                    <td valign="top" width="10%" class="BodyText"><b><u>Media Name</u></b></td>
                    <td valign="top" width="33%" class="BodyText"><b><u>Media Description</u></b></td>
                    <td valign="top" width="8%" class="BodyText"><b><u>Reco. Date</u></b></td>  
                    <td valign="top" width="8%" class="BodyText"><b><u>Size(Bytes)</u></b></td> 
                    <td valign="top" width="6%" class="BodyText"><b><u>Is High Reso.</u></b></td>
                    <td valign="top" width="8%" class="BodyText" colspan="2"><b><u>Actions.</u></b></td>
                </tr>
                <?php if ($supplierheaders) { ?>

                    <?php
                    foreach ($supplierheaders as $key => $supplierheader) {
                        $brand = $supplierheader["REC_ID"];
                        $label = htmlspecialchars($supplierheader["NAME"]);
                        $label = str_replace("'", "\'", $label);
                        $is_high_resolution = $supplierheader["IS_HIGH_RESO"];
                        $is_internal_source = $supplierheader["IS_INTERNAL_SOURCE"];
                        ?>

                        <tr>

                            <td valign=top width=10% class=BodyText><input type="checkbox" id ="videocheckbox" <?php  if (in_array($supplierheader["REC_ID"], $categoryvideos)) {  echo "checked"; } ?> name="videocheckbox" onClick="setVideo(<?php echo $supplierheader["REC_ID"] ?>,this)" value="<?php echo $supplierheader["REC_ID"] ?>"></td> 
                            <td valign=top width=17% class=BodyText><img src="/media/logos/<?php echo $supplierheader["MEDIA_NAME"] ?>" height="80"/></td>
                            <td valign=top width=10% class=BodyText><?php echo $supplierheader["NAME"] ?></td>
                            <td valign=top width=33% class=BodyText><?php echo$supplierheader["DESCRIPTION"] ?></td>
                            <td valign=top width=8% class=BodyText><?php echo date('Y-m-d', strtotime($supplierheader["REC_DATETIME"])) ?></td>               
                            <td valign=top width=8% class=BodyText><?php echo$supplierheader["MEDIA_FILE_SIZE"] ?></td>
                            <td valign=top width=6% class=BodyText><?php echo $supplierheader["IS_HIGH_RESO"] ?></td>
                            <td valign=top width=4% class=BodyText><div class="icn"  title="Edit"> <a href="#"  onclick="openEditWindow('<?php echo $supplierheader["REC_ID"] ?>');return false" class="ui-silk ui-silk-application-edit" ><b>Edit</b></a></div></td><td valign=top width=4% class=BodyText><div class="icn"  title="Delete"><a href="#"  onclick="DoSupplierLogoDelete('<?php echo $supplierheader["REC_ID"] ?>','<?php echo $supplierheader["MEDIA_NAME"] ?>');return false"class="ui-silk ui-silk-application-delete"><b>Delete</b></a></div></td>
                        </tr>
                    <?php } ?>
                <?php } ?>

            </table>

        </td>
    </tr>
</table>
<form id="image_form" method="post" name="image_form">
    <input type="hidden" value="imageassign" id="imageaction" name="action"> 
    <input type="hidden" value="" id="imagerecid" name="recid"> 
    <input type="hidden" value="" id="imagestate" name="state"> 
    <input type="hidden" value="<?php echo $suppliercategory[0]["REC_ID"];?>" id="suppliercategoryid" name="suppliercategoryid">
</form>