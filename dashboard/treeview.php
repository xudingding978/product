
 

<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . "/include/KoolPHPSuite/KoolTreeView/kooltreeview.php");
include_once($path_doc_root . "/common/sessionhandler.php");
include_once "../common/util/DBTransaction.php";
include_once "../common/dao/TplCategoryDAO.php";
include_once "../common/dao/TplDirectoryDAO.php";

$treeview = new KoolTreeView("treeview");
$treeview->imageFolder = "/images";
$treeview->styleFolder = "KoolPHPSuite/KoolTreeView/styles/default";
$treeview->selectEnable = true;
$treeview->width = "380px";
$treeview->height = "500";
$treeview->overflow = "auto";
$treeview->showLines = true;


//$session_maintain = new session_maintain();
$instanceID = $_GET["instanceID"];
$dbtrans = new DBTransaction();
$dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
$TplCategoryDAO = new TplCategoryDAO();

function PopulateProductTree($treeview, $directory_id, $node) {

    global $TplCategoryDAO;
    global $dbconn;

    //$tpl_db = new tpldb;
    include($GLOBALS["path_doc_root"] . "/common/sessionhandler.php");
    $session_maintain = new session_maintain();
    //$GLOBALS["shadow_supplier_rec_id"]
    //$param_arr = array(1);
    //error_log("OUTSIDE...............................................................:" . $GLOBALS["shadow_supplier_rec_id"]);
    //$maxtreelevellist = $TplCategoryDAO->selectMaxTreeLevel($dbconn, $param_arr);
//    if (count($maxtreelevellist) > 0) {
//
//        $maxtreelevel = $maxtreelevellist[0]["maxtreelevel"];
//    } else {
//        //error_log("maxtreelevellist...............................................................:".$maxtreelevel);
//        return;
//    }

    //$category_info_old = null;
    // $category_info_new = null;
    //for ($i = 1; $i <= $maxtreelevel; $i++) {

        //$category_info_old = $category_info_new;
    //param_arr = array($directory_id, $i);
        $param_arr = array($directory_id);
        $categorylist = $TplCategoryDAO->select($dbconn, $param_arr);
        foreach ($categorylist as $key => $category) {
            // error_log("INSIDE...............................................................");
            //$category_info_new = array($category["REC_ID"] => $category["NAME"]);
            
            if ($category["TREE_LEVEL"] != 1) {
                //  error_log("NOT equal one...............................................................");
                //   $category["PARENT_PRODUCT_CATEGORY_REC_ID"];
                //  error_log("Value..............................................................:".$category_info_old[$category["PARENT_PRODUCT_CATEGORY_REC_ID"]]);
                // if (isset($category_info_old[$category["PARENT_PRODUCT_CATEGORY_REC_ID"]])) {
                //     error_log("Innnnnnnnnn..............................................................");
                $treeview->Add($category["PARENT_CATEGORY_REC_ID"], $category["REC_ID"], $category["NAME"]);
                // }
            } else {
                //error_log("Equal one...............................................................");
                $treeview->Add("root", $category["REC_ID"], $category["NAME"]);
            }
        }
   // }




//
//    $cats = $tpl_db->GetDirectoryCategories($GLOBALS["shadow_directory_id"], $ACategoryParent);
//    if ($cats) {
//        foreach ($cats as $key => $cat) {
//            if ($product_based) {
//                $newnode = $treeview->Add($node, $cat["REC_ID"], $cat["NAME"]);
//                $catid = $cat["REC_ID"];
//                PopulateProductTree($treeview, $catid, $catid);
//            } else {
//                $subcats = $tpl_db->GetDirectoryCategories($GLOBALS["shadow_directory_id"], $ACategoryParent);
//                if ($subcats) {
//                    $newnode = $treeview->Add($node, $cat["REC_ID"], $cat["NAME"]);
//                    $catid = $cat["REC_ID"];
//                    PopulateProductTree($treeview, $catid, $catid);
//                }
//            }
//        }
//    }
}

$tpldirectorydao = new TplDirectoryDAO();
$param_arr = array(1);
$directory = $tpldirectorydao->select($dbconn, $param_arr);

//error_log("Count..........................................:".$directory[0]["NAME"]);
//$tpl_db = new tpldb;
//$directory = $tpl_db->getRecord('tpl_directory', $shadow_directory_id);
$root = $treeview->getRootNode();
$shadow_root = $session_maintain->get_client_field("shadow_root", $instanceID, "client_data");
$root->text = $directory[0]["NAME"] . " - " . $directory[0]["DIRECTORY_DESC"];
$root->id = "root";
$root->expand = true;
$root->image = "blank.png";

//$treeview->Add("root", "Tree Test", "Tree Test");

PopulateProductTree($treeview, 1, "root");
$session_maintain->add_client_field("active_product_category_rec_id","treeview.root", $instanceID, "client_data");
//$session_maintain->add_client_field("active_product_category_rec_id",1, $instanceID, "client_data");
$treeview->selectEnable = true; 
?>