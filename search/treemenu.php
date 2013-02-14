<?php

if (!isset($_SESSION))
    session_start();

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . "/config.php");
include_once($path_doc_root . "/include/db_class.php");
require($path_doc_root . "/include/KoolPHPSuite/KoolTreeView/kooltreeview.php");
require($path_doc_root . "/include/KoolPHPSuite/KoolAjax/koolajax.php");
include_once($path_doc_root . "/include/ads_class.php");

$treeview = new KoolTreeView("treeview");
$treeview->imageFolder = "./../include/KoolPHPSuite/KoolTreeView/icons";
$treeview->styleFolder = "./../include/KoolPHPSuite/KoolTreeView/styles/default";
$treeview->selectEnable = true;
$treeview->width = "275px";
$treeview->height = "auto";
$treeview->overflow = "auto";

$treeview->showLines = true;
$root = $treeview->getRootNode();
$root->expand = true;
$root->showPlusMinus = false;
$root->visible = true;

if ($koolajax->isCallback)
    sleep(0);

// $leaderboards=get_ads("leaderboard");

function CB_getSubcategories($isBev, $catID, $start, $end) {
    $db = new Db;
    $req = $db->getjoinrows("tpl_category_directory.DIRECTORY_REC_ID < 8 AND  PARENT_CATEGORY_REC_ID=" . $catID . " ORDER BY NAME ASC", "tpl_category  INNER JOIN tpl_category_directory  on  tpl_category.REC_ID=tpl_category_directory.CATEGORY_REC_ID", "", "tpl_category.*");
    $count = count($req);
    $categories = $db->getrows("PARENT_CATEGORY_REC_ID=" . $catID . " ORDER BY NAME ASC LIMIT " . $start . "," . $end, "tpl_category", "");
    $catlist = "";
    $total_expected = $start + $end;
    $cntr = $start;
    foreach ($categories as $category) {
        $cntr++;
        $recID = $category["REC_ID"];
        // limiting 1 result for query optimization as this area only to identify if the node is parent.
        $childs = $db->getjoinrows("tpl_category_directory.DIRECTORY_REC_ID<8 and  tpl_category.PARENT_CATEGORY_REC_ID=" . $recID . " ORDER BY NAME ASC LIMIT 1", "tpl_category  INNER JOIN tpl_category_directory  on  tpl_category.REC_ID=tpl_category_directory.CATEGORY_REC_ID", "", "tpl_category.*");
        $size = sizeof($childs);
        //$catlist.=$category["NAME"]."|$recID|$size::";
        if ($size > 0) {       // This is parent or is a Beverage parent or child then add this to the list
            // field delimeter "|" -- not "," -- there were are catnames with name
            // check also if this is a leaf from beverages, if it is then check if has product before add in the list
            $catlist.=$category["NAME"] . "|$recID|$size::";
        } else { // Check if this leaf has supplier
            $usetable = ($isBev == 1) ? "tpl_product" : "tpl_supplier_product_category";
            $record = $db->getrows("CATEGORY_REC_ID=" . $recID . " LIMIT 1", $usetable, "");
            if ($record) {
                // if this has supplier information then add in the list
                $catlist.=$category["NAME"] . "|$recID|$size::";
            } //else do not
        }
    }
    if ($cntr < $count) {
        //this has 'more' content
        $recID = $cntr + 999999;
        $catlist.="<b><u>more</u></b>|" . $recID . "|0::";
    }
    return $catlist;
}

// function CB_getSubcategories(

function CB_hasFinalLeaf($catID) {
    $db = new Db;

    $categories = $db->getjoinrows("tpl_category_directory.DIRECTORY_REC_ID < 8 and  PARENT_CATEGORY_REC_ID=" . $catID . " ORDER BY NAME ASC", "tpl_category  INNER JOIN tpl_category_directory  on  tpl_category.REC_ID=tpl_category_directory.CATEGORY_REC_ID", "", "tpl_category.*");
    $hasFinalLeaf = "false";
    foreach ($categories as $category) {
        $recID = $category["REC_ID"];
        // limiting 1 result for query optimization as this area only to identify if the node is parent.

        $childs = $db->getjoinrows("tpl_category_directory.DIRECTORY_REC_ID < 8 and  PARENT_CATEGORY_REC_ID=" . $recID . " ORDER BY NAME ASC", "tpl_category  INNER JOIN tpl_category_directory  on  tpl_category.REC_ID=tpl_category_directory.CATEGORY_REC_ID", "", "tpl_category.*");
        if (sizeof($childs) == 0) {
            $hasFinalLeaf = "true";
            break;
        }
    }
    return $hasFinalLeaf;
}

function CB_isFinalLeaf($catID) {
    $db = new Db;
    $isLeaf = "false";

    $childs = $db->getjoinrows("tpl_category_directory.DIRECTORY_REC_ID < 8 and  PARENT_CATEGORY_REC_ID=" . $catID . " ORDER BY NAME ASC", "tpl_category  INNER JOIN tpl_category_directory  on  tpl_category.REC_ID=tpl_category_directory.CATEGORY_REC_ID", "", "tpl_category.*");
    if (sizeof($childs) == 0)
        $isLeaf = "true";
    return $isLeaf;
}

$koolajax->enableFunction("CB_getSubcategories");
$koolajax->enableFunction("CB_hasFinalLeaf");
$koolajax->enableFunction("CB_isFinalLeaf");

$treeview->selectEnable = true;
$db = new Db;
// get root categories
// Modified by JL to only pull through required directories

$root_categories = array();

foreach ($DIRECTORIES as $directory_id) {
    $root_categories_by_dir = $db->getjoinrows("tpl_category_directory.DIRECTORY_REC_ID = " . $directory_id . " AND tpl_category.PARENT_CATEGORY_REC_ID IS NULL ORDER BY PRINT_ORDER ASC", "tpl_category  INNER JOIN tpl_category_directory  ON  tpl_category.REC_ID=tpl_category_directory.CATEGORY_REC_ID", "", "tpl_category.*");
    $root_categories = array_merge($root_categories, $root_categories_by_dir);
}

foreach ($root_categories as $category) {
    $id = $category["REC_ID"];
    $children = $db->getrows("PARENT_CATEGORY_REC_ID=" . $id, "tpl_category", "");
    if (sizeof($children) > 0) {
        $node = $treeview->Add("root", $id, $category["NAME"], false, "blank.png", "null.php");
        $node = $treeview->Add($id, "~" . $id, "", false, "blank.png", "");
    } else {
        $node = $treeview->Add("root", $id, $category["NAME"], false, "blank.png", "");
    }
}
?>