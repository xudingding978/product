<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
require $path_doc_root . "/config.php";

class TplShadowSupplierKeyPersonnelDAO {

    private $SQLSELECT = "SELECT * FROM tpl_shadow_supplier_key_personnel  WHERE (SHADOW_SUPPLIER_REC_ID = ?) and REC_ACTION!='DELETE' ORDER BY REC_ID";
    private $SQLSELECTFILTER = "Select REC_DATETIME, REC_TIMESTAMP,SUPPLIER_REC_ID, `ORDER`, NAME , POSITION , TELEPHONE_NO,FAX_NO, EMAIL_ADDRESS, PHYSICAL_ADDRESS_BUILDING_ADDRESS, PHYSICAL_ADDRESS_STREET_ADDRESS,PHYSICAL_ADDRESS_SUBURB, PHYSICAL_ADDRESS_CITY, PHYSICAL_ADDRESS_STATE,PHYSICAL_ADDRESS_COUNTRY, PHYSICAL_ADDRESS_POST_CODE , POSTAL_ADDRESS_BUILDING_ADDRESS ,POSTAL_ADDRESS_STREET_ADDRESS, POSTAL_ADDRESS_SUBURB , POSTAL_ADDRESS_CITY,POSTAL_ADDRESS_STATE, POSTAL_ADDRESS_COUNTRY , POSTAL_ADDRESS_POST_CODE,MASTER_REC_ID tpl_supplier_key_personnel WHERE REC_ID = ?";
    private $SQLUPDATE = "UPDATE tpl_shadow_supplier_key_personnel set `REC_DATETIME` = NOW(), `REC_TIMESTAMP` = NOW(), `REC_ACTION` = ?,NAME= ?,POSITION = ?, POSTAL_ADDRESS_BUILDING_ADDRESS = ?,POSTAL_ADDRESS_STREET_ADDRESS=?,POSTAL_ADDRESS_SUBURB= ?,POSTAL_ADDRESS_CITY= ?, POSTAL_ADDRESS_POST_CODE = ?,POSTAL_ADDRESS_COUNTRY = ?,TELEPHONE_NO = ?, FAX_NO = ?, EMAIL_ADDRESS = ? WHERE   REC_ID = ?";
    private $SQLSELECTINSERT = "INSERT INTO tpl_shadow_supplier_key_personnel(`SHADOW_REC_ID`, `MASTER_REC_ID`, `REC_DATETIME`, `REC_TIMESTAMP`, `REC_ACTION`, `SUPPLIER_REC_ID`, `ORDER`, `NAME`, `POSITION`, `TELEPHONE_NO`, `FAX_NO`, `EMAIL_ADDRESS`, `PHYSICAL_ADDRESS_BUILDING_ADDRESS`, `PHYSICAL_ADDRESS_STREET_ADDRESS`, `PHYSICAL_ADDRESS_SUBURB`, `PHYSICAL_ADDRESS_CITY`, `PHYSICAL_ADDRESS_STATE`, `PHYSICAL_ADDRESS_COUNTRY`, `PHYSICAL_ADDRESS_POST_CODE`, `POSTAL_ADDRESS_BUILDING_ADDRESS`, `POSTAL_ADDRESS_STREET_ADDRESS`, `POSTAL_ADDRESS_SUBURB`, `POSTAL_ADDRESS_CITY`, `POSTAL_ADDRESS_STATE`, `POSTAL_ADDRESS_COUNTRY`, `POSTAL_ADDRESS_POST_CODE`) SELECT ?, `REC_ID`, NOW(),NOW(),NULL, `SUPPLIER_REC_ID`, `ORDER`, `NAME`, `POSITION`, `TELEPHONE_NO`, `FAX_NO`, `EMAIL_ADDRESS`, `PHYSICAL_ADDRESS_BUILDING_ADDRESS`, `PHYSICAL_ADDRESS_STREET_ADDRESS`, `PHYSICAL_ADDRESS_SUBURB`, `PHYSICAL_ADDRESS_CITY`, `PHYSICAL_ADDRESS_STATE`, `PHYSICAL_ADDRESS_COUNTRY`, `PHYSICAL_ADDRESS_POST_CODE`, `POSTAL_ADDRESS_BUILDING_ADDRESS`, `POSTAL_ADDRESS_STREET_ADDRESS`, `POSTAL_ADDRESS_SUBURB`, `POSTAL_ADDRESS_CITY`, `POSTAL_ADDRESS_STATE`, `POSTAL_ADDRESS_COUNTRY`, `POSTAL_ADDRESS_POST_CODE` FROM tpl_supplier_key_personnel WHERE(REC_ID = ?)";
    private $SQLINSERT = "insert into tpl_shadow_supplier_key_personnel (REC_DATETIME, REC_TIMESTAMP, REC_ACTION,
                         SHADOW_SUPPLIER_REC_ID, NAME,
                         POSITION,  
                         POSTAL_ADDRESS_BUILDING_ADDRESS, 
                         POSTAL_ADDRESS_STREET_ADDRESS, 
                         POSTAL_ADDRESS_SUBURB, 
                         POSTAL_ADDRESS_CITY, 
                         POSTAL_ADDRESS_POST_CODE, 
                         POSTAL_ADDRESS_COUNTRY,
                         TELEPHONE_NO, FAX_NO, EMAIL_ADDRESS)
                         VALUE ( NOW(), NOW(), 
                         ?, ?, ?,?, ?,?,?,?,?,?,?,?,?)";
    private $SQLDELETEUPDATE = "UPDATE tpl_shadow_supplier_key_personnel SET `REC_ACTION` = ?  WHERE REC_ID = ? ";

    function insert($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLINSERT);
            $stmt->execute($param_arr);
        } catch (Exception $ex) {
            echo $ex;
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
    function deleteUpdate($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLDELETEUPDATE);
            $stmt->execute($param_arr);
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

    function update($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLUPDATE);
            $stmt->execute($param_arr);
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

    function selectFilter($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLSELECTFILTER);
            $stmt->execute($param_arr);
            $arr = $stmt->fetch(PDO::FETCH_LAZY);
            $count = 0;
            $brand_data = null;
            foreach ($arr as $rec) {
                if ($count != 0) {
                    $brand_data[$count - 1] = $rec;
                }
                $count = $count + 1;
            }
            return $brand_data;
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

}

?>
