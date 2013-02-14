<?php  
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once $path_doc_root . "/config.php";
require_once $path_doc_root .'/common/util/BaseDAO.php';

class TplShadowSupplierShadowRoot extends BaseDAO{

   
    private $SQL_Select = "select sr.REC_ID as REC_ID,(Select NAME from tpl_directory where REC_ID=dp.DIRECTORY_REC_ID ) as DIR_NAME,dp.DIRECTORY_YEAR as DIR_YEAR,dp.DIRECTORY_PERIOD_START as START_DATE,dp.DIRECTORY_PERIOD_END as END_DATE from tpl_shadow_root sr INNER JOIN  tpl_directory_period dp on sr.DIRECTORY_PERIOD_REC_ID=dp.REC_ID where sr.REC_ID in (select SHADOW_ROOT_REC_ID from tpl_shadow_supplier_shadow_root where SHADOW_SUPPLIER_REC_ID=?)";
   

    function select($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQL_Select);
            $stmt->execute($param_arr);
            return $stmt->fetchAll();
        } catch (Exception $ex) {
            echo $ex;
            throw new PDOException($ex);
        }
    }

}
?>
