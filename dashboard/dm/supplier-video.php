<?php
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . "/common/sessionhandler.php");
global $shadow_root;
include_once("../../config.php");
//include_once($path_doc_root . "/include/db_class.php");
//include_once($path_doc_root . "/include/tpldb_class.php");
include_once("../../include/KoolPHPSuite/KoolAjax/koolajax.php");
include_once("../../include/KoolPHPSuite/KoolTabs/kooltabs.php");
include_once("../../include/KoolPHPSuite/KoolImageView/koolimageview.php");
include_once "../../common/util/DBTransaction.php";
include_once "../../common/dao/TplSupplierMediaDAO.php";

$dbtrans = new DBTransaction();
$dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
$tplsuppliermediadao = new TplSupplierMediaDAO();
$array = array($GLOBALS["shadow_supplier_rec_id"], "video");
$suppliervideos = $tplsuppliermediadao->select($dbconn, $array);


?>

<link rel="stylesheet" type="text/css" href="/common/ui/css/silk/silk-sprite.css"/>
<script type="text/javascript">  

    function isNumberKey(evt)
    {
        var charCode = (evt.which) ? evt.which : event.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
            
        return true;
    }
            
            
    function modifyIFrameHeight(){ 
        var iframedata=document.forms["supplier_video_upload"].emberdsource.value;             
        document.forms["supplier_video_upload"].emberdsource.value=iframedata.replace(/height=\s*\"*\d*\"*\s+/g, "height=\""+document.forms["supplier_video_upload"].iframeheight.value+"\" "); 
    } 
    function modifyIFrameWidth(){ 
        var iframedata=document.forms["supplier_video_upload"].emberdsource.value; 
        document.forms["supplier_video_upload"].emberdsource.value=iframedata.replace(/width=\s*\"*\d*\"*\s+/g, "width=\""+document.forms["supplier_video_upload"].iframewidth.value+"\" ") ;   
          
    }  
    var rec_id=0;                                
    function DoSaveSupplierVideoDetails()        {     
                                        
        var thisform=document.forms["supplier_video_upload"];            
        if (thisform.video_name.value != "" && thisform.video_desc.value != ""&& thisform.emberdsource.value != "")
        {  
            koolajax.callback(DoTPLUpdateSupplierVideoDetails(rec_id,thisform.video_name.value, thisform.video_desc.value, thisform.emberdsource.value,instanceID));
                
        }
        else
        {
            alert("Please complete all of the manditory fields before clicking the save changes button.");
            return false;
        }
    }
      
    
    
    
    
    
    
    var instanceID='<?php echo $instanceID; ?>';
   
    
    function DoSupplierVideoDelete(recid,imagename)
    { 	  	  
        koolajax.callback(DoTPLDeleteSupplierMediaDetails(recid,"video",""));
    }	   
    function openEditWindow(rec_id,name,desc,emberdsource){
        var thisform=document.forms["supplier_video_upload"];            
        thisform.video_name.value = name ;
        thisform.video_desc.value = desc;
        
        thisform.emberdsource.value = emberdsource;             
        openNewWindow(rec_id); 
    } 
    function openNewWindow(rec_id){        
        //document.getElementById("headeruploaderiframe").setAttribute('src', '/dashboard/dm/src/mediauploader.php?category=headers&folder=headers&recid='+rec_id+'&supplierid='+<?php echo $GLOBALS["shadow_supplier_rec_id"]; ?>);
        this.rec_id=rec_id;
        
        
        $("#video_dialog").dialog({
            title:"Supplier Video",
            modal: true, 
            resizable: false, 
            draggable: true,
            width: '650', 
            height: '505',
            buttons: {
                "Save Changes": function() {
                    DoSaveSupplierVideoDetails();                   
                    $(this).dialog('close');
                },
                "Cancel": function() {
                    $(this).dialog('close');
                }
            }               

        });
           
    }

    function playvideo(embededSource)
    {  
        var parseheight=embededSource.match(/height=\s*\"*\d*\"*\s+/g);
        var parsewidth=embededSource.match(/width=\s*\"*\d*\"*\s+/g);      

        popupwidth=parsewidth[0].replace(/width=\s*\"*/g, "").replace(/"/g, "");
        popupheight=parseheight[0].replace(/height=\s*\"*/g, "").replace(/"/g, "");  
     
        popupwidth=(eval(popupwidth)+20);
        popupheight=(eval(popupheight)+40);

        $(' <div id="playdialog" width="'+eval(popupwidth)+'" height="'+eval(popupheight)+'">'+embededSource+'</div>').dialog({
            title:"Supplier Video",
            modal: true, 
            resizable: false, 
            draggable: true,
            width:popupwidth , 
            height:popupheight,
            close: function(ev, ui) { $(this).remove(); }
          
        });
           
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

                    <?php if ($shadow_root["STATE"] == "OPEN")
                        
                        ?>
                    <td valign="top" width="14%" class="BodyText"><div class="icn"  title="Add New Header"> <a href="#" onclick="openNewWindow(0)" id="add_new_header" class="ui-silk ui-silk-add" ><b>Add New</b></a></div></td>
                    <td valign="top" width="14%" class="BodyText"><b><u>Media Name</u></b></td>
                    <td valign="top" width="40%" class="BodyText"><b><u>Media Description</u></b></td>
                    <td valign="top" width="14%" class="BodyText"><b><u>Reco. Date</u></b></td> 
                    <td valign="top" width="18%" class="BodyText" colspan="3"><b><u>Actions.</u></b></td>
                </tr>
                <?php if ($suppliervideos) { ?>

                    <?php
                    foreach ($suppliervideos as $key => $suppliervideo) {
                        ?>

                        <tr>
                            <?php if ($shadow_root["STATE"] == "OPEN")  ?>
                             <td valign=top width=14% class=BodyText></td>
                            <td valign=top width=14% class=BodyText><?php echo $suppliervideo["NAME"] ?></td>
                            <td valign=top width=40% class=BodyText><?php echo$suppliervideo["DESCRIPTION"] ?></td>
                            <td valign=top width=14% class=BodyText><?php echo date('Y-m-d', strtotime($suppliervideo["REC_DATETIME"])) ?></td>               
                            <td valign=top width=6% class=BodyText><div class="icn"  title="Edit"> <a href="#"  onclick="openEditWindow('<?php echo htmlspecialchars($suppliervideo["REC_ID"]) ?>','<?php echo htmlspecialchars($suppliervideo["NAME"]) ?>','<?php echo htmlspecialchars($suppliervideo["DESCRIPTION"]) ?>','<?php echo htmlspecialchars($suppliervideo["MEDIA_EMBED_SOURCE"]) ?>');return false" class="ui-silk ui-silk-application-edit" ><b>Edit</b></a></div></td>
                            <td valign=top width=6% class=BodyText><div class="icn"  title="Delete"><a href="#"  onclick="DoSupplierVideoDelete('<?php echo $suppliervideo["REC_ID"] ?>','<?php echo $suppliervideo["MEDIA_NAME"] ?>');return false"class="ui-silk ui-silk-application-delete"><b>Delete</b></a></div>
                            <td valign=top width=6% class=BodyText><div class="icn"  title="Play"><a href="#"  onclick="playvideo('<?php echo htmlspecialchars($suppliervideo["MEDIA_EMBED_SOURCE"]) ?>')" class="ui-silk ui-silk-bullet-go"><b>Play</b></a></div>
                            </td>
                        </tr>
                    <?php } ?>
                <?php } ?>

            </table>

        </td>
    </tr>
</table>
<div id="dialogwrap" style="background-color: #EEEEEE;visibility: hidden"> 
    <div id="video_dialog" style="background-color: #EEEEEE;">  
        <table border="0">
            <tbody>
                <tr>
                    <td>
                        <div class="boxuploader"> 
                            <div style="width:630px; height:280px; "> 
                                <table width=100% border=0 cellpadding=0 cellspacing=0>
                                    <tr>
                                        <td valign=top width=100% class=BodyText>
                                            <form id="supplier_video_upload" >
                                                <table width=100% border=0 cellpadding=0 cellspacing=0>

                                                    <tr>
                                                        <td width="15%" valign=top class=BodyText><br/>Video Name <font color=#FF0000><b>*</b></font></td>
                                                        <td valign=top class=BodyText colspan="3">eg: <i>standard_video </i><br/><input type=text name="video_name"  value="" size=50 maxlength=50 tabindex="1"/></td>
                                                        <td></td>

                                                    </tr>

                                                    <tr>
                                                        <td valign=top class=BodyText><br/>Description <font color=#FF0000><b>*</b></font></td>
                                                        <td valign=top class=BodyText colspan="3">eg:<i>The Basics of Web Video File Formats</i><br/>
                                                            <input type=text name="video_desc"  value="" size=32 maxlength=100 tabindex="2"/>   
                                                        </td>
                                                        <td></td>

                                                    </tr>
                                                    <tr>
                                                        <td ><img src="/images/spacer.gif" border=0 width=100% height=8 /></td>
                                                        <td colspan="3"><img src="/images/spacer.gif" border=0 width=100% height=8 /></td>
                                                        <td><img src="/images/spacer.gif" border=0 width=100% height=8 /></td>

                                                    </tr>
                                                    <tr>
                                                        <td valign=top class=BodyText><br/>Dimension</td>
                                                        <td valign=top class=BodyText colspan="3">eg:<i>Width and Height of iframe</i><br/>

                                                        </td>
                                                        <td></td>

                                                    </tr>
                                                    <tr>
                                                        <td valign=top class=BodyText></td>
                                                        <td valign=top class=BodyText><br/> Width   :   </td>
                                                        <td valign=top class=BodyText>
                                                            <input type=text name="iframewidth"  value="" size=4 maxlength=3 onkeypress="return isNumberKey(event);" onkeyup="modifyIFrameWidth();"tabindex="3"/>    
                                                        </td>
                                                        <td width="220"></td>
                                                        <td></td>

                                                    </tr>
                                                    <tr>
                                                        <td valign=top class=BodyText></td>
                                                        <td valign=top class=BodyText><br/>Height  :   </td>
                                                        <td><input type=text name="iframeheight"  value="" size=4 maxlength=3 onkeypress="return isNumberKey(event);" onkeyup="modifyIFrameHeight();" tabindex="4"/>   </td>
                                                        <td width="220"></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td ><img src="/images/spacer.gif" border=0 width=100% height=8 /></td>
                                                        <td colspan="3"><img src="/images/spacer.gif" border=0 width=100% height=8 /></td>
                                                        <td><img src="/images/spacer.gif" border=0 width=100% height=8 /></td>

                                                    </tr>


                                                    <tr>
                                                    <tr>
                                                        <td valign=top class=BodyText><br/><br/>Embedded Source</td>
                                                        <td valign=top class=BodyText colspan="3">eg:<i>&lt;iframe width="560" height="315" src="http://www.youtube.com/embed/aTCp6o-EIkM" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;</i><br/>
                                                            <textarea rows="5" cols="60" id="emberdsource" tabindex="5"></textarea></td>
                                                        <td></td>

                                                    </tr>
                                                    <tr>
                                                        <td><img src="/images/spacer.gif" border=0 width=100% height=8 /></td>
                                                        <td colspan="3"><img src="/images/spacer.gif" border=0 width=100% height=8 /></td>
                                                        <td><img src="/images/spacer.gif" border=0 width=100% height=8 /></td>

                                                    </tr>                                                    
                                                </table>
                                            </form>
                                        </td>
                                    </tr>
                                </table>

                            </div>
                        </div>       
                    </td> 
                </tr>   
            </tbody>
        </table>              
    </div>
</div>
<div id="videowrap" style="background-color: #EEEEEE;visibility: hidden"> 
    <div id="play_dialog" style="background-color: #EEEEEE;">
       
    </div>
</div>

