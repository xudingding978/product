<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once $path_doc_root . "/config.php";

class TplShadowSupplierProductCategoryDAO {

    private $SQLSELECT = "SELECT * FROM  tpl_shadow_supplier_category_product WHERE SHADOW_REC_ID = ? ORDER BY REC_ID";
    private $SQLSELECTFILTER = "select REC_DATETIME , REC_TIMESTAMP,SUPPLIER_REC_ID, PRODUCT_CATEGORY_REC_ID , IS_LOGO_LISTING ,MASTER_REC_ID from  tpl_supplier_product_category where REC_ID = ?";
    private $SQLUPDATE = "UPDATE tpl_shadow_supplier_category_product SET `MASTER_REC_ID` = ?,`REC_DATETIME` = NOW(), `REC_TIMESTAMP` = NOW(), `REC_ACTION` = NULL  WHERE `SHADOW_REC_ID` = ? AND `SUPPLIER_REC_ID` = ? AND `PRODUCT_CATEGORY_REC_ID` = ?";
    private $SQLSELECTINSERT = "INSERT INTO tpl_shadow_supplier_category_product(`SHADOW_REC_ID`, `MASTER_REC_ID`, `REC_DATETIME`, `REC_TIMESTAMP`, `REC_ACTION`, `SUPPLIER_REC_ID`, `PRODUCT_CATEGORY_REC_ID`, `IS_LOGO_LISTING`) SELECT ?, `REC_ID`, NOW(),NOW(),NULL, `SUPPLIER_REC_ID`, `PRODUCT_CATEGORY_REC_ID`, `IS_LOGO_LISTING` FROM tpl_supplier_product_category WHERE(SUPPLIER_REC_ID = ?)";
    private $SQLSelectSupplierProduct = "select * from tpl_shadow_supplier_category_product where (SHADOW_SUPPLIER_REC_ID = ?) GROUP BY CATEGORY_REC_ID";
    private $SQLSelectProduct = "select * from tpl_shadow_supplier_category_product where (SHADOW_SUPPLIER_REC_ID = ?) AND (CATEGORY_REC_ID = ?) AND ((REC_ACTION IS NULL) OR (REC_ACTION <> 'DELETE')) ORDER BY LABEL_NAME";

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

    private $SQLSelectCategoryProduct = "select * from tpl_shadow_supplier_category_product where (SHADOW_SUPPLIER_REC_ID = ?) AND (CATEGORY_REC_ID = ?) AND ((REC_ACTION IS NULL) OR (REC_ACTION <> 'DELETE')) ORDER BY LABEL_NAME";

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
