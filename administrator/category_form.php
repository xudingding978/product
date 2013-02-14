<?php
require_once("popup_form.php");

class CategoryForm extends PopupForm {

    function __construct() {
        global $ADMIN_DB_NAME;
        $this->_dbConnectionObj = new DataConnection(MYSQLI, $ADMIN_DB_NAME);
    }

    protected function viewPage() {
        ?>
        <div id="info_form">
            info
        </div>
        <?php
    }

    protected function addPage() {
        ?>
        <iframe id="catframe" src="category.php?action=<?php echo $_GET['action']; ?>&dir=<?php echo $_GET['param1']; ?>&yr=<?php echo $_GET['param2']; ?>" frameborder="0" scrolling="auto" height="510px" width="650px"></iframe>
        <?php
    }

    protected function editPage() {
        ?>
        <iframe id="catframe" src="category.php?action=<?php echo $_GET['action']; ?>&dir=<?php echo $_GET['param1']; ?>&yr=<?php echo $_GET['param2']; ?>" frameborder="0" scrolling="auto" height="510px" width="650px"></iframe>
        <?php
    }

    protected function removePage() {
        // provide params - instead of edit use remove
        $this->editPage();
    }

    protected function searchPage() {
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
                            echo "<select id=\"dir\" name=\"dir\" onChange=\"reloadYear(theform)\">";
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
                            echo "The database eiher return an error or empty record.";
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