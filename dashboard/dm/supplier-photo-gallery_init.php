<?php
// session and instance handling
(!isset($_SESSION) ? session_start() : error_log('Session not started: ' . $_SERVER['SCRIPT_NAME']));
$instanceID = (isset($_GET['instanceID']) ? $instanceID = $_GET['instanceID'] : error_log('instanceID missing'));

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . '/config.php');
include_once($path_doc_root . "/common/sessionhandler.php");
include_once "../../common/util/DBTransaction.php";
include_once "../../common/dao/TplSupplierMediaDAO.php";
include_once($path_doc_root . '/include/KoolPHPSuite/KoolAjax/koolajax.php');

$dbtrans = new DBTransaction();
$dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
$tplsuppliermediadao = new TplSupplierMediaDAO();
$array = array($GLOBALS["shadow_supplier_rec_id"], "pg");
$suppliermedia = $tplsuppliermediadao->select($dbconn, $array);


$is_high_resolution = "";
$is_internal_source = "";
?>
<script type="text/javascript">    
    var instanceID='<?php echo $instanceID; ?>';
    //    $(function(){
    //        // Tabs
    //        $('#gallery-tab').tabs();                
    //        //hover states on the static widgets
    //        $('#dialog_link, ul#icons li').hover(
    //        function() { $(this).addClass('ui-state-hover'); },
    //        function() { $(this).removeClass('ui-state-hover'); }
    //    );
    //
    //    });
    
    function DoSupplierPhotoGalleryDelete(recid,imagename)
    { 	  	  
        koolajax.callback(DoTPLDeleteSupplierMediaDetails(recid,"photo_gallery",imagename));
    }	  
   
    function openNewWindow(rec_id){        
        document.getElementById("pgiframe").setAttribute('src', '/dialogs/ui/supplier-photo-gallery.php?category=pdf&folder=pdf&recid='+rec_id+'&supplierid='+<?php echo $GLOBALS["shadow_supplier_rec_id"]; ?>);
        $("#pg_dialog").dialog({
            title:"Supplier Photo Gallery",
            modal: true, 
            resizable: false, 
            draggable: true,
            width: '890', 
            height: '493'
        });
           
    }
    
    

</script>
<?php
if (sizeof($suppliermedia) == 0) {
    ?>
    <style type="text/css">
        .box
        {
            float:left;
            background:#EEEEEE;
            border:groove 1px #CCCCCC;
            width:688px;
            height:150px;
            margin:10px;
            padding:10px;
        }
        .helpbox
        {
            float:left;			
            border:groove 1px #CCCCCC;
            width:688px;
            height:100px;
            margin:10px;
            padding:10px;
        }

    </style>


    <b>Digital Media > Photo Gallery</b>
    <hr/><center>
        Welcome to the Photo Gallery . You can upload upto web images to display on your page.
    </center><br/>
    <center>Click add photos below to get started.</center>
    <br/>     
    <center><input type="button" id="btn1" value="Add Photos" onClick="openNewWindow()"/></center>



    <br/>

    <content>        
        <center>
            Tip : Ensure the photos are no wider than 800px wide and are in a compressed format.
            <br/>
            Such as : JPEG , GIF  or PNG
        </center><br/>

    </content>     

    <?php
} else {
    ?>   
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
                        <td valign="top" width="22%" class="BodyText"><div class="icn"  title="Add New Header"> <a href="#" onclick="openNewWindow(0)" id="add_new_header" class="ui-silk ui-silk-add" ><b>Add New</b></a></div></td>

                        <td valign="top" width="40%" class="BodyText"><b><u>Media Name</u></b></td>                        
                        <td valign="top" width="15%" class="BodyText"><b><u>Reco. Date</u></b></td>  
                        <td valign="top" width="15%" class="BodyText"><b><u>Size(Bytes)</u></b></td>                        
                        <td valign="top" width="8%" class="BodyText" ><b><u>Actions.</u></b></td>
                    </tr>
                    <?php if ($suppliermedia) { ?>

                        <?php
                        foreach ($suppliermedia as $key => $supmed) {
                            $brand = $supmed["REC_ID"];
                            $label = htmlspecialchars($supmed["NAME"]);
                            
                            
                            ?>

                            <tr>
                               
                                <td valign=top width=22% class=BodyText><img src="/media/photo_gallery/<?php echo $supmed["MEDIA_NAME"] ?>" height="80"/></td>
                                <td valign=top width=40% class=BodyText><?php echo $supmed["NAME"] ?></td>                                
                                <td valign=top width=15% class=BodyText><?php echo date('Y-m-d', strtotime($supplierheader["REC_DATETIME"])) ?></td>               
                                <td valign=top width=15% class=BodyText><?php echo $supmed["MEDIA_FILE_SIZE"] ?></td>                                
                                <td valign=top width=4% class=BodyText><div class="icn"  title="Delete"><a href="#"  onclick="DoSupplierPhotoGalleryDelete('<?php echo $supmed["REC_ID"] ?>','<?php echo $supmed["MEDIA_NAME"] ?>');return false"class="ui-silk ui-silk-application-delete"><b>Delete</b></a></div></td>
                            </tr>
                        <?php } ?>
                    <?php } ?>

                </table>

            </td>
        </tr>
    </table>
    <?php
}
?>     

<div id="dialogwrap" style="background-color: #EEEEEE;visibility: hidden"> 
    <div id="pg_dialog" style="background-color: #EEEEEE;">  
      <iframe src="/dashboard/dm/src/header.php?instanceID=<?php echo $instanceID ?>" width="850" height="454" id="pgiframe" name="pgiframe"/>
    </div>
</div>
