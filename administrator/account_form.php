<?php
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
require_once("popup_form.php");
include_once("callbacks.php");
require_once ($path_doc_root . "/include/KoolPHPSuite/KoolGrid/koolgrid.php");
require_once ($path_doc_root . "/include/KoolPHPSuite/KoolAjax/koolajax.php");

require_once ($path_doc_root . "/common/util/DBTransaction.php");
require_once ($path_doc_root . "/common/dao/TplAdminUsersDAO.php");
include_once $path_doc_root . '/common/util/DBTransaction.php';
include_once $path_doc_root . '/common/dao/TplAdminRolesDAO.php';
include_once $path_doc_root . '/include/KoolPHPSuite/KoolCalendar/koolcalendar.php';

class AccountForm extends PopupForm {

    function __construct() {
        global $ADMIN_DB_NAME;
        $this->_dbConnectionObj = new DataConnection(MYSQLI, $ADMIN_DB_NAME);
    }

    protected function viewPage() {
        include_once("constants.php");
        if (!isset($_GET["param1"])) {
            return false;
        }
        $dbtrans = new DBTransaction();
        $dbconn = $dbtrans->getConnection($GLOBALS["ADMIN_DB_NAME"]);
        $tpladminusersdao = new TplAdminUsersDAO();
        $param_arr = array($_GET["param1"]);
        $details = $tpladminusersdao->selectUserDetailsByID($dbconn, $param_arr);

        //$details = $this->_dbConnectionObj->getUserDetailsByID($_GET["param1"]);
        if (count($details) > 0) {
            //while (($properties = $details->fetch_array(MYSQLI_ASSOC)) == true) {
            foreach ($details as $properties) {
                ?>
                <!-- This makes the shadow -->
                <form id="theform">
                    <table border="0" width="100%">
                        <tr>
                            <td width="34%">Role</td>
                            <td width="1%">:</td>
                            <td width="65%">
                                <?php
//                                $disabled = '';
//                                if ($_SESSION["role"] != SUPERADMIN)
//                                    $disabled = 'disabled';
//                                $dbtrans = new DBTransaction();
//                                $dbconn = $dbtrans->getConnection($GLOBALS["ADMIN_DB_NAME"]);
                                $tpladminrolesdao = new TplAdminRolesDAO();
                                $param_arr = array($_SESSION['tenantid']);
                                $roles = $tpladminrolesdao->select($dbconn, $param_arr);

                                // $roles = $this->_dbConnectionObj->getAdminRoles();
                                if (count($roles) > 0) {
                                    echo "<select id=\"view_roles\" style=\"width: 11em;\" >";
                                    foreach ($roles as $role) {
                                        echo '<option  value="' . $role['REC_ID'] . '">' . $role['ROLE'] . '</option>';
                                    }

                                    echo "</select>";
                                }
                                ?>
                            </td>
                        </tr>
                        <tr>
                            <td>Firstname</td>
                            <td>:</td>
                            <td><input type="text" id="firstname" size="37" value="<?php echo $properties['FIRSTNAME'] ?>"/></td>
                        </tr>
                        <tr>
                            <td>Lastname</td>
                            <td>:</td>
                            <td><input type="text" id="lastname" size="37" value="<?php echo $properties['LASTNAME'] ?>"/></td>
                        </tr>
                        <tr>
                            <td>Username</td>
                            <td>:</td>
                            <td><input type="text" id="user" size="37" value="<?php echo $properties['USERNAME'] ?>"/></td>
                        </tr>
                        <tr>
                            <td>Password:</td>
                            <td>:</td>
                            <td><input type="password" id="password" size="37" value=""/></td>
                        </tr>
                        <tr>
                            <td><input type="hidden" id="recid" value="<?php echo $properties['REC_ID'] ?>"/></td>
                        </tr>
                    </table>
                </form>
                <?php
            }
           
        }
    }

    protected function addPage() {
        ?>
        <form id="theform">
            <table border="0" width="100%">
                <tr>
                    <td width="34%">Role</td>
                    <td width="1%">:</td>
                    <td width="65%">
                        <?php
                        $dbtrans = new DBTransaction();
                        $dbconn = $dbtrans->getConnection($GLOBALS["ADMIN_DB_NAME"]);
                        $tpladminrolesdao = new TplAdminRolesDAO();
                        $param_arr = array($_SESSION['tenantid']);
                        $roles = $tpladminrolesdao->select($dbconn, $param_arr);

                        // $roles = $this->_dbConnectionObj->getAdminRoles();
                        if (count($roles) > 0) {
                            echo "<select id=\"view_roles\" style=\"width: 11em;\" >";
                            foreach ($roles as $role) {
                                echo '<option  value="' . $role['REC_ID'] . '">' . $role['ROLE'] . '</option>';
                            }

                            echo "</select>";
                        }

//                        $roles = $this->_dbConnectionObj->getAdminRoles();
//                        if ($roles && $roles->num_rows > 0) {
//                            echo "<select id=\"add_roles\" style=\"width: 11em;\">";
//                            while (($role = $roles->fetch_array(MYSQLI_ASSOC)) == true) {
//                                $selected = "";
//                                if ($role['REC_ID'] == 2)
//                                    $selected = "SELECTED";
//                                echo '<option ' . $selected . ' value="' . $role['REC_ID'] . '">' . $role['ROLE'] . '</option>';
//                            }
//                            $this->_dbConnectionObj->doFreeResult();
//                            $roles->close();
//                            echo "</select>";
//                        }
                        ?>
                    </td>
                </tr>
                <tr>
                    <td width="130px">Username</td>
                    <td>:</td>
                    <td><input type="text" id="username" size="34"/>&nbsp;<span id="userName_result"></span></td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td>:</td>
                    <td><input type="password" id="password" size="34"/>&nbsp;<span id="password_result"></span></td>
                </tr>
                <tr>
                    <td>Confirm Password</td>
                    <td>:</td>
                    <td><input type="password" id="confirm" size="34"/>&nbsp;<span id="confirm_result"></span></td>
                </tr>
                <tr>
                    <td>First name</td>
                    <td>:</td>
                    <td><input type="text" id="firstname" size="34"/></span></td>
                </tr>
                <tr>
                    <td>Last name</td>
                    <td>:</td>
                    <td><input type="text" id="lastname" size="34"/></span></td>
                </tr>
            </table>
        </form>
        <?php
    }

    protected function editPage() {
        /* Result of inquiries */
        //Step 1: Register KoolGrid component to your page
//        
        $path_doc_root = $_SERVER["DOCUMENT_ROOT"];
//        include_once("callbacks.php");
//        include_once($path_doc_root . "/include/KoolPHPSuite/KoolGrid/koolgrid.php");
//        include_once($path_doc_root . "/include/KoolPHPSuite/KoolAjax/koolajax.php");
//        $koolajax->scriptFolder = "./../include/KoolPHPSuite/KoolAjax";

        require $path_doc_root . "/config.php";
        global $koolajax;


        $koolajax->scriptFolder = "./../include/KoolPHPSuite/KoolAjax";

        //Step 2: Create datasource
//        global $ADMIN_DB_NAME, $DB_HOST, $DB_USER, $DB_PASS;
//        $db_con = mysql_connect($DB_HOST, $DB_USER, $DB_PASS);
//        mysql_select_db($ADMIN_DB_NAME, $db_con);
//        $dbtrans = new DBTransaction();
//        $db_con = $dbtrans->getConnection($GLOBALS["ADMIN_DB_NAME"]);
//         mysql_select_db($GLOBALS["ADMIN_DB_NAME"], $db_con);
//    $TplAdminUsersDAO = new TplAdminUsersDAO();
//    $enc_pwd = MD5($pwd);
//    $param_arr = array($userp, $enc_pwd);
//    $results = $TplAdminUsersDAO->selectVerifyUserNameAndPassword($dbconn, $param_arr); 
        $db_con = mysql_connect($DB_HOST, $DB_USER, $DB_PASS);
        mysql_select_db($GLOBALS["ADMIN_DB_NAME"], $db_con);

        $ds = new MySQLDataSource($db_con);
        $ds->SelectCommand = "SELECT REC_ID, FIRSTNAME, USERNAME FROM tpl_admin_users where TENANT_ID=" . $_SESSION['tenantid'] . " ORDER BY USERNAME ASC";

        //Step 3: Init KoolGrid and settings
        $grid = new KoolGrid("account_grid");
        $grid->scriptFolder = "./../include/KoolPHPSuite/KoolGrid";
        $grid->AjaxEnabled = true;
        //$grid->AjaxLoadingImage =  "KoolPHPSuite/KoolAjax/loading/5.gif";
        $grid->styleFolder = "default";
        $grid->DataSource = $ds;
        $grid->Width = "430px";
        $grid->AllowInserting = true;
        $grid->AllowSelecting = true;
        $grid->RowAlternative = true;
        //$grid->AllowFiltering = true;

        $col_id = new gridboundcolumn();
        $col_id->DataField = "REC_ID";
        $col_id->Visible = false;
        $grid->MasterTable->AddColumn($col_id);
        $col_name = new gridboundcolumn();
        $col_name->DataField = "FIRSTNAME";
        $col_name->HeaderText = "Name";
        $grid->MasterTable->AddColumn($col_name);
        $col_user = new gridboundcolumn();
        $col_user->DataField = "USERNAME";
        $col_user->HeaderText = "Username";
        $grid->MasterTable->AddColumn($col_user);
        $grid->MasterTable->Pager = new GridPrevNextAndNumericPager();
        //Step 4: Process Grid
        $grid->Process();
        $grid->ClientSettings->ClientEvents["OnRowSelect"] = "Handle_OnRowSelect";
        if ($koolajax->isCallback)
            sleep(0);


        $datepicker = new KoolDatePicker("datepicker"); //Create calendar object
        $datepicker->scriptFolder = "../include/KoolPHPSuite/KoolCalendar"; //Set scriptFolder
        $datepicker->styleFolder = "default";
        $datepicker->Init();
        ?>
        <body>
            <form id="account_form" method="post">
                <?php echo $koolajax->Render(); ?>
                <table border="0" width="440px">
                    <tr><td>User Name</td><td>:</td><td><input type="text" id="userName" size="55"/></td><td><div id="note"></div></td></tr>
                    <tr><td colspan="4">
                            <?php echo $grid->Render(); ?>

                        </td></tr>
                    <tr><td><input type="hidden" id="selected_id"/></td></tr>
                    <tr><td colspan="3"><div id="notice"></div></td></tr>
                </table>
            </form>
        </body>
        <?php
    }

    protected function removePage() {
        // provide params - instead of edit use remove
        $this->editPage();
    }

    protected function searchPage() {
        /* Result of inquiries */
        //Step 1: Register KoolGrid component to your page
        $path_doc_root = $_SERVER["DOCUMENT_ROOT"];
        require $path_doc_root . "/config.php";
//        include_once("callbacks.php");
//        require_once "KoolPHPSuite/KoolGrid/koolgrid.php";
//        require_once "KoolPHPSuite/KoolAjax/koolajax.php";
        global $koolajax;
        $koolajax->scriptFolder = "./../include/KoolPHPSuite/KoolAjax";

        //Step 2: Create datasource
        $db_con = mysql_connect($DB_HOST, $DB_USER, $DB_PASS);
        mysql_select_db($GLOBALS["ADMIN_DB_NAME"], $db_con);
        $ds = new MySQLDataSource($db_con);
        $ds->SelectCommand = "SELECT REC_ID, FIRSTNAME, USERNAME FROM tpl_admin_users WHERE USERNAME = '" . $_GET["param1"] . "'";

        //Step 3: Init KoolGrid and settings
        $grid1 = new KoolGrid("search_grid");
        $grid1->scriptFolder = "./../include/KoolPHPSuite/KoolGrid";
        $grid1->AjaxEnabled = true;
        $grid1->styleFolder = "default";
        $grid1->DataSource = $ds;
        $grid1->Width = "430px";
        $grid1->AllowInserting = true;
        $grid1->AllowSelecting = true;
        $grid1->RowAlternative = true;

        $col_id = new gridboundcolumn();
        $col_id->DataField = "REC_ID";
        $col_id->Visible = false;
        $grid1->MasterTable->AddColumn($col_id);
        $col_name = new gridboundcolumn();
        $col_name->DataField = "FIRSTNAME";
        $col_name->HeaderText = "Name";
        $grid1->MasterTable->AddColumn($col_name);
        $col_user = new gridboundcolumn();
        $col_user->DataField = "USERNAME";
        $col_user->HeaderText = "Username";
        $grid1->MasterTable->AddColumn($col_user);
        //Step 4: Process Grid
        $grid1->Process();
        $grid1->ClientSettings->ClientEvents["OnRowSelect"] = "Handle_OnRowSelect";
        if ($koolajax->isCallback)
            sleep(0);
        
        $datepicker = new KoolDatePicker("datepicker"); //Create calendar object
        $datepicker->scriptFolder = "../include/KoolPHPSuite/KoolCalendar"; //Set scriptFolder
        $datepicker->styleFolder = "default";
        $datepicker->Init();
        ?>
        <body>
            <form id="myform" method="post">
                <?php echo $koolajax->Render(); ?>
                <table border="0" width="440px">
                    <tr><td>
                            <?php echo $grid1->Render(); ?>	
                          
                        </td></tr>
                    <tr><td><input type="hidden" id="selected_id"/></td></tr>
                </table>
            </form>
        </body>
        <?php
    }

    protected function reserve1Page() {
        
    }

}
?>