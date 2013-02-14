<?php

require_once ('migrate.php');
require('../config.php');
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


class UpdateLive2Shadow extends Migrate {

    protected $_documentObj;

    
    
    
    

//    protected $_targetDB, $_targetDirectory, $_targetYear, $_newTargetYear, $_clientShadowRoot;
//    
//
//    // this constructor will superseded the base class
//    function __construct($targetDB, $directory, $yrLive, $clientShadowRootId) {
//        require("../config.php");
//        //if ($L2S_STEP_DUMP_DEBUG) debuglog::debug2log($DOMAINHOST);
//        //if ($L2S_STEP_DUMP_DEBUG) debuglog::debug2log("Running UpdateLive2Shadow.php as ".$DOMAINHOST." as the domain host.");
//        //if ($L2S_STEP_DUMP_DEBUG) debuglog::debug2log("Collecting Client information...");       
//        $this->targetDB = $targetDB;
//        $this->_targetDirectory = $directory;
//        $this->_targetYear = $yrLive;
//        $this->_newTargetYear = $yrLive;
//        $this->_clientShadowRoot = $clientShadowRootId;
//    }
    
    
    
    
    
    
    
    
    
    
    // this constructor will superseded the base class
    function __construct($targetDB, $directory, $yrLive, $clientShadowRootId) {
        require("../config.php");
        //if ($L2S_STEP_DUMP_DEBUG) debuglog::debug2log($DOMAINHOST);
        //if ($L2S_STEP_DUMP_DEBUG) debuglog::debug2log("Running UpdateLive2Shadow.php as ".$DOMAINHOST." as the domain host.");
        //if ($L2S_STEP_DUMP_DEBUG) debuglog::debug2log("Collecting Client information...");

        parent::__construct($targetDB, $directory, $yrLive);
        $this->_newTargetYear = $yrLive;
        $this->_clientShadowRoot = $clientShadowRootId;
    }

    public function exec() {
        require("../config.php");
        if ($L2S_STEP_DUMP_DEBUG)
            set_time_limit(130);
        $bRet = true;
        $tag = $this->_template;


        try {
            error_log("Exxxxxxxxxxxxxxxxxec.........................................................:");
            $dbtrans = new DBTransaction();            
            $tplshadowrootdao = new TplShadowRootDAO();
            $dbconn = $dbtrans->getConnection($this->_sourceDB);
             error_log("Exxxxxxxxxxxxxxxxxec.........................................................:1");
            //if ($L2S_STEP_DUMP_DEBUG) debuglog::debug2log("Executing Function (exec) for client...".$this->_clientShadowRoot);
            if (isset($this->_clientShadowRoot)) {
                 error_log("Exxxxxxxxxxxxxxxxxec.........................................................:2");
                //if ( isset($this->_targetDirectory) && isset($this->_targetYear) ) {
                //if ($this->openDbConnection(false)) { // false - testing, true - real usage 
                    //if ($L2S_STEP_DUMP_DEBUG) debuglog::debug2log("Connected [Successfully] to ".$this->_targetDB.".");
                    // just simply openning the state of the client (reusuing existing s2l sp
                    //$lcShadowRoot_result = $this->_dbConnectionObj->doStoredProcQuery("CALL ul2s_UpdateShadowRoot('" . $this->_targetDB . "', 'OPEN', " . $this->_clientShadowRoot . ")");
                    $array = array('OPEN',$this->_clientShadowRoot);
                    $tplshadowrootdao->update($dbconn, $array);
                     $array = array($this->_clientShadowRoot);
                    $lcShadowRoot_result =$tplshadowrootdao->select($dbconn, $array);
                    error_log("Exxxxxxxxxxxxxxxxxec.........................................................:".count($lcShadowRoot_result));
                    if (count($lcShadowRoot_result) == 1) {
                        foreach($lcShadowRoot_result as $lcShadowRoot) {
                            //if ($L2S_STEP_DUMP_DEBUG) debuglog::debug2log("Results from SPROC ul2s_UpdateShadowRoot:".var_export($lcShadowRoot,true));
                            //if ($L2S_STEP_DUMP_DEBUG) debuglog::debug2log("Calling UpdateSupplier2ShadowSupplier with CLIENT_REC ID => ".$lcShadowRoot['CLIENT_REC_ID']." and SHADOW_ROOT_ID => ".$lcShadowRoot['REC_ID']);
                            $bRetWarn = $this->UpdateSupplier2ShadowSupplier($dbconn,$lcShadowRoot['CLIENT_REC_ID'], $lcShadowRoot['REC_ID']);
                            //if (!$bRetWarn) if ($L2S_STEP_DUMP_DEBUG) debuglog::debug2log('Warning: '.$lcShadowRoot['CLIENT_REC_ID'].' unable to update Shadow Supplier table');
                        }
                    } else {
                        //if ($L2S_STEP_DUMP_DEBUG) debuglog::debug2log('Critical: Unable to add the client [' . $lcShadowRoot['CLIENT_REC_ID'] . '] to the root table. Live to Shadow failed.');
                        $bRet = false;
                    }

                    $bRet = true;
                   // $this->closeDbConnection();
                //}
            }
        } catch (Exception $ex) {
            echo "Exception:" . $ex;
            error_log($ex);
            // $dbtrans->rollbackTransaction();
            //throw new pdoDbException($ex); 
        }



        return $bRet;
    }

    public function exec2() {
        /* global $L2S_STEP_DUMP_DEBUG;
          $bRet = true;
          if ($L2S_STEP_DUMP_DEBUG) set_time_limit(30);
          if ($this->openDbConnection(false)) // false - testing, true - real usage
          {
          $lcShadowRootInfo_result = $this->_dbConnectionObj->doStoredProcQuery("CALL l2s_GetShadowRootByTargetYear('".$this->_sourceDB."','".$this->_newTargetYear."',".$this->_targetDirectory.")");
          if ($lcShadowRootInfo_result && $lcShadowRootInfo_result->num_rows > 0)
          {
          if ($L2S_STEP_DUMP_DEBUG) var_dump("Collecting supplier information...");
          while( ($lcShadowRootInfo = $lcShadowRootInfo_result->fetch_array(MYSQLI_ASSOC)) == true )
          {
          $this->_dbConnectionObj->doFreeResult();
          $lcSupplier_result = $this->_dbConnectionObj->doStoredProcQuery("CALL l2s_GetSupplierByClientID('".$this->_sourceDB."', ".$lcShadowRootInfo['CLIENT_REC_ID'].")");
          if ($lcSupplier_result && $lcSupplier_result->num_rows > 0) {
          while( ($lcSupplier = $lcSupplier_result->fetch_array(MYSQLI_ASSOC)) == true ) {
          $this->_dbConnectionObj->doFreeResult();
          $bHasProduct = $this->InsertP2SProduct($lcShadowRootInfo['REC_ID'], $lcSupplier['REC_ID']);
          if (!$bHasProduct) {
          if ($L2S_STEP_DUMP_DEBUG) var_dump('Warning: No product for Supplier[' . $lcSupplier['REC_ID'] . ']');
          }
          }
          }
          }
          }
          $this->closeDbConnection();
          }
          return true;
         */
    }

    public function exec3() {
        $bRet = true;
        if ($L2S_STEP_DUMP_DEBUG)
            set_time_limit(130);
        if ($this->openDbConnection(false)) { // false - testing, true - real usage 
            $this->_dbConnectionObj->doStoredProcQuery("CALL l2s_StepReset('" . $this->_sourceDB . "','" . $this->_newTargetYear . "',3)");
            $bRet = true;
            $this->closeDbConnection();
        }
        return $bRet;
    }

    public function exec4() {
        $bRet = true;
        if ($L2S_STEP_DUMP_DEBUG)
            set_time_limit(130);
        if ($this->openDbConnection(false)) { // false - testing, true - real usage 
            $this->_dbConnectionObj->doStoredProcQuery("CALL l2s_StepReset('" . $this->_sourceDB . "','" . $this->_newTargetYear . "',4)");
            $bRet = true;
            $this->closeDbConnection();
        }
        return $bRet;
    }

    private function UpdateSupplier2ShadowSupplier($dbconn,$lcClientId, $lcRootId) {
        require("../config.php");
        if ($L2S_STEP_DUMP_DEBUG)
            set_time_limit(130);
        //if ($L2S_STEP_DUMP_DEBUG) debuglog::debug2log("Running Function UpdateSupplier2ShadowSupplier...");
         $bRet = true;
         $tplsupplierdao = new TplSupplierDAO();
         $tplshadowdao = new TplShadowSupplierDAO();
        //$this->_dbConnectionObj->doFreeResult();
        //if ($L2S_STEP_DUMP_DEBUG) debuglog::debug2log("SPROC CALL l2s_GetSupplierByClientID(".$this->_sourceDB.",".$lcClientId.")");
         $array = array($lcClientId);
         $lcSupplier_result = $tplsupplierdao->selectClient($dbconn, $array);
         error_log("UpdateSupplier2ShadowSupplier.........................................................");
        // $lcSupplier_result = $this->_dbConnectionObj->doStoredProcQuery("CALL l2s_GetSupplierByClientID('" . $this->_sourceDB . "', " . $lcClientId . ")");
        if (count($lcSupplier_result) > 0) {
            foreach ($lcSupplier_result as $lcSupplier) {
                //$this->_dbConnectionObj->doFreeResult();
                //if ($L2S_STEP_DUMP_DEBUG) debuglog::debug2log("Results from l2s_GetSupplierByClientID(".var_export($lcSupplier,true));				
                // source code line 461
//                $lcSupplier_Args = Array($this->_sourceDB, $lcRootId, $lcSupplier['REC_ID']); // 3
//                $argsHelper = $this->getArgHelper($lcSupplier_Args);
//                //if ($L2S_STEP_DUMP_DEBUG) debuglog::debug2log("SPROC CALL ul2s_UpdateSupplier2ShadowSupplier with".var_export($lcSupplier_Args,true));
//                $query = "CALL ul2s_UpdateSupplier2ShadowSupplier(" . $argsHelper . ")";
            //  $bRetSP = $this->_dbConnectionObj->doStoredProcQuery($query, $lcSupplier_Args); //3 entries
                $array=array($lcRootId, $lcSupplier['REC_ID']);
                $tplshadowdao->updateMasterRecID($dbconn, $array);
                
//                if (!$bRetSP) {
//                    // catch the error and log it
//                }
                // { OK, now lets write the supplier branches }
                $bHasBranch = $this->UpdateSB2SSBranch($dbconn,$lcRootId, $lcSupplier['REC_ID']); //tested
                //if (!$bHasBranch) {
                //	if ($L2S_STEP_DUMP_DEBUG) debuglog::debug2log('Warning: No branch for Supplier[' . $lcSupplier['REC_ID'] . ']');
                //}
                // { OK, now lets write the supplier distributor }
                $bHasDistrib = $this->UpdateSD2SSDistributor($dbconn,$lcRootId, $lcSupplier['REC_ID']); //tested
//				if (!$bHasDistrib) {
//					if ($L2S_STEP_DUMP_DEBUG) debuglog::debug2log('Warning: No distributor for Supplier[' . $lcSupplier['REC_ID'] . ']');
//				}
                // { OK, now lets write the supplier brands }
                $bHasBrand = $this->UpdateSB2SSBrand($dbconn,$lcRootId, $lcSupplier['REC_ID']);
//				if (!$bHasBrand) {
//					if ($L2S_STEP_DUMP_DEBUG) debuglog::debug2log('Warning: No brand for Supplier[' . $lcSupplier['REC_ID'] . ']');
//				}
                // NEXT IS THIS ONE (7/13/2011)
                //{ OK, now lets write the supplier key personnel }
                $bHasPersonnel = $this->UpdateSKP2SSKPersonnel($dbconn,$lcRootId, $lcSupplier['REC_ID']);
//				if (!$bHasPersonnel) {
//					if ($L2S_STEP_DUMP_DEBUG) debuglog::debug2log('Warning: No personnel for Supplier[' . $lcSupplier['REC_ID'] . ']');
//				}
                //{ OK, now lets write the supplier product category }
                $bHasPCategory = $this->UpdateSPCategory2SSPCategory($dbconn,$lcRootId, $lcSupplier['REC_ID']);
//				if (!$bHasPCategory) {
//					if ($L2S_STEP_DUMP_DEBUG) debuglog::debug2log('Warning: No product category for Supplier[' . $lcSupplier['REC_ID'] . ']');
//				}
                //{ OK, now lets write the supplier product }
                $bHasProduct = $this->UpdateP2SProduct($dbconn,$lcRootId, $lcSupplier['REC_ID']);
//				if (!$bHasProduct) {
//					if ($L2S_STEP_DUMP_DEBUG) debuglog::debug2log('Warning: No product for Supplier[' . $lcSupplier['REC_ID'] . ']');
//				}
            }
        }
        return $bRet;
    }

    private function UpdateSB2SSBranch($dbconn,$lcRootId, $lcSupplierId) {
        require("../config.php");
        $bRet = false;
        if ($L2S_STEP_DUMP_DEBUG)
            set_time_limit(130);
        //$this->_dbConnectionObj->doFreeResult();
        //$lcSupplierBranch_result = $this->_dbConnectionObj->doStoredProcQuery("CALL l2s_GetSupplierBranchBySupplierID('" . $this->_sourceDB . "', " . $lcSupplierId . ")");
        $tplsupplierbranch =new TplSupplierBranchDAO();
        $tplshadowsupplierbranch=new TplShadowSupplierBranchDAO();
        
        $array=array($lcSupplierId);
        $lcSupplierBranch_result =$tplsupplierbranch->select($dbconn, $array);
        
        if (count($lcSupplierBranch_result) > 0) {
            foreach ($lcSupplierBranch_result as $lcSupplierBranch ) {
                //$this->_dbConnectionObj->doFreeResult();
                // source code line 529
//                $lcSupplierBranch_Args = Array($this->_sourceDB, $lcRootId, $lcSupplierBranch['REC_ID'], $lcSupplierBranch['SUPPLIER_REC_ID']); // 4
//
//                $argsHelper = $this->getArgHelper($lcSupplierBranch_Args);
//                $this->_dbConnectionObj->doStoredProcQuery("CALL ul2s_UpdateSupplierBranch2ShadowSupplierBranch(" . $argsHelper . ")", $lcSupplierBranch_Args); //4 entry
                $array=array($lcRootId, $lcSupplierBranch['REC_ID'], $lcSupplierBranch['SUPPLIER_REC_ID']);
                $tplshadowsupplierbranch->update($dbconn, $array);
                $bRet = true;
            }
        }
        return $bRet;
    }

    private function UpdateSD2SSDistributor($dbconn,$lcRootId, $lcSupplierId) {
        require("../config.php");
        $bRet = false;
        if ($L2S_STEP_DUMP_DEBUG)
            set_time_limit(130);
        //$this->_dbConnectionObj->doFreeResult();
        // source code line 585
       // $lcSupplierDistributor_result = $this->_dbConnectionObj->doStoredProcQuery("CALL l2s_GetSupplierDistributorBySupplierID('" . $this->_sourceDB . "', " . $lcSupplierId . ")");
        error_log("TplSupplierDistributorDAO......................000000000");
        $tplsupplierdistributor =new TplSupplierDistributorDAO();
        $tplshadowsupplierdistributor=new TplShadowSupplierDistributorDAO();
        error_log("TplSupplierDistributorDAO........................11111111");
        
        $array=array($lcSupplierId);
        $lcSupplierdistributor_result =$tplsupplierdistributor->select($dbconn, $array);
        
        if (count($lcSupplierdistributor_result) > 0) {
            foreach ($lcSupplierdistributor_result as $lcSupplierDistributor) {
                //$this->_dbConnectionObj->doFreeResult();
                //$lcSupplierDistributor_Args = Array($this->_sourceDB, $lcRootId, $lcSupplierDistributor['REC_ID'], $lcSupplierDistributor['SUPPLIER_REC_ID']); // 4

                //$argsHelper = $this->getArgHelper($lcSupplierDistributor_Args);
                //$this->_dbConnectionObj->doStoredProcQuery("CALL ul2s_UpdateSupplierDistrib2ShadowSupplierDistrib(" . $argsHelper . ")", $lcSupplierDistributor_Args); //4 entries
                $array=array($lcRootId, $lcSupplierDistributor['REC_ID'], $lcSupplierDistributor['SUPPLIER_REC_ID']);
                $tplshadowsupplierdistributor->update($dbconn, $array);
                
                $bRet = true;
            }
        }
        return $bRet;
    }

    private function UpdateSB2SSBrand($dbconn,$lcRootId, $lcSupplierId) {
        require("../config.php");
        if ($L2S_STEP_DUMP_DEBUG)
            set_time_limit(130);
        $bRet = false;
        
        $tplsupplierbrand =new TplSupplierBrandDAO();
        $tplshadowsupplierbrand=new TplShadowSupplierBrandDAO();
        $array= array($lcSupplierId);
        $lcSupplierBrand_result = $tplsupplierbrand->select($dbconn, $array);        
        //$this->_dbConnectionObj->doFreeResult();
        //$lcSupplierBrand_result = $this->_dbConnectionObj->doStoredProcQuery("CALL l2s_GetSupplierBrandBySupplierID('" . $this->_sourceDB . "', " . $lcSupplierId . ")");
        if (count($lcSupplierBrand_result) > 0) {
            foreach ($lcSupplierBrand_result as $lcSupplierBrand) {
                //$this->_dbConnectionObj->doFreeResult();
                // source code line 529
                //$lcSupplierBrand_Args = Array($this->_sourceDB, $lcRootId, $lcSupplierBrand['REC_ID'], $lcSupplierBrand['SUPPLIER_REC_ID']); // 4
                //$argsHelper = $this->getArgHelper($lcSupplierBrand_Args);
                //$query = "CALL ul2s_UpdateSupplierBrand2ShadowSupplierBrand(" . $argsHelper . ")";
                //$this->_dbConnectionObj->doStoredProcQuery($query, $lcSupplierBrand_Args); // 4 entries
                $array=array($lcRootId, $lcSupplierBrand['REC_ID'], $lcSupplierBrand['SUPPLIER_REC_ID']);
                $tplshadowsupplierbrand->update($dbconn, $array);
                $bRet = true;
            }
        }
        return $bRet;
    }

    private function UpdateSKP2SSKPersonnel($dbconn,$lcRootId, $lcSupplierId) {
        require("../config.php");
        if ($L2S_STEP_DUMP_DEBUG)
            set_time_limit(130);
        $bRet = false;
        
        $tplsupplierkeypersonal =new TplSupplierKeyPersonnelDAO();
        $tplshadowsupplierkeypersonal=new TplShadowSupplierKeyPersonnelDAO();
        $array= array($lcSupplierId);
        $lcSupplierKeyPersonnel_result = $tplsupplierkeypersonal->select($dbconn, $array); 
        
//        $this->_dbConnectionObj->doFreeResult();
//        $lcSupplierKeyPersonnel_result = $this->_dbConnectionObj->doStoredProcQuery("CALL l2s_GetSupplierKeyPersonnelBySupplierID('" . $this->_sourceDB . "', " . $lcSupplierId . ")");
        if (count($lcSupplierKeyPersonnel_result) > 0) {
            foreach ($lcSupplierKeyPersonnel_result as $lcSupplierKeyPersonnel) {
//                $this->_dbConnectionObj->doFreeResult();
//
//                $lcSupplierKeyPersonnel_Args = Array($this->_sourceDB, $lcRootId, $lcSupplierKeyPersonnel['REC_ID'], $lcSupplierKeyPersonnel['SUPPLIER_REC_ID']); // 4
//
//                $argsHelper = $this->getArgHelper($lcSupplierKeyPersonnel_Args);
//                $this->_dbConnectionObj->doStoredProcQuery("CALL ul2s_UpdateSupplierPersonnel2ShadowSupplierPersonnel(" . $argsHelper . ")", $lcSupplierKeyPersonnel_Args); //4 entries tested
                // { OK, now lets write the supplier branch key personnel }
                $array=array($lcRootId, $lcSupplierKeyPersonnel['REC_ID'], $lcSupplierKeyPersonnel['SUPPLIER_REC_ID']);
                $tplshadowsupplierkeypersonal->update($dbconn, $array);
                
                
                $bHasBranchKeyPersonnel = $this->UpdateSBKP2SSBKPersonnel($dbconn,$lcRootId, $lcSupplierKeyPersonnel['REC_ID']);
                if (!$bHasBranchKeyPersonnel) {
                    if ($L2S_STEP_DUMP_DEBUG)
                        var_dump('Warning: No branch personnel for Supplier[' . $lcSupplierId . ']');
                }
                // { OK, now lets write the supplier key personnel brand }
                $bHasKeyPersonnelBrand = $this->UpdateSKPB2SSKPBrand($dbconn,$lcRootId, $lcSupplierKeyPersonnel['REC_ID']);
                if (!$bHasKeyPersonnelBrand) {
                    if ($L2S_STEP_DUMP_DEBUG)
                        var_dump('Warning: No branch personnel for Supplier[' . $lcSupplierId . ']');
                }
            }
        }
    }

    private function UpdateSBKP2SSBKPersonnel($dbconn,$lcRootId, $lcPKeyId) {
        require("../config.php");
        if ($L2S_STEP_DUMP_DEBUG)
            set_time_limit(130);
        $bRet = false;
        
        $tplsupplierbranchkeypersonal =new TplSupplierBranchKeyPersonnelDAO();
        $tplshadowsupplierbranchkeypersonal=new TplShadowSupplierBranchKeyPersonnelDAO();
        $array= array($lcPKeyId);
        $lcSupplierBranchKeyPersonnel_result = $tplsupplierbranchkeypersonal->select($dbconn, $array); 
        //$this->_dbConnectionObj->doFreeResult();
       // $lcSupplierBranchKeyPersonnel_result = $this->_dbConnectionObj->doStoredProcQuery("CALL l2s_GetSupplierBranchKeyPersonnelByPKeyID('" . $this->_sourceDB . "', " . $lcPKeyId . ")");
        if (count($lcSupplierBranchKeyPersonnel_result) > 0) {
            foreach($lcSupplierBranchKeyPersonnel_result as $lcSupplierBranchKeyPersonnel ) {
                //$this->_dbConnectionObj->doFreeResult();
                // source code 731
//                $lcSupplierBranchKeyPersonnel_Args = Array($this->_sourceDB, $lcRootId, $lcSupplierBranchKeyPersonnel['REC_ID'], $lcSupplierBranchKeyPersonnel['SUPPLIER_BRANCH_REC_ID'],
//                    $lcSupplierBranchKeyPersonnel['SUPPLIER_KEY_PERSONNEL_REC_ID']); // 5 items
//
//                $argsHelper = $this->getArgHelper($lcSupplierBranchKeyPersonnel_Args);
//                $this->_dbConnectionObj->doStoredProcQuery("CALL ul2s_UpdateSBKP2SSBKPersonnel(" . $argsHelper . ")", $lcSupplierBranchKeyPersonnel_Args); //5 entries
                $array= array($lcRootId, $lcSupplierBranchKeyPersonnel['REC_ID'], $lcSupplierBranchKeyPersonnel['SUPPLIER_BRANCH_REC_ID'], $lcSupplierBranchKeyPersonnel['SUPPLIER_KEY_PERSONNEL_REC_ID']);
                $tplshadowsupplierbranchkeypersonal->update($dbconn, $array);
                $bRet = true;
            }
        }
        return $bRet;
    }

    private function UpdateSKPB2SSKPBrand($dbconn,$lcRootId, $lcPKeyId) {
        require("../config.php");
        if ($L2S_STEP_DUMP_DEBUG)
            set_time_limit(130);
        $bRet = false;
        //$this->_dbConnectionObj->doFreeResult();
        $tplsupplierkeypersonalbrand =new TplSupplierKeyPersonnelBrandDAO();
        $tplshadowsupplierkeypersonalbrand=new TplShadowSupplierBranchKeyPersonnelDAO();
        $array= array($lcPKeyId);
        $lcSupplierKeyPersonnelBrand_result = $tplsupplierkeypersonalbrand->select($dbconn, $array);
        
        
        //$lcSupplierKeyPersonnelBrand_result = $this->_dbConnectionObj->doStoredProcQuery("CALL l2s_GetSupplierKeyPersonnelBrandBySupplierID('" . $this->_sourceDB . "', " . $lcPKeyId . ")");
        if (count($lcSupplierKeyPersonnelBrand_result) > 0) {
            foreach ($lcSupplierKeyPersonnelBrand_result as $lcSupplierKeyPersonnelBrand ) {
                // $this->_dbConnectionObj->doFreeResult();
                // source code 731
//                $lcSupplierKeyPersonnelBrand_Args = Array($this->_sourceDB, $lcRootId, $lcSupplierKeyPersonnelBrand['REC_ID'],
//                    $lcSupplierKeyPersonnelBrand['SUPPLIER_KEY_PERSONNEL_REC_ID'], $lcSupplierKeyPersonnelBrand['SUPPLIER_BRAND_REC_ID']); // 5 items
//
//                $argsHelper = $this->getArgHelper($lcSupplierKeyPersonnelBrand_Args);
//                $this->_dbConnectionObj->doStoredProcQuery("CALL ul2s_UpdateSKPBrand2ShadowSKPBrand(" . $argsHelper . ")", $lcSupplierKeyPersonnelBrand_Args); //7 entries
                $array= array( $lcRootId, $lcSupplierKeyPersonnelBrand['REC_ID'], $lcSupplierKeyPersonnelBrand['SUPPLIER_KEY_PERSONNEL_REC_ID']);
                $tplshadowsupplierkeypersonalbrand->update($dbconn, $array);
                $bRet = true;
            }
        }
        return $bRet;
    }

    private function UpdateSPCategory2SSPCategory($dbconn,$lcRootId, $lcSupplierId) {
        require("../config.php");
        if ($L2S_STEP_DUMP_DEBUG)
            set_time_limit(130);
        $bRet = false;
        //$this->_dbConnectionObj->doFreeResult();
        $tplsupplierproductcategory =new TplSupplierProductCategoryDAO();
        $tplshadowsupplierproductcategory=new TplShadowSupplierProductCategoryDAO();
        $array= array($lcSupplierId);
        $lcSupplierProductCategory_result = $tplsupplierproductcategory->select($dbconn, $array);
        
       // $lcSupplierProductCategory_result = $this->_dbConnectionObj->doStoredProcQuery("CALL l2s_GetSupplierProductCategoryBySupplierID('" . $this->_sourceDB . "', " . $lcSupplierId . ")");
        if (count($lcSupplierProductCategory_result) > 0) {
            foreach ($lcSupplierProductCategory_result as $lcSupplierProductCategory) {
                //$this->_dbConnectionObj->doFreeResult();
                //if ($L2S_STEP_DUMP_DEBUG) debuglog::debug2log("Results from SPROC CALL l2s_GetSupplierProductCategoryBySupplierID:".var_export($lcSupplierProductCategory,true));
                //$lcSupplierProductCategory_Args = Array($this->_sourceDB, $lcRootId, $lcSupplierProductCategory['SUPPLIER_REC_ID'],
                 //   $lcSupplierProductCategory['SUPPLIER_REC_ID'], $lcSupplierProductCategory['PRODUCT_CATEGORY_REC_ID'], $lcSupplierProductCategory['IS_LOGO_LISTING']); // 5 items (changed to 6 items) by JL

                //$argsHelper = $this->getArgHelper($lcSupplierProductCategory_Args);
                //if ($L2S_STEP_DUMP_DEBUG) debuglog::debug2log("CALL ul2s_UpdateSPC2SSPCategory =>".var_export($lcSupplierProductCategory_Args,true));
                //$this->_dbConnectionObj->doStoredProcQuery("CALL ul2s_UpdateSPC2SSPCategory(" . $argsHelper . ")", $lcSupplierProductCategory_Args); // 5 entries (discovered to have 6 entries) - testing by JL
                $array= array( $lcRootId, $lcSupplierProductCategory['SUPPLIER_REC_ID'], $lcSupplierProductCategory['SUPPLIER_REC_ID'], $lcSupplierProductCategory['PRODUCT_CATEGORY_REC_ID']);
                $tplshadowsupplierproductcategory->update($dbconn, $array);
                
                $bRet = true;
            }
        }
        return $bRet;
    }

    private function UpdateP2SProduct($dbconn,$lcRootId, $lcSupplierId) {
        require("../config.php");
        $bRet = true;
       // $this->_dbConnectionObj->doFreeResult();
        $tplproduct =new TplProduct();
        $tplshadowproduct=new TplShadowProductDAO();
        $array= array($lcSupplierId);
        $lcProduct_result = $tplproduct->select($dbconn, $array);
        
        $lcProduct_result = $this->_dbConnectionObj->doStoredProcQuery("CALL l2s_GetSupplierProductBySupplierID('" . $this->_sourceDB . "', " . $lcSupplierId . ")");
        if (count($lcProduct_result) > 0) {
            foreach ($lcProduct_result as $lcProduct ) {
//                $this->_dbConnectionObj->doFreeResult();
//                $lcProduct_Args1 = Array($this->_sourceDB, $lcRootId, $lcProduct['REC_ID'], $lcProduct['SUPPLIER_REC_ID'], $lcProduct['DIRECTORY_REC_ID'], $lcProduct['PRODUCT_CATEGORY_REC_ID']);
//                $argsHelper = $this->getArgHelper($lcProduct_Args);
//                $this->_dbConnectionObj->doStoredProcQuery("CALL ul2s_UpdateP2SProduct(" . $argsHelper . ")", $lcProduct_Args); // 6 items all
                $array= array( $lcRootId, $lcProduct['REC_ID'], $lcProduct['SUPPLIER_REC_ID'], $lcProduct['DIRECTORY_REC_ID'], $lcProduct['PRODUCT_CATEGORY_REC_ID']);
                $tplshadowproduct->update($dbconn, $array);
                }
        }
        return $bRet;
    }

    // Just reopen the client
    /* public function ReOpenClient($clientShadowRootId) {
      $bRet = false;
      if ( isset($clientShadowRootId) ) {
      if ($this->openDbConnection(false)) // false - testing, true - real usage
      {
      var_dump("Connected [Successful].");
      // just simply openning the state of the client (reusuing existing s2l sp
      $records = $this->_dbConnectionObj->doStoredProcQuery("CALL s2l_UpdateShadowRoot('".$this->_targetDB."', 'OPEN', ". $clientShadowRootId.")");
      $bRet = true;
      }
      }
      $this->closeDbConnection();
      return $bRet;
      } */

//    private function getArgHelper($array) {
//        $args_helper = "";
//        if (count($array) > 0) {
//            for ($n = 1; $n < count($array); $n++) {
//                $args_helper .= "?,";
//            }
//            $args_helper .= "?";
//        }
//        return $args_helper;
//    }
//
    public function getsqlext() {
        return MYSQLI;
    }

}

?>