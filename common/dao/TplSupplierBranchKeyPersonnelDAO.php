<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once $path_doc_root . "/config.php";

class TplSupplierBranchKeyPersonnelDAO {

    //private $SQLSELECTINSERT = "INSERT INTO tpl_supplier_key_personnel (REC_DATETIME, REC_TIMESTAMP, SUPPLIER_REC_ID, NAME, POSITION, TELEPHONE_NO, FAX_NO,  EMAIL_ADDRESS, PHYSICAL_ADDRESS_BUILDING_ADDRESS, PHYSICAL_ADDRESS_STREET_ADDRESS, PHYSICAL_ADDRESS_SUBURB, PHYSICAL_ADDRESS_CITY, PHYSICAL_ADDRESS_STATE,  PHYSICAL_ADDRESS_COUNTRY, PHYSICAL_ADDRESS_POST_CODE, POSTAL_ADDRESS_BUILDING_ADDRESS, POSTAL_ADDRESS_STREET_ADDRESS, POSTAL_ADDRESS_SUBURB,  POSTAL_ADDRESS_CITY, POSTAL_ADDRESS_STATE, POSTAL_ADDRESS_COUNTRY, POSTAL_ADDRESS_POST_CODE) select REC_DATETIME, REC_TIMESTAMP, SUPPLIER_REC_ID, NAME, POSITION, TELEPHONE_NO, FAX_NO,  EMAIL_ADDRESS, PHYSICAL_ADDRESS_BUILDING_ADDRESS, PHYSICAL_ADDRESS_STREET_ADDRESS, PHYSICAL_ADDRESS_SUBURB, PHYSICAL_ADDRESS_CITY, PHYSICAL_ADDRESS_STATE,  PHYSICAL_ADDRESS_COUNTRY, PHYSICAL_ADDRESS_POST_CODE, POSTAL_ADDRESS_BUILDING_ADDRESS, POSTAL_ADDRESS_STREET_ADDRESS, POSTAL_ADDRESS_SUBURB,  POSTAL_ADDRESS_CITY, POSTAL_ADDRESS_STATE, POSTAL_ADDRESS_COUNTRY, POSTAL_ADDRESS_POST_CODE from tpl_shadow_supplier_key_personnel where REC_ID=?";
    //private $SQLSELECTUPDATE = "UPDATE tpl_supplier_key_personnel SET REC_DATETIME = ?, REC_TIMESTAMP = ?,SUPPLIER_REC_ID = ?, `ORDER` = ?, NAME = ?, POSITION = ?, TELEPHONE_NO = ?,FAX_NO = ?, EMAIL_ADDRESS = ?, PHYSICAL_ADDRESS_BUILDING_ADDRESS = ?, PHYSICAL_ADDRESS_STREET_ADDRESS = ?,PHYSICAL_ADDRESS_SUBURB = ?, PHYSICAL_ADDRESS_CITY = ?, PHYSICAL_ADDRESS_STATE = ?,PHYSICAL_ADDRESS_COUNTRY = ?, PHYSICAL_ADDRESS_POST_CODE = ?, POSTAL_ADDRESS_BUILDING_ADDRESS = ?,POSTAL_ADDRESS_STREET_ADDRESS = ?, POSTAL_ADDRESS_SUBURB = ?, POSTAL_ADDRESS_CITY = ?,POSTAL_ADDRESS_STATE = ?, POSTAL_ADDRESS_COUNTRY = ?, POSTAL_ADDRESS_POST_CODE = ? WHERE REC_ID = ?";
    //private $SQLDELETE = "DELETE FROM tpl_supplier_key_personnel WHERE REC_ID = ?";
    private $SQLSELECT = "SELECT * FROM tpl_supplier_branch_key_personnel WHERE SUPPLIER_KEY_PERSONNEL_REC_ID = ?";

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

//    function selectInsert($dbconn, $param_arr) {
//        try {
//            $stmt = $dbconn->prepare($this->SQLSELECTINSERT);
//            $stmt->execute($param_arr);
//        } catch (Exception $ex) {
//            echo $ex;
//            throw new PDOException($ex);
//        }
//    }
//
//    function selectUpdate($dbconn, $param_arr) {
//        try {
//            $tplshadowsupplierkeypersonnel = new TplShadowSupplierKeyPersonnelDAO();
//            $keypersonneldata = $tplshadowsupplierkeypersonnel->selectFilter($dbconn, $param_arr);
//
//            $stmt = $dbconn->prepare($this->SQLSELECTUPDATE);
//            $stmt->execute($keypersonneldata);
//        } catch (Exception $ex) {
//            echo $ex;
//            throw new PDOException($ex);
//        }
//    }
//
//    function delete($dbconn, $param_arr) {
//        try {
//            $stmt = $dbconn->prepare($this->SQLDELETE);
//            $stmt->execute($param_arr);
//        } catch (Exception $ex) {
//            echo $ex;
//            throw new PDOException($ex);
//        }
//    }

}

?>
