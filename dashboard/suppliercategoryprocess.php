<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once $path_doc_root . "/config.php";
include_once "../common/util/DBTransaction.php";
include_once "../common/dao/TplShadowSupplierDistributorDAO.php";

$functionname=$_POST['functionname'];
if($functionname=="addsuppliercategory"){
    echo addSupplierCategory();    
}

function addSupplierCategory($field, $client_instance_id, $client_data_name) {

    if (!isset($_SESSION[$client_data_name])) {
        return null;
    }
    $client_data = $_SESSION[$client_data_name];
    //var_dump($client_data);
    //clientid refers to the instance ID of the request for a client
    if (!isset($client_data[$client_instance_id])) {
        return null;
    } else {
        $client_info = $client_data[$client_instance_id];
        if (!isset($client_info[$field])) {
            return null;
        } else {
            return $client_info[$field];
        }
    }
}

?>
