<?php

// Register koolajax component

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once $path_doc_root . '/common/util/DBTransaction.php';
require_once($path_doc_root . "/include/KoolPHPSuite/KoolAjax/koolajax.php");
$koolajax->scriptFolder = "../include/KoolPHPSuite/KoolAjax";
require_once($path_doc_root . "/common/sessionmaintain.php");
include_once $path_doc_root . '/common/dao/TplAdminUsersDAO.php';

// Administrator callbacks
// ***********************  Login functions START ***********************

function CB_Logon($userp, $pwd) {
    $ret[0] = 1;
    if ($userp != '' || $pwd != '') {
        include_once ("helper.php");
        $helper = new Helper();
        $helper->initdb($DB_HOST, $DB_PORT, $DB_USER, $DB_PASS, $ADMIN_DB_NAME);
        $ret = $helper->verify_user($userp, $pwd);
    } else {
        $ret['role'] = -1;
    }
    return $ret;
}

function CB_NewLogon($userp, $pwd) {
    global $path_doc_root;
    $loginstatus = "Your Username or Password is incorrect. Please re-check and try again.";
    $dbtrans = new DBTransaction();
    $dbconn = $dbtrans->getConnection($GLOBALS["ADMIN_DB_NAME"]);
    $TplAdminUsersDAO = new TplAdminUsersDAO();
    $enc_pwd = MD5($pwd);
    $param_arr = array($userp, $enc_pwd);
    $results = $TplAdminUsersDAO->selectVerifyUserNameAndPassword($dbconn, $param_arr);
    if ($results) {
        $TplAdminUsersDAO->updateSuccessfulLogin($dbconn, $param_arr);
        $results = $TplAdminUsersDAO->selectNewAdminUserDetails($dbconn, $param_arr);
        CB_InstantiateSession($results);
        $loginstatus = "success";
    }
    if ($results[0]['ROLE_ID'] >= 1 && $results[0]['DIRECTORY_PERIOD_REC_ID'] >=1){  
        $results = $TplAdminUsersDAO->selectAdminUserDetails($dbconn, $param_arr);
        CB_InstantiateSession($results);
        //$dblog->error_log(var_export($results,true));
    } elseif ($results[0]['ROLE_ID'] >= 0 && $results[0]['DIRECTORY_PERIOD_REC_ID'] == NULL) {
        $results = $TplAdminUsersDAO->selectNewAdminUserDetails($dbconn, $param_arr);
        CB_InstantiateSession($results);
    }
    return $loginstatus;
}

function CB_InstantiateSession($sess_arr) {
    require("../config.php");
    $_SESSION['sessid'] = $sess_arr[0]['SESSIONID'];
    $_SESSION['tenantid'] = $sess_arr[0]['TENANT_ID'];
    $_SESSION['uid'] = $sess_arr[0]['REC_ID'];
    $_SESSION['username'] = $sess_arr[0]['USERNAME'];
    $_SESSION['role'] = $sess_arr[0]['ROLE_ID'];
    $_SESSION['realname'] = $sess_arr[0]['FIRSTNAME'] . ' ' . $sess_arr[0]['LASTNAME'];
    $_SESSION['fgid'] = $sess_arr[0]['FRONTGRID_ID'];
    $_SESSION['defaultperiod'] = $sess_arr[0]['DIRECTORY_PERIOD_REC_ID'];
    $_SESSION['TIMEOUT'] = $SESSION_TIMEOUT;
    $_SESSION['LAST_ACTIVITY'] = time();
    return true;
}

function CB_LogonSuccessful($id, $uid, $ret, $user, $name, $fgid, $ddir, $dyear) {
    require("../config.php");
    $_SESSION["sessid"] = $id;
    $_SESSION["uid"] = $uid;
    $_SESSION["username"] = $user;
    $_SESSION["role"] = $ret;
    $_SESSION["realname"] = $name;
    $_SESSION["fgid"] = $fgid;
    $_SESSION["defaultdirid"] = $ddir;
    $_SESSION["defaultperiod"] = $dyear;
    $_SESSION['TIMEOUT'] = $SESSION_TIMEOUT;
    $_SESSION['LAST_ACTIVITY'] = time();
    return true;
}

function CB_Logout($dummy_parameter) {
    unset($_SESSION['sessid']);
    unset($_SESSION['uid']);
    unset($_SESSION['user']);
    unset($_SESSION['role']);
    unset($_SESSION['name']);
    unset($_SESSION['fgid']);
    unset($_SESSION['TIMEOUT']);
    unset($_SESSION['LAST_ACTIVITY']);
    session_unset();
    session_destroy();
    return true;
}

//client login function from the Dashboard area
//function DoTPLLogin($usr, $pwd) {
//    if (!isset($_SESSION))
//        session_start();
//    $session_maintain = new session_maintain();
//
//    if (!isset($_SESSION['instanceID'])) {
//        $_SESSION['instanceID'] = md5(uniqid(rand(), true));
//    } else {
//        $_SESSION['instanceID'] = md5(uniqid(rand(), true));
//    }
//    $array_client = $session_maintain->add_client_field("client_user", $usr, $_SESSION['instanceID'], "client_data");
//    $array_client = $session_maintain->add_client_field("client_username", $usr, $_SESSION['instanceID'], "client_data");
//    $array_client = $session_maintain->add_client_field("client_firstname", $usr, $_SESSION['instanceID'], "client_data");
//    $array_client = $session_maintain->add_client_field("client_active_tab", "client_profile", $_SESSION['instanceID'], "client_data");
//    $array_client = $session_maintain->add_client_field("user", $usr, $_SESSION['instanceID'], "client_data");
//
////                $_SESSION["client_user"] = $usr;
////                $_SESSION["client_username"] = $usr;
////                $_SESSION["client_firstname"] = $usr;
////                $_SESSION["client_active_tab"]  = 'client_profile';
//
//    $_SESSION["uid"] = $usr;
//    $_SESSION["user_type"] = IS_SHADOW_USER;
//    return "SUCCESS";
//}

// ***********************  Login functions END ***********************

function DoDomainSave($domain_name, $domain_data, $rec_id) {
    include_once ("helper.php");
    $helper = new Helper();
    $helper->initdb($DB_HOST, $DB_PORT, $DB_USER, $DB_PASS, $DB_NAME);
    $result = $helper->domain_add($DB_NAME, $domain_name, $domain_data, $rec_id);
    return $result;
}

//function CB_GetDirectoryDefaults_old() {
//    include_once ("helper.php");
//    $helper = new Helper();
//    $helper->initdb($DB_HOST, $DB_PORT, $DB_USER, $DB_PASS, $ADMIN_DB_NAME);
//    $result = $helper->getDefaultDirectory($_SESSION['uid']);
//    return $result;
//}

function CB_GetDirectoryDefaults($user_rec_id) {
    global $path_doc_root;
    include_once $path_doc_root . '/common/dao/TplAdminUsersDAO.php';
    $dbtrans = new DBTransaction();
    $dbconn = $dbtrans->getConnection($ADMIN_DB_NAME);
    $TplAdminUsersDAO = new TplAdminUsersDAO();
    $param_arr = array($user_rec_id);
    $results = $TplAdminUsersDAO->selectDirectoryDefaults($dbconn, $param_arr);
    return $results;
}

function CB_SaveDirectoryDefault($directory_period_rec_id, $user_rec_id) {
    global $path_doc_root, $ADMIN_DB_NAME;
    include_once $path_doc_root . '/common/dao/TplAdminUsersDAO.php';
    $dbtrans = new DBTransaction();
    $dbconn = $dbtrans->getConnection($ADMIN_DB_NAME);
    $TplAdminUsersDAO = new TplAdminUsersDAO();
    $param_arr = array($directory_period_rec_id, $user_rec_id);
    $results = $TplAdminUsersDAO->updateDefaultDirectory($dbconn, $param_arr);
    return $results;
}

function CB_ShowDirectoryList($defaultDir, $pwd) {
    include_once ("helper.php");
    $helper = new Helper();
    $helper->initdb($DB_HOST, $DB_PORT, $DB_USER, $DB_PASS, $ADMIN_DB_NAME);
    $default_dir = $helper->getDefaultDirectory($_SESSION["uid"]);
    $helper->initdb($DB_HOST, $DB_PORT, $DB_USER, $DB_PASS, $DB_NAME);
    return $helper->ShowDirectoryListHTML("directorySelector", $defaultDir, "reloadStatusYear();");
}

function CB_ShowDirectoryList_OLD($defaultDir, $pwd) {
    include_once ("helper.php");
    $helper = new Helper();
    $helper->initdb($DB_HOST, $DB_PORT, $DB_USER, $DB_PASS, $ADMIN_DB_NAME);
    $default_dir = $helper->getDefaultDirectory($_SESSION["uid"]);
    $helper->initdb($DB_HOST, $DB_PORT, $DB_USER, $DB_PASS, $DB_NAME);
    return $helper->ShowDirectoryListHTML("directorySelector", $defaultDir, "reloadStatusYear();");
}

function CB_GetDirectoryByDirRecID($dir_rec_id) {
    global $path_doc_root, $DB_NAME;
    include_once $path_doc_root . '/common/dao/TplDirectoryDAO.php';
    $dbtrans = new DBTransaction();
    $dbconn = $dbtrans->getConnection($DB_NAME);
    $TplDirectorydao = new TplDirectoryDAO();
    $param_arr = array($dir_rec_id);
    $results = $TplDirectorydao->selectCompleteDirectory($dbconn, $param_arr);
    //$dblog->error_log(var_export($results,true));
    return $results;
}

function CB_GetDirectoryPackgesByDirRecID($dir_rec_id) {
    include_once ("helper.php");
    $helper = new Helper();
    $helper->initdb($DB_HOST, $DB_PORT, $DB_USER, $DB_PASS, $DB_NAME);
    $helper->tpldb($DB_NAME);
    $results = $helper->getDirectoryPackages($dir_rec_id);
    return $results;
}

function CB_AddDirectory($fields) {
    include_once ("helper.php");
    $helper = new Helper();
    $helper->initdb($DB_HOST, $DB_PORT, $DB_USER, $DB_PASS, $ADMIN_DB_NAME);
    $helper->tpldb($DB_NAME);
    $helper->save_directory($fields);
    return true;
}

function CB_UpdateDirectory($fields) {
    include_once ("helper.php");
    $helper = new Helper();
    $helper->initdb($DB_HOST, $DB_PORT, $DB_USER, $DB_PASS, $ADMIN_DB_NAME);
    $helper->tpldb($DB_NAME);
    $helper->update_directory($fields);
    return true;
}

function CB_SaveFrontGridDefault($frontgrid_id) {
    include_once ("helper.php");
    $helper = new Helper();
    $helper->initdb($DB_HOST, $DB_PORT, $DB_USER, $DB_PASS, $ADMIN_DB_NAME);
    $helper->save_frontgrid_id($_SESSION['uid'], $frontgrid_id);
    return true;
}

function CB_AddClient($directory_rec_id, $period_rec_id, $name, $firstName, $lastName, $email, $userName, $pw, $clientPackage) {
    global $path_doc_root;
    include_once $path_doc_root . '/common/dao/TplClientDAO.php';
    include_once $path_doc_root . '/common/dao/TplShadowRootDAO.php';
    include_once $path_doc_root . '/common/dao/TplShadowSupplierDAO.php';
//    include_once $path_doc_root . '/common/dao/TplShadowDirectoryOfferingDAO.php';
    $enc_pwd = MD5($pwd);
    $dbtrans = new DBTransaction();
    $dbconn = $dbtrans->getConnection($DB_NAME);
    $TplClientDAO = new TplClientDAO();
//    $TplShadowRootDAO = new TplShadowRootDAO();
//    $TplShadowSupplierDAO = new TplShadowSupplierDAO();
//    $TplShadowDirectoryOfferingDAO = new TplShadowDirectoryOfferingDAO();
    //add client record
    $param_arr = array($name, $firstName, $lastName, $userName, $enc_pwd, $email);
    $client_rec_id = $TplClientDAO->addClientBasic($dbconn, $param_arr);

    //add shadow root record
    $TplShadowRootDAO = new TplShadowRootDAO();
    $param_arr = array($client_rec_id, $directory_rec_id, $period_rec_id, $userName, MD5($enc_pwd), $email);
    $shadow_root_rec_id = $TplShadowRootDAO->insertNewClient($dbconn, $param_arr);

    //add shadow supplier record
    $TplShadowSupplierDAO = new TplShadowSupplierDAO();
    $param_arr = array($shadow_root_rec_id, $client_rec_id, $name);
    $shadow_supplier_rec_id = $TplShadowSupplierDAO->insertNewShadowSupplier($dbconn, $param_arr);

    //add shadow directory offering
    //$param_arr = array($client_rec_id , $directory_rec_id, $period_rec_id, $userName, $pw, $email);
    //$shadow_directory_offer_rec_id = $TplShadowDirectoryOfferingDAO->selectInsert($dbconn, $param_arr);

    return $client_rec_id;

//    include_once ("helper.php");
//    $helper = new Helper();
//    $helper->initdb($DB_HOST, $DB_PORT, $DB_USER, $DB_PASS, $ADMIN_DB_NAME);
//    $helper->tpldb($DB_NAME);
//    $name = mysql_real_escape_string($name);  // check and clean the name for apostrophes 
//    $result = $helper->add_clients($dir, $yr, $name, $firstName, $lastName, $email, $userName, $pw, $clientPackage);
//    return $result;
}

function CB_RemoveClient($dir, $yr, $id, $rid) {
    include_once ("helper.php");
    $helper = new Helper();
    $helper->initdb($DB_HOST, $DB_PORT, $DB_USER, $DB_PASS, $ADMIN_DB_NAME);
    $helper->tpldb($DB_NAME);
    return $helper->delete_client($dir, $yr, $id, $rid);
}

function CB_AddUser($fieldsObj) {
    //include_once ("helper.php");
    $fields = json_decode(stripslashes($fieldsObj));
    $dbtrans = new DBTransaction();
    $dbconn = $dbtrans->getConnection($GLOBALS["ADMIN_DB_NAME"]);
    $enc_password = md5($fields->{'password'});
    $tpladminusersdao = new TplAdminUsersDAO();
    $param_arr = array($_SESSION['role'], $fields->{'username'}, $enc_password, $fields->{'firstname'}, $fields->{'lastname'}, $userid, $_SESSION['tenantid']);
    $results = $tpladminusersdao->insertUser($dbconn, $param_arr);
//    $helper = new Helper();
//    $helper->initdb($DB_HOST, $DB_PORT, $DB_USER, $DB_PASS, $ADMIN_DB_NAME);
//    $helper->save_user($fields);
    return true;
}

function CB_SaveUser($fields) {
//    include_once ("helper.php");
//    $helper = new Helper();
//    $helper->initdb($DB_HOST, $DB_PORT, $DB_USER, $DB_PASS, $ADMIN_DB_NAME);
//    $helper->save_user($fields);
    $fieldsObj = json_decode(stripslashes($fields));
    $dbtrans = new DBTransaction();
    $dbconn = $dbtrans->getConnection($GLOBALS["ADMIN_DB_NAME"]);
    $enc_password = md5($fieldsObj->{'password'});
    $tpladminusersdao = new TplAdminUsersDAO();
    $param_arr = array($fieldsObj->{'role'}, $fieldsObj->{'username'}, $enc_password, $fieldsObj->{'firstname'}, $fieldsObj->{'lastname'}, $fieldsObj->{'id'});
    $results = $tpladminusersdao->updateUser($dbconn, $param_arr);

    return true;
}

function CB_EditUser($id) {
    if (isset($id)) {
        
    }
    return true;
}

function CB_RemoveUser($account_id) {
//    include_once ("helper.php");
//    $helper = new Helper();
//    $helper->initdb($DB_HOST, $DB_PORT, $DB_USER, $DB_PASS, $ADMIN_DB_NAME);
//    return $helper->remove_user($account_id);
    $dbtrans = new DBTransaction();
    $dbconn = $dbtrans->getConnection($GLOBALS["ADMIN_DB_NAME"]);
    $tpladminusersdao = new TplAdminUsersDAO();
    $param_arr = array($account_id);
    $results = $tpladminusersdao->deleteUser($dbconn, $param_arr);
    return true;
}

function CB_AddCategory($fields) {
    include_once ("helper.php");
    $helper = new Helper();
    $helper->initdb($DB_HOST, $DB_PORT, $DB_USER, $DB_PASS, $ADMIN_DB_NAME);
    $helper->tpldb($DB_NAME);
    return $helper->add_category($fields);
}

function CB_EditCategory($fields) {
    include_once ("helper.php");
    $helper = new Helper();
    $helper->initdb($DB_HOST, $DB_PORT, $DB_USER, $DB_PASS, $ADMIN_DB_NAME);
    $helper->tpldb($DB_NAME);
    return $helper->edit_category($fields);
}

function CB_hasDependent($dir, $recid) {
    $nRet[0] = 0;
    $nRet[1] = 0;
    $nRet[2] = 0;
    include_once ("helper.php");
    $helper = new Helper();
    $helper->initdb($DB_HOST, $DB_PORT, $DB_USER, $DB_PASS, $ADMIN_DB_NAME);
    $helper->tpldb($DB_NAME);
    $cnt = $helper->hasChildren($dir, $recid);
    if ($cnt == 0) { /* no sub category */
        $cnt = $helper->hasShadowClient($dir, $recid);
        if ($cnt == 0) {
            $cnt = $helper->hasLiveClient($dir, $recid);
            if ($cnt > 0)
                $nRet[2] = $cnt; /* has live client exist */
        }
        else {
            $nRet[1] = $cnt; /* has shadow client exist */
        }
    } else {
        $nRet[0] = $cnt; /* sub category exist - return cnt */
    }
    return $nRet;
}

function CB_RemoveCategory($fields) {
    include_once ("helper.php");
    $helper = new Helper();
    $helper->initdb($DB_HOST, $DB_PORT, $DB_USER, $DB_PASS, $ADMIN_DB_NAME);
    $helper->tpldb($DB_NAME);
    return $helper->delete_category($fields);
}

function CB_Save($mod_id, $item) {
    $item = intval($item);
    $mod_id = intval($mod_id);
    switch ($mod_id) {
        case ACCOUNT:
            if (isset($item)) {
                
            }
            break;
        case CLIENT:
            if (isset($item)) {
                
            }
            break;
        case CATEGORY:
            if (isset($item)) {
                
            }
            break;
    }
}

function CB_GetSelectedProductCategory($action, $recid) {
    global $DB_HOST, $DB_PORT, $DB_USER, $DB_PASS, $ADMIN_DB_NAME;
    include_once ("constants.php");
    include_once ("helper.php");
    $bChildInPath = false;
    if ($action == ADD) {
        $bChildInPath = true;
    }
    $helper = new Helper();
    $helper->initdb($DB_HOST, $DB_PORT, $DB_USER, $DB_PASS, $ADMIN_DB_NAME);
    return $helper->getProdCategoryInfo($recid, $bChildInPath);
}

function CB_IsDirectoryProductBased($dirId) {
    include_once ("helper.php");
    $helper = new Helper();
    $helper->initdb($DB_HOST, $DB_PORT, $DB_USER, $DB_PASS, $DB_NAME);
    return $helper->IsDirectoryProductBase($dirId);
}

function CB_GetDirectories() {
    global $path_doc_root, $DB_NAME;
    include_once $path_doc_root . '/common/dao/TplDirectoryDAO.php';
    $dbtrans = new DBTransaction();
    $dbconn = $dbtrans->getConnection($DB_NAME);
    $tpldirectorydao = new TplDirectoryDAO();
    $results = $tpldirectorydao->selectDirectories($dbconn);
    //$dblog->error_log(var_export($results,true));
    return $results;
}

function CB_GetAvailableDirPeriods($dir) {
    global $path_doc_root;
    include_once $path_doc_root . '/common/dao/TplDirectoryPeriodDAO.php';
    $dbtrans = new DBTransaction();
    $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
    $tpldirperioddao = new TplDirectoryPeriodDAO();
    $param_arr = array($dir);
    $avail_years = $tpldirperioddao->selectPeriodsByDirRecId($dbconn, $param_arr);
    return $avail_years;
}

function CB_GetDirPeriodSummary($dir_period_id) {
    global $path_doc_root;
    include_once $path_doc_root . '/common/dao/TplDirectoryPeriodDAO.php';
    $dbtrans = new DBTransaction();
    $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
    $tpldirperioddao = new TplDirectoryPeriodDAO();
    $param_arr = array($dir_period_id);
    $avail_years = $tpldirperioddao->selectDirPeriodSummary($dbconn, $param_arr);
    return $avail_years;
}

function CB_GetAvailableDirPackages($dir) {
    include_once ("helper.php");
    $helper = new Helper();
    $helper->initdb($DB_HOST, $DB_PORT, $DB_USER, $DB_PASS, $DB_NAME);
    return $helper->getDefaultPackage($dir);
}

function CB_GetAllDirectory() {
    include_once ("helper.php");
    $helper = new Helper();
    $helper->initdb($DB_HOST, $DB_PORT, $DB_USER, $DB_PASS, $DB_NAME);
    return $helper->getAllDirectory();
}

//	function CB_getDefaultDirectory($uid)
//	{
//		include_once ("helper.php");
//		$helper = new Helper();
//		$helper->initdb($DB_HOST, $DB_PORT, $DB_USER, $DB_PASS, $DB_NAME);
//		return $helper->getDefaultDirectory($uid);
//	}


function CB_GetDirSummaryInfo($dir_period_id) {
    global $path_doc_root, $DB_NAME;
    include_once $path_doc_root . '/common/dao/TplShadowRootDAO.php';
    $dbtrans = new DBTransaction();
    $dbconn = $dbtrans->getConnection($DB_NAME);
    $tplshadowrootdao = new TplShadowRootDAO();
    $param_arr = array($dir_period_id);
    $result = $tplshadowrootdao->selectDirectorySummaryInfo($dbconn, $param_arr);
    return $result;
}

function CB_NewTemplate($name) {
    global $DB_HOST, $DB_PORT, $DB_USER, $DB_PASS, $ADMIN_DB_NAME;
    require("helper.php");
    $helper = new Helper();
    $helper->initdb($DB_HOST, $DB_PORT, $DB_USER, $DB_PASS, $ADMIN_DB_NAME);
    return $helper->template_add($ADMIN_DB_NAME, $name);
}

function CB_SaveBrandTemplate($ctype, $id, $directory, $year, $version, $commentTag, $headerTag, $brandNameTag, $supplierNameTag, $supplierBrandLogoTag) {
    require("helper.php");
    // important notice: the array is mapped in the query - do not rearrange the order unless you know what you are doing
    $collection = array($directory, $year, $version, $commentTag, $headerTag, $brandNameTag, $supplierNameTag, $supplierBrandLogoTag);
    $func = new Helper();
    $func->initdb($DB_HOST, $DB_PORT, $DB_USER, $DB_PASS, $ADMIN_DB_NAME);
    return $func->template_save($ctype, $id, $collection);
}

function CB_SaveProductTemplate($ctype, $id, $directory, $year, $version, $commentTag, $headerTag, $productNameTag, $supplierNameTag, $supplierProductLogoTag) {
    require("helper.php");
    // important notice: the array is mapped in the query - do not rearrange the order unless you know what you are doing
    $collection = array($directory, $year, $version, $commentTag, $headerTag, $productNameTag, $supplierNameTag, $supplierProductLogoTag);
    $func = new Helper();
    $func->initdb($DB_HOST, $DB_PORT, $DB_USER, $DB_PASS, $ADMIN_DB_NAME);
    return $func->template_save($ctype, $id, $collection);
}

function CB_SaveSupplierTemplate($ctype, $id, $directory, $year, $version, $commentTag, $headerTag, $subHeaderTag, $logoTag, $supplierCompanyNameTag, $companyStatementTag, $pysicalAddressTag, $postalAddressTag, $phoneTag, $freePhoneTag, $faxNumberTag, $freeFaxNumberTag, $emailAddressTag, $websiteTag, $contactNameTag, $keyPersonnelTag, $keyPersonnelNameTag, $keyPersonnelPositionTag, $keyPersonnelEmailTag, $keyPersonnelPhoneTag, $keyPersonnelFaxTag, $branchesTag, $branchNameTag, $branchPhysicalAddressTag, $branchPostalAddressTag, $branchPhoneTag, $branchFreePhoneTag, $branchFaxNumberTag, $branchFreeFaxTag, $branchEmailTag) {
    require("helper.php");
    // important notice: the array is mapped in the query - do not rearrange the order unless you know what you are doing
    $collection = array($directory, $year, $version, $commentTag, $headerTag, $subHeaderTag, $logoTag, $supplierCompanyNameTag,
        $companyStatementTag, $pysicalAddressTag, $postalAddressTag, $phoneTag,
        $freePhoneTag, $faxNumberTag, $freeFaxNumberTag, $emailAddressTag,
        $websiteTag, $contactNameTag, $keyPersonnelTag, $keyPersonnelNameTag, $keyPersonnelPositionTag, $keyPersonnelEmailTag, $keyPersonnelPhoneTag, $keyPersonnelFaxTag,
        $branchesTag, $branchNameTag, $branchPhysicalAddressTag,
        $branchPostalAddressTag, $branchPhoneTag, $branchFreePhoneTag, $branchFaxNumberTag,
        $branchFreeFaxTag, $branchEmailTag);
    $func = new Helper();
    $func->initdb($DB_HOST, $DB_PORT, $DB_USER, $DB_PASS, $ADMIN_DB_NAME);
    return $func->template_save($ctype, $id, $collection);
}

function CB_SaveShawsTemplate($ctype, $id, $directory, $year, $version, $commentTag, $headerTag, $supplierCompanyNameTag, $companyStatementTag, $pysicalAddressTag, $postalAddressTag, $phoneTag, $freePhoneTag, $faxNumberTag, $freeFaxNumberTag, $emailAddressTag, $websiteTag, $contactNameTag, $personnelNameTag, $personnelPhoneTag, $personnelFaxNumberTag, $personnelEmailTag, $branchesTag, $branchNameTag, $branchPhysicalAddressTag, $branchPostalAddressTag, $branchPhoneTag, $branchFreePhoneTag, $branchFaxNumberTag, $branchFreeFaxTag, $branchEmailTag, $brandHeadingTag, $brandNameTag, $brandListHeadingTag, $brandListNameTag, $brandListSupplierTag, $drinkTypesIndexHeadingTag, $drinkTypeIndexCategoryNameTag, $drinkTypeIndexNameTag, $drinkTypesHeadingTag, $drinkTypeCategoryNameTag, $drinkTypeNameTag, $drinkTypeProductInfoTag, $drinkTypeProductNameTag) {
    require("helper.php");
    // important notice: the array is mapped in the query - do not rearrange the order unless you know what you are doing
    $collection = array($directory, $year, $version, $commentTag, $headerTag,
        $supplierCompanyNameTag, $companyStatementTag, $pysicalAddressTag, $postalAddressTag,
        $phoneTag, $freePhoneTag, $faxNumberTag, $freeFaxNumberTag, $emailAddressTag, $websiteTag,
        $contactNameTag, $personnelNameTag, $personnelPhoneTag, $personnelFaxNumberTag, $personnelEmailTag,
        $branchesTag, $branchNameTag, $branchPhysicalAddressTag, $branchPostalAddressTag, $branchPhoneTag,
        $branchFreePhoneTag, $branchFaxNumberTag, $branchFreeFaxTag, $branchEmailTag, $brandHeadingTag,
        $brandNameTag, $brandListHeadingTag, $brandListNameTag, $brandListSupplierTag, $drinkTypesIndexHeadingTag,
        $drinkTypeIndexCategoryNameTag, $drinkTypeIndexNameTag, $drinkTypesHeadingTag, $drinkTypeCategoryNameTag,
        $drinkTypeNameTag, $drinkTypeProductInfoTag, $drinkTypeProductNameTag);
    $func = new Helper();
    $func->initdb($DB_HOST, $DB_PORT, $DB_USER, $DB_PASS, $ADMIN_DB_NAME);
    return $func->template_save($ctype, $id, $collection);
}

function CB_ExportData($directory, $type, $year, $version) {
    require("brand.php");
    require("product.php");
    require("supplier.php");
    require("shaw.php");
    require("helper.php");
    //global $OUTPUT;
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
    $object->setfile($OUTPUT . "d" . $directory . "_t" . $type . "_" . $year . ".txt");
    $template = $func->get_template($directory, $type, $year, $version);
    $object->settemplate($template);
    return $object->exec();
}

function CB_PrepareLiveData($directory, $year) {
    require("../config.php");
    require("shadow2live.php");
    // use the target same as source
    $object = new Shadow2Live($DB_NAME, $directory, $year);

    if (!$object)
        $bRet = false;
    else
        $bRet = $object->exec();
    return $bRet;
}

function CB_PrepareShadowData($step, $directory, $sourceperiod, $targetperiod) {
    require("../config.php");
    require("live2shadow.php");
    $bRet = true;
    $object = null;
    $object = new Live2Shadow($DB_NAME, $directory, $sourceperiod, $targetperiod);
    if (!$object)
        $bRet = false;
    else {
        switch ($step) {
            case 1: $bRet = $object->exec();
                break;
            case 2: $bRet = $object->exec2();
                break;
            case 3: $bRet = $object->exec3();
                break; // undo exec
            case 4: $bRet = $object->exec4();
                break; // undo exec2
        }
    }
    return $bRet;
}

/* This is to manually setting session timeout function - not being use for event trigger unless refresh. */

function CB_CheckTimeout($dummy_parameter) {
    if (isset($_SESSION['LAST_ACTIVITY']) && (time() - $_SESSION['LAST_ACTIVITY'] > $_SESSION['TIMEOUT'])) {
        CB_Logout($dummy_parameter);
        return true;
    }
    $_SESSION['LAST_ACTIVITY'] = time();
    return false;
}

function CB_CheckEmailExist($email) {
    global $path_doc_root;
    include_once $path_doc_root . '/common/dao/TplClientDAO.php';
    $dbtrans = new DBTransaction();
    $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
    $tpldirperioddao = new TplClientDAO();
    $param_arr = array($email);
    $avail_years = $tpldirperioddao->selectCheckEmailExist($dbconn, $param_arr);
    return $avail_years;
}

$koolajax->enableFunction("CB_NewLogon");
$koolajax->enableFunction('CB_GetDirectories');
$koolajax->enableFunction("CB_GetDirectoryByDirRecID");
$koolajax->enableFunction("CB_GetDirPeriodSummary");
$koolajax->enableFunction("CB_AddDirectory");
$koolajax->enableFunction("CB_UpdateDirectory");
$koolajax->enableFunction("CB_AddClient");
$koolajax->enableFunction("CB_EditClient");
$koolajax->enableFunction("CB_RemoveClient");
$koolajax->enableFunction("CB_AddUser");
$koolajax->enableFunction("CB_EditUser");
$koolajax->enableFunction("CB_RemoveUser");
$koolajax->enableFunction("CB_AddCategory");
$koolajax->enableFunction("CB_EditCategory");
$koolajax->enableFunction("CB_RemoveCategory");
$koolajax->enableFunction("CB_SaveUser");
$koolajax->enableFunction("CB_GetAvailableDirPeriods");
//$koolajax->enableFunction("CB_GetDirValuationInfo");
$koolajax->enableFunction("CB_hasDependent");
$koolajax->enableFunction("CB_GetAllDirectory");
$koolajax->enableFunction("CB_GetDirInfo");
$koolajax->enablefunction("CB_GetDirSummaryInfo");
$koolajax->enablefunction("DoTPLLogin");
$koolajax->enableFunction("CB_Logon");
$koolajax->enableFunction("CB_Logout");
$koolajax->enableFunction("CB_LogonSuccessful");
$koolajax->enableFunction("CB_PrepareLiveData");
$koolajax->enableFunction("CB_PrepareShadowData");
$koolajax->enableFunction("CB_CheckTimeout");
$koolajax->enableFunction("CB_SaveFrontGridDefault");
$koolajax->enableFunction("CB_IsDirectoryProductBased");
$koolajax->enableFunction("CB_SaveDirectoryDefault");
$koolajax->enableFunction("CB_GetAvailableDirPackages");
$koolajax->enableFunction("CB_ShowDirectoryList");
$koolajax->enableFunction("DoDomainSave");
$koolajax->enableFunction("CB_GetDirectoryDefaults");
$koolajax->enablefunction("CB_CheckEmailExist");
?>
