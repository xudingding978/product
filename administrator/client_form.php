<?php
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
require_once($path_doc_root . "/include/KoolPHPSuite/KoolAjax/koolajax.php");
$koolajax->scriptFolder = "../include/KoolPHPSuite/KoolAjax";
include_once("callbacks.php");

require_once("popup_form.php");

class ClientForm extends PopupForm {

    private $directorystatus;
    private $directoryID;

    function __construct() {
        global $ADMIN_DB_NAME, $DB_NAME;
        $this->_dbConnectionObj = new DataConnection(MYSQLI, $ADMIN_DB_NAME);
    }

    public function setDirectorystatus($direstatus) {
        $this->directorystatus = $direstatus;
    }

    public function setDirectoryID($direId) {
        $this->directoryID = $direId;
    }

    protected function viewPage() {
        ?>
        <iframe id="clientframe" src="/administrator/client_all_grid.php" frameborder="0" scrolling="no" style="overflow-x: hidden" height="960px" width="1035px"></iframe>
        <?php
    }

    protected function addPage() {
        ?>
        <form id="theform">
            <fieldset>
                <legend>Select Directory & Period To Add Client Into</legend>
                <table border="0" width="100%">
                    <tr>
                        <td width="210px" class="fieldLabel">Directory Selection</td>
                        <td width="5px" class="fieldLabel">:</td>
                        <td width="20px"><span class="fieldIcon ui-silk ui-silk-application-view-list"></span></td>
                        <td >
                            <div id="periodDiv">
                                <select id="clientDirectorySelector" name="clientDirectorySelector" onChange="reLoadPeriods('clientPeriodSelector', $('#clientDirectorySelector option:selected').val());">
                                    <option selected value="0">Select Default Period</option>
                                </select>
                            </div>
                            <script type="text/javascript">doLoadDirectory('clientDirectorySelector');</script>
                        </td>
                    </tr>
                    <tr>
                        <td width="210px" class="fieldLabel">Directory Period</td>
                        <td width="5px" class="fieldLabel">:</td>
                        <td width="20px"><span class="fieldIcon ui-silk ui-silk-application-view-list"></span></td>
                        <td >
                            <div id="periodDiv">
                                <select id="clientPeriodSelector" name="clientPeriodSelector" onChange="">
                                    <option selected value="0">Select Default Period</option>
                                </select>
                            </div>
                            <script type="text/javascript">doLoadPeriods('clientPeriodSelector');</script>
                        </td>
                    </tr>
                </table>
            </fieldset>
            <fieldset>
                <legend>Add Client Details</legend>
                <table border="0" width="100%">
                    <tr>
                        <td width="210px" class="fieldLabel">Business Name</td>
                        <td width="5px" class="fieldLabel">:</td>
                        <td width="20px"><span class="fieldIcon ui-silk ui-silk-application-form-edit"></span></td>
                        <td>
                            <input type="text" id="entityName" size="35" maxlength="50"/></td>
                    </tr>
                    <tr>
                        <td width="210px" class="fieldLabel">First Name</td>
                        <td width="5px" class="fieldLabel">:</td>
                        <td width="20px"><span class="fieldIcon ui-silk ui-silk-application-form-edit"></span></td>
                        <td>
                            <input type="text" id="firstName" size="20" maxlength="20"/>
                        </td>    
                    </tr>
                    <tr>
                        <td width="210px" class="fieldLabel">Last Name</td>
                        <td width="5px" class="fieldLabel">:</td>
                        <td width="20px"><span class="fieldIcon ui-silk ui-silk-application-form-edit"></span></td>
                        <td>
                            <input type="text" id="lastName" size="35" maxlength="45"/>
                        </td>    
                    </tr>
                    <tr>
                        <td width="210px" class="fieldLabel">E-mail Address</td>
                        <td width="5px" class="fieldLabel">:</td>
                        <td width="20px"><span class="fieldIcon ui-silk ui-silk-application-form-edit"></span></td>
                        <td>
                            <table border="0" width="100%" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td width="320px"><input type="text" id="email" size="55" maxlength="255"/></td>
                                    <td><span id="email-icon" class="email-icon fieldIcon ui-silk gray ui-silk-accept"></span></td>
                                </tr>
                            </table> 
                        </td>
                    <script type="text/javascript">
                        $("#email").change(
                                function() {
                                    var _cur_val = $(this).val();
                                    $("#userName").val(_cur_val);
                                    var result = koolajax.callback(CB_CheckEmailExist($("input#email").val()));
                                    if (!result) {
                                        $(".email-icon").removeClass("gray");
                                        showMessage("info", "Your New Client's Username Is Available");
                                    } else {
                                        $(".email-icon").attr('class', 'fieldIcon ui-silk ui-silk-cross');
                                        showMessage("error", "Your Client's Username Has Already Been Registered!");
                                    }
                                    ;
                                    console.log(result);
                                });
                    </script>
                    </tr>
                    <tr>
                        <td width="210px" class="fieldLabel">User Name</td>
                        <td width="5px" class="fieldLabel">:</td>
                        <td width="20px"><span class="fieldIcon ui-silk ui-silk-application-form-edit"></span></td>
                        <td>
                            <table border="0" width="100%" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td width="320px"><input type="text" id="userName" size="55" maxlength="255" readonly="true" disabled="true"/></td>
                                    <td><span id="email-icon" class="email-icon fieldIcon ui-silk gray ui-silk-accept"></span></td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td width="210px" class="fieldLabel">Password</td>
                        <td width="5px" class="fieldLabel">:</td>
                        <td width="20px"><span class="fieldIcon ui-silk ui-silk-application-form-edit"></span></td>
                        <td>
                            <input type="password" id="pw" size="20" maxlength="50"/></td>
                    </tr>
                    <tr>
                        <td width="210px" class="fieldLabel">Repeat Password</td>
                        <td width="5px" class="fieldLabel">:</td>
                        <td width="20px"><span class="fieldIcon ui-silk ui-silk-application-form-edit"></span></td>
                        <td>
                            <input type="password" id="repw" size="20" maxlength="50"/></td>
                    </tr>
                </table>
            </fieldset>
            <fieldset>
                <legend>Select Clients Package</legend>
                <table border="0" width="100%">
                    <tr>
                        <td  width="210px" class="fieldLabel">Directory Package</td>
                        <td width="5px" class="fieldLabel">:</td>
                        <td width="20px"><span class="fieldIcon ui-silk ui-silk-application-view-list"></span></td>
                        <td>
                            <?php
                            $diroffer = Array();
                            $diroffers = $this->_dbConnectionObj->getDefaultPackage($this->directoryID);

                            echo "<div id=\"dirpackField\"><select name=\"dirpack\" id=\"dirpack\"  >";
                            if (($diroffer = $diroffers->fetch_array(MYSQLI_ASSOC)) == true) {

                                if ($diroffer['NAME'] == "Premium Listing") {
                                    echo '<option  value="0" >Standard</option>';
                                    echo '<option  value="1">Advanced</option>';
                                    echo '<option  value="2" selected>Premium</option>';
                                } else if ($diroffer['NAME'] == "Advanced Listing") {
                                    echo '<option  value="0" >Standard</option>';
                                    echo '<option  value="1" selected>Advanced</option>';
                                    echo '<option  value="2" >Premium</option>';
                                } else {
                                    echo '<option  value="0" selected>Standard</option>';
                                    echo '<option  value="1">Advanced</option>';
                                    echo '<option  value="2">Premium</option>';
                                }
                            } else {
                                echo '<option  value="0" selected>Standard</option>';
                                echo '<option  value="1">Advanced</option>';
                                echo '<option  value="2">Premium</option>';
                            }
                            echo "</select></div>";
                            ?>
                        </td>
                    </tr>
                </table>
            </fieldset>
        </form>
        <script type="text/javascript" >
            showMessage("info", "Enter Your New Client's Details To Add Them To The Database.");
        </script>
        <?php
    }

    protected function editPage() {
        $path_doc_root = $_SERVER["DOCUMENT_ROOT"];
        include_once($path_doc_root . '/config.php');
        include_once($path_doc_root . '/common/ui/datagrid/datagrid.php');
        include_once $path_doc_root . "/common/dao/TplClientDAO.php";
        echo $this->directoryID . "  " .$this->directorystatus;
        ?>
        <link rel="stylesheet" type="text/css" href="/common/ui/css/silk/silk-sprite.css"/>
  

        <style>
            .firsttr{
                background-color: #000000
            } 
            .oddtr{
                background-color: #EFF1F1
            } 
            .eventr{
                background-color: #F8F8F8
            }    

        </style>
        <body>
            <div id="editClientTable">

            </div>
        </body>
        <?php
    }

    protected function removePage() {
        // provide params - instead of edit use remove
        $this->editPage();
    }

    protected function reserve1Page() {
        ?>
        <form id="theform">
            <table border="0" width="340px">
                <tr>
                    <td width="110px">Directory</td>
                    <td width="5px">:</td>
                    <td width="230px">
                        <?php
                        $dirs = $this->_dbConnectionObj->getDirectories();
                        if ($dirs && $dirs->num_rows > 0) {
                            echo "<select id=\"dir\" name=\"dir\" style=\"width: 11em;\" onChange=\"reloadYear(theform)\">";
                            while (($dir = $dirs->fetch_array(MYSQLI_ASSOC)) == true) {
                                $selected = "";
                                if ($dir['REC_ID'] == 2)
                                    $selected = "SELECTED";
                                echo '<option ' . $selected . ' value="' . $dir['REC_ID'] . '">' . $dir['NAME'] . '</option>';
                            }
                            $dirs->close();
                            echo "</select>";
                        }
                        ?>
                    </td>
                </tr>
                <tr>
                    <td>Year</td>
                    <td>:</td>
                    <td>
                        <?php
                        $year = Array();

                        $avail_years = $this->_dbConnectionObj->getAvailableDirYear(2);
                        if ($avail_years && $avail_years->num_rows > 0) {
                            echo "<div id=\"yearField\"><select id=\"year\" name=\"year\">";
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
                            echo "The database either returned an error or empty record.";
                        }
                        ?>
                    </td>
                </tr>
            </table>
        </form>
        <?php
    }

}
?>