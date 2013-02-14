<?php

require_once ('migrate.php');
include_once ('../include/debuglog.php');
include_once "../common/util/DBTransaction.php";
include_once "../common/dao/TplDirectoryDAO.php";
include_once "../common/dao/TplShadowSupplierDAO.php";
include_once "../common/dao/TplClientDAO.php";
include_once "../common/dao/TplSupplierDirectoryDAO.php";
include_once "../common/dao/TplSupplierDAO.php";
include_once "../common/dao/TplShadowRootDAO.php";
include_once "../common/dao/TplShadowSupplierBrandDAO.php";
include_once "../common/dao/TplSupplierBrandDAO.php";
include_once "../common/dao/TplShadowSupplierBranchDAO.php";
include_once "../common/dao/TplSupplierBranchDAO.php";
include_once "../common/dao/TplShadowSupplierKeyPersonnelDAO.php";
include_once "../common/dao/TplSupplierKeyPersonnelDAO.php";
include_once "../common/dao/TplShadowSupplierProductCategoryDAO.php";
include_once "../common/dao/TplSupplierProductCategoryDAO.php";
include_once "../common/dao/TplShadowProductDAO.php";
include_once "../common/dao/TplProduct.php";
include_once "../common/dao/TplSupplierDistributorDAO.php";
include_once "../common/dao/TplShadowSupplierDistributorDAO.php";

class Live2Shadow extends Migrate {

    protected $_documentObj;

    // this constructor will superseded the base class
    function __construct($targetDB, $directory, $sourceperiod, $targetperiod) {
        require("../config.php");
        if ($L2S_STEP_DUMP_DEBUG)
            $dblog->error_log("Running Live2Shadow.php - Collecting client information...");
        parent::__construct($targetDB, $directory, $sourceperiod);
   //     $this->_targetDirectory=$directory;
        $this->_targetperiod = $targetperiod;
    }

    public function exec() {
        require("../config.php");
        if ($L2S_STEP_DUMP_DEBUG)
            set_time_limit(30);
        $bRet = true;
        $dbtrans = null;
        $tag = $this->_template;
        try {
            $dblog->error_log("###### Processing Live2Shadow.php->exec()... for Directory ID : " . $this->_targetDirectory . "Source Period : " . $this->_sourceperiod . "Target Period" . $this->_targetperiod . "######");
            if (isset($this->_targetDirectory) && isset($this->_sourceperiod)) {
                $dbtrans = new DBTransaction();
                $dbconn = $dbtrans->getConnection($this->_sourceDB);
                $tplshadowrootdao = new TplShadowRootDAO();
                $param_arr = array($this->_targetperiod);
                $records = $tplshadowrootdao->selectPeriod($dbconn, $param_arr);
                $targetShadowRootID;
                if (count($records) == 0) { // it should only be one otherwise this is not valid result                    
                    $param_arr = array($lcClientId, $this->_targetDirectory, $this->_targetperiod, $username, $password, $emailAddress);
                    $lcShadowRoot_result = $tplshadowrootdao->selectInsert($dbconn, $param_arr);
                    $targetShadowRootID=$lcShadowRoot_result[0]["REC_ID"];
                }else{
                    $targetShadowRootID=$records[0]["REC_ID"];
                }
                $param_arr = array($this->_sourceperiod);
                $records = $tplshadowrootdao->selectPeriod($dbconn, $param_arr);

//                $tpldirdao = new TplDirectoryDAO();
//                $tplclient = new TplClientDAO();
//                $dbconn = $dbtrans->getConnection($this->_sourceDB);
//                $array = array($this->_targetDirectory);
//                $records = $tpldirdao->select($dbconn, $array);
//                $dblog->error_log("Connected [Successful].");               
                if (count($records) == 1) {
                    $sourceShadowRootID=$records[0]["REC_ID"];
                    $tplsupplierdao = new TplSupplierDAO();
                    $param_arr = array($sourceShadowRootID);
                    $supplier_result = $tplsupplierdao->selectShadowRoot($dbconn, $param_arr);

                    //$this->_dbConnectionObj->doFreeResult();
                    //$lcClient_result = $tplclient->select($dbconn, $array);
                    //$lcClient_result = $this->_dbConnectionObj->doStoredProcQuery("CALL GetAllClient('" . $this->_sourceDB . "')"); // 1 entry
                    if (count($supplier_result) > 0) {
                        //if ($L2S_STEP_DUMP_DEBUG)  $dblog->error_log ("Collecting client information...");
                        foreach ($supplier_result as $supplier) {
                            //$this->_dbConnectionObj->doFreeResult();
                            //$dblog->error_log('Client_REC_ID: ' . $lcClient['REC_ID'] . ' and EMAIL_ADDRESS: ' . $lcClient['EMAIL_ADDRESS']);
                            $this->GenerateSupplier($dbconn, $supplier["REC_ID"], $sourceShadowRootID,$targetShadowRootID);
                        }
                    } else {
                        if ($L2S_STEP_DUMP_DEBUG)
                            $dblog->error_log("Notice: No suppliers are found in the table.");
                    }
                }
                $dblog->error_log('Error: Directory not found:');
                //$this->closeDbConnection();
            }
        } catch (Exception $ex) {
            echo "Exception:" . $ex;
            // $dbtrans->rollbackTransaction();
            //throw new pdoDbException($ex); 
        }
        return $bRet;
    }

    public function exec2() { // process to move all Products from Live to Shadow
              echo 'king';
        require("../config.php");
        $bRet = true;
        if ($L2S_STEP_DUMP_DEBUG)
            set_time_limit(30);
        if ($L2S_STEP_DUMP_DEBUG)
            $dblog->error_log("Running Step 2");
//        if ($this->openDbConnection(true)) { // false - testing, true - real usage 
        if ($L2S_STEP_DUMP_DEBUG)
    //        $dblog->error_log("CALL l2s_GetShadowRootByTargetYear->('Source DB:" . $this->_sourceDB . " + Target Year:" . $this->_targetperiod . " + Target Directory:" . $this->_targetDirectory . ")");
    
        //edit by K
        $date = new DateTime();
         error_log("CALL l2s_GetShadowRootByTargetYear->('Source DB:" . $this->_sourceDB . " + Target Year:" . $this->_targetperiod . " + Target Directory:" . $this->_targetDirectory . ")", 3, "/var/tmp/".$this->_targetDirectory ."-". $this->_targetperiod . "date_format($date, 'Y-m-d H:i:s') ".".log");

         $lcShadowRootInfo_result = $this->_dbConnectionObj->doStoredProcQuery("CALL l2s_GetShadowRootByTargetYear('" . $this->_sourceDB . "','" . $this->_targetperiod . "'," . $this->_targetDirectory . ")");
        if ($L2S_STEP_DUMP_DEBUG)
            $dblog->error_log("CALL l2s_GetShadowRootByTargetYear->" . var_export($lcShadowRootInfo_result));
        if ($lcShadowRootInfo_result && $lcShadowRootInfo_result->num_rows > 0) {
            if ($L2S_STEP_DUMP_DEBUG)
                $dblog->error_log("Collecting supplier information...");
            while (($lcShadowRootInfo = $lcShadowRootInfo_result->fetch_array(MYSQLI_ASSOC)) == true) {
                $this->_dbConnectionObj->doFreeResult();
                $lcSupplier_result = $this->_dbConnectionObj->doStoredProcQuery("CALL l2s_GetSupplierByClientID('" . $this->_sourceDB . "', " . $lcShadowRootInfo['CLIENT_REC_ID'] . ")");
                if ($lcSupplier_result && $lcSupplier_result->num_rows > 0) {
                    while (($lcSupplier = $lcSupplier_result->fetch_array(MYSQLI_ASSOC)) == true) {
                        $this->_dbConnectionObj->doFreeResult();
                        $bHasProduct = $this->InsertP2SProduct($lcShadowRootInfo['REC_ID'], $lcSupplier['REC_ID']);
                        if (!$bHasProduct) {
                            if ($L2S_STEP_DUMP_DEBUG)
                                $dblog->error_log('Warning: No product for Supplier[' . $lcSupplier['REC_ID'] . ']');
                        }
                    }
                }
            }
        }
//            $this->closeDbConnection();
//        }
        return true;
    }

    public function exec3() {
        require("../config.php");
        $bRet = true;
        if ($L2S_STEP_DUMP_DEBUG)
            set_time_limit(30);
        if ($this->openDbConnection(false)) { // false - testing, true - real usage 
            $this->_dbConnectionObj->doStoredProcQuery("CALL l2s_StepReset('" . $this->_sourceDB . "','" . $this->_targetperiod . "',3)");
            $bRet = true;
            $this->closeDbConnection();
        }
        return $bRet;
    }

    public function exec4() {
        require("../config.php");
        $bRet = true;
        if ($L2S_STEP_DUMP_DEBUG)
            set_time_limit(30);
        if ($this->openDbConnection(false)) { // false - testing, true - real usage 
            $this->_dbConnectionObj->doStoredProcQuery("CALL l2s_StepReset('" . $this->_sourceDB . "','" . $this->_targetperiod . "',4)");
            $bRet = true;
            $this->closeDbConnection();
        }
        return $bRet;
    }

    private function GenerateSupplier($dbconn, $supplierId,  $sourceShadowRootID,$targetShadowRootID) {
        require("../config.php");
        $bRet = true;
        $lbDirectoryMatch = false;
        if ($L2S_STEP_DUMP_DEBUG)
            set_time_limit(30);
        $tplshadowsupplierdao = new TplShadowSupplierDAO();
        $param_arr = array($sourceShadowRootID, $supplierId);
        $records = $tplshadowsupplierdao->selectExistSupplier($dbconn, $param_arr);

//        
//        $tplsupplierdirectorydao=new TplSupplierDirectoryDAO();
//        $tplsupplierdao=new TplSupplierDAO();
//        $param_arr=array($lcClientId);       
//        $lcSupplier_result=$tplsupplierdao->select($dbconn, $param_arr);
        //$lcSupplier_result = $this->_dbConnectionObj->doStoredProcQuery("CALL l2s_GetSupplier('" . $this->_sourceDB . "', " . $lcClientId . ")");
        if (count($records) == 0) {
//            if ($L2S_STEP_DUMP_DEBUG)
//                $dblog->error_log("Collecting supplier information...");
//            foreach ($records as $lcSupplier) {
//                if ($L2S_STEP_DUMP_DEBUG)
//                    $dblog->error_log('Looking for a directory match for ' . $lcSupplier['NAME']);
//                $param_arr = array($lcSupplier['REC_ID'], $this->_targetDirectory);
//                $lcSupplierDir_result = $tplsupplierdirectorydao->select($dbconn, $param_arr);
//                // $this->_dbConnectionObj->doFreeResult();
//                // $lcSupplierDir_result = $this->_dbConnectionObj->doStoredProcQuery("CALL l2s_GetSupplierDirectory('" . $this->_sourceDB . "', " . $lcSupplier['REC_ID'] . ", '" . $this->_targetDirectory . "')");
//                if (count($lcSupplierDir_result) == 1) {
//                    // { OK, lets update the DirectoryMatch flag if we have a match }
//                    $lbDirectoryMatch = true;
//                    // { OK, if we have a directory match, then lets start adding data }
//                    if ($L2S_STEP_DUMP_DEBUG)
//                        $dblog->error_log("========== START LIVE2SHADOW FOR CLIENT [" . $lcClientId . "] ==========");
//                    if ($L2S_STEP_DUMP_DEBUG)
//                        $dblog->error_log('Creating the tpl_shadow_root record for client [' . $lcClientId . ']');
////					$this->InsertClient2Shadow(1434, 'sales@eurotec.co.nz');
                    $this->InsertSupplier2Shadow($dbconn, $supplierId, $sourceShadowRootID,$targetShadowRootID);
//                    break; // match found and break.
//                }
//            }
        }
        else {
            $bRet = false;
        }
        return $bRet;
    }

    private function InsertSupplier2Shadow($dbconn,$supplierId, $sourceShadowRootID,$targetShadowRootID) {
        require("../config.php");
        $bRet = true;
        if ($L2S_STEP_DUMP_DEBUG)
            set_time_limit(30);
       // $this->_dbConnectionObj->doFreeResult();
        // The procedure should insert and return the new record added (1 result only)
        // { OK, lets add the Shadow Root record }
//        include_once ('helper.php');
//        $func = new Helper();
//        $username = $func->GenerateRandom(8);
//        $password = $func->GenerateRandom(8);


//        $tplshadowrootdao=new TplShadowRootDAO();
//        $param_arr=array( $lcClientId , $this->_targetDirectory, $this->_targetperiod, $username , $password , $emailAddress );
//        $lcShadowRoot_result=$tplshadowrootdao->selectInsert($dbconn, $param_arr);
//        $dblog->error_log($this->_sourceDB . " + " . $lcClientId . " + " . $this->_targetDirectory . " + " . $this->_targetperiod . " + " . $username . " + " . $password . " + " . $emailAddress);
//        $lcShadowRoot_result = $this->_dbConnectionObj->doStoredProcQuery("CALL l2s_InsertClient2Root('" . $this->_sourceDB . "',"
//                . $lcClientId . "," . $this->_targetDirectory . ",'" . $this->_targetperiod . "','" . $username . "','" . $password . "','" . $emailAddress . "')"); //tested

//        if (count($lcShadowRoot_result) == 1) {
//            foreach ($lcShadowRoot_result as $lcShadowRoot) {
                // { OK, now lets write the directory offerings }
                if ($L2S_STEP_DUMP_DEBUG)
                    $dblog->error_log('Creating the tpl_shadow_directory_offering for RootClient [' . $lcShadowRoot['REC_ID'] . ']');
             $dblog->error_log("You messed up!", 3, "/var/tmp/my-errors.log");
                $bRetWarn = $this->InsertShadow2DirectoryOffering($dbconn, $sourceRootId,$targetRootID);
                if (!$bRetWarn)
                    if ($L2S_STEP_DUMP_DEBUG)
                        $dblog->error_log('Warning: No directory offering for root [' . $lcShadowRoot['REC_ID'] . '].');
                $this->InsertShadow2DirectoryAdditionalOffering($dbconn, $sourceRootId,$targetRootID); 
                if (!$bRetWarn)
                    if ($L2S_STEP_DUMP_DEBUG)
                        $dblog->error_log('Warning: No directory additional offering for root [' . $lcShadowRoot['REC_ID'] . '].');
                // OK now lets set the default directory offering to either previous years of the default
                if ($L2S_STEP_DUMP_DEBUG)
                    $dblog->error_log('Setting the correct tpl_shadow_root_directory_offering_ID for RootClient [' . $lcShadowRoot['REC_ID'] . ']');
                $bRetWarn = $this->Insert2ShadowRootDefaultDirectoryOffer($lcClientId, $lcShadowRoot['REC_ID']);
                if (!$bRetWarn)
                    if ($L2S_STEP_DUMP_DEBUG)
                        $dblog->error_log('Critical: No DEFAULT directory offering set for root [' . $lcShadowRoot['REC_ID'] . '].');

                // { OK, now lets write the supplier records } source line 450
                $bRetWarn = $this->InsertSupplier2ShadowSupplier($lcClientId, $lcShadowRoot['REC_ID']);
                if (!$bRetWarn)
                    if ($L2S_STEP_DUMP_DEBUG)
                        $dblog->error_log('Warning: Unable to transfer the client[' . $lcClientId . '] from Supplier table into Shadow Supplier table');
//            }
//        } else {
//            if ($L2S_STEP_DUMP_DEBUG)
//                $dblog->error_log('Critical: Unable to add the client [' . $lcClientId . '] to the root table. Live to Shadow failed.');
//            $bRet = false;
//        }
        return $bRet;
    }

    private function InsertShadow2DirectoryOffering($dbconn, $sourceRootId,$targetRootID) {
        require("../config.php");
        $bRet = true;
        $tplshadowdirectoryofferingdao = new TplShadowDirectoryPeriodOfferingDAO();
        if ($L2S_STEP_DUMP_DEBUG)
            set_time_limit(30);
       // $this->_dbConnectionObj->doFreeResult();
       // if ($L2S_STEP_DUMP_DEBUG)
        //    $dblog->error_log("CALL l2s_GetDirectoryOffering->" . $this->_sourceDB . " + " . $this->_targetDirectory . " + " . $this->_targetperiod);
        // $lcDirectoryOffering_result = $this->_dbConnectionObj->doStoredProcQuery("CALL l2s_GetDirectoryOffering('" . $this->_sourceDB . "', " . $this->_targetDirectory . ", '" . $this->_targetperiod . "')");
        $param_arr = array($targetRootID,$sourceRootId);
        $tplshadowdirectoryofferingdao->selectInsert($dbconn, $param_arr);
//        
//        if (count($lcDirectoryOffering_result) > 0) {
//            foreach ($lcDirectoryOffering_result as $lcDirectoryOffering) {
//
//                if ($L2S_STEP_DUMP_DEBUG)
//                    $dblog->error_log("Directory Offer Found:" . var_export($lcDirectoryOffering, true));
//                $this->_dbConnectionObj->doFreeResult();
//                $lcDirectoryShadowOffering_result = $this->_dbConnectionObj->doStoredProcQuery("CALL l2s_Insert2ShadowDirectoryOffering('"
//                        . $this->_sourceDB . "', "
//                        . $lcRootId . ", "
//                        . $lcDirectoryOffering['REC_ID'] . ", "
//                        . $this->_targetDirectory . ", '"
//                        . $this->_targetperiod . "', '"
//                        . $lcDirectoryOffering['NAME'] . "','"
//                        . $lcDirectoryOffering['DESCRIPTION'] . "',"
//                        . $lcDirectoryOffering['COST_EXCL_GST'] . ","
//                        . $lcDirectoryOffering['GST_RATE'] . ", "
//                        . $lcDirectoryOffering['MAX_BRANCH_COUNT'] . ","
//                        . $lcDirectoryOffering['MAX_KEY_PERSONNEL_COUNT'] . ","
//                        . $lcDirectoryOffering['MAX_BRAND_COUNT'] . ","
//                        . $lcDirectoryOffering['MAX_PRODUCT_CATEGORY_COUNT'] . ")"); //tested
//            }
//            return $bRet = true;
//        } else {
//            return $bRet = false;
//        }
    }

    private function Insert2ShadowRootDefaultDirectoryOffer($CLIENT_REC_ID, $SHADOW_REC_ID) {
        global $dblog;
        // this first of all all gets the sources years directory offer name and then tries to match it to the target years directory offer
        // if no match is found then it sets the default directory offer against the shadow root record as the default directory offer
        //$this->_dbConnectionObj->doFreeResult();
        //get source year shadow root directory offer id and match to an offer NAME in directory offer table
//        $query = "SELECT sdo.NAME FROM " . $this->_targetDB . ".tpl_shadow_root sr ";
//        $query .="INNER JOIN " . $this->_targetDB . ".tpl_shadow_directory_offering sdo ON (sr.SHADOW_DIRECTORY_OFFERING_REC_ID = sdo.REC_ID) ";
//        $query .= "WHERE sr.DIRECTORY_YEAR = " . $this->_sourceperiod . " AND ";
//        $query .= "sr.DIRECTORY_REC_ID = " . $this->_targetDirectory . " AND ";
//        $query .= "sr.CLIENT_REC_ID = " . $CLIENT_REC_ID . ";";
//        $dblog->error_log($query);
//        $this->_dbConnectionObj->doFreeResult();

        $tplshadowdirectoryofferingdao = new TplShadowDirectoryPeriodOfferingDAO();
        $tplshadowrootdao = new TplShadowRootDAO();

        $param_arr = array($this->_sourceperiod, $this->_targetDirectory, $CLIENT_REC_ID);
        $sourceYearDirectoryOffer_result = $tplshadowdirectoryofferingdao->selectJoin($dbconn, $param_arr);
//        
//        
//        
//        $sourceYearDirectoryOffer_result = $this->_dbConnectionObj->doQuery($query);

        if (count($sourceYearDirectoryOffer_result) > 0) {
            $dblog->error_log('Previous Directory Offer Found: ' . $sourceYearDirectoryOffer['NAME']);
            //lookup NAME for target directory offers and match
//            $query = "SELECT REC_ID, COST_EXCL_GST, GST_RATE FROM " . $this->_targetDB . ".tpl_shadow_directory_offering ";
//            $query .= "WHERE DIRECTORY_YEAR = " . $this->_targetperiod . " AND ";
//            $query .= "DIRECTORY_REC_ID = " . $this->_targetDirectory . " AND ";
//            $query .= "SHADOW_REC_ID = " . $SHADOW_REC_ID . " AND ";
//            $query .= "NAME = '" . $sourceYearDirectoryOffer['NAME'] . "';";
//            $dblog->error_log($query);
//            $this->_dbConnectionObj->doFreeResult();
//            $targetDirectoryOffer_result = $this->_dbConnectionObj->doQuery($query);
            $param_arr = array($this->_targetperiod, $this->_targetDirectory, $SHADOW_REC_ID, $sourceYearDirectoryOffer['NAME']);
            $targetDirectoryOffer_result = $tplshadowdirectoryofferingdao->select($dbconn, $param_arr);
            //and set against shadow root
            foreach ($targetDirectoryOffer_result as $targetDirectoryOffer) {
//                $query = 'UPDATE ' . $this->_targetDB . '.tpl_shadow_root';
//                $query .= ' SET SHADOW_DIRECTORY_OFFERING_REC_ID = ' . $targetDirectoryOffer['REC_ID'];
//                $query .= ", TRANSACTION_TOTAL_EXCL_GST = " . $targetDirectoryOffer['COST_EXCL_GST'];
//                $query .= ", TRANSACTION_TOTAL_INCL_GST = " . $targetDirectoryOffer['COST_EXCL_GST'] * (($targetDirectoryOffer['GST_RATE'] + 100) / 100);
//                $query .= ' WHERE REC_ID = ' . $SHADOW_REC_ID . ';';
//                    $this->_dbConnectionObj->doQuery($query);
                $param_arr = array($targetDirectoryOffer['REC_ID'], $targetDirectoryOffer['COST_EXCL_GST'], $targetDirectoryOffer['COST_EXCL_GST'] * (($targetDirectoryOffer['GST_RATE'] + 100) / 100), $SHADOW_REC_ID);
                $tplshadowrootdao->updateAll($dbconn, $param_arr);
//                    
//                $dblog->error_log('sourceYearDirectoryOffer:' . $query);
            }
//            $this->_dbConnectionObj->doFreeResult();
            //$this->_dbConnectionObj->doQuery($query);
            return true;
        } else {
//            //select default directory offer for the year 
//            $query = 'SELECT sdo.REC_ID, sdo.COST_EXCL_GST, sdo.GST_RATE FROM ' . $this->_targetDB . '.tpl_shadow_directory_offering sdo ';
//            $query .= 'INNER JOIN ' . $this->_targetDB . '.tpl_directory_offering do ON (sdo.MASTER_REC_ID = do.REC_ID) ';
//            $query .= 'WHERE do.DIRECTORY_YEAR = ' . $this->_targetperiod . ' AND ';
//            $query .= 'do.DIRECTORY_REC_ID = ' . $this->_targetDirectory . ' AND ';
//            $query .= 'sdo.SHADOW_REC_ID = ' . $SHADOW_REC_ID . ' AND ';
//            $query .= 'do.IS_DEFAULT = 1 LIMIT 1;';
//            $dblog->error_log($query);
//            $this->_dbConnectionObj->doFreeResult();
//            $targetDirectoryOffer_result = $this->_dbConnectionObj->doQuery($query);
            $param_arr = array($this->_targetperiod, $this->_targetDirectory, $SHADOW_REC_ID);
            $targetDirectoryOffer_result = $tplshadowdirectoryofferingdao->selectExceptName($dbconn, $param_arr);
            //and set against shadow root
            foreach ($targetDirectoryOffer_result as $targetDirectoryOffer) {
//                $query = 'UPDATE ' . $this->_targetDB . '.tpl_shadow_root';
//                $query .= ' SET SHADOW_DIRECTORY_OFFERING_REC_ID = ' . $targetDirectoryOffer['REC_ID'];
//                $query .= ", TRANSACTION_TOTAL_EXCL_GST = " . $targetDirectoryOffer['COST_EXCL_GST'];
//                $query .= ", TRANSACTION_TOTAL_INCL_GST = " . $targetDirectoryOfferering['COST_EXCL_GST'] * (($targetDirectoryOffer['GST_RATE'] + 100) / 100);
//                $query .= ' WHERE REC_ID = ' . $SHADOW_REC_ID . ';';
//                $this->_dbConnectionObj->doQuery($query);
//                $dblog->error_log($query);

                $param_arr = array($targetDirectoryOffer['REC_ID'], $targetDirectoryOffer['COST_EXCL_GST'], $targetDirectoryOffer['COST_EXCL_GST'] * (($targetDirectoryOffer['GST_RATE'] + 100) / 100), $SHADOW_REC_ID);
                $tplshadowrootdao->updateAll($dbconn, $param_arr);
            }
            return true;
        }
    }

    private function InsertShadow2DirectoryAdditionalOffering($dbconn, $sourceRootId,$targetRootID) {
        require("../config.php");
        $bRet = true;
        $tpldirectoryadditionalofferingdao = new TplDirectoryAdditionalOfferingDAO();
        $tplshadowdirectoryadditionalofferingdao = new TplShadowDirectoryAdditionalOfferingDAO();

        if ($L2S_STEP_DUMP_DEBUG)
            set_time_limit(30);
        if ($L2S_STEP_DUMP_DEBUG)
            $dblog->error_log('CALL l2s_GetDirectoryAdditionalOffering(' . $this->_sourceDB . " + " . $this->_targetDirectory . " + " . $this->_sourceperiod);
        $param_arr = array($sourceRootId);
        $lcDirectoryAdditionalOffering_result = $tpldirectoryadditionalofferingdao->select($dbconn, $param_arr);

        // $lcDirectoryAdditionalOffering_result = $this->_dbConnectionObj->doStoredProcQuery("CALL l2s_GetDirectoryAdditionalOffering('" . $this->_sourceDB . "', " . $this->_targetDirectory . ", '" . $this->_sourceperiod . "')");
        if (count($lcDirectoryAdditionalOffering_result) > 0) {

            foreach ($lcDirectoryAdditionalOffering_result as $lcDirectoryAdditionalOffering) {
                //$this->_dbConnectionObj->doFreeResult();
//                $lcShadowDirectoryAdditionalOffering_result = $this->_dbConnectionObj->doStoredProcQuery("CALL l2s_Insert2ShadowDirectoryAdditionalOffering('"
//                        . $this->_sourceDB . "', "
//                        . $lcRootId . ", "
//                        . $lcDirectoryAdditionalOffering['REC_ID'] . ", "
//                        . $this->_targetDirectory . ", '"
//                        . $this->_targetperiod . "', '"
//                        . $lcDirectoryAdditionalOffering['CODE'] . "', '"
//                        . $lcDirectoryAdditionalOffering['NAME'] . "', '"
//                        . $lcDirectoryAdditionalOffering['DESCRIPTION'] . "', "
//                        . $lcDirectoryAdditionalOffering['COST_EXCL_GST'] . ", "
//                        . $lcDirectoryAdditionalOffering['GST_RATE'] . ")");
                $param_arr = array($targetRootID, $lcDirectoryAdditionalOffering['REC_ID']);
                $lcShadowDirectoryAdditionalOffering_result = $tplshadowdirectoryadditionalofferingdao->selectInsert($dbconn, $param_arr);

                if (count($lcShadowDirectoryAdditionalOffering_result) > 0) {
                    foreach ($lcShadowDirectoryAdditionalOffering_result as $lcShadowDirectoryAdditionalOffering) {
                        if ($L2S_STEP_DUMP_DEBUG)
                            $dblog->error_log('Creating the tpl_shadow_directory_additional_offering for RootClient [' . $lcRootId . ']');
                        $this->InsertShadow2DirectoryAdditionalOfferingDiscount($targetRootID, $lcDirectoryAdditionalOffering['REC_ID'], $lcShadowDirectoryAdditionalOffering['REC_ID']);
                    }
                }
            }
        } else
            return false;
        return $bRet;
    }

    private function InsertShadow2DirectoryAdditionalOfferingDiscount($targetRootID, $lcAdditionalOfferingId, $lcShadowAdditionalOfferingId) {
        require("../config.php");
        $bRet = true;
        if ($L2S_STEP_DUMP_DEBUG)
            set_time_limit(30);
        $tplshadowdirectoryadditionalofferingdiscountdao = new TplShadowDirectoryAdditionalOfferingDiscountDAO();
        $param_arr($targetRootID, $lcShadowAdditionalOfferingId, $lcAdditionalOfferingId);
        $tplshadowdirectoryadditionalofferingdiscountdao->selectInsert($dbconn, $param_arr);
//{ OK, now lets write the directory additional offerings }
//        $this->_dbConnectionObj->doFreeResult();
//        $lcDirectoryAdditionalOfferingDiscount_result = $this->_dbConnectionObj->doStoredProcQuery("CALL l2s_GetDirectoryAdditionalOfferingDiscount('" . $this->_sourceDB . "', " . $lcAdditionalOfferingId . ")");
//        if ($lcDirectoryAdditionalOfferingDiscount_result && $lcDirectoryAdditionalOfferingDiscount_result->num_rows > 0) {
//            while (($lcDirectoryAdditionalOfferingDiscount = $lcDirectoryAdditionalOfferingDiscount_result->fetch_array(MYSQLI_ASSOC)) == true) {
//                $this->_dbConnectionObj->doFreeResult();
//                /* continue line 408 in source */
//                $lcShadowDirectoryAdditionalOfferingDiscount_result = $this->_dbConnectionObj->doStoredProcQuery("CALL l2s_Insert2ShadowDirectoryAdditionalOfferingDiscount('"
//                        . $this->_sourceDB . "', "
//                        . $lcRootId . ", "
//                        . $lcDirectoryAdditionalOfferingDiscount['REC_ID'] . ", "
//                        . $lcShadowAdditionalOfferingId . ", "
//                        . $lcDirectoryAdditionalOfferingDiscount['VOLUME'] . ", "
//                        . $lcDirectoryAdditionalOfferingDiscount['DISCOUNT_PER_UNIT'] . ")");
//            }
//        }
        return $bRet;
    }

    private function InsertSupplier2ShadowSupplier($lcClientId, $lcRootId) {
        require("../config.php");
        if ($L2S_STEP_DUMP_DEBUG)
            set_time_limit(30);
        if ($L2S_STEP_DUMP_DEBUG)
            $dblog->error_log('CALL l2s_GetDirectoryAdditionalOffering(' . $this->_sourceDB . " + " . $this->_targetDirectory . " + " . $this->_sourceperiod);
        $tplsupplierdao = new TplSupplierDAO();
        $tplshadowsupplierdao = new TplShadowSupplierDAO();
        $param_arr = array($lcClientId);
        $lcSupplier_result = $tplsupplierdao->select($dbconn, $param_arr);
        $bRet = true;
//        $this->_dbConnectionObj->doFreeResult();
//        $lcSupplier_result = $this->_dbConnectionObj->doStoredProcQuery("CALL l2s_GetSupplierByClientID('" . $this->_sourceDB . "', " . $lcClientId . ")");


        if ($L2S_STEP_DUMP_DEBUG)
            $dblog->error_log('CALL l2s_GetSupplierByClientID: $lcSupplier_result->num_rows = ' . $lcSupplier_result->num_rows);
        if (count($lcSupplier_result) > 0) {
            foreach ($lcSupplier_result as $lcSupplier) {
                //$this->_dbConnectionObj->doFreeResult();
                // source code line 461
//                $lcSupplier_Args1 = Array($this->_sourceDB, $lcRootId, $lcSupplier['REC_ID'], $lcSupplier['CLIENT_REC_ID'],
//                    $lcSupplier['NAME'], $lcSupplier['TRADING_AS_NAME'], $lcSupplier['CONTACT_NAME'],
//                    $lcSupplier['CONTACT_POSITION'], $lcSupplier['TELEPHONE_NO'], $lcSupplier['FREE_TELEPHONE_NO'],
//                    $lcSupplier['FAX_NO'], $lcSupplier['FREE_FAX_NO'], $lcSupplier['EMAIL_ADDRESS'],
//                    $lcSupplier['WEBSITE_ADDRESS']); // 14
//               
//                $physicalAddressnfo = $this->constructPhysicalAddress($lcSupplier);
//                $postalAddressnfo = $this->constructPostalAddress($lcSupplier);
//
//                $lcSupplier_Args2 = array_merge($lcSupplier_Args1, $physicalAddressnfo); // 7 entries
//                $lcSupplier_Args3 = array_merge($lcSupplier_Args2, $postalAddressnfo); // 7 entries
//
//                if ($lcSupplier['SUPPLIER_TYPE_REC_ID'] == null) {
//                    $supplietTypeId = "0";
//                } else {
//                    $supplietTypeId = $lcSupplier['SUPPLIER_TYPE_REC_ID'];
//                }
//                $lcSupplier_Args4 = Array($lcSupplier['COMPANY_PROFILE_TEXT'],
//                    $this->checkIfNull($lcSupplier['PRINT_LOGO_LOCATION']),
//                    $this->checkIfNull($lcSupplier['WEB_LOGO_LOCATION']),
//                    $supplietTypeId);
//                $lcSupplier_Args = array_merge($lcSupplier_Args3, $lcSupplier_Args4); // 4 entries
//
//                $argsHelper = $this->getArgHelper($lcSupplier_Args);
//                $query = "CALL l2s_InsertSupplier2ShadowSupplier(" . $argsHelper . ")";
//                if ($L2S_STEP_DUMP_DEBUG)
//                    $dblog->error_log("CALL l2s_InsertSupplier2ShadowSupplier ->" . var_export($lcSupplier_Args, true));
//                $bRetSP = $this->_dbConnectionObj->doStoredProcQuery($query, $lcSupplier_Args); //32 entries
                $param_arr = array($lcRootId, $lcSupplier['REC_ID'], $lcClientId);
                $tplshadowsupplierdao->selectInsert($dbconn, $param_arr);

//                if (!$bRetSP) {
//                    // catch the error and log it
//                    if ($L2S_STEP_DUMP_DEBUG)
//                        $dblog->error_log("Critical: Supplier NOT FOUND for " . $lcSupplier['NAME']);
//                } else {
//                    if ($L2S_STEP_DUMP_DEBUG)
//                        $dblog->error_log("Success: Shadow Supplier Updated for :" . $lcSupplier['NAME']);
//                }
                // { OK, now lets write the supplier branches }
                $bHasBranch = $this->InsertSB2SSBranch($lcRootId, $lcSupplier['REC_ID']); //tested

                if (!$bHasBranch) {
                    if ($L2S_STEP_DUMP_DEBUG)
                        $dblog->error_log('Warning: No branch for Supplier[' . $lcSupplier['REC_ID'] . ']');
                } else {
                    if ($L2S_STEP_DUMP_DEBUG)
                        $dblog->error_log('Success: Shadow Supplier Branches Updated for Supplier[' . $lcSupplier['REC_ID'] . ']');
                }
                // { OK, now lets write the supplier distributor }
                $bHasDistrib = $this->InsertSD2SSDistributor($lcRootId, $lcSupplier['REC_ID']); //tested

                if (!$bHasDistrib) {
                    if ($L2S_STEP_DUMP_DEBUG)
                        $dblog->error_log('Warning: No distributor for Supplier[' . $lcSupplier['REC_ID'] . ']');
                }
                // { OK, now lets write the supplier brands }
                $bHasBrand = $this->InsertSB2SSBrand($lcRootId, $lcSupplier['REC_ID']);

                if (!$bHasBrand) {
                    if ($L2S_STEP_DUMP_DEBUG)
                        $dblog->error_log('Warning: No brand for Supplier[' . $lcSupplier['REC_ID'] . ']');
                } else {
                    if ($L2S_STEP_DUMP_DEBUG)
                        $dblog->error_log('Success: Shadow Supplier Brands Updated for Supplier[' . $lcSupplier['REC_ID'] . ']');
                }
                //{ OK, now lets write the supplier key personnel }
                $bHasPersonnel = $this->InsertSKP2SSKPersonnel($lcRootId, $lcSupplier['REC_ID']);

                if (!$bHasPersonnel) {
                    if ($L2S_STEP_DUMP_DEBUG)
                        $dblog->error_log('Warning: No personnel for Supplier[' . $lcSupplier['REC_ID'] . ']');
                }
                //{ OK, now lets write the supplier product category }
                $bHasPCategory = $this->InsertSPCategory2SSPCategory($lcRootId, $lcSupplier['REC_ID']);

                if (!$bHasPCategory) {
                    if ($L2S_STEP_DUMP_DEBUG)
                        $dblog->error_log('Warning: No product category for Supplier[' . $lcSupplier['REC_ID'] . ']');
                }
                //{ OK, now lets write the supplier product }
                //		$bHasProduct = $this->InsertP2SProduct($lcRootId, $lcSupplier['REC_ID']);
                //$bHasProduct = $this->InsertP2SProduct(22, 856); // test call - remove table constrains
                //		if (!$bHasProduct) {
                //			if ($L2S_STEP_DUMP_DEBUG) $dblog->error_log('Warning: No product for Supplier[' . $lcSupplier['REC_ID'] . ']');
                //		}
            }
        }
        return $bRet;
    }

    private function InsertSB2SSBranch($lcRootId, $lcSupplierId) {
        require("../config.php");
        $bRet = false;
        $tplshadowsupplierbranchdao = new TplShadowSupplierBranchDAO();
        $param_arr = array($lcRootId, $lcSupplierId);
        $tplshadowsupplierbranchdao->selectInsert($dbconn, $param_arr);

//        if ($L2S_STEP_DUMP_DEBUG)
//            set_time_limit(30);
//        if ($L2S_STEP_DUMP_DEBUG)
//            $dblog->error_log('CALL l2s_GetSupplierBranchBySupplierID(' . $this->_sourceDB . " + " . $lcSupplierId . ')');
//        //$this->_dbConnectionObj->doFreeResult();
//        $lcSupplierBranch_result = $this->_dbConnectionObj->doStoredProcQuery("CALL l2s_GetSupplierBranchBySupplierID('" . $this->_sourceDB . "', " . $lcSupplierId . ")");
//        if ($lcSupplierBranch_result && $lcSupplierBranch_result->num_rows > 0) {
//            while (($lcSupplierBranch = $lcSupplierBranch_result->fetch_array(MYSQLI_ASSOC)) == true) {
//                $this->_dbConnectionObj->doFreeResult();
//                // source code line 529
//                $lcSupplierBranch_Args1 = Array(
//                    $this->_sourceDB,
//                    $lcRootId,
//                    $lcSupplierBranch['REC_ID'],
//                    $lcSupplierBranch['SUPPLIER_REC_ID'],
//                    $lcSupplierBranch['ORDER'],
//                    $lcSupplierBranch['NAME'],
//                    $lcSupplierBranch['TELEPHONE_NO'],
//                    $lcSupplierBranch['FREE_TELEPHONE_NO'],
//                    $lcSupplierBranch['FAX_NO'],
//                    $lcSupplierBranch['FREE_FAX_NO'],
//                    $lcSupplierBranch['EMAIL_ADDRESS']); // 11
//                $physicalAddressnfo = $this->constructPhysicalAddress($lcSupplierBranch);
//                $postalAddressnfo = $this->constructPostalAddress($lcSupplierBranch);
//                $lcSupplierBranch_Args2 = array_merge($lcSupplierBranch_Args1, $physicalAddressnfo); // 7 entries
//                $lcSupplierBranch_Args = array_merge($lcSupplierBranch_Args2, $postalAddressnfo); // 7 entries
//
//                $argsHelper = $this->getArgHelper($lcSupplierBranch_Args);
//                if ($L2S_STEP_DUMP_DEBUG)
//                    $dblog->error_log('CALL l2s_InsertSupplierBranch2ShadowSupplierBranch ->' . var_export($lcSupplierBranch_Args, true));
//                $this->_dbConnectionObj->doStoredProcQuery("CALL l2s_InsertSupplierBranch2ShadowSupplierBranch(" . $argsHelper . ")", $lcSupplierBranch_Args); //31 entries
//                $bRet = true;
//            }
//        }
        return $bRet;
    }

    private function InsertSD2SSDistributor($lcRootId, $lcSupplierId) {
        require("../config.php");
        $bRet = false;
        if ($L2S_STEP_DUMP_DEBUG)
            set_time_limit(30);
        $tplshadowsupplierdistributordao = new TplShadowSupplierDistributorDAO();
        $param_arr = array($lcRootId, $lcSupplierId);
        $tplshadowsupplierdistributordao->selectInsert($dbconn, $param_arr);

//        
//        $this->_dbConnectionObj->doFreeResult();
//        // source code line 585
//        $lcSupplierDistributor_result = $this->_dbConnectionObj->doStoredProcQuery("CALL l2s_GetSupplierDistributorBySupplierID('" . $this->_sourceDB . "', " . $lcSupplierId . ")");
//        if ($lcSupplierDistributor_result && $lcSupplierDistributor_result->num_rows > 0) {
//            while (($lcSupplierDistributor = $lcSupplierDistributor_result->fetch_array(MYSQLI_ASSOC)) == true) {
//                $this->_dbConnectionObj->doFreeResult();
//                // source code line 529
//                // assuring the last arguments are not null 
//                $telno = "0";
//                if ($lcSupplierDistributor['TELEPHONE_NO'] != "" && $lcSupplierDistributor['TELEPHONE_NO'] != null)
//                    $telno = $lcSupplierDistributor['TELEPHONE_NO'];
//
//                $lcSupplierDistributor_Args = Array(
//                    $this->_sourceDB,
//                    $lcRootId, $lcSupplierDistributor['REC_ID'],
//                    $lcSupplierDistributor['SUPPLIER_REC_ID'],
//                    $lcSupplierDistributor['DIRECTORY_REC_ID'],
//                    $lcSupplierDistributor['NAME'],
//                    $lcSupplierDistributor['ORDER'], $telno); // 8
//
//                $argsHelper = $this->getArgHelper($lcSupplierDistributor_Args);
//                if ($L2S_STEP_DUMP_DEBUG)
//                    $dblog->error_log('CALL l2s_InsertSupplierDistrib2ShadowSupplierDistrib ->' . var_export($lcSupplierDistributor_Args, true));
//                $this->_dbConnectionObj->doStoredProcQuery("CALL l2s_InsertSupplierDistrib2ShadowSupplierDistrib(" . $argsHelper . ")", $lcSupplierDistributor_Args); //8 entries
//                $bRet = true;
//            }
//        }
        return $bRet;
    }

    private function InsertSB2SSBrand($lcRootId, $lcSupplierId) {
        require("../config.php");
        $tplshadowsupplierbranddao = new TplShadowSupplierBrandDAO();
        $param_arr = array($lcRootId, $lcSupplierId);
        $tplshadowsupplierbranddao->selectInsert($dbconn, $param_arr);

//        
//        
//        if ($L2S_STEP_DUMP_DEBUG)
//            set_time_limit(30);
//        if ($L2S_STEP_DUMP_DEBUG)
//            $dblog->error_log('CALL l2s_GetSupplierBrandBySupplierID(' . $this->_sourceDB . " + " . $lcSupplierId . ')');
//        $bRet = false;
//        $this->_dbConnectionObj->doFreeResult();
//
//        $lcSupplierBrand_result = $this->_dbConnectionObj->doStoredProcQuery("CALL l2s_GetSupplierBrandBySupplierID('" . $this->_sourceDB . "', " . $lcSupplierId . ")");
//        if ($L2S_STEP_DUMP_DEBUG)
//            $dblog->error_log('$lcSupplierBrand_result->num_rows = ' . $lcSupplierBrand_result->num_rows);
//        if ($lcSupplierBrand_result && $lcSupplierBrand_result->num_rows > 0) {
//            while (($lcSupplierBrand = $lcSupplierBrand_result->fetch_array(MYSQLI_ASSOC)) == true) {
//                $this->_dbConnectionObj->doFreeResult();
//                // source code line 529
//                $hasLogo = 0;
//                if ($lcSupplierBrand['IS_LOGO_LISTING'] != "" && $lcSupplierBrand['IS_LOGO_LISTING'] != null)
//                    $hasLogo = $lcSupplierBrand['IS_LOGO_LISTING'];
//
//                $lcSupplierBrand_Args = Array(
//                    $this->_sourceDB,
//                    $lcRootId,
//                    $lcSupplierBrand['REC_ID'],
//                    $lcSupplierBrand['SUPPLIER_REC_ID'],
//                    $lcSupplierBrand['BRAND_REC_ID'],
//                    $hasLogo); // 6
//
//                $query = "CALL l2s_InsertSupplierBrand2ShadowSupplierBrand('" . $this->_sourceDB . "'," . $lcRootId . "," . $lcSupplierBrand['REC_ID'] . "," . $lcSupplierBrand['SUPPLIER_REC_ID'] . "," . $lcSupplierBrand['BRAND_REC_ID'] . "," . $hasLogo . ")";
//                if ($L2S_STEP_DUMP_DEBUG)
//                    $dblog->error_log('CALL l2s_InsertSupplierBrand2ShadowSupplierBrand( ->' . var_export($lcSupplierBrand_Args, true));
//                $this->_dbConnectionObj->doStoredProcQuery($query, $lcSupplierBrand_Args); //6 entries
//                $bRet = true;
//            }
//        }
        return $bRet;
    }

    private function InsertSKP2SSKPersonnel($lcRootId, $lcSupplierId) {
        require("../config.php");
        if ($L2S_STEP_DUMP_DEBUG)
            set_time_limit(30);
        $bRet = false;
        $tplshadowsupplierkeypersonneldao = new TplShadowSupplierKeyPersonnelDAO();
        $tplsupplierkeypersonneldao = new TplSupplierKeyPersonnelDAO();
        $param_arr = array($lcSupplierId);
        $lcSupplierKeyPersonnel_result = $tplsupplierkeypersonneldao->select($dbconn, $param_arr);

//        $this->_dbConnectionObj->doFreeResult();
//        $lcSupplierKeyPersonnel_result = $this->_dbConnectionObj->doStoredProcQuery("CALL l2s_GetSupplierKeyPersonnelBySupplierID('" . $this->_sourceDB . "', " . $lcSupplierId . ")");
//        if ($L2S_STEP_DUMP_DEBUG)
//            $dblog->error_log('$lcSupplierKeyPersonnel_result ->num_rows = ' . $lcSupplierKeyPersonnel_result->num_rows);
        if (count($lcSupplierKeyPersonnel_result) > 0) {
            foreach ($lcSupplierKeyPersonnel_result as $lcSupplierKeyPersonnel) {
//                $this->_dbConnectionObj->doFreeResult();
//                $lcSupplierKeyPersonnel_Args = Array(
//                    $this->_sourceDB,
//                    $lcRootId,
//                    $lcSupplierKeyPersonnel['REC_ID'],
//                    $lcSupplierKeyPersonnel['SUPPLIER_REC_ID'],
//                    $lcSupplierKeyPersonnel['ORDER'],
//                    $lcSupplierKeyPersonnel['NAME'],
//                    $lcSupplierKeyPersonnel['POSITION'],
//                    $lcSupplierKeyPersonnel['TELEPHONE_NO'],
//                    $lcSupplierKeyPersonnel['FAX_NO'],
//                    $lcSupplierKeyPersonnel['EMAIL_ADDRESS'],
//                    $lcSupplierKeyPersonnel['PHYSICAL_ADDRESS_BUILDING_ADDRESS'],
//                    $lcSupplierKeyPersonnel['PHYSICAL_ADDRESS_STREET_ADDRESS'],
//                    $lcSupplierKeyPersonnel['PHYSICAL_ADDRESS_SUBURB'],
//                    $lcSupplierKeyPersonnel['PHYSICAL_ADDRESS_CITY'],
//                    $lcSupplierKeyPersonnel['PHYSICAL_ADDRESS_STATE'],
//                    $lcSupplierKeyPersonnel['PHYSICAL_ADDRESS_COUNTRY'],
//                    $lcSupplierKeyPersonnel['PHYSICAL_ADDRESS_POST_CODE'],
//                    $lcSupplierKeyPersonnel['POSTAL_ADDRESS_BUILDING_ADDRESS'],
//                    $lcSupplierKeyPersonnel['POSTAL_ADDRESS_STREET_ADDRESS'],
//                    $lcSupplierKeyPersonnel['POSTAL_ADDRESS_SUBURB'],
//                    $lcSupplierKeyPersonnel['POSTAL_ADDRESS_CITY'],
//                    $lcSupplierKeyPersonnel['POSTAL_ADDRESS_STATE'],
//                    $lcSupplierKeyPersonnel['POSTAL_ADDRESS_COUNTRY'],
//                    $lcSupplierKeyPersonnel['POSTAL_ADDRESS_POST_CODE']); // 24
//
//                $argsHelper = $this->getArgHelper($lcSupplierKeyPersonnel_Args);
//                if ($L2S_STEP_DUMP_DEBUG)
//                    $dblog->error_log('$lcSupplierKeyPersonnel_result -> ' . var_export($lcSupplierKeyPersonnel_Args, true));
                $param_arr = array($lcRootId, $lcSupplierKeyPersonnel['REC_ID']);
                $tplshadowsupplierkeypersonneldao->selectInsert($dbconn, $param_arr);

//                
//                $this->_dbConnectionObj->doStoredProcQuery("CALL l2s_InsertSupplierPersonnel2ShadowSupplierPersonnel(" . $argsHelper . ")", $lcSupplierKeyPersonnel_Args); //24 entries tested
                $bRet = true;
                // { OK, now lets write the supplier branch key personnel }
                $bHasBranchKeyPersonnel = $this->InsertSBKP2SSBKPersonnel($lcRootId, $lcSupplierKeyPersonnel['REC_ID']);

                if (!$bHasBranchKeyPersonnel) {
                    if ($L2S_STEP_DUMP_DEBUG)
                        $dblog->error_log('Warning: No branch personnel for Supplier[' . $lcSupplierId . ']');
                }
                // { OK, now lets write the supplier key personnel brand }
                $bHasKeyPersonnelBrand = $this->InsertSKPB2SSKPBrand($lcRootId, $lcSupplierKeyPersonnel['REC_ID']);

                if (!$bHasKeyPersonnelBrand) {
                    if ($L2S_STEP_DUMP_DEBUG)
                        $dblog->error_log('Warning: No branch personnel for Supplier[' . $lcSupplierId . ']');
                }
            }
        }
    }

    private function InsertSBKP2SSBKPersonnel($lcRootId, $lcPKeyId) {
        require("../config.php");
        if ($L2S_STEP_DUMP_DEBUG)
            set_time_limit(30);
        $bRet = false;

        $tplshadowsupplierbranchkeypersonneldao = new TplShadowSupplierBranchKeyPersonnelDAO();
        $param_arr = array($lcRootId, $lcPKeyId);
        $tplshadowsupplierbranchkeypersonneldao->selectInsert($dbconn, $param_arr);

//        
//        $this->_dbConnectionObj->doFreeResult();
//        $lcSupplierBranchKeyPersonnel_result = $this->_dbConnectionObj->doStoredProcQuery("CALL l2s_GetSupplierBranchKeyPersonnelByPKeyID('" . $this->_sourceDB . "', " . $lcPKeyId . ")");
//        if ($lcSupplierBranchKeyPersonnel_result && $lcSupplierBranchKeyPersonnel_result->num_rows > 0) {
//            while (($lcSupplierBranchKeyPersonnel = $lcSupplierBranchKeyPersonnel_result->fetch_array(MYSQLI_ASSOC)) == true) {
//                $this->_dbConnectionObj->doFreeResult();
//                // source code 731
//                $lcSupplierBranchKeyPersonnel_Args1 = Array($this->_sourceDB, $lcRootId, $lcSupplierBranchKeyPersonnel['REC_ID'], $lcSupplierBranchKeyPersonnel['SUPPLIER_BRANCH_REC_ID'],
//                    $lcSupplierBranchKeyPersonnel['SUPPLIER_KEY_PERSONNEL_REC_ID']); // 5 items
//                // ensuring the last arguments is not empty or null at this point
//                $order = 0;
//                if ($lcSupplierBranchKeyPersonnel['ORDER'] != "" && $lcSupplierBranchKeyPersonnel['ORDER'] != null)
//                    $order = $lcSupplierBranchKeyPersonnel['ORDER'];
//                $lcSupplierBranchKeyPersonnel_Args = array_merge($lcSupplierBranchKeyPersonnel_Args1, Array($order)); // 1 entries
//
//                $argsHelper = $this->getArgHelper($lcSupplierBranchKeyPersonnel_Args);
//                $this->_dbConnectionObj->doStoredProcQuery("CALL l2s_InsertSBKP2SSBKPersonnel(" . $argsHelper . ")", $lcSupplierBranchKeyPersonnel_Args); //6 entries
//                $bRet = true;
//            }
//        }
        return $bRet;
    }

    private function InsertSKPB2SSKPBrand($lcRootId, $lcPKeyId) {
        require("../config.php");
        if ($L2S_STEP_DUMP_DEBUG)
            set_time_limit(30);
        $bRet = false;
        $tplshadowsupplierkeypersonnelbranddao = new TplShadowSupplierKeyPersonnelBrandDAO();
        $param_arr = array($lcRootId, $lcPKeyId);
        $tplshadowsupplierkeypersonnelbranddao->selectInsert($dbconn, $param_arr);

//        
//        
//        $lcSupplierKeyPersonnelBrand_result = $this->_dbConnectionObj->doStoredProcQuery("CALL l2s_GetSupplierKeyPersonnelBrandBySupplierID('" . $this->_sourceDB . "', " . $lcPKeyId . ")");
//        if ($lcSupplierKeyPersonnelBrand_result && $lcSupplierKeyPersonnelBrand_result->num_rows > 0) {
//            while (($lcSupplierKeyPersonnelBrand = $lcSupplierKeyPersonnelBrand_result->fetch_array(MYSQLI_ASSOC)) == true) {
//                $this->_dbConnectionObj->doFreeResult();
//                // source code 731
//                $lcSupplierKeyPersonnelBrand_Args1 = Array($this->_sourceDB, $lcRootId, $lcSupplierKeyPersonnelBrand['REC_ID'],
//                    $lcSupplierKeyPersonnelBrand['SUPPLIER_KEY_PERSONNEL_REC_ID'], $lcSupplierKeyPersonnelBrand['SUPPLIER_BRAND_REC_ID'], $lcSupplierKeyPersonnelBrand['ROLE']); // 6 items
//                // ensuring the last arguments is not empty or null at this point
//                $order = 0;
//                if ($lcSupplierKeyPersonnelBrand['ORDER'] != "" && $lcSupplierKeyPersonnelBrand['ORDER'] != null)
//                    $order = $lcSupplierKeyPersonnelBrand['ORDER'];
//                $lcSupplierKeyPersonnelBrand_Args = array_merge($lcSupplierKeyPersonnelBrand_Args1, Array($order)); // 1 entries
//
//                $argsHelper = $this->getArgHelper($lcSupplierKeyPersonnelBrand_Args);
//                $this->_dbConnectionObj->doStoredProcQuery("CALL l2s_InsertSKPBrand2ShadowSKPBrand(" . $argsHelper . ")", $lcSupplierKeyPersonnelBrand_Args); //7 entries
//                $bRet = true;
//            }
//        }
        return $bRet;
    }

    private function InsertSPCategory2SSPCategory($lcRootId, $lcSupplierId) {
        require("../config.php");
        if ($L2S_STEP_DUMP_DEBUG)
            set_time_limit(30);
        if ($L2S_STEP_DUMP_DEBUG)
            $dblog->error_log('CALL l2s_GetSupplierProductCategoryBySupplierID(' . $this->_sourceDB . " + " . $lcSupplierId . ')');
        $bRet = false;
        $tplshadowsupplierproductcategorydao = new TplShadowSupplierProductCategoryDAO();
        $param_arr = array($lcRootId, $lcPKeyId);
        $tplshadowsupplierproductcategorydao->selectInsert($dbconn, $param_arr);
//        
//        
//        $this->_dbConnectionObj->doFreeResult();
//        $lcSupplierProductCategory_result = $this->_dbConnectionObj->doStoredProcQuery("CALL l2s_GetSupplierProductCategoryBySupplierID('" . $this->_sourceDB . "', " . $lcSupplierId . ")");
//        if ($L2S_STEP_DUMP_DEBUG)
//            $dblog->error_log('$lcSupplierProductCategory_result->num_rows = ' . $lcSupplierProductCategory_result->num_rows);
//        if ($lcSupplierProductCategory_result && $lcSupplierProductCategory_result->num_rows > 0) {
//            while (($lcSupplierProductCategory = $lcSupplierProductCategory_result->fetch_array(MYSQLI_ASSOC)) == true) {
//                $this->_dbConnectionObj->doFreeResult();
//                $lcSupplierProductCategory_Args1 = Array($this->_sourceDB, $lcRootId, $lcSupplierProductCategory['REC_ID'],
//                    $lcSupplierProductCategory['SUPPLIER_REC_ID'], $lcSupplierProductCategory['PRODUCT_CATEGORY_REC_ID']); // 5 items
//                $hasLogo = 0;
//                if ($lcSupplierProductCategory['IS_LOGO_LISTING'] != "" && $lcSupplierProductCategory['IS_LOGO_LISTING'] != null)
//                    $hasLogo = $lcSupplierProductCategory['IS_LOGO_LISTING'];
//                $lcSupplierProductCategory_Args = array_merge($lcSupplierProductCategory_Args1, Array($hasLogo)); // 1 entries
//
//                $argsHelper = $this->getArgHelper($lcSupplierProductCategory_Args);
//                if ($L2S_STEP_DUMP_DEBUG)
//                    $dblog->error_log('CALL l2s_InsertSPC2SSPCategory( ->' . var_export($lcSupplierProductCategory_Args, true));
//                $this->_dbConnectionObj->doStoredProcQuery("CALL l2s_InsertSPC2SSPCategory(" . $argsHelper . ")", $lcSupplierProductCategory_Args); // 6 entries
//                $bRet = true;
//            }
//        }
        return $bRet;
    }

    private function InsertP2SProduct($lcRootId, $lcSupplierId) {
        require("../config.php");
        $bRet = true;
        $tplshadowproductdao = new TplShadowProductDAO();
        $param_arr = array($lcRootId, $lcPKeyId);
        $tplshadowproductdao->selectInsert($dbconn, $param_arr);

//        
//        
//        $this->_dbConnectionObj->doFreeResult();
//        $lcProduct_result = $this->_dbConnectionObj->doStoredProcQuery("CALL l2s_GetSupplierProductBySupplierID('" . $this->_sourceDB . "', " . $lcSupplierId . ")");
//        if ($lcProduct_result && $lcProduct_result->num_rows > 0) {
//            while (($lcProduct = $lcProduct_result->fetch_array(MYSQLI_ASSOC)) == true) {
//                $this->_dbConnectionObj->doFreeResult();
//                $lcProduct_Args = Array(
//                    $this->_sourceDB,
//                    $lcRootId,
//                    $lcProduct['REC_ID'],
//                    $lcProduct['SUPPLIER_REC_ID'],
//                    $lcProduct['DIRECTORY_REC_ID'],
//                    $lcProduct['PRODUCT_CATEGORY_REC_ID'],
//                    $lcProduct['LABEL_NAME'],
//                    $lcProduct['VARIETAL'],
//                    $lcProduct['VINTAGE'],
//                    $lcProduct['REGION_OF_ORIGIN'],
//                    $lcProduct['COUNTRY_OF_ORIGIN'],
//                    $lcProduct['TEXT'],
//                    $lcProduct['PRINT_IMAGE_LOCATION'],
//                    $lcProduct['WEB_IMAGE_LOCATION']); //  14 items
//
//                $argsHelper = $this->getArgHelper($lcProduct_Args);
//                if ($L2S_STEP_DUMP_DEBUG)
//                    $dblog->error_log('CALL l2s_InsertP2SProduct( ->' . var_export($lcProduct_Args, true));
//                $this->_dbConnectionObj->doStoredProcQuery("CALL l2s_InsertP2SProduct(" . $argsHelper . ")", $lcProduct_Args); // 14 items all
//            }
//        }
        return $bRet;
    }

    private function getArgHelper($array) {
        $args_helper = "";
        if (count($array) > 0) {
            for ($n = 1; $n < count($array); $n++) {
                $args_helper .= "?,";
            }
            $args_helper .= "?";
        }
        return $args_helper;
    }

    public function getsqlext() {
        return MYSQLI;
    }

}

?>