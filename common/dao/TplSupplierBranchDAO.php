<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once $path_doc_root . "/config.php";

class TplSupplierBranchDAO {

    private $SQLSELECTINSERT = "INSERT INTO tpl_supplier_branch (REC_DATETIME, REC_TIMESTAMP, SUPPLIER_REC_ID, NAME, TELEPHONE_NO, FREE_TELEPHONE_NO, FAX_NO, FREE_FAX_NO,  EMAIL_ADDRESS, PHYSICAL_ADDRESS_BUILDING_ADDRESS, PHYSICAL_ADDRESS_STREET_ADDRESS, PHYSICAL_ADDRESS_SUBURB, PHYSICAL_ADDRESS_CITY, PHYSICAL_ADDRESS_STATE, PHYSICAL_ADDRESS_COUNTRY, PHYSICAL_ADDRESS_POST_CODE, POSTAL_ADDRESS_BUILDING_ADDRESS, POSTAL_ADDRESS_STREET_ADDRESS, POSTAL_ADDRESS_SUBURB,POSTAL_ADDRESS_CITY, POSTAL_ADDRESS_STATE, POSTAL_ADDRESS_COUNTRY, POSTAL_ADDRESS_POST_CODE)  SELECT REC_DATETIME, REC_TIMESTAMP, SUPPLIER_REC_ID, NAME, TELEPHONE_NO, FREE_TELEPHONE_NO, FAX_NO, FREE_FAX_NO,  EMAIL_ADDRESS, PHYSICAL_ADDRESS_BUILDING_ADDRESS, PHYSICAL_ADDRESS_STREET_ADDRESS, PHYSICAL_ADDRESS_SUBURB, PHYSICAL_ADDRESS_CITY, PHYSICAL_ADDRESS_STATE, PHYSICAL_ADDRESS_COUNTRY, PHYSICAL_ADDRESS_POST_CODE, POSTAL_ADDRESS_BUILDING_ADDRESS, POSTAL_ADDRESS_STREET_ADDRESS, POSTAL_ADDRESS_SUBURB,POSTAL_ADDRESS_CITY, POSTAL_ADDRESS_STATE, POSTAL_ADDRESS_COUNTRY, POSTAL_ADDRESS_POST_CODE from tpl_shadow_supplier_branch  WHERE REC_ID = ?";
    private $SQLSELECTUPDATE = "UPDATE tpl_supplier_branch SET REC_DATETIME = ?, REC_TIMESTAMP =  ?,SUPPLIER_REC_ID =  ?, `ORDER` =  ?, NAME =  ?, TELEPHONE_NO =  ?, FREE_TELEPHONE_NO =  ?,FAX_NO =  ?, FREE_FAX_NO =  ?, EMAIL_ADDRESS =  ?, PHYSICAL_ADDRESS_BUILDING_ADDRESS =  ?, PHYSICAL_ADDRESS_STREET_ADDRESS =  ?,PHYSICAL_ADDRESS_SUBURB =  ?, PHYSICAL_ADDRESS_CITY =  ?, PHYSICAL_ADDRESS_STATE =  ?,PHYSICAL_ADDRESS_COUNTRY =  ?, PHYSICAL_ADDRESS_POST_CODE =  ?, POSTAL_ADDRESS_BUILDING_ADDRESS =  ?,POSTAL_ADDRESS_STREET_ADDRESS =  ?, POSTAL_ADDRESS_SUBURB =  ?, POSTAL_ADDRESS_CITY =  ?,POSTAL_ADDRESS_STATE =  ?, POSTAL_ADDRESS_COUNTRY =  ?, POSTAL_ADDRESS_POST_CODE =  ? WHERE REC_ID =  ?";
    private $SQLDELETE = "DELETE FROM tpl_supplier_branch WHERE REC_ID = ?";
    private $SQLSELECT = "SELECT * FROM tpl_supplier_branch WHERE SUPPLIER_REC_ID = ?";

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

    function selectInsert($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLSELECTINSERT);
            $stmt->execute($param_arr);
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

    function selectUpdate($dbconn, $param_arr) {
        try {
            $tplshadowsupplierbrand = new TplShadowSupplierBrandDAO();
            $branddata = $tplshadowsupplierbrand->selectFilter($dbconn, $param_arr);

            $stmt = $dbconn->prepare($this->SQLSELECTUPDATE);
            $stmt->execute($branddata);
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

    function delete($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLDELETE);
            $stmt->execute($param_arr);
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

}

?>
