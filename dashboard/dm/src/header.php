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

<form id="supplier_header_upload" name="supplier_header_upload" target="_self" method="post" enctype="multipart/form-data" action="/dashboard/dm/media_upload_handler.php" onSubmit="">
    <table width=100% border=0 cellpadding=0 cellspacing=0>

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
            <td valign=top class=BodyText><br/>Media URL</td>
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

    </table>
    <input type="hidden" id="media_category" name="media_category" size=32 maxlength=200  value="headers"/>
    <input type="hidden" id="rec_id" name="rec_id" size=32 maxlength=200  value="<?php echo $record[0]["REC_ID"] ?>"/>
    <input type="hidden" id="media_embed_source" name="media_embed_source" size=32 maxlength=200  value=""/>
    <input type="hidden" id="is_embed_source" name="is_embed_source" size=32 maxlength=200  value="0"/>
    <input type="hidden" id="mediafolder" name="mediafolder" size=32 maxlength=200  value="headers"/>
    <input type="hidden" id="instanceID" name="instanceID" size=32 maxlength=200  value="<?php echo $_GET["instanceID"] ?>"/>
    <input type="hidden" id="supplierid" name="supplierid" size=32 maxlength=200  value="<?php echo $_GET["supplierid"] ?>"/>
    <input type="hidden" id="accept_file_format" name="accept_file_format" size=32 maxlength=200  value="jpg"/>

</form>

