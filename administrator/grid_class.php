<?php
/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of grid_class
 *
 * @author devbox
 */
class grid_class {

    private $grid = null;
    private $grid_name = null;
    private $grid_width = null;

    function __construct($grid_name) {
        // constructor
        $this->init();
    }

    function __destruct() {
        // destructor
    }

    function init() {

        $path_doc_root = $_SERVER["DOCUMENT_ROOT"];
        require_once( $path_doc_root . "/include/KoolPHPSuite/KoolGrid/koolgrid.php");
        require_once ( $path_doc_root . "/include/KoolPHPSuite/KoolAjax/koolajax.php");

        //Step 3: Init KoolGrid and settings
        $this->grid = new KoolGrid($grid_name);
        $this->grid->scriptFolder = "./../include/KoolPHPSuite/KoolGrid";
        $this->grid->styleFolder = "default";
        $this->grid->MasterTable->AutoGenerateColumns = true;
        $this->grid->MasterTable->Pager = new GridPrevNextAndNumericPager();
        $this->grid->AjaxEnabled = true;
        $this->grid->Width = $grid_width;
        $this->grid->AllowInserting = true;
        $this->grid->AllowSorting = true;
        $this->grid->RowAlternative = true;
        $this->grid->AllowSelecting = true;
        $this->grid->ShowStatus = false;
        $this->grid->AllowFiltering = true;
    }

    public function columnAlias($column_name, $alias) {
        $col_trading = new gridboundcolumn();
        $col_trading->DataField = $column_name;
        $col_trading->HeaderText = $alias;
        $this->grid->MasterTable->AddColumn($col_trading);
    }

    public function columnHide($column_name) {
        $col_id = new gridboundcolumn();
        $col_id->DataField = $column_name;
        $col_id->Visible = false;
        $this->grid->MasterTable->AddColumn($col_id);
    }

    public function datasource($query) {
        require_once '../config.php';
        $db_con = mysql_connect($DB_HOST, $DB_USER, $DB_PASS);
        mysql_select_db($DB_NAME, $db_con);
        $ds = new MySQLDataSource($db_con);
        $ds->SelectCommand = $query;
        $this->grid->DataSource = $ds;
    }

    public function process() {
        $this->grid->Process();
    }

    public function render() {
        echo $this->grid->Render();
    }

    public function exportPdf() {
        ob_end_clean();
        $this->grid->ExportSettings->FileName = "Report";
        $this->grid->GetInstanceMasterTable()->ExportToPDF();
    }

}
?>
}

?>
