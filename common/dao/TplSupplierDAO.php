<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
require $path_doc_root . "/config.php";
include_once "../common/dao/TplShadowSupplierDAO.php";


class TplSupplierDAO {

    private $SQLUPDATE = "UPDATE tpl_supplier SET REC_DATETIME = ?, REC_TIMESTAMP = ?, NAME = ?, TRADING_AS_NAME = ?, CONTACT_NAME = ?, CONTACT_POSITION = ?, TELEPHONE_NO = ?, FREE_TELEPHONE_NO = ?, FAX_NO = ?, FREE_FAX_NO = ?, EMAIL_ADDRESS = ?, WEBSITE_ADDRESS = ?, PHYSICAL_ADDRESS_BUILDING_ADDRESS = ?, PHYSICAL_ADDRESS_STREET_ADDRESS = ?, PHYSICAL_ADDRESS_SUBURB = ?, PHYSICAL_ADDRESS_CITY = ?, PHYSICAL_ADDRESS_STATE = ?, PHYSICAL_ADDRESS_COUNTRY = ?, PHYSICAL_ADDRESS_POST_CODE = ?, PHYSICAL_ADDRESS_PXID = ?, PHYSICAL_ADDRESS_DPID = ?, PHYSICAL_ADDRESS_LATITUDE = ?, PHYSICAL_ADDRESS_LONGITUDE = ?, PHYSICAL_ADDRESS_HEIGHT = ?, PHYSICAL_ADDRESS_COMPLETE = ?, POSTAL_ADDRESS_BUILDING_ADDRESS = ?, POSTAL_ADDRESS_STREET_ADDRESS = ?, POSTAL_ADDRESS_SUBURB = ?, POSTAL_ADDRESS_CITY = ?, POSTAL_ADDRESS_STATE = ?, POSTAL_ADDRESS_COUNTRY = ?, POSTAL_ADDRESS_POST_CODE = ?, COMPANY_PROFILE_TEXT = ?, PRINT_LOGO_LOCATION = ?, WEB_LOGO_LOCATION = ?, SUPPLIER_TYPE_REC_ID = ?  WHERE CLIENT_REC_ID = ?";
    private $SQLSELECT = "select REC_ID from tpl_supplier";
    private $SQLSELECTCLIENT = "SELECT * FROM tpl_supplier WHERE CLIENT_REC_ID = ?";
    private $SQLSELECTSHADOWROOT = "select REC_ID from tpl_supplier where SHADOW_REC_ID=?";

    function selectShadowRoot($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLSELECTSHADOWROOT);
            $stmt->execute($param_arr);
            $result = $stmt->fetch(PDO::FETCH_LAZY);
            return $result;
        } catch (Exception $ex) {
            throw new PDOException($ex);
        }
    }
    function update($dbconn, $param_arr) {
        try {

            $tplshadowdao = new TplShadowSupplierDAO();
            $Suppliers_result = $tplshadowdao->selectsupplier($dbconn, $param_arr);

            $stmt = $dbconn->prepare($this->SQLUPDATE);
            $stmt->execute($Suppliers_result);

            $array = array($Suppliers_result[36]);
            $result = $this->select($dbconn, $param_arr);
            return $result["REC_ID"];
        } catch (Exception $ex) {
            throw new PDOException($ex);
        }
    }

    function select($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLSELECT);
            $stmt->execute($param_arr);
            $result = $stmt->fetch(PDO::FETCH_LAZY);
            return $result;
        } catch (Exception $ex) {
            throw new PDOException($ex);
        }
    }

    function selectClient($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLSELECTCLIENT);
            $stmt->execute($param_arr);
            $result = $stmt->fetch(PDO::FETCH_LAZY);
            return $result;
        } catch (Exception $ex) {
            throw new PDOException($ex);
        }
    }

}

?>
