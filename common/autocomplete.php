<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once ($path_doc_root . "/config.php");
include_once $path_doc_root . "/common/util/DBTransaction.php";
include_once $path_doc_root . "/common/dao/TplBrandDAO.php";

$ac_term = "%" . $_GET['term'] . "%";
$dbtrans = new DBTransaction();
$dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
$array = array($ac_term);
$tplbranddao = new TplBrandDAO();
$brands = $tplbranddao->autoCompleteSelect($dbconn, $array);
$row_set = null;
foreach ($brands as $key => $brand) {
    $row['value'] = htmlentities(stripslashes($brand['NAME']));
    $row['id'] = (int) $brand['REC_ID'];
    $row_set[] = $row; //build an array
}
echo json_encode($row_set); //format the array into json data
?>
