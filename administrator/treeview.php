<?php

if (!isset($_SESSION)) {
    session_start();
}
if (!isset($_SESSION["uid"])) {
    include("login.php");
    return;
}

include_once("KoolPHPSuite/KoolTreeView/kooltreeview.php");
require_once("../config.php");
require_once("dataconnection.php");

// OK, lets initialize the tree view parameters
$treeview = new KoolTreeView("treeview");
$treeview->imageFolder = "/images";
$treeview->styleFolder = "KoolPHPSuite/KoolTreeView/styles/default";
$treeview->selectEnable = true;
$treeview->width = "250px";
$treeview->height = "450";
$treeview->overflow = "auto";
$treeview->showLines = true;

function getDirectoryCategories1($directory_rec_id, $parent_rec_id) {
    global $DB_NAME, $DB_HOST, $DB_USER, $DB_PASS;
    $db_con = mysql_connect($DB_HOST, $DB_USER, $DB_PASS);
    mysql_select_db($DB_NAME, $db_con);
    $ds = new MySQLDataSource($db_con);
    $query = "SELECT tpl_product_category.REC_ID, tpl_product_category.NAME FROM " . $DB_NAME . ".tpl_product_category INNER JOIN " . $DB_NAME . ".tpl_product_category_directory ON (tpl_product_category.REC_ID = tpl_product_category_directory.PRODUCT_CATEGORY_REC_ID) WHERE (tpl_product_category_directory.DIRECTORY_REC_ID = " . $directory_rec_id . ") AND";
    if ($parent_rec_id > 0)
        $query = $query . " (tpl_product_category.PARENT_PRODUCT_CATEGORY_REC_ID = " . $parent_rec_id . ")";
    else
        $query = $query . " (tpl_product_category.PARENT_PRODUCT_CATEGORY_REC_ID IS NULL)";
    $ds->SelectCommand($query);
    $ret = $ds->getfields();
    $n = count($ret);
    return $ret;
}

function PopulateProductTree($dbConnectionObj, $treeview, $ACategoryParent, $node) {
    $cats = getDirectoryCategories1(2, $ACategoryParent);
    if ($cats) {
        foreach ($cats as $key => $cat) {
            if ($product_based) {
                $newnode = $treeview->Add($node, $cat["REC_ID"], $cat["NAME"]);
                $catid = $cat["REC_ID"];
                PopulateProductTree($dbConnectionObj, $treeview, $catid, $catid);
            } else {
                $subcats = getDirectoryCategories1(2, $cat["REC_ID"]);
                if ($subcats) {
                    $newnode = $treeview->Add($node, $cat["REC_ID"], $cat["NAME"]);
                    $catid = $cat["REC_ID"];
                    PopulateProductTree($dbConnectionObj, $treeview, $catid, $catid);
                }
            }
        }
    }
}

global $DB_NAME;
$dbConnectionObj = new DataConnection(MYSQLI, $DB_NAME);
if ($dbConnectionObj->Connect()) {
    $directory = $dbConnectionObj->getDirectory(2);
    $root = $treeview->getRootNode();
    $root->text = $directory["NAME"] . " - " . $directory["CURRENT_YEAR"];
    $root->id = "root";
    $root->expand = true;
    $root->image = "blank.png";
    // OK, now, lets setup the root nodes
    PopulateProductTree($dbConnectionObj, $treeview, 0, "root");
    $_SESSION["active_product_category_rec_id"] = "treeview.root";
    $treeview->selectEnable = true;
    $dbConnectionObj->Disconnect();
}
?>