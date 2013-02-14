<?php
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once $path_doc_root . "/common/util/DBTransaction.php";
include_once $path_doc_root . "/common/dao/TplSupplierMediaDAO.php";


$dbtrans = new DBTransaction();
$dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
$tplsuppliermediadao = new TplSupplierMediaDAO();
$param_arr = array($_GET["rec_id"]);
$record = $tplsuppliermediadao->selectRecord($dbconn, $param_arr);
$supplierid = $_GET["supplierid"];
$categoryid = $_GET["categoryid"];
//$recid = $_GET["rec_id"];
//$supplierimages = null;
//if ($recid != 0) {
//    $dbtrans = new DBTransaction();
//    $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
//    $tplsuppliermediadao = new TplSupplierMediaDAO();
//    $array = array($recid);
//    $supplierimages = $tplsuppliermediadao->selectRecord($dbconn, $array);
//}
?>

<link rel="stylesheet" type="text/css" href="/common/ui/css/silk/silk-sprite.css"/>
<script type="text/javascript"> 
   
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



<link rel="stylesheet" type="text/css" href="/common/ui/css/smoothness/jquery-ui.css"/>
<link rel="stylesheet" type="text/css" href="/common/ui/css/silk/silk-sprite.css"/>
<body onload="load()">
    <form id="supplier_header_upload" name="supplier_header_upload" target="my_iframe" method="post" enctype="multipart/form-data" action="/dashboard/dm/media_upload_handler.php" onSubmit="">
        <table width=100% border=0 cellpadding=0 cellspacing=0>
            <tr>
                <td valign=top >
                    <div id="messagebox">                                          
                    </div>
                </td>  
            </tr>
            <tr>
                <td valign=top class=BodyText><br/>Logo Name <font color=#FF0000><b>*</b></font></td>
                <td valign=top class=BodyText>eg: <i>standard_logo </i><br/><input type=text name="media_name"  id="media_name" value="<?php echo $record[0]["NAME"] ?>" size=16 maxlength=20 /></td>
                <td></td>
                <td valign=top class=BodyText><br/>Resolution Type <font color=#FF0000><b>*</b></font> </td>
                <td valign=top class=BodyText><br/><input type="radio" name="reso_type" checked  value="0"/> Low  </td>
            </tr>

            <tr>
                <td valign=top class=BodyText><br/>Description  <font color=#FF0000><b>*</b></font></td>
                <td valign=top class=BodyText>eg:<i>The pictorial logo for the main banner logo</i><br/>
                    <input type=text name="media_desc" id="media_desc"  value="<?php echo $record[0]["DESCRIPTION"] ?>" size=32 maxlength=100 />   
                </td>
                <td></td>
                <td valign=top class=BodyText></td>
                <td valign=top class=BodyText><input type="radio" name="reso_type"   value="1"/> High </td>
            </tr>

            <tr>
                <td valign=top class=BodyText><br/>Media URsrc="not_submitted_yet.aspx"L</td>
                <td valign=top class=BodyText>eg:<i>http://www.abccompany.com/images/logo.png</i><br/><input type=text name="media_url" id="media_url" size=32 maxlength=200  value="<?php echo $record[0]["MEDIA_URL"] ?>"/></td>
                <td></td>
                <td valign=top class=BodyText><br/>Logo Location <font color=#FF0000><b>*</b></font></td>
                <td valign=top class=BodyText><br/><input type="radio" name="media_loc" checked  value="1"/>Internal </td>
            </tr>                       
            <tr>
                <td><img src="/images/spacer.gif" border=0 width=100% height=8 /></td>
                <td><img src="/images/spacer.gif" border=0 width=100% height=8 /></td>
                <td><img src="/images/spacer.gif" border=0 width=100% height=8 /></td>
                <td><img src="/images/spacer.gif" border=0 width=100% height=8 /></td>
                <td><img src="/images/spacer.gif" border=0 width=100% height=8 /></td>
            </tr>
            <tr>
                <td class=BodyText>Filename:</td>
                <td> <input type="file" id="fileuploader" name="fileuploader">                  
                </td>     
                <td></td>
                <td></td>
                <td valign=top class=BodyText><input type="radio" name="media_loc"   value="0"/> External </td>
            </tr>
            <tr>
                <td><img src="/images/spacer.gif" border=0 width=100% height=8 /></td>
                <td><img src="/images/spacer.gif" border=0 width=100% height=8 /></td>
                <td><img src="/images/spacer.gif" border=0 width=100% height=8 /></td>
                <td><img src="/images/spacer.gif" border=0 width=100% height=8 /></td>
                <td><img src="/images/spacer.gif" border=0 width=100% height=8 /></td>
            </tr>
            <tr>
                <td class=BodyText><input type="submit" value="Submit" ></td>
                <td>                  
                </td>     
                <td></td>
                <td></td>
                <td valign=top class=BodyText></td>
            </tr>

        </table>
        <input type="hidden" id="media_category" name="media_category" size=32 maxlength=200  value="category"/>
        <input type="hidden" id="rec_id" name="rec_id" size=32 maxlength=200  value="<?PHP echo $_GET["rec_id"] ?>"/>
        <input type="hidden" id="media_embed_source" name="media_embed_source" size=32 maxlength=200  value=""/>
        <input type="hidden" id="is_embed_source" name="is_embed_source" size=32 maxlength=200  value="0"/>
        <input type="hidden" id="mediafolder" name="mediafolder" size=32 maxlength=200  value="logos"/>
        <input type="hidden" id="instanceID" name="instanceID" size=32 maxlength=200  value="<?php echo $_GET["instanceID"] ?>"/>
        <input type="hidden" id="supplierid" name="supplierid" size=32 maxlength=200  value="<?php echo $supplierid; ?>"/>
        <input type="hidden" id="accept_file_format" name="accept_file_format" size=32 maxlength=200  value="jpg"/>

    </form>



</body>

<iframe name="my_iframe" style="visibility: hidden"></iframe>