<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include($path_doc_root . "/common/sessionhandler.php");
global $active_function_type,$active_logo_rec_id,$client_user; 
include_once($path_doc_root . "/config.php");
include_once($path_doc_root . "/include/db_class.php");
include_once($path_doc_root . "/include/tpldb_class.php");
include_once($path_doc_root . "/include/KoolPHPSuite/KoolAjax/koolajax.php");
include_once($path_doc_root . "/include/KoolPHPSuite/KoolUploader/kooluploader.php");

$kul = new KoolUploader("kul");
$kul->scriptFolder = "../../include/KoolPHPSuite/KoolUploader";
$kul->handlePage = "../../dashboard/dm/media_upload_handler.php";
if ($active_function_type == 'pdf') {
    $kul->allowedExtension = "pdf";
} else {
    $kul->allowedExtension = "png,gif,jpg,pdf,eps,ai,indd";
}

$kul->styleFolder = "../../include/KoolPHPSuite/KoolUploader/styles/default";
$kul->progressTracking = true;
$kul->maxFileSize = 1024 * 1024; //iMB
$kul->width = 270;


$field = false;
$rec_id = "0";
$name = "";
$description = "";
$is_internal = "";
$is_high_resolution = "";
$media_url = "";
$medianame = "";
$tpl_db = new tpldb;

if ($client_user) {
    if ($active_logo_rec_id != 0) {
        $field = true;
        $supplierlogos = $tpl_db->getLiveRecord("tpl_supplier_media", $active_logo_rec_id);
    }
    $readonly = "";
    if ($field == true) {
        if ($shadow_root["STATE"] == 'OPEN') {
            $readonly = "";
        } else {
            $readonly = "readonly='1'";
        }
        $rec_id = $supplierlogos["REC_ID"];
        $name = $supplierlogos["NAME"];
        $medianame = $supplierlogos["MEDIA_NAME"];
        $description = $supplierlogos["DESCRIPTION"];
        $is_internal = $supplierlogos["IS_INTERNAL_SOURCE"];
        $is_high_resolution = $supplierlogos["IS_HIGH_RESO"];
        $media_url = $supplierlogos["MEDIA_URL"];
    }
    ?>

    <table border="0">
        <tbody>
            <tr>
                <td>
                    <div class="boxuploader"> 

                        <div style="width:630px; height:350px; "> 



                            <table width=100% border=0 cellpadding=8 cellspacing=0>
                                <tr>
                                    <td valign=top width=100% class=BodyText>
                                        <form id="supplier_logo_upload" action="upload_file.php" method="post" enctype="multipart/form-data">
                                            <table width=100% border=0 cellpadding=0 cellspacing=0>

                                                <tr>
                                                    <td valign=top class=BodyText><br/>Logo Name <font color=#FF0000><b>*</b></font></td>
                                                    <td valign=top class=BodyText>eg: <i>standard_logo </i><br/><input type=text name="logo_name"  value="<?php echo $name ?>" size=16 maxlength=20 /></td>
                                                    <td></td>
                                                    <td valign=top class=BodyText><?php if ($active_function_type != 'pdf') { ?><br/>Resolution Type <font color=#FF0000><b>*</b></font> <?php } ?></td>
                                                    <td valign=top class=BodyText><?php if ($active_function_type != 'pdf') { ?><br/><input type="radio" name="reso_type" checked  value="0"/> Low  <?php } ?></td>
                                                </tr>

                                                <tr>
                                                    <td valign=top class=BodyText><br/>Description  <font color=#FF0000><b>*</b></font></td>
                                                    <td valign=top class=BodyText>eg:<i>The pictorial logo for the main banner logo</i><br/>
                                                        <input type=text name="logo_desc"  value="<?php echo $description ?>" size=32 maxlength=100 />   
                                                    </td>
                                                    <td></td>
                                                    <td valign=top class=BodyText></td>
                                                    <td valign=top class=BodyText><?php if ($active_function_type != 'pdf') { ?><input type="radio" name="reso_type"   value="1"/> High <?php } ?></td>
                                                </tr>

                                                <tr>
                                                    <td valign=top class=BodyText><br/>Media URL</td>
                                                    <td valign=top class=BodyText>eg:<i>http://www.abccompany.com/images/logo.png</i><br/><input type=text name="media_url" size=32 maxlength=200  value="<?php echo $media_url ?>"/></td>
                                                    <td></td>
                                                    <td valign=top class=BodyText><br/><?php if ($active_function_type != 'pdf') { ?>Logo Location <font color=#FF0000><b>*</b></font><?php } ?></td>
                                                    <td valign=top class=BodyText><br/><?php if ($active_function_type != 'pdf') { ?><input type="radio" name="logoloc" checked  value="1"/>Internal <?php } ?></td>
                                                </tr>                       
                                                <tr>
                                                    <td><img src="/images/spacer.gif" border=0 width=100% height=8 /></td>
                                                    <td><img src="/images/spacer.gif" border=0 width=100% height=8 /></td>
                                                    <td><img src="/images/spacer.gif" border=0 width=100% height=8 /></td>
                                                    <td><img src="/images/spacer.gif" border=0 width=100% height=8 /></td>
                                                    <td><img src="/images/spacer.gif" border=0 width=100% height=8 /></td>
                                                </tr>
                                                <tr>
                                                    <td><label for="file">Filename:</label></td>
                                                    <td> <input type="file" name="file" id="file" />                         
                                                    </td>     
                                                    <td></td>
                                                    <td></td>
                                                    <td valign=top class=BodyText><?php if ($active_function_type != 'pdf') { ?><input type="radio" name="logoloc"   value="0"/> External <?php } ?></td>
                                                </tr>
                                                <tr>
                                                    <td><img src="/images/spacer.gif" border=0 width=100% height=8 /></td>
                                                    <td><img src="/images/spacer.gif" border=0 width=100% height=8 /></td>
                                                    <td><img src="/images/spacer.gif" border=0 width=100% height=8 /></td>
                                                    <td><img src="/images/spacer.gif" border=0 width=100% height=8 /></td>
                                                    <td><img src="/images/spacer.gif" border=0 width=100% height=8 /></td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td><input type="submit" name="submit" value="Submit" /><input type="button" value="Save Changes" onClick="DoSaveSupplierLogosDetails(<?php echo $rec_id ?>,0);"/></td>     
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                            </table>
                                        </form>
                                    </td>
                                </tr>
                            </table>

                        </div>
                    </div>       
                </td> </tr>   
        </tbody>
    </table>                            
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
        .defaultKUL .kulClearAll
        {
            display:none;
        }	
        .defaultKUL .kulUploadAll
        {
            display:none;
        }
    </style>
    <script type="text/javascript">
                            
        var upload_filename="";
        var file_size="";
        var medianame="<?php echo $medianame; ?>";
                                
        function DoSaveSupplierLogosDetails(rec_id,intab)        {     
                   
            //alert(parent.instanceID);       
                   
            var thisform=document.forms["supplier_logo_upload"];
            //alert(parent.funtype);
            //alert(thisform.logo_name.value);
            //alert(thisform.logo_desc.value);
            //alert(upload_filename);
            //alert(rec_id);
            if (thisform.logo_name.value != "" && thisform.logo_desc.value != ""&& ((upload_filename != ""&& rec_id=="0")||(rec_id!=0)))
            { 
                
                var logloc="0";
                var reso_type="0"; 
                
                if(parent.funtype!='pdf'){
                    if(thisform.logoloc[0].checked){
                        logloc=thisform.logoloc[0].value;
                    }else{                    
                        logloc=thisform.logoloc[1].value;                    
                    }
                    //parent.funtype
                    if(thisform.reso_type[0].checked){
                        reso_type=thisform.reso_type[0].value;
                    }else{
                        reso_type=thisform.reso_type[1].value;
                    }   
                }        
                
                if((parent.funtype=='P')||(parent.funtype=='C')){
                   
                    koolajax.callback(DoTPLUpdateSupplierMediaDetails(rec_id,thisform.logo_name.value, thisform.media_url.value, '', thisform.logo_desc.value, logloc, '', '0', reso_type,upload_filename,'logos',file_size,medianame,parent.instanceID));
                    activedoc="/dialogs/ui/mediaupload.php?instanceID="+parent.instanceID;
                    subtabpanel.update(activedoc);
                } else{    
                    koolajax.callback(DoTPLUpdateSupplierMediaDetails(rec_id,thisform.logo_name.value, thisform.media_url.value, '', thisform.logo_desc.value, logloc, '', '0', reso_type,upload_filename,parent.funtype,file_size,medianame,parent.instanceID));
                                   
                    if(intab!=0){     
                        if(parent.funtype=='logos'){
                            parent.tabpanel.update("/dashboard/dm/supplier-logos.php?instanceID="+parent.instanceID);
                        }else if(parent.funtype=='headers'){
                            parent.tabpanel.update("/dashboard/dm/supplier-header.php?instanceID="+parent.instanceID);
                        }else{
                            parent.tabpanel.update("/dashboard/dm/supplier-pdf.php?instanceID="+parent.instanceID); 
                        }
                        parent.adpHide('adpModal');
                        parent.adpHideMask('adpMask');                                   
                    }else{
                        if(parent.funtype=='pg'){ 
                            activedoc="/dialogs/ui/mediaupload.php?instanceID="+parent.instanceID;
                            subtabpanel.update(activedoc);
                        }else{
                            if(parent.funtype=='logos'){
                                parent.tabpanel.update("/dashboard/dm/supplier-logos.php?instanceID="+parent.instanceID);
                            }else if(parent.funtype=='headers'){
                                parent.tabpanel.update("/dashboard/dm/supplier-header.php?instanceID="+parent.instanceID);
                            }else{
                                parent.tabpanel.update("/dashboard/dm/supplier-pdf.php?instanceID="+parent.instanceID); 
                            }
                            parent.adpHide('adpModal');
                            parent.adpHideMask('adpMask');   
                        }
                    }
                }
            }
            else
            {
                alert("Please complete all of the manditory fields before clicking the save changes button.");
                return false;
            }
        }
        kul.registerEvent("OnUploadDone",function(sender,arg){
                                                    
            var _items = kul.getItems(); //Get all items
            if(_items[0].getStatus()=='uploaded'){
                var _item = kul.getItem(arg.ItemId);
                upload_filename=_item.getFileName();  
                file_size=_item.getTotalBytes()
            }
                                                    
                             			
                            			
        });
        kul.registerEvent("OnBeforeUpload",function(sender,arg){
            var _item = kul.getItem(arg.ItemId);			
            _item.attachData("media_type",parent.funtype);
            _item.attachData("accept_file_format","png,gif,jpg,pdf,eps,ai,indd"); 
            //alert("OnBeforeUpload");
            //Make sure that only one file is uploaded at a time.
            //Cancel user click button to upload the file when there is file uploading.
            var _items = kul.getItems(); //Get all items
            for(var i in _items)
            {
                if(_items[i].getStatus()=="uploading")
                {
                    return false;
                }
            }				
            return true;
        });

    </script>
<?php } ?>


