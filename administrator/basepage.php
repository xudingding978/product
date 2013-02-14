<?php
include_once("dataconnection.php");
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . "/config.php");

abstract class BasePage {

    protected $ConnectionObj = null;
    protected $year;
    protected $directory;
    protected $tversion;

    function __construct() {
        // initialize the data connection
        $this->ConnectionObj = new DataConnection(MYSQLI);
        $this->ConnectionObj->Connect();
    }

    function __destruct() {
        
    }

    function buildMainControlPage() {
        $params = Array();
        if (isset($_GET["param"])) {
            $params = explode(':', $_GET["param"], 3);
            $this->directory = $params[0];
            $this->year = $params[1];
            $this->tversion = $params[2];
        }
        ?>

        <table border="0" width="100%" cellpadding="0" cellspacing="0">
            <tr>
                <td>
                    <table border="0" width="100%" >
                        <tr>
                            <td style="padding: 0 0 2px 0px;">Directory:</td>
                            <td>
                                <?php
                                if (strtoupper($this->Name()) != "SHAWS") {
                                    $dirs = $this->getDirectories();
                                    if ($dirs && $dirs->num_rows > 0) {
                                        echo "<select id='dir" . $this->ID() . "' name='dir" . $this->ID() . "' onchange='reloadYear2(this," . $this->ID() . ");doLoadTemplate(" . $this->ID() . ");'>";
                                        while (($dir = $dirs->fetch_array(MYSQLI_ASSOC)) == true) {
                                            $selected = "";
                                            if ($dir['REC_ID'] == $this->directory)
                                                $selected = "SELECTED";
                                            echo '<option ' . $selected . ' value="' . $dir['REC_ID'] . '">' . $dir['NAME'] . '</option>';
                                        }
                                        $dirs->close();
                                        echo "</select>";
                                    }
                                    else {
                                        echo "The database eiher return an error or empty record.";
                                    }
                                } else { //no query needed
                                    echo "<select id='dir" . $this->ID() . "' name='dir" . $this->ID() . "' onChange='doLoadTemplate(" . $this->ID() . ")'>";
                                    echo "<option " . $selected . " value='3'>Shaws</option>";
                                    echo "</select>";
                                }
                                ?>
                            </td>
                            <td style="padding: 0 0 2px 20px;">Year:</td>
                            <td>
                                <?php
                                if (strtoupper($this->Name()) == "SHAWS") {
                                    $avail_years = $this->getShawsAvailableYear();
                                } else {
                                    $avail_years = $this->getAvailableYear();
                                }
                                if ($avail_years && $avail_years->num_rows > 0) {
                                    echo "<div id='yearField" . $this->ID() . "'><select id='year" . $this->ID() . "' name='year" . $this->ID() . "'  onChange='doLoadTemplate(" . $this->ID() . ")'>";
                                    while (($year = $avail_years->fetch_array(MYSQLI_ASSOC)) == true) {
                                        $selected = "";
                                        if ($year['DIRECTORY_YEAR'] == $this->year)
                                            $selected = "SELECTED";
                                        echo '<option ' . $selected . ' value="' . $year['DIRECTORY_YEAR'] . '">' . $year['DIRECTORY_YEAR'] . '</option>';
                                    }
                                    $avail_years->close();
                                    echo "</select></div>";
                                }
                                else {
                                    echo "The database eiher return an error or empty record.";
                                }
                                ?>
                            </td>
                            <td style="padding: 0 0 2px 20px;">Version:</td>
                            <td>
                                <?php
                                $templates = $this->getTemplateVersion();
                                if ($templates && $templates->num_rows > 0) {
                                    echo "<select id='version" . $this->ID() . "' name='version" . $this->ID() . "' onChange='doLoadTemplate(" . $this->ID() . ")'>";
                                    while (($template = $templates->fetch_array(MYSQLI_ASSOC)) == true) {
                                        $selected = "";
                                        //var_dump("tversion: ",$this->tversion);
                                        if ($template['REC_ID'] == $this->tversion)
                                            $selected = "SELECTED";
                                        echo '<option ' . $selected . ' value="' . $template['REC_ID'] . '">' . $template['NAME'] . '</option>';
                                    }
                                    $templates->close();
                                    echo "</select>";
                                }
                                else {
                                    echo "The database eiher return an error or empty record.";
                                }
                                ?>
                            </td>
                            <td style="padding-left: 20px;"></td>
                            <td>
                                <input type="hidden" id="ctype" name="ctype" value="<?php echo $this->ID() ?>" />
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>

                <td style="height:8px">

                </td> 
            </tr> 
            <tr>

                <td id="completepath">

                </td> 
            </tr>    
            <tr>
                <td style="padding-top: 10px;" colspan="3">
                    <table border="0" width="100%">
                        <tr>
                            <td><?php $this->buildTemplateEditor($params); ?></td>
                        </tr>
                        <tr>
                            <td colspan="3" align='right'>
                                <div class="buttons" style="float:right;">
                                        <!-- <button id="Save" type="button" onClick="doSaveTemplate(this.form)"><img src="../images/save.png" alt=""/>Save Template</button> -->
                                    <?php
                                    echo '<button id="saveTemplate" onclick="doSaveTemplate(' . $this->ID() . ')"><img src="images/save.png" alt=""/>Save Template</button>';
                                    ?>
                                </div>
                                <div class="buttons" style="float:right;">
                                        <!-- <button id="newtemplate" type="button" onClick="doNewTemplate()"><img src="../images/new.png" alt=""/>New Template</button> -->
                                    <button id="newTemplate" onClick="doNewTemplate()"><img src="images/new.png" alt=""/>New Template</button>
                                </div>
                                <div class="buttons" style="float:right;">
                                <!-- <button id="export" type="button" onClick="doExport(this.form)"><img src="../images/export.png" alt=""/>Export Database</button> -->
                                    <button id="exportExec" onClick="doExport(<?php echo $this->ID(); ?>)"><img src="images/export.png" alt=""/>Export Database</button>
                                </div>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        <form name ="baseform" method="post" action="ExportDataFile.php" id="baseform"> 
            <input type="hidden" value="" id="dir" name="dir">
            <input type="hidden" value="" id="type" name="type">
            <input type="hidden" value="" id="year" name="year">
            <input type="hidden" value="" id="version" name="version">  
            <input type="hidden" value="" id="path" name="path"> 
        </form> 
        <?php
    }

    function getDirectories() {
        // problem connectng db here if second time
        return $this->ConnectionObj->doQuery("SELECT * from tpl_directory");
    }

    function getTemplateVersion() {
        global $ADMIN_DB_NAME;
        return $this->ConnectionObj->doQuery("SELECT * from " . $ADMIN_DB_NAME . ".tpl_admin_template");
    }

    function getAvailableYear() {
        return $this->ConnectionObj->doQuery("SELECT DISTINCT DIRECTORY_YEAR from tpl_supplier_directory WHERE DIRECTORY_YEAR is not NULL");
    }

    function getShawsAvailableYear() {
        return $this->ConnectionObj->doQuery("SELECT DISTINCT DIRECTORY_YEAR from tpl_shadow_root WHERE DIRECTORY_REC_ID = 3");
    }

    function Destroy() {
        $this->ConnectionObj->Disconnect();
    }

    abstract protected function Name();

    abstract protected function ID();

    abstract protected function buildTemplateEditor();

    abstract protected function getTags();
}
?>