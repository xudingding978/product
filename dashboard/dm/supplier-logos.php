<?php
// session and instance handling
(!isset($_SESSION) ? session_start() : error_log('Session not started: ' . $_SERVER['SCRIPT_NAME']));
$instanceID = (isset($_GET['instanceID']) ? $instanceID = $_GET['instanceID'] : error_log('instanceID missing'));

global $active_function_type, $active_logo_rec_id, $client_user;
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . '/config.php');
include_once($path_doc_root . "/common/sessionhandler.php");
include_once "../../common/util/DBTransaction.php";
include_once "../../common/dao/TplSupplierMediaDAO.php";
include_once($path_doc_root . '/include/KoolPHPSuite/KoolAjax/koolajax.php');

$active_function_type = "logos";
$dbtrans = new DBTransaction();
$dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
$tplsuppliermediadao = new TplSupplierMediaDAO();
$array = array($GLOBALS["shadow_supplier_rec_id"], "logos");
$supplierheaders = $tplsuppliermediadao->select($dbconn, $array);


$is_high_resolution = "";
$is_internal_source = "";
?>

<link rel="stylesheet" type="text/css" href="/common/ui/css/silk/silk-sprite.css"/>
<script type="text/javascript">    
    var instanceID='<?php echo $instanceID; ?>';
   
    
    function DoSupplierLogoDelete(recid,imagename)
    { 	  	  
        koolajax.callback(DoTPLDeleteSupplierMediaDetails(recid,"logos",imagename));
        tabRefresh();
    }	   
   
    //    function DoSupplierAwardUpdate(recid,name,issued_by,year_won,award_logo_url,award_logo_link)
    //    {
    //        
    //        rec_id=recid;        
    //        $("#name").val(name);
    //        $("#issued_by").val(issued_by);
    //        $("#award_logo_url").val(award_logo_url);
    //        $("#award_logo_link").val(award_logo_link);
    //        $("#year_won").val(year_won);
    //        openEditWindow();
    //    }
    //    function openEditWindow(recidselect,media_name,media_desc,media_url){   
    //        window.logouploaderiframe..document.supplier_logo_upload.submit();
    //        window.logouploaderiframe..document.getElementById("rec_id").value=recidselect;
    //        window.logouploaderiframe..document.getElementById("media_name").value=media_name;
    //        window.logouploaderiframe..document.getElementById("media_desc").value=media_desc;
    //        window.logouploaderiframe..document.getElementById("media_url").value=media_url;
    //        
    //        //        $('<div><iframe src="/dashboard/dm/src/header.php?instanceID=<?php echo $instanceID ?>" width="850" height="308" id="myframeid" name="myframename"/></div>').dialog({
    //        //            title:"Supplier Header",
    //        //            modal: true, 
    //        //            resizable: false, 
    //        //            draggable: true,
    //        //            width: '900', 
    //        //            height: '408',               
    //        //            buttons: {
    //        //                "Save Changes": function() {
    //        //                    window.frames[i].document.supplier_logo_upload.submit();
    //        //                    window.frames[i].document.getElementById("rec_id").value=recidselect;
    //        //                    window.frames[i].document.getElementById("media_name").value=media_name;
    //        //                    window.frames[i].document.getElementById("media_desc").value=media_desc;
    //        //                    window.frames[i].document.getElementById("media_url").value=media_url;
    //        //                    i=i+1;
    //        //                    $(this).dialog('close');
    //        //                },
    //        //                "Cancel": function() {                       
    //        //                    $(this).dialog('close');
    //        //                }
    //        //            }
    //        //        });
    //    }
    
    
    function DoSaveSupplierAwardDetails(thisob)
    {
        var thisform=document.forms["supplier_awards"];
        if (thisform.name.value != "" && thisform.issued_by.value != ""&& thisform.year_won.value != "")
        {  
            koolajax.callback(DoTPLUpdateSupplierAwardDetails(rec_id, thisform.name.value, thisform.issued_by.value, thisform.year_won.value, thisform.award_logo_url.value, thisform.award_logo_link.value,instanceID));
            parent.tabpanel.update("/dashboard/supplier-awards.php");          
            $(this).empty().remove();
        }
        else
        {
            alert("Please complete all of the mandatory fields before clicking the save changes button.");
        }
    }
  
    
    
   
    var i=0;
    function openNewWindow(rec_id){        
        document.getElementById("logouploaderiframe").setAttribute('src', '/dashboard/dm/src/mediauploader.php?category=logos&folder=logos&recid='+rec_id+'&supplierid='+<?php echo $GLOBALS["shadow_supplier_rec_id"]; ?>);
        $("#logos_dialog").dialog({
            title:"Supplier Logos",
            modal: true, 
            resizable: false, 
            draggable: true,
            width: '890', 
            height: '493'               
            //            buttons: {
            //                "Save Changes": function() {
            //                    //$("#supplier_logo_upload").submit();
            //                    //alert("Save");
            //                    //window.frames[0].document.supplier_logo_upload.submit();
            //                    //uploaderiframe.document.supplier_header_upload.submit();
            //                    if(i==0){
            //                        window.logouploaderiframe.document.supplier_media_upload.submit();
            //                    }else{
            //                        window.results.document.supplier_media_upload.submit();
            //                    }
            //                     i++;
            //                   
            //                    //captcha_iframe.document.reserve_booth_space.submit();
            //                    // i=i+1;
            //                    //$(this).dialog('close');
            //                    // return;
            //                    // $("#diviframe").remove();
            //                    //$(this).dialog('destroy');
            //                },
            //                "Cancel": function() {                       
            //                    $(this).dialog('close');
            //                }
            //            }
        });
           
    }
    function tabRefresh(){        
        
        var tabindex = $("#mediasubtab").tabs('option', 'selected');
        alert("Reloading tab " + tabindex + ".");
        $("#mediasubtab").tabs('load',tabindex);
        //var current_index = $("#tabs").tabs("option","selected");
        $("#mediasubtab").tabs('load', ($("#mediasubtab").tabs('option', 'selected') +1));


        $( "#mediasubtab" ).tabs( "option", "selected", 0 );
        alert("Finish");
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

                    <?php
//if ($_SESSION["shadow_root"]["STATE"] == "OPEN")
                    if ($GLOBALS["shadow_state"] == 'OPEN')
                        
                        ?>
                    <td valign="top" width="17%" class="BodyText"><div class="icn"  title="Add New Header"> <a href="#" onclick="openNewWindow(0)" id="add_new_header" class="ui-silk ui-silk-add" ><b>Add New</b></a></div></td>

                    <td valign="top" width="10%" class="BodyText"><b><u>Media Name</u></b></td>
                    <td valign="top" width="35%" class="BodyText"><b><u>Media Description</u></b></td>
                    <td valign="top" width="10%" class="BodyText"><b><u>Reco. Date</u></b></td>  
                    <td valign="top" width="10%" class="BodyText"><b><u>Size(Bytes)</u></b></td> 
                    <td valign="top" width="10%" class="BodyText"><b><u>Is High Reso.</u></b></td>
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

                            <?php if ($GLOBALS["shadow_state"] == "OPEN")
                                
                                ?>
                            <td valign=top width=17% class=BodyText><img src="/media/logos/<?php echo $supplierheader["MEDIA_NAME"] ?>" height="80"/></td>
                            <td valign=top width=10% class=BodyText><?php echo $supplierheader["NAME"] ?></td>
                            <td valign=top width=3% class=BodyText><?php echo$supplierheader["DESCRIPTION"] ?></td>
                            <td valign=top width=10% class=BodyText><?php echo date('Y-m-d', strtotime($supplierheader["REC_DATETIME"])) ?></td>               
                            <td valign=top width=10% class=BodyText><?php echo$supplierheader["MEDIA_FILE_SIZE"] ?></td>
                            <td valign=top width=10% class=BodyText><?php echo $supplierheader["IS_HIGH_RESO"] ?></td>
                            <td valign=top width=4% class=BodyText><div class="icn"  title="Edit"> <a href="#"  onclick="openNewWindow('<?php echo $supplierheader["REC_ID"] ?>');return false" class="ui-silk ui-silk-application-edit" ><b>Edit</b></a></div></td><td valign=top width=4% class=BodyText><div class="icn"  title="Delete"><a href="#"  onclick="DoSupplierLogoDelete('<?php echo $supplierheader["REC_ID"] ?>','<?php echo $supplierheader["MEDIA_NAME"] ?>');return false"class="ui-silk ui-silk-application-delete"><b>Delete</b></a></div></td>
                        </tr>
                    <?php } ?>
                <?php } ?>

            </table>

        </td>
    </tr>
</table>
<div id="dialogwrap" style="background-color: #EEEEEE;visibility: hidden"> 
    <div id="logos_dialog" style="background-color: #EEEEEE;">  
        <iframe src="/dashboard/dm/src/header.php?instanceID=<?php echo $instanceID ?>" width="850" height="454" id="logouploaderiframe" name="logouploaderiframe"/>
    </div>
</div>