<?php
require_once("popup_form.php");

class DirectoryForm extends PopupForm {

    function __construct() {
        global $ADMIN_DB_NAME, $DB_NAME;
        $this->_dbConnectionObj = new DataConnection(MYSQLI, $ADMIN_DB_NAME);
    }

    protected function viewPage() {
        $path_doc_root = $_SERVER["DOCUMENT_ROOT"];
        require $path_doc_root . '/config.php';
        include_once $path_doc_root . '/common/datagrid.class.php';
        include_once ("helper.php");
        $helper = new Helper();
        $query = 'SELECT tpl_directory.REC_ID AS REC_ID, tpl_directory.REC_DATETIME, tpl_directory.REC_TIMESTAMP, tpl_directory.NAME, tpl_directory.IS_PRODUCT_BASED, tpl_directory_period.DIRECTORY_YEAR, tpl_directory_period.REC_ID AS DP_REC_ID, '
                . 'concat(tpl_directory_period.DIRECTORY_PERIOD," ",tpl_directory_period.DIRECTORY_PERIOD_TYPE) AS DIRECTORY_PERIOD, tpl_directory_period.DIRECTORY_PERIOD_START, tpl_directory_period.DIRECTORY_PERIOD_END '
                . 'FROM ' . $DB_NAME . '.tpl_directory '
                . 'INNER JOIN ' . $DB_NAME . '.tpl_directory_period ON (tpl_directory.REC_ID = tpl_directory_period.DIRECTORY_REC_ID) '
                . 'ORDER BY tpl_directory.NAME ASC';
        $directory_grid = new datagrid("Directory_Data");
        $directory_grid->datasource($query);
        $directory_grid->columnAlias('NAME', 'Directory Name');
        $directory_grid->columnAlias('DIRECTORY_PERIOD', 'Directory Period');
        $directory_grid->columnDateTime('DIRECTORY_PERIOD_START', 'Start Date');
        $directory_grid->columnDateTime('DIRECTORY_PERIOD_END', 'End Date');
        $column_template = "<div class='icon_actions'><a id='{REC_ID}' class='editDir' href='#{REC_ID}' title='Edit {NAME}' onClick='getDirectory({REC_ID})'><span class='ui-silk ui-silk-application-form-edit'></span></a></div>"
                . "<div class='icon_actions'><a href='#' title='Delete {NAME}' onClick='deleteDirectory({REC_ID})'><span class='ui-silk ui-silk-delete'></span></a></div>";
        $directory_grid->columnCustom("Actions", $column_template);
        $directory_grid->process();


        //if ($koolajax->isCallback) sleep(0);
        ?>
        <script type="text/javascript" src="scripts/directory_form-control.js"></script>
        <body>
            <div id="directorymanagement_tabs">
                <ul>
                    <li><a href="#directories_tabs-1">Add/Edit Directory</a></li>
                    <li><a href="#packages_tabs-2">Add/Edit Packages</a></li>
                    <li><a href="#options_tabs-3">Options</a></li>
                </ul>
                <div id="directories_tabs-1">
                    <div id="directory_accordion">
                        <h3><a href="#">List of All Directories</a></h3>
                        <div id="directory_list">
                            <table border="0" width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td><b>Directory List</b><hr/></td>
                                </tr>
                                <tr>
                                    <td>
                                        <?php echo $directory_grid->Render(); ?>
                                    </td>
                                </tr>
                            </table>
                            <div>
                                <button id="btnNewDir">Add New</button>
                            </div>
                        </div>
                        <h3><a href="#">Add / Edit Directory</a></h3>
                        <div id="directory_add">
                            <table border="0" width="100%">
                                <tr>
                                    <td><b>Directory Details</b><hr/></td>
                                </tr>
                                <tr>
                                    <td width="100%">
                                        <table border="0" width="100%">
                                            <tr>
                                                <td width="100" class="fieldLabel">Directory Name</td>
                                                <td width="5" class="fieldLabel">:</td>
                                                <td width="100">
                                                    <input type="text" id="directoryname" size="28"/>
                                                </td>
                                                <td width="100" class="fieldLabel">Description</td>
                                                <td width="5" class="fieldLabel">:</td>
                                                <td>
                                                    <input type="text" id="directorydesc" size="50"/>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td><br/><b>Directory Period</b><br/><hr/></td>
                                </tr>
                                <tr>
                                    <td>
                                        <table border="0" width="100%">
                                            <tr>
                                                <td width="100" class="fieldLabel">Period Name</td>
                                                <td width="5" class="fieldLabel">:</td>
                                                <td width="100">
                                                    <input type="text" id="directoryperiodname" size="28"/>
                                                </td>
                                                <td width="100" class="fieldLabel">Period Code</td>
                                                <td width="5" class="fieldLabel">:</td>
                                                <td>
                                                    <input type="text" id="directoryperiodcode" size="28"/>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="100%">
                                        <table border="0" width="100%">
                                            <tr>
                                                <td width="100" class="fieldLabel">Directory Year</td>
                                                <td width="5" class="fieldLabel">:</td>
                                                <td width="100">
                                                    <select id="directoryyear">
                                                        <optgroup>
                                                            <?php
                                                            $yearNow = date("Y");
                                                            $yearFrom = $yearNow - 10;
                                                            $yearTo = $yearNow + 25;
                                                            foreach (range($yearFrom, $yearTo) as $number) {
                                                                $arrYears[$number] = $number;
                                                                if ($yearNow == $number) {
                                                                    echo "<option value=\"" . $number . "\" selected>" . $number . "</option>";
                                                                } else {
                                                                    echo "<option value=\"" . $number . "\">" . $number . "</option>";
                                                                }
                                                            }
                                                            ?>
                                                        </optgroup>
                                                    </select>                                    
                                                </td>
                                                <td width="178" class="fieldLabel">Directory Period</td>
                                                <td width="5" class="fieldLabel">:</td>
                                                <td width="50"><input type="number" id="directoryperiod" size="3" maxlength="2" value="12" onkeypress="return restrictCharacters(this, event, integerOnly);"></td>
                                                <td><select id="directoryperiodtype">
                                                        <optgroup>
                                                            <option value="Days">Days</option>
                                                            <option value="Weeks">Weeks</option>
                                                            <option value="Months" selected="true">Months</option>
                                                            <option value="Years">Years</option>
                                                        </optgroup>
                                                    </select>
                                                </td>
                                                <td width="90px" class="fieldLabel">Product Based</td>
                                                <td width="15" class="fieldLabel">:</td>
                                                <td>
                                                    <select id="prodbase">
                                                        <option value="0" selected="selected">No</option>
                                                        <option value="1">Yes</option>
                                                    </select>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="100%">
                                        <table>
                                            <tr>
                                                <td width="100" class="fieldLabel">Start Date</td>
                                                <td width="5" class="fieldLabel">:</td>
                                                <td width="100"> 
                                                    <input id="directoryperiodstart" type="date" size="10"> </input> 
                                                </td>
                                                <td width="178" class="fieldLabel">End Date</td>
                                                <td width="5" class="fieldLabel">:</td>
                                                <td> 
                                                    <input id="directoryperiodend" type="date" size="10"> </input>
                                                </td>
                                                <td width="128"></td>
                                                <td> 
                                                    <input type="checkbox" id="dir_default" name="dir_default" value="0"/> Is Default Directory<br />
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="directory_package_entry">
                                            <table width="100%" border="0">
                                                <tr>
                                                    <td><br/><b>Directory Packages</b><br/><hr/></td>
                                                </tr>
                                            </table>
                                            <table width="100%" border="0">
                                                <tr>
                                                    <td>
                                                        <div id="subscription_tabs">
                                                            <ul>
                                                                <li><a href="#standard_tabs">Standard</a></li>
                                                                <li><a href="#advanced_tabs">Advanced</a></li>
                                                                <li><a href="#premium_tabs">Premium</a></li>
                                                            </ul>
                                                            <div id="standard_tabs">
                                                                <table border="0" cellpadding="0" cellspacing="0">
                                                                    <tr>
                                                                        <td width="100px">Description</td>
                                                                        <td width="1%">:</td>
                                                                        <td><input type="text" id="std_listingdesc" size="80" 
                                                                                   value='A standard listing for this directory.'/></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="3">
                                                                            <table border="0" cellpadding="1" cellspacing="0" width="100%">
                                                                                <tr>
                                                                                    <td width="100px">Cost excl. Tax</td>
                                                                                    <td width="1%">:</td>
                                                                                    <td><input type="text" id="std_costexclgst" size="5" value="60" onkeypress="return restrictCharacters(this, event, integerOnly);"/></td>
                                                                                    <td width="10px"></td>
                                                                                    <td width="140px">Tax Rate</td>
                                                                                    <td width="1%">:</td>
                                                                                    <td><input type="text" id="std_gstrate" size="5" value="15" onkeypress="return restrictCharacters(this, event, integerOnly);"/></td>
                                                                                    <td width="10px"></td>
                                                                                    <td width="110px"> </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="3">
                                                                            <table border="0" cellpadding="1" cellspacing="0" width="100%">
                                                                                <tr>
                                                                                    <td width="100px">Max. Branch</td>
                                                                                    <td width="1%">:</td>
                                                                                    <td><input type="text" id="std_maxbranch" size="5" value="0" onkeypress="return restrictCharacters(this, event, integerOnly);"/></td>
                                                                                    <td width="10px"></td>
                                                                                    <td width="140px">Max. Personnel</td>
                                                                                    <td width="1%">:</td>
                                                                                    <td><input type="text" id="std_maxpersonnel" size="5" value="0" onkeypress="return restrictCharacters(this, event, integerOnly);"/></td>
                                                                                    <td width="10px"></td>
                                                                                    <td width="110px"> </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="3">
                                                                            <table border="0" cellpadding="1" cellspacing="0" width="100%">
                                                                                <tr>
                                                                                    <td width="100px">Max. Brand</td>
                                                                                    <td width="1%">:</td>
                                                                                    <td><input type="text" id="std_maxbrand" size="5" value="0" onkeypress="return restrictCharacters(this, event, integerOnly);"/></td>
                                                                                    <td width="10px"></td>
                                                                                    <td width="140px">Max. Product Category:</td>
                                                                                    <td width="1%">:</td>
                                                                                    <td><input type="text" id="std_maxprodcat" size="5" value="5" onkeypress="return restrictCharacters(this, event, integerOnly);"/></td>
                                                                                    <td width="10px"></td>
                                                                                    <td width="110px"><input type="radio" id="dir_pac_default" name="dir_pac_default" value="0" checked> Is Default </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </div>
                                                            <div id="advanced_tabs">
                                                                <table border="0" cellpadding="1" cellspacing="0">
                                                                    <tr>
                                                                        <td width="100px">Description</td>
                                                                        <td width="1%">:</td>
                                                                        <td><input type="text" id="adv_listingdesc" size="80"
                                                                                   value='An advanced listing for this directory.'/></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="3">
                                                                            <table border="0" cellpadding="1" cellspacing="0" width="100%">
                                                                                <tr>
                                                                                    <td width="100px">Cost excl. Tax</td>
                                                                                    <td width="1%">:</td>
                                                                                    <td><input type="text" id="adv_costexclgst" size="5" value="60" onkeypress="return restrictCharacters(this, event, integerOnly);"/></td>
                                                                                    <td width="10px"></td>
                                                                                    <td width="140px">Tax Rate</td>
                                                                                    <td width="1%">:</td>
                                                                                    <td><input type="text" id="adv_gstrate" size="5" value="15" onkeypress="return restrictCharacters(this, event, integerOnly);"/></td>
                                                                                    <td width="10px"></td>
                                                                                    <td width="110px"> </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="3">
                                                                            <table border="0" cellpadding="1" cellspacing="0" width="100%">
                                                                                <tr>
                                                                                    <td width="100px">Max. Branch</td>
                                                                                    <td width="1%">:</td>
                                                                                    <td><input type="text" id="adv_maxbranch" size="5" value="0" onkeypress="return restrictCharacters(this, event, integerOnly);"/></td>
                                                                                    <td width="10px"></td>
                                                                                    <td width="140px">Max. Personnel</td>
                                                                                    <td width="1%">:</td>
                                                                                    <td><input type="text" id="adv_maxpersonnel" size="5" value="100" onkeypress="return restrictCharacters(this, event, integerOnly);"/></td>
                                                                                    <td width="10px"></td>
                                                                                    <td width="110px"> </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="3">
                                                                            <table border="0" cellpadding="1" cellspacing="0" width="100%">
                                                                                <tr>
                                                                                    <td width="100px">Max. Brand</td>
                                                                                    <td width="1%">:</td>
                                                                                    <td><input type="text" id="adv_maxbrand" size="5" value="5" onkeypress="return restrictCharacters(this, event, integerOnly);"/></td>
                                                                                    <td width="10px"></td>
                                                                                    <td width="140px">Max. Product Category:</td>
                                                                                    <td width="1%">:</td>
                                                                                    <td><input type="text" id="adv_maxprodcat" size="5" value="12" onkeypress="return restrictCharacters(this, event, integerOnly);"/></td>
                                                                                    <td width="10px"></td>
                                                                                    <td width="110px"><input type="radio"  id="dir_pac_default" name="dir_pac_default" value="1"> Is Default </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </div>
                                                            <div id="premium_tabs">
                                                                <table border="0" cellpadding="1" cellspacing="0" width="100%">
                                                                    <tr>
                                                                        <td>
                                                                            <table border="0" cellpadding="1" cellspacing="0" width="100%">
                                                                                <tr>
                                                                                    <td width="100px">Description</td>
                                                                                    <td width="1%">:</td>
                                                                                    <td><input type="text" id="prem_listingdesc" size="80" value='A premium listing for this directory.'/></td>
                                                                                </tr>
                                                                            </table>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <table border="0" cellpadding="1" cellspacing="0" width="100%">
                                                                                <tr>
                                                                                    <td width="100px">Cost excl. Tax</td>
                                                                                    <td width="1%">:</td>
                                                                                    <td><input type="text" id="prem_costexclgst" size="5" value="60" onkeypress="return restrictCharacters(this, event, integerOnly);"/></td>
                                                                                    <td width="10px"></td>
                                                                                    <td width="140px">Tax Rate</td>
                                                                                    <td width="1%">:</td>
                                                                                    <td><input type="text" id="prem_gstrate" size="5" value="15" onkeypress="return restrictCharacters(this, event, integerOnly);"/></td>
                                                                                    <td width="10px"></td>
                                                                                    <td width="110px"> </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <table border="0" cellpadding="1" cellspacing="0" width="100%">
                                                                                <tr>
                                                                                    <td width="100px">Max. Branch</td>
                                                                                    <td width="1%">:</td>
                                                                                    <td><input type="text" id="prem_maxbranch" size="5" value="1000" onkeypress="return restrictCharacters(this, event, integerOnly);"/></td>
                                                                                    <td width="10px"></td>
                                                                                    <td width="140px">Max. Personnel</td>
                                                                                    <td width="1%">:</td>
                                                                                    <td><input type="text" id="prem_maxpersonnel" size="5" value="1000"onkeypress="return restrictCharacters(this, event, integerOnly);"/></td>
                                                                                    <td width="10px"></td>
                                                                                    <td width="110px"> </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <table border="0" cellpadding="1" cellspacing="0" width="100%">
                                                                                <tr>
                                                                                    <td width="100px">Max. Brand</td>
                                                                                    <td width="1%">:</td>
                                                                                    <td><input type="text" id="prem_maxbrand" size="5" value="1000" onkeypress="return restrictCharacters(this, event, integerOnly);"/></td>
                                                                                    <td width="10px"></td>
                                                                                    <td width="140px">Max. Product Category:</td>
                                                                                    <td width="1%">:</td>
                                                                                    <td><input type="text" id="prem_maxprodcat" size="5" value="100000" onkeypress="return restrictCharacters(this, event, integerOnly);"/></td>
                                                                                    <td width="10px"></td>
                                                                                    <td width="110px"><input type="radio"  id="dir_pac_default" name="dir_pac_default" value="2"> Is Default </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                            <table width="100%">
                                <tr>
                                    <td>
                                        <button id="btnSaveDirectory" href="#">Save Directory</button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div id="packages_tabs-2">
                    <table width="100%" border="0">
                        <tr>
                            <td><br/><b>Select Directory</b><br/><hr/></td>
                        </tr>
                    </table>
                    <table width="100%" border="0" cellpadding="1" cellspacing="1">
                        <tr>
                            <td width="17%" align="right" class="fieldLabel">Directory</td>
                            <td width="5" class="fieldLabel">:</td>
                            <td>
                                <div id="dirDiv">
                                    <select id="pkgdirectorySelector" name="pkgdirectorySelector" onChange="reLoadPeriods('pkgperiodSelector',$('#pkgdirectorySelector option:selected').val());">
                                        <option selected value="0">Select Default Directory</option>
                                    </select>
                                </div>
                                <script type="text/javascript">doLoadDirectory('pkgdirectorySelector');</script>
                            </td>
                        </tr>
                    </table>
                    <table width="100%" border="0" cellpadding="1" cellspacing="1">
                        <tr>
                            <td width="17%" align="right" class="fieldLabel">Directory Period</td>
                            <td width="5" class="fieldLabel">:</td>
                            <td width="48%">
                                <div id="yearDiv">
                                    <select id="pkgperiodSelector" name="pkgperiodSelector" onChange="">
                                        <option selected value="0">Select Default Period</option>
                                    </select>
                                </div>
                                <script type="text/javascript">doLoadPeriods('pkgperiodSelector');</script>
                            </td>
                            <td align="left">
                                <button id="addNewPeriod" class="btnNewPeriod">Add New Period</button>
                            </td>
                        </tr>
                    </table>
                    <div id="directory_period_panel" class="hide_directory_period_panel">
                        <fieldset>
                            <legend>Add New Directory Period</legend>
                            <table border="0" cellpadding="1" cellspacing="1">
                                <tr>
                                    <td width="17%" align="right" class="fieldLabel">Start Date</td>
                                    <td width="5" class="fieldLabel">:</td>
                                    <td width="50"> 
                                        <input id="adddirectoryperiodstart" type="date" size="10"> </input> 
                                    </td>
                                    <td width="17%" align="right" class="fieldLabel">End Date</td>
                                    <td width="5" class="fieldLabel">:</td>
                                    <td width="50"> 
                                        <input id="adddirectoryperiodend" type="date" size="10"> </input>
                                    </td>
                                    <td width="40">
                                        <button id="saveNewPeriod" class="btnSaveNewPeriod">Save</button>
                                    </td>
                                </tr>
                            </table>
                        </fieldset>
                    </div>
                    <div class="directory_package_entry">
                        <table width="100%" border="0">
                            <tr>
                                <td><br/><b>Directory Packages</b><br/><hr/></td>
                            </tr>
                        </table>
                        <table width="100%" border="0">
                            <tr>
                                <td>
                                    <div id="subscription_tabs">
                                        <ul>
                                            <li><a href="#standard_tabs">Standard</a></li>
                                            <li><a href="#advanced_tabs">Advanced</a></li>
                                            <li><a href="#premium_tabs">Premium</a></li>
                                        </ul>
                                        <div id="standard_tabs">
                                            <table border="0" cellpadding="0" cellspacing="0">
                                                <tr>
                                                    <td width="100px">Description</td>
                                                    <td width="1%">:</td>
                                                    <td><input type="text" id="std_listingdesc" size="80" 
                                                               value='A standard listing for this directory.'/></td>
                                                </tr>
                                                <tr>
                                                    <td colspan="3">
                                                        <table border="0" cellpadding="1" cellspacing="0" width="100%">
                                                            <tr>
                                                                <td width="100px">Cost excl. Tax</td>
                                                                <td width="1%">:</td>
                                                                <td><input type="text" id="std_costexclgst" size="5" value="60" onkeypress="return restrictCharacters(this, event, integerOnly);"/></td>
                                                                <td width="10px"></td>
                                                                <td width="140px">Tax Rate</td>
                                                                <td width="1%">:</td>
                                                                <td><input type="text" id="std_gstrate" size="5" value="15" onkeypress="return restrictCharacters(this, event, integerOnly);"/></td>
                                                                <td width="10px"></td>
                                                                <td width="110px"> </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="3">
                                                        <table border="0" cellpadding="1" cellspacing="0" width="100%">
                                                            <tr>
                                                                <td width="100px">Max. Branch</td>
                                                                <td width="1%">:</td>
                                                                <td><input type="text" id="std_maxbranch" size="5" value="0" onkeypress="return restrictCharacters(this, event, integerOnly);"/></td>
                                                                <td width="10px"></td>
                                                                <td width="140px">Max. Personnel</td>
                                                                <td width="1%">:</td>
                                                                <td><input type="text" id="std_maxpersonnel" size="5" value="0" onkeypress="return restrictCharacters(this, event, integerOnly);"/></td>
                                                                <td width="10px"></td>
                                                                <td width="110px"> </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="3">
                                                        <table border="0" cellpadding="1" cellspacing="0" width="100%">
                                                            <tr>
                                                                <td width="100px">Max. Brand</td>
                                                                <td width="1%">:</td>
                                                                <td><input type="text" id="std_maxbrand" size="5" value="0" onkeypress="return restrictCharacters(this, event, integerOnly);"/></td>
                                                                <td width="10px"></td>
                                                                <td width="140px">Max. Product Category:</td>
                                                                <td width="1%">:</td>
                                                                <td><input type="text" id="std_maxprodcat" size="5" value="5" onkeypress="return restrictCharacters(this, event, integerOnly);"/></td>
                                                                <td width="10px"></td>
                                                                <td width="110px"><input type="radio" id="dir_pac_default" name="dir_pac_default" value="0" checked> Is Default </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div id="advanced_tabs">
                                            <table border="0" cellpadding="1" cellspacing="0">
                                                <tr>
                                                    <td width="100px">Description</td>
                                                    <td width="1%">:</td>
                                                    <td><input type="text" id="adv_listingdesc" size="80"
                                                               value='An advanced listing for this directory.'/></td>
                                                </tr>
                                                <tr>
                                                    <td colspan="3">
                                                        <table border="0" cellpadding="1" cellspacing="0" width="100%">
                                                            <tr>
                                                                <td width="100px">Cost excl. Tax</td>
                                                                <td width="1%">:</td>
                                                                <td><input type="text" id="adv_costexclgst" size="5" value="60" onkeypress="return restrictCharacters(this, event, integerOnly);"/></td>
                                                                <td width="10px"></td>
                                                                <td width="140px">Tax Rate</td>
                                                                <td width="1%">:</td>
                                                                <td><input type="text" id="adv_gstrate" size="5" value="15" onkeypress="return restrictCharacters(this, event, integerOnly);"/></td>
                                                                <td width="10px"></td>
                                                                <td width="110px"> </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="3">
                                                        <table border="0" cellpadding="1" cellspacing="0" width="100%">
                                                            <tr>
                                                                <td width="100px">Max. Branch</td>
                                                                <td width="1%">:</td>
                                                                <td><input type="text" id="adv_maxbranch" size="5" value="0" onkeypress="return restrictCharacters(this, event, integerOnly);"/></td>
                                                                <td width="10px"></td>
                                                                <td width="140px">Max. Personnel</td>
                                                                <td width="1%">:</td>
                                                                <td><input type="text" id="adv_maxpersonnel" size="5" value="100" onkeypress="return restrictCharacters(this, event, integerOnly);"/></td>
                                                                <td width="10px"></td>
                                                                <td width="110px"> </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="3">
                                                        <table border="0" cellpadding="1" cellspacing="0" width="100%">
                                                            <tr>
                                                                <td width="100px">Max. Brand</td>
                                                                <td width="1%">:</td>
                                                                <td><input type="text" id="adv_maxbrand" size="5" value="5" onkeypress="return restrictCharacters(this, event, integerOnly);"/></td>
                                                                <td width="10px"></td>
                                                                <td width="140px">Max. Product Category:</td>
                                                                <td width="1%">:</td>
                                                                <td><input type="text" id="adv_maxprodcat" size="5" value="12" onkeypress="return restrictCharacters(this, event, integerOnly);"/></td>
                                                                <td width="10px"></td>
                                                                <td width="110px"><input type="radio"  id="dir_pac_default" name="dir_pac_default" value="1"> Is Default </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div id="premium_tabs">
                                            <table border="0" cellpadding="1" cellspacing="0" width="100%">
                                                <tr>
                                                    <td>
                                                        <table border="0" cellpadding="1" cellspacing="0" width="100%">
                                                            <tr>
                                                                <td width="100px">Description</td>
                                                                <td width="1%">:</td>
                                                                <td><input type="text" id="prem_listingdesc" size="80" value='A premium listing for this directory.'/></td>
                                                            </tr>
                                                        </table>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table border="0" cellpadding="1" cellspacing="0" width="100%">
                                                            <tr>
                                                                <td width="100px">Cost excl. Tax</td>
                                                                <td width="1%">:</td>
                                                                <td><input type="text" id="prem_costexclgst" size="5" value="60" onkeypress="return restrictCharacters(this, event, integerOnly);"/></td>
                                                                <td width="10px"></td>
                                                                <td width="140px">Tax Rate</td>
                                                                <td width="1%">:</td>
                                                                <td><input type="text" id="prem_gstrate" size="5" value="15" onkeypress="return restrictCharacters(this, event, integerOnly);"/></td>
                                                                <td width="10px"></td>
                                                                <td width="110px"> </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table border="0" cellpadding="1" cellspacing="0" width="100%">
                                                            <tr>
                                                                <td width="100px">Max. Branch</td>
                                                                <td width="1%">:</td>
                                                                <td><input type="text" id="prem_maxbranch" size="5" value="1000" onkeypress="return restrictCharacters(this, event, integerOnly);"/></td>
                                                                <td width="10px"></td>
                                                                <td width="140px">Max. Personnel</td>
                                                                <td width="1%">:</td>
                                                                <td><input type="text" id="prem_maxpersonnel" size="5" value="1000"onkeypress="return restrictCharacters(this, event, integerOnly);"/></td>
                                                                <td width="10px"></td>
                                                                <td width="110px"> </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table border="0" cellpadding="1" cellspacing="0" width="100%">
                                                            <tr>
                                                                <td width="100px">Max. Brand</td>
                                                                <td width="1%">:</td>
                                                                <td><input type="text" id="prem_maxbrand" size="5" value="1000" onkeypress="return restrictCharacters(this, event, integerOnly);"/></td>
                                                                <td width="10px"></td>
                                                                <td width="140px">Max. Product Category:</td>
                                                                <td width="1%">:</td>
                                                                <td><input type="text" id="prem_maxprodcat" size="5" value="100000" onkeypress="return restrictCharacters(this, event, integerOnly);"/></td>
                                                                <td width="10px"></td>
                                                                <td width="110px"><input type="radio"  id="dir_pac_default" name="dir_pac_default" value="2"> Is Default </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div class="directory_additional_details">
                        <table border="0" cellpadding="1" cellspacing="0" width="100%">
                            <tr>
                                <td><br/><b>Additional Offerings</b><br/><hr/></td>
                            </tr>
                        </table>
                        <table border="0" cellpadding="1" cellspacing="0" width="100%">
                            <tr>
                                <td>
                                    <table border="0" cellpadding="1" cellspacing="0" width="100%">
                                        <tr>
                                            <td width="100">Name</td>
                                            <td width="5">:</td>
                                            <td><input type="text" id="addoffer_name" size="58"/></td>
                                        </tr>
                                        <tr>
                                            <td colspan="5">
                                                <table border="0" cellpadding="1" cellspacing="0" width="100%">
                                                    <tr>
                                                        <td width="103px">Description</td>
                                                        <td width="10px">:</td>
                                                        <td width="70px"><input type="text" id="addoffer_description" size="5"/></td>
                                                        <td width="10px"></td>
                                                        <td width="140px">Promo Code</td>
                                                        <td width="5px">:</td>
                                                        <td><input type="text" id="addoffer_code" size="13" onkeyup="this.value = this.value.toUpperCase()"/></td>
                                                    </tr>
                                                    <tr>
                                                        <td width="103px">Cost excl. GST</td>
                                                        <td width="10px">:</td>
                                                        <td width="70px"><input type="text" id="addoffer_costexclgst" size="5" value="50" onkeypress="return restrictCharacters(this, event, integerOnly);"/></td>
                                                        <td width="10px"></td>
                                                        <td width="140px">GST Rate</td>
                                                        <td width="5px">:</td>
                                                        <td><input type="text" id="addoffer_gstrate" size="5" value="15" onkeypress="return restrictCharacters(this, event, integerOnly);"/></td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div id="options_tabs-3">Options</div>
            </div>
        </body>
        <script type="text/javascript">
                                                                                                                                                                                                                                       
            //            var end_cal,start_cal; 
            //                                                                                                                                                                                                                        
            //            end_cal = new Epoch('epoch_popup','popup',document.getElementById('directoryperiodend'));
            //                                                                                                                                                                                                                       
            //            start_cal  = new Epoch('epoch_popup','popup',document.getElementById('directoryperiodstart')); 
                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                       
        </script>
        <?php
    }

    protected function addPage() {
        
    }

    protected function editPage() {
        
    }

    protected function removePage() {
        
    }

    protected function searchPage() {
        
    }

    protected function reserve1Page() {
        
    }

}
?>
