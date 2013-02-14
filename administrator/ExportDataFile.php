<?php

include_once("brand.php");
include_once("product.php");
include_once("supplier.php");
include_once("shaw.php");
include_once("helper.php");
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . "/config.php");

//global $OUTPUT;
$directory = $_POST["dir"];
$type = $_POST["type"];
$year = $_POST["year"];
$version = $_POST["version"];
$path = $_POST["path"];
error_log("type.........................:".$type);
$func = new Helper();
$func->initdb($DB_HOST, $DB_PORT, $DB_USER, $DB_PASS, $ADMIN_DB_NAME);
$object = null;
if ($type == BRAND_TYPE)
    $object = new Brand($directory, $year);
else if ($type == PRODUCT_TYPE)
    $object = new Product($directory, $year);
else if ($type == SUPPLIER_TYPE)
    $object = new Supplier($directory, $year);
else if ($type == SHAWS_SPECIAL_TYPE)
    $object = new Shaw($directory, $year);
//$object->setfile($OUTPUT . "d" . $directory . "_t" . $type . "_" . $year . ".txt");

$template = $func->get_template($directory, $type, $year, $version);

$object->settemplate($template);

$object->exec();

$requesttype;
switch ($type) {
    default:
    case BRAND_TYPE:
        $requesttype = "_brand";
        break;
    case PRODUCT_TYPE:
        $requesttype = "_product";
        break;
    case SUPPLIER_TYPE:
        $requesttype = "_supplier";
        break;
    case SHAWS_SPECIAL_TYPE:
        $requesttype = "_shaws";
        break;
}


header('Content-type: application/txt');
header('Content-Disposition: attachment; filename=' . $path .$requesttype. '.txt');

//setting the cache expiration to 30 seconds ahead of current time. an IE 8 issue when opening the data directly in the browser without first saving it to a file
$expiredate = time() + 30;
$expireheader = "Expires: " . gmdate("D, d M Y G:i:s", $expiredate) . " GMT";
header($expireheader);

echo implode("\r\n", $object->getDocContent()) ;
exit;
//file_put_contents($_SERVER['DOCUMENT_ROOT']."/log.txt", print_r(implode("\r\n",$object->getDocContent()), true));
?>
