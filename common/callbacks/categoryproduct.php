<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . '/config.php');
include_once $path_doc_root . "/common/util/DBTransaction.php";
include_once $path_doc_root . "/common/dao/TplShadowSupplierCategoryProductDAO.php";
include_once $path_doc_root . "/common/dao/TplShadowSupplierCategoryproductMediaDAO.php";
include_once $path_doc_root . "/common/dao/TplSupplierMediaDAO.php";
include_once $path_doc_root . "/common/dao/TplMediaTypesDAO.php";
include_once $path_doc_root . "/common/dao/TplSupplierCategoryDAO.php";
include_once $path_doc_root . "/common/dao/TplSupplierCategoryMediaDAO.php";
include_once $path_doc_root . "/common/dao/TplShadowSupplierBrandDAO.php";
include_once $path_doc_root . "/common/dao/TplShadowSupplierBrandMediaDAO.php";
include_once $path_doc_root . "/common/dao/TplShadowSupplierCategoryBrandDAO.php";
include_once $path_doc_root . "/common/dao/TplBrandDAO.php";
include_once $path_doc_root . "/common/dao/TplBrandDirectoryDAO.php";

$action = $_REQUEST["action"];
error_log("Action...........................................:" . $action);
/* Product Modification  */
if ($action == 'productinsert') {
    error_log("productInsert");
    productInsert();
}
if ($action == 'productdelete') {
    error_log("productdelete");
    productDelete();
}
if ($action == 'productupdate') {
    error_log("productupdate");
    productUpdate();
}
/* Image Modification  */
if ($action == 'imageassign') {
    error_log("imageassign");
    imageAssign();
}
if ($action == 'imagedelete') {
    error_log("imagedelete");
    imageDelete();
}

/* Video Modification  */
if ($action == 'videoinsert') {
    error_log("productInsert");
    videoInsert();
}
if ($action == 'videodelete') {
    error_log("videodelete");
    videoDelete();
}
if ($action == 'videoupdate') {
    error_log("productupdate");
    videoUpdate();
}
if ($action == 'videoassign') {
    error_log("videoassign");
    videoAssign();
}
/* Category Modification  */
if ($action == 'categoryadd') {
    error_log("categoryadd");
    categoryAdd();
}
if ($action == 'categoryremove') {
    error_log("categoryremove");
    categoryRemove();
}
/* Brand Modification  */
if ($action == 'brandaddremove') {
    error_log("brandaddremove");
    brandAddRemove();
}
if ($action == 'brandremove') {
    error_log("brandremove");
    brandRemove();
}

if ($action == 'categorybrandremove') {
    error_log("categorybrandremove");
    CategoryBrandRemove();
}
if ($action == 'categorybrandinsert') {
    error_log("categorybrandinsert");
    CategoryBrandInsert();
}
//if ($action == 'brandupdate') {
//    error_log("brandupdate");
//    brandUpdate();
//}

function productUpdate() {
    try {

        $name = $_REQUEST["name"];
        $catogoryid = $_REQUEST["catogoryid"];
        $supplierid = $_REQUEST["supplierid"];
        $desc = $_REQUEST["desc"];
        $pro_price = $_REQUEST["pro_price"];    
        $pro_offer_price = $_REQUEST["pro_offer_price"];
        $pro_checkout_url = $_REQUEST["pro_checkout_url"]; 
        $rec_id = $_REQUEST["recid"];


        $dbtrans = new DBTransaction();
        $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
        $tplshadowsuppliercategoryproductdao = new TplShadowSupplierCategoryProductDAO();
        $array = array($catogoryid, $pro_checkout_url, 1,$name, $desc, $pro_price,$pro_offer_price, $supplierid, $rec_id);
        $tplshadowsuppliercategoryproductdao->update($dbconn, $array);
        error_log("3");
        $tplshadowsuppliercategoryproductmediadao = new TplShadowSupplierCategoryproductMediaDAO();
        $param_arr = array($rec_id);
        $tplshadowsuppliercategoryproductmediadao->delete($dbconn, $param_arr);
        $imageliststr = $_REQUEST["imageliststr"];
        $imagelistarray = explode("|", $imageliststr);
        error_log("4");
        foreach ($imagelistarray as $key => $value) {
            $array = array($rec_id, $value, $supplierid);
            $tplshadowsuppliercategoryproductmediadao->insert($dbconn, $array);
        }
        error_log("5");
        echo "Success";
    } catch (Exception $e) {
        echo "Error!: " . $e->getMessage();
        echo "Fail";
        ;
    }
}

function productInsert() {
    try {
        error_log("1");
        $name = $_REQUEST["name"];
        $catogoryid = $_REQUEST["catogoryid"];
        $supplierid = $_REQUEST["supplierid"];
        $desc = $_REQUEST["desc"];
        $pro_price = $_REQUEST["pro_price"];    
        $pro_offer_price = $_REQUEST["pro_offer_price"];
        $pro_checkout_url = $_REQUEST["pro_checkout_url"]; 

        $dbtrans = new DBTransaction();
        $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
        $tplshadowsuppliercategoryproductdao = new TplShadowSupplierCategoryProductDAO();
        $array = array($catogoryid, $pro_checkout_url, 1, $name, $desc, $pro_price,$pro_offer_price,$supplierid);
      
        $lastcatogoryproductid = $tplshadowsuppliercategoryproductdao->insert($dbconn, $array);
        error_log("3");
        $tplshadowsuppliercategoryproductmediadao = new TplShadowSupplierCategoryproductMediaDAO();

        $imageliststr = $_REQUEST["imageliststr"];
        $imagelistarray = explode("|", $imageliststr);
        error_log("4");
        foreach ($imagelistarray as $key => $value) {
            $array = array($lastcatogoryproductid, $value, $supplierid);
            $tplshadowsuppliercategoryproductmediadao->insert($dbconn, $array);
        }
        error_log("5");
        echo "Success";
    } catch (Exception $e) {
        echo "Error!: " . $e->getMessage();
        echo "Fail";
        ;
    }
}

function productDelete() {
    try {

        $productcatogoryid = $_REQUEST["productcatogoryid"];
        $dbtrans = new DBTransaction();
        $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
        $tplshadowsuppliercategoryproductdao = new TplShadowSupplierCategoryProductDAO();
        $array = array($productcatogoryid);
        error_log("productcatogoryid........................................:".$productcatogoryid);
        $tplshadowsuppliercategoryproductdao->delete($dbconn, $array);

        $tplshadowsuppliercategoryproductmediadao = new TplShadowSupplierCategoryproductMediaDAO();

        $paraarray = array($productcatogoryid);
        $tplshadowsuppliercategoryproductmediadao->delete($dbconn, $paraarray);

        echo "Success";
    } catch (Exception $e) {
        error_log($e->getMessage());
        echo "Error!: " . $e->getMessage();
        echo "Fail";
        ;
    }
}

/* Video Functionalities */

function videoUpdate() {
    try {
        $name = $_REQUEST["video_name"];
        $descri = $_REQUEST["video_desc"];
        $emberd_source = $_REQUEST["emberdsource"];
        $rec_id = $_REQUEST["recid"];

        $dbtrans = new DBTransaction();
        $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);

        $tplsuppliermediasdao = new TplSupplierMediaDAO();
        $param_arr = array($name, "", "", $descri, 0, $emberd_source, 1, 0, 0, $rec_id);
        $tplsuppliermediasdao->update($dbconn, $param_arr);

        echo "Success";
    } catch (Exception $e) {
        echo "Error!: " . $e->getMessage();
        echo "Fail";
        ;
    }
}

function videoInsert() {
    try {
        error_log("videoInsert.............................:1");
        $name = $_REQUEST["video_name"];
        $supplierid = $_REQUEST["supplierid"];
        $descri = $_REQUEST["video_desc"];
        $emberd_source = $_REQUEST["emberdsource"];

        error_log("videoInsert.............................:2");
        $dbtrans = new DBTransaction();
        $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
        error_log("videoInsert.............................:3");
        $tplmediatypesdao = new TplMediaTypesDAO();
        $param_arr = array("video", "video");
        $result = $tplmediatypesdao->select($dbconn, $param_arr);
        error_log("videoInsert.............................:4");
        $media_type_rec_id = 0;
        if (isset($result[0]['REC_ID'])) {
            $media_type_rec_id = $result[0]['REC_ID'];
        }
        error_log("videoInsert.............................:5");
        $tplsuppliermediasdao = new TplSupplierMediaDAO();
        $param_arr = array($name, "", "", $media_type_rec_id, $descri, 0, $emberd_source, 1, $supplierid, 0, 0);
        error_log("Name............................:" . $name);
        error_log("media_type_rec_id............................:" . $media_type_rec_id);
        error_log("descri...........................:" . $descri);
        error_log("emberd_source...........................:" . $emberd_source);
        error_log("supplierid..............................:" . $supplierid);
        $tplsuppliermediasdao->insert($dbconn, $param_arr);
        error_log("videoInsert.............................:6");
        echo "Success";
    } catch (Exception $e) {
        echo "Error!: " . $e->getMessage();
        echo "Fail";
        ;
    }
}

/* Video assigning to Category   */

function videoDelete() {
    try {
        $rec_id = $_REQUEST["recid"];
        $suppliercategoryid = $_REQUEST["suppliercategoryid"];
        $dbtrans = new DBTransaction();
        $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
        $tplsuppliermediasdao = new TplSupplierMediaDAO();
        $array = array($rec_id);
        $tplsuppliermediasdao->delete($dbconn, $array);
        echo "Success";
    } catch (Exception $e) {
        echo "Error!: " . $e->getMessage();
        echo "Fail";
        ;
    }
}

function videoAssign() {
    try {
        $rec_id = $_REQUEST["recid"];

        $state = $_REQUEST["state"];
        $suppliercategoryid = $_REQUEST["suppliercategoryid"];
        $dbtrans = new DBTransaction();
        //error_log("rec_id..............................................:".$rec_id);
        $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
        $tplsuppliercategorymediadao = new TplSupplierCategoryMediaDAO();
        $array = array($suppliercategoryid, $rec_id);
        if ($state == "add") {
            $tplsuppliercategorymediadao->insert($dbconn, $array);
        } else {
            $tplsuppliercategorymediadao->delete($dbconn, $array);
        }
        echo "Success";
    } catch (Exception $e) {
        echo "Error!: " . $e->getMessage();
        echo "Fail";
        ;
    }
}

/* Image functionalities     */

function imageAssign() {
    try {
        $rec_id = $_REQUEST["recid"];
        $state = $_REQUEST["state"];
        $suppliercategoryid = $_REQUEST["suppliercategoryid"];
        $dbtrans = new DBTransaction();
        //error_log("rec_id..............................................:".$rec_id);
        $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
        $tplsuppliercategorymediadao = new TplSupplierCategoryMediaDAO();
        $array = array($suppliercategoryid, $rec_id);
        if ($state == "add") {
            $tplsuppliercategorymediadao->insert($dbconn, $array);
        } else {
            $tplsuppliercategorymediadao->delete($dbconn, $array);
        }
        echo "Success";
    } catch (Exception $e) {
        echo "Error!: " . $e->getMessage();
        echo "Fail";
        ;
    }
}

function imageDelete() {
    try {
        $rec_id = $_REQUEST["recid"];
        //$suppliercategoryid = $_REQUEST["suppliercategoryid"];
        $dbtrans = new DBTransaction();
        $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
        $tplsuppliermediasdao = new TplSupplierMediaDAO();
        $array = array($rec_id);
        $tplsuppliermediasdao->delete($dbconn, $array);
        echo "Success";
    } catch (Exception $e) {
        echo "Error!: " . $e->getMessage();
        echo "Fail";
        ;
    }
}

/* Category Functionalities */

function categoryRemove() {
    try {
        $rec_id = $_REQUEST["recid"];
        $supplierid = $_REQUEST["supplierid"];
        $dbtrans = new DBTransaction();
        $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
        $tplsuppliercategorydao = new TplSupplierCategoryDAO();
        $array = array($rec_id, $supplierid);
        $tplsuppliercategorydao->delete($dbconn, $array);
        echo "Success";
    } catch (Exception $e) {
        echo "Error!: " . $e->getMessage();
        echo "Fail";
        ;
    }
}

function categoryAdd() {
    try {
        $rec_id = $_REQUEST["recid"];
        $supplierid = $_REQUEST["supplierid"];
        $dbtrans = new DBTransaction();
        $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
        $tplsuppliercategorydao = new TplSupplierCategoryDAO();
        $array = array($rec_id, $supplierid);
        $tplsuppliercategorydao->insert($dbconn, $array);
        echo "Success";
    } catch (Exception $e) {
        echo "Error!: " . $e->getMessage();
        echo "Fail";
        ;
    }
}

/* Brand Modification  */

function brandAddRemove() {
    try {
        $directory_id = 1;            
        $supplierid = $_REQUEST["supplierid"];
        $logolisting = $_REQUEST["logo_listing"];
        $brand_name = $_REQUEST["BrandName"];
        $rec_id = $_REQUEST["recid"];
        $media_id = $_REQUEST["imagelist"];
        error_log("Media ID..................................:".$media_id);
        $dbtrans = new DBTransaction();
        $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
        $dbconn->beginTransaction();
        $tplbranddao = new TplBrandDAO();
        $param_arr = array($brand_name);
        $brand = $tplbranddao->nameSelect($dbconn, $param_arr);
        if ($brand) {
            $brand_id = $brand[0]['REC_ID'];
        } else {
            $param_arr = array($brand_name);
            $brand_id = $tplbranddao->insert($dbconn, $param_arr);
        }
        $tplbranddirectorydao = new TplBrandDirectoryDAO();
        $param_arr = array($brand_id, $directory_id);
        $directorybrands = $tplbranddirectorydao->select($dbconn, $param_arr);
        if (!$directorybrands) {
            $param_arr = array($brand_id, $directory_id);
            $tplbranddirectorydao->insert($dbconn, $param_arr);
        }
        $tplshadowsupplierbranddao = new TplShadowSupplierBrandDAO();
        $tplshadowsupplierbrandmediadao = new TplShadowSupplierBrandMediaDAO();
        if ($rec_id == 0) {
            $param_arr = array('INSERT', $supplierid, $brand_id, $logolisting);
            $rec_id = $tplshadowsupplierbranddao->insert($dbconn, $param_arr);
        } else {
            $param_arr = array('UPDATE', $brand_id, $logolisting, $rec_id);
            $tplshadowsupplierbranddao->update($dbconn, $param_arr);
            $param_arr = array($rec_id);
            $tplshadowsupplierbrandmediadao->delete($dbconn, $param_arr);
        }
        $param_arr = array($rec_id, $media_id);
        $tplshadowsupplierbrandmediadao->insert($dbconn, $param_arr);


        $dbconn->commit();


        echo "Success";
    } catch (Exception $e) {
        echo "Error!: " . $e->getMessage();
        echo "Fail";
        ;
    }
}

function brandRemove() {
    try {

        $brandid = $_REQUEST["recid"];
        $suppliercategoryid = $_REQUEST["suppliercategoryid"];
        $array = array($brandid);

        $dbtrans = new DBTransaction();
        $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);


        $tplshadowsupplierbranddao = new TplShadowSupplierBrandDAO();
        $tplshadowsupplierbranddao->delete($dbconn, $array);

        $tplshadowsupplierbrandmediadao = new TplShadowSupplierBrandMediaDAO();
        $tplshadowsupplierbrandmediadao->delete($dbconn, $array);

        $array = array($brandid,$suppliercategoryid);
        $tplshadowsuppliercategorybranddao = new TplShadowSupplierCategoryBrandDAO();
        $tplshadowsuppliercategorybranddao->delete($dbconn, $array);

        echo "Success";
    } catch (Exception $e) {
        echo "Error!: " . $e->getMessage();
        echo "Fail";
        ;
    }
}

function CategoryBrandRemove() {
    try {

        $supplier_brand_id = $_REQUEST["recid"];
        $supplier_category_id = $_REQUEST["suppliercategoryid"];
        $array = array($supplier_brand_id, $supplier_category_id);

        $dbtrans = new DBTransaction();
        $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);


        $tplshadowsuppliercategorybranddao = new TplShadowSupplierCategoryBrandDAO();
        $tplshadowsuppliercategorybranddao->delete($dbconn, $array);

        echo "Success";
    } catch (Exception $e) {
        echo "Error!: " . $e->getMessage();
        echo "Fail";
        ;
    }
}

function CategoryBrandInsert() {
    try {

        $supplier_brand_id = $_REQUEST["recid"];
        $supplier_category_id = $_REQUEST["suppliercategoryid"];

        $dbtrans = new DBTransaction();
        $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);

        $array = array($supplier_brand_id, $supplier_category_id);
        $tplshadowsuppliercategorybranddao = new TplShadowSupplierCategoryBrandDAO();
        $tplshadowsuppliercategorybranddao->insert($dbconn, $array);

        echo "Success";
    } catch (Exception $e) {
        echo "Error!: " . $e->getMessage();
        echo "Fail";
        ;
    }
}

?>
