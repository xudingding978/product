<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . "/config.php");

//require $path_doc_root . "/include/KoolPHPSuite/KoolUploader/kooluploader.php";
//include_once($path_doc_root . "/include/tpldb_class.php");
include_once($path_doc_root . "/include/image_resize.php");
include_once($path_doc_root . "/dashboard/dm/media_handler.php");
include_once($path_doc_root . "/common/sessionhandler.php");
include_once $path_doc_root . "/common/util/DBTransaction.php";
include_once $path_doc_root . "/common/dao/TplMediaTypesDAO.php";
include_once $path_doc_root . "/common/dao/TplSupplierMediaDAO.php";

header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
// always modified
header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");
// HTTP/1.1
header("Cache-Control: no-store, no-cache, must-revalidate");
header("Cache-Control: post-check=0, pre-check=0", false);
// HTTP/1.0
header("Pragma: no-cache");
//$tmp_file_name = $_FILES["fileuploader"]["name"];
//$media_category = $_POST["media_url"];
//$media_type = $_POST["media_type"];
error_log("Temp File Path ...................:" . sys_get_temp_dir());


//
//if ($_FILES["fileuploader"]["error"] > 0) {
//    error_log("Error: " . $_FILES["fileuploader"]["error"] . "<br />");
//} else {
//    error_log("Upload: " . $_FILES["fileuploader"]["name"] . "<br />");
//    error_log("Type: " . $_FILES["fileuploader"]["type"] . "<br />");
//    error_log("Size: " . ($_FILES["fileuploader"]["size"] / 1024) . " Kb<br />");
//    error_log("Stored in: " . $_FILES["fileuploader"]["tmp_name"]);
//}
$tempfilename = $_FILES["fileuploader"]["tmp_name"];

$file_size = $_FILES["fileuploader"]["size"];
$old_medianame = $_FILES["fileuploader"]["tmp_name"];
//$instanceID1 = $_POST["instanceID"];
$supplierid = $_POST["supplierid"];


$media_category = $_POST["media_category"];
error_log("Photo Gallery..Value......................:".$media_category);
if ($media_category != 'pg') {   
    $rec_id = $_POST["rec_id"];
    $media_name = $_POST["media_name"];
    $media_url = $_POST["media_url"];
    $descri = $_POST["media_desc"];
    $is_int_source = $_POST["media_loc"];
    $media_embed_source = $_POST["media_embed_source"];
    $is_embed_source = $_POST["is_embed_source"];
    $is_high_resol = $_POST["reso_type"];
    $mediafolder = $_POST["mediafolder"];
    $actualfilename = $media_name . "_" . $supplierid . "." . substr(strrchr($_FILES["fileuploader"]["name"], '.'), 1);
    if($media_category=="category"){
      header("Location: /dialogs/ui/supplier-images.php");  
      $media_category="logos";
    }else{
      header("Location: /dashboard/dm/src/mediauploader.php?category=logos&folder=logos&recid=" . $rec_id . "&supplierid=" . $supplierid . "&status=success");
    }
} else {
    $rec_id = 0;
    $media_name = $_FILES["fileuploader"]["name"];
    $media_url = "";
    $descri = "";
    $is_int_source = "";
    $media_embed_source = "";
    $is_embed_source = 0;
    $is_high_resol = 0;
    $mediafolder = 'pg';
    $actualfilename=$media_name;
    header("Location: /dashboard/dm/supplier-photo-gallery-upload.php?supplierid=".$supplierid);
}


error_log("Media Upload 0001");
$media_handler = new mediahandler();
error_log("Media Upload 0002");
$media_handler->MoveFileExactLocation($tempfilename, $actualfilename, $mediafolder);

error_log("Media Upload 0003");

DoTPLUpdateSupplierMediaDetails($rec_id, $actualfilename, $media_name, $media_url, $media_category, $descri, $is_int_source, $media_embed_source, $is_embed_source, $is_high_resol, $tempfilename, $mediafolder, $file_size, $old_medianame, $file_size);

exit;



//
//
////Create handle object and edit upload settings.
////$kulhandle = new KoolUploadHandler();
////
////$kulhandle->allowedExtension = $file_format;
////
////// $media_temp_path=sys_get_temp_dir();
////
////$kulhandle->targetFolder = $media_temp_path;
////echo $kulhandle->handleUpload();
//if ($media_type != null && $media_type == 'pg') {
//    // rename($media_temp_path."/".$file_name, $media_temp_path."/".$file_new_name); 
//    /* Creating thumbnail image */
//    $image = new SimpleImage();
//    $image->load($media_temp_path . "/" . $file_name);
//    $image->resizeToWidth(450);
//    $image->output();
//    $image->save($media_temp_path . "/" . $file_new_name);
//
//    unlink($media_temp_path . "/" . $file_name);
//
//    $image->load($media_temp_path . "/" . $file_new_name);
//    $image->resizeToWidth(94);
//    $image->output();

//
//    $file_size = filesize($media_temp_path . "/" . $file_new_name);
//
//    $tpl_db = new tpldb;
//    $tpl_db->UpdateSupplierMediaDetails('0', $name, $file_new_name, '/media/photo_gallery/' . $file_new_name, '1', 'Photo gallery Image', '1', '', '0', '0', $supplier_rec_id, $client_rec_id, $file_size);
//}
//
//function UpdateMediaPersistence($name, $media_name, $supplier_rec_id, $client_rec_id) {
//    UpdateSupplierMediaDetails('0', $name, $file_new_name, '/media/photo_gallery/' . $file_new_name, '1', 'Photo gallery Image', '1', '', '0', '0', $supplier_rec_id, $client_rec_id);
//}

function DoTPLUpdateSupplierMediaDetails($rec_id, $actualfilename, $media_name, $media_url, $media_category, $descri, $is_int_source, $media_embed_source, $is_embed_source, $is_high_resol, $tempfilename, $mediafolder, $file_size, $old_medianame, $file_size) {
    //global $instanceID;
    //  $instanceID = $instanceID1;
//    include($GLOBALS["path_doc_root"] . "/common/sessionhandler.php");
//    if ($GLOBALS["client_user"]) {
//        $actualfilename = $media_name . "_" . $GLOBALS["shadow_supplier_id"] . "." . substr(strrchr($tempfilename, '.'), 1);
//        if ($tempfilename != "") {
//            $media_handler = new mediahandler();
//            $media_handler->MoveFileExactLocation($tempfilename, $actualfilename, $mediafolder, $old_medianame);
//        } else {
//            $actualfilename = $old_medianame;
//        }
    $dbtrans = new DBTransaction();
    $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
    $tplmediatypesdao = new TplMediaTypesDAO();
    $param_arr = array($media_category, substr(strrchr($actualfilename, '.'), 1));
    error_log("media_type....................:" . $media_category);
    error_log("Extention....................:" . substr(strrchr($actualfilename, '.'), 1));
    $result = $tplmediatypesdao->select($dbconn, $param_arr);

    // OK, lets initialize the database connection  
//        $tpl_db = new tpldb;
//        // This filtering part should have to do filter_var($field, FILTER_SANITIZE_EMAIL);
//        $db = new Db();
//        $result = $db->getrows("(MEDIA_CATEGORY='" . $media_type . "') and (MEDIA_TYPE='" . substr(strrchr($tempfilename, '.'), 1) . "')", "tpl_media_types", "");



    $updaterecid = 0;
    if (isset($result[0]['REC_ID'])) {
        $media_type_rec_id = $result[0]['REC_ID'];
        $updaterecid = 1;
    }
    //error_log("shadow_supplier_rec_id...............................:" . $GLOBALS["shadow_supplier_rec_id"]);
    $tplsuppliermediadao = new TplSupplierMediaDAO();
    if ($rec_id == 0) {
        $param_arr = array($media_name, $actualfilename, $media_url, $media_type_rec_id, $descri, $is_int_source, $media_embed_source, $is_embed_source, $GLOBALS["supplierid"], $is_high_resol, $file_size);
        $tplsuppliermediadao->insert($dbconn, $param_arr);
    } else {
        $param_arr = array($media_name, $actualfilename, $media_url, $descri, $is_int_source, $media_embed_source, $is_embed_source, $is_high_resol, $file_size, $rec_id);
        $tplsuppliermediadao->update($dbconn, $param_arr);
    }
    //$file_size = filesize($GLOBALS["path_doc_root"] . "/media/" . $mediafolder . "/" . $actualfilename);
    //$tpl_db->UpdateSupplierMediaDetails($rec_id, mysql_real_escape_string($media_name), $actualfilename, $media_url, $media_type_rec_id, mysql_real_escape_string($descri), $is_int_source, $media_embed_source, $is_embed_source, $is_high_resol, $GLOBALS["shadow_supplier_id"], $GLOBALS["shadow_root_id"], $file_size, $updaterecid);
    //construct new debug error logger	
    //$logme->debug2log("DoTPLUpdateSupplierMediaDetails-initialize:SUCCESS");   
    //  return "SUCCESS";
//    } else {
//
//        $logme->debug2log("DoTPLUpdateSupplierMediaDetails-initialize:FAIL");
//        return "FAIL";
//    }
}

?>
