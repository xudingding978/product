<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . '/config.php');
include_once $path_doc_root . "/common/util/DBTransaction.php";

//include_once $path_doc_root . "/common/ui/datagrid/grid_customize_column_content.php";

class datagridController {

    private $daoclass;

 

    public function __construct() {
        
    }

    private function __destruct() {
// destructor
    }

    public function setDAOClass($daoclass) {
        $this->daoclass = $daoclass;
    }



    public function prepareDataGrid($method,$param_arr) {
        $dbtrans = new DBTransaction();
        $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
        $daoresult = call_user_func(array($this->daoclass, $method), $dbconn, $param_arr);
        return $daoresult;
    }

    public function getRowNumber($countMethod) {
        $dbtrans = new DBTransaction();
        $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
        $rowNumber = call_user_func(array($this->daoclass, $countMethod), $dbconn);
        return $rowNumber;
    }

}

?>
