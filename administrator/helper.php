<?php

include_once("dataconnection.php");

//include_once($path_doc_root."/config.php");
class Helper {

    private $block = false;
    private $tpldb = "";
    private $ConnectionObj = null;

    function __construct() {
        //include_once("../config.php");
        //$this->tpldb = $DB_NAME; // default database name
    }

    public function initdb($host, $port, $user, $pwd, $admindb) {


        $this->ConnectionObj = new DataConnection(MYSQLI, $host, $port, $admindb, $user, $pwd);
    }

    public function tpldb($dbname) {

        $this->tpldb = $dbname;
    }

    public function domain_add($db, $domain_name, $domain_data, $rec_id) {
        if ($this->ConnectionObj->Connect()) {
            //$query;
            if ($rec_id == 0) {
                $query = "INSERT INTO tpl_domains (DOMAIN_NAME,JSON_DATA) VALUES ('" . mysql_real_escape_string($domain_name) . "','" . mysql_real_escape_string($domain_data) . "')";
            } else {
                $query = "UPDATE tpl_domains SET DOMAIN_NAME ='" . $domain_name . "' ,JSON_DATA ='" . $domain_data . "' WHERE REC_ID =" . $rec_id;
            }
            $qresult = $this->ConnectionObj->doQuery($query, false);
            $this->ConnectionObj->Disconnect();
        }
        else
            var_dump("Connection failed");
        return true;
    }

    public function verify_user($user, $password) {
        $ret = array();
        if ($this->ConnectionObj->Connect()) {
            $enc_pwd = MD5($password);
            $result = $this->ConnectionObj->doStoredProcQuery("CALL admin_Login('" . $admindb . "','" . $user . "','" . $enc_pwd . "')");
            if ($result && $result->num_rows == 1) {
                $info = $result->fetch_array(MYSQLI_ASSOC);
                $ret['uid'] = $info['id'];
                $ret['role'] = $info['role'];
                $ret['sessid'] = $info['sessionid'];
                $ret['fname'] = $info['firstname'];
                $ret['lname'] = $info['lastname'];
                $ret['fgid'] = $info['griditem'];
//                $ret['ddir'] = $info['default_dir'];
//                $ret['dyear'] = $info['default_year'];
            }
            $this->ConnectionObj->Disconnect();
        }
        return $ret;
    }

    public function verify_session($sessionid, $uid) {
        $ret = array();
        if ($this->ConnectionObj->Connect()) {
            $result = $this->ConnectionObj->doStoredProcQuery("CALL admin_VerifySession('" . $sessionid . "','" . $uid . "')");
            if ($result && $result->num_rows == 1) {
                $info = $result->fetch_array(MYSQLI_ASSOC);
                $ret['user'] = $info['usr'];
                $ret['role'] = $info['role'];
            }
            $this->ConnectionObj->Disconnect();
        }
        return $ret;
    }

    public function getDefaultDirectory($uid) {
        $ret = array();
        if ($this->ConnectionObj->Connect()) {
            $result = $this->ConnectionObj->doStoredProcQuery("CALL account_GetDefaultDirectory(" . $uid . ")");
            if ($result && $result->num_rows == 1) {
                $info = $result->fetch_array(MYSQLI_ASSOC);
                if ($info['DEFAULT_DIR_ID'] == NULL) {
                    $ret['def_dir_rec_id'] = "Please Select A Directory";
                } else {
                    $ret['def_dir_rec_id'] = $info['DEFAULT_DIR_ID'];
                }
                if ($info['DEFAULT_DIR_YEAR'] == NULL) {
                    $ret['def_dir_year'] = "    ";
                } else {
                    $ret['def_dir_year'] = $info['DEFAULT_DIR_YEAR'];
                }
            } else {
                $ret['def_dir_rec_id'] = "Add New Directory";
                $ret['def_dir_year'] = "    ";
            }
            $this->ConnectionObj->Disconnect();
        }
        return $ret;
    }

    public function saveDefaultDirectory($uid, $directory_rec_id, $directory_year) {
        $ret = false;
        if ($this->ConnectionObj->Connect()) {
            $result = $this->ConnectionObj->doStoredProcQuery("CALL account_SaveDefaultDirectory(" . $uid . "," . $directory_rec_id . "," . $directory_year . ")");
            if ($result && $result->num_rows == 1) {
                $ret = true;
            }
            $this->ConnectionObj->Disconnect();
        }
        return $ret;
    }

    public function save_frontgrid_id($uid, $frontgrid_id) {
        $ret = false;
        if ($this->ConnectionObj->Connect()) {
            $result = $this->ConnectionObj->doStoredProcQuery("CALL account_SaveUserFrontGridDefault(" . $uid . "," . $frontgrid_id . ")");
            if ($result && $result->num_rows == 1) {
                $ret = true;
            }
            $this->ConnectionObj->Disconnect();
        }
        return $ret;
    }

    public function getFrontGridDefault($uid) {
        $ret = 1;
        if ($this->ConnectionObj->Connect()) {
            $result = $this->ConnectionObj->doStoredProcQuery("CALL account_GetUserFrontGridDefault(" . $uid . ")");
            if ($result && $result->num_rows == 1) {
                $info = $result->fetch_array(MYSQLI_ASSOC);
                $ret = $info['ITEM_ID'];
            }
            $this->ConnectionObj->Disconnect();
        }
        return $ret;
    }

    public function get_directory($dir_rec_id) {
        global $DB_NAME;
        $ret = false;
        if ($this->ConnectionObj->Connect()) {
            $result = $this->ConnectionObj->doQuery("SELECT * FROM " . $DB_NAME . ".tpl_directory WHERE REC_ID = " . $dir_rec_id);
            if ($result && $result->num_rows == 1) {
                $info = $result->fetch_array(MYSQLI_ASSOC);
                $ret = $info;
            }
            $this->ConnectionObj->Disconnect();
        }
        return $ret;
    }

    public function save_directory($collection) {
        include_once("dataconnection.php");

        $userid = 1;
        $fieldsObj = json_decode(stripslashes($collection));
        $bRet = false;

        $dir_pac_default = $fieldsObj->{'dir_pac_default'};
        $dir_standard = 0;
        $dir_advanced = 0;
        $dir_premium = 0;
        if ($dir_pac_default == 0) {
            $dir_standard = 1;
        } else if ($dir_pac_default == 1) {
            $dir_advanced = 1;
        } else {
            $dir_premium = 1;
        }

        if ($this->ConnectionObj->Connect()) {

            $result = $this->ConnectionObj->doStoredProcQuery("CALL directory_AddDirectory('" . $this->tpldb . "','" . mysql_real_escape_string($fieldsObj->{'directoryname'}) . "'," . $fieldsObj->{'directoryyear'} . ","
                    . $fieldsObj->{'prodbase'} . ",'" . $fieldsObj->{'directoryperiodname'} . "','" . $fieldsObj->{'directoryperiodcode'} . "'," . $fieldsObj->{'directoryperiod'} . ",'" . $fieldsObj->{'directoryperiodtype'} . "','"
                    . $fieldsObj->{'directoryperiodstart'} . "','" . $fieldsObj->{'directoryperiodend'} . "','" . mysql_real_escape_string($fieldsObj->{'std_listingdesc'}) . "'," . $fieldsObj->{'std_costexclgst'} . ","
                    . $fieldsObj->{'std_gstrate'} . "," . $fieldsObj->{'std_maxbranch'} . "," . $fieldsObj->{'std_maxpersonnel'} . ","
                    . $fieldsObj->{'std_maxbrand'} . "," . $fieldsObj->{'std_maxprodcat'} . ",'" . $fieldsObj->{'adv_listingdesc'} . "',"
                    . $fieldsObj->{'adv_costexclgst'} . "," . $fieldsObj->{'adv_gstrate'} . "," . $fieldsObj->{'adv_maxbranch'} . ","
                    . $fieldsObj->{'adv_maxpersonnel'} . "," . $fieldsObj->{'adv_maxbrand'} . "," . $fieldsObj->{'adv_maxprodcat'} . ",'"
                    . mysql_real_escape_string($fieldsObj->{'prem_listingdesc'}) . "'," . $fieldsObj->{'prem_costexclgst'} . "," . $fieldsObj->{'prem_gstrate'} . ","
                    . $fieldsObj->{'prem_maxbranch'} . "," . $fieldsObj->{'prem_maxpersonnel'} . "," . $fieldsObj->{'prem_maxbrand'} . ","
                    . $fieldsObj->{'prem_maxprodcat'} . ",'" . $fieldsObj->{'addoffer_name'} . "','" . mysql_real_escape_string($fieldsObj->{'addoffer_description'}) . "','"
                    . $fieldsObj->{'addoffer_code'} . "'," . $fieldsObj->{'addoffer_costexclgst'} . "," . $fieldsObj->{'addoffer_gstrate'} . ",'"
                    . mysql_real_escape_string($fieldsObj->{'directorydesc'}) . "'," . $fieldsObj->{'dir_default'} . "," . $dir_standard . "," . $dir_advanced . "," . $dir_premium . ")");





            if ($result && $result->num_rows > 0) {
                $bRet = true;
            }
            $this->ConnectionObj->Disconnect();
        }
        return $bRet;
    }

    public function update_directory($collection) {
        include_once("dataconnection.php");
        $userid = 1;
        $fieldsObj = json_decode(stripslashes($collection));
        $bRet = false;

        if ($this->ConnectionObj->Connect()) {

            $result = $this->ConnectionObj->doStoredProcQuery("CALL directory_AddDirectory('" . $this->tpldb . "','" . mysql_real_escape_string($fieldsObj->{'directoryname'}) . "'," . $fieldsObj->{'directoryyear'} . ","
                    . $fieldsObj->{'prodbase'} . ",'" . $fieldsObj->{'directoryperiodname'} . "','" . $fieldsObj->{'directoryperiodcode'} . "'," . $fieldsObj->{'directoryperiod'} . ",'" . $fieldsObj->{'directoryperiodtype'} . "','"
                    . $fieldsObj->{'directoryperiodstart'} . "','" . $fieldsObj->{'directoryperiodend'} . "','" . mysql_real_escape_string($fieldsObj->{'std_listingdesc'}) . "'," . $fieldsObj->{'std_costexclgst'} . ","
                    . $fieldsObj->{'std_gstrate'} . "," . $fieldsObj->{'std_maxbranch'} . "," . $fieldsObj->{'std_maxpersonnel'} . ","
                    . $fieldsObj->{'std_maxbrand'} . "," . $fieldsObj->{'std_maxprodcat'} . ",'" . $fieldsObj->{'adv_listingdesc'} . "',"
                    . $fieldsObj->{'adv_costexclgst'} . "," . $fieldsObj->{'adv_gstrate'} . "," . $fieldsObj->{'adv_maxbranch'} . ","
                    . $fieldsObj->{'adv_maxpersonnel'} . "," . $fieldsObj->{'adv_maxbrand'} . "," . $fieldsObj->{'adv_maxprodcat'} . ",'"
                    . mysql_real_escape_string($fieldsObj->{'prem_listingdesc'}) . "'," . $fieldsObj->{'prem_costexclgst'} . "," . $fieldsObj->{'prem_gstrate'} . ","
                    . $fieldsObj->{'prem_maxbranch'} . "," . $fieldsObj->{'prem_maxpersonnel'} . "," . $fieldsObj->{'prem_maxbrand'} . ","
                    . $fieldsObj->{'prem_maxprodcat'} . ",'" . $fieldsObj->{'addoffer_name'} . "','" . mysql_real_escape_string($fieldsObj->{'addoffer_description'}) . "','"
                    . $fieldsObj->{'addoffer_code'} . "'," . $fieldsObj->{'addoffer_costexclgst'} . "," . $fieldsObj->{'addoffer_gstrate'} . ",'"
                    . mysql_real_escape_string($fieldsObj->{'directorydesc'}) . "'," . $fieldsObj->{'dir_default'} . "," . $dir_standard . "," . $dir_advanced . "," . $dir_premium . ")");





            if ($result && $result->num_rows > 0) {
                $bRet = true;
            }
            $this->ConnectionObj->Disconnect();
        }
        return $bRet;
    }

    public function add_clients($dir, $yr, $name, $firstName, $lastName, $email, $userName, $pw, $clientPackage) {
        include_once("dataconnection.php");
        $info = Array();
        $enc_pwd = MD5($pw);
        if ($this->ConnectionObj->Connect()) {

            $name = mysql_real_escape_string($name);
            // be aware that this sp is calling sp from target db
            $result = $this->ConnectionObj->doStoredProcQuery("CALL client_AddClient('" . $this->tpldb . "','" . $dir . "','" . $yr . "','" . $name . "','" . $userName . "','" . $enc_pwd . "','" . $firstName . "','" . $lastName . "','" . $email . "','" . $clientPackage . "')");


            if ($result && $result->num_rows > 0) {
                $info = $result->fetch_array(MYSQLI_ASSOC);
            } else {

                $info['RESULT'] = '3';
            }
            $this->ConnectionObj->Disconnect();
        }
        return $info;
    }

    public function changeClientStatus($email, $status) {
        include_once("dataconnection.php");
        $qresult;
        if ($this->ConnectionObj->Connect()) {
            error_log("changeClientStatus...........................:1");
            $qresult = $this->ConnectionObj->doQuery("UPDATE tpl_client SET CLIENT_STATUS_REC_ID= " . $status . " WHERE EMAIL_ADDRESS ='" . $email . "'");
            error_log("changeClientStatus...........................:2");
            $this->ConnectionObj->Disconnect();
        }
        return $qresult;
    }

    public function GenerateRandom($limit) {
        $generated = "";
        $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
        $chars_length = (strlen($chars) - 1);
        $generated = $chars{rand(0, $chars_length)};
        for ($i = 1; $i < $limit; $i = strlen($generated)) {
            // Grab a random character from our list
            $r = $chars{rand(0, $chars_length)};
            if ($r != $generated{$i - 1})
                $generated .= $r; // verify if exist side by side
        }
        return $generated;
    }

    public function delete_client($dir, $yr, $id, $rid) {
        include_once("dataconnection.php");
        $bRet = false;
        if ($this->ConnectionObj->Connect()) {
            // do not delete the tpl_client entry because the live table is using it
            $bRet = $this->ConnectionObj->doStoredProcQuery("CALL client_RemoveToShadow('" . $this->tpldb . "'," . $dir . ",'" . $yr . "'," . $id . "," . $rid . ")");
            $this->ConnectionObj->Disconnect();
        }
        return $bRet;
    }

    public function save_user($collection) {
        include_once("dataconnection.php");
        $userid = 1;
        $fieldsObj = json_decode(stripslashes($collection));
        $bRet = false;
        if ($this->ConnectionObj->Connect()) {
            $enc_password = '';
            if ($fieldsObj->{'password'} != '')
                $enc_password = md5($fieldsObj->{'password'}); // encrypt the password
            $result = $this->ConnectionObj->doStoredProcQuery("CALL account_SaveUser(" . $fieldsObj->{'id'} . "," . $fieldsObj->{'role'} . ",'"
                    . $fieldsObj->{'username'} . "','" . $enc_password . "','"
                    . $fieldsObj->{'firstname'} . "','" . $fieldsObj->{'lastname'} . "'," . $userid . ")");
            if ($result->num_rows > 0) {
                $bRet = true;
            }
            $this->ConnectionObj->Disconnect();
        }
        return $bRet;
    }

    public function remove_user($userid) {
        include_once("dataconnection.php");
        $bRet = false;
        if ($this->ConnectionObj->Connect()) {
            $result = $this->ConnectionObj->doStoredProcQuery("CALL account_DeleteUser(" . $userid . ")");
            $this->ConnectionObj->Disconnect();
            $bRet = true;
        }
        return $bRet;
    }

    public function add_category($collection) {
        include_once("dataconnection.php");
        $userid = 1;
        $fieldsObj = json_decode(stripslashes($collection));
        $bRet = 0;
        if ($this->ConnectionObj->Connect()) {
            $parentId = "0";
            $prnorder = 0;
            if ($fieldsObj->{'id'} != "")
                $parentId = $fieldsObj->{'id'};
            if ($fieldsObj->{'prnorder'} != "")
                $prnorder = $fieldsObj->{'prnorder'};
            if ($fieldsObj->{'code'} != "") {
                $ret = $this->ConnectionObj->verifyProdCategory($this->tpldb, $fieldsObj->{'code'});
                if ($ret && $ret->num_rows > 0)
                    $bRet = -1; //the code exist already
            }
            if ($bRet == 0) {
                $query = "CALL category_AddCategory('" . $this->tpldb . "'," . $fieldsObj->{'dir'} . "," . $parentId . ",'" . $fieldsObj->{'name'} . "'," . $prnorder . ",'" . $fieldsObj->{'prnimg'} . "','" . $fieldsObj->{'webimg'} . "','" . $fieldsObj->{'code'} . "','" . $fieldsObj->{'txt'} . "')";
                $result = $this->ConnectionObj->doStoredProcQuery($query);
                if ($result && $result->num_rows > 0)
                    $bRet = 1;
            }
            $this->ConnectionObj->Disconnect();
        }
        return $bRet;
    }

    public function edit_category($collection) {
        include_once("dataconnection.php");
        $userid = 1;
        $fieldsObj = json_decode(stripslashes($collection));
        $bRet = false;
        if ($this->ConnectionObj->Connect()) {
            if ($fieldsObj->{'prnorder'} == '')
                $prnorder = 0; else
                $prnorder = $fieldsObj->{'prnorder'};
            $result = $this->ConnectionObj->doStoredProcQuery("CALL category_EditCategory('" . $this->tpldb . "'," . $fieldsObj->{'id'} . ",'" . $fieldsObj->{'name'} . "',"
                    . $prnorder . ",'" . $fieldsObj->{'prnimg'} . "','" . $fieldsObj->{'webimg'} . "','" . $fieldsObj->{'code'} . "','" . $fieldsObj->{'txt'} . "')");
            if ($result && $result->num_rows > 0) {
                $bRet = true;
            }
            $this->ConnectionObj->Disconnect();
        }
        return $bRet;
    }

    public function delete_category($collection) {
        include_once("dataconnection.php");
        $userid = 1;
        $fieldsObj = json_decode(stripslashes($collection));
        $bRet = false;
        if ($this->ConnectionObj->Connect()) {
            $result = $this->ConnectionObj->doStoredProcQuery("CALL category_RemoveCategory('" . $this->tpldb . "'," . $fieldsObj->{'dir'} . "," . $fieldsObj->{'id'} . ")");
            if ($result && $result->num_rows == 0) {
                $bRet = true; /* this means that the category data no longer exist in the table */
            }
            $this->ConnectionObj->Disconnect();
        }
        return $bRet;
    }

    public function hasChildren($dir, $recid) {
        include_once("../config.php");
        global $DB_NAME;
        $nRet = 0;
        if ($this->ConnectionObj->Connect()) {
            $result = $this->ConnectionObj->doStoredProcQuery("CALL GetChildCountProductCategory('" . $this->tpldb . "'," . $dir . "," . $recid . ")");
            if ($result && $result->num_rows > 0) {
                $info = $result->fetch_array(MYSQLI_ASSOC);
                if (intval($info['COUNTER'], 10) > 0)
                    $nRet = $info['COUNTER'];
                else
                    $nRet = 0;
            }
        }
        return $nRet;
    }

    public function hasShadowClient($dir, $recid) {
        include_once("../config.php");
        global $DB_NAME;
        $nRet = 0;
        if ($this->ConnectionObj->Connect()) {
            $result = $this->ConnectionObj->doStoredProcQuery("CALL GetShadowClientCountProductCategory('" . $this->tpldb . "'," . $dir . "," . $recid . ")");
            if ($result && $result->num_rows > 0) {
                $info = $result->fetch_array(MYSQLI_ASSOC);
                if (intval($info['COUNTER'], 10) > 0)
                    $nRet = $info['COUNTER'];
                else
                    $nRet = 0;
            }
        }
        return $nRet;
    }

    public function hasLiveClient($dir, $recid) {
        include_once("../config.php");
        global $DB_NAME;
        $nRet = 0;
        if ($this->ConnectionObj->Connect()) {
            $result = $this->ConnectionObj->doStoredProcQuery("CALL GetLiveClientCountProductCategory('" . $this->tpldb . "'," . $dir . "," . $recid . ")");
            if ($result && $result->num_rows > 0) {
                $info = $result->fetch_array(MYSQLI_ASSOC);
                if (intval($info['COUNTER'], 10) > 0)
                    $nRet = $info['COUNTER'];
                else
                    $nRet = 0;
            }
        }
        return $nRet;
    }

    public function getProdCategoryInfo($recid, $isChildInPath) {
        include_once("../config.php");
        global $DB_NAME;
        $info = array();
        if ($this->ConnectionObj->Connect()) {
            $result = $this->ConnectionObj->doStoredProcQuery("CALL GetProductCategoryByID('" . $DB_NAME . "'," . $recid . ")");
            if ($result && $result->num_rows == 1) {
                $info = $result->fetch_array(MYSQLI_ASSOC);
            }
            $info["PATH"] = $this->getProdCategoryPath($info['REC_ID'], "", $isChildInPath);
            $this->ConnectionObj->Disconnect();
        }
        return $info;
    }

    public function getProdCategoryPath($recid, $path, $isChildInPath) {
        include_once("../config.php");
        global $DB_NAME;
        $base_recid = $recid;
        $path = '';
        while ($recid != null) {
            $this->ConnectionObj->doFreeResult();
            $result = $this->ConnectionObj->doStoredProcQuery("CALL GetProductCategoryParentByID('" . $DB_NAME . "'," . $recid . ")");
            if ($result && $result->num_rows == 1) {
                $info = $result->fetch_array(MYSQLI_ASSOC);
                $recid = $info['PARENT_PRODUCT_CATEGORY_REC_ID'];
                if ($base_recid != $info['REC_ID'] || $isChildInPath == true)
                    $path = $info['NAME'] . ' > ' . $path;
            }
        }
        if ($path == '')
            $path = 'root';
        return $path;
    }

    public function getDirectoryInfoByID($dirID) {

        global $DB_NAME;
        $ret = array();
        if ($this->ConnectionObj->Connect()) {
            $result = $this->ConnectionObj->doStoredProcQuery("CALL GetDirByID('" . $DB_NAME . "','" . $dirID . "')");
            if ($result && $result->num_rows == 1) {
                $info = $result->fetch_array(MYSQLI_ASSOC);
                $ret['dir_name'] = $info['NAME'];
                $ret['dir_is_product_based'] = $info['IS_PRODUCT_BASED'];
                $ret['dir_current_year'] = $info['CURRENT_YEAR'];
            }
            $this->ConnectionObj->Disconnect();
        }
        return $ret;
    }

    public function getAvailableDirYear($dir) {

        global $DB_NAME;
        //error_log("DB_NAME..............." . $DB_NAME);
        //error_log("dir..............." . $dir);

        return $this->ConnectionObj->doQuery("SELECT tpl_per.DIRECTORY_YEAR as CURRENT_YEAR ,tpl_per.DIRECTORY_PERIOD_START as START_DATE,tpl_per.DIRECTORY_PERIOD_END as END_DATE FROM " . $DB_NAME . ".tpl_directory tpl_dir INNER JOIN " . $DB_NAME . ".tpl_directory_period tpl_per ON tpl_dir.REC_ID=tpl_per.DIRECTORY_REC_ID WHERE tpl_dir.REC_ID = " . $dir . "  ORDER BY tpl_dir.CURRENT_YEAR DESC");
        //return $this->doQuery("SELECT CURRENT_YEAR FROM ".$DB_NAME.".tpl_directory WHERE REC_ID = ".$dir." ORDER BY CURRENT_YEAR DESC");
    }

    public function getDirectoryPackages($dir_rec_id) {
        //include_once("../config.php");
        global $DB_NAME;
        $ret = false;
        if ($this->ConnectionObj->Connect()) {
            $result = $this->ConnectionObj->doQuery("SELECT * FROM ". $DB_NAME . "tpl_directory_offering WHERE DIRECTORY_REC_ID = " . $dir_rec_id);
            if ($result && $result->num_rows > 0) {
                $info = $result->fetch_array(MYSQLI_ASSOC);
                $ret = $info;
            }
            $this->ConnectionObj->Disconnect();
        }
        return $ret;
    }

    public function getDirInfo($dir) {
        include_once("../config.php");
        global $DB_NAME;
        if ($this->ConnectionObj->Connect()) {
            $diroffers = $this->ConnectionObj->doQuery("SELECT * FROM " . $DB_NAME . ".tpl_directory_offering where DIRECTORY_REC_ID=" . $dir . " and IS_DEFAULT=1");
            $this->ConnectionObj->Disconnect();
        }
        return $diroffers;
    }

    public function getDefaultPackage($recid) {
        include_once("../config.php");
        global $DB_NAME;
        if ($this->ConnectionObj->Connect()) {
            $diroffers = $this->ConnectionObj->doQuery("SELECT * FROM " . $DB_NAME . ".tpl_directory_offering WHERE DIRECTORY_REC_ID=" . $recid . " and  IS_DEFAULT =1");

            $output = "";
            if (($diroffer = $diroffers->fetch_array(MYSQLI_ASSOC)) == true) {

                $output = $diroffer['NAME'];
            }
            $this->ConnectionObj->Disconnect();
        }
        return $output;
    }
/*
    public function getDirYears($dir) {
        include_once("../config.php");
        global $DB_NAME;
        if ($this->ConnectionObj->Connect()) {
            //$avail_years = $this->ConnectionObj->doQuery("SELECT DISTINCT DIRECTORY_YEAR from " . $DB_NAME . ".tpl_shadow_root WHERE DIRECTORY_REC_ID = " . $dir . " ORDER BY DIRECTORY_YEAR DESC");
            $avail_years = $this->ConnectionObj->doQuery("SELECT DIRECTORY_YEAR, DIRECTORY_PERIOD, DIRECTORY_PERIOD_TYPE, DIRECTORY_PERIOD_START, DIRECTORY_PERIOD_END FROM " . $DB_NAME . ".tpl_directory_period WHERE DIRECTORY_REC_ID = " . $dir . " ORDER BY DIRECTORY_PERIOD_START DESC");
            if ($avail_years && $avail_years->num_rows > 0) {
                $cnt = 0;
                while (($year = $avail_years->fetch_array(MYSQLI_ASSOC)) == true) {
                    $years[$cnt++] = date_format(date_create($year['DIRECTORY_PERIOD_START']), 'jS F Y') . ' to ' . date_format(date_create($year['DIRECTORY_PERIOD_END']), 'jS F Y');
                }
                $avail_years->close();
                return $years;
            } else {
                //$avail_years = $this->ConnectionObj->doQuery("SELECT DISTINCT CURRENT_YEAR from " . $DB_NAME . ".tpl_directory WHERE REC_ID = " . $dir);
                $avail_years = $this->ConnectionObj->doQuery("SELECT DISTINCT CURRENT_YEAR FROM " . $DB_NAME . ".tpl_directory WHERE REC_ID = " . $dir);
                if ($avail_years && $avail_years->num_rows > 0) {
                    $cnt = 0;
                    while (($year = $avail_years->fetch_array(MYSQLI_ASSOC)) == true) {
                        $years[$cnt++] = $year["CURRENT_YEAR"];
                    }
                    $avail_years->close();
                }
            }
            $this->ConnectionObj->Disconnect();
            return $years;
        }
    }
  */
    public function IsDirectoryProductBase($dirID) {
        include_once("../config.php");
        // problem connectng db here if second time
        $bRet = false;
        if ($this->ConnectionObj->Connect()) {
            $result = $this->ConnectionObj->doQuery("SELECT IS_PRODUCT_BASED FROM " . $this->tpldb . ".tpl_directory WHERE rec_id=" . $dirID);
            if ($result && $result->num_rows > 0) {
                $dir = $result->fetch_array(MYSQLI_ASSOC);
                if ($dir['IS_PRODUCT_BASED'] > 0) {
                    $bRet = true;
                }
                $result->close();
            }
            $this->ConnectionObj->Disconnect();
        }
        return $bRet;
    }

    public function getAllDirectory() {
        include_once("../config.php");
        // problem connectng db here if second time
        global $DB_NAME;
        if ($this->ConnectionObj->Connect()) {
            $result = $this->ConnectionObj->doQuery("SELECT * FROM " . $this->tpldb . ".tpl_directory");
            if ($result && $result->num_rows > 0) {
                $cnt = 0;
                while (($dir = $result->fetch_array(MYSQLI_ASSOC)) == true) {
                    $dirs[$cnt++] = $dir["NAME"];
                }
                $result->close();
            }
            $this->ConnectionObj->Disconnect();
        }
        return $dirs;
    }

    public function getDirectoryInfo($dir, $year) {
        include_once("../config.php");
        global $DB_NAME;
        $array = array();
        if ($this->ConnectionObj->Connect()) {
            //$q = "select sr.STATE, COUNT(sr.REC_ID) as NUM from " . $DB_NAME . ".tpl_shadow_root where DIRECTORY_REC_ID=" . $dir . " and DIRECTORY_YEAR='" . $year . "' GROUP BY STATE";
            $q = "SELECT sr.STATE, COUNT(sr.REC_ID) as NUM, CAST(CAST(SUM(sdo.COST_EXCL_GST) AS DECIMAL(9,0)) AS CHAR) AS TOTALREVENUE ";
            $q .= "FROM " . $DB_NAME . ".tpl_shadow_root sr ";
            $q .= "INNER JOIN " . $DB_NAME . ".tpl_shadow_directory_offering sdo ON sr.SHADOW_DIRECTORY_OFFERING_REC_ID = sdo.REC_ID ";
            $q .= "WHERE sr.DIRECTORY_REC_ID=" . $dir . " and sr.DIRECTORY_YEAR='" . $year . "' GROUP BY STATE;";
            $result = $this->ConnectionObj->doQuery($q);
            error_log("1.............................................");
            if ($result && $result->num_rows > 0) {
                while (($info = $result->fetch_array(MYSQLI_ASSOC)) == true) {
                    $array[$info["STATE"]]['NUMBER'] = $info["NUM"];
                    $array[$info["STATE"]]['REVENUE'] = $info["TOTALREVENUE"];
                }
                $result->close();
            }
            $this->SetDirectoryZeroValues($array);
            $this->SortDirectoryState($array);

            $this->ConnectionObj->Disconnect();
        }
        return $array;
    }

    public function SetDirectoryZeroValues(&$array) {
        if (!array_key_exists("OPEN", $array)) {
            $array["OPEN"]['NUMBER'] = 0;
            $array["OPEN"]['REVENUE'] = 0;
        }
        if (!array_key_exists("CLOSED", $array)) {
            $array["CLOSED"]['NUMBER'] = 0;
            $array["CLOSED"]['REVENUE'] = 0;
        }
        if (!array_key_exists("MERGED", $array)) {
            $array["MERGED"]['NUMBER'] = 0;
            $array["MERGED"]['REVENUE'] = 0;
        }
        return $array;
    }

    public function SortDirectoryState(&$array) {
        $sorted_array = array();
        if (array_key_exists('OPEN', $array))
            $sorted_array['OPEN'] = $array['OPEN'];
        if (array_key_exists('CLOSED', $array))
            $sorted_array['CLOSED'] = $array['CLOSED'];
        if (array_key_exists('MERGED', $array))
            $sorted_array['MERGED'] = $array['MERGED'];
        $array = $sorted_array;
        return $array;
    }

    public function ShowDirectoryList($id, $default_dir, $onChangeEvent) {
        if ($this->ConnectionObj->Connect()) {
            error_log("Default Directory:" . $default_dir['def_dir_rec_id']);
            error_log("Default Directory:" . $id);
            $dirs = $this->ConnectionObj->getDirectories();
            if ($dirs && $dirs->num_rows > 0) {
                echo "<select id=\"" . $id . "\" name=\"" . $id . "\" onChange=\"" . $onChangeEvent . "\">";
                echo '<option selected value="0">Select Default Directory</option>';
                while (($dir = $dirs->fetch_array(MYSQLI_ASSOC)) == true) {
                    $selected = "";
                    if ($dir['REC_ID'] == $default_dir['def_dir_rec_id'])
                        $selected = "SELECTED";
                    echo '<option ' . $selected . ' value="' . $dir['REC_ID'] . '">' . $dir['NAME'] . '</option>';
                }
                echo "</select>";
                $dirs->close();
            } else {
                echo "<select id=\"" . $id . "\" name=\"" . $id . "\" onChange=\"" . $onChangeEvent . "\">";
                echo '<option selected value="0">Select Default Directory</option>';
                echo "</select>";
            }

            $this->ConnectionObj->Disconnect();
        }
    }

    public function ShowDirectoryListHTML($id, $default_dir, $onChangeEvent) {
        if ($this->ConnectionObj->Connect()) {
            $dirs = $this->ConnectionObj->getDirectories();
            $varHTML = "";
            if ($dirs && $dirs->num_rows > 0) {

                $varHTML = $varHTML . "<select id=\"" . $id . "\" name=\"" . $id . "\" onChange=\"" . $onChangeEvent . "\">";
                $varHTML = $varHTML . "<option selected value=\"0\">Select Default Directory</option>";
                while (($dir = $dirs->fetch_array(MYSQLI_ASSOC)) == true) {
                    $selected = "";
                    if ($dir['REC_ID'] == $default_dir)
                        $selected = "SELECTED";
                    $varHTML = $varHTML . '<option ' . $selected . ' value="' . $dir['REC_ID'] . '">' . $dir['NAME'] . '</option>';
                }
                $varHTML = $varHTML . "</select>";
                $dirs->close();
            } else {

                $varHTML = $varHTML . "<select id=\"" . $id . "\" name=\"" . $id . "\" onChange=\"" . $onChangeEvent . "\">";
                $varHTML = $varHTML . '<option selected value="' . $id . '">' . $default_dir['def_dir_rec_id'] . '</option>';
                $varHTML = $varHTML . "</select>";
            }

            $this->ConnectionObj->Disconnect();

            return $varHTML;
        }
    }

    public function ShowDirectoryYear($id, $default_dir, $onChangeEvent) {
        if (is_numeric($default_dir['def_dir_rec_id'])) {
            if ($this->ConnectionObj->Connect()) {
                $avail_years = $this->ConnectionObj->getAvailableDirYear($default_dir['def_dir_rec_id']);
                if ($avail_years && $avail_years->num_rows > 0) {
                    echo "<select id=\"" . $id . "\" name=\"" . $id . "\" onChange=\"" . $onChangeEvent . "\" >";
                    while (($year = $avail_years->fetch_array(MYSQLI_ASSOC)) == true) {
                        $selected = "";
                        if ($year['CURRENT_YEAR'] == $default_dir['def_dir_year'])
                            $selected = "SELECTED";
                        echo '<option ' . $selected . ' value="' . $year['CURRENT_YEAR'] . '">' . $year['CURRENT_YEAR'] . '</option>';
                    }
                    echo "</select>";
                    $avail_years->close();
                } else {
                    echo "<select id=\"" . $id . "\" name=\"" . $id . "\" onChange=\"" . $onChangeEvent . "\">";
                    echo '<option selected value="' . $id . '">' . $default_dir['def_dir_year'] . '</option>';
                    echo "</select>";
                }
                $this->ConnectionObj->Disconnect();
            }
        } else {
            echo "<select id=\"" . $id . "\" name=\"" . $id . "\" onChange=\"" . $onChangeEvent . "\">";
            echo '<option selected value="' . $id . '">' . $default_dir['def_dir_year'] . '</option>';
            echo "</select>";
        }
    }

    public function ShowDirectoryYearPeriod($id, $default_dir, $onChangeEvent) {
//        if (is_numeric($default_dir['def_dir_rec_id'])) {
//            if ($this->ConnectionObj->Connect()) {
//                $avail_years = $this->ConnectionObj->getAvailableDirYear($default_dir['def_dir_rec_id']);
//                if ($avail_years && $avail_years->num_rows > 0) {
//                    echo "<select id=\"" . $id . "\" name=\"" . $id . "\" onChange=\"" . $onChangeEvent . "\"   style=\"width: 350px\">";
//                    while (($year = $avail_years->fetch_array(MYSQLI_ASSOC)) == true) {
//                        $selected = "";
//                        if ($year['CURRENT_YEAR'] == $default_dir['def_dir_year'])
//                            $selected = "SELECTED";
//                        echo '<option>' . date_format(date_create($year['START_DATE']), 'jS F Y') . '     to      ' . date_format(date_create($year['END_DATE']), 'jS F Y') . '</option>';
//                    }
//                    echo "</select>";
//                    $avail_years->close();
//                } else {
//                    echo "<select id=\"" . $id . "\" name=\"" . $id . "\" onChange=\"" . $onChangeEvent . "\">";
//                    echo '<option selected value="' . $id . '">' . $default_dir['def_dir_year'] . '</option>';
//                    echo "</select>";
//                }
//                $this->ConnectionObj->Disconnect();
//            }
//        } else {
//            echo "<select id=\"" . $id . "\" name=\"" . $id . "\" onChange=\"" . $onChangeEvent . "\">";
//            echo '<option selected value="' . $id . '">' . $default_dir['def_dir_year'] . '</option>';
//            echo "</select>";
//        }
    }

    public function ShowInitialContent($dir, $yr) {
//        $content = '';
//        echo'<table width="100%" border="0">';
//        $data = $this->getDirectoryInfo($dir, $yr);
//        while (list($key, $value) = each($data)) {
//            $content .= '<tr><td><b><small>' . $key . '</small></b></td><td align="right"><b><small>' . $value['NUMBER'] . '</small></b></td><td align="middle"><img src="images/' . $key . '.png"/></td><td><b><small> $' . $value['REVENUE'] . '</small></b></td></tr>';
//        }
//        echo $content;
//        echo'</table>';
    }

    // directory business procedures
    public function template_add($db, $name) {
        $result = false;
        if ($this->ConnectionObj->Connect()) {
            $template = $this->ConnectionObj->doQuery("SELECT * FROM tpl_admin_template WHERE NAME = ?", $name);
            if ($template->num_rows == 0) {
                // template name does not exist - create
                $this->ConnectionObj->doFreeResult();
                $qresult = $this->ConnectionObj->doQuery("INSERT INTO tpl_admin_template (NAME) VALUES (?)", mysql_real_escape_string($name));
                if (!$qresult) {
                    var_dump("Unable to add new template");
                } else {
                    $result = true;
                }
            } else {
                var_dump("Template name exist");
            }
            $this->ConnectionObj->Disconnect();
        }
        else
            var_dump("Connection failed");
        return $result;
    }

    public function template_save($ctype, $id, $collection) {
        $qresult = false;
        if ($this->ConnectionObj->Connect()) {
            switch ($ctype) {
                case BRAND_TYPE:
                    // D,Y,V,HT,H,BNT,SNT,SBLT
                    if ($id == "") { // new entry
                        $qresult = $this->ConnectionObj->doQuery("INSERT INTO tpl_admin_brand_template (
							DIRECTORY_REC_ID, RELEASE_YEAR, TEMPLATE_REC_ID, COMMENT_TAG, HEADER_TAG, BRANDNAME_TAG, 
							SUPPLIERNAME_TAG, SUPPLIERBRANDLOGO_TAG) VALUES (?,?,?,?,?,?,?,?)", $collection);
                    } else {  // existing entry
                        $newCollection = array_slice($collection, 3);
                        array_push($newCollection, $id);
                        $qresult = $this->ConnectionObj->doQuery("UPDATE tpl_admin_brand_template SET
							COMMENT_TAG = ?, HEADER_TAG = ?, BRANDNAME_TAG = ?, SUPPLIERNAME_TAG = ?, SUPPLIERBRANDLOGO_TAG = ? 
							WHERE REC_ID = ?", $newCollection);
                    }
                    break;
                case PRODUCT_TYPE:
                    // D,Y,V,HT,H,PNT,SNT,SPLT
                    if ($id == "") { // new entry
                        $qresult = $this->ConnectionObj->doQuery("INSERT INTO tpl_admin_product_template (
							DIRECTORY_REC_ID, RELEASE_YEAR, TEMPLATE_REC_ID, COMMENT_TAG, HEADER_TAG, PRODUCTNAME_TAG, 
							SUPPLIERNAME_TAG, PRODUCTLOGO_TAG) VALUES (?,?,?,?,?,?,?,?)", $collection);
                    } else {  // existing entry
                        $newCollection = array_slice($collection, 3);
                        array_push($newCollection, $id);
                        $qresult = $this->ConnectionObj->doQuery("UPDATE tpl_admin_product_template SET 
							COMMENT_TAG = ?, HEADER_TAG = ?, PRODUCTNAME_TAG = ?, SUPPLIERNAME_TAG = ?, PRODUCTLOGO_TAG = ?
							WHERE REC_ID = ?", $newCollection);
                    }
                    break;
                case SUPPLIER_TYPE:
                    // D,Y,V,HT,H,SH,LT,SCNT,CST,PyAT,PoAT,PT,FPT,FNT,FFNT,EAT,WT,CNT,KPT,KPNT,KPPT,KPET,KPPT,KPFT,BT,BNT,BPyAT,BPoAT,BPT,BFPT,BFNT,BFFT,BET
                    if ($id == "") {//new entry
                        $qresult = $this->ConnectionObj->doQuery("INSERT INTO tpl_admin_supplier_template (
							DIRECTORY_REC_ID, RELEASE_YEAR, TEMPLATE_REC_ID, COMMENT_TAG, HEADER_TAG, SUB_HEADER_TAG, LOGO_TAG, SUPPLIERNAME_TAG, 
							COMPANYSTATEMENT_TAG, PHYSICAL_ADDRESS_TAG, POSTAL_ADDRESS_TAG, PHONE_TAG, FREEPHONE_TAG,
							FAX_TAG, FREEFAX_TAG, EMAIL_TAG, WEBSITE_TAG, CONTACTNAME_TAG,
							KEYPERSONNEL_TAG, KEYPERSONNEL_NAME_TAG, KEYPERSONNEL_POSITION_TAG, KEYPERSONNEL_EMAIL_TAG, KEYPERSONNEL_PHONE_TAG, KEYPERSONNEL_FAX_TAG, 
							BRANCHES_TAG, BRANCH_NAME_TAG, BRANCH_PHYSICAL_ADDRESS_TAG, BRANCH_POSTAL_ADDRESS_TAG, BRANCH_PHONE_TAG, BRANCH_FREEPHONE_TAG,
							BRANCH_FAX_TAG, BRANCH_FREEFAX_TAG, BRANCH_EMAIL_TAG) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", $collection);
                    } else {
                        $newCollection = array_slice($collection, 3);
                        array_push($newCollection, $id);
                        $qresult = $this->ConnectionObj->doQuery("UPDATE tpl_admin_supplier_template SET
							COMMENT_TAG = ?, HEADER_TAG = ?, SUB_HEADER_TAG = ?, LOGO_TAG = ?, SUPPLIERNAME_TAG = ?, COMPANYSTATEMENT_TAG = ?, PHYSICAL_ADDRESS_TAG = ?, 
							POSTAL_ADDRESS_TAG = ?, PHONE_TAG = ?, FREEPHONE_TAG = ?, FAX_TAG = ?, FREEFAX_TAG = ?, EMAIL_TAG = ?, WEBSITE_TAG = ?, CONTACTNAME_TAG = ?, 
							KEYPERSONNEL_TAG = ?, KEYPERSONNEL_NAME_TAG = ?, KEYPERSONNEL_POSITION_TAG = ?, KEYPERSONNEL_EMAIL_TAG = ?, KEYPERSONNEL_PHONE_TAG = ?, KEYPERSONNEL_FAX_TAG = ?,
							BRANCHES_TAG = ?, BRANCH_NAME_TAG = ?, BRANCH_PHYSICAL_ADDRESS_TAG = ?, BRANCH_POSTAL_ADDRESS_TAG = ?, 
							BRANCH_PHONE_TAG = ?, BRANCH_FREEPHONE_TAG = ?, BRANCH_FAX_TAG = ?, BRANCH_FREEFAX_TAG = ?, BRANCH_EMAIL_TAG = ?
							WHERE REC_ID = ?", $newCollection);
                    }
                    break;
                case SHAWS_SPECIAL_TYPE:
                    if ($id == "") { //new etry
                        $qresult = $this->ConnectionObj->doQuery("INSERT INTO " . $ADMIN_DB_NAME . ".tpl_admin_shaws_template (
							DIRECTORY_REC_ID, 
							RELEASE_YEAR, 
							TEMPLATE_REC_ID, 
							COMMENT_TAG, 
							HEADER_TAG, 
							SUPPLIERNAME_TAG,
							COMPANYSTATEMENT_TAG, 
							PHYSICAL_ADDRESS_TAG, 
							POSTAL_ADDRESS_TAG, 
							PHONE_TAG, 
							FREEPHONE_TAG,
							FAX_TAG, 
							FREEFAX_TAG, 
							EMAIL_TAG, 
							WEBSITE_TAG, 
							DISTRIBUTORSNAME_TAG, 
							PERSONNELNAME_TAG,
							PERSONNELPHONE_TAG, 
							PERSONNEL_FAX_TAG, 
							PERSONNEL_EMAIL_TAG,
							BRANCHES_TAG, 
							BRANCH_NAME_TAG,
							BRANCH_PHYSICAL_ADDRESS_TAG, 
							BRANCH_POSTAL_ADDRESS_TAG, 
							BRANCH_PHONE_TAG, 
							BRANCH_FREEPHONE_TAG,
							BRANCH_FAX_TAG, 
							BRANCH_FREEFAX_TAG, 
							BRANCH_EMAIL_TAG, 
							BRAND_HEADING_TAG, 
							BRAND_NAME_TAG, 
							BRAND_LIST_HEADING_TAG,
							BRAND_LIST_NAME_TAG, 
							BRAND_LIST_SUPPLIER_TAG, 
							DRINK_TYPE_INDEX_HEADING_TAG, 
							DRINK_TYPE_INDEX_CATEGORY_NAME_TAG, 
							DRINK_TYPE_INDEX_NAME_TAG, 
							DRINK_TYPE_HEADING_TAG, 
							DRINK_TYPE_CATEGORY_NAME_TAG, 
							DRINK_TYPE_NAME_TAG,
							DRINK_TYPE_PRODUCT_INFO_TAG, 
							DRINK_TYPE_PRODUCT_NAME_TAG) 
							VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", $collection);
                    } else {
                        $newCollection = array_slice($collection, 3);
                        array_push($newCollection, $id);
                        $qresult = $this->ConnectionObj->doQuery("UPDATE tpl_admin_shaws_template SET
							COMMENT_TAG = ?, HEADER_TAG = ?, SUPPLIERNAME_TAG = ?, COMPANYSTATEMENT_TAG = ?,
							PHYSICAL_ADDRESS_TAG = ?, POSTAL_ADDRESS_TAG = ?, PHONE_TAG = ?, FREEPHONE_TAG = ?,
							FAX_TAG = ?, FREEFAX_TAG = ?, EMAIL_TAG = ?, WEBSITE_TAG = ?, DISTRIBUTORSNAME_TAG = ?, PERSONNELNAME_TAG = ?,
							PERSONNELPHONE_TAG = ?, PERSONNEL_FAX_TAG = ?, PERSONNEL_EMAIL_TAG = ?, BRANCHES_TAG = ?, BRANCH_NAME_TAG = ?,
							BRANCH_PHYSICAL_ADDRESS_TAG = ?, BRANCH_POSTAL_ADDRESS_TAG = ?, BRANCH_PHONE_TAG = ?, BRANCH_FREEPHONE_TAG = ?,
							BRANCH_FAX_TAG = ?, BRANCH_FREEFAX_TAG = ?, BRANCH_EMAIL_TAG = ?, BRAND_HEADING_TAG = ?, BRAND_NAME_TAG = ?, BRAND_LIST_HEADING_TAG = ?,
							BRAND_LIST_NAME_TAG = ?, BRAND_LIST_SUPPLIER_TAG = ?, DRINK_TYPE_INDEX_HEADING_TAG = ?, DRINK_TYPE_INDEX_CATEGORY_NAME_TAG = ?,
							DRINK_TYPE_INDEX_NAME_TAG = ?, DRINK_TYPE_HEADING_TAG = ?, DRINK_TYPE_CATEGORY_NAME_TAG = ?, DRINK_TYPE_NAME_TAG = ?,
							DRINK_TYPE_PRODUCT_INFO_TAG = ?, DRINK_TYPE_PRODUCT_NAME_TAG = ? WHERE REC_ID = ?", $newCollection);
                    }
                    break;
            }
            $this->ConnectionObj->Disconnect();
        }
        else
            var_dump("Connection failed");
        return $qresult;
    }

    public function get_template($directory, $type, $year, $version) {
        //global $ADMIN_DB_NAME;
        $template = Array();
        if ($this->ConnectionObj->Connect()) {
            switch ($type) {
                default:
                case BRAND_TYPE:
                    $tablename = "tpl_admin_brand_template";
                    break;
                case PRODUCT_TYPE:
                    $tablename = "tpl_admin_product_template";
                    break;
                case SUPPLIER_TYPE:
                    $tablename = "tpl_admin_supplier_template";
                    break;
                case SHAWS_SPECIAL_TYPE:
                    $tablename = "tpl_admin_shaws_template";
                    break;
            }
            $templateRecord = $this->ConnectionObj->doQuery("SELECT * from " . $tablename . " WHERE RELEASE_YEAR = ? and TEMPLATE_REC_ID = ? and DIRECTORY_REC_ID = ?", array($year, $version, $directory));
            $this->ConnectionObj->Disconnect();
            $template = $templateRecord->fetch_array(MYSQLI_ASSOC); // should only one entry.
        }
        else
            var_dump("Connection failed");
        return $template;
    }

    public function get_clientinsupplier_info($name, $year) {
        global $ADMIN_DB_NAME, $DB_NAME;
        $record = "";
        $this->ConnectionObj = new DataConnection(MYSQLI, $ADMIN_DB_NAME);
        if ($this->ConnectionObj->Connect()) {
            $records = $this->ConnectionObj->doStoredProcQuery("CALL GetClientSupplierType('" . $DB_NAME . "','" . $name . "','" . $year . "')");
            if ($records && $records->num_rows > 0) {
                $info = $records->fetch_array(MYSQLI_ASSOC);
                $record = "SHADOW_ID: " . $info['REC_ID'] . "\rCLIENT NAME: " . $info['SUPPLIER_NAME'] . "\rPROOF NAME: " . $info['PROOF_NAME'] . "\rSUPPLIER TYPE: " . $info['SUPPLIER_TYPE'] . "\rSTATUS: " . $info['STATE'];
            }
            $this->ConnectionObj->doFreeResult();
        }
        return $record;
    }

    public function CreateDummyLiveDb($dbname) {
        global $DBM_USER, $DBM_PASS;
        $bProceedTable = false;
        $this->ConnectionObj = new DataConnection(MYSQLI, $DBM_USER, $DBM_PASS);
        if ($this->ConnectionObj->Connect()) {
            if ($this->ConnectionObj->doSelectDb($dbname) == false) { // create
                $res = $this->ConnectionObj->doQuery("CREATE DATABASE " . $dbname);
                if ($res)
                    $res = $this->ConnectionObj->doSelectDb($dbname);
                if ($res) {
                    $bProceedTable = true;
                } else {
                    $bProceedTable = false;
                }
            } else { // db exist already - assume tables are complete.
                $this->ConnectionObj->Disconnect();
                return true;
            }
        }
        if ($bProceedTable) {
            $bProceedTable = false; //reset
            var_dump("creating tpl_client table");
            $client_table = "CREATE TABLE `tpl_client` (
			`REC_ID` int(11) unsigned NOT NULL AUTO_INCREMENT,
			`REC_DATETIME` datetime NOT NULL,
			`REC_TIMESTAMP` datetime NOT NULL,
			`NAME` varchar(255) NOT NULL DEFAULT '',
			`TRADING_AS_NAME` varchar(255) DEFAULT NULL,
			`TELEPHONE_NO` varchar(48) DEFAULT NULL,
			`FREE_TELEPHONE_NO` varchar(48) DEFAULT NULL, 
			`FAX_NO` varchar(48) DEFAULT NULL,
			`FREE_FAX_NO` varchar(48) DEFAULT NULL,
			`EMAIL_ADDRESS` varchar(255) DEFAULT NULL,
			`WEBSITE_ADDRESS` varchar(255) DEFAULT NULL,
			`PHYSICAL_ADDRESS_BUILDING_ADDRESS` varchar(255) DEFAULT NULL,
			`PHYSICAL_ADDRESS_STREET_ADDRESS` varchar(255) DEFAULT NULL,
			`PHYSICAL_ADDRESS_SUBURB` varchar(255) DEFAULT NULL,
			`PHYSICAL_ADDRESS_CITY` varchar(255) DEFAULT NULL,
			`PHYSICAL_ADDRESS_STATE` varchar(255) DEFAULT NULL,
			`PHYSICAL_ADDRESS_COUNTRY` varchar(255) DEFAULT NULL,
			`PHYSICAL_ADDRESS_POST_CODE` varchar(12) DEFAULT NULL,
			`POSTAL_ADDRESS_BUILDING_ADDRESS` varchar(255) DEFAULT NULL,
			`POSTAL_ADDRESS_STREET_ADDRESS` varchar(255) DEFAULT NULL,
			`POSTAL_ADDRESS_SUBURB` varchar(255) DEFAULT NULL,
			`POSTAL_ADDRESS_CITY` varchar(255) DEFAULT NULL,
			`POSTAL_ADDRESS_STATE` varchar(255) DEFAULT NULL,
			`POSTAL_ADDRESS_COUNTRY` varchar(255) DEFAULT NULL,
			`POSTAL_ADDRESS_POST_CODE` varchar(12) DEFAULT NULL,
			PRIMARY KEY (`REC_ID`) )";
            $bProceedTable = $this->ConnectionObj->doQuery($client_table);
            if ($bProceedTable) {
                var_dump("creating tpl_supplier table");
                $supplier_table = "CREATE TABLE `tpl_supplier` (
				`REC_ID` int(11) unsigned NOT NULL AUTO_INCREMENT,
				`REC_DATETIME` datetime NOT NULL,
				`REC_TIMESTAMP` datetime NOT NULL,
				`CLIENT_REC_ID` int(11) unsigned NOT NULL,
				`NAME` varchar(255) NOT NULL DEFAULT '',
				`TRADING_AS_NAME` varchar(255) DEFAULT NULL,
				`CONTACT_NAME` varchar(255) DEFAULT NULL,
				`CONTACT_POSITION` varchar(255) DEFAULT NULL,
				`TELEPHONE_NO` varchar(48) DEFAULT NULL,
				`FREE_TELEPHONE_NO` varchar(48) DEFAULT NULL,
				`FAX_NO` varchar(48) DEFAULT NULL,
				`FREE_FAX_NO` varchar(48) DEFAULT NULL,
				`EMAIL_ADDRESS` varchar(255) DEFAULT NULL,
				`WEBSITE_ADDRESS` varchar(255) DEFAULT NULL,
				`PHYSICAL_ADDRESS_BUILDING_ADDRESS` varchar(255) DEFAULT NULL,
				`PHYSICAL_ADDRESS_STREET_ADDRESS` varchar(255) DEFAULT NULL,
				`PHYSICAL_ADDRESS_SUBURB` varchar(255) DEFAULT NULL,
				`PHYSICAL_ADDRESS_CITY` varchar(255) DEFAULT NULL,
				`PHYSICAL_ADDRESS_STATE` varchar(255) DEFAULT NULL,
				`PHYSICAL_ADDRESS_COUNTRY` varchar(255) DEFAULT NULL,
				`PHYSICAL_ADDRESS_POST_CODE` varchar(12) DEFAULT NULL,
				`POSTAL_ADDRESS_BUILDING_ADDRESS` varchar(255) DEFAULT NULL,
				`POSTAL_ADDRESS_STREET_ADDRESS` varchar(255) DEFAULT NULL,
				`POSTAL_ADDRESS_SUBURB` varchar(255) DEFAULT NULL,
				`POSTAL_ADDRESS_CITY` varchar(255) DEFAULT NULL,
				`POSTAL_ADDRESS_STATE` varchar(255) DEFAULT NULL,
				`POSTAL_ADDRESS_COUNTRY` varchar(255) DEFAULT NULL,
				`POSTAL_ADDRESS_POST_CODE` varchar(12) DEFAULT NULL,
				`COMPANY_PROFILE_TEXT` text,
				`PRINT_LOGO_LOCATION` varchar(255) DEFAULT NULL,
				`WEB_LOGO_LOCATION` varchar(255) DEFAULT NULL,
				`SUPPLIER_TYPE_REC_ID` int(11) unsigned DEFAULT NULL,
				PRIMARY KEY (`REC_ID`) )";
                $bProceedTable = $this->ConnectionObj->doQuery($supplier_table);
                if ($bProceedTable) {
                    var_dump("creating tpl_supplier_directory table");
                    $supplierdir_table = "CREATE TABLE `tpl_supplier_directory` (
					`REC_ID` int(11) unsigned NOT NULL AUTO_INCREMENT,
					`REC_DATETIME` datetime NOT NULL,
					`REC_TIMESTAMP` datetime NOT NULL,
					`SUPPLIER_REC_ID` int(11) unsigned NOT NULL,
					`DIRECTORY_REC_ID` int(11) unsigned NOT NULL,
					`DIRECTORY_YEAR` varchar(4) DEFAULT NULL,
					`SHADOW_ROOT_REC_ID` int(11) unsigned DEFAULT NULL,
					PRIMARY KEY (`REC_ID`) )";
                    $bProceedTable = $this->ConnectionObj->doQuery($supplierdir_table);
                    if ($bProceedTable) {
                        var_dump("creating tpl_supplier_branch table");
                        $supplierbranch_table = "CREATE TABLE `tpl_supplier_branch` (
						`REC_ID` int(11) unsigned NOT NULL AUTO_INCREMENT,
						`REC_DATETIME` datetime NOT NULL,
						`REC_TIMESTAMP` datetime NOT NULL,
						`SUPPLIER_REC_ID` int(11) unsigned NOT NULL,
						`ORDER` int(11) DEFAULT NULL,
						`NAME` varchar(255) NOT NULL DEFAULT '',
						`TELEPHONE_NO` varchar(48) DEFAULT NULL,
						`FREE_TELEPHONE_NO` varchar(48) DEFAULT NULL,
						`FAX_NO` varchar(48) DEFAULT NULL,
						`FREE_FAX_NO` varchar(48) DEFAULT NULL,
						`EMAIL_ADDRESS` varchar(255) DEFAULT NULL,
						PHYSICAL_ADDRESS_BUILDING_ADDRESS varchar(255) DEFAULT NULL,
						PHYSICAL_ADDRESS_STREET_ADDRESS varchar(255) DEFAULT NULL,
						PHYSICAL_ADDRESS_SUBURB varchar(255) DEFAULT NULL,
						PHYSICAL_ADDRESS_CITY varchar(255) DEFAULT NULL,
						PHYSICAL_ADDRESS_STATE varchar(255) DEFAULT NULL,
						PHYSICAL_ADDRESS_COUNTRY varchar(255) DEFAULT NULL,
						PHYSICAL_ADDRESS_POST_CODE varchar(12) DEFAULT NULL,
						POSTAL_ADDRESS_BUILDING_ADDRESS varchar(255) DEFAULT NULL,
						POSTAL_ADDRESS_STREET_ADDRESS varchar(255) DEFAULT NULL,
						POSTAL_ADDRESS_SUBURB varchar(255) DEFAULT NULL,
						POSTAL_ADDRESS_CITY varchar(255) DEFAULT NULL,
						POSTAL_ADDRESS_STATE varchar(255) DEFAULT NULL,
						POSTAL_ADDRESS_COUNTRY varchar(255) DEFAULT NULL,
						POSTAL_ADDRESS_POST_CODE varchar(12) DEFAULT NULL,
						PRIMARY KEY (REC_ID) )";
                        $bProceedTable = $this->ConnectionObj->doQuery($supplierbranch_table);
                        if ($bProceedTable) {
                            var_dump("creating tpl_supplier_brand table");
                            $supplierbrand_table = "CREATE TABLE `tpl_supplier_brand` (
							`REC_ID` int(11) unsigned NOT NULL AUTO_INCREMENT,
							`REC_DATETIME` datetime NOT NULL,
							`REC_TIMESTAMP` datetime NOT NULL,
							`SUPPLIER_REC_ID` int(11) unsigned NOT NULL,
							`BRAND_REC_ID` int(11) unsigned NOT NULL,
							`IS_LOGO_LISTING` tinyint(1) DEFAULT NULL,
							PRIMARY KEY (`REC_ID`) )";
                            $bProceedTable = $this->ConnectionObj->doQuery($supplierbrand_table);
                            if ($bProceedTable) {
                                var_dump("creating tpl_supplier_key_personnel table");
                                $supplierkeyperson_table = "CREATE TABLE `tpl_supplier_key_personnel` (
								`REC_ID` int(11) unsigned NOT NULL AUTO_INCREMENT,
								`REC_DATETIME` datetime NOT NULL,
								`REC_TIMESTAMP` datetime NOT NULL,
								`SUPPLIER_REC_ID` int(11) unsigned NOT NULL,
								`ORDER` int(11) DEFAULT NULL,
								`NAME` varchar(255) NOT NULL DEFAULT '',
								POSITION varchar(255) DEFAULT NULL,
								TELEPHONE_NO varchar(48) DEFAULT NULL,
								FAX_NO varchar(48) DEFAULT NULL,
								EMAIL_ADDRESS varchar(255) DEFAULT NULL,
								PHYSICAL_ADDRESS_BUILDING_ADDRESS varchar(255) DEFAULT NULL,
							 	PHYSICAL_ADDRESS_STREET_ADDRESS varchar(255) DEFAULT NULL,
							  	PHYSICAL_ADDRESS_SUBURB varchar(255) DEFAULT NULL,
							  	PHYSICAL_ADDRESS_CITY varchar(255) DEFAULT NULL,
							  	PHYSICAL_ADDRESS_STATE varchar(255) DEFAULT NULL,
							  	PHYSICAL_ADDRESS_COUNTRY varchar(255) DEFAULT NULL,
							  	PHYSICAL_ADDRESS_POST_CODE varchar(12) DEFAULT NULL,
							  	POSTAL_ADDRESS_BUILDING_ADDRESS varchar(255) DEFAULT NULL,
							  	POSTAL_ADDRESS_STREET_ADDRESS varchar(255) DEFAULT NULL,
							  	POSTAL_ADDRESS_SUBURB varchar(255) DEFAULT NULL,
							  	POSTAL_ADDRESS_CITY varchar(255) DEFAULT NULL,
							 	POSTAL_ADDRESS_STATE varchar(255) DEFAULT NULL,
							  	POSTAL_ADDRESS_COUNTRY varchar(255) DEFAULT NULL,
							  	POSTAL_ADDRESS_POST_CODE varchar(12) DEFAULT NULL,
							  	PRIMARY KEY (`REC_ID`) )";
                                $bProceedTable = $this->ConnectionObj->doQuery($supplierkeyperson_table);
                                if ($bProceedTable) {
                                    var_dump("creating tpl_product table");
                                    $product_table = "CREATE TABLE `tpl_product` (
								  	`REC_ID` int(11) unsigned NOT NULL AUTO_INCREMENT,
								 	`REC_DATETIME` datetime NOT NULL,
								  	`REC_TIMESTAMP` datetime NOT NULL,
								  	`PRODUCT_CATEGORY_REC_ID` int(11) unsigned NOT NULL,
								  	`SUPPLIER_REC_ID` int(11) unsigned NOT NULL,
								  	`DIRECTORY_REC_ID` int(11) unsigned NOT NULL,
								  	`BRAND_REC_ID` int(11) unsigned DEFAULT NULL,
								  	`LABEL_NAME` varchar(255) NOT NULL DEFAULT '',
								  	`VARIETAL` varchar(255) DEFAULT NULL,
								  	`VINTAGE` varchar(255) DEFAULT NULL,
								  	`REGION_OF_ORIGIN` varchar(255) DEFAULT NULL,
								  	`COUNTRY_OF_ORIGIN` varchar(255) DEFAULT NULL,
								  	`IS_LOGO_LISTING` tinyint(1) DEFAULT NULL,
								  	`TEXT` text,
								  	`PRINT_IMAGE_LOCATION` varchar(255) DEFAULT NULL,
								  	`WEB_IMAGE_LOCATION` varchar(255) DEFAULT NULL,
								  	PRIMARY KEY (`REC_ID`) )";
                                    $bProceedTable = $this->ConnectionObj->doQuery($product_table);
                                    if ($bProceedTable) {
                                        $producat_table = "CREATE TABLE `tpl_supplier_product_category` (
									  	`REC_ID` int(11) unsigned NOT NULL AUTO_INCREMENT,
										`REC_DATETIME` datetime NOT NULL,
										`REC_TIMESTAMP` datetime NOT NULL,
										`SUPPLIER_REC_ID` int(11) unsigned NOT NULL,
										`PRODUCT_CATEGORY_REC_ID` int(11) unsigned NOT NULL,
										`IS_LOGO_LISTING` tinyint(1) DEFAULT NULL,
										PRIMARY KEY (`REC_ID`) )";
                                        $bProceedTable = $this->ConnectionObj->doQuery($producat_table);
                                        if (!$bProceedTable) {
                                            var_dump("Failed to create 'tpl_supplier_product_category' table. Unable to proceed.");
                                        } else {
                                            $this->ConnectionObj->Disconnect(); // disconnect here
                                        }
                                    } else {
                                        var_dump("Failed to create 'tpl_product' table. Unable to proceed.");
                                    }
                                } else {
                                    var_dump("Failed to create 'tpl_supplier_key_personnel' table. Unable to proceed.");
                                }
                            } else {
                                var_dump("Failed to create 'tpl_supplier_key_brand' table. Unable to proceed.");
                            }
                        } else {
                            var_dump("Failed to create 'tpl_supplier_branch' table. Unable to proceed.");
                        }
                    } else {
                        var_dump("Failed to create 'tpl_supplier_directory' table. Unable to proceed.");
                    }
                } else {
                    var_dump("Failed to create 'tpl_supplier' table. Unable to proceed.");
                }
            } else {
                var_dump("Failed to create 'tpl_client' table. Unable to proceed.");
            }
        } else {
            var_dump("Problem in creating dummy database. Cannot proceed in creating tables.");
        }

        return $bProceedTable;
    }

}

?>