<?php //
 $path_doc_root = $_SERVER["DOCUMENT_ROOT"];
 include_once $path_doc_root."/config.php";
// db connections & credentials, drec, maxr, page and rad
 include_once $path_doc_root."/include/db_class.php";
//require $path_doc_root."/include/debuglog.php";

class tpldb {

    function isSystemUser($user_id, $password) { // return error message 
        // user_id is an email address
        $db = new Db;
        $retval = INVALID_USER;
        $user = $db->getrow("(USER_NAME = '$user_id')", "ROX_ZONE_SYSTEM_USER");
        if ($user) {
            if (md5($password . "\n") == $user["PASSWORD"]) {
                $retval = IS_SYSTEM_USER;
            } else {
                $retval = INVALID_PASSWORD;
            }
        }

        return $retval;
    }

    function isShadowUser($user_id, $password) { // return error message 
        // user_id is an email address
        $db = new Db;
        $retval = INVALID_USER;
        $user = $db->getrow("(USERNAME = '$user_id')", "tpl_shadow_root");
        if ($user) {
            if ($password == $user["PASSWORD"]) {
                $retval = IS_SHADOW_USER;
            } else {
                $retval = INVALID_PASSWORD;
            }
        }

        return $retval;
    }
    function getPortalUser($user_id, $password) { // return error message 
        // user_id is an email address
        $db = new Db;       
        $user = $db->getrow("(USERNAME = '$user_id')", "tpl_client");  
        return $user;
    }
    function isExistEmail($email) { // return error message 
        // user_id is an email address
        $db = new Db;
        $retval = "Email OK";
         error_log("KKKKKKKKKKKKKKKKKKKKKKk.....................");
        $client = $db->getrow("(EMAIL_ADDRESS = '$email')", "tpl_client");
        error_log("TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTt");
        if ($client) {
           error_log("TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTt: INSIDE"); 
           $retval="Email Already Exist";
        }
        return $retval;
    }
    function getClient($email) { // return error message 
        // user_id is an email address
        $db = new Db;
        $retval = "Email OK";
        $client = $db->getrow("(EMAIL_ADDRESS = '$email')", "tpl_client");      
        return $client;
    }
    function getShadowRootOfUser($user_id) {
        $shadow_root = NULL;
        $db = new Db;
        $shadow_root = $db->getrow("(USERNAME = '$user_id')", "tpl_shadow_root");
        return $shadow_root;
    }
    
     function getShadowRecordsOfUser($user_id) {
         // collect all the 
        $query = 'SELECT * FROM tpl_shadow_root sr ';
        $query .= 'WHERE sr.CLIENT_REC_ID = '.$user_id.';';
        $db = new Db;
        $shadow_records = $db->openquery($query);
        return $shadow_records;
    }

    function GetBrandMatch($directory_rec_id, $keyword) {
        $db = new Db;

        $query = 'SELECT tpl_brand.NAME, tpl_brand.REC_ID FROM tpl_brand_directory
                  INNER JOIN tpl_brand ON (tpl_brand_directory.BRAND_REC_ID = tpl_brand.REC_ID)
                  WHERE
                  tpl_brand.NAME LIKE "%' . $keyword . '%" AND 
                  tpl_brand_directory.DIRECTORY_REC_ID = ' . $directory_rec_id . '
                  ORDER BY tpl_brand.NAME;';

        $resultset = $db->openquery($query);
        return $resultset;
    }

    public static function getRegions() {
        $db = new Db;
        $query = 'SELECT DISTINCT PHYSICAL_ADDRESS_STATE FROM tpl_supplier WHERE PHYSICAL_ADDRESS_STATE IS NOT NULL AND PHYSICAL_ADDRESS_STATE <> \'\' AND PHYSICAL_ADDRESS_COUNTRY = \'New Zealand\' ORDER BY PHYSICAL_ADDRESS_LATITUDE DESC;;';
        $resultset = $db->openquery($query);
        return $resultset;
    }

    public static function getSupplierByID($srec) {
        $db = new Db;
        $query = 'SELECT tpl_supplier.REC_ID AS SUPPLIER_REC_ID, tpl_supplier.CLIENT_REC_ID, SUPPLIER_TYPE_REC_ID, tpl_supplier.NAME AS SUPPLIER_NAME, TRADING_AS_NAME, CONTACT_NAME, CONTACT_POSITION, TELEPHONE_NO, FREE_TELEPHONE_NO, ';
        $query .= 'FAX_NO, FREE_FAX_NO, EMAIL_ADDRESS, WEBSITE_ADDRESS, PHYSICAL_ADDRESS_BUILDING_ADDRESS, PHYSICAL_ADDRESS_STREET_ADDRESS, PHYSICAL_ADDRESS_SUBURB, PHYSICAL_ADDRESS_CITY, ';
        $query .= 'PHYSICAL_ADDRESS_STATE, PHYSICAL_ADDRESS_COUNTRY, PHYSICAL_ADDRESS_POST_CODE, PHYSICAL_ADDRESS_PXID, PHYSICAL_ADDRESS_DPID, PHYSICAL_ADDRESS_LATITUDE, PHYSICAL_ADDRESS_LONGITUDE, ';
        $query .= 'PHYSICAL_ADDRESS_HEIGHT, PHYSICAL_ADDRESS_COMPLETE, POSTAL_ADDRESS_BUILDING_ADDRESS, POSTAL_ADDRESS_STREET_ADDRESS, POSTAL_ADDRESS_SUBURB, POSTAL_ADDRESS_CITY, POSTAL_ADDRESS_STATE, ';
        $query .= 'POSTAL_ADDRESS_COUNTRY, POSTAL_ADDRESS_POST_CODE, COMPANY_PROFILE_TEXT, PRINT_LOGO_LOCATION, WEB_LOGO_LOCATION , FACEBOOK_ADDRESS_URL, TWITTER_ADDRESS_URL, LINKEDIN_ADDRESS_URL, ';
        $query .= 'YOUTUBE_ADDRESS_URL, FOURSQUARE_ADDRESS_URL, tpl_shadow_root.DIRECTORY_REC_ID, tpl_shadow_root.DIRECTORY_YEAR, SHADOW_DIRECTORY_OFFERING_REC_ID, STATE, PROOF_NAME, PROOF_POSITION, TRANSACTION_TOTAL_INCL_GST, ';
        $query .= 'TOTAL_PAID_TO_DATE, SHADOW_REC_ID, MASTER_REC_ID, tpl_shadow_directory_offering.NAME AS DIRECTORY_OFFER ';
        $query .= 'FROM tpl_supplier ';
        $query .= "INNER JOIN tpl_shadow_root ON (tpl_supplier.REC_ID = tpl_shadow_root.CLIENT_REC_ID) ";
        $query .= "INNER JOIN tpl_shadow_directory_offering ON (tpl_shadow_root.SHADOW_DIRECTORY_OFFERING_REC_ID = tpl_shadow_directory_offering.REC_ID) ";
        $query .= 'WHERE tpl_supplier.REC_ID = ' . $srec;
        $resultset = $db->openquery($query);
        return $resultset;
    }

    public static function getSuppliersByRegion($sreg, $drec) {
        $db = new Db;
        $query = 'SELECT tpl_supplier.REC_ID AS SUPPLIER_REC_ID, tpl_supplier.CLIENT_REC_ID, SUPPLIER_TYPE_REC_ID, tpl_supplier.NAME AS SUPPLIER_NAME, TRADING_AS_NAME, CONTACT_NAME, CONTACT_POSITION, TELEPHONE_NO, FREE_TELEPHONE_NO, ';
        $query .= 'FAX_NO, FREE_FAX_NO, EMAIL_ADDRESS, WEBSITE_ADDRESS, PHYSICAL_ADDRESS_BUILDING_ADDRESS, PHYSICAL_ADDRESS_STREET_ADDRESS, PHYSICAL_ADDRESS_SUBURB, PHYSICAL_ADDRESS_CITY, ';
        $query .= 'PHYSICAL_ADDRESS_STATE, PHYSICAL_ADDRESS_COUNTRY, PHYSICAL_ADDRESS_POST_CODE, PHYSICAL_ADDRESS_PXID, PHYSICAL_ADDRESS_DPID, PHYSICAL_ADDRESS_LATITUDE, PHYSICAL_ADDRESS_LONGITUDE, ';
        $query .= 'PHYSICAL_ADDRESS_HEIGHT, PHYSICAL_ADDRESS_COMPLETE, POSTAL_ADDRESS_BUILDING_ADDRESS, POSTAL_ADDRESS_STREET_ADDRESS, POSTAL_ADDRESS_SUBURB, POSTAL_ADDRESS_CITY, POSTAL_ADDRESS_STATE, ';
        $query .= 'POSTAL_ADDRESS_COUNTRY, POSTAL_ADDRESS_POST_CODE, COMPANY_PROFILE_TEXT, PRINT_LOGO_LOCATION, WEB_LOGO_LOCATION , FACEBOOK_ADDRESS_URL, TWITTER_ADDRESS_URL, LINKEDIN_ADDRESS_URL, ';
        $query .= 'YOUTUBE_ADDRESS_URL, FOURSQUARE_ADDRESS_URL, tpl_shadow_root.DIRECTORY_REC_ID, tpl_shadow_root.DIRECTORY_YEAR, SHADOW_DIRECTORY_OFFERING_REC_ID, STATE, PROOF_NAME, PROOF_POSITION, TRANSACTION_TOTAL_INCL_GST, ';
        $query .= 'TOTAL_PAID_TO_DATE, SHADOW_REC_ID, MASTER_REC_ID, tpl_shadow_directory_offering.NAME AS DIRECTORY_OFFER ';
        $query .= 'FROM tpl_supplier ';
        $query .= "INNER JOIN tpl_shadow_root ON (tpl_supplier.CLIENT_REC_ID = tpl_shadow_root.CLIENT_REC_ID) ";
        $query .= "INNER JOIN tpl_shadow_directory_offering ON (tpl_shadow_root.SHADOW_DIRECTORY_OFFERING_REC_ID = tpl_shadow_directory_offering.REC_ID) ";
        $query .= "WHERE PHYSICAL_ADDRESS_STATE = \"" . $sreg . "\"AND ";
        $query .= "tpl_shadow_root.DIRECTORY_REC_ID = " . $drec . " AND ";
        $query .= "tpl_shadow_root.STATE = 'MERGED' ";
        $query .= "ORDER BY TRANSACTION_TOTAL_INCL_GST DESC, ";
        $query .= "tpl_supplier.NAME;";
        $resultset = $db->openquery($query);
        return $resultset;
    }

    public static function getSuppliersByLocation($lat, $lng, $radius, $drec) {
        $db = new Db;
        $query = 'SELECT tpl_supplier.REC_ID AS SUPPLIER_REC_ID, tpl_supplier.CLIENT_REC_ID, SUPPLIER_TYPE_REC_ID, tpl_supplier.NAME AS SUPPLIER_NAME, TRADING_AS_NAME, CONTACT_NAME, CONTACT_POSITION, TELEPHONE_NO, FREE_TELEPHONE_NO, ';
        $query .= 'FAX_NO, FREE_FAX_NO, EMAIL_ADDRESS, WEBSITE_ADDRESS, PHYSICAL_ADDRESS_BUILDING_ADDRESS, PHYSICAL_ADDRESS_STREET_ADDRESS, PHYSICAL_ADDRESS_SUBURB, PHYSICAL_ADDRESS_CITY, ';
        $query .= 'PHYSICAL_ADDRESS_STATE, PHYSICAL_ADDRESS_COUNTRY, PHYSICAL_ADDRESS_POST_CODE, PHYSICAL_ADDRESS_PXID, PHYSICAL_ADDRESS_DPID, PHYSICAL_ADDRESS_LATITUDE, PHYSICAL_ADDRESS_LONGITUDE, ';
        $query .= 'PHYSICAL_ADDRESS_HEIGHT, PHYSICAL_ADDRESS_COMPLETE, POSTAL_ADDRESS_BUILDING_ADDRESS, POSTAL_ADDRESS_STREET_ADDRESS, POSTAL_ADDRESS_SUBURB, POSTAL_ADDRESS_CITY, POSTAL_ADDRESS_STATE, ';
        $query .= 'POSTAL_ADDRESS_COUNTRY, POSTAL_ADDRESS_POST_CODE, COMPANY_PROFILE_TEXT, PRINT_LOGO_LOCATION, WEB_LOGO_LOCATION , FACEBOOK_ADDRESS_URL, TWITTER_ADDRESS_URL, LINKEDIN_ADDRESS_URL, ';
        $query .= 'YOUTUBE_ADDRESS_URL, FOURSQUARE_ADDRESS_URL, tpl_shadow_root.DIRECTORY_REC_ID, tpl_shadow_root.DIRECTORY_YEAR, SHADOW_DIRECTORY_OFFERING_REC_ID, STATE, PROOF_NAME, PROOF_POSITION, TRANSACTION_TOTAL_INCL_GST, ';
        $query .= 'TOTAL_PAID_TO_DATE, SHADOW_REC_ID, MASTER_REC_ID, tpl_shadow_directory_offering.NAME AS DIRECTORY_OFFER, ';
        $query .= '( 6371 * acos( cos( radians(' . $lat . ') ) * cos( radians( PHYSICAL_ADDRESS_LATITUDE ) ) * cos( radians( PHYSICAL_ADDRESS_LONGITUDE ) - radians(' . $lng . ') ) + sin( radians(' . $lat . ') ) * sin( radians( PHYSICAL_ADDRESS_LATITUDE ) ) ) ) AS DISTANCE ';
        $query .= 'FROM tpl_supplier ';
        $query .= 'INNER JOIN tpl_shadow_root ON (tpl_supplier.CLIENT_REC_ID = tpl_shadow_root.CLIENT_REC_ID) ';
        $query .= 'INNER JOIN tpl_shadow_directory_offering ON (tpl_shadow_root.SHADOW_DIRECTORY_OFFERING_REC_ID = tpl_shadow_directory_offering.REC_ID) ';
        $query .= 'WHERE tpl_shadow_root.DIRECTORY_REC_ID = ' . $drec . ' ';
        $query .= 'GROUP BY tpl_supplier.REC_ID ';
        $query .= 'HAVING distance < ' . $radius . ' ';
        $query .= 'ORDER BY DISTANCE, ';
        $query .= 'TRANSACTION_TOTAL_INCL_GST DESC ';
        $query .= 'LIMIT 0 , 100;';
        $resultset = $db->openquery($query);
        return $resultset;
    }

    public static function getSuppliersByCategory($crec) {
        $query = 'SELECT tpl_supplier.REC_ID AS SUPPLIER_REC_ID, tpl_supplier.CLIENT_REC_ID, SUPPLIER_TYPE_REC_ID, tpl_supplier.NAME AS SUPPLIER_NAME, TRADING_AS_NAME, CONTACT_NAME, CONTACT_POSITION, TELEPHONE_NO, FREE_TELEPHONE_NO, ';
        $query .= 'FAX_NO, FREE_FAX_NO, EMAIL_ADDRESS, WEBSITE_ADDRESS, PHYSICAL_ADDRESS_BUILDING_ADDRESS, PHYSICAL_ADDRESS_STREET_ADDRESS, PHYSICAL_ADDRESS_SUBURB, PHYSICAL_ADDRESS_CITY, ';
        $query .= 'PHYSICAL_ADDRESS_STATE, PHYSICAL_ADDRESS_COUNTRY, PHYSICAL_ADDRESS_POST_CODE, PHYSICAL_ADDRESS_PXID, PHYSICAL_ADDRESS_DPID, PHYSICAL_ADDRESS_LATITUDE, PHYSICAL_ADDRESS_LONGITUDE, ';
        $query .= 'PHYSICAL_ADDRESS_HEIGHT, PHYSICAL_ADDRESS_COMPLETE, POSTAL_ADDRESS_BUILDING_ADDRESS, POSTAL_ADDRESS_STREET_ADDRESS, POSTAL_ADDRESS_SUBURB, POSTAL_ADDRESS_CITY, POSTAL_ADDRESS_STATE, ';
        $query .= 'POSTAL_ADDRESS_COUNTRY, POSTAL_ADDRESS_POST_CODE, COMPANY_PROFILE_TEXT, PRINT_LOGO_LOCATION, WEB_LOGO_LOCATION , FACEBOOK_ADDRESS_URL, TWITTER_ADDRESS_URL, LINKEDIN_ADDRESS_URL, ';
        $query .= 'YOUTUBE_ADDRESS_URL, FOURSQUARE_ADDRESS_URL, tpl_shadow_root.DIRECTORY_REC_ID, tpl_shadow_root.DIRECTORY_YEAR, SHADOW_DIRECTORY_OFFERING_REC_ID, STATE, PROOF_NAME, PROOF_POSITION, TRANSACTION_TOTAL_INCL_GST, ';
        $query .= 'TOTAL_PAID_TO_DATE, SHADOW_REC_ID, MASTER_REC_ID, tpl_shadow_directory_offering.NAME AS DIRECTORY_OFFER ';
        $query .= 'FROM tpl_supplier ';
        $query .= "INNER JOIN tpl_shadow_root ON (tpl_supplier.REC_ID = tpl_shadow_root.CLIENT_REC_ID) ";
        $query .= "INNER JOIN tpl_shadow_directory_offering ON (tpl_shadow_root.SHADOW_DIRECTORY_OFFERING_REC_ID = tpl_shadow_directory_offering.REC_ID) ";
        $query .= "INNER JOIN tpl_supplier_product_category ON (tpl_supplier.REC_ID = tpl_supplier_product_category.SUPPLIER_REC_ID) ";
        $query .= "INNER JOIN tpl_category ON  (tpl_supplier_product_category.CATEGORY_REC_ID = tpl_category.REC_ID) ";
        $query .= "INNER JOIN v_catswithlisting C ON tpl_category.Rec_Id = C.Rec_Id  ";
        $query .= 'WHERE tpl_category.REC_ID = ' . $crec . ' ';
        $query .= 'ORDER BY TRANSACTION_TOTAL_INCL_GST DESC ';
        $query .= 'LIMIT 0 , 1000;';
        $db = new Db;
        $resultset = $db->openquery($query);
        return $resultset;
    }
    
    public function getSuppliersByFeatured($directory_rec_id) {
        $query = 'SELECT * FROM tpl_supplier_directory sd ';
        $query .= 'INNER JOIN tpl_supplier s ON sd.SUPPLIER_REC_ID = s.REC_ID ';
        $query .= 'INNER JOIN tpl_supplier_media sm ON sm.SUPPLIER_REC_ID = s.REC_ID ';
        $query .= 'WHERE sd.DIRECTORY_REC_ID='.$directory_rec_id.' ' ;
        $db = new Db;
        $resultset = $db->openquery($query);
        return $resultset;
    }
    
    public function getSupplierMediaByFeatured($directory_rec_id, $media_category) {
        $query = 'SELECT * FROM tpl_supplier_directory sd ';
        $query .= 'INNER JOIN tpl_supplier s ON sd.SUPPLIER_REC_ID = s.REC_ID ';
        $query .= 'INNER JOIN tpl_supplier_media sm ON sm.SUPPLIER_REC_ID = s.REC_ID ';
        $query .= 'INNER JOIN tpl_media_types mt ON mt.REC_ID = sm.MEDIA_TYPE_REC_ID ';
        $query .= 'WHERE sd.DIRECTORY_REC_ID = '.$directory_rec_id.' AND ';
        $query .= 'mt.MEDIA_CATEGORY =\''.$media_category.'\' AND ';
        $query .= 'sm.IS_FEATURED = 1;';
        error_log("Query getSupplierMediaByFeatured:".$query);
        $db = new Db;
        $resultset = $db->openquery($query);
        return $resultset;
    }

    public static function getDirectoryDetails($directory_rec_id) {

        $db = new Db;
        $query = "SELECT * FROM tpl_directory WHERE REC_ID = " . $directory_rec_id;

        if ($directory_rec_id > 0) {
            $directory_record = $db->openquery($query);
            return $directory_record;
        }
    }

    public static function getDirectoryCategories($directory_rec_id, $parent_rec_id) {
        
        $query = "SELECT tpl_category.REC_ID, tpl_category.NAME, tpl_category.PARENT_PRODUCT_CATEGORY_REC_ID, tpl_category.PRINT_ORDER, ";
        $query .= "tpl_category.PRINT_IMAGE_LOCATION, tpl_category.WEB_IMAGE_LOCATION, tpl_category.CODE, tpl_category.HEADING , tpl_category.SUB_HEADING, TEXT ";
        $query .= "FROM tpl_category ";
        $query .= "INNER JOIN tpl_category_directory ON (tpl_category.REC_ID = tpl_category_directory.CATEGORY_REC_ID) ";
        //$query .= "INNER JOIN v_catswithlisting C ON tpl_category.Rec_Id = C.Rec_Id  ";  // removed because of bug with all directories except TONZA
        $query .= "WHERE (tpl_category_directory.DIRECTORY_REC_ID = " . $directory_rec_id . ") AND ";
        if ($parent_rec_id > 0)
            $query = $query . "(tpl_category.PARENT_PRODUCT_CATEGORY_REC_ID = " . $parent_rec_id . ") ";
        else
            $query = $query . "(tpl_category.PARENT_PRODUCT_CATEGORY_REC_ID IS NULL) ";
        $query = $query . "ORDER BY tpl_category.PRINT_ORDER, tpl_category.NAME";
        
        error_log("Query:".$query);
        $result_categories = db::openquery($query);
        return $result_categories;
    }

    public static function getTONZADirectoryCategories($directory_rec_id, $parent_rec_id) {
        $query = "SELECT tpl_category.REC_ID, tpl_category.NAME, tpl_category.PARENT_PRODUCT_CATEGORY_REC_ID, tpl_category.PRINT_ORDER, ";
        $query .= "tpl_category.PRINT_IMAGE_LOCATION, tpl_category.WEB_IMAGE_LOCATION, tpl_category.CODE, tpl_category.HEADING , tpl_category.SUB_HEADING, TEXT ";
        $query .= "FROM tpl_category ";
        $query .= "INNER JOIN tpl_category_directory ON (tpl_category.REC_ID = tpl_category_directory.CATEGORY_REC_ID) ";
        $query .= "INNER JOIN v_catswithlisting C ON tpl_category.Rec_Id = C.Rec_Id  ";  // removed because of bug with all directories except TONZA
        $query .= "WHERE (tpl_category_directory.DIRECTORY_REC_ID = " . $directory_rec_id . ") AND ";
        if ($parent_rec_id > 0)
            $query = $query . "(tpl_category.PARENT_PRODUCT_CATEGORY_REC_ID = " . $parent_rec_id . ") ";
        else
            $query = $query . "(tpl_category.PARENT_PRODUCT_CATEGORY_REC_ID IS NULL) ";
        $query = $query . "ORDER BY tpl_category.PRINT_ORDER, tpl_category.NAME";
        $result_categories = db::openquery($query);
        return $result_categories;
    }

    public static function getDirectoryCategoriesByKeyword($directory_rec_id, $keyword) {
        $query = "SELECT pc.REC_ID, pc.NAME FROM tpl_category pc INNER JOIN tpl_category_directory pcd on (pc.REC_ID = pcd.CATEGORY_REC_ID) ";
        $query .= "WHERE DIRECTORY_REC_ID = " . $directory_rec_id . " AND pc.NAME like '%" . $keyword . "%'";
        $results = db::openquery($query);
        return $results;
    }

    //public static function getAllCategoriesForDir($drec){  DUPLICATED ABOVE
//		$query = "SELECT tpl_category.REC_ID, PARENT_PRODUCT_CATEGORY_REC_ID, NAME, TEXT, PRINT_ORDER FROM tpl_category ";
//		$query .= "INNER JOIN tpl_category_directory ON (tpl_category_directory.CATEGORY_REC_ID = tpl_category.REC_ID) ";
//		// $query .= "INNER JOIN V_CatsWithListing C ON tpl_category.Rec_Id = C.Rec_Id  ";
//		$query .= "WHERE tpl_category_directory.DIRECTORY_REC_ID = ".$drec." ";
//		$query .= "ORDER BY tpl_category.PRINT_ORDER, tpl_category.NAME";
//		$result_array = db::openquery($query);
//		return $result_array;
//	}

    public static function getCategoriesBySupplier($supplier_rec_id) {
        $db = new Db;

        $query = 'SELECT tpl_category.REC_ID, tpl_category.PARENT_PRODUCT_CATEGORY_REC_ID, tpl_category.NAME AS PRODUCT_CATEGORY_NAME, tpl_category.TEXT, 
				tpl_category.PRINT_ORDER, tpl_category.CODE FROM tpl_category
				INNER JOIN tpl_supplier_product_category ON (tpl_supplier_product_category.CATEGORY_REC_ID = tpl_category.REC_ID)
				INNER JOIN tpl_supplier ON (tpl_supplier.REC_ID = tpl_supplier_product_category.SUPPLIER_REC_ID)
				WHERE tpl_supplier.REC_ID = ' . $supplier_rec_id . ' ORDER BY tpl_category.REC_ID;';

        $categories = $db->openquery($query);

        return $categories;
    }

    public static function GetDirectoryCategoriesByName($directory_rec_id) {
        //$query = 'SELECT tpl_category.REC_ID as REC_ID, tpl_category.NAME as NAME, tpl_category.PARENT_PRODUCT_CATEGORY_REC_ID as PARENT_PRODUCT_CATEGORY_REC_ID, tpl_category.TEXT ';
        $query = 'SELECT * ';
        $query .= 'FROM tpl_category_directory ';
        $query .= 'INNER JOIN tpl_category ON (tpl_category_directory.CATEGORY_REC_ID = tpl_category.REC_ID) ';
        $query .= 'WHERE tpl_category_directory.DIRECTORY_REC_ID = ' . $directory_rec_id . ' ';
        $query .= 'ORDER BY tpl_category.NAME';
        $categories = db::openquery($query);
        return $categories;
    }

    function getDirectoryRootCategoriesByName($directory_rec_id) {
        $query = 'SELECT tpl_category.REC_ID as REC_ID, tpl_category.NAME as NAME, tpl_category.PARENT_PRODUCT_CATEGORY_REC_ID as PARENT_PRODUCT_CATEGORY_REC_ID, tpl_category.TEXT, ';
        $query .= 'tpl_category.PRINT_ORDER, tpl_category.PRINT_IMAGE_LOCATION, tpl_category.WEB_IMAGE_LOCATION, tpl_category.CODE ';
        $query .= 'FROM tpl_category_directory ';
        $query .= 'INNER JOIN tpl_category ON (tpl_category_directory.CATEGORY_REC_ID = tpl_category.REC_ID) ';
        $query .= 'WHERE tpl_category_directory.DIRECTORY_REC_ID = ' . $directory_rec_id . ' AND ';
        $query .= 'tpl_category.PARENT_PRODUCT_CATEGORY_REC_ID IS NULL ';
        $query .= 'ORDER BY tpl_category.NAME';
        $categories = db::openquery($query);
        return $categories;
    }

    function GetDirectoryOfferings($shadow_root_id) {
        $db = new Db;
        $offerings = $db->getrows("(SHADOW_REC_ID = $shadow_root_id)", "tpl_shadow_directory_offering", "ORDER BY COST_EXCL_GST");
        return $offerings;
    }
    function GetDirectoryPackages() {
        $db = new Db;
        $query = "SELECT dir.REC_ID as REC_ID,dir.NAME as NAME,dir.DIRECTORY_DESC as DESCRI,offer.NAME as PACK_NAME,offer.COST_EXCL_GST,offer.GST_RATE   FROM tpl_directory  dir inner join tpl_directory_offering offer on dir.REC_ID= offer.DIRECTORY_REC_ID order by dir.REC_ID";      
        $rows = Array();
        $row = "";
        // $result = mysql_query($query) or die(mysql_error());          
        if (!$result = mysql_query($query)) {
            $dblog->error_withid_log(mysql_errno(), mysql_error());           
        } else {
            while (($row = mysql_fetch_assoc($result)) == true) {
                $rows[] = $row;
            }
        }
        return $rows;
    }
    function GetDirectoryList() {
        $db = new Db;
        $query = "SELECT REC_ID, NAME,DIRECTORY_DESC FROM tpl_directory";      
        $rows = Array();
        $row = "";
        // $result = mysql_query($query) or die(mysql_error());          
        if (!$result = mysql_query($query)) {
            $dblog->error_withid_log(mysql_errno(), mysql_error());           
        } else {
            while (($row = mysql_fetch_assoc($result)) == true) {
                $rows[] = $row;
            }
        }
        return $rows;
    }    
//    public function ShowDirectoryYear($id, $default_dir, $onChangeEvent) {
//        if (is_numeric($default_dir['def_dir_rec_id'])) {
//            if ($this->ConnectionObj->Connect()) {
//                $avail_years = $this->ConnectionObj->getAvailableDirYear($default_dir['def_dir_rec_id']);
//                if ($avail_years && $avail_years->num_rows > 0) {
//                    echo "<select id=\"" . $id . "\" name=\"" . $id . "\" onChange=\"" . $onChangeEvent . "\" title = \"Start Date: End Date\" >";
//                    while (($year = $avail_years->fetch_array(MYSQLI_ASSOC)) == true) {
//                        $selected = "";
//                        if ($year['CURRENT_YEAR'] == $default_dir['def_dir_year'])
//                            $selected = "SELECTED";
//                        echo '<option ' . $selected . ' value="' . $year['CURRENT_YEAR'] . '">' . $year['CURRENT_YEAR'] . '</option>';
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
//    }
//    
    
    
    
    
    function IsDirectoryCategory($directory_rec_id, $category_rec_id) {
        $db = new Db;
        $directory_category = $db->getrow("(PRODUCT_CATEGORY_REC_ID = '$category_rec_id') AND (DIRECTORY_REC_ID = '$directory_rec_id')", "tpl_category_directory");
        if ($directory_category)
            return TRUE;
        else
            return FALSE;
    }

    function IsShadowDirectoryCategoryListed($shadow_root_id, $product_category_rec_id) {
        $db = new Db;
        $shadow_directory_category = $db->getrow("(SHADOW_REC_ID = '$shadow_root_id') AND (PRODUCT_CATEGORY_REC_ID = '$product_category_rec_id') AND ((REC_ACTION IS NULL) OR (REC_ACTION <> 'DELETE'))", "tpl_shadow_supplier_product_category");
        if ($shadow_directory_category)
            return TRUE;
        else
            return FALSE;
    }

    function IsShadowDirectoryCategoryLogoListed($shadow_root_id, $product_category_rec_id) {
        $db = new Db;
        $shadow_directory_category = $db->getrow("(SHADOW_REC_ID = '$shadow_root_id') AND (PRODUCT_CATEGORY_REC_ID = '$product_category_rec_id') AND ((REC_ACTION IS NULL) OR (REC_ACTION <> 'DELETE'))", "tpl_shadow_supplier_product_category");
        if ($shadow_directory_category)
            return $shadow_directory_category["IS_LOGO_LISTING"];
        else
            return FALSE;
    }

    public static function UpdateListingType($shadow_root_id, $shadow_directory_offering_rec_id) {
        $db = new Db;

        $offering = $db->getrow("(REC_ID = $shadow_directory_offering_rec_id)", "tpl_shadow_directory_offering");

        if ($offering) {
            $query = "update tpl_shadow_root set REC_TIMESTAMP = \"" . date('Y-m-d H:i:s') . "\", SHADOW_DIRECTORY_OFFERING_REC_ID = " . $shadow_directory_offering_rec_id . ", TRANSACTION_TOTAL_EXCL_GST = " . $offering['COST_EXCL_GST'] . ", TRANSACTION_TOTAL_INCL_GST = " . $offering['COST_EXCL_GST'] * (($offering['GST_RATE'] + 100) / 100) . " where (REC_ID = " . $shadow_root_id . ");";
            $db->runquery($query);
        }
    }

    function CanCreateShadowProductCategoryAssociation($shadow_root_id, $supplier_rec_id, $product_category_rec_id) {
        $db = new Db;
        $shadow_directory_category_count = $db->getcount("(SHADOW_REC_ID = $shadow_root_id) AND ((REC_ACTION IS NULL) OR (REC_ACTION <> 'DELETE'))", "tpl_shadow_supplier_product_category");
        $shadow_root = $db->getrow("(REC_ID = '$shadow_root_id')", "tpl_shadow_root");

        if ($shadow_root) {
            $shadow_offering = $db->getrow("(REC_ID = '" . $shadow_root["SHADOW_DIRECTORY_OFFERING_REC_ID"] . "')", "tpl_shadow_directory_offering");

            if ($shadow_offering) {
                if ($shadow_directory_category_count < $shadow_offering["MAX_PRODUCT_CATEGORY_COUNT"])
                    $result = "SUCCESS";
                else {
                    $result = "Unfortunantly you can only have " . $shadow_offering["MAX_PRODUCT_CATEGORY_COUNT"] . " product/category listings with a " . $shadow_offering["NAME"];
                    $result .= ". If you would like to change your listing type, please do so by using the \"Listing Type\" drop down menu above.";
                }
            } else {
                $result = "Please select your directory listing type before selecting your category listings.";
            }
        } else {
            $result = "A database error occurred.  Please contact support";
        }

        return $result;
    }

    function CreateShadowProductCategoryAssociation($shadow_root_id, $supplier_rec_id, $product_category_rec_id) {
        $db = new Db;
        $result_shadow_supplier = $db->getrow("(SHADOW_REC_ID = '$shadow_root_id')", "tpl_shadow_supplier");
        $master_rec_id = $result_shadow_supplier['MASTER_REC_ID'];
        $query = "INSERT INTO tpl_shadow_supplier_product_category
                  (`SHADOW_REC_ID`, `MASTER_REC_ID`, `REC_DATETIME`, `REC_TIMESTAMP`, `REC_ACTION`, `SUPPLIER_REC_ID`, `PRODUCT_CATEGORY_REC_ID`) 
                  VALUE ('$shadow_root_id', '$master_rec_id', \"" . date('Y-m-d H:i:s') . "\", \"" . date('Y-m-d H:i:s') . "\", \"INSERT\", $supplier_rec_id, $product_category_rec_id);";
        $db->runquery($query);
        if ($db) {
            return $result = "Product Category successfully added";
        } else {
            return $result = "Update was unsuccessful";
        }
    }

    public static function DeleteShadowProductCategoryAssociation($shadow_root_id, $supplier_rec_id, $product_category_rec_id) {
        $db = new Db;
        $query = "update tpl_shadow_supplier_product_category set REC_TIMESTAMP = \"" . date('Y-m-d H:i:s') . "\",REC_ACTION = \"DELETE\",IS_LOGO_LISTING=0 where (SHADOW_REC_ID = $shadow_root_id) AND (SUPPLIER_REC_ID = $supplier_rec_id) AND (PRODUCT_CATEGORY_REC_ID = $product_category_rec_id);";
        $db->runquery($query);
        if ($db) {
            $result = "Category " . $product_category_rec_id . " has been added";
        } else {
            $result = "Update was unsuccessful";
        }
        return $result;
    }

    function CanCreateShadowProductCategoryLogoListing($shadow_root_id, $supplier_rec_id, $product_category_rec_id) {
        $db = new Db;

        $query = "select * FROM tpl_shadow_supplier_product_category where (SHADOW_REC_ID = $shadow_root_id) AND (SUPPLIER_REC_ID = $supplier_rec_id) AND (PRODUCT_CATEGORY_REC_ID = $product_category_rec_id) AND ((REC_ACTION IS NULL) OR (REC_ACTION <> 'DELETE'));";
        $productcats = $db->openquery($query);

        if ($productcats)
            $result = "SUCCESS";
        else
            $result = "You can only set the Logo Listing flag for categories that you have listed in.";

        return $result;
    }

    function CreateShadowProductCategoryLogoListing($shadow_root_id, $supplier_rec_id, $product_category_rec_id) {
        $db = new Db;
        $query = "update tpl_shadow_supplier_product_category set REC_TIMESTAMP = \"" . date('Y-m-d H:i:s') . "\",REC_ACTION = \"UPDATE\",IS_LOGO_LISTING=1 where (SHADOW_REC_ID = $shadow_root_id) AND (SUPPLIER_REC_ID = $supplier_rec_id) AND (PRODUCT_CATEGORY_REC_ID = $product_category_rec_id) AND ((REC_ACTION IS NULL) OR (REC_ACTION <> 'DELETE'));";
        $db->runquery($query);
    }

    function DeleteShadowProductCategoryLogoListing($shadow_root_id, $supplier_rec_id, $product_category_rec_id) {
        $db = new Db;
        $query = "update tpl_shadow_supplier_product_category set REC_TIMESTAMP = \"" . date('Y-m-d H:i:s') . "\",REC_ACTION = \"UPDATE\",IS_LOGO_LISTING=0 where (SHADOW_REC_ID = $shadow_root_id) AND (SUPPLIER_REC_ID = $supplier_rec_id) AND (PRODUCT_CATEGORY_REC_ID = $product_category_rec_id) AND ((REC_ACTION IS NULL) OR (REC_ACTION <> 'DELETE'));";
        $db->runquery($query);
    }

    function getShadowSuppliersByRoot($shadow_root_id) {
        $db = new Db;
       
        $shadow_suppliers = $db->getrows("(SHADOW_REC_ID = '$shadow_root_id') AND ((REC_ACTION IS NULL) OR (REC_ACTION <> 'DELETE'))", "tpl_shadow_supplier", "ORDER BY NAME");
        //$shadow_suppliers = $db->getrows("(SHADOW_REC_ID = '$shadow_root_id') AND ((REC_ACTION IS NULL) OR (REC_ACTION <> 'DELETE'))", "tpl_shadow_supplier", "ORDER BY NAME");
        return $shadow_suppliers;
    }

    function GetBrands($directory_rec_id) {
        $db = new Db;
        $query = "SELECT 
                    tpl_brand.*
                  FROM
                    tpl_brand
                    INNER JOIN tpl_brand_directory ON (tpl_brand.REC_ID = tpl_brand_directory.BRAND_REC_ID)
                  WHERE
                    tpl_brand_directory.DIRECTORY_REC_ID = " . $directory_rec_id . "
                  ORDER BY
                    NAME";


        $records = $db->openquery($query);
        return $records;
    }

    function getAwards($client_rec_id) {
        $query = "SELECT tpl_supplier_awards.* FROM tpl_supplier_awards WHERE CLIENT_REC_ID = " . $client_rec_id . " ORDER BY tpl_supplier_awards.NAME;";
        //$query =
        $result = db::getrows_key($query);
        return $result;
    }

    function getRecord($tablename, $rec_id) {
        $db = new Db;
        $record = $db->getrow("(REC_ID = '$rec_id')", $tablename, "");
        return $record;
    }

    function getShadowRecord($tablename, $rec_id) {
        $db = new Db;
        $shadow = $db->getrow("(REC_ID = '$rec_id') AND ((REC_ACTION IS NULL) OR (REC_ACTION <> 'DELETE'))", $tablename, "");
        return $shadow;
    }

    function getLiveRecord($tablename, $rec_id) {
        $db = new Db;
        $shadow = $db->getrow("(REC_ID = '$rec_id') ", $tablename, "");
        return $shadow;
    }

    function getSupplierTypes($directory_rec_id) {
        $db = new Db;
        $resultset = $db->getrows("(DIRECTORY_REC_ID = '$directory_rec_id')", "tpl_supplier_type", "");
        return $resultset;
    }

    function getTableMaxAutoIncrementNumber($tablename) {
        $db = new Db;
        $query = "select MAX(REC_ID) as 'maxnumber' from " . $tablename;
        $rows = Array();
        $row = "";
        $result = mysql_query($query) or die(mysql_error());
        while (($row = mysql_fetch_assoc($result)) == true) {
            $rows[] = $row;
        }
        $maxnumber = $rows[0]["maxnumber"];
        return $maxnumber;
    }

    function getSupplierName($rec_id) {
        $db = new Db;
        $record = $db->getrows("(REC_ID = '$rec_id')", "tpl_client", "");
        return $record;
    }

    function DeleteShadowRecord($tablename, $rec_id) {
        $db = new Db;
        $query = "update $tablename set REC_TIMESTAMP = \"" . date('Y-m-d H:i:s') . "\",REC_ACTION = \"DELETE\" where (REC_ID = $rec_id);";
        $db->runquery($query);
    }

    function DeleteLiveRecord($tablename, $rec_id) {
        $db = new Db;
        $query = "DELETE FROM $tablename where (REC_ID = $rec_id);";
        $db->runquery($query);
    }

    function DeleteRecord($tablename, $condition) {
        $db = new Db;
        $query = "DELETE FROM $tablename where  $condition;";
        $db->runquery($query);
    }

    function getShadowRecords($tablename, $shadow_rec_id, $master_rec_id) {
        $db = new Db;
        $shadows = $db->getrows("(SHADOW_REC_ID = '$shadow_rec_id') AND (MASTER_REC_ID = '$master_rec_id') AND ((REC_ACTION IS NULL) OR (REC_ACTION <> 'DELETE'))", $tablename, "");
        return $shadows;
    }

    function GetProductBasedCategorySummary($shadow_rec_id, $supplier_rec_id) {
        $db = new Db;

        $condition = "(SHADOW_REC_ID = '$shadow_rec_id') AND (SUPPLIER_REC_ID = '$supplier_rec_id') AND ((REC_ACTION IS NULL) OR (REC_ACTION <> 'DELETE'))";

        $query = "select * from `tpl_shadow_product` where $condition GROUP BY PRODUCT_CATEGORY_REC_ID";

        $rows = Array();
        $row = "";
        $result = mysql_query($query) or die(mysql_error());
        while (($row = mysql_fetch_assoc($result)) == true) {
            $rows[] = $row;
        }
        return $rows;
    }

    function GetProductBasedCategoriesSummary($shadow_rec_id) {
        $db = new Db;

        $condition = "(SHADOW_REC_ID = '$shadow_rec_id')";

        $query = "select * from `tpl_shadow_product` where $condition GROUP BY PRODUCT_CATEGORY_REC_ID";

        $rows = Array();
        $row = "";
        $result = mysql_query($query) or die(mysql_error());
        while (($row = mysql_fetch_assoc($result)) == true) {
            $rows[] = $row;
        }
        return $rows;
    }

    function getShadowRecordsBySupplier($tablename, $shadow_rec_id, $supplier_rec_id, $sort_field, $join) {
        $db = new Db;

        $sort = "";
        if ($sort_field != '')
            $sort = "ORDER BY " . $sort_field;

        $condition = "(SHADOW_REC_ID = '$shadow_rec_id') AND (SUPPLIER_REC_ID = '$supplier_rec_id') AND ((REC_ACTION IS NULL) OR (REC_ACTION <> 'DELETE'))";


        $query = "select $tablename.* from $tablename $join where $condition $sort";
        error_log($query);
        $rows = Array();
        $row = "";
        $result = mysql_query($query) or die(mysql_error());
        while (($row = mysql_fetch_assoc($result)) == true) {
            $rows[] = $row;
        }
        return $rows;
    }

    function getMediaRecordsBySupplier($tablename, $supplier_rec_id, $sort_field, $join, $mediatype) {
        global $dblog;

        //$db = new Db;

        $sort = "";
        if ($sort_field != '')
            $sort = "ORDER BY " . $sort_field;

        $condition = "(SUPPLIER_REC_ID = '$supplier_rec_id') and (MEDIA_CATEGORY = '$mediatype')";


        $query = "select $tablename.* from $tablename $join where $condition $sort";
        error_log($query);
        $rows = Array();
        $row = "";
        // $result = mysql_query($query) or die(mysql_error());          
        if (!$result = mysql_query($query)) {
            $dblog->error_withid_log(mysql_errno(), mysql_error());           
        } else {
            while (($row = mysql_fetch_assoc($result)) == true) {
                $rows[] = $row;
            }
        }
        return $rows;
    }

    function getProductCategoryMedia($tablename, $join_rec_id, $processprefix) {
        $db = new Db;
        if ($processprefix != 'product') {
            $condition = " SUPPLIER_PRODUCTCATEGORY_REC_ID = '$join_rec_id'";
        } else {
            $condition = " SUPPLIER_PRODUCT_REC_ID = '$join_rec_id'";
        }

        $query = "select $tablename.* from $tablename  where $condition";
        error_log($query);
        $rows = array();
        $row = "";
        $result = mysql_query($query) or die(mysql_error());

        while (($row = mysql_fetch_assoc($result)) == true) {

            $rows[] = $row;
        }

        return $rows;
    }

    function getShadowProductsByCategory($shadow_rec_id, $supplier_rec_id, $product_category_rec_id) {
        $db = new Db;

        $condition = "(SHADOW_REC_ID = '$shadow_rec_id') AND (SUPPLIER_REC_ID = '$supplier_rec_id') AND (PRODUCT_CATEGORY_REC_ID = '$product_category_rec_id') AND ((REC_ACTION IS NULL) OR (REC_ACTION <> 'DELETE'))";
        $query = "select * from tpl_shadow_product where $condition ORDER BY LABEL_NAME";
        $rows = Array();
        $row = "";
        $result = mysql_query($query) or die(mysql_error());
        while (($row = mysql_fetch_assoc($result)) == true) {
            $rows[] = $row;
        }
        return $rows;
    }

    function UpdateSupplierDetails($shadow_rec_id, $master_rec_id, $name, $trading_as_name, $contact_name, $contact_position, $supplier_type) {
        $db = new Db;
        if ($supplier_type == 0)
            $query = "update tpl_shadow_supplier set REC_TIMESTAMP = \"" . date('Y-m-d H:i:s') . "\",REC_ACTION = \"UPDATE\", NAME=\"$name\", TRADING_AS_NAME=\"$trading_as_name\", CONTACT_NAME=\"$contact_name\", CONTACT_POSITION=\"$contact_position\", SUPPLIER_TYPE_REC_ID = NULL where (REC_ID = $shadow_rec_id) AND (MASTER_REC_ID = $master_rec_id);";
        else
            $query = "update tpl_shadow_supplier set REC_TIMESTAMP = \"" . date('Y-m-d H:i:s') . "\",REC_ACTION = \"UPDATE\", NAME=\"$name\", TRADING_AS_NAME=\"$trading_as_name\", CONTACT_NAME=\"$contact_name\", CONTACT_POSITION=\"$contact_position\", SUPPLIER_TYPE_REC_ID = $supplier_type where (REC_ID = $shadow_rec_id) AND (MASTER_REC_ID = $master_rec_id);";
         error_log("SUCCESS.......................................>>>>:".$query);
        $db->runquery($query);
    }

    function UpdateSupplierCompanyProfile($shadow_rec_id, $master_rec_id, $company_profile,$company_strapline_text,$company_aboutus_text) {
        $db = new Db;
        $query = "update tpl_shadow_supplier set REC_TIMESTAMP = \"" . date('Y-m-d H:i:s') . "\",REC_ACTION = \"UPDATE\", COMPANY_PROFILE_TEXT=\"$company_profile\", COMPANY_STRAPLINE_TEXT=\"$company_strapline_text\", COMPANY_ABOUTUS_TEXT=\"$company_aboutus_text\" where (SHADOW_REC_ID = $shadow_rec_id) AND (MASTER_REC_ID = $master_rec_id);";
        $db->runquery($query);
    }

    function UpdateSupplierPhysicalAddress($shadow_rec_id, $master_rec_id, $physical_address_complete, $physical_address_building_address, $physical_address_street_address, $physical_address_suburb, $physical_address_city, $physical_address_state, $physical_address_post_code, $physical_address_country, $physical_address_dpid, $physical_address_pxid, $physical_address_longitude, $physical_address_latitude, $physical_address_height) {
        $db = new Db;
        $query = "UPDATE tpl_shadow_supplier set REC_TIMESTAMP = \"" . date('Y-m-d H:i:s') . "\",REC_ACTION = \"UPDATE\",
        PHYSICAL_ADDRESS_COMPLETE = \"$physical_address_complete\",  
        PHYSICAL_ADDRESS_BUILDING_ADDRESS = \"$physical_address_building_address\", 
        PHYSICAL_ADDRESS_STREET_ADDRESS = \"$physical_address_street_address\", 
        PHYSICAL_ADDRESS_SUBURB = \"$physical_address_suburb\", 
        PHYSICAL_ADDRESS_CITY = \"$physical_address_city\", 
        PHYSICAL_ADDRESS_STATE = \"$physical_address_state\", 
        PHYSICAL_ADDRESS_POST_CODE = \"$physical_address_post_code\", 
        PHYSICAL_ADDRESS_COUNTRY = 	\"$physical_address_country\",
        PHYSICAL_ADDRESS_DPID = \"$physical_address_dpid\",
        PHYSICAL_ADDRESS_PXID = \"$physical_address_pxid\",
        PHYSICAL_ADDRESS_LONGITUDE = \"$physical_address_longitude\",
        PHYSICAL_ADDRESS_LATITUDE = \"$physical_address_latitude\",
        PHYSICAL_ADDRESS_HEIGHT = \"$physical_address_height\"
        WHERE (SHADOW_REC_ID = $shadow_rec_id) AND (MASTER_REC_ID = $master_rec_id);";
        $db->runquery($query);
    }

    function UpdateSupplierPostalAddress($shadow_rec_id, $master_rec_id, $postal_address_building_address, $postal_address_street_address, $postal_address_suburb, $postal_address_city, $postal_address_state, $postal_address_post_code, $postal_address_country) {
        $db = new Db;
        $query = "update tpl_shadow_supplier set REC_TIMESTAMP = \"" . date('Y-m-d H:i:s') . "\",REC_ACTION = \"UPDATE\", POSTAL_ADDRESS_BUILDING_ADDRESS = \"$postal_address_building_address\", POSTAL_ADDRESS_STREET_ADDRESS = \"$postal_address_street_address\", POSTAL_ADDRESS_SUBURB = \"$postal_address_suburb\", POSTAL_ADDRESS_CITY = \"$postal_address_city\", POSTAL_ADDRESS_STATE = \"$postal_address_state\", POSTAL_ADDRESS_POST_CODE = \"$postal_address_post_code\", POSTAL_ADDRESS_COUNTRY = \"$postal_address_country\" where (SHADOW_REC_ID = $shadow_rec_id) AND (MASTER_REC_ID = $master_rec_id);";
        $db->runquery($query);
    }

    function UpdateSupplierContactDetails($shadow_rec_id, $master_rec_id, $telephone_no, $free_telephone_no, $fax_no, $free_fax_no, $email_address) {
        $db = new Db;
        $query = "update tpl_shadow_supplier set REC_TIMESTAMP = \"" . date('Y-m-d H:i:s') . "\",REC_ACTION = \"UPDATE\", TELEPHONE_NO = \"$telephone_no\", FREE_TELEPHONE_NO = \"$free_telephone_no\", FAX_NO = \"$fax_no\", FREE_FAX_NO = \"$free_fax_no\", EMAIL_ADDRESS = \"$email_address\" where (SHADOW_REC_ID = $shadow_rec_id) AND (MASTER_REC_ID = $master_rec_id);";
        $db->runquery($query);
        return "Update Supplier Contact Details Success";
    }

    function UpdateSupplierWebsiteDetails($shadow_rec_id, $master_rec_id, $website_address, $facebook_address, $twitter_address, $linkedin_address, $youtube_address, $foursquare_address) {
        $db = new Db;
        $query = "update tpl_shadow_supplier set REC_TIMESTAMP = \"" . date('Y-m-d H:i:s') . "\",REC_ACTION = \"UPDATE\", WEBSITE_ADDRESS = \"$website_address\", FACEBOOK_ADDRESS_URL = \"$facebook_address\", TWITTER_ADDRESS_URL = \"$twitter_address\", LINKEDIN_ADDRESS_URL = \"$linkedin_address\", YOUTUBE_ADDRESS_URL = \"$youtube_address\", FOURSQUARE_ADDRESS_URL = \"$foursquare_address\" where (SHADOW_REC_ID = $shadow_rec_id) AND (MASTER_REC_ID = $master_rec_id);";
        $db->runquery($query);
    }

    function UpdateSupplierBranchDetails($rec_id, $shadow_rec_id, $supplier_rec_id, $name, $postal_address_building_address, $postal_address_street_address, $postal_address_suburb, $postal_address_city, $postal_address_state, $postal_address_post_code, $postal_address_country, $telephone_no, $fax_no) {
        $db = new Db;
        if ($rec_id == 0) {
            $master_rec_id = '0';
            $rec_action = 'INSERT';
            $query = "insert into tpl_shadow_supplier_branch (SHADOW_REC_ID, MASTER_REC_ID, REC_DATETIME, REC_TIMESTAMP, REC_ACTION,
                         SUPPLIER_REC_ID, NAME,  
                         POSTAL_ADDRESS_BUILDING_ADDRESS, 
                         POSTAL_ADDRESS_STREET_ADDRESS, 
                         POSTAL_ADDRESS_SUBURB, 
                         POSTAL_ADDRESS_CITY, 
                         POSTAL_ADDRESS_STATE,
                         POSTAL_ADDRESS_POST_CODE, 
                         POSTAL_ADDRESS_COUNTRY,
                         TELEPHONE_NO, FAX_NO)
                         VALUE ( 
                         $shadow_rec_id, 0, \"" . date('Y-m-d H:i:s') . "\", \"" . date('Y-m-d H:i:s') . "\", 
                         \"$rec_action\", 
                         \"$supplier_rec_id\", 
                         \"$name\",  
                         \"$postal_address_building_address\", 
                         \"$postal_address_street_address\", 
                         \"$postal_address_suburb\", 
                         \"$postal_address_city\",
                         \"$postal_address_state\", 
                         \"$postal_address_post_code\", 
                         \"$postal_address_country\", 
                         \"$telephone_no\", 
                         \"$fax_no\")";
        } else {
            $rec_action = 'UPDATE';
            $query = "update tpl_shadow_supplier_branch set 
	                 REC_TIMESTAMP = \"" . date('Y-m-d H:i:s') . "\", 
	                 REC_ACTION = \"$rec_action\", 
	                 NAME = \"$name\", 
	                 POSTAL_ADDRESS_BUILDING_ADDRESS = \"$postal_address_building_address\", 
	                 POSTAL_ADDRESS_STREET_ADDRESS = \"$postal_address_street_address\", 
	                 POSTAL_ADDRESS_SUBURB = \"$postal_address_suburb\", 
	                 POSTAL_ADDRESS_CITY = \"$postal_address_city\",
	                 POSTAL_ADDRESS_STATE = \"$postal_address_state\", 
	                 POSTAL_ADDRESS_POST_CODE = \"$postal_address_post_code\", 
	                 POSTAL_ADDRESS_COUNTRY = \"$postal_address_country\", 
	                 TELEPHONE_NO = \"$telephone_no\", 
	                 FAX_NO = \"$fax_no\" 
	                 where (REC_ID = $rec_id);";
        }
        $db->runquery($query);
    }

    function UpdateSupplierDistributorDetails($rec_id, $shadow_rec_id, $supplier_rec_id, $directory_rec_id, $name, $telephone_no) {
        $db = new Db;
        if ($rec_id == 0) {
            $master_rec_id = '0';
            $rec_action = 'INSERT';
            $query = "insert into tpl_shadow_supplier_distributor (SHADOW_REC_ID, MASTER_REC_ID, REC_DATETIME, REC_TIMESTAMP, REC_ACTION,
                         SUPPLIER_REC_ID, DIRECTORY_REC_ID, NAME,  
                         TELEPHONE_NO)
                         VALUE ( 
                         $shadow_rec_id, 0, \"" . date('Y-m-d H:i:s') . "\", \"" . date('Y-m-d H:i:s') . "\", 
                         \"$rec_action\", 
                         \"$supplier_rec_id\", 
                         \"$directory_rec_id\", 
                         \"$name\",  
                         \"$telephone_no\")";
        } else {
            $rec_action = 'UPDATE';
            $query = "update tpl_shadow_supplier_distributor set 
	                 REC_TIMESTAMP = \"" . date('Y-m-d H:i:s') . "\", 
	                 REC_ACTION = \"$rec_action\", 
	                 NAME = \"$name\", 
	                 TELEPHONE_NO = \"$telephone_no\" 
	                 where (REC_ID = $rec_id);";
        }
        $db->runquery($query);
    }

    /* Update and Adding records- Awards (Starting) */

    public static function UpdateSupplierAwardDetails($rec_id, $name, $issued_by, $year_won, $award_logo_url, $award_logo_link, $shadow_supplier_rec_id, $client_rec_id) {
        $db = new Db;
        if ($rec_id == 0) {
            $master_rec_id = '0';
            $rec_action = 'INSERT';
            $query = "INSERT INTO tpl_supplier_awards
                        (REC_DATETIME,
                        REC_TIMESTAMP,
                        NAME,
                        ISSUED_BY,
                        YEAR_WON,
                        AWARD_LOGO_URL,
                        AWARD_LOGO_LINK,
                        SHADOW_SUPPLIER_REC_ID,
                        CLIENT_REC_ID)
                        VALUES
                        (\"" . date('Y-m-d H:i:s') . "\",
                        \"" . date('Y-m-d H:i:s') . "\",
                        \"$name\",
                        \"$issued_by\",
                        \"$year_won\",
                        \"$award_logo_url\",
                        \"$award_logo_link\",
                        \"$shadow_supplier_rec_id\",
                        \"$client_rec_id\")";
        } else {

            $query = "UPDATE tpl_supplier_awards SET REC_ID = \"$rec_id\", REC_DATETIME = \"" . date('Y-m-d H:i:s') . "\",
                        REC_TIMESTAMP = \"" . date('Y-m-d H:i:s') . "\",
                        NAME = \"$name\",
                        ISSUED_BY = \"$issued_by\",
                        YEAR_WON = \"$year_won\",
                        AWARD_LOGO_URL = \"$award_logo_url\",
                        AWARD_LOGO_LINK = \"$award_logo_link\",
                        SHADOW_SUPPLIER_REC_ID = \"$shadow_supplier_rec_id\",
                        CLIENT_REC_ID = \"$client_rec_id\"
                        WHERE (REC_ID = \"$rec_id\")";
        }

        //construct new debug error logger
        //$logme = new debuglog();
        //$logme->debug2log("UpdateSupplierAwardDetails-Query:".$query);
        $db->runquery($query);
    }

    function UpdateSupplierMediaDetails($rec_id, $name, $media_name, $media_url, $media_type_rec_id, $descri, $is_int_source, $media_embed_source, $is_embed_source, $is_high_resol, $supplier_rec_id, $client_rec_id, $file_size,$updaterecid) {
       try{
        $db = new Db;
        if ($rec_id == 0) {
            $master_rec_id = '0';
            $rec_action = 'INSERT';
            $query = "INSERT INTO tpl_supplier_media("
                    . "NAME,"
                    . "MEDIA_NAME,"
                    . "MEDIA_URL,"
                    . "MEDIA_TYPE_REC_ID,"
                    . "DESCRIPTION,"
                    . "IS_INTERNAL_SOURCE,"
                    . "MEDIA_EMBED_SOURCE,"
                    . "IS_EMBED_SOURCE,"
                    . "REC_DATETIME,"
                    . "CLIENT_REC_ID,"
                    . "SUPPLIER_REC_ID,"
                    . "IS_HIGH_RESO,"
                    . "MEDIA_FILE_SIZE)"
                    . "VALUES"
                    . "("
                    . "\"$name\","
                    . "\"$media_name\","
                    . "\"$media_url\","
                    . "\"$media_type_rec_id\","
                    . "\"$descri\","
                    . "\"$is_int_source\","
                    . "\"$media_embed_source\","
                    . "\"$is_embed_source\","
                    . "\"" . date('Y-m-d H:i:s') . "\","
                    . "\"$client_rec_id\","
                    . "\"$supplier_rec_id\","
                    . "\"$is_high_resol\","
                    . "\"$file_size\""
                    . ")";
        } else {
           $media_type=  "";
           if($updaterecid==1){
             $media_type=  " MEDIA_TYPE_REC_ID = \"$media_type_rec_id\", ";
           }
            
            $query = "UPDATE tpl_supplier_media "
                    . "SET "
                    . "NAME = \"$name\", "
                    . "MEDIA_NAME = \"$media_name\", "
                    . "MEDIA_URL = \"$media_url\", "
                    . $media_type
                    . "DESCRIPTION = \"$descri\", "
                    . "IS_INTERNAL_SOURCE = \"$is_int_source\", "
                    . "MEDIA_EMBED_SOURCE = \"$media_embed_source\", "
                    . "IS_EMBED_SOURCE = \"$is_embed_source\", "
                    . "REC_DATETIME = \"" . date('Y-m-d H:i:s') . "\", "
                    . "CLIENT_REC_ID = \"$client_rec_id\", "
                    . "SUPPLIER_REC_ID = \"$supplier_rec_id\", "
                    . "IS_HIGH_RESO = \"$is_high_resol\" ,"
                    . "MEDIA_FILE_SIZE = \"$file_size\" "
                    . "WHERE REC_ID =\"$rec_id\"";
        }

        //construct new debug error logger
        //$logme = new debuglog();
        //$logme->debug2log("UpdateSupplierLogosDetails-Query:".$query);
        $db->runquery($query);
       }catch(Exception $ex){
         echo $ex  ;
       }
    }

    /* Update and Adding records- Accreditations (Starting) */

    function UpdateSupplierAccredDetails($rec_id, $name, $accredtype, $date_achieved, $issued_by, $certificate_number, $accred_logo_url, $accred_logo_link, $year_won, $supplier_rec_id, $client_rec_id) {
        $db = new Db;
        if ($rec_id == 0) {
            $master_rec_id = '0';
            $rec_action = 'INSERT';
            $query = "INSERT INTO tpl_supplier_accreditations (REC_ID,REC_DATETIME,REC_TIMESTAMP,"
                    . "NAME,TYPE,DATE_ACHIEVED,ISSUED_BY,YEAR_WON,CERTIFICATE_NUMBER,ACCRED_LOGO_URL,"
                    . "ACCRED_LOGO_LINK,SUPPLIER_REC_ID,CLIENT_REC_ID)"
                    . "   VALUES(\"$rec_id\","
                    . "\"" . date('Y-m-d H:i:s') . "\","
                    . "\"" . date('Y-m-d H:i:s') . "\","
                    . "\"$name\","
                    . "\" $accredtype\","
                    . "\"" . date('Y-m-d', strtotime($date_achieved)) . "\","
                    . "\"$issued_by\","
                    . "\"$year_won\","
                    . "\"$certificate_number\","
                    . "\"$accred_logo_url\","
                    . "\"$accred_logo_link\","
                    . "\"$supplier_rec_id\","
                    . "\"$client_rec_id\""
                    . ");";
        } else {
            $query = "UPDATE tpl_supplier_accreditations"
                    . " SET "
                    . " REC_ID = \"$rec_id\","
                    . " REC_DATETIME = \"" . date('Y-m-d H:i:s') . "\","
                    . " REC_TIMESTAMP = \"" . date('Y-m-d H:i:s') . "\","
                    . " NAME = \"$name\","
                    . " TYPE = \"$accredtype\","
                    . " DATE_ACHIEVED = \"" . date('Y-m-d', strtotime($date_achieved)) . "\","
                    . "  ISSUED_BY = \"$issued_by\","
                    . " YEAR_WON = \"$year_won\","
                    . " CERTIFICATE_NUMBER = \"$certificate_number\","
                    . " ACCRED_LOGO_URL = \"$accred_logo_url\","
                    . " ACCRED_LOGO_LINK = \"$accred_logo_link\","
                    . " SUPPLIER_REC_ID = \"$supplier_rec_id\","
                    . " CLIENT_REC_ID = \"$client_rec_id\""
                    . " WHERE (REC_ID = \"$rec_id\")";
        }

        //construct new debug error logger
        //$logme = new debuglog();
        // $logme->debug2log("UpdateSupplierAwardDetails-Query:".$query);
        $db->runquery($query);
    }

    function UpdateSupplierProductCategoryMedia($rec_id, $sup_productcategory_rec_id, $sup_media_rec_id, $webmedia) {
        $db = new Db;
        if ($rec_id == 0) {
            $master_rec_id = '0';
            $rec_action = 'INSERT';
            $query = "INSERT INTO tpl_supplier_productcategory_media"
                    . "("
                    . "SUPPLIER_PRODUCTCATEGORY_REC_ID,"
                    . "SUPPLIER_MEDIA_REC_ID,"
                    . "IS_MANDATORY_MEDIA,"
                    . "REC_DATETIME)"
                    . "VALUES"
                    . "("
                    . "\"$sup_productcategory_rec_id\","
                    . "\"$sup_media_rec_id\","
                    . "\"$webmedia\","
                    . "\"" . date('Y-m-d H:i:s') . "\""
                    . ");";
        } else {
            $query = "UPDATE tpl_supplier_productcategory_media"
                    . " SET"
                    . " SUPPLIER_PRODUCTCATEGORY_REC_ID = \"$sup_productcategory_rec_id\","
                    . " SUPPLIER_MEDIA_REC_ID = \"$sup_media_rec_id\","
                    . " IS_MANDATORY_MEDIA = \"$webmedia\","
                    . " REC_DATETIME = \"" . date('Y-m-d H:i:s') . "\""
                    . " WHERE (REC_ID = \"$rec_id\")";
        }
        $db->runquery($query);
    }

    function UpdateSupplierProductMedia($rec_id, $sup_product_rec_id, $sup_media_rec_id, $webmedia) {
        $db = new Db;
        if ($rec_id == 0) {
            $master_rec_id = '0';
            $rec_action = 'INSERT';
            $query = "INSERT INTO tpl_supplier_product_media"
                    . "("
                    . "SUPPLIER_PRODUCT_REC_ID,"
                    . "SUPPLIER_MEDIA_REC_ID, "
                    . "IS_MANDATORY_MEDIA, "
                    . "REC_DATETIME) "
                    . "VALUES "
                    . "( "
                    . "\"$sup_product_rec_id\", "
                    . "\"$sup_media_rec_id\","
                    . "\"$webmedia\", "
                    . "\"" . date('Y-m-d H:i:s') . "\" "
                    . ");";
        } else {
            $query = "UPDATE tpl_supplier_product_media "
                    . " SET "
                    . " SUPPLIER_PRODUCT_REC_ID = \"$sup_product_rec_id\", "
                    . " SUPPLIER_MEDIA_REC_ID = \"$sup_media_rec_id\", "
                    . " IS_MANDATORY_MEDIA = \"$webmedia\", "
                    . " REC_DATETIME = \"" . date('Y-m-d H:i:s') . "\" "
                    . " WHERE (REC_ID = \"$rec_id\")";
        }
        //construct new debug error logger
        //$logme = new debuglog();
        error_log("UpdateSupplierAwardDetails-Query:" . $query);
        $db->runquery($query);
    }

    function UpdateSupplierPersonDetails($rec_id, $shadow_rec_id, $supplier_rec_id, $name, $position, $postal_address_building_address, $postal_address_street_address, $postal_address_suburb, $postal_address_city, $postal_address_post_code, $postal_address_country, $telephone_no, $fax_no, $email_address) {
        $db = new Db;
        if ($rec_id == 0) {
            $master_rec_id = '0';
            $rec_action = 'INSERT';
            $query = "insert into tpl_shadow_supplier_key_personnel (SHADOW_REC_ID, MASTER_REC_ID, REC_DATETIME, REC_TIMESTAMP, REC_ACTION,
                         SUPPLIER_REC_ID, NAME,
                         POSITION,  
                         POSTAL_ADDRESS_BUILDING_ADDRESS, 
                         POSTAL_ADDRESS_STREET_ADDRESS, 
                         POSTAL_ADDRESS_SUBURB, 
                         POSTAL_ADDRESS_CITY, 
                         POSTAL_ADDRESS_POST_CODE, 
                         POSTAL_ADDRESS_COUNTRY,
                         TELEPHONE_NO, FAX_NO, EMAIL_ADDRESS)
                         VALUE ( 
                         $shadow_rec_id, 0, \"" . date('Y-m-d H:i:s') . "\", \"" . date('Y-m-d H:i:s') . "\", 
                         \"$rec_action\", 
                         \"$supplier_rec_id\", 
                         \"$name\",
                         \"$position\",  
                         \"$postal_address_building_address\", 
                         \"$postal_address_street_address\", 
                         \"$postal_address_suburb\", 
                         \"$postal_address_city\", 
                         \"$postal_address_post_code\", 
                         \"$postal_address_country\", 
                         \"$telephone_no\", 
                         \"$fax_no\",
                         \"$email_address\")";
        } else {
            $rec_action = 'UPDATE';
            $query = "update tpl_shadow_supplier_key_personnel set 
	                 REC_TIMESTAMP = \"" . date('Y-m-d H:i:s') . "\", 
	                 REC_ACTION = \"$rec_action\", 
	                 NAME = \"$name\", 
	                 POSITION = \"$position\", 
	                 POSTAL_ADDRESS_BUILDING_ADDRESS = \"$postal_address_building_address\", 
	                 POSTAL_ADDRESS_STREET_ADDRESS = \"$postal_address_street_address\", 
	                 POSTAL_ADDRESS_SUBURB = \"$postal_address_suburb\", 
	                 POSTAL_ADDRESS_CITY = \"$postal_address_city\", 
	                 POSTAL_ADDRESS_POST_CODE = \"$postal_address_post_code\", 
	                 POSTAL_ADDRESS_COUNTRY = \"$postal_address_country\", 
	                 TELEPHONE_NO = \"$telephone_no\", 
	                 FAX_NO = \"$fax_no\", 
	                 EMAIL_ADDRESS = \"$email_address\" 
	                 where (REC_ID = $rec_id);";
        }
        $db->runquery($query);
    }

    function UpdateSupplierBrandDetails($rec_id, $shadow_rec_id, $supplier_rec_id, $brand_rec_id, $logolisting) {
        $db = new Db;
        if ($rec_id == 0) {
            $master_rec_id = '0';
            $rec_action = 'INSERT';
            $query = "insert into tpl_shadow_supplier_brand (SHADOW_REC_ID, MASTER_REC_ID, REC_DATETIME, REC_TIMESTAMP, REC_ACTION,
	                                                 SUPPLIER_REC_ID, BRAND_REC_ID, IS_LOGO_LISTING)
	                                                 VALUE ( 
	                                                 $shadow_rec_id, 0, \"" . date('Y-m-d H:i:s') . "\", \"" . date('Y-m-d H:i:s') . "\", 
	                                                 \"$rec_action\", 
	                                                 \"$supplier_rec_id\", 
	                                                 \"$brand_rec_id\",
	                                                 $logolisting)";
        } else {
            $rec_action = 'UPDATE';
            $query = "update tpl_shadow_supplier_brand set 
	                 REC_TIMESTAMP = \"" . date('Y-m-d H:i:s') . "\", 
	                 REC_ACTION = \"$rec_action\", 
	                 BRAND_REC_ID = \"$brand_rec_id\", 
	                 IS_LOGO_LISTING = $logolisting
	                 where (REC_ID = $rec_id);";
        }
        $db->runquery($query);
    }

    function UpdateSupplierProductDetails($rec_id, $shadow_rec_id, $supplier_rec_id, $directory_rec_id, $product_category_rec_id, $label_name, $varietal, $vintage, $region_of_origin, $country_of_origin, $logolisting, $nextrecid) {
        $db = new Db;
        if ($rec_id == 0) {
            $master_rec_id = '0';
            $rec_action = 'INSERT';
            $query = "insert into tpl_shadow_product (SHADOW_REC_ID, MASTER_REC_ID, REC_DATETIME, REC_TIMESTAMP, REC_ACTION,"
                    . " PRODUCT_CATEGORY_REC_ID, SUPPLIER_REC_ID, DIRECTORY_REC_ID, LABEL_NAME,"
                    . " VARIETAL, VINTAGE, REGION_OF_ORIGIN, COUNTRY_OF_ORIGIN, IS_LOGO_LISTING)"
                    . "VALUE ( "
                    . "   $shadow_rec_id, 0, \"" . date('Y-m-d H:i:s') . "\", \"" . date('Y-m-d H:i:s') . "\","
                    . "  \"$rec_action\", "
                    . " \"$product_category_rec_id\", "
                    . " \"$supplier_rec_id\", "
                    . " \"$directory_rec_id\", "
                    . "  \"$label_name\","
                    . "  \"$varietal\","
                    . "  \"$vintage\","
                    . " \"$region_of_origin\","
                    . "  \"$country_of_origin\","
                    . " \"$logolisting\"
                    )";
        } else {
            $rec_action = 'UPDATE';
            if (!isset($brand_rec_id))
                $brand_rec_id = 0;
            $query = "update tpl_shadow_product set "
                    . " REC_TIMESTAMP = \"" . date('Y-m-d H:i:s') . "\","
                    . " REC_ACTION = \"$rec_action\", "
                    . " BRAND_REC_ID = \"$brand_rec_id\", "
                    . " LABEL_NAME = \"$label_name\","
                    . " VARIETAL = \"$varietal\","
                    . " VINTAGE = \"$vintage\","
                    . " REGION_OF_ORIGIN = \"$region_of_origin\","
                    . " COUNTRY_OF_ORIGIN = \"$country_of_origin\","
                    . " IS_LOGO_LISTING = $logolisting"
                    . " where (REC_ID = $rec_id);";
        }
        error_log("nextrecid:" . $query);
        $db->runquery($query);
    }

    function GetBrandByName($brand_name) {
        $db = new Db;
        $result = $db->getrow("(NAME = \"$brand_name\")", "tpl_brand", "");
        return $result;
    }

    function AddSupplierBrandDetails($shadow_rec_id, $supplier_rec_id, $directory_id, $brand_name, $logolisting) {
        $db = new Db;
        $query = "SELECT * FROM tpl_brand where NAME LIKE \"$brand_name\"";
        $brands = $db->openquery($query);
        if ($brands) {
            $brand_id = $brands[0]['REC_ID'];
        } else {
            $query = "INSERT INTO 
                     `tpl_brand`
                      (`REC_DATETIME`, `REC_TIMESTAMP`, `NAME`) 
                    VALUE (\"" . date('Y-m-d H:i:s') . "\", \"" . date('Y-m-d H:i:s') . "\", \"$brand_name\");";
            $db->exec($query);

            $query = "SELECT * FROM tpl_brand where NAME LIKE \"$brand_name\"";
            $brands = $db->openquery($query);
            $brand_id = $brands[0]['REC_ID'];
        }

        $query = "SELECT * FROM tpl_brand_directory where (BRAND_REC_ID = $brand_id) AND (DIRECTORY_REC_ID = $directory_id)";
        $directorybrands = $db->openquery($query);
        if (!$directorybrands) {
            $query = "INSERT INTO `tpl_brand_directory`
                      (`REC_DATETIME`, `REC_TIMESTAMP`, `BRAND_REC_ID`, `DIRECTORY_REC_ID`) 
                    VALUE 
                      (\"" . date('Y-m-d H:i:s') . "\", \"" . date('Y-m-d H:i:s') . "\", $brand_id, $directory_id)";
            $db->exec($query);
        }

        $this->UpdateSupplierBrandDetails(0, $shadow_rec_id, $supplier_rec_id, $brand_id, $logolisting);
    }

    function SetShadowState($shadow_rec_id, $state, $name, $position) {
        $db = new Db;
        $query = "update tpl_shadow_root set REC_TIMESTAMP = \"" . date('Y-m-d H:i:s') . "\", STATE = \"$state\", PROOF_NAME = \"$name\", PROOF_POSITION = \"$position\" where (REC_ID = $shadow_rec_id);";
        $db->runquery($query);
    }
    function AddClient($client_name, $firstname, $lastname, $username,$password,$email) {
        $db = new Db;
        
        $query = "INSERT INTO tpl_client ( REC_DATETIME, REC_TIMESTAMP, NAME,FIRST_NAME,LAST_NAME,USERNAME,PASSWORD,EMAIL_ADDRESS,IS_DELETED )
        VALUE( NOW(), NOW(), '".$client_name."', '".$firstname."','".$lastname."', '".$username."', '".$password."', '".$email."' ,0)";
        $id=$db->runquerywithid($query);
        
        return $id;
    } 

}

?>