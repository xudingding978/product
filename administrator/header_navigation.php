<div class="header-panel">
    <div class="bar-panel">
        <div id="welcome">
            <div style="float:left;">
                <b title="<?php var_export($_SESSION) ?>">Welcome,</b>&nbsp;
            </div>
            <div style="float:left;">
                <a href="javascript:void(0)" title="<?php echo $_SESSION["role"] ?>" onClick="ChangePassword();">
                    <span id="AdminUserID" rec_id="<?php echo $_SESSION['uid'] ?>" default_dir_rec_id="<?php echo $_SESSION['defaultperiod'] ?>"><?php echo $_SESSION['realname']; ?></span>
                </a>
            </div>
            <div class="ui-silk ui-silk-vcard" style="float:left; margin-left:3px;"></div>
            <div style="float:left;">
                &nbsp;&nbsp;|&nbsp;&nbsp;
            </div>
            <div style="float:left;">
                <a href="javascript:void(0)" onClick="Logout();">Logout</a>
            </div>
            <div id="selected_directory">
                <div id="dirTitle">
                    <div id="selDirDiv"></div>
                    <div id="selectIcon" style="float:left; margin:4px 2px 0 5px;">
                        <span class="ui-silk ui-silk-page-white-database"></span>
                    </div>
                    <div id="selPeriodDiv"></div>
                </div>
            </div>
        </div>
    </div>
    <div id="navbar" class="navbar">
        <dl id="nav_def_list" class="main list">
            <dt id="item1">
            <a href="/administrator/index.php">Search</a>
            </dt>
            <dt id="item2">
            <a href="/administrator/index.php">Orders</a>
            </dt>
            <dt id="item3">
            <a href="/administrator/system_configuration.php">Setup</a>
            </dt>
            <dt id="item4">
            <a href="/administrator/export_data.php">Export</a>
            </dt>
            <dt id="item4">
            <a href="/administrator/export_data.php">Reports</a>
            </dt>
        </dl> 
    </div>
</div>

