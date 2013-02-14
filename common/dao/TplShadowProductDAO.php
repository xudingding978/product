<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once $path_doc_root . "/config.php";

class TplShadowProductDAO {

    private $SQLSELECT = "SELECT * FROM tpl_shadow_product WHERE (SHADOW_REC_ID = ?)";
    private $SQLSELECTFILTER = "select REC_DATETIME, REC_TIMESTAMP,PRODUCT_CATEGORY_REC_ID , SHADOW_SUPPLIER_REC_ID, DIRECTORY_REC_ID , LABEL_NAME , VARIETAL , VINTAGE , REGION_OF_ORIGIN ,COUNTRY_OF_ORIGIN,MASTER_REC_ID  WHERE REC_ID = ?";
    //private $SQLUPDATE = "UPDATE tpl_shadow_product SET `MASTER_REC_ID` = ?,`REC_DATETIME` = NOW(), `REC_TIMESTAMP` = NOW(), `REC_ACTION` = NULL WHERE `SHADOW_REC_ID` = ? AND `SUPPLIER_REC_ID` = ?,`DIRECTORY_REC_ID` = ? AND `PRODUCT_CATEGORY_REC_ID` = ?";
    private $SQLSELECTINSERT = "INSERT INTO tpl_shadow_product(`SHADOW_REC_ID`, `MASTER_REC_ID`, `REC_DATETIME`, `REC_TIMESTAMP`, `REC_ACTION`, `SUPPLIER_REC_ID`, `DIRECTORY_REC_ID`, `PRODUCT_CATEGORY_REC_ID`, `LABEL_NAME`, `VARIETAL`, `VINTAGE`, `REGION_OF_ORIGIN`, `COUNTRY_OF_ORIGIN`, `TEXT`, `PRINT_IMAGE_LOCATION`, `WEB_IMAGE_LOCATION`) SELECT ?, `REC_ID`, NOW(),NOW(),NULL, `SUPPLIER_REC_ID`, `DIRECTORY_REC_ID`, `PRODUCT_CATEGORY_REC_ID`, `LABEL_NAME`, `VARIETAL`, `VINTAGE`, `REGION_OF_ORIGIN`, `COUNTRY_OF_ORIGIN`, `TEXT`, `PRINT_IMAGE_LOCATION`, `WEB_IMAGE_LOCATION` FROM tpl_product WHERE(SUPPLIER_REC_ID = ?)";
    private $SQLUPDATE = "UPDATE tpl_shadow_product SET `MASTER_REC_ID` = ?,`REC_DATETIME` = NOW(), `REC_TIMESTAMP` = NOW(), `REC_ACTION` = NULL WHERE `SHADOW_REC_ID` = ? AND `SUPPLIER_REC_ID` = ?,`DIRECTORY_REC_ID` = ? AND `PRODUCT_CATEGORY_REC_ID` = ?";
    private $SQLSelectProduct = "select * from tpl_shadow_product where (SHADOW_SUPPLIER_REC_ID = ?) AND (PRODUCT_CATEGORY_REC_ID = ?) AND ((REC_ACTION IS NULL) OR (REC_ACTION <> 'DELETE')) ORDER BY LABEL_NAME";
    private $SQLSelectSupplierProduct = "select * from tpl_shadow_product where (SHADOW_SUPPLIER_REC_ID = ?) GROUP BY PRODUCT_CATEGORY_REC_ID";
    private $SQLSelectCategoryProduct ="select * from tpl_shadow_product where (SHADOW_SUPPLIER_REC_ID = ?) AND (PRODUCT_CATEGORY_REC_ID = ?) AND ((REC_ACTION IS NULL) OR (REC_ACTION <> 'DELETE')) ORDER BY LABEL_NAME";
    private $SQLSelectProductList = "select * from tpl_shadow_product where (SHADOW_SUPPLIER_REC_ID = ?) and (REC_ID=?)";
    
    function selectCategoryProduct($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLSelectCategoryProduct);
            $stmt->execute($param_arr);
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }    
    function selectSupplierProduct($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLSelectSupplierProduct);
            $stmt->execute($param_arr);
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    } 
    private $SQLSelectProduct = "select * from tpl_shadow_product where (SHADOW_SUPPLIER_REC_ID = ?) AND (PRODUCT_CATEGORY_REC_ID = ?) AND ((REC_ACTION IS NULL) OR (REC_ACTION <> 'DELETE')) ORDER BY LABEL_NAME";
    function selectProduct($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLSelectProduct);
            $stmt->execute($param_arr);
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }    
    function selectProductList($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLSelectProductList);
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
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }
    function update($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLUPDATE);
            $stmt->execute($branddata);
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
