<?php
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
require $path_doc_root . "/config.php";
require_once $path_doc_root .'/common/util/BaseDAO.php';
//TplShadowSupplierCategoryProductDAO TplSupplierCategoryDAO  tpl_shadow_supplier
class TplShadowSupplierDAO extends BaseDAO{

    private $SQLSELECT = "SELECT * FROM tpl_shadow_supplier WHERE SHADOW_REC_ID =?";
    private $SQLSELECTEXISTSUPPLIER = "SELECT * FROM tpl_shadow_supplier WHERE SHADOW_REC_ID = ? and MASTER_REC_ID= ? ";
    private $SQLSELECTSUPPLIER = "SELECT REC_DATETIME , REC_TIMESTAMP ,  NAME , TRADING_AS_NAME ,CONTACT_NAME ,
      CONTACT_POSITION , TELEPHONE_NO , FREE_TELEPHONE_NO , FAX_NO , FREE_FAX_NO , EMAIL_ADDRESS , WEBSITE_ADDRESS 
      , PHYSICAL_ADDRESS_BUILDING_ADDRESS , PHYSICAL_ADDRESS_STREET_ADDRESS , PHYSICAL_ADDRESS_SUBURB ,
      PHYSICAL_ADDRESS_CITY , PHYSICAL_ADDRESS_STATE, PHYSICAL_ADDRESS_COUNTRY , PHYSICAL_ADDRESS_POST_CODE ,
      PHYSICAL_ADDRESS_PXID , PHYSICAL_ADDRESS_DPID , PHYSICAL_ADDRESS_LATITUDE , PHYSICAL_ADDRESS_LONGITUDE ,
      PHYSICAL_ADDRESS_HEIGHT , PHYSICAL_ADDRESS_COMPLETE , POSTAL_ADDRESS_BUILDING_ADDRESS , 
      POSTAL_ADDRESS_STREET_ADDRESS , POSTAL_ADDRESS_SUBURB , POSTAL_ADDRESS_CITY , POSTAL_ADDRESS_STATE , 
      POSTAL_ADDRESS_COUNTRY , POSTAL_ADDRESS_POST_CODE  , COMPANY_PROFILE_TEXT , PRINT_LOGO_LOCATION ,
      WEB_LOGO_LOCATION , SUPPLIER_TYPE_REC_ID ,CLIENT_REC_ID  FROM tpl_shadow_supplier WHERE SHADOW_REC_ID = ?";
    private $SQLSELECTSUPPLIER1 = "select REC_DATETIME, REC_TIMESTAMP, NAME , TRADING_AS_NAME , TELEPHONE_NO, 
      FREE_TELEPHONE_NO, FAX_NO, FREE_FAX_NO, EMAIL_ADDRESS, WEBSITE_ADDRESS , PHYSICAL_ADDRESS_BUILDING_ADDRESS, 
      PHYSICAL_ADDRESS_STREET_ADDRESS , PHYSICAL_ADDRESS_SUBURB , PHYSICAL_ADDRESS_CITY, PHYSICAL_ADDRESS_STATE,
      PHYSICAL_ADDRESS_COUNTRY, PHYSICAL_ADDRESS_POST_CODE, PHYSICAL_ADDRESS_PXID, PHYSICAL_ADDRESS_DPID,
      PHYSICAL_ADDRESS_LATITUDE, PHYSICAL_ADDRESS_LONGITUDE, PHYSICAL_ADDRESS_HEIGHT, PHYSICAL_ADDRESS_COMPLETE, 
      POSTAL_ADDRESS_BUILDING_ADDRESS, POSTAL_ADDRESS_STREET_ADDRESS, POSTAL_ADDRESS_SUBURB, POSTAL_ADDRESS_CITY,
      POSTAL_ADDRESS_STATE , POSTAL_ADDRESS_COUNTRY, POSTAL_ADDRESS_POST_CODE   from tpl_client WHERE REC_ID = ? ";
    private $SQLUPDATEMASTERRECID = "UPDATE tpl_shadow_supplier SET `MASTER_REC_ID` = ?,`REC_DATETIME` = NOW(),`REC_TIMESTAMP` = NOW(), `REC_ACTION` = NULL WHERE `SHADOW_REC_ID` = ?";
    private $SQLSELECTINSERT = <<<'QUERY'
            INSERT INTO tpl_shadow_supplier(`SHADOW_REC_ID`,`MASTER_REC_ID`,`REC_DATETIME`,`REC_TIMESTAMP`,`REC_ACTION`,`CLIENT_REC_ID`,`NAME`,`TRADING_AS_NAME`, `CONTACT_NAME`,  
            `CONTACT_POSITION`,  `TELEPHONE_NO`,  `FREE_TELEPHONE_NO`,  `FAX_NO`,  `FREE_FAX_NO`,  `EMAIL_ADDRESS`,  `WEBSITE_ADDRESS`,  `PHYSICAL_ADDRESS_BUILDING_ADDRESS`,  
            `PHYSICAL_ADDRESS_STREET_ADDRESS`,  `PHYSICAL_ADDRESS_SUBURB`,  `PHYSICAL_ADDRESS_CITY`,  `PHYSICAL_ADDRESS_STATE`,  `PHYSICAL_ADDRESS_COUNTRY`,  `PHYSICAL_ADDRESS_POST_CODE`,  
            `PHYSICAL_ADDRESS_PXID`,  `PHYSICAL_ADDRESS_DPID`,  `PHYSICAL_ADDRESS_LATITUDE`,  `PHYSICAL_ADDRESS_LONGITUDE`,  `PHYSICAL_ADDRESS_HEIGHT`,  `PHYSICAL_ADDRESS_COMPLETE`,  
            `POSTAL_ADDRESS_BUILDING_ADDRESS`,  `POSTAL_ADDRESS_STREET_ADDRESS`,  `POSTAL_ADDRESS_SUBURB`,  `POSTAL_ADDRESS_CITY`,  `POSTAL_ADDRESS_STATE`,  `POSTAL_ADDRESS_COUNTRY`,  
            `POSTAL_ADDRESS_POST_CODE`, `COMPANY_PROFILE_TEXT`,  `PRINT_LOGO_LOCATION`,  `WEB_LOGO_LOCATION`,  `SUPPLIER_TYPE_REC_ID`) 
            SELECT ?,?, NOW(), NOW(),null,`CLIENT_REC_ID`,`NAME`,
            `TRADING_AS_NAME`, `CONTACT_NAME`,  `CONTACT_POSITION`,  `TELEPHONE_NO`,  `FREE_TELEPHONE_NO`,  `FAX_NO`,  `FREE_FAX_NO`,  `EMAIL_ADDRESS`,  `WEBSITE_ADDRESS`,  
            `PHYSICAL_ADDRESS_BUILDING_ADDRESS`,  `PHYSICAL_ADDRESS_STREET_ADDRESS`,  `PHYSICAL_ADDRESS_SUBURB`,  `PHYSICAL_ADDRESS_CITY`,  `PHYSICAL_ADDRESS_STATE`,  
            `PHYSICAL_ADDRESS_COUNTRY`,  `PHYSICAL_ADDRESS_POST_CODE`,  `PHYSICAL_ADDRESS_PXID`,  `PHYSICAL_ADDRESS_DPID`,  `PHYSICAL_ADDRESS_LATITUDE`,  `PHYSICAL_ADDRESS_LONGITUDE`,  
            `PHYSICAL_ADDRESS_HEIGHT`,  `PHYSICAL_ADDRESS_COMPLETE`,  `POSTAL_ADDRESS_BUILDING_ADDRESS`,  `POSTAL_ADDRESS_STREET_ADDRESS`,  `POSTAL_ADDRESS_SUBURB`,  `POSTAL_ADDRESS_CITY`,  
            `POSTAL_ADDRESS_STATE`,  `POSTAL_ADDRESS_COUNTRY`,  `POSTAL_ADDRESS_POST_CODE`, `COMPANY_PROFILE_TEXT`,  `PRINT_LOGO_LOCATION`,  `WEB_LOGO_LOCATION`,  `SUPPLIER_TYPE_REC_ID` 
            FROM tpl_supplier WHERE CLIENT_REC_ID = ?;
QUERY;
    private $SQL_insertNewShadowSupplier ="INSERT INTO tpl_shadow_supplier (SHADOW_REC_ID, MASTER_REC_ID, REC_DATETIME, REC_TIMESTAMP, CLIENT_REC_ID, NAME, REC_ACTION)
             VALUE( ?, 0, NOW(), NOW(), ?, ?, ?)";
    private $SQL_SelectClientsSupplier ="SELECT * from tpl_shadow_supplier where (CLIENT_REC_ID = ?) AND ((REC_ACTION IS NULL) OR (REC_ACTION <> 'DELETE')) AND (IS_DEFAULT=1)";
    private $SQL_Update="update tpl_shadow_supplier set REC_TIMESTAMP = NOW(),REC_ACTION = ?, NAME=?, TRADING_AS_NAME=?, CONTACT_NAME=?, CONTACT_POSITION=?, SUPPLIER_TYPE_REC_ID = ? where (REC_ID = ?)";
    private $SQL_Business_Profile_Update="update tpl_shadow_supplier set REC_TIMESTAMP = NOW(),REC_ACTION = ?, COMPANY_PROFILE_TEXT=?, COMPANY_STRAPLINE_TEXT=?, COMPANY_ABOUTUS_TEXT=? where (REC_ID =?)" ;
    private $SQL_Physical_Address_Update="UPDATE tpl_shadow_supplier set REC_TIMESTAMP = NOW(),REC_ACTION = ?, PHYSICAL_ADDRESS_COMPLETE = ?,  
        PHYSICAL_ADDRESS_BUILDING_ADDRESS = ?, PHYSICAL_ADDRESS_STREET_ADDRESS = ?, PHYSICAL_ADDRESS_SUBURB = ?, PHYSICAL_ADDRESS_CITY = ?, 
        PHYSICAL_ADDRESS_STATE = ?,PHYSICAL_ADDRESS_POST_CODE = ?, PHYSICAL_ADDRESS_COUNTRY = ?,PHYSICAL_ADDRESS_DPID = ?,PHYSICAL_ADDRESS_PXID = ?,
        PHYSICAL_ADDRESS_LONGITUDE = ?,PHYSICAL_ADDRESS_LATITUDE = ?,PHYSICAL_ADDRESS_HEIGHT = ? WHERE (REC_ID = ?)" ;
    private $SQL_Postal_Address_Update ="update tpl_shadow_supplier set REC_TIMESTAMP = NOW(),REC_ACTION = ?, POSTAL_ADDRESS_BUILDING_ADDRESS = ?, POSTAL_ADDRESS_STREET_ADDRESS = ?, POSTAL_ADDRESS_SUBURB = ?, POSTAL_ADDRESS_CITY = ?, POSTAL_ADDRESS_STATE = ?, POSTAL_ADDRESS_POST_CODE = ?, POSTAL_ADDRESS_COUNTRY = ? where (REC_ID =?)";
    private $SQL_Contact_Detail_Update ="update tpl_shadow_supplier set REC_TIMESTAMP = NOW(),REC_ACTION = ?, TELEPHONE_NO = ?, FREE_TELEPHONE_NO = ?, FAX_NO = ?, FREE_FAX_NO = ?, EMAIL_ADDRESS =? where (REC_ID = ?)";
    private $SQL_Web_Site_Update ="update tpl_shadow_supplier set REC_TIMESTAMP = NOW(),REC_ACTION = ?, WEBSITE_ADDRESS = ?, FACEBOOK_ADDRESS_URL = ?, TWITTER_ADDRESS_URL = ?, LINKEDIN_ADDRESS_URL = ?, YOUTUBE_ADDRESS_URL = ?, FOURSQUARE_ADDRESS_URL = ? where (REC_ID = ?)";
    
        
    function updateWebSiteDetail($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQL_Web_Site_Update);
            $stmt->execute($param_arr);           
            return true;
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }
    
    
    
    function updateContactDetail($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQL_Contact_Detail_Update);
            $stmt->execute($param_arr);           
            return true;
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }
    
    function updatePostalAddress($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQL_Postal_Address_Update);
            $stmt->execute($param_arr);           
            return true;
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }
    function updatePhysicalAddress($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQL_Physical_Address_Update);
            $stmt->execute($param_arr);           
            return true;
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }
    function updateBusinessProfile($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQL_Business_Profile_Update);
            $stmt->execute($param_arr);           
            return true;
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }
    function update($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQL_Update);
            $stmt->execute($param_arr);
           
            return true;
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }
    function selectExistSupplier($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLSELECTEXISTSUPPLIER);
            $stmt->execute($param_arr);
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }
    
     function insertNewShadowSupplier($dbconn, $param_arr) {
        try {
           // $stmt = $this->parseFilterValues($this->SQL_insertNewShadowSupplier);
            $stmt = $dbconn->prepare($this->SQL_insertNewShadowSupplier);
            $stmt->execute($param_arr);
            return $dbconn->lastInsertId();
        } catch (Exception $ex) {
            error_log($ex) ;
            throw new PDOException($ex);
        }
    }

    function selectInsert($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLSELECTINSERT);
            $stmt->execute($param_arr);
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

    function select($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLSELECT);
            $stmt->execute($param_arr);
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }
    function selectSupplierList($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQL_SelectClientsSupplier);
            $stmt->execute($param_arr);
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

    function selectsupplier($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLSELECTSUPPLIER);
            $stmt->execute($param_arr);
            $arr = $stmt->fetch(PDO::FETCH_LAZY);
            $count = 0;
            $supplier_data = null;
            foreach ($arr as $rec) {
                if ($count != 0) {
                    $supplier_data[$count - 1] = $rec;
                }
                $count = $count + 1;
            }
            return $supplier_data;
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

    function selectsupplier1($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLSELECTSUPPLIER1);
            $client_id = array($param_arr[1]);
            $stmt->execute($client_id);
            $arr = $stmt->fetch(PDO::FETCH_LAZY);
            $count = 0;
            $supplier_data = null;
            foreach ($arr as $rec) {
                if ($count != 0) {
                    $supplier_data[$count - 1] = $rec;
                }
                $count = $count + 1;
            }
            $supplier_data[$count - 1] = $param_arr[0];
            return $supplier_data;
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

    function updateMasterRecID($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLUPDATEMASTERRECID);
            $stmt->execute($param_arr);
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

}

?>
