<?php
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . '/config.php');
include_once $path_doc_root . "/common/util/DBTransaction.php";
include_once $path_doc_root . "/common/dao/TplSupplierMediaDAO.php";
include_once $path_doc_root . "/common/dao/TplShadowSupplierCategoryProductDAO.php";
include_once $path_doc_root . "/common/dao/TplShadowSupplierCategoryproductMediaDAO.php";

$supplierid = $_GET["supplierid"];
$categoryid = $_GET["categoryid"];
$recid = $_GET["rec_id"];
$suppliervideos = null;
if ($recid != 0) {
    $dbtrans = new DBTransaction();
    $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
    $tplsuppliermediadao = new TplSupplierMediaDAO();
    $array = array($recid);
    $suppliervideos = $tplsuppliermediadao->selectRecord($dbconn, $array);
}
?>
<script type="text/javascript">  
    $(function() { 
        $("#resetBtn").click(function() {
            $('#video_name').val('');  
            $('#video_desc').val('');  
            $('#emberdsource').val('');             
            $('#recid').val('0');   
            $('#action').val('productinsert');
            return false;
        });
        $("#savebutton").click(function() {
            $.post( 
            "/common/callbacks/categoryproduct.php",
            $("#supplier_video_upload").serialize(),
            function(data) {
                if($.trim(data)=='Success'){
                    $('#video_name').val('');  
                    $('#video_desc').val('');  
                    $('#emberdsource').val('');                 
                    $('#recid').val('0');   
                    $('#action').val('videoinsert'); 
                    alert("Succesfully saved.");
                }else{                  
                    alert("Record is not saved.");  
                }
                
            }
        );
            return false;
        });
    });
</script>     
<table border="0">
    <tbody>
        <tr>
            <td>
                <div class="boxuploader"> 
                    <div style="width:630px; height:320px; "> 
                        <table width=100% border=0 cellpadding=0 cellspacing=0>
                            <tr>
                                <td valign=top width=100% class=BodyText>
                                    <form id="supplier_video_upload" name="supplier_video_upload">
                                        <table width=100% border=0 cellpadding=0 cellspacing=0>

                                            <tr>
                                                <td width="15%" valign=top class=BodyText><br/>Video Name <font color=#FF0000><b>*</b></font></td>
                                                <td valign=top class=BodyText colspan="3">eg: <i>standard_video </i><br/><input type=text name="video_name" id="video_name" value="<?php if (count($suppliervideos) > 0) echo $suppliervideos[0]["NAME"] ?>" size=50 maxlength=50 tabindex="1"/></td>
                                                <td></td>

                                            </tr>

                                            <tr>
                                                <td valign=top class=BodyText><br/>Description <font color=#FF0000><b>*</b></font></td>
                                                <td valign=top class=BodyText colspan="3">eg:<i>The Basics of Web Video File Formats</i><br/>
                                                    <input type=text name="video_desc" id="video_desc" value="<?php if (count($suppliervideos) > 0) echo $suppliervideos[0]["DESCRIPTION"] ?>" size=32 maxlength=100 tabindex="2"/>   
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
                                                    <textarea rows="5" cols="60" id="emberdsource" name="emberdsource" tabindex="5"><?php if (count($suppliervideos) > 0) echo $suppliervideos[0]["MEDIA_EMBED_SOURCE"] ?></textarea></td>
                                                <td></td>

                                            </tr>
                                            <tr>
                                                <td><img src="/images/spacer.gif" border=0 width=100% height=8 /></td>
                                                <td colspan="3"><img src="/images/spacer.gif" border=0 width=100% height=8 /></td>
                                                <td><img src="/images/spacer.gif" border=0 width=100% height=8 /></td>

                                            </tr>   
                                            <tr>
                                                <td colspan="3"><button id="savebutton"> Save Changes</button><button id="resetBtn" >  Reset </button></td>
                                            </tr> 
                                        </table>
                                        <input type="hidden" value="<?php echo $recid ?>" id="recid" name="recid">
                                        <input type="hidden" value="<?php echo $categoryid ?>" id="catogoryid" name="catogoryid">
                                        <input type="hidden" value="<?php echo $supplierid ?>" id="supplierid" name="supplierid">      
                                        <input type="hidden" value="<?php if ($recid != 0) echo "videoupdate";else echo "videoinsert"; ?>" id="action" name="action"> 
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

<div id="videowrap" style="background-color: #EEEEEE;visibility: hidden"> 
    <div id="play_dialog" style="background-color: #EEEEEE;">

    </div>
</div>