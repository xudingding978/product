<?php

$GLOBALS["path_doc_root"] = $_SERVER["DOCUMENT_ROOT"];
include_once($GLOBALS["path_doc_root"] . "/config.php");
include_once($GLOBALS["path_doc_root"] . "/include/db_class.php");
include_once($GLOBALS["path_doc_root"] . "/include/tpldb_class.php");
include_once($GLOBALS["path_doc_root"] . "/include/KoolPHPSuite/KoolAjax/koolajax.php");
include_once($GLOBALS["path_doc_root"] . "/include/debuglog.php");
include_once($GLOBALS["path_doc_root"] . "/dashboard/dm/media_handler.php");
include_once($GLOBALS["path_doc_root"] . '/include/recaptchalib.php');
include_once $GLOBALS["path_doc_root"] . "/common/util/DBTransaction.php";
include_once $GLOBALS["path_doc_root"] . "/common/dao/TplClientDAO.php";
include_once $GLOBALS["path_doc_root"] . "/common/dao/TplShadowSupplierDAO.php";
include_once $GLOBALS["path_doc_root"] . "/common/dao/TplShadowSupplierBranchDAO.php";
include_once $GLOBALS["path_doc_root"] . "/common/dao/TplShadowSupplierDistributorDAO.php";
include_once $GLOBALS["path_doc_root"] . "/common/dao/TplShadowSupplierKeyPersonnelDAO.php";
include_once $GLOBALS["path_doc_root"] . "/common/dao/TplSupplierAwardsDAO.php";
include_once $GLOBALS["path_doc_root"] . "/common/dao/TplSupplierAccreditationsDAO.php";
include_once $GLOBALS["path_doc_root"] . "/common/dao/TplBrandDAO.php";
include_once $GLOBALS["path_doc_root"] . "/common/dao/TplBrandDirectoryDAO.php";
include_once $GLOBALS["path_doc_root"] . "/common/dao/TplShadowSupplierBrandDAO.php";
include_once $GLOBALS["path_doc_root"] . "/common/dao/TplSupplierMediaDAO.php";
include_once $GLOBALS["path_doc_root"] . "/common/dao/TplMediaTypesDAO.php";




if (isset($_POST['action'])) {
    if ($_POST['action'] == "login") {
        $tempEmail = $_POST['u'];


        require_once($GLOBALS["path_doc_root"] . "/common/sessionmaintain.php");
//    $tpl_db = new tpldb;
//    $user = $tpl_db->getPortalUser($username, $password);

        $dbtrans = new DBTransaction();
        $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
        $tplclientdao = new TplClientDAO();
        $array = array($tempEmail);
        $records = $tplclientdao->selectEmail($dbconn, $array);
        $user = $records[0];
        $password = $user["PASSWORD"];
        echo json_encode(DoTPLLoginFromAdministrator($tempEmail, $password));


//    $tpl_db = new tpldb;
//    $user = $tpl_db->getPortalUser($username, $password);
    }
}

//
//function DoProductSave($product_name, $product_data, $rec_id) {
//    
//   error_log("Product Data........................:"+$product_data);
//    return "ok";
//    
//}

function DoAdminlogin($username) {
    
}

function DoTPLUpdateSupplierDetails($name, $trading_as_name, $contact_name, $contact_position, $supplier_type, $instanceID1) {



    $GLOBALS["instanceID"] = $instanceID1;
    include($GLOBALS["path_doc_root"] . "/common/sessionhandler.php");
    if ($GLOBALS["client_user"]) {
        $dbtrans = new DBTransaction();
        $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
        $tplshadowsupplierdao = new TplShadowSupplierDAO();
        if ($supplier_type == 0) {
            $supplier_type = 0;
        }
        $param_arr = array("UPDATE", $name, $trading_as_name, $contact_name, $contact_position, $supplier_type, $GLOBALS["shadow_supplier_rec_id"]);
        $tplshadowsupplierdao->update($dbconn, $param_arr);
        // OK, lets initialize the database connection
        //$tpl_db = new tpldb;
        //$tpl_db->UpdateSupplierDetails($GLOBALS["shadow_supplier_rec_id"], $GLOBALS["shadow_supplier_id"], mysql_real_escape_string($name), mysql_real_escape_string($trading_as_name), mysql_real_escape_string($contact_name), mysql_real_escape_string($contact_position), $supplier_type);
        return "SUCCESS";
    } else {
        return "FAIL";
    }
}

function DoTPLUpdateSupplierCompanyProfile($company_profile, $company_strapline_text, $company_aboutus_text, $instanceID1) {
    global $instanceID;
    $instanceID = $instanceID1;
    include($GLOBALS["path_doc_root"] . "/common/sessionhandler.php");

    if ($GLOBALS["client_user"]) {
        $dbtrans = new DBTransaction();
        $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
        $tplshadowsupplierdao = new TplShadowSupplierDAO();
        $param_arr = array("UPDATE", $company_profile, $company_strapline_text, $company_aboutus_text, $GLOBALS["shadow_supplier_rec_id"]);
        $tplshadowsupplierdao->updateBusinessProfile($dbconn, $param_arr);
        // OK, lets initialize the database connection  
//        $tpl_db = new tpldb;
//        $tpl_db->UpdateSupplierCompanyProfile($GLOBALS["shadow_root_id"], $GLOBALS["shadow_supplier_id"], mysql_real_escape_string($company_profile), mysql_real_escape_string($company_strapline_text), mysql_real_escape_string($company_aboutus_text));

        return "SUCCESS";
    } else {
        return "FAIL";
    }
}

function DoTPLUpdateSupplierPhysicalAddress($physical_address_complete, $physical_address_building_address, $physical_address_street_address, $physical_address_suburb, $physical_address_city, $physical_address_state, $physical_address_post_code, $physical_address_country, $physical_address_dpid, $physical_address_pxid, $physical_address_longitude, $physical_address_latitude, $physical_address_height, $instanceID1) {
    global $instanceID;
    $instanceID = $instanceID1;
    include($GLOBALS["path_doc_root"] . "/common/sessionhandler.php");
    if ($GLOBALS["client_user"]) {
        // OK, lets initialize the database connection  
//        $tpl_db = new tpldb;
//
//        $tpl_db->UpdateSupplierPhysicalAddress($GLOBALS["shadow_root_id"], $GLOBALS["shadow_supplier_id"], mysql_real_escape_string($physical_address_complete), mysql_real_escape_string($physical_address_building_address), mysql_real_escape_string($physical_address_street_address), mysql_real_escape_string($physical_address_suburb), mysql_real_escape_string($physical_address_city), mysql_real_escape_string($physical_address_state), mysql_real_escape_string($physical_address_post_code), mysql_real_escape_string($physical_address_country), $physical_address_dpid, $physical_address_pxid, $physical_address_longitude, $physical_address_latitude, $physical_address_height);
        $dbtrans = new DBTransaction();
        $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
        $tplshadowsupplierdao = new TplShadowSupplierDAO();
        $param_arr = array("UPDATE", $physical_address_complete, $physical_address_building_address, $physical_address_street_address, $physical_address_suburb, $physical_address_city, $physical_address_state, $physical_address_post_code, $physical_address_country, $physical_address_dpid, $physical_address_pxid, $physical_address_longitude, $physical_address_latitude, $physical_address_height, $GLOBALS["shadow_supplier_rec_id"]);
        $tplshadowsupplierdao->updatePhysicalAddress($dbconn, $param_arr);
        return "SUCCESS";
    } else {
        return "FAIL";
    }
}

function DoTPLUpdateSupplierPostalAddress($postal_address_building_address, $postal_address_street_address, $postal_address_suburb, $postal_address_city, $postal_address_state, $postal_address_post_code, $postal_address_country, $instanceID1) {
    global $instanceID;
    $instanceID = $instanceID1;
    include($GLOBALS["path_doc_root"] . "/common/sessionhandler.php");
    if ($GLOBALS["client_user"]) {
        // OK, lets initialize the database connection  
//        $tpl_db = new tpldb;
//
//        $tpl_db->UpdateSupplierPostalAddress($GLOBALS["shadow_root_id"], $GLOBALS["shadow_supplier_id"], mysql_real_escape_string($postal_address_building_address), mysql_real_escape_string($postal_address_street_address), mysql_real_escape_string($postal_address_suburb), mysql_real_escape_string($postal_address_city), mysql_real_escape_string($postal_address_state), mysql_real_escape_string($postal_address_post_code), mysql_real_escape_string($postal_address_country));
        $dbtrans = new DBTransaction();
        $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
        $tplshadowsupplierdao = new TplShadowSupplierDAO();
        $param_arr = array("UPDATE", $postal_address_building_address, $postal_address_street_address, $postal_address_suburb, $postal_address_city, $postal_address_state, $postal_address_post_code, $postal_address_country, $GLOBALS["shadow_supplier_rec_id"]);
        $tplshadowsupplierdao->updatePostalAddress($dbconn, $param_arr);
        return "SUCCESS";
    } else {
        return "FAIL";
    }
}

function DoTPLUpdateSupplierContactDetails($telephone_no, $free_telephone_no, $fax_no, $free_fax_no, $email_address, $instanceID1) {

    global $instanceID;
    $instanceID = $instanceID1;
    include($GLOBALS["path_doc_root"] . "/common/sessionhandler.php");

    if ($GLOBALS["client_user"]) {
        // OK, lets initialize the database connection  
//        $tpl_db = new tpldb;
//
//        $tpl_db->UpdateSupplierContactDetails($GLOBALS["shadow_root_id"], $GLOBALS["shadow_supplier_id"], mysql_real_escape_string($telephone_no), mysql_real_escape_string($free_telephone_no), mysql_real_escape_string($fax_no), mysql_real_escape_string($free_fax_no), mysql_real_escape_string($email_address));
        $dbtrans = new DBTransaction();
        $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
        $tplshadowsupplierdao = new TplShadowSupplierDAO();
        $param_arr = array("UPDATE", $telephone_no, $free_telephone_no, $fax_no, $free_fax_no, $email_address, $GLOBALS["shadow_supplier_rec_id"]);
        $tplshadowsupplierdao->updateContactDetail($dbconn, $param_arr);
        return "SUCCESS";
    } else {
        return "FAIL";
    }
}

function DoTPLUpdateSupplierWebsiteDetails($website_address, $facebook_address, $twitter_address, $linkedin_address, $youtube_address, $foursquare_address, $instanceID1) {

    global $instanceID;
    $instanceID = $instanceID1;
    include($GLOBALS["path_doc_root"] . "/common/sessionhandler.php");

    if ($GLOBALS["client_user"]) {
        // OK, lets initialize the database connection  
//        $tpl_db = new tpldb;
//        $tpl_db->UpdateSupplierWebsiteDetails($GLOBALS["shadow_root_id"], $GLOBALS["shadow_supplier_id"], mysql_real_escape_string($website_address), mysql_real_escape_string($facebook_address), mysql_real_escape_string($twitter_address), mysql_real_escape_string($linkedin_address), mysql_real_escape_string($youtube_address), mysql_real_escape_string($foursquare_address));
        $dbtrans = new DBTransaction();
        $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
        $tplshadowsupplierdao = new TplShadowSupplierDAO();
        $param_arr = array("UPDATE", $website_address, $facebook_address, $twitter_address, $linkedin_address, $youtube_address, $foursquare_address, $GLOBALS["shadow_supplier_rec_id"]);
        $tplshadowsupplierdao->updateWebSiteDetail($dbconn, $param_arr);
        return "SUCCESS";
    } else {
        return "FAIL";
    }
}

function DoTPLUpdateSupplierBranchDetails($rec_id, $name, $postal_address_building_address, $postal_address_street_address, $postal_address_suburb, $postal_address_city, $postal_address_state, $postal_address_post_code, $postal_address_country, $telephone_no, $fax_no, $instanceID1) {

    global $instanceID;
    $instanceID = $instanceID1;
    include($GLOBALS["path_doc_root"] . "/common/sessionhandler.php");
    if ($GLOBALS["client_user"]) {
        // OK, lets initialize the database connection 
        $dbtrans = new DBTransaction();
        $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
        $tplshadowsupplierbranchdao = new TplShadowSupplierBranchDAO();

        if ($rec_id == 0) {
            $param_arr = array("INSERT", $GLOBALS["shadow_supplier_rec_id"], $name, $postal_address_building_address, $postal_address_street_address, $postal_address_suburb, $postal_address_city, $postal_address_state, $postal_address_post_code, $postal_address_country, $telephone_no, $fax_no);
            $tplshadowsupplierbranchdao->selectInsert($dbconn, $param_arr);
        } else {
            $param_arr = array("UPDATE", $name, $postal_address_building_address, $postal_address_street_address, $postal_address_suburb, $postal_address_city, $postal_address_state, $postal_address_post_code, $postal_address_country, $telephone_no, $fax_no, $rec_id);
            $tplshadowsupplierbranchdao->update($dbconn, $param_arr);
        }

//        $tpl_db = new tpldb;
//
//        $tpl_db->UpdateSupplierBranchDetails($rec_id, $GLOBALS["shadow_root_id"], $GLOBALS["shadow_supplier_id"], mysql_real_escape_string($name), mysql_real_escape_string($postal_address_building_address), mysql_real_escape_string($postal_address_street_address), mysql_real_escape_string($postal_address_suburb), mysql_real_escape_string($postal_address_city), mysql_real_escape_string($postal_address_state), mysql_real_escape_string($postal_address_post_code), mysql_real_escape_string($postal_address_country), $telephone_no, $fax_no);

        return "SUCCESS";
    } else {
        return "FAIL";
    }
}

function DoTPLDeleteSupplierBranchDetails($rec_id, $instanceID1) {

    global $instanceID;
    $instanceID = $instanceID1;
    include($GLOBALS["path_doc_root"] . "/common/sessionhandler.php");

    if ($GLOBALS["client_user"]) {
        // OK, lets initialize the database connection  
        $dbtrans = new DBTransaction();
        $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
        $tplshadowsupplierbranchdao = new TplShadowSupplierBranchDAO();
        $param_arr = array("DELETE", $rec_id);
        $tplshadowsupplierbranchdao->deleteUpdate($dbconn, $param_arr);
//        $tpl_db = new tpldb;
//
//        $tpl_db->DeleteShadowRecord("tpl_shadow_supplier_branch", $rec_id);

        return true;
    } else {
        return false;
    }
}

function DoTPLSetActiveSupplierBranch($rec_id, $instanceID1) {

    global $instanceID;
    $instanceID = $instanceID1;
    include($GLOBALS["path_doc_root"] . "/common/sessionhandler.php");

    if ($GLOBALS["client_user"]) {
        // OK, lets initialize the database connection    
        global $session_maintain;
        $session_maintain->add_client_field('active_branch_rec_id', $rec_id, $instanceID, 'client_data');

        return true;
    } else {
        return false;
    }
}

function DoTPLUpdateSupplierDistributorDetails($rec_id, $name, $telephone_no, $instanceID1) {
    global $instanceID;
    $instanceID = $instanceID1;
    include($GLOBALS["path_doc_root"] . "/common/sessionhandler.php");

    if ($GLOBALS["client_user"]) {
        // OK, lets initialize the database connection  
//        $tpl_db = new tpldb;
//
//        $tpl_db->UpdateSupplierDistributorDetails($rec_id, $GLOBALS["shadow_root_id"], $GLOBALS["shadow_supplier_id"], $_SESSION["shadow_directory_id"], mysql_real_escape_string($name), mysql_real_escape_string($telephone_no));

        $dbtrans = new DBTransaction();
        $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
        $tplshadowsupplierdistributordao = new TplShadowSupplierDistributorDAO();
        if ($rec_id == 0) {
            $param_arr = array('INSERT', $GLOBALS["shadow_supplier_rec_id"], $name, $telephone_no);
            $tplshadowsupplierdistributordao->insert($dbconn, $param_arr);
        } else {
            $param_arr = array('UPDATE', $name, $telephone_no, $rec_id);
            $tplshadowsupplierdistributordao->update($dbconn, $param_arr);
        }

        return "SUCCESS";
    } else {
        return "FAIL";
    }
}

function DoTPLDeleteSupplierDistributorDetails($rec_id, $instanceID1) {

    global $instanceID;
    $instanceID = $instanceID1;
    include($GLOBALS["path_doc_root"] . "/common/sessionhandler.php");
    if ($GLOBALS["client_user"]) {
        // OK, lets initialize the database connection
        $dbtrans = new DBTransaction();
        $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
        $tplshadowsupplierdistributordao = new TplShadowSupplierDistributorDAO();
        $param_arr = array('DELETE', $rec_id);
        $tplshadowsupplierdistributordao->deleteUpdate($dbconn, $param_arr);
//        $tpl_db = new tpldb;
//
//        $tpl_db->DeleteShadowRecord("tpl_shadow_supplier_distributor", $rec_id);

        return true;
    } else {
        return false;
    }
}

//DeleteLiveRecord
function DoTPLSetActiveSupplierDistributor($rec_id, $instanceID1) {

    global $instanceID;
    $instanceID = $instanceID1;
    include($GLOBALS["path_doc_root"] . "/common/sessionhandler.php");

    if ($GLOBALS["client_user"]) {
        // OK, lets initialize the database connection
        // $_SESSION["active_distributor_rec_id"] = $rec_id;
        $session_maintain->add_client_field('active_distributor_rec_id', $rec_id, $instanceID, "client_data");
        return true;
    } else {
        return false;
    }
}

function DoTPLUpdateSupplierPersonDetails($rec_id, $name, $position, $postal_address_building_address, $postal_address_street_address, $postal_address_suburb, $postal_address_city, $postal_address_post_code, $postal_address_country, $telephone_no, $fax_no, $email_address, $instanceID1) {

    global $instanceID;
    $instanceID = $instanceID1;
    include($GLOBALS["path_doc_root"] . "/common/sessionhandler.php");

    if ($GLOBALS["client_user"]) {
        // OK, lets initialize the database connection  

        $dbtrans = new DBTransaction();
        $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
        $tplshadowsupplierkeypersonnaldao = new TplShadowSupplierKeyPersonnelDAO();
        if ($rec_id == 0) {
            $param_arr = array('INSERT', $GLOBALS["shadow_supplier_rec_id"], $name, $position, $postal_address_building_address, $postal_address_street_address, $postal_address_suburb, $postal_address_city, $postal_address_post_code, $postal_address_country, $telephone_no, $fax_no, $email_address);
            $tplshadowsupplierkeypersonnaldao->insert($dbconn, $param_arr);
        } else {
            $param_arr = array('UPDATE', $name, $position, $postal_address_building_address, $postal_address_street_address, $postal_address_suburb, $postal_address_city, $postal_address_post_code, $postal_address_country, $telephone_no, $fax_no, $email_address, $rec_id);
            $tplshadowsupplierkeypersonnaldao->update($dbconn, $param_arr);
        }



//        $tpl_db = new tpldb;
//
//        $tpl_db->UpdateSupplierPersonDetails($rec_id, $GLOBALS["shadow_root_id"], $GLOBALS["shadow_supplier_id"], mysql_real_escape_string($name), mysql_real_escape_string($position), mysql_real_escape_string($postal_address_building_address), mysql_real_escape_string($postal_address_street_address), mysql_real_escape_string($postal_address_suburb), mysql_real_escape_string($postal_address_city), mysql_real_escape_string($postal_address_post_code), mysql_real_escape_string($postal_address_country), mysql_real_escape_string($telephone_no), mysql_real_escape_string($fax_no), mysql_real_escape_string($email_address));

        return "SUCCESS";
    } else {
        return "FAIL";
    }
}

function DoTPLDeleteSupplierPersonDetails($rec_id, $instanceID1) {

    global $instanceID;
    $instanceID = $instanceID1;
    include($GLOBALS["path_doc_root"] . "/common/sessionhandler.php");

    if ($GLOBALS["client_user"]) {
        // OK, lets initialize the database connection
        $dbtrans = new DBTransaction();
        $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
        $tplshadowsupplierkeypersonnaldao = new TplShadowSupplierKeyPersonnelDAO();
        $param_arr = array('DELETE', $rec_id);
        $tplshadowsupplierkeypersonnaldao->deleteUpdate($dbconn, $param_arr);
//        
//        
//        $tpl_db = new tpldb;
//
//        $tpl_db->DeleteShadowRecord("tpl_shadow_supplier_key_personnel", $rec_id);

        return true;
    } else {
        return false;
    }
}

function DoTPLSetActiveSupplierPerson($rec_id, $instanceID1) {

    global $instanceID;
    $instanceID = $instanceID1;
    include($GLOBALS["path_doc_root"] . "/common/sessionhandler.php");

    if ($GLOBALS["client_user"]) {
        // OK, lets initialize the database connection
        //$_SESSION["active_person_rec_id"] = $rec_id;
        $session_maintain->add_client_field('active_person_rec_id', $rec_id, $instanceID, "client_data");
        return true;
    } else {
        return false;
    }
}

function DoTPLConfirmBrandExists($brand_name, $instanceID1) {

    global $instanceID;
    $instanceID = $instanceID1;
    include($GLOBALS["path_doc_root"] . "/common/sessionhandler.php");
    if ($GLOBALS["client_user"]) {
        // OK, lets initialize the database connection  

        $dbtrans = new DBTransaction();
        $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
        $tplbranddao = new TplBrandDAO();
        $param_arr = array($brand_name);
        $brand = $tplbranddao->nameSelect($dbconn, $param_arr);
//        $tpl_db = new tpldb;
//
//        $brand = $tpl_db->GetBrandByName($brand_name);
        if (($brand))
            return true;
        else
            return false;
    }
    else {
        return false;
    }
}

function DoTPLAddSupplierBrandDetails($rec_id, $directory_id, $brand_name, $logolisting, $instanceID1) {
    global $instanceID;
    $instanceID = $instanceID1;
    try {
        include($GLOBALS["path_doc_root"] . "/common/sessionhandler.php");
        if ($GLOBALS["client_user"]) {
            // OK, lets initialize the database connection  
            $brand_id = 0;
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
            $param_arr = null;
            $param_arr = array($brand_id, $directory_id);
            $directorybrands = $tplbranddirectorydao->select($dbconn, $param_arr);
            if (!$directorybrands) {
                $param_arr = array($brand_id, $directory_id);
                $tplbranddirectorydao->insert($dbconn, $param_arr);
            }
            $tplshadowsupplierbranddao = new TplShadowSupplierBrandDAO();
            if ($rec_id == 0) {
                $param_arr = null;
                $param_arr = array('INSERT', $GLOBALS["shadow_supplier_rec_id"], $brand_id, $logolisting);
                $tplshadowsupplierbranddao->insert($dbconn, $param_arr);
            } else {
                $param_arr = array('UPDATE', $brand_id, $logolisting, $rec_id);
                $tplshadowsupplierbranddao->update($dbconn, $param_arr);
            }
//        $tpl_db = new tpldb;
//
//        $tpl_db->AddSupplierBrandDetails($GLOBALS["shadow_root_id"], $GLOBALS["shadow_supplier_id"], $directory_id, mysql_real_escape_string($brand_name), mysql_real_escape_string($logolisting));
            $dbconn->commit();
            return "SUCCESS";
        } else {
            return "FAIL";
        }
    } catch (Exception $e) {
        error_log("Error!: " . $e->getMessage());
        $dbconn->rollBack();
        throw $e;
    }
}

function DoTPLDeleteSupplierBrandDetails($rec_id, $instanceID1) {
    global $instanceID;
    $instanceID = $instanceID1;
    include($GLOBALS["path_doc_root"] . "/common/sessionhandler.php");
    if ($GLOBALS["client_user"]) {
        // OK, lets initialize the database connection         
        $dbtrans = new DBTransaction();
        $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
        $tplshadowsupplierbranddao = new TplShadowSupplierBrandDAO();
        $param_arr = array('DELETE', $rec_id);
        $tplshadowsupplierbranddao->stateUpdate($dbconn, $param_arr);

//        $tpl_db = new tpldb;
//
//        $tpl_db->DeleteShadowRecord("tpl_shadow_supplier_brand", $rec_id);

        return true;
    } else {
        return false;
    }
}

//
//function getConvertCurruncy($from, $to, $instanceID) {
//    //make string to be put in API
//    $string = "1" . $from . "=?" . $to;
//    //Call Google API
//    $google_url = "http://www.google.com/ig/calculator?hl=en&q=" . $string;
//    $result = file_get_contents($google_url);
//    $result = explode('"', $result);
//    $converted_amount = explode(' ', $result[3]);
//    $conversion = $converted_amount[0];
//    return $conversion;
//}

function DoTPLSetActiveSupplierBrand($rec_id, $instanceID) {
    include_once($GLOBALS["path_doc_root"] . "/common/sessionhandler.php");
    if ($GLOBALS["client_user"]) {
        global $session_maintain;
        $session_maintain->add_client_field('active_brand_rec_id', $rec_id, $instanceID, "client_data");
        return true;
    } else {
        return false;
    }
}

//function DoTPLUpdateSupplierMediaDetails($rec_id, $media_name, $media_url, $media_type, $descri, $is_int_source, $media_embed_source, $is_embed_source, $is_high_resol, $tempfilename, $mediafolder, $file_size, $old_medianame, $instanceID1) {
//    global $instanceID;
//    $instanceID = $instanceID1;
//    include($GLOBALS["path_doc_root"] . "/common/sessionhandler.php");
//    if ($GLOBALS["client_user"]) {
//        $actualfilename = $media_name . "_" . $GLOBALS["shadow_supplier_id"] . "." . substr(strrchr($tempfilename, '.'), 1);
//        if ($tempfilename != "") {
//            $media_handler = new mediahandler();
//            $media_handler->MoveFileExactLocation($tempfilename, $actualfilename, $mediafolder, $old_medianame);
//        } else {
//            $actualfilename = $old_medianame;
//        }
//        // OK, lets initialize the database connection  
//        $tpl_db = new tpldb;
//        // This filtering part should have to do filter_var($field, FILTER_SANITIZE_EMAIL);
//        $db = new Db();
//        $result = $db->getrows("(MEDIA_CATEGORY='" . $mediafolder . "') and (MEDIA_TYPE='" . substr(strrchr($tempfilename, '.'), 1) . "')", "tpl_media_types", "");
//        error_log("media_type_rec_id................:" . "(MEDIA_CATEGORY=" . $mediafolder . ") and (MEDIA_TYPE=" . substr(strrchr($tempfilename, '.'), 1) . ")");
//        $updaterecid = 0;
//        if (isset($result[0]['REC_ID'])) {
//            $media_type_rec_id = $result[0]['REC_ID'];
//            $updaterecid = 1;
//        }
//        $file_size = filesize($GLOBALS["path_doc_root"] . "/media/" . $mediafolder . "/" . $actualfilename);
//        $tpl_db->UpdateSupplierMediaDetails($rec_id, mysql_real_escape_string($media_name), $actualfilename, $media_url, $media_type_rec_id, mysql_real_escape_string($descri), $is_int_source, $media_embed_source, $is_embed_source, $is_high_resol, $GLOBALS["shadow_supplier_id"], $GLOBALS["shadow_root_id"], $file_size, $updaterecid);
//        //construct new debug error logger	
//        //$logme->debug2log("DoTPLUpdateSupplierMediaDetails-initialize:SUCCESS");   
//        return "SUCCESS";
//    } else {
//
//        $logme->debug2log("DoTPLUpdateSupplierMediaDetails-initialize:FAIL");
//        return "FAIL";
//    }
//}

/*      Media Video                                 */

function DoTPLUpdateSupplierVideoDetails($rec_id, $media_name, $descri, $media_embed_source, $instanceID1) {
    global $instanceID;
    $instanceID = $instanceID1;
    include($GLOBALS["path_doc_root"] . "/common/sessionhandler.php");
    error_log("DoTPLUpdateSupplierVideoDetails...............:1");
    if ($GLOBALS["client_user"]) {
        error_log("DoTPLUpdateSupplierVideoDetails...............:2");
        $dbtrans = new DBTransaction();
        $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);

        $tplmediatypesdao = new TplMediaTypesDAO();
        $param_arr = array("video", "video");
        $result = $tplmediatypesdao->select($dbconn, $param_arr);


        if (isset($result[0]['REC_ID'])) {
            $media_type_rec_id = $result[0]['REC_ID'];
        }


        $tplsuppliermediasdao = new TplSupplierMediaDAO();

        if ($rec_id == 0) {
            $param_arr = array($media_name, "", "", $media_type_rec_id, $descri, 0, $media_embed_source, 1, $GLOBALS["shadow_supplier_rec_id"], 0, 0);
            error_log("Rec................................................................:" . $rec_id);
            $tplsuppliermediasdao->insert($dbconn, $param_arr);
        } else {
            $param_arr = array($media_name, "", "", $descri, 0, $media_embed_source, 1, 0, 0, $rec_id);
            $tplsuppliermediasdao->update($dbconn, $param_arr);
        }
        //$tpl_db->UpdateSupplierMediaDetails($rec_id, mysql_real_escape_string($media_name), '', '', $media_type_rec_id, mysql_real_escape_string($descri), '0', htmlspecialchars($media_embed_source, ENT_QUOTES), '1', '0', $GLOBALS["shadow_supplier_id"], $GLOBALS["shadow_root_id"], '0', $updaterecid);
        error_log("DoTPLUpdateSupplierVideoDetails...............:3");
        return "SUCCESS";
    } else {

        $logme->debug2log("DoTPLUpdateSupplierMediaDetails-initialize:FAIL");
        return "FAIL";
    }
}

/* Award Callback methods start */

function DoTPLUpdateSupplierAwardDetails($rec_id, $name, $issued_by, $year_won, $award_logo_url, $award_logo_link, $instanceID1) {
    global $instanceID;
    $instanceID = $instanceID1;
    include($GLOBALS["path_doc_root"] . "/common/sessionhandler.php");
    if ($GLOBALS["client_user"]) {
        // OK, lets initialize the database connection  
        $dbtrans = new DBTransaction();
        $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
        $tplsupplierawardsdao = new TplSupplierAwardsDAO();

        if ($rec_id == 0) {
            $param_arr = array($name, $issued_by, $year_won, $award_logo_url, $award_logo_link, $GLOBALS["shadow_supplier_rec_id"]);
            $tplsupplierawardsdao->insert($dbconn, $param_arr);
        } else {
            $param_arr = array($name, $issued_by, $year_won, $award_logo_url, $award_logo_link, $rec_id);
            $tplsupplierawardsdao->update($dbconn, $param_arr);
        }
//        $tpl_db = new tpldb;
//        $tpl_db->UpdateSupplierAwardDetails($rec_id, mysql_real_escape_string($name), mysql_real_escape_string($issued_by), mysql_real_escape_string($year_won), mysql_real_escape_string($award_logo_url), mysql_real_escape_string($award_logo_link), $GLOBALS["shadow_supplier_rec_id"], $shadow_root['CLIENT_REC_ID']);
        return "SUCCESS";
    } else {

        //$logme->debug2log("DoTPLUpdateSupplierAwardDetails-initialize:FAIL");
        return "FAIL";
    }
}

function DoTPLDeleteSupplierAwardDetails($rec_id, $instanceID1) {
    global $instanceID;
    $instanceID = $instanceID1;
    include($GLOBALS["path_doc_root"] . "/common/sessionhandler.php");
    if ($GLOBALS["client_user"]) {
        // OK, lets initialize the database connection  
        $dbtrans = new DBTransaction();
        $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
        $tplsupplierawardsdao = new TplSupplierAwardsDAO();
        $param_arr = array($rec_id);
        $tplsupplierawardsdao->delete($dbconn, $param_arr);
//        $tpl_db = new tpldb;
//        $tpl_db->DeleteLiveRecord("tpl_supplier_awards", $rec_id);
        return true;
    } else {
        return false;
    }
}

function DoTPLSetActiveSupplierAward($rec_id, $instanceID1) {
    global $instanceID;
    $instanceID = $instanceID1;
    include($GLOBALS["path_doc_root"] . "/common/sessionhandler.php");
    if ($GLOBALS["client_user"]) {
        $session_maintain->add_client_field('active_award_rec_id', $rec_id, $instanceID, "client_data");
        return true;
    } else {
        return false;
    }
}

/* Award Callback methods end */

/* Digital Media Callback methods start */

function DoTPLDeleteSupplierMediaDetails($rec_id, $mediafolder, $actualfilename) {
    global $instanceID;

    include($GLOBALS["path_doc_root"] . "/common/sessionhandler.php");
    if ($GLOBALS["client_user"]) {
        // OK, lets initialize the database connection  
//        $tpl_db = new tpldb;
//        $tpl_db->DeleteLiveRecord("tpl_supplier_media", $rec_id);
        $dbtrans = new DBTransaction();
        $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
        $tplsuppliermediasdao = new TplSupplierMediaDAO();
        $param_arr = array($rec_id);
        error_log("Rec................................................................:" . $rec_id);
        $tplsuppliermediasdao->delete($dbconn, $param_arr);
        if ($actualfilename != "") {
            $filepath = $GLOBALS["path_doc_root"] . "media/" . $mediafolder . "/" . $actualfilename;
            unlink($filepath);
            if ($mediafolder == "photo_gallery") {
                unlink($GLOBALS["path_doc_root"] . "/media/" . $mediafolder . "/thumb_" . $actualfilename);
            }
        }
        return true;
    } else {
        return false;
    }
}

function DoTPLSetActiveSupplierLogo($rec_id, $functype, $instanceID1) {
    global $instanceID;
    $instanceID = $instanceID1;
    include($GLOBALS["path_doc_root"] . "/common/sessionhandler.php");
    if ($GLOBALS["client_user"]) {
        $session_maintain->add_client_field('active_logo_rec_id', $rec_id, $instanceID, "client_data");
        $session_maintain->add_client_field('active_function_type', $functype, $instanceID, "client_data");
        return true;
    } else {
        return false;
    }
}

/*  Supplier Product Category Media       */

//UpdateSupplierProductCategoryMedia($rec_id, $sup_productcategory_rec_id, $sup_media_rec_id, $webmedia)
function DoTPLUpdateSupplierProductCategoryMedia($rec_id, $sup_productcategory_rec_id, $sup_media_rec_id, $webmedia, $instanceID1) {
    global $instanceID;
    $instanceID = $instanceID1;
    include($GLOBALS["path_doc_root"] . "/common/sessionhandler.php");
    if ($GLOBALS["client_user"]) {
        // OK, lets initialize the database connection  
        $tpl_db = new tpldb;
        $tpl_db->UpdateSupplierProductCategoryMedia($rec_id, $sup_productcategory_rec_id, $sup_media_rec_id, $webmedia);
        return "SUCCESS";
    } else {
        return "FAIL";
    }
}

function DoTPLDeleteSupplierProductCategoryMedia($rec_id, $instanceID1) {
    global $instanceID;
    $instanceID = $instanceID1;
    include($GLOBALS["path_doc_root"] . "/common/sessionhandler.php");

    if ($GLOBALS["client_user"]) {
        $tpl_db = new tpldb;
        $tpl_db->DeleteLiveRecord("tpl_supplier_productcategory_media", $rec_id);
        return true;
    } else {
        return false;
    }
}

/*  Supplier Product Media       */

function DoTPLUpdateSupplierProductMedia($rec_id, $sup_product_rec_id, $sup_media_rec_id, $webmedia, $instanceID1) {
    global $instanceID;
    $instanceID = $instanceID1;
    include($GLOBALS["path_doc_root"] . "/common/sessionhandler.php");
    if ($GLOBALS["client_user"]) {
        // OK, lets initialize the database connection  
        $tpl_db = new tpldb;
        $tpl_db->UpdateSupplierProductMedia($rec_id, $sup_product_rec_id, $sup_media_rec_id, $webmedia);
        return "SUCCESS";
    } else {
        return "FAIL";
    }
}

function DoTPLDeleteSupplierProductMedia($rec_id, $instanceID1) {
    global $instanceID;
    $instanceID = $instanceID1;
    include($GLOBALS["path_doc_root"] . "/common/sessionhandler.php");
    if ($GLOBALS["client_user"]) {
        $tpl_db = new tpldb;
        $tpl_db->DeleteLiveRecord("tpl_supplier_product_media", $rec_id);
        return true;
    } else {
        return false;
    }
}

/* Accred Callback methods start */

function DoTPLUpdateSupplierAccredDetails($rec_id, $name, $accredtype, $date_achieved, $issued_by, $certificate_number, $accred_logo_url, $accred_logo_link, $year_won, $instanceID1) {
    global $instanceID;
    $instanceID = $instanceID1;
    include($GLOBALS["path_doc_root"] . "/common/sessionhandler.php");

//    if ($GLOBALS["client_user"]) {
    // OK, lets initialize the database connection 
    $dbtrans = new DBTransaction();
    $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
    $tplsupplieraccreditationdao = new TplSupplierAccreditationsDAO();

    if ($rec_id == 0) {
        $param_arr = array($name, $accredtype, $issued_by, $certificate_number, $accred_logo_url, $accred_logo_link, $year_won, $GLOBALS["shadow_supplier_rec_id"]);
        $tplsupplieraccreditationdao->insert($dbconn, $param_arr);
    } else {
        $param_arr = array($name, $accredtype, $issued_by, $certificate_number, $accred_logo_url, $accred_logo_link, $year_won, $rec_id);
        $tplsupplieraccreditationdao->update($dbconn, $param_arr);
    }
//        $tpl_db = new tpldb;
//        $tpl_db->UpdateSupplierAccredDetails($rec_id, mysql_real_escape_string($name), mysql_real_escape_string($accredtype), $date_achieved, mysql_real_escape_string($issued_by), mysql_real_escape_string($certificate_number), mysql_real_escape_string($accred_logo_url), mysql_real_escape_string($accred_logo_link), $year_won, $GLOBALS["shadow_supplier_rec_id"], $shadow_root['CLIENT_REC_ID']);

    return "SUCCESS";
//    } else {
//        return "FAIL";
//    }
}

function DoTPLDeleteSupplierAccredDetails($rec_id, $instanceID1) {

    global $instanceID;
    $instanceID = $instanceID1;
    include($GLOBALS["path_doc_root"] . "/common/sessionhandler.php");
    if ($GLOBALS["client_user"]) {
        // OK, lets initialize the database connection  
        $dbtrans = new DBTransaction();
        $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
        $tplsupplieraccreditationdao = new TplSupplierAccreditationsDAO();
        $param_arr = array($rec_id);
        $tplsupplieraccreditationdao->delete($dbconn, $param_arr);
//        $tpl_db = new tpldb;
//        $tpl_db->DeleteLiveRecord("tpl_supplier_accreditations", $rec_id);
        return true;
    } else {
        return false;
    }
}

function DoTPLSetActiveSupplierAccred($rec_id, $instanceID1) {
    global $instanceID;
    $instanceID = $instanceID1;
    include($GLOBALS["path_doc_root"] . "/common/sessionhandler.php");
    if ($GLOBALS["client_user"]) {
        // OK, lets initialize the database connection
        // $_SESSION["active_accreditation_rec_id"] = $rec_id;
        $session_maintain->add_client_field('active_accreditation_rec_id', $rec_id, $instanceID, "client_data");
        return true;
    } else {
        return false;
    }
}

/* Accred Callback methods End */

function DoTPLSetActiveProductCategory($rec_id, $instanceID1) {
    global $instanceID;
    $instanceID = $instanceID1;
    include($GLOBALS["path_doc_root"] . "/common/sessionhandler.php");
    if ($GLOBALS["client_user"]) {
        $session_maintain->add_client_field('active_product_category_rec_id', $rec_id, $instanceID, "client_data");
        return true;
    } else {
        return false;
    }
}

function DoTPLUpdateSupplierProductDetails($recid, $label_name, $varietal, $vintage, $region_of_origin, $country_of_origin, $logolisting, $instanceID1) {
    global $instanceID;
    $instanceID = $instanceID1;
    include($GLOBALS["path_doc_root"] . "/common/sessionhandler.php");
    if ($GLOBALS["client_user"]) {
        // OK, lets initialize the database connection 
        $tpl_db = new tpldb;
        $nextrecid = 1;
        if ($recid == 0) {
            $nextrecid = $tpl_db->getTableMaxAutoIncrementNumber("tpl_shadow_product");
            $nextrecid = $nextrecid + 1;
        } else {
            $nextrecid = $recid;
        }
        if ($logolisting == "true") {
            $logolisting = 1;
        } else {
            $logolisting = 0;
        }
        $tpl_db->UpdateSupplierProductDetails($recid, $GLOBALS["shadow_root_id"], $GLOBALS["shadow_supplier_id"], $shadow_directory_id, $active_product_category_rec_id, $label_name, $varietal, $vintage, $region_of_origin, $country_of_origin, $logolisting, $nextrecid);
        DoTPLSetActiveSupplierProduct($nextrecid, 'P');
        return $nextrecid;
    } else {
        return 0;
    }
}

function DoTPLDeleteSupplierProductDetails($rec_id, $instanceID1) {
    global $instanceID;
    $instanceID = $instanceID1;
    include($GLOBALS["path_doc_root"] . "/common/sessionhandler.php");
    if ($GLOBALS["client_user"]) {
        // OK, lets initialize the database connection  
        $tpl_db = new tpldb;

        $tpl_db->DeleteShadowRecord("tpl_shadow_product", $rec_id);
        $tpl_db->DeleteRecord("tpl_supplier_product_media", "(SUPPLIER_PRODUCT_REC_ID=$rec_id)");
        return true;
    } else {
        return false;
    }
}

function DoTPLSetActiveSupplierProduct($rec_id, $functype, $instanceID1) {
    global $instanceID;
    $instanceID = $instanceID1;
    include($GLOBALS["path_doc_root"] . "/common/sessionhandler.php");
    if ($GLOBALS["client_user"]) {
        // OK, lets initialize the database connection        
        $session_maintain->add_client_field('active_product_rec_id', $rec_id, $instanceID, "client_data");
        $session_maintain->add_client_field('active_function_type', $functype, $instanceID, "client_data");
        return true;
    } else {
        return false;
    }
}

function DoTPLCanCreateShadowProductCategoryAssociation($product_category_rec_id, $instanceID1) {
    global $instanceID;
    $instanceID = $instanceID1;
    include($GLOBALS["path_doc_root"] . "/common/sessionhandler.php");
    if ($GLOBALS["client_user"]) {
        // OK, lets initialize the database connection  
        $tpl_db = new tpldb;
        return $tpl_db->CanCreateShadowProductCategoryAssociation($GLOBALS["shadow_root_id"], $GLOBALS["shadow_supplier_id"], $product_category_rec_id);
    } else {
        return false;
    }
}

function DoTPLCreateShadowProductCategoryAssociation($product_category_rec_id, $instanceID1) {
    global $instanceID;
    $instanceID = $instanceID1;
    include($GLOBALS["path_doc_root"] . "/common/sessionhandler.php");
    if ($GLOBALS["client_user"]) {
        // OK, lets initialize the database connection  
        $tpl_db = new tpldb;

        $tpl_db->CreateShadowProductCategoryAssociation($GLOBALS["shadow_root_id"], $GLOBALS["shadow_supplier_id"], $product_category_rec_id);

        return true;
    } else {
        return false;
    }
}

function DoTPLDeleteShadowProductCategoryAssociation($product_category_rec_id, $instanceID1) {
    global $instanceID;
    $instanceID = $instanceID1;
    include($GLOBALS["path_doc_root"] . "/common/sessionhandler.php");
    if ($GLOBALS["client_user"]) {
        // OK, lets initialize the database connection  
        $tpl_db = new tpldb;

        $tpl_db->DeleteShadowProductCategoryAssociation($GLOBALS["shadow_root_id"], $GLOBALS["shadow_supplier_id"], $product_category_rec_id);

        return true;
    } else {
        return false;
    }
}

function DoTPLCanCreateShadowProductCategoryLogoListing($product_category_rec_id, $instanceID1) {
    global $instanceID;
    $instanceID = $instanceID1;
    include($GLOBALS["path_doc_root"] . "/common/sessionhandler.php");
    if ($GLOBALS["client_user"]) {
        // OK, lets initialize the database connection  
        $tpl_db = new tpldb;

        return $tpl_db->CanCreateShadowProductCategoryLogoListing($GLOBALS["shadow_root_id"], $GLOBALS["shadow_supplier_id"], $product_category_rec_id);
    } else {
        return false;
    }
}

function DoTPLCreateShadowProductCategoryLogoListing($product_category_rec_id, $instanceID1) {
    global $instanceID;
    $instanceID = $instanceID1;
    include($GLOBALS["path_doc_root"] . "/common/sessionhandler.php");
    if ($GLOBALS["client_user"]) {
        // OK, lets initialize the database connection  
        $tpl_db = new tpldb;

        $tpl_db->CreateShadowProductCategoryLogoListing($GLOBALS["shadow_root_id"], $GLOBALS["shadow_supplier_id"], $product_category_rec_id);

        return true;
    } else {
        return false;
    }
}

function DoTPLDeleteShadowProductCategoryLogoListing($product_category_rec_id, $instanceID1) {
    global $instanceID;
    $instanceID = $instanceID1;
    include($GLOBALS["path_doc_root"] . "/common/sessionhandler.php");
    if ($GLOBALS["client_user"]) {
        // OK, lets initialize the database connection  
        $tpl_db = new tpldb;

        $tpl_db->DeleteShadowProductCategoryLogoListing($GLOBALS["shadow_root_id"], $GLOBALS["shadow_supplier_id"], $product_category_rec_id);

        return true;
    } else {
        return false;
    }
}

function DoTPLChangeListingType($shadow_directory_offering_rec_id, $instanceID1) {
    global $instanceID;
    $instanceID = $instanceID1;
    include($GLOBALS["path_doc_root"] . "/common/sessionhandler.php");
    if ($GLOBALS["client_user"]) {
        // OK, lets initialize the database connection  
        $tpl_db = new tpldb;

        $tpl_db->UpdateListingType($GLOBALS["shadow_root_id"], $shadow_directory_offering_rec_id);
        $session_maintain->add_client_field('client_active_tab', 'profile', $instanceID, "client_data");
        return false;
    } else {
        return false;
    }
}

function DoTPLSendToProduction($name, $position, $instanceID1) {
    global $instanceID;
    $instanceID = $instanceID1;
    include($GLOBALS["path_doc_root"] . "/common/sessionhandler.php");
    if ($GLOBALS["client_user"]) {
        // OK, lets initialize the database connection  
        $tpl_db = new tpldb;
        $tpl_db->SetShadowState($GLOBALS["shadow_root_id"], "CLOSED", $name, $position);
        return false;
    } else {

        return false;
    }
}

function DoTPLIsCustomerDowngrading($newvalue, $instanceID1) {
    global $instanceID;
    $instanceID = $instanceID1;
    include($GLOBALS["path_doc_root"] . "/common/sessionhandler.php");
    if ($GLOBALS["client_user"]) {
        // OK, lets initialize the database connection  
        $tpl_db = new tpldb;

        $user = $GLOBALS["client_user"];
        $shadow_root = $tpl_db->getShadowRootOfUser($user);
        $CurrentOffering = $tpl_db->getRecord('tpl_shadow_directory_offering', $shadow_root["SHADOW_DIRECTORY_OFFERING_REC_ID"]);
        $NewOffering = $tpl_db->getRecord('tpl_shadow_directory_offering', $newvalue);

        if (($CurrentOffering["NAME"] == 'Premium Listing') and ($NewOffering["NAME"] != 'Premium Listing'))
            return true;
        else {
            if (($CurrentOffering["NAME"] == 'Advanced Listing') and ($NewOffering["NAME"] == 'Standard Listing'))
                return true;
            else
                return false;
        }
    }
    else {
        return false;
    }
}

function DoTPLLookupBrandList($text) {
    $items = array();

    // OK, lets initialize the database connection  
    $tpl_db = new tpldb;
    include_once($GLOBALS["path_doc_root"] . "/common/sessionhandler.php");
    $brands = $tpl_db->GetBrandMatch($shadow_directory_id, $text);
    if ($brands) {
        foreach ($brands as $key => $brand) {
            $label = htmlspecialchars($brand["NAME"]);
            $label = str_replace("'", "\'", $label);
            $item = array("text" => $label, "ResultNo" => number_format($brand["REC_ID"]));
            array_push($items, $item);
        }
    }

    return $items;
}

function CB_PrepareLiveData($directory, $year, $clientShadowRootId) {
    include($_SERVER["DOCUMENT_ROOT"] . "/config.php");
    include($_SERVER["DOCUMENT_ROOT"] . "/administrator/shadow2live.php");
    // use the target same as source    
    $object = new Shadow2Live(null, $directory, $year, $clientShadowRootId);
    if (!$object) {
        $bRet = false;
    } else {
        $bRet = $object->exec();
    }
    return $bRet;
}

function CB_PrepareShadowData($directory, $year, $clientShadowRootId) {
    include($_SERVER["DOCUMENT_ROOT"] . "/config.php");
    include($_SERVER["DOCUMENT_ROOT"] . "/administrator/updatelive2shadow.php");
    global $DOMAINHOST;
    global $L2S_STEP_DUMP_DEBUG;
    // use the target same as source

    $object = new UpdateLive2Shadow(null, $directory, $year, $clientShadowRootId);
    if (!$object) {
        $bRet = false;
    } else {
        $bRet = $object->exec();
    }
    return $bRet;
}

// This method logs the CLIENT user into the system
function DoTPLLogin($username, $password) {

    if (!isset($_SESSION))
        session_start();
    require_once($GLOBALS["path_doc_root"] . "/common/sessionmaintain.php");
//    $tpl_db = new tpldb;
//    $user = $tpl_db->getPortalUser($username, $password);
    $dbtrans = new DBTransaction();
    $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
    $tplclientdao = new TplClientDAO();
    $array = array($username);
    $records = $tplclientdao->selectEmail($dbconn, $array);

    if (count($records) > 0) {
        $user = $records[0];
        if (MD5($password) == $user["PASSWORD"]) {

            $session_maintain = new session_maintain();
            if (!isset($_SESSION['instanceID'])) {

                $_SESSION['instanceID'] = md5(uniqid(rand(), true));
            } else {
                if (!isset($_SESSION))
                    session_start();
                $_SESSION['instanceID'] = md5(uniqid(rand(), true));
            }
            $array_client = $session_maintain->add_client_field("client_user", $username, $_SESSION['instanceID'], "client_data");
            $array_client = $session_maintain->add_client_field("client_username", $username, $_SESSION['instanceID'], "client_data");
            $array_client = $session_maintain->add_client_field("client_firstname", $username, $_SESSION['instanceID'], "client_data");
            $array_client = $session_maintain->add_client_field("client_active_tab", "client_profile", $_SESSION['instanceID'], "client_data");
            $array_client = $session_maintain->add_client_field("user", $username, $_SESSION['instanceID'], "client_data");
            $array_client = $session_maintain->add_client_field("client_role", "nosetyet", $_SESSION['instanceID'], "client_data");
            $array_client = $session_maintain->add_client_field("client_id", $user['REC_ID'], $_SESSION['instanceID'], "client_data");
            $array_client = $session_maintain->add_client_field("client_name", $user['NAME'], $_SESSION['instanceID'], "client_data");
            $_SESSION["user"] = $username;
            $_SESSION["user_type"] = IS_SHADOW_USER;

            $retval = "SUCCESS";
        } else {
            $retval = INVALID_PASSWORD;
        }
    } else {
        $retval = INVALID_USER;
    }
    //error_log("Finish:".$retval);
    return $retval;
}

function DoTPLLoginFromAdministrator($username, $password) {

    if (!isset($_SESSION))
        session_start();
    require_once($GLOBALS["path_doc_root"] . "/common/sessionmaintain.php");
//    $tpl_db = new tpldb;
//    $user = $tpl_db->getPortalUser($username, $password);
    $dbtrans = new DBTransaction();
    $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
    $tplclientdao = new TplClientDAO();
    $array = array($username);
    $records = $tplclientdao->selectEmail($dbconn, $array);

    if (count($records) > 0) {
        $user = $records[0];
        if ($password == $user["PASSWORD"]) {
            $session_maintain = new session_maintain();
            if (!isset($_SESSION['instanceID'])) {

                $_SESSION['instanceID'] = md5(uniqid(rand(), true));
            } else {
                if (!isset($_SESSION))
                    session_start();
                $_SESSION['instanceID'] = md5(uniqid(rand(), true));
            }
            $array_client = $session_maintain->add_client_field("client_user", $username, $_SESSION['instanceID'], "client_data");
            $array_client = $session_maintain->add_client_field("client_username", $username, $_SESSION['instanceID'], "client_data");
            $array_client = $session_maintain->add_client_field("client_firstname", $username, $_SESSION['instanceID'], "client_data");
            $array_client = $session_maintain->add_client_field("client_active_tab", "client_profile", $_SESSION['instanceID'], "client_data");
            $array_client = $session_maintain->add_client_field("user", $username, $_SESSION['instanceID'], "client_data");
            $array_client = $session_maintain->add_client_field("client_role", "nosetyet", $_SESSION['instanceID'], "client_data");
            $array_client = $session_maintain->add_client_field("client_id", $user['REC_ID'], $_SESSION['instanceID'], "client_data");
            $array_client = $session_maintain->add_client_field("client_name", $user['NAME'], $_SESSION['instanceID'], "client_data");
            $_SESSION["user"] = $username;
            $_SESSION["user_type"] = IS_SHADOW_USER;

            $retval = "SUCCESS";
        } else {
            $retval = INVALID_PASSWORD;
        }
    } else {
        $retval = INVALID_USER;
    }
    //error_log("Finish:".$retval);
    return $retval;
}

// This method logs the user out of the system
//remove para1, para2 by King\

function DoTPLLogout($logout) {

//     session_unset("client_user");
//      session_unset("client_user_type");
//      session_unset('client_active_tab');
//      session_unset('client_role');
//      session_unset('client_name');
    session_unset($_SESSION['instanceID']);

    //unset($_SESSION);
    //session_unset();
    //session_destroy();
    return;
}

// This method logs the user out of the system
function DoTPLSessionActive() {
    return isset($_SESSION);
}

// This method used to verify code
function DoVerifyCode($recaptcha_challenge_field, $recaptcha_response_field) {
    $privatekey = "6LezZ9ASAAAAAFYGBSX8OfUG7SPjvDUBw3co1D_1";
    $response = false;
    $resp = recaptcha_check_answer($privatekey, $_SERVER["REMOTE_ADDR"], $recaptcha_challenge_field, $recaptcha_response_field);
    if ($resp->is_valid) {
        $response = true;
    }
    return $response;
}

//This method used to check the email existing
function CB_CheckEmailExist($email, $param2) {
    $dbtrans = new DBTransaction();
    $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
    $tplclientdao = new TplClientDAO();
    $array = array($email);
    $records = $tplclientdao->selectCheckEmailExist($dbconn, $array);
    $retval = "Email OK";
    if ($records > 0) {
        $retval = "Email Already Exist";
    }
    return $retval;
}

// This method used to Generate HTML
//function DoGenerateRecaptchaHTML($param1,$param2) {
//    $publickey = "6LezZ9ASAAAAABAu9NO5wFx1pP181qUwnXSEUN-H";
//    return recaptcha_get_html($publickey);
//}

$koolajax->enablefunction("DoTPLUpdateSupplierDetails");
$koolajax->enablefunction("DoTPLUpdateSupplierCompanyProfile");
$koolajax->enablefunction("DoTPLUpdateSupplierPhysicalAddress");
$koolajax->enablefunction("DoTPLUpdateSupplierPostalAddress");
$koolajax->enablefunction("DoTPLUpdateSupplierContactDetails");
$koolajax->enablefunction("DoTPLUpdateSupplierWebsiteDetails");
$koolajax->enablefunction("DoTPLUpdateSupplierBranchDetails");
$koolajax->enablefunction("DoTPLDeleteSupplierBranchDetails");
$koolajax->enablefunction("DoTPLSetActiveSupplierBranch");
$koolajax->enablefunction("DoTPLUpdateSupplierDistributorDetails");
$koolajax->enablefunction("DoTPLDeleteSupplierDistributorDetails");
$koolajax->enablefunction("DoTPLSetActiveSupplierDistributor");
$koolajax->enablefunction("DoTPLUpdateSupplierPersonDetails");
$koolajax->enablefunction("DoTPLDeleteSupplierPersonDetails");
$koolajax->enablefunction("DoTPLSetActiveSupplierPerson");
$koolajax->enablefunction("DoTPLConfirmBrandExists");
$koolajax->enablefunction("DoTPLAddSupplierBrandDetails");
$koolajax->enablefunction("DoTPLDeleteSupplierBrandDetails");
$koolajax->enablefunction("DoTPLSetActiveSupplierBrand");
$koolajax->enablefunction("DoTPLSetActiveProductCategory");
$koolajax->enablefunction("DoTPLUpdateSupplierProductDetails");
$koolajax->enablefunction("DoTPLDeleteSupplierProductDetails");
$koolajax->enablefunction("DoTPLSetActiveSupplierProduct");
$koolajax->enablefunction("DoTPLCanCreateShadowProductCategoryAssociation");
$koolajax->enablefunction("DoTPLCreateShadowProductCategoryAssociation");
$koolajax->enablefunction("DoTPLDeleteShadowProductCategoryAssociation");
$koolajax->enablefunction("DoTPLCanCreateShadowProductCategoryLogoListing");
$koolajax->enablefunction("DoTPLCreateShadowProductCategoryLogoListing");
$koolajax->enablefunction("DoTPLDeleteShadowProductCategoryLogoListing");
$koolajax->enablefunction("DoTPLChangeListingType");
$koolajax->enablefunction("DoTPLSendToProduction");
$koolajax->enablefunction("DoTPLIsCustomerDowngrading");
$koolajax->enablefunction("DoTPLLookupBrandList");
$koolajax->enablefunction("CB_PrepareLiveData");
$koolajax->enablefunction("CB_PrepareShadowData");
$koolajax->enablefunction("DoTPLLogin");
$koolajax->enablefunction("DoTPLLogout");
$koolajax->enablefunction("DoTPLSessionActive");
$koolajax->enablefunction("DoTPLSetActiveSupplierAward");
$koolajax->enablefunction("DoTPLUpdateSupplierAwardDetails");
$koolajax->enablefunction("DoTPLDeleteSupplierAwardDetails");
$koolajax->enablefunction("DoTPLUpdateSupplierAccredDetails");
$koolajax->enablefunction("DoTPLDeleteSupplierAccredDetails");
$koolajax->enablefunction("DoTPLSetActiveSupplierAccred");
$koolajax->enablefunction("DoTPLSetActiveSupplierLogo");
$koolajax->enablefunction("DoTPLUpdateSupplierMediaDetails");
$koolajax->enablefunction("DoTPLDeleteSupplierMediaDetails");
$koolajax->enablefunction("DoTPLUpdateSupplierProductMedia");
$koolajax->enablefunction("DoTPLDeleteSupplierProductMedia");
$koolajax->enablefunction("DoTPLUpdateSupplierProductCategoryMedia");
$koolajax->enablefunction("DoTPLDeleteSupplierProductCategoryMedia");
$koolajax->enablefunction("DoTPLUpdateSupplierVideoDetails");
$koolajax->enablefunction("DoVerifyCode");
$koolajax->enablefunction("CB_CheckEmailExist");
$koolajax->enablefunction("getConvertCurruncy");
//$koolajax->enablefunction("DoProductSave");
?>
