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
$array = array($GLOBALS["shadow_supplier_rec_id"], "headers");
$supplierheaders = $tplsuppliermediadao->select($dbconn, $array);


$is_high_resolution = "";
$is_internal_source = "";
?>

<link rel="stylesheet" type="text/css" href="/common/ui/css/silk/silk-sprite.css"/>
<script type="text/javascript">    
    var instanceID='<?php echo $instanceID; ?>';
   
    
    function DoSupplierLogoDelete(recid,imagename)
    { 	  	  
        koolajax.callback(DoTPLDeleteSupplierMediaDetails(recid,"headers",imagename));
    }	   
 
    function openNewWindow(rec_id){        
        document.getElementById("headeruploaderiframe").setAttribute('src', '/dashboard/dm/src/mediauploader.php?category=headers&folder=headers&recid='+rec_id+'&supplierid='+<?php echo $GLOBALS["shadow_supplier_rec_id"]; ?>);
        $("#header_dialog").dialog({
            title:"Supplier Headers",
            modal: true, 
            resizable: false, 
            draggable: true,
            width: '890', 
            height: '493'               

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
                            <td valign=top width=17% class=BodyText><img src="/media/headers/<?php echo $supplierheader["MEDIA_NAME"] ?>" height="80"/></td>
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
    <div id="header_dialog" style="background-color: #EEEEEE;">  
        <iframe src="/dashboard/dm/src/header.php?instanceID=<?php echo $instanceID ?>" width="850" height="454" id="headeruploaderiframe" name="headeruploaderiframe"/>
    </div>
</div>