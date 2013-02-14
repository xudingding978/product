<?php
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . "/common/sessionhandler.php");
global $shadow_root;
include_once("../../config.php");
//include_once($path_doc_root . "/include/db_class.php");
//include_once($path_doc_root . "/include/tpldb_class.php");
//include_once("../../include/KoolPHPSuite/KoolAjax/koolajax.php");
//include_once("../../include/KoolPHPSuite/KoolTabs/kooltabs.php");
//include_once("../../include/KoolPHPSuite/KoolImageView/koolimageview.php");
include_once "../../common/util/DBTransaction.php";
include_once "../../common/dao/TplSupplierMediaDAO.php";
include_once "../../common/dao/TplSupplierCategoryDAO.php";
include_once "../../common/dao/TplSupplierCategoryMediaDAO.php";

$supplierid = $_GET["supplierid"];
$categoryid = $_GET["categoryid"];


$dbtrans = new DBTransaction();
$dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
$tplsuppliermediadao = new TplSupplierMediaDAO();
$array = array($supplierid, "video");
$suppliervideos = $tplsuppliermediadao->select($dbconn, $array);



$tplsuppliercategorydao = new TplSupplierCategoryDAO();
$array = array($categoryid, $supplierid);
$suppliercategory = $tplsuppliercategorydao->select($dbconn, $array);

$tplsuppliercategorymediadao = new TplSupplierCategoryMediaDAO();
$array = array($suppliercategory[0]["REC_ID"]);
$categoryvideos=$tplsuppliercategorymediadao->categoryVideoSelect($dbconn, $array);

?>

<link rel="stylesheet" type="text/css" href="/common/ui/css/silk/silk-sprite.css"/>
<script type="text/javascript"> 
   
   
    function DoSupplierVideoDelete(recid)
    {   
        $('#videorecid').val(recid);       
        $('#videoaction').val("videodelete"); 
        $.post( 
        "/common/callbacks/categoryproduct.php",
        $("#video_form").serialize(),
        function(data) {
            if($.trim(data)=='Success'){                
                alert("Succesfully deleted.");
                $( "#categorytab" ).tabs( "option", "selected", 5 );
                $( "#categorytab" ).tabs( "option", "selected", 4 );
            }else{                  
                alert("Record is not deleted.");  
            }                
        }
    );
       
    }	 
    
    function setVideo(recid,thisob)
    {   
        //        $('input[name=foo]').attr('checked')
        $('#videorecid').val(recid);  
         $('#videoaction').val("videoassign"); 
        //alert($(thisob).is(':checked'));
        if($(thisob).is(':checked')){            
            $('#state').val("add"); 
        }else{
            $('#state').val("remove"); 
        }
        //alert($('#action').val());
        $.post( 
        "/common/callbacks/categoryproduct.php",
        $("#video_form").serialize(),
        function(data) {
            if($.trim(data)=='Success'){                
                alert("Video asigned process was succesful.");                
            }else{                  
                alert("Video asigned process was failed.");  
            }                
        }
    );
       
    }	
    
    
    
    
    function openEditWindow(recid){
        this.rec_id=recid;  
        $( "#categorytab" ).tabs( "option", "selected", 5 );
    } 
    
    

    
    
    
    
    
    
    function openNewWindow(recid){ 
        this.rec_id=recid;
        $( "#categorytab" ).tabs( "option", "selected", 5 ); 
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
                            <td valign=top width=14% class=BodyText><input type="checkbox" id ="videocheckbox" <?php  if (in_array($suppliervideo["REC_ID"], $categoryvideos)) {  echo "checked"; } ?> name="videocheckbox" onClick="setVideo(<?php echo $suppliervideo["REC_ID"] ?>,this)" value="<?php echo $suppliervideo["REC_ID"] ?>"></td>
                            <td valign=top width=14% class=BodyText><?php echo $suppliervideo["NAME"] ?></td>
                            <td valign=top width=40% class=BodyText><?php echo$suppliervideo["DESCRIPTION"] ?></td>
                            <td valign=top width=14% class=BodyText><?php echo date('Y-m-d', strtotime($suppliervideo["REC_DATETIME"])) ?></td>               
                            <td valign=top width=6% class=BodyText><div class="icn"  title="Edit"> <a href="#"  onclick="openEditWindow('<?php echo $suppliervideo["REC_ID"] ?>');return false" class="ui-silk ui-silk-application-edit" ><b>Edit</b></a></div></td>
                            <td valign=top width=6% class=BodyText><div class="icn"  title="Delete"><a href="#"  onclick="DoSupplierVideoDelete('<?php echo $suppliervideo["REC_ID"] ?>');return false"class="ui-silk ui-silk-application-delete"><b>Delete</b></a></div>
                            <td valign=top width=6% class=BodyText><div class="icn"  title="Play"><a href="#"  onclick="playvideo('<?php echo htmlspecialchars($suppliervideo["MEDIA_EMBED_SOURCE"]) ?>')" class="ui-silk ui-silk-bullet-go"><b>Play</b></a></div>
                            </td>
                        </tr>
                    <?php } ?>
                <?php } ?>

            </table>

        </td>
    </tr>
</table>

<form id="video_form" method="post" name="video_form">
    <input type="hidden" value="videoassign" id="videoaction" name="action"> 
    <input type="hidden" value="" id="videorecid" name="recid"> 
    <input type="hidden" value="" id="state" name="state"> 
    <input type="hidden" value="<?php echo $suppliercategory[0]["REC_ID"];?>" id="suppliercategoryid" name="suppliercategoryid">
</form>