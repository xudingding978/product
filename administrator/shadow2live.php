<?php

require_once ('migrate.php');
include_once ('../config.php');
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



//global $S2L_STEP_DUMP_DEBUG;

class Shadow2Live extends Migrate {

    protected $_documentObj;
    public $S2L_STEP_DUMP_DEBUG;

    public function exec() {
        global $dblog;
        $bRet = false;
        $dbtrans=null;
        //if ($S2L_STEP_DUMP_DEBUG)       
        try {


            $dblog->error_log("Processing shadow to live data migration");
            if (isset($this->_targetDirectory) && isset($this->_targetYear)) {
                //if ($this->openDbConnection()) { // false - testing, true - real usage
                    $dblog->error_log("Connected [Successful].");

                    if ($this->IsClientSpecific() == false) {
                        $dbtrans = new DBTransaction();
                        $tpldirdao = new TplDirectoryDAO();
                        $tplshadowrootdao = new TplShadowRootDAO();
                        $dbconn = $dbtrans->getConnection($this->_sourceDB);
                        $array = array($this->_targetDirectory);
                        $records = $tpldirdao->select($dbconn, $array);
                        var_dump($records);

                        //$records = $this->_dbConnectionObj->doStoredProcQuery("CALL GetDirByID('" . $this->_sourceDB . "', " . $this->_targetDirectory . ")");

                        if ($records->num_rows == 1) { // it should only be one otherwise this is not valid result
                            //$this->_dbConnectionObj->doFreeResult();
                            //$lcShadowRoots_result = $this->_dbConnectionObj->doStoredProcQuery("CALL s2l_GetRootShadowStateClosedFromDir('" . $this->_sourceDB . "', " . $this->_targetDirectory . ", " . $this->_targetYear . ")"); // 2 entry
                            $param_arr=array($this->_targetDirectory,$this->_targetYear);
                            $lcShadowRoots_result = $tplshadowrootdao->selectMerge($dbconn, $param_arr);
                            if ($S2L_STEP_DUMP_DEBUG)
                                $dblog->error_log("Collected ShadowRoot :" . var_export($lcShadowRoots_result, true));
                            if (count($lcShadowRoots_result) > 0) {
                                if ($S2L_STEP_DUMP_DEBUG)
                                    $dblog->error_log("Collecting information...");
                                $dblog->error_log("Collecting Shadow information...");

                                //while (($lcShadowRoot = $lcShadowRoots_result->fetch_array(MYSQLI_ASSOC)) == true) {
                                foreach ($lcShadowRoots_result as $lcShadowRoot) {
                                    $dblog->error_log('Shadow Recorded collected = ' . var_export($lcShadowRoot, true));
                                    //$this->_dbConnectionObj->doFreeResult();
                                    $dblog->error_log("Shadow Root ID : " . $lcShadowRoot['REC_ID']);
                                    $this->GenerateSupplier($this->_clientShadowRoot);
                                    $bRet = true;
                                }

                                // while -shadow root
                            } else {

                                // $_errHandler->ShowMessage(""); // handle error messaging here
                            } // if - validate shadow root
                        } // if - directory record count
                    } // if - client specific
                    else {
                        // this is only for single supplier (client owner execute this request)
                        // task are - request the shadowroot of the supplier
                        //if ($S2L_STEP_DUMP_DEBUG)
                        //$dblog->error_log("Processing Single Listing... call to function GenerateSupplier with " . $this->_clientShadowRoot . " as the Client Shadow Root ID");

                        $this->GenerateSupplier($this->_clientShadowRoot);

                        $bRet = true;
                    }
                    $this->closeDbConnection();
               // } // if - database connection
            }
        } catch (Exception $ex) {
            echo "Exception:" . $ex;
           // $dbtrans->rollbackTransaction();
            //throw new pdoDbException($ex); 
        }

        // if - target year and directory
        return $bRet;
    }

// end

    private function GenerateSupplier($shadowRoot_rid) { /* next to debug */
        require("../config.php");
        global $dblog;
        //global $S2L_STEP_DUMP_DEBUG;
        $bRet = true;        
        try {
            $dblog->error_log("Retrieving Shadow Supplier [CALL s2l_GetShadowSupplier] " . $this->_sourceDB . " , " . $shadowRoot_rid . ")");
            /* DAO create               */
            $tplshadowdao = new TplShadowSupplierDAO();
            $tplclientdao = new TplClientDAO();
            $tplsuplierdao = new TplSupplierDAO();
            $tplsuplierdirectorydao = new TplSupplierDirectoryDAO();
            
            /* Connection Handler   */
            $dbtrans = new DBTransaction();
            $dbconn = $dbtrans->getConnection($this->_sourceDB);
            
            $array = array($shadowRoot_rid);
            $lcShadowSuppliers_result = $tplshadowdao->select($dbconn, $array);
           
            $dblog->error_log("lcShadowSuppliers_result->num_rows -> " . $lcShadowSuppliers_result->num_rows);
            if (count($lcShadowSuppliers_result) > 0) {                
                foreach($lcShadowSuppliers_result as $lcShadowSupplier){                 
                //  while (($lcShadowSupplier = $lcShadowSuppliers_result->fetch_array(MYSQLI_ASSOC)) == true) {
                //  error_log("Retrieving Shadow Supplier Data into: Source DB: ".$this->_targetDB." Shadow Root ID: ".$shadowRoot_rid);
                    //$dblog->error_log("Shadow Supplier Results [CALL s2l_GetShadowSupplier]: Num Rows = " . $lcShadowSuppliers_result->num_rows);
                    //{ OK, lets update the client record in the client table from shadow supplier }
                    //if ($lcShadowSuppliers_result->num_rows > 0) error_log("Shadow Supplier Successfully retrieved");
                    error_log("GenerateSupplier.....................................:8  ".$lcShadowSupplier['REC_ACTION']);
                    error_log("GenerateSupplier.....................................:8.1".$lcShadowSupplier['MASTER_REC_ID']);
                    
                    $lcSupplier = null;
                    //insert a new client               
                    if ($lcShadowSupplier['REC_ACTION'] == 'INSERT' || ( ($lcShadowSupplier['REC_ACTION'] == 'UPDATE' || $lcShadowSupplier['REC_ACTION'] == null || $lcShadowSupplier['REC_ACTION'] == "" ) && ( $lcShadowSupplier['MASTER_REC_ID'] == 0 || $lcShadowSupplier['MASTER_REC_ID'] == '' || $lcShadowSupplier['MASTER_REC_ID'] == null))) {
                        $client_id = "0";
                        error_log("REC_ACTION........................................******************************");
                        $dblog->error_log("Building a New Client Dataset....");
//                        $physicalAddressnfo = $this->constructPhysicalAddress($lcShadowSupplier); // 7 entries - plus additional 6 entries from Address Finder Service [13 entries]
//                        $postalAddressnfo = $this->constructPostalAddress($lcShadowSupplier); // 7 entries                    
//                        $lcClient1 = Array($this->_targetDB, $lcShadowSupplier['REC_DATETIME'],
//                            $lcShadowSupplier['REC_TIMESTAMP'],
//                            $lcShadowSupplier['NAME'],
//                            $lcShadowSupplier['TRADING_AS_NAME'],
//                            $lcShadowSupplier['TELEPHONE_NO'],
//                            $lcShadowSupplier['FREE_TELEPHONE_NO'],
//                            $lcShadowSupplier['FAX_NO'],
//                            $lcShadowSupplier['FREE_FAX_NO'],
//                            $lcShadowSupplier['EMAIL_ADDRESS'],
//                            $lcShadowSupplier['WEBSITE_ADDRESS']); // 11 items
//
//                        $lcClient2 = array_merge($lcClient1, $physicalAddressnfo);
//                        $lcClient_Args = array_merge($lcClient2, $postalAddressnfo);
                        $dblog->error_log('Inserting a New Client Master Rec ID');
                         error_log("GenerateSupplier.....................................:9"); 
//                        $this->_dbConnectionObj->doFreeResult();
                        // make sure this return only 1 record - the new record that is currently inserted
                        if ($lcShadowSupplier['CLIENT_REC_ID'] == null || $lcShadowSupplier['CLIENT_REC_ID'] == "") {
                            //if ($S2L_STEP_DUMP_DEBUG) error_log("Inserting tpl_client [" . $lcShadowSupplier['NAME'] . "][" .$lcShadowSupplier['REC_ACTION'] . "][" . $lcShadowSupplier['MASTER_REC_ID'] ."]");
                            //if ($S2L_STEP_DUMP_DEBUG)
                            error_log("GenerateSupplier.....................................:10");
                            $dblog->error_log("Inserting tpl_client [CALL s2l_Insert2Client]");
                            //$lcClients_result = $this->_dbConnectionObj->doStoredProcQuery("CALL s2l_Insert2Client(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", $lcClient_Args); // 25 items plus additional 6 entries from Address Finder Service [31 entries]
                            $array = array($shadowRoot_rid);
                            $client_id=$tplclientdao->selectInsert($dbconn, $param_arr);
                            error_log("GenerateSupplier.....................................:11");
//                            if ($lcClients_result> 0) {
//                                $lcClient = $lcClients_result->fetch_array(MYSQLI_ASSOC);
//                                $client_id = $lcClient == true ? $lcClient['REC_ID'] : $lcShadowSupplier['CLIENT_REC_ID'];
//                            } else {
//                                $client_id = $lcShadowSupplier['CLIENT_REC_ID'];
//                            }
                        } else { //this client is already exist, just update the entry                        
                            //error_log('Client already exists: preparing for update...');
                            //if ($S2L_STEP_DUMP_DEBUG) error_log("Updating tpl_client");
                            
                            $dblog->error_log("Step: 2 - Updating tpl_client with Shadow Supplier data");
                            $array = array($shadowRoot_rid,$lcShadowSupplier['CLIENT_REC_ID']);
                            $client_id=$tplclientdao->selectupdate($dbconn, $array); 
                             error_log("GenerateSupplier.....................................:11"); 
                            //$lcClient_Args = array_merge($lcClient_Args, Array($lcShadowSupplier['CLIENT_REC_ID'])); // add 1 entry
                            //error_log(var_dump($lcClient_Args, true)." ".var_dump($lcClient,true).var_dump($lcClient,true));
                           // $this->_dbConnectionObj->doStoredProcQuery("CALL s2l_Update2Client(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", $lcClient_Args); // 26 items plus additional 6 entries from Address Finder Service [32 entries]
                            $client_id = $lcShadowSupplier['CLIENT_REC_ID'];
                        }
                        // Get the right ID for the supplier record
                        //$dblog->error_log("Inserting tpl_shadow_supplier into tpl_supplier");
//                        $lcSupplier_Args1 = Array($this->_targetDB, $lcShadowSupplier['REC_DATETIME'],
//                            $lcShadowSupplier['REC_TIMESTAMP'],
//                            $client_id,
//                            $lcShadowSupplier['NAME'],
//                            $lcShadowSupplier['TRADING_AS_NAME'],
//                            $lcShadowSupplier['CONTACT_NAME'],
//                            $lcShadowSupplier['CONTACT_POSITION'],
//                            $lcShadowSupplier['TELEPHONE_NO'],
//                            $lcShadowSupplier['FREE_TELEPHONE_NO'],
//                            $lcShadowSupplier['FAX_NO'],
//                            $lcShadowSupplier['FREE_FAX_NO'],
//                            $lcShadowSupplier['EMAIL_ADDRESS'],
//                            $lcShadowSupplier['WEBSITE_ADDRESS']); // 14 entries
//
//                        $lcSupplier_Args2 = array_merge($lcSupplier_Args1, $physicalAddressnfo); // 7 entries
//                        $lcSupplier_Args3 = array_merge($lcSupplier_Args2, $postalAddressnfo); // 7 entries
//                        // Get supplier record ID
//                        $supplierType_id = "0";
//                        if ($lcShadowSupplier['SUPPLIER_TYPE_REC_ID'] != "0" && $lcShadowSupplier['SUPPLIER_TYPE_REC_ID'] != null && $lcShadowSupplier['SUPPLIER_TYPE_REC_ID'] != "") {
//                            $supplierType_id = $lcShadowSupplier['SUPPLIER_TYPE_REC_ID'];
//                            error_log("GenerateSupplier...................:12");
//                        }
//
//                        $otherInfos = Array($lcShadowSupplier['COMPANY_PROFILE_TEXT'], $lcShadowSupplier['PRINT_LOGO_LOCATION'],
//                            $lcShadowSupplier['WEB_LOGO_LOCATION'], $supplierType_id);
//
//                        $lcSupplier_Args = array_merge($lcSupplier_Args3, $otherInfos); // 4 entries
//                        $dblog->error_log("Step: 3 - Inserting Shadow Supplier into tpl_supplier");
//                        $this->_dbConnectionObj->doFreeResult();
//                        // { OK, lets go to the last supplier .... the one that we just added }
//                        $lcSuppliers_result = $this->_dbConnectionObj->doStoredProcQuery("CALL s2l_Insert2Supplier(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", $lcSupplier_Args); // 32 entries total plus additional 6 entries from Address Finder Service [38]
//                        

                       $array = array($shadowRoot_rid);
                       $tplclientdao->selectInsert($dbconn, $array);
                       // make sure this return only 1 record - the new record that is currently inserted
                       
                       
                        $supplier_id = "0"; //this must have record
                        if ($lcSuppliers_result && $lcSuppliers_result->num_rows > 0) {
                            $lcSupplier = $lcSuppliers_result->fetch_array(MYSQLI_ASSOC);
                            $supplier_id = $lcSupplier["REC_ID"];
                        }

//                        $dblog->error_log("Step: 4 - Inserting tpl_supplier_directory - CALL s2l_Insert2SupplierDirectory");
//                        $this->_dbConnectionObj->doFreeResult();
//                        $lcSupplierDir_Args = Array($this->_targetDB, $supplier_id,$this->_targetDirectory,          $this->_targetYear,
//                            $shadowRoot_rid); // 5 entries
//                        // { Now lets update the supplier directory record for this supplier }
//
//                        $this->_dbConnectionObj->doStoredProcQuery("CALL s2l_Insert2SupplierDirectory(?,?,?,?,?)", $lcSupplierDir_Args); // 5 entries
//                    
                         $array = array($supplier_id,$this->_targetDirectory,  $this->_targetYear, $shadowRoot_rid);
                         $tplsuplierdirectorydao->update($dbconn, $array);
                        
                        
                        
                    }
                    // additional filter is added - only real db can access
                    else if (($lcShadowSupplier['REC_ACTION'] == 'UPDATE' || $lcShadowSupplier['REC_ACTION'] == null || $lcShadowSupplier['REC_ACTION'] == "") && $this->_targetDB == $this->_sourceDB) {
                        $dblog->error_log("Updating tpl_supplier from tlp_shadow_supplier....");

//                        $lcSupplier_Args1 = Array($this->_targetDB,
//                            $lcShadowSupplier['REC_DATETIME'],
//                            $lcShadowSupplier['REC_TIMESTAMP'],
//                            $lcShadowSupplier['CLIENT_REC_ID'],
//                            $lcShadowSupplier['NAME'],
//                            $lcShadowSupplier['TRADING_AS_NAME'],
//                            $lcShadowSupplier['CONTACT_NAME'],
//                            $lcShadowSupplier['CONTACT_POSITION'],
//                            $lcShadowSupplier['TELEPHONE_NO'],
//                            $lcShadowSupplier['FREE_TELEPHONE_NO'],
//                            $lcShadowSupplier['FAX_NO'],
//                            $lcShadowSupplier['FREE_FAX_NO'],
//                            $lcShadowSupplier['EMAIL_ADDRESS'],
//                            $lcShadowSupplier['WEBSITE_ADDRESS']); // 14 entries
//
//                        $physicalAddressnfo = $this->constructPhysicalAddress($lcShadowSupplier);
//                        $postalAddressnfo = $this->constructPostalAddress($lcShadowSupplier);
//
//                        $dblog->error_log('constructPhysicalAddress:' . var_export($physicalAddressnfo, true));
//                        $dblog->error_log('constructPostalAddress:' . var_export($postalAddressnfo, true));
//
//                        $lcSupplier_Args2 = array_merge($lcSupplier_Args1, $physicalAddressnfo); // 7 entries
//                        $lcSupplier_Args3 = array_merge($lcSupplier_Args2, $postalAddressnfo); // 7 entries

//                        $supplierType_recid = "0";
//                        if ($lcShadowSupplier['SUPPLIER_TYPE_REC_ID'] != 0) {
//                            $supplierType_recid = $lcShadowSupplier['SUPPLIER_TYPE_REC_ID'];
//                        }
//
//                        $lcSupplier_Args4 = Array($lcShadowSupplier['COMPANY_PROFILE_TEXT'],
//                            $lcShadowSupplier['PRINT_LOGO_LOCATION'],
//                            $lcShadowSupplier['WEB_LOGO_LOCATION'],
//                            $supplierType_recid,
//                            $lcShadowSupplier['MASTER_REC_ID']);
//
//                        $lcSupplier_Args = array_merge($lcSupplier_Args3, $lcSupplier_Args4); // 6 entries
//
//
//                        $dblog->error_log('constructSupplierProfile:' . var_export($lcSupplier_Args4, true));
//
//                        $dblog->error_log('CALL s2l_Update2Supplier => ' . var_export($lcSupplier_Args, true));
//
//                        $this->_dbConnectionObj->doFreeResult();
                        // { OK, lets go to the last supplier .... the one that we just added }
                        error_log("Else...........................................................");
                        $array = array($shadowRoot_rid);
                        $lcSuppliers_ID=$tplsuplierdao->update($dbconn,$array);
                         error_log("Else...........................................................:1");
                        
                       // $lcSuppliers_result = $this->_dbConnectionObj->doStoredProcQuery("CALL s2l_Update2Supplier(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", $lcSupplier_Args); //39 entries
                        if ($lcSuppliers_ID > 0) {
                            // make sure this return only 1 record - the new record that is currently inserted
                           // $lcSupplier = $lcSuppliers_result->fetch_array(MYSQLI_ASSOC);
                            // { Now lets update the supplier directory record for this supplier - Updating the supplier directory relationship}
                           // $this->_dbConnectionObj->doFreeResult();
//                            if ($S2L_STEP_DUMP_DEBUG) {
//                                error_log("Updating tpl_supplier_directory");
//                            }
//                            $lcSSupplierDir_Args = Array($this->_targetDB, $this->_targetYear,
//                                $shadowRoot_rid,
//                                $lcSupplier['REC_ID'],
//                                $this->_targetDirectory);
                            $array = array($this->_targetYear,$shadowRoot_rid,$lcSuppliers_ID,$this->_targetDirectory);
                            $tplsuplierdirectorydao->update($dbconn, $array);
                            
//                            if ($S2L_STEP_DUMP_DEBUG) {
//                                error_log("CALL s2l_Update2SupplierDirectory => " . var_export($lcSSupplierDir_Args, true));
//                            }
//                            $this->_dbConnectionObj->doStoredProcQuery("CALL s2l_Update2SupplierDirectory(?,?,?,?,?)", $lcSSupplierDir_Args); // 5 entries
                        } else {
                            $dblog->error_log("MySQL Error : " . mysql_error($this->openDbConnection()));
                        }
                    } else {
                        // if ( $shadowsupplier['REC_ACTION'] == 'DELETE' ) // originally no implementation - ?
                        //$dblog->error_log('No Supplier Found to update!');
                    }

                    //{ OK, now lets merge the supplier brand records }
                    //$this->_dbConnectionObj->doFreeResult();
                    $this->GenerateSupplierBrand($dbconn,$shadowRoot_rid, $lcSupplier['REC_ID']);
                    // { OK, now lets merge the supplier branch records }
                    //$this->_dbConnectionObj->doFreeResult();
                    $this->GenerateSupplierBranch($dbconn,$shadowRoot_rid, $lcSupplier['REC_ID']);
                    // { OK, now lets merge the supplier personnel records }
                    //$this->_dbConnectionObj->doFreeResult();
                    $this->GenerateSupplierKeyPersonnel($dbconn,$shadowRoot_rid, $lcSupplier['REC_ID']);
                    // { OK, now lets merge the supplier product/category records }
                    //$this->_dbConnectionObj->doFreeResult();
                    $this->GenerateSupplierProductCategory($dbconn,$shadowRoot_rid, $lcSupplier['REC_ID']);
                    // { OK, now lets merge the product records }
                    //$this->_dbConnectionObj->doFreeResult();
                    $this->GenerateSupplierProduct($dbconn,$shadowRoot_rid, $lcSupplier['REC_ID']);
                } // while - shadow supplier
                // only real db can update the shadow to merged - dummy db is just to dump the insert rec.
                if ($this->_targetDB == $this->_sourceDB) {
                    if ($S2L_STEP_DUMP_DEBUG) {
                        error_log("Updating tpl_shadow_root [" . $shadowRoot_rid . "][MERGED]");
                    }
                    $lcShadowRoot_Args = Array($this->_sourceDB, 'MERGED', $shadowRoot_rid); // 2 entries
                    $this->_dbConnectionObj->doFreeResult();
                    $this->_dbConnectionObj->doStoredProcQuery("CALL s2l_UpdateShadowRoot(?,?,?)", $lcShadowRoot_Args); // 3 entries
                }
            } else {
                $bRet = false;
            }
            //$dbtrans->commitTransaction();
        } catch (Exception $ex) {
            //echo "Exception:" . $ex;
            error_log("Exception:" . $ex);
            $dbtrans->rollbackTransaction();
            //throw new pdoDbException($ex); 
        }
        return $bRet;
    }

    private function GenerateSupplierBrand($dbconn,$shadowRoot_rid, $supplier_rid) {
        //require("../config.php");
        global $dblog;
        global $S2L_STEP_DUMP_DEBUG;
        $dblog->error_log('Generating Supplier Brands for... ShadowRootID: ' . $shadowRoot_rid . ' to be inserted into Suppiler ID:' . $supplier_rid);
        $bRet = true;
        $tplshadowsupplierbrand =new TplShadowSupplierBrandDAO();
        $tplsupplierbrand =new TplSupplierBrandDAO();
        $lcShadowSupplierBrand = array($shadowRoot_rid);
        $lcShadowSupplierBrands_result = $tplshadowsupplierbrand->select($dbconn, $lcShadowSupplierBrand);
        //$lcShadowSupplierBrands_result = $this->_dbConnectionObj->doStoredProcQuery("CALL s2l_SelectSSupplierBrand(?,?)", $lcShadowSupplierBrand); //2 entries
        if (count($lcShadowSupplierBrands_result) > 0) {
            //while (($lcShadowSupplierBrand = $lcShadowSupplierBrands_result->fetch_array(MYSQLI_ASSOC)) == true) {
           foreach ($lcShadowSupplierBrands_result as $lcShadowSupplierBrand) {
                $dblog->error_log('Generating Supplier Brands found....');
                //{ OK, lets check the record action, and respond accordingly }
                //$this->_dbConnectionObj->doFreeResult();
                if ($lcShadowSupplierBrand['REC_ACTION'] == 'INSERT' || (( $lcShadowSupplierBrand['REC_ACTION'] == 'UPDATE' || $lcShadowSupplierBrand['REC_ACTION'] == null || $lcShadowSupplierBrand['REC_ACTION'] == "") && ( $lcShadowSupplierBrand['MASTER_REC_ID'] == '0' || $lcShadowSupplierBrand['MASTER_REC_ID'] == 0))) {
//                    $supplier_recid = "0"; //this must have value
//                    if ($lcShadowSupplierBrand['SUPPLIER_REC_ID'] == 0 || $lcShadowSupplierBrand['SUPPLIER_REC_ID'] == '0') {
//                        $supplier_recid = $supplier_rid;
//                    } else {
//                        $supplier_recid = $lcShadowSupplierBrand['SUPPLIER_REC_ID'];
//                    }
//                    $logo = 1;
//                    if ($lcShadowSupplierBrand['IS_LOGO_LISTING'] == "" || $lcShadowSupplierBrand['IS_LOGO_LISTING'] == null) {
//                        $logo = 0;
//                    }
//                    if ($S2L_STEP_DUMP_DEBUG)
//                        $dblog->error_log("Inserting tpl_supplier_brand [" . $lcShadowSupplierBrand['BRAND_REC_ID'] . "][" . $lcShadowSupplierBrand['REC_ACTION'] . "][" . $lcShadowSupplierBrand['MASTER_REC_ID'] . "]");
//                    $lcSupplierBrand_Args = Array(
//                        $this->_targetDB,
//                        $lcShadowSupplierBrand['REC_DATETIME'],
//                        $lcShadowSupplierBrand['REC_TIMESTAMP'],
//                        $supplier_recid,
//                        $lcShadowSupplierBrand['BRAND_REC_ID'],
//                        $logo);
                    $array=array($shadowRoot_rid);
                    $tplsupplierbrand->selectInsert($dbconn, $array);
                    //$shadowRoot_rid
                    //$lcSupplierBrands_result = $this->_dbConnectionObj->doStoredProcQuery("CALL s2l_InsertSupplierBrand(?,?,?,?,?,?)", $lcSupplierBrand_Args); //6 entries
                }
                // only real db can do update and delete rec.
                else if (($lcShadowSupplierBrand['REC_ACTION'] == 'UPDATE' || $lcShadowSupplierBrand['REC_ACTION'] == null || $lcShadowSupplierBrand['REC_ACTION'] == "") && $this->_targetDB == $this->_sourceDB) {
                    if ($S2L_STEP_DUMP_DEBUG)
                        $dblog->error_log("Updating tpl_supplier_brand [" . $lcShadowSupplierBrand['BRAND_REC_ID'] . "][" . $lcShadowSupplierBrand['SUPPLIER_REC_ID'] . "][" . $lcShadowSupplierBrand['MASTER_REC_ID'] . "]");
//                    $lcSupplierBrand_Args = Array(
//                        $this->_targetDB,
//                        $lcShadowSupplierBrand['REC_DATETIME'],
//                        $lcShadowSupplierBrand['REC_TIMESTAMP'],
//                        $lcShadowSupplierBrand['SUPPLIER_REC_ID'],
//                        $lcShadowSupplierBrand['BRAND_REC_ID'],
//                        $this->checkIfNull($lcShadowSupplierBrand['IS_LOGO_LISTING']),
//                        $lcShadowSupplierBrand['MASTER_REC_ID']);
//                    $dblog->error_log("CALL s2l_UpdateSupplierBrand(?,?,?,?,?,?,?) => " . var_export($lcSupplierBrand_Args, true));
//                    $lcSupplierBrands_result = $this->_dbConnectionObj->doStoredProcQuery("CALL s2l_UpdateSupplierBrand(?,?,?,?,?,?,?)", $lcSupplierBrand_Args); //7 entries
//               
                     $array=array($lcShadowSupplierBrand['MASTER_REC_ID']);
                    $tplsupplierbrand->selectUpdate($dbconn, $array);
                    
                    
                    
                    }
                else if ($lcShadowSupplierBrand['REC_ACTION'] == 'DELETE' &&
                        ( $lcShadowSupplierBrand['MASTER_REC_ID'] != '0' || $lcShadowSupplierBrand['MASTER_REC_ID'] != 0) && $this->_targetDB == $this->_sourceDB) {
                    if ($S2L_STEP_DUMP_DEBUG)
                        $dblog->error_log("Deleting tpl_supplier_brand [" . $lcShadowSupplierBrand['BRAND_REC_ID'] . "][" . $lcShadowSupplierBrand['REC_ACTION'] . "][" . $lcShadowSupplierBrand['MASTER_REC_ID'] . "]");
//                    $lcSupplierBrand_Args = Array($this->_targetDB, $lcShadowSupplierBrand['MASTER_REC_ID']);
//                    $lcSupplierBrands_result = $this->_dbConnectionObj->doStoredProcQuery("CALL s2l_DeleteSupplierBrand(?,?)", $lcSupplierBrand_Args); //2 entry
                    $array=array($lcShadowSupplierBrand['MASTER_REC_ID']);
                    $tplsupplierbrand->delete($dbconn, $array);
                    
                    
                }
            } // while - fetch_array
        }
        else {
            if (!$lcShadowSupplierBrands_result) {
                $dblog->error_log("GenerateSupplierBrand:s2l_SelectSSupplierBrand:failed on supplier [" . $supplier_rid . "]");
                $bRet = false;
            } else {
                if ($S2L_STEP_DUMP_DEBUG)
                    $dblog->error_log("GenerateSupplierBrand:s2l_SelectSSupplierBrand: supplier [" . $supplier_rid . "] have no brand.");
            }
        }
        return $bRet;
    }

    private function GenerateSupplierBranch($dbconn,$shadowRoot_rid, $supplier_rid) {
        global $S2L_STEP_DUMP_DEBUG;
        global $dblog;
        $bRet = true;
        
        $tplshadowsupplierbranch =new TplShadowSupplierBranchDAO();
        $tplsupplierbranch =new TplSupplierBranchDAO();
        $lcShadowSupplierBranch = array($shadowRoot_rid);
        $lcShadowSupplierBranch_result = $tplshadowsupplierbranch->select($dbconn, $lcShadowSupplierBranch);
        
        
        //$lcShadowSupplierBranch_Args = Array($this->_sourceDB, $shadowRoot_rid);
        //$lcShadowSupplierBranches_result = $this->_dbConnectionObj->doStoredProcQuery("CALL s2l_SelectSSupplierBranch(?,?)", $lcShadowSupplierBranch_Args); //2 entry
        if (count($lcShadowSupplierBranch_result) > 0) {
            foreach ($lcShadowSupplierBranch_result as $lcShadowSupplierBranch) {
                //{ OK, lets check the record action, and respond accordingly }
               // $this->_dbConnectionObj->doFreeResult();
                if ($lcShadowSupplierBranch['REC_ACTION'] == 'INSERT' || ( ( $lcShadowSupplierBranch['REC_ACTION'] == 'UPDATE' || $lcShadowSupplierBranch['REC_ACTION'] == null || $lcShadowSupplierBranch['REC_ACTION'] == "") && ( $lcShadowSupplierBranch['MASTER_REC_ID'] == '0' || $lcShadowSupplierBranch['MASTER_REC_ID'] == 0))) {
                    $supplier_recid = "0";
                    if ($lcShadowSupplierBranch['SUPPLIER_REC_ID'] == '0' || $lcShadowSupplierBranch['SUPPLIER_REC_ID'] == 0) {
                        $supplier_recid = $supplier_rid;
                    } else {
                        $supplier_recid = $lcShadowSupplierBranch['SUPPLIER_REC_ID'];
                    }
                    $supplier_order = "0";
                    if ((int) $lcShadowSupplierBranch['ORDER'] > 0) {
                        $supplier_order = $lcShadowSupplierBranch['ORDER'];
                    }
//                    if ($S2L_STEP_DUMP_DEBUG)
//                        $dblog->error_log("Inserting tpl_supplier_branch [" . $lcShadowSupplierBranch['NAME'] . "][" . $lcShadowSupplierBranch['REC_ACTION'] . "][" . $lcShadowSupplierBranch['MASTER_REC_ID'] . "]");
//                    $lcSupplierBranch_Args1 = Array($this->_targetDB, $lcShadowSupplierBranch['REC_DATETIME'],
//                        $lcShadowSupplierBranch['REC_TIMESTAMP'],
//                        $supplier_recid,
//                        $supplier_order,
//                        $lcShadowSupplierBranch['NAME'],
//                        $lcShadowSupplierBranch['TELEPHONE_NO'],
//                        $lcShadowSupplierBranch['FREE_TELEPHONE_NO'],
//                        $lcShadowSupplierBranch['FAX_NO'],
//                        $lcShadowSupplierBranch['FREE_FAX_NO'],
//                        $lcShadowSupplierBranch['EMAIL_ADDRESS']); // 11 entries
//                    $physicalAddressnfo = $this->constructPhysicalAddress($lcShadowSupplierBranch);
//                    $postalAddressnfo = $this->constructPostalAddress($lcShadowSupplierBranch);
//
//                    $lcSupplierBranch_Args2 = array_merge($lcSupplierBranch_Args1, $physicalAddressnfo); // 7 entries
//                    $lcSupplierBranch_Args = array_merge($lcSupplierBranch_Args2, $postalAddressnfo); // 7 entries
                   
                    $array=array($lcShadowSupplierBranch['REC_ID']);
                    $tplsupplierbranch->selectInsert($dbconn, $array);
                    //$lcSupplierBranch_result = $this->_dbConnectionObj->doStoredProcQuery("CALL s2l_InsertSupplierBranch(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", $lcSupplierBranch_Args); //25 entries
                }
                // only real db can access update and delete rec.
                else if (($lcShadowSupplierBranch['REC_ACTION'] == 'UPDATE' || $lcShadowSupplierBranch['REC_ACTION'] == null || $lcShadowSupplierBranch['REC_ACTION'] == "") && $this->_targetDB == $this->_sourceDB) {
                    if ($S2L_STEP_DUMP_DEBUG)
                        $dblog->error_log("Updating tpl_supplier_branch [" . $lcShadowSupplierBranch['NAME'] . "][" . $lcShadowSupplierBranch['REC_ACTION'] . "][" . $lcShadowSupplierBranch['MASTER_REC_ID'] . "]");
//                    $lcSupplierBranch_Args1 = Array($this->_targetDB, $lcShadowSupplierBranch['REC_DATETIME'],
//                        $lcShadowSupplierBranch['REC_TIMESTAMP'],
//                        $lcShadowSupplierBranch['SUPPLIER_REC_ID'],
//                        $lcShadowSupplierBranch['ORDER'],
//                        $lcShadowSupplierBranch['NAME'],
//                        $lcShadowSupplierBranch['TELEPHONE_NO'],
//                        $lcShadowSupplierBranch['FREE_TELEPHONE_NO'],
//                        $lcShadowSupplierBranch['FAX_NO'],
//                        $lcShadowSupplierBranch['FREE_FAX_NO'],
//                        $lcShadowSupplierBranch['EMAIL_ADDRESS']); // 11 entries
//                    $physicalAddressnfo = $this->constructPhysicalAddress($lcShadowSupplierBranch);
//                    $postalAddressnfo = $this->constructPostalAddress($lcShadowSupplierBranch);
//
//                    $lcSupplierBranch_Args2 = array_merge($lcSupplierBranch_Args1, $physicalAddressnfo); // 7 entries
//                    $lcSupplierBranch_Args3 = array_merge($lcSupplierBranch_Args2, $postalAddressnfo); // 7 entries
//                    $lcSupplierBranch_Args = array_merge($lcSupplierBranch_Args3, Array($lcShadowSupplierBranch['MASTER_REC_ID'])); // 1 entry
                    $array=array($lcShadowSupplierBranch['REC_ID']);
                    $tplsupplierbranch->selectUpdate($dbconn, $array);
                    $lcSupplierBranch_result = $this->_dbConnectionObj->doStoredProcQuery("CALL s2l_UpdateSupplierBranch(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", $lcSupplierBranch_Args); //26 entries
                }
                else if ($lcShadowSupplierBranch['REC_ACTION'] == 'DELETE' &&
                        ( $lcShadowSupplierBranch['MASTER_REC_ID'] != '0' || $lcShadowSupplierBranch['MASTER_REC_ID'] != 0) && $this->_targetDB == $this->_sourceDB) {
                    if ($S2L_STEP_DUMP_DEBUG)
                        $dblog->error_log("Deleting tpl_supplier_branch [" . $lcShadowSupplierBranch['NAME'] . "][" . $lcShadowSupplierBranch['REC_ACTION'] . "][" . $lcShadowSupplierBranch['MASTER_REC_ID'] . "]");
//                    $lcSupplierBranch_Args = Array($this->_targetDB, $lcShadowSupplierBranch['MASTER_REC_ID']);
//                    $lcSupplierBranches_result = $this->_dbConnectionObj->doStoredProcQuery("CALL s2l_DeleteSupplierBranch(?,?)", $lcSupplierBranch_Args); //2 entry
                     $array=array($lcShadowSupplierBranch['MASTER_REC_ID']);
                      $tplsupplierbranch->delete($dbconn, $array);
                    
                }
            } // while - fetch_array
        }
        else {
            if (!$lcShadowSupplierBranches_result) {
                $dblog->error_log("GenerateSupplierBranch:s2l_SelectSSupplierBranch:failed on supplier [" . $supplier_rid . "]");
                $bRet = false;
            } else {
                if ($S2L_STEP_DUMP_DEBUG)
                    $dblog->error_log("GenerateSupplierBranch:s2l_SelectSSupplierBranch: supplier [" . $supplier_rid . "] have no branch.");
            }
        }
        return $bRet;
    }

    //


    private function GenerateSupplierKeyPersonnel($dbconn,$shadowRoot_rid, $supplier_rid) {
        global $S2L_STEP_DUMP_DEBUG;
        global $dblog;
        $bRet = true;
        $tplshadowsupplierkeypersonnel =new TplShadowSupplierKeyPersonnelDAO();
        $tplsupplierkeypersonnel =new TplSupplierKeyPersonnelDAO();
        $lcShadowSupplierkeypersonnel = array($shadowRoot_rid);
        $lcShadowSupplierKeyPersonnel_result = $tplshadowsupplierkeypersonnel->select($dbconn, $lcShadowSupplierkeypersonnel);
        
        //$lcShadowSupplierKeyPersonnel_Args = Array($this->_sourceDB, $shadowRoot_rid);
       // $lcShadowSupplierKeyPersonnels_result = $this->_dbConnectionObj->doStoredProcQuery("CALL s2l_SelectSSupplierKeyPersonnel(?,?)", $lcShadowSupplierKeyPersonnel_Args); //2 entries
        if (count($lcShadowSupplierKeyPersonnel_result) > 0) {
            foreach ($lcShadowSupplierKeyPersonnel_result as $lcShadowSupplierKeyPersonnel) {
                $this->_dbConnectionObj->doFreeResult();
                if ($lcShadowSupplierKeyPersonnel['REC_ACTION'] == 'INSERT' || ( ( $lcShadowSupplierKeyPersonnel['REC_ACTION'] == 'UPDATE' || $lcShadowSupplierKeyPersonnel['REC_ACTION'] == null || $lcShadowSupplierKeyPersonnel['REC_ACTION'] == "") && ( $lcShadowSupplierKeyPersonnel['MASTER_REC_ID'] == '0' || $lcShadowSupplierKeyPersonnel['MASTER_REC_ID'] == 0))) {
//                    if ($S2L_STEP_DUMP_DEBUG)
//                        $dblog->error_log("Inserting tpl_supplier_key_personnel [" . $lcShadowSupplierKeyPersonnel['NAME'] . "][" . $lcShadowSupplierKeyPersonnel['REC_ACTION'] . "][" . $lcShadowSupplierKeyPersonnel['MASTER_REC_ID'] . "]");
//                    $supplier_recid = "";
//                    if ($lcShadowSupplierKeyPersonnel['SUPPLIER_REC_ID'] == '0' || $lcShadowSupplierKeyPersonnel['SUPPLIER_REC_ID'] == 0) {
//                        $supplier_recid = $supplier_rid;
//                    } else {
//                        $supplier_recid = $lcShadowSupplierKeyPersonnel['SUPPLIER_REC_ID'];
//                    }
//
//                    $keypersonnel_order = "0";
//                    if ((int) $lcShadowSupplierKeyPersonnel['ORDER'] > 0) {
//                        $keypersonnel_order = $lcShadowSupplierKeyPersonnel['ORDER'];
//                    }
//
//                    $lcSupplierKeyPersonnel_Args1 = Array($this->_targetDB, $lcShadowSupplierKeyPersonnel['REC_DATETIME'],
//                        $lcShadowSupplierKeyPersonnel['REC_TIMESTAMP'],
//                        $supplier_recid,
//                        $keypersonnel_order,
//                        $lcShadowSupplierKeyPersonnel['NAME'],
//                        $lcShadowSupplierKeyPersonnel['POSITION'],
//                        $lcShadowSupplierKeyPersonnel['TELEPHONE_NO'],
//                        $lcShadowSupplierKeyPersonnel['FAX_NO'],
//                        $lcShadowSupplierKeyPersonnel['EMAIL_ADDRESS']); // 10 entries
//
//                    $physicalAddressnfo = $this->constructPhysicalAddress($lcShadowSupplierKeyPersonnel);
//                    $postalAddressnfo = $this->constructPostalAddress($lcShadowSupplierKeyPersonnel);
//
//                    $lcSupplierKeyPersonnel_Args2 = array_merge($lcSupplierKeyPersonnel_Args1, $physicalAddressnfo); // 7 entries
//                    $lcSupplierKeyPersonnel_Args = array_merge($lcSupplierKeyPersonnel_Args2, $postalAddressnfo); // 7 entries
//                    $lcSupplierKeyPersonnels_result = $this->_dbConnectionObj->doStoredProcQuery("CALL s2l_InsertSupplierKeyPersonnel(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", $lcSupplierKeyPersonnel_Args); //24 entry
                                  
                    $array=array($lcShadowSupplierKeyPersonnel['REC_ID']);
                    $tplsupplierkeypersonnel->selectInsert($dbconn, $array);
                    
                    }
                // only real db can access update and delete rec.
                else if (($lcShadowSupplierKeyPersonnel['REC_ACTION'] == 'UPDATE' || $lcShadowSupplierKeyPersonnel['REC_ACTION'] == null || $lcShadowSupplierKeyPersonnel['REC_ACTION'] == "") && $this->_targetDB == $this->_sourceDB) {
                    if ($S2L_STEP_DUMP_DEBUG)
                        $dblog->error_log("Updating tpl_supplier_key_personnel [" . $lcShadowSupplierKeyPersonnel['NAME'] . "][" . $lcShadowSupplierKeyPersonnel['REC_ACTION'] . "][" . $lcShadowSupplierKeyPersonnel['MASTER_REC_ID'] . "]");
//                    $lcSupplierKeyPersonnel_Args1 = Array($this->_targetDB, $lcShadowSupplierKeyPersonnel['REC_DATETIME'],
//                        $lcShadowSupplierKeyPersonnel['REC_TIMESTAMP'],
//                        $lcShadowSupplierKeyPersonnel['SUPPLIER_REC_ID'],
//                        $lcShadowSupplierKeyPersonnel['ORDER'],
//                        $lcShadowSupplierKeyPersonnel['NAME'],
//                        $lcShadowSupplierKeyPersonnel['POSITION'],
//                        $lcShadowSupplierKeyPersonnel['TELEPHONE_NO'],
//                        $lcShadowSupplierKeyPersonnel['FAX_NO'],
//                        $lcShadowSupplierKeyPersonnel['EMAIL_ADDRESS']); // 10 entries
//                    $physicalAddressnfo = $this->constructPhysicalAddress($lcShadowSupplierKeyPersonnel);
//                    $postalAddressnfo = $this->constructPostalAddress($lcShadowSupplierKeyPersonnel);
//
//                    $lcSupplierKeyPersonnel_Args2 = array_merge($lcSupplierKeyPersonnel_Args1, $physicalAddressnfo); // 7 entries
//                    $lcSupplierKeyPersonnel_Args3 = array_merge($lcSupplierKeyPersonnel_Args2, $postalAddressnfo); // 7 entries
//                    $lcSupplierKeyPersonnel_Args = array_merge($lcSupplierKeyPersonnel_Args3, Array($lcShadowSupplierKeyPersonnel['MASTER_REC_ID'])); // 1 entry
//                    $lcSupplierKeyPersonnels_result = $this->_dbConnectionObj->doStoredProcQuery("CALL s2l_UpdateSupplierKeyPersonnel(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", $lcSupplierKeyPersonnel_Args); //25 entry
                    $array=array($lcShadowSupplierKeyPersonnel['REC_ID']);
                    $tplsupplierkeypersonnel->selectUpdate($dbconn, $array);
                    
                }
                else if ($lcShadowSupplierKeyPersonnel['REC_ACTION'] == 'DELETE' &&
                        ( $lcShadowSupplierKeyPersonnel['MASTER_REC_ID'] != '0' || $lcShadowSupplierKeyPersonnel['MASTER_REC_ID'] != 0) && $this->_targetDB == $this->_sourceDB) {
                    if ($S2L_STEP_DUMP_DEBUG)
                        $dblog->error_log("Deleting tpl_supplier_key_personnel [" . $lcShadowSupplierKeyPersonnel['NAME'] . "][" . $lcShadowSupplierKeyPersonnel['REC_ACTION'] . "][" . $lcShadowSupplierKeyPersonnel['MASTER_REC_ID'] . "]");
//                    $lcSupplierKeyPersonnel_Args = Array($this->_targetDB, $lcShadowSupplierKeyPersonnel['MASTER_REC_ID']);
//                    $lcSupplierBranches_result = $this->_dbConnectionObj->doStoredProcQuery("CALL s2l_DeleteSupplierKeyPersonnel(?,?)", $lcSupplierKeyPersonnel_Args); //2 entry
                    $array=array($lcShadowSupplierKeyPersonnel['MASTER_REC_ID']);
                    $tplsupplierkeypersonnel->delete($dbconn, $array);
                    }
            } // while - fetch_array
        }
        else {
            if (!$lcShadowSupplierKeyPersonnels_result) {
                $dblog->error_log("GenerateSupplierKeyPersonnel:s2l_SelectSSupplierKeyPersonnel:failed on supplier [" . $supplier_rid . "]");
                $bRet = false;
            } else {
                if ($S2L_STEP_DUMP_DEBUG)
                    $dblog->error_log("GenerateSupplierKeyPersonnel:s2l_SelectSSupplierKeyPersonnel: supplier [" . $supplier_rid . "] have no keypersonnel.");
            }
            $bRet = false;
        }
        return $bRet;
    }

    //=================================================================================================================
    // PRODUCT CATEGORIES - GenerateSupplierProductCategory
    //=================================================================================================================	

    private function GenerateSupplierProductCategory($dbconn,$shadowRoot_rid, $supplier_rid) {
        require("../config.php");
        $bRet = true;
        global $dblog;
//        $lcShadowSupplierProductCategory_Args = Array($this->_sourceDB, $shadowRoot_rid);
//        $dblog->error_log("CALL s2l_SelectSSupplierProdCategory->" . var_export($lcShadowSupplierProductCategory_Args, true));
//        $lcShadowSupplierProductCategories_result = $this->_dbConnectionObj->doStoredProcQuery("CALL s2l_SelectSSupplierProdCategory(?,?)", $lcShadowSupplierProductCategory_Args); //2 entries
//        
        $tplshadowsupplierproductcategory =new TplShadowSupplierProductCategoryDAO();
        $tplsupplierproductcategory =new TplSupplierProductCategoryDAO();
        $lcShadowSupplierproductcategory = array($shadowRoot_rid);
        $lcShadowSupplierproductcategory_result = $tplshadowsupplierproductcategory->select($dbconn, $lcShadowSupplierproductcategory);
        
        
        
       // $dblog->error_log('$lcShadowSupplierProductCategories_result->num_rows = ' . $lcShadowSupplierproductcategory_result->num_rows);
        if (count($lcShadowSupplierproductcategory_result) > 0) {
            foreach ($lcShadowSupplierproductcategory_result as $lcShadowSupplierProductCategory ) {
                $dblog->error_log("Dumping Product Categories..." . print_r($lcShadowSupplierProductCategory, true));
                //$this->_dbConnectionObj->doFreeResult();
                if ($lcShadowSupplierProductCategory['REC_ACTION'] == 'INSERT' || ( ($lcShadowSupplierProductCategory['REC_ACTION'] == 'UPDATE' || $lcShadowSupplierProductCategory['REC_ACTION'] == null || $lcShadowSupplierProductCategory['REC_ACTION'] == "") && ( $lcShadowSupplierProductCategory['MASTER_REC_ID'] == '0' || $lcShadowSupplierProductCategory['MASTER_REC_ID'] == 0))) {
                    //if ($S2L_STEP_DUMP_DEBUG) error_log("Inserting tpl_supplier_product_category [" . $lcShadowSupplierProductCategory['SUPPLIER_REC_ID'] . "][" .$lcShadowSupplierProductCategory['REC_ACTION'] . "][" . $lcShadowSupplierProductCategory['MASTER_REC_ID'] ."]");
//                    $supplier_recid = "";
//                    if ($lcShadowSupplierProductCategory['SUPPLIER_REC_ID'] == '0' || $lcShadowSupplierProductCategory['SUPPLIER_REC_ID'] == 0) {
//                        $supplier_recid = $supplier_rid;
//                    } else {
//                        $supplier_recid = $lcShadowSupplierProductCategory['SUPPLIER_REC_ID'];
//                    }
//                    $logo = 1;
//                    if ($lcShadowSupplierProductCategory['IS_LOGO_LISTING'] == "" || $lcShadowSupplierProductCategory['IS_LOGO_LISTING'] == null) {
//                        $logo = 0;
//                    }
//                    $lcShadowSupplierProductCategory_Args = Array($this->_targetDB, $lcShadowSupplierProductCategory['REC_DATETIME'],
//                        $lcShadowSupplierProductCategory['REC_TIMESTAMP'],
//                        $supplier_recid,
//                        $lcShadowSupplierProductCategory['PRODUCT_CATEGORY_REC_ID'],
//                        $logo);
//                    $dblog->error_log("CALL s2l_InsertSupplierProductCategory->" . var_export($lcShadowSupplierProductCategory_Args, true));
//                    $this->_dbConnectionObj->doStoredProcQuery("CALL s2l_InsertSupplierProductCategory(?,?,?,?,?,?)", $lcShadowSupplierProductCategory_Args); //6 entry
                    $array=array($lcShadowSupplierProductCategory['REC_ID']);
                    $tplsupplierproductcategory->selectInsert($dbconn, $param_arr);
                    
                    }
                // only real db can access update and delete rec.
                else if (( $lcShadowSupplierProductCategory['REC_ACTION'] == 'UPDATE' || $lcShadowSupplierProductCategory['REC_ACTION'] == null || $lcShadowSupplierProductCategory['REC_ACTION'] == "") && $this->_targetDB == $this->_sourceDB) {
                    if ($S2L_STEP_DUMP_DEBUG)
                        $dblog->error_log("Updating tpl_supplier_product_category [" . $lcShadowSupplierProductCategory['SUPPLIER_REC_ID'] . "][" . $lcShadowSupplierProductCategory['REC_ACTION'] . "][" . $lcShadowSupplierProductCategory['MASTER_REC_ID'] . "]");
//                    $lcShadowSupplierProductCategory_Args = Array($this->_targetDB, $lcShadowSupplierProductCategory['REC_DATETIME'],
//                        $lcShadowSupplierProductCategory['REC_TIMESTAMP'],
//                        $lcShadowSupplierProductCategory['SUPPLIER_REC_ID'],
//                        $lcShadowSupplierProductCategory['PRODUCT_CATEGORY_REC_ID'],
//                        $lcShadowSupplierProductCategory['IS_LOGO_LISTING'],
//                        $lcShadowSupplierProductCategory['MASTER_REC_ID']);
//
//                    $dblog->error_log("$lcShadowSupplierProductCategory_Args = " . print_r($lcShadowSupplierProductCategory_Args, true));
//                    $dblog->error_log("s2l_UpdateSupplierProductCategory");
                    //$this->_dbConnectionObj->doStoredProcQuery("CALL s2l_UpdateSupplierProductCategory(?,?,?,?,?,?,?)", $lcShadowSupplierProductCategory_Args); //7 entry
                    $array=array($lcShadowSupplierProductCategory['REC_ID']);
                    $tplsupplierproductcategory->selectUpdate($dbconn, $param_arr);
                    
                }
                else if ($lcShadowSupplierProductCategory['REC_ACTION'] == 'DELETE' &&
                        ( $lcShadowSupplierProductCategory['MASTER_REC_ID'] != '0' || $lcShadowSupplierProductCategory['MASTER_REC_ID'] != 0) &&
                        $this->_targetDB == $this->_sourceDB) {
//                    if ($S2L_STEP_DUMP_DEBUG)
//                        $dblog->error_log("Deleting tpl_supplier_product_category PRODUCT_CATEGORY_REC_ID:[" . $lcShadowSupplierProductCategory['PRODUCT_CATEGORY_REC_ID'] . "] REC_ACTION:[" . $lcShadowSupplierProductCategory['REC_ACTION'] . "] MASTER_REC_ID:[" . $lcShadowSupplierProductCategory['MASTER_REC_ID'] . "]");
//                    $lcShadowSupplierProductCategory_Args = Array($this->_targetDB, $lcShadowSupplierProductCategory['MASTER_REC_ID'], $lcShadowSupplierProductCategory['PRODUCT_CATEGORY_REC_ID']);
//                    if ($S2L_STEP_DUMP_DEBUG)
//                        $dblog->error_log("CALL s2l_DeleteSupplierProductCategory => " . var_export($lcShadowSupplierProductCategory_Args, true));
//                    $this->_dbConnectionObj->doStoredProcQuery("CALL s2l_DeleteSupplierProductCategory(?,?,?)", $lcShadowSupplierProductCategory_Args); //3 entry
                     $array=array($lcShadowSupplierProductCategory['MASTER_REC_ID']);
                     $tplsupplierproductcategory->delete($dbconn, $param_arr);
                    
                    
                }
            } // while - fetch_array
        }
        else {
            if (!$lcShadowSupplierProductCategories_result) {
                $dblog->error_log("GenerateSupplierProductCategory:s2l_SelectSSupplierProdCategory:failed on supplier [" . $supplier_rid . "]");
                $bRet = false;
            } else {
                if ($S2L_STEP_DUMP_DEBUG)
                    $dblog->error_log("GenerateSupplierProductCategory:s2l_SelectSSupplierProdCategory: [" . $supplier_rid . "] has no product category");
            }
        }
        return $bRet;
    }

    private function GenerateSupplierProduct($dbconn,$shadowRoot_rid, $supplier_rid) {
        require("../config.php");
        global $S2L_STEP_DUMP_DEBUG;
        global $dblog;
        $bRet = true;
        
        $tplshadowproduct =new TplShadowProductDAO();
        $tplproduct =new TplProduct();
        $lcShadowproduct = array($shadowRoot_rid);
        $lcShadowproduct_result = $tplshadowproduct->select($dbconn, $lcShadowproduct);
        
        
        
        
        
        
//        $lcShadowProduct_Args = Array($this->_sourceDB, $shadowRoot_rid);
//        $dblog->error_log("CALL s2l_SelectSProduct => " . var_export($lcShadowProduct_Args, true));
//        $lcShadowProducts_result = $this->_dbConnectionObj->doStoredProcQuery("CALL s2l_SelectSProduct(?,?)", $lcShadowProduct_Args); //2 entries
//        $dblog->error_log('$lcShadowProducts_result->num_rows => ' . $lcShadowProducts_result->num_rows);
        if (count($lcShadowproduct_result) > 0) {
            foreach ($lcShadowproduct_result as $lcShadowProduct) {
                //$dblog->error_log('$lcShadowProduct-> ' . var_export($lcShadowProduct, true));
                //$this->_dbConnectionObj->doFreeResult();
                if ($lcShadowProduct['REC_ACTION'] == 'INSERT' || ( ($lcShadowProduct['REC_ACTION'] == 'UPDATE' || $lcShadowProduct['REC_ACTION'] == null || $lcShadowProduct['REC_ACTION'] == "") && ( $lcShadowProduct['MASTER_REC_ID'] == '0' || $lcShadowProduct['MASTER_REC_ID'] == 0))) {
                    //if ($S2L_STEP_DUMP_DEBUG)
//                    $dblog->error_log("Inserting tpl_product [" . $lcShadowProduct['REC_ID'] . "][" . $lcShadowProduct['LABEL_NAME'] . "][" . $lcShadowProduct['REC_ACTION'] . "][" . $lcShadowProduct['MASTER_REC_ID'] . "]");
//                    $supplier_recid = "";
//                    if ($lcShadowProduct['SUPPLIER_REC_ID'] == '0' || $lcShadowProduct['SUPPLIER_REC_ID'] == 0) {
//                        $supplier_recid = $supplier_rid;
//                    } else {
//                        $supplier_recid = $lcShadowProduct['SUPPLIER_REC_ID'];
//                    }
//                    $lcShadowProduct_Args = Array(
//                        $this->_targetDB,
//                        $lcShadowProduct['REC_DATETIME'],
//                        $lcShadowProduct['REC_TIMESTAMP'],
//                        $lcShadowProduct['PRODUCT_CATEGORY_REC_ID'],
//                        $supplier_recid,
//                        $this->_targetDirectory,
//                        $lcShadowProduct['LABEL_NAME'],
//                        $lcShadowProduct['VARIETAL'],
//                        $lcShadowProduct['VINTAGE'],
//                        $lcShadowProduct['REGION_OF_ORIGIN'],
//                        $lcShadowProduct['COUNTRY_OF_ORIGIN']); // 11 entries
//                    $dblog->error_log("CALL s2l_InsertSupplierProduct -> " . var_export($lcShadowProduct_Args, true));
//                    $this->_dbConnectionObj->doStoredProcQuery("CALL s2l_InsertSupplierProduct(?,?,?,?,?,?,?,?,?,?,?)", $lcShadowProduct_Args); //11 entry
                    $array=array($lcShadowProduct['REC_ID']);
                    $tplproduct->selectInsert($dbconn, $array);
                    
                    
                    }
                // only real db can access update and delete rec.
                else if (($lcShadowProduct['REC_ACTION'] == 'UPDATE' || $lcShadowProduct['REC_ACTION'] == null || $lcShadowProduct['REC_ACTION'] == "") && $this->_targetDB == $this->_sourceDB) {
//                    $dblog->error_log("Updating tpl_product [" . $lcShadowProduct['LABEL_NAME'] . "][" . $lcShadowProduct['REC_ACTION'] . "][" . $lcShadowProduct['MASTER_REC_ID'] . "]");
//                    $lcShadowProduct_Args = Array(
//                        $this->_targetDB,
//                        $lcShadowProduct['REC_DATETIME'],
//                        $lcShadowProduct['REC_TIMESTAMP'],
//                        $lcShadowProduct['PRODUCT_CATEGORY_REC_ID'],
//                        $lcShadowProduct['SUPPLIER_REC_ID'],
//                        $lcShadowProduct['DIRECTORY_REC_ID'],
//                        $lcShadowProduct['LABEL_NAME'],
//                        $lcShadowProduct['VARIETAL'],
//                        $lcShadowProduct['VINTAGE'],
//                        $lcShadowProduct['REGION_OF_ORIGIN'],
//                        $lcShadowProduct['COUNTRY_OF_ORIGIN'],
//                        $lcShadowProduct['MASTER_REC_ID']);
//                    $this->_dbConnectionObj->doStoredProcQuery("CALL s2l_UpdateSupplierProduct(?,?,?,?,?,?,?,?,?,?,?,?)", $lcShadowProduct_Args); //12 entry
                    // do more stuff here...
                    $array=array($lcShadowProduct['REC_ID']);
                    $tplproduct->selectUpdate($dbconn, $array);
                } else if ($lcShadowProduct['REC_ACTION'] == 'DELETE' &&
                        ( $lcShadowProduct['MASTER_REC_ID'] != '0' || $lcShadowProduct['MASTER_REC_ID'] != 0) && $this->_targetDB == $this->_sourceDB) {
                    //if ($S2L_STEP_DUMP_DEBUG)
//                    $dblog->error_log("Deleting tpl_product [" . $lcShadowProduct['LABEL_NAME'] . "][" . $lcShadowProduct['REC_ACTION'] . "][" . $lcShadowProduct['MASTER_REC_ID'] . "]");
//                    $lcShadowProduct_Args = Array($this->_targetDB, $lcShadowProduct['MASTER_REC_ID']);
//                    $this->_dbConnectionObj->doStoredProcQuery("CALL s2l_DeleteSupplierProduct(?,?)", $lcShadowProduct_Args); //2 entry
                    $array=array($lcShadowProduct['MASTER_REC_ID']);
                    $tplproduct->delete($dbconn, $array);
              }
            } // while - fetch_array
        } // if - validate result
        else {
            if (!$lcShadowProducts_result) {
                $dblog->error_log("GenerateSupplierProduct:s2l_SelectSProduct:failed on supplier [" . $supplier_rid . "]");
                $bRet = false;
            } else {
                if ($S2L_STEP_DUMP_DEBUG)
                    $dblog->error_log("GenerateSupplierProduct:s2l_SelectSProduct: supplier [" . $supplier_rid . "] has no product");
            }
        }
        return $bRet;
    }

    public function getsqlext() {
        return MYSQLI;
    }

}

?>