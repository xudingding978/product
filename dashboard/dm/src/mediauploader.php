<?php
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once $path_doc_root . "/common/util/DBTransaction.php";
include_once $path_doc_root . "/common/dao/TplSupplierMediaDAO.php";


$dbtrans = new DBTransaction();
$dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
$tplsuppliermediadao = new TplSupplierMediaDAO();
$param_arr = array($_GET["recid"]);
$record = $tplsuppliermediadao->selectRecord($dbconn, $param_arr);

?>

<link rel="stylesheet" type="text/css" href="/common/ui/css/silk/silk-sprite.css"/>

<script type="text/javascript">    
     
    function validateFormInputs()
    {  
        var filePath=document.forms["supplier_media_upload"]["fileuploader"].value;
        var media_category=document.forms["supplier_media_upload"]["media_category"].value;
        
       
        //return false;
        //var media_category=document.forms["supplier_media_upload"]["media_category"].value
        if((filePath=="")||(document.forms["supplier_media_upload"]["media_name"].value=="")||(document.forms["supplier_media_upload"]["media_desc"].value=="")||(document.forms["supplier_media_upload"]["media_url"].value=="")){
            document.getElementById('messagebox').innerHTML = '<div class="msgWarning"><span>Please fill the required fields.</span></div>';
            return false;
        }
        var ext = filePath.substring(filePath.lastIndexOf('.') + 1).toLowerCase();
        
        if((media_category=='logos')||(media_category=='headers')){
            if(!((ext=='jpg')||(ext=='jpeg')||(ext=='gif'))){
               document.getElementById('messagebox').innerHTML = '<div class="msgWarning"><span>Please select the correct file format.</span></div>'; 
               return false;
            }            
        }
        if(media_category=='pdf'){
            if(!(ext=='pdf')){
               document.getElementById('messagebox').innerHTML = '<div class="msgWarning"><span>Please select the correct file format.</span></div>'; 
               return false;
            }            
        }
  
         
         
         
    }
    function load() {
        
        parent.document.getElementById("media_name").value="";
        parent.document.getElementById("media_desc").value="";
        parent.document.getElementById("media_url").value="";
        parent.document.getElementById("fileuploader").value="";     
        parent.document.getElementById('messagebox').innerHTML = '<div class="msgSuccess"><span>Successfully Uploaded.</span></div>';
        parent.document.getElementById("rec_id").value="0"; 
        parent.document.getElementById('uploadedimege').innerHTML = '';
        
        
    }
  
</script>   
<style type="text/css">
    .msgError, .msgSuccess, .msgInfo, .msgWarning {
        padding: 3px 8px 3px 6px;
        border-style: solid;
        border-width: 1px;
        margin-bottom: 20px;
        font-weight: bold;
    }
    .msgError span, .msgSuccess span, .msgInfo span, .msgWarning span {
        background-repeat: no-repeat;
        background-position: top left;
        display: block;
        padding: 1px 0 1px 20px;
        line-height: 1.2;
    }
    .msgError {
        background-image: url(/images/msg_error_bg.png); border-color: #DF7D7D;
    }
    .msgError span { background-image: url(/images/fffsicons/cross.png); }
    .msgSuccess { background-image: url(/images/msg_success_bg.png); border-color: #82CE76; }
    .msgSuccess span { background-image: url(/images/fffsicons/tick.png); }
    .msgInfo { background-image: url(/images/msg_info_bg.png); border-color: #6B99C7; }
    .msgInfo span { background-image: url(/images/fffsicons/information.png); }
    .msgWarning { background-image: url(/images/msg_warning_bg.png); border-color: #E4964D; }
    .msgWarning span { background-image: url(/images/fffsicons/warning.png); }

</style>

<body onload="load()">
    <form id="supplier_media_upload" name="supplier_media_upload" target="results" method="post" enctype="multipart/form-data" action="/dashboard/dm/media_upload_handler.php" onsubmit="return validateFormInputs()">
        <table width=100% border=0 cellpadding=0 cellspacing=0>
            <tr>
                <td valign=top >
                    <div id="messagebox">                                          
                    </div>
                </td>  
            </tr>
        </table>
        <table width=100% border=0 cellpadding=0 cellspacing=0>

            <tr >
                <td valign=top height=10></td>            
                <td valign=top colspan="3" height=5></td>            
                <td valign=top height=10></td>
            </tr>
            <tr>
                <td valign=top ><br/>Logo Name <font color=#FF0000><b>*</b></font></td>
                <td valign=top >eg: <i>standard_logo </i><br/><input type=text name="media_name"  id="media_name" value="<?php echo $record[0]["NAME"] ?>" size=16 maxlength=20 /></td>
                <td></td>
                <td valign=top ><br/>Resolution Type <font color=#FF0000><b>*</b></font> </td>
                <td valign=top ><br/><input type="radio" name="reso_type" checked  value="0"/> Low  </td>
            </tr>

            <tr>
                <td valign=top ><br/>Description  <font color=#FF0000><b>*</b></font></td>
                <td valign=top >eg:<i>The pictorial logo for the main banner logo</i><br/>
                    <input type=text name="media_desc" id="media_desc"  value="<?php echo $record[0]["DESCRIPTION"] ?>" size=32 maxlength=100 />   
                </td>
                <td></td>
                <td valign=top ></td>
                <td valign=top ><input type="radio" name="reso_type"   value="1"/> High </td>
            </tr>

            <tr>
                <td valign=top ><br/>Media URL</td>
                <td valign=top >eg:<i>http://www.abccompany.com/images/logo.png</i><br/><input type=text name="media_url" id="media_url" size=32 maxlength=200  value="<?php echo $record[0]["MEDIA_URL"] ?>"/></td>
                <td></td>
                <td valign=top ><br/>Logo Location <font color=#FF0000><b>*</b></font></td>
                <td valign=top ><br/><input type="radio" name="media_loc" checked  value="1"/>Internal </td>
            </tr>                       
            <tr>
                <td><img src="/images/spacer.gif" border=0 width=100% height=8 /></td>
                <td><img src="/images/spacer.gif" border=0 width=100% height=8 /></td>
                <td><img src="/images/spacer.gif" border=0 width=100% height=8 /></td>
                <td><img src="/images/spacer.gif" border=0 width=100% height=8 /></td>
                <td><img src="/images/spacer.gif" border=0 width=100% height=8 /></td>
            </tr>
            <tr>
                <td >Filename:</td>
                <td> <input type="file" id="fileuploader" name="fileuploader">                  
                </td>     
                <td></td>
                <td></td>
                <td valign=top ><input type="radio" name="media_loc"   value="0"/> External </td>
            </tr>
            <tr>
                <td><img src="/images/spacer.gif" border=0 width=100% height=8 /></td>
                <td><img src="/images/spacer.gif" border=0 width=100% height=8 /></td>
                <td><img src="/images/spacer.gif" border=0 width=100% height=8 /></td>
                <td><img src="/images/spacer.gif" border=0 width=100% height=8 /></td>
                <td><img src="/images/spacer.gif" border=0 width=100% height=8 /></td>
            </tr>

            <tr>
                <td colspan="3"><div id="uploadedimege"><?php if ($record[0]["REC_ID"] != 0) { ?><img src="/media/<?php echo $_GET["folder"] ?>/<?php echo $record[0]["MEDIA_NAME"] ?>" height="250" /> <?php } ?></div></td>
                <td >                  
                </td>     
                <td valign="bottom"> <input type="submit" value="Submit" >                  
                </td>    

            </tr>


        </table>
        <input type="hidden" id="media_category" name="media_category" size=32 maxlength=200  value="<?php echo $_GET["category"] ?>"/>
        <input type="hidden" id="rec_id" name="rec_id" size=32 maxlength=200  value="<?php echo $record[0]["REC_ID"] ?>"/>
        <input type="hidden" id="media_embed_source" name="media_embed_source" size=32 maxlength=200  value=""/>
        <input type="hidden" id="is_embed_source" name="is_embed_source" size=32 maxlength=200  value="0"/>
        <input type="hidden" id="mediafolder" name="mediafolder" size=32 maxlength=200  value="<?php echo $_GET["folder"] ?>"/>
        <input type="hidden" id="instanceID" name="instanceID" size=32 maxlength=200  value="<?php echo $_GET["instanceID"] ?>"/>
        <input type="hidden" id="supplierid" name="supplierid" size=32 maxlength=200  value="<?php echo $_GET["supplierid"] ?>"/>
        <input type="hidden" id="accept_file_format" name="accept_file_format" size=32 maxlength=200  value="jpg"/>

    </form>

    <iframe width="0" id="results" name="results" height="0" border="0" frameborder="0" scrolling="auto" align="center" hspace="0" vspace="">Results</iframe>
</body>