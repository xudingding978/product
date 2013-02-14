<?php 

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
require $path_doc_root . "/config.php";


class TplSupplierAwardsDAO {

private $SQLSELECT = "SELECT * FROM tpl_supplier_awards where SUPPLIER_REC_ID=?  ORDER BY tpl_supplier_awards.NAME";
private $SQLInsert = "INSERT INTO tpl_supplier_awards(REC_DATETIME,REC_TIMESTAMP,NAME,ISSUED_BY,YEAR_WON,AWARD_LOGO_URL,AWARD_LOGO_LINK,SUPPLIER_REC_ID)VALUES(NOW(),NOW(),?, ?,?,?,?,?)";
private $SQLUpdate ="UPDATE tpl_supplier_awards SET REC_DATETIME = NOW(), REC_TIMESTAMP = NOW(), NAME = ?,  ISSUED_BY = ?, YEAR_WON = ?, AWARD_LOGO_URL = ?, AWARD_LOGO_LINK = ?  WHERE (REC_ID = ?)";
private $SQLDelete ="DELETE FROM tpl_supplier_awards where (REC_ID = ?)";
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
function update($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLUpdate);
            $stmt->execute($param_arr);            
        } catch (Exception $ex) {
            error_log($ex);
            echo $ex;
            throw new PDOException($ex);
        }
    }

function insert($dbconn, $param_arr) {
        try {
            $stmt = $dbconn->prepare($this->SQLInsert);
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
   
  

}
?>
