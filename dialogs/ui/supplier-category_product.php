<?php
//if (!isset($_SESSION))
//    session_start();
//$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
//include_once($path_doc_root . "/config.php");
//include_once($path_doc_root . "/include/KoolPHPSuite/KoolUploader/kooluploader.php");
//$kul->scriptFolder = "../../include/KoolPHPSuite/KoolUploader";
//include_once($path_doc_root."/include/KoolPHPSuite/KoolAjax/koolajax.php");
//$koolajax->scriptFolder = "../../include/KoolPHPSuite/KoolAjax";
//require $path_doc_root . "/include/KoolPHPSuite/KoolTabs/kooltabs.php";
//require($path_doc_root . "/include/messaging.php");
//
//$KoolControlsFolder=$path_doc_root . "/KoolPHPSuite";
//$kts = new KoolTabs("kts");
//$kts->scriptFolder = "../include/KoolPHPSuite/KoolTabs";
//$kts->styleFolder = $KoolControlsFolder . "/KoolTabs/styles/silver";
//
////if($_SESSION["active_function_type"]=='P'){
//$kts->addTab("root", "upload", "Add Product", "javascript:subtabpanel.update(\"/dialogs/ui/product.php\")", true); //Make node selection	
//$kts->addTab("root", "selectlogo", "Select Logos", "javascript:subtabpanel.update(\"/dashboard/dm/supplier-category-selection.php\")");
//$kts->addTab("root", "uploadlogo", "Upload Logos", "javascript:loadPage()");
////}else{
//// $kts->addTab("root", "selectlogo", "Select Logos", "javascript:subtabpanel.update(\"/dashboard/dm/supplier-category-selection.php\")", true);
//// $kts->addTab("root", "uploadlogo", "Upload Logos", "javascript:loadPage()");   
////}
//$kts->scroll = "scrolling";
//
//$kul = new KoolUploader("kul");
//$kul->scriptFolder = "../include/KoolPHPSuite/KoolUploader";
//$kul->handlePage = "../dashboard/dm/media_upload_handler.php";
//$kul->allowedExtension = "png,gif,jpg,pdf,eps,ai,indd";
//$kul->styleFolder = "../include/KoolPHPSuite/KoolUploader/styles/default";
//$kul->progressTracking = true;
//$kul->maxFileSize = 1024 * 1024; //iMB
//$kul->width = 3;
//$kul->height = 3;


?>
<script language="javascript"> 
    var product_rec_id="<?php echo $_SESSION ["active_product_rec_id"] ?>";   
    var function_type="<?php echo $_SESSION["active_function_type"] ?>";   
    function loadPage(){         
        koolajax.callback(DoTPLSetActiveSupplierLogo('0'));             
        subtabpanel.update("/dialogs/ui/mediaupload.php");
    }
    function DoSupplierMediaDelete(recid, name,actual_file_name,locfolder,returnURL)
    {
        var result;
        result=confirm("Are you sure that you want to delete the '" + name + "' in '" + locfolder + "' ?");             
        if (result)
        {  
            //alert("recid"+recid);
            koolajax.callback(DoTPLDeleteSupplierMediaDetails(recid,actual_file_name,locfolder));  
            //alert("true");
                    
        }
        subtabpanel.update(returnURL);
   	   
     } 
     function DoSaveSupplierProductDetails(rec_id)
    {       
        var thisform=document.forms["supplier_branch_detail"];  
         alert("Value...:"+$("#country_of_origin").val());
        if (thisform.name.value != "")
        {
           
            activedoc="/dialogs/ui/product.php";
            var res=0;
            product_rec_id=koolajax.callback(DoTPLUpdateSupplierProductDetails(rec_id, thisform.name.value, thisform.varietal.value, thisform.vintage.value, thisform.region_of_origin.value, thisform.country_of_origin.value, thisform.logo_listing.checked));
            //alert("product_rec_id:"+product_rec_id);
            showMessage('success','Successfully processed product details.');
            parent.activetab.update(parent.activedoc);
            subtabpanel.update(activedoc);
            //parent.adpHide('adpModal');
            //parent.adpHideMask('adpMask');
           
        }
        else
        {
            alert("Please complete all of the manditory fields before clicking the save changes button.");
        }
    }
   
</script>   
<br/>
<style type="text/css">
    .box
    {
        float:left;
        background:#EEEEEE;
        border:groove 1px #CCCCCC;
        width:688px;
        height:60px;  
        padding:10px;
    }
   .boxuploader
    {
        float:left;
        background:#EEEEEE;
        border:groove 1px #CCCCCC;
        width:688px;
        height:350px;  
        padding:10px;
    }
   .defaultKUL .kulClearAll
    {
        display:none;
    }	
   
</style> 

<table border="0" cellpadding="0" cellspacing="0" >
    <tr>
        <td colspan="3" background="/images/tab_top.gif" style="background-repeat:repeat-x">
            <div class="indent indent_right topspacing bottomspacing">	
               
            </div>
        </td>
    </tr>
    <tr>
        <td background="/images/tab_spacer.gif" style="background-repeat:repeat-y; background:#eeeeee;"><img src="/images/spacer.gif"></td>
        <td>
            <table border="0" cellpadding="8" cellspacing="0" bgcolor="#eeeeee">
                <tr>
                    <td height="100%">               
               <?php echo KoolScripting::Start(); ?>
                     <updatepanel id="subtabpanel" class="cssframe">       
                        <content>
                            <div style="visibility:hidden"> <?php echo $kul->Render(); ?> </div>                          
                          
                        </content> 

                    </updatepanel>       
                <?php echo KoolScripting::End(); ?>

        </td>
    </tr>              
</table>
</td>
<td background="/images/tab_spacer.gif" style="background-repeat:repeat-y"><img src="/images/spacer.gif"></td>
</tr>
<tr>
    <td background="/images/tab_spacer.gif" style="background-repeat:repeat-y"><img src="/images/spacer.gif"></td>
    <td background="/images/tab_spacer.gif" style="background-repeat:repeat-x"><img src="/images/spacer.gif"></td>
    <td background="/images/tab_spacer.gif" style="background-repeat:repeat-y"><img src="/images/spacer.gif"></td>
</tr>
</table>
<script language="javascript"> 
   <?php  if($active_function_type=='C'){ ?>
   activedoc="/dashboard/dm/supplier-category-selection.php";
   subtabpanel.update(activedoc);
   <?php  }else{ ?>
     activedoc="/dialogs/ui/product.php";
     subtabpanel.update(activedoc);  
  <?php  } ?>
</script> 

