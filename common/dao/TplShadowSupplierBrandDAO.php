<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once $path_doc_root . "/config.php";

class TplShadowSupplierBrandDAO {
    private $SQLSelectInnerBrand = "select tpl_shadow_supplier_brand.REC_ID as REC_ID,tpl_brand.NAME as NAME,tpl_shadow_supplier_brand.IS_LOGO_LISTING as IS_LOGO_LISTING  from tpl_shadow_supplier_brand INNER JOIN tpl_brand ON (tpl_shadow_supplier_brand.BRAND_REC_ID = tpl_brand.REC_ID) where tpl_shadow_supplier_brand.REC_ACTION!='DELETE' order by tpl_brand.NAME";
    private $SQLBrandSelect= "select tpl_shadow_supplier_brand.REC_ID as REC_ID,tpl_brand.NAME as NAME,tpl_shadow_supplier_brand.IS_LOGO_LISTING as IS_LOGO_LISTING  from tpl_shadow_supplier_brand INNER JOIN tpl_brand ON (tpl_shadow_supplier_brand.BRAND_REC_ID = tpl_brand.REC_ID) where tpl_shadow_supplier_brand.REC_ID=?";
    private $SQLSELECT = "SELECT * FROM tpl_shadow_supplier_brand WHERE (SHADOW_REC_ID = ?) ORDER BY REC_ID";
    private $SQLSELECTFILTER = "SELECT REC_DATETIME,REC_TIMESTAMP,SUPPLIER_REC_ID,BRAND_REC_ID,IS_LOGO_LISTING,MASTER_REC_ID FROM tpl_shadow_supplier_brand WHERE SHADOW_REC_ID = ?";
    //private $SQLUPDATE = "UPDATE tpl_shadow_supplier_brand SET `MASTER_REC_ID` = ?,`REC_DATETIME` = NOW(), `REC_TIMESTAMP` = NOW(), `REC_ACTION` = NULL WHERE `SHADOW_REC_ID` = ? AND `SUPPLIER_REC_ID` = ?";
    private $SQLSELECTINSERT = "INSERT INTO tpl_shadow_supplier_brand(`SHADOW_REC_ID`, `MASTER_REC_ID`, `REC_DATETIME`, `REC_TIMESTAMP`, `REC_ACTION`, `SUPPLIER_REC_ID`, `BRAND_REC_ID`, `IS_LOGO_LISTING`) SELECT ?,`REC_ID`,NOW(),NOW(),NULL, `SUPPLIER_REC_ID`, `BRAND_REC_ID`, `IS_LOGO_LISTING` FROM tpl_supplier_brand WHERE (SUPPLIER_REC_ID = ?)";
    private $SQLStateUpdate = "update tpl_shadow_supplier_brand set REC_TIMESTAMP = NOW(),REC_ACTION = ? where (REC_ID = ?)";
    private $SQLINSERT = "insert into tpl_shadow_supplier_brand ( REC_DATETIME, REC_TIMESTAMP, REC_ACTION, SUPPLIER_REC_ID, BRAND_REC_ID, IS_LOGO_LISTING) VALUE (NOW(), NOW(),?,?,?,?)";
    private $SQLUpdate = "update tpl_shadow_supplier_brand set REC_TIMESTAMP = NOW(),REC_ACTION = ?, BRAND_REC_ID = ?, IS_LOGO_LISTING = ? where (REC_ID =?)";
    private $SQLDelete = "DELETE FROM tpl_shadow_supplier_brand where (REC_ID = ?)";
    function delete($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLDelete);
            $stmt->execute($param_arr);
        } catch (Exception $ex) {
            error_log($ex);
            echo $ex;
            throw new PDOException($ex);
        }
    }
    function stateUpdate($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLStateUpdate);
            $stmt->execute($param_arr);
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    } 
    
    function brandSelect($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLBrandSelect);
            $stmt->execute($param_arr);
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }  
    function selectInnerBrand($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLSelectInnerBrand);
            $stmt->execute();
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }   
     function insert($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLINSERT);
            $stmt->execute($param_arr);  
            return $dbconn->lastInsertId();
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
    function update($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLUpdate);
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
