<?php
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . "/common/sessionhandler.php");
?>




<?php
if (!isset($_SESSION))
    session_start();
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
;
include_once($path_doc_root . "/include/KoolPHPSuite/KoolUploader/kooluploader.php");
$kul->scriptFolder = "../../include/KoolPHPSuite/KoolUploader";
include_once($path_doc_root . "/include/KoolPHPSuite/KoolAjax/koolajax.php");
$koolajax->scriptFolder = "../../include/KoolPHPSuite/KoolAjax";
require $path_doc_root . "/include/KoolPHPSuite/KoolTabs/kooltabs.php";
require($path_doc_root . "/include/messaging.php");

$KoolControlsFolder = $path_doc_root . "/KoolPHPSuite";
$kts = new KoolTabs("kts");
$kts->scriptFolder = "../include/KoolPHPSuite/KoolTabs";
$kts->styleFolder = $KoolControlsFolder . "/KoolTabs/styles/silver";

//if ($GLOBALS["active_function_type"] == 'P') {
    $kts->addTab("root", "upload", "Add Product", "javascript:subtabpanel.update(\"/dialogs/ui/product.php\")", true); //Make node selection	
    $kts->addTab("root", "selectlogo", "Select Logos", "javascript:subtabpanel.update(\"/dashboard/dm/supplier-category-selection.php\")");
    $kts->addTab("root", "uploadlogo", "Upload Logos", "javascript:loadPage()");
//} else {
//    $kts->addTab("root", "selectlogo", "Select Logos", "javascript:subtabpanel.update(\"/dashboard/dm/supplier-category-selection.php\")", true);
//    $kts->addTab("root", "uploadlogo", "Upload Logos", "javascript:loadPage()");
//}
$kts->scroll = "scrolling";

$kul = new KoolUploader("kul");
$kul->scriptFolder = "../include/KoolPHPSuite/KoolUploader";
$kul->handlePage = "../dashboard/dm/media_upload_handler.php";
$kul->allowedExtension = "png,gif,jpg,pdf,eps,ai,indd";
$kul->styleFolder = "../include/KoolPHPSuite/KoolUploader/styles/default";
$kul->progressTracking = true;
$kul->maxFileSize = 1024 * 1024; //iMB
$kul->width = 3;
$kul->height = 3;
?>

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








<html>
    <head>

<?php
include_once($path_doc_root . "/config.php");
include_once($path_doc_root . "/include/db_class.php");
include_once($path_doc_root . "/include/tpldb_class.php");
include_once($path_doc_root . "/include/KoolPHPSuite/KoolAjax/koolajax.php");
include_once($path_doc_root . "/include/KoolPHPSuite/KoolTabs/kooltabs.php");
include_once($path_doc_root . "/dashboard/initialize-callbacks.php");
?>

        <link href="/site.css" rel="stylesheet" type="text/css">
    <form id="form1" method="post">
<?php
require($path_doc_root . "/include/KoolPHPSuite/KoolAjax/koolajax.php");
$koolajax->scriptFolder = "./../include/KoolPHPSuite/KoolAjax";
echo $koolajax->render();
?>
    </head>
    <body>
        <script type = "text/javascript">
            // alert("Test");
                
        </script>  
        <table width="100%" border="0" cellpadding="2" cellspacing="0">
            <tr valign="top">
                <td height="100%" width="450" valign="top">
<?php
include_once($path_doc_root . "/dashboard/treeview.php");
print $treeview->Render();
?>
                </td>
                <td width="100%" valign="top">
<?php echo KoolScripting::Start(); ?>
            <updatepanel id="tplproductpanel" class="cssframe">
                <content>
<?php include $path_doc_root . "/dashboard/supplier-category-product-panel.php"; ?>
                </content>										

            </updatepanel>
<?php echo KoolScripting::End(); ?>
            <script language="javascript" src="../../dashboard/js/treeview.js" ></script>
            <script type="text/javascript" src="../administrator/scripts/jquery-min.js"></script>
            <script type="text/javascript" src="../administrator/scripts/jquery-ui.min.js"></script>
            <script type="text/javascript" src="../common/ui/js/jquery-ui.min.js"></script>
            <script type = "text/javascript">
                var instanceID='<?php echo $instanceID; ?>';                
                treeview.registerEvent("OnSelect",DoSelectNode);	
                treeview.registerEvent("OnUnselect",DoDeselectNode);
                treeview.registerEvent("OnExpand",DoExpandNode);
                treeview.registerEvent("OnCollapse",DoCollapseNode);
               
                function TPLUpdateProductPanel(AUpdateLocation)
                {
                    //alert("Test");
                    tplproductpanel.update(AUpdateLocation);              
                }    
                
                
                var rec_id=0;
    
                function loadPage(){         
                    koolajax.callback(DoTPLSetActiveSupplierLogo('0'));             
                    subtabpanel.update("/dialogs/ui/mediaupload.php");
                }
                
                
            </script>                  
            </td>
            </tr>
        </table>
<?php
//$content = file_get_contents($path_doc_root . "/dashboard/js/treeview.js");
//$content = str_replace("[node_delimeter]", TREENODE_DELIMETER, $content);
//print $content;
?>    
</form>
<div id="dialogwrap" style="background-color: #EEEEEE;visibility: hidden"> 
    <div id="dialog1" style="background-color: #EEEEEE;"> 
        <table border="0" cellpadding="0" cellspacing="0" >
            <tr>
                <td colspan="3" background="/images/tab_top.gif" style="background-repeat:repeat-x">
                    <div class="indent indent_right topspacing bottomspacing">	
<?php echo $kts->Render(); ?>
                    </div>
                </td>
            </tr>
            <tr>
                <td background="/images/tab_spacer.gif" style="background-repeat:repeat-y; background:#eeeeee;"><img src="/images/spacer.gif"/></td>
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
        <td background="/images/tab_spacer.gif" style="background-repeat:repeat-y"><img src="/images/spacer.gif"/></td>
        </tr>
        <tr>
            <td background="/images/tab_spacer.gif" style="background-repeat:repeat-y"><img src="/images/spacer.gif"/></td>
            <td background="/images/tab_spacer.gif" style="background-repeat:repeat-x"><img src="/images/spacer.gif"/></td>
            <td background="/images/tab_spacer.gif" style="background-repeat:repeat-y"><img src="/images/spacer.gif"/></td>
        </tr>
        </table>
    </div>
</div>

</body>
</html>
