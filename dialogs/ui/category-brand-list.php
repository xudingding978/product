<?php
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root."/config.php");

include_once $path_doc_root."common/util/DBTransaction.php";
include_once $path_doc_root . "/common/dao/TplShadowSupplierBrandDAO.php";
include_once $path_doc_root . "/common/dao/TplShadowSupplierBrandMediaDAO.php";
include_once $path_doc_root . "/common/dao/TplShadowSupplierCategoryBrandDAO.php";
include_once $path_doc_root . "/common/dao/TplSupplierCategoryDAO.php";


$supplierid = $_GET["supplierid"];
$categoryid = $_GET["categoryid"];


$dbtrans = new DBTransaction();
$dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
$tplsuppliercategorydao = new TplSupplierCategoryDAO();
$array = array($categoryid, $supplierid);
$suppliercategory = $tplsuppliercategorydao->select($dbconn, $array);

$tplshadowsupplierbranddao = new TplShadowSupplierBrandDAO();
//$tplshadowsupplierbrandmediadao = new TplShadowSupplierBrandMediaDAO();
$tplshadowsuppliercategorybranddao = new TplShadowSupplierCategoryBrandDAO();
$param_arr=array();
$tplshadowsupplierbrands=$tplshadowsupplierbranddao->selectInnerBrand($dbconn, $param_arr);
$param_arr=array($suppliercategory[0]["REC_ID"]);
$tplshadowsuppliercategorybrand=$tplshadowsuppliercategorybranddao->select($dbconn, $param_arr);




?>

<link rel="stylesheet" type="text/css" href="/common/ui/css/silk/silk-sprite.css"/>
<script type="text/javascript"> 
   
   
    function DoSupplierVideoDelete(recid)
    {   
        $('#brandrecid').val(recid);       
        $('#brandaction').val("brandremove"); 
        $.post( 
        "/common/callbacks/categoryproduct.php",
        $("#brand_form").serialize(),
        function(data) {
            if($.trim(data)=='Success'){                
                alert("Succesfully deleted.");
                $( "#categorytab" ).tabs( "option", "selected", 3 );
                $( "#categorytab" ).tabs( "option", "selected", 2 );
            }else{                  
                alert("Record is not deleted.");  
            }                
        }
    );
       
    }	 
    
    function setBrand(recid,thisob)
    {   
        //        $('input[name=foo]').attr('checked')
         //alert(recid);
        $('#brandrecid').val(recid);       
        //alert($('#brandrecid').val());
        
        if(thisob.checked){
          $('#brandaction').val("categorybrandinsert"); 
        }else{
           $('#brandaction').val("categorybrandremove");  
        }            
       
        
        //alert($('#action').val());
        $.post( 
        "/common/callbacks/categoryproduct.php",
        $("#brand_form").serialize(),
        function(data) {
            if($.trim(data)=='Success'){                
                alert("Brand asigned process was succesful.");                
            }else{                  
                alert("Brand asigned process was failed.");  
            }                
        }
    );
       
    }	
    
    
    
    
    function openEditWindow(recid){
        this.rec_id=recid;  
        $( "#categorytab" ).tabs( "option", "selected", 3 );
    } 
    
    

    
    
    
    
    
    
    function openNewWindow(recid){ 
        this.rec_id=recid;
        $( "#categorytab" ).tabs( "option", "selected", 3 ); 
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
                 
                    <td valign="top" width="14%" class="BodyText"><div class="icn"  title="Add New Header"> <a href="#" onclick="openNewWindow(0)" id="add_new_header" class="ui-silk ui-silk-add" ><b>Add New</b></a></div></td>
                    <td valign="top" width="14%" class="BodyText"><b><u>Media Name</u></b></td>
                    <td valign="top" width="40%" class="BodyText"><b><u>Logo Listing</u></b></td>
                    
                    <td valign="top" width="18%" class="BodyText" colspan="2"><b><u>Actions.</u></b></td>
                </tr>
              

                    <?php
                    foreach ($tplshadowsupplierbrands as $key => $tplshadowsupplierbrand) {
                        ?>

                        <tr>                            
                            <td valign=top width=14% class=BodyText><input type="checkbox" id ="brandcheckbox" <?php  if (in_array($tplshadowsupplierbrand["REC_ID"], $tplshadowsuppliercategorybrand)) {  echo "checked"; } ?> name="videocheckbox" onClick="setBrand(<?php echo $tplshadowsupplierbrand["REC_ID"] ?>,this)" value="<?php echo $tplshadowsupplierbrand["REC_ID"] ?>"></td>
                            <td valign=top width=14% class=BodyText><?php echo $tplshadowsupplierbrand["NAME"] ?></td>                            
                            <td valign=top width=14% class=BodyText><?php echo $tplshadowsupplierbrand["IS_LOGO_LISTING"] ?></td>               
                            <td valign=top width=6% class=BodyText><div class="icn"  title="Edit"> <a href="#"  onclick="openEditWindow('<?php echo $tplshadowsupplierbrand["REC_ID"] ?>');return false" class="ui-silk ui-silk-application-edit" ><b>Edit</b></a></div></td>
                            <td valign=top width=6% class=BodyText><div class="icn"  title="Delete"><a href="#"  onclick="DoSupplierVideoDelete('<?php echo $tplshadowsupplierbrand["REC_ID"] ?>');return false"class="ui-silk ui-silk-application-delete"><b>Delete</b></a></div></td>
                        </tr>
                  
                <?php } ?>

            </table>

        </td>
    </tr>
</table>

<form id="brand_form" method="post" name="brand_form">
    <input type="hidden" value="brandassign" id="brandaction" name="action"> 
    <input type="hidden" value="" id="brandrecid" name="recid"> 
    <input type="hidden" value="" id="state" name="state"> 
    <input type="hidden" value="<?php echo $suppliercategory[0]["REC_ID"];?>" id="suppliercategoryid" name="suppliercategoryid">
</form>