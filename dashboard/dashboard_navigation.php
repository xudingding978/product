<?php
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . '/config.php');
include_once($path_doc_root . '/include/db_class.php');
include_once($path_doc_root . '/include/tpldb_class.php');
include_once($path_doc_root . '/include/KoolPHPSuite/KoolAjax/koolajax.php');
include_once($path_doc_root . "/common/sessionhandler.php");
include_once "../common/util/DBTransaction.php";
include_once "../common/dao/TplClientDAO.php";
include_once "../common/dao/TplShadowRootDAO.php";
include_once "../common/dao/TplShadowSupplierDAO.php";
include_once "../common/dao/TplDirectoryPeriodDAO.php";
include_once "../common/dao/TplShadowDirectoryPeriodOfferingDAO.php";

$dbtrans = new DBTransaction();
$dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
$tpldirectoryperiodofferdao = new TplShadowDirectoryPeriodOfferingDAO();

global $path_doc_root;
global $koolajax;
global $supplier;

if (isset($GLOBALS["client_user"])) {
    //$tpl_db = new tpldb;
    $dbtrans = new DBTransaction();
    $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
    $tplshadowrootdao = new TplShadowRootDAO();
    $tplshadowsupplierdao = new TplShadowSupplierDAO();
    $tpldirectoryperioddao = new TplDirectoryPeriodDAO();
    $tpldirectoryperiodofferdao = new TplShadowDirectoryPeriodOfferingDAO();
    $session_maintain = new session_maintain();
    //$shadow_root = $tpl_db->getShadowRootOfUser($client_user);

    $array = array($GLOBALS["client_id"]);
    $shadow_root_list = $tplshadowrootdao->selectClient($dbconn, $array);
    $shadow_root = $shadow_root_list[0];
    $directory_info_list = $tplshadowrootdao->selectDirectoryList($dbconn, $array);
    $directory_offering_list = $tpldirectoryperiodofferdao->selectOffer($dbconn, $array);
    $directory_offering = $directory_offering_list[0];

    error_log("SHADOW_SUPPLIERS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>" . $GLOBALS["client_id"]);
    $shadow_suppliers = $tplshadowsupplierdao->selectSupplierList($dbconn, $array);

    // $shadow_suppliers = $tpl_db->getShadowSuppliersByRoot($shadow_root['REC_ID']);
    //$shadow_directory = $tpl_db->getDirectoryDetails($shadow_root['DIRECTORY_REC_ID']);
    $array = array($shadow_root['DIRECTORY_PERIOD_REC_ID']);
    error_log("DIRECTORY_PERIOD_REC_ID:" . $shadow_root['DIRECTORY_PERIOD_REC_ID']);


    if (count($shadow_suppliers) > 0) {

        $supplier = $shadow_suppliers[0];
        //$supplier = $tpl_db->getShadowRecord('tpl_shadow_supplier', $shadow_suppliers[0]['REC_ID']);
        //var_export($supplier, true);

        $array = array($shadow_root['REC_ID']);
        $directory_offering_list = $tpldirectoryperiodofferdao->selectOffer($dbconn, $array);
        $directory_offering = $directory_offering_list[0];
        // $directory_offering = $tpl_db->getShadowRecord('tpl_shadow_directory_offering', $shadow_root['SHADOW_DIRECTORY_OFFERING_REC_ID']);
    }
    // $directory = $tpl_db->getRecord('tpl_directory', $shadow_root['DIRECTORY_REC_ID']);
    // $session_maintain->add_client_field('product_based', ($directory['IS_PRODUCT_BASED'] == 1), $instanceID, 'client_data');
    $session_maintain->add_client_field('shadow_root', $shadow_root, $instanceID, 'client_data');
    $session_maintain->add_client_field('shadow_root_id', $shadow_root['REC_ID'], $instanceID, 'client_data');
    $session_maintain->add_client_field('shadow_directory_id', $shadow_root['DIRECTORY_PERIOD_REC_ID'], $instanceID, 'client_data');
    $session_maintain->add_client_field('shadow_state', $shadow_root['STATE'], $instanceID, 'client_data');
}

/*
 * Edit by Chong for testing 
  global $koolajax;
  include_once($path_doc_root . "/dashboard/initialize-callbacks.php");
  require($path_doc_root . "/include/messaging.php");
  require ($path_doc_root . "/include/KoolPHPSuite/KoolAjax/koolajax.php");
  $koolajax->scriptFolder = "./../include/KoolPHPSuite/KoolAjax";
  if ($koolajax->isCallback)
  sleep(0);
 */
global $koolajax;
include_once($path_doc_root . "/dashboard/initialize-callbacks.php");
require ($path_doc_root . "/include/KoolPHPSuite/KoolAjax/koolajax.php");
$koolajax->scriptFolder = "./../include/KoolPHPSuite/KoolAjax";
if ($koolajax->isCallback)
    sleep(0);
?>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <?php echo $koolajax->Render(); ?>
        <script language="javascript">
            var str="1";
            function changeContent(thisobject,link)
            {
                $.ajax({
                    url: link,
                    type: 'POST',
                    data: "",                            
                    async: false,
                    success: function(response) {  
                        $("#dashboard_content").html(response);
                
                        return;                                   
                    }
                });   
            }
            function logout()
            {	 
                koolajax.callback(DoTPLLogout("logout") ,asyncronusCallback);                              
            }
            function asyncronusCallback()
            {                
                window.parent.location='/dashboard/';  
            }  
    
    
    
            // -------------------------------------------------------
            function DropDown(el) {
                this.dd = el;
                this.placeholder = this.dd.children('span');
                this.opts = this.dd.find('ul.dropdown > li');
                this.val = '';
                this.index = -1;
                this.initEvents();
            }
            DropDown.prototype = {
                initEvents : function() {
                    var obj = this;
         
                    obj.dd.on('click', function(event){
                        $(this).toggleClass('active');
                        return false;
                    });

                    obj.opts.on('click',function(){
                        var opt = $(this);
                        var s=getText(opt.text());
                        obj.index = opt.index();
                        obj.placeholder.text(s);
                    });
                },
                getValue : function() {
                    return this.val;
                },
                getIndex : function() {
                    return this.index;
                }
            }
        
            $(function() {
  
                var dd = new DropDown( $('#directoryname') );

                $(document).click(function() {

                    // all dropdowns
                    $('.wrapper-dropdown-3').removeClass('active');
                });

            });
        
            function getText($s)
            {
            
                var str=$s.split("|",1); 
                return str;
            }
            function setTest()
            {
                if(str==1)
                {
                    $('#test').html("ok");
                    str=0;
                }
                else
                {    $('#test').html("not ok");
                    str=1;}
            }
    
        </script>
    </head>

    <div class="header">
        <div id="nav-container">

     <!--
  
             <div id="directoryname" class="selector">

                <span class="directorytitle">
                    <?php
                    echo " <select onchange=\"DoChangeDirPeriod(this[selectedIndex].value)\" id =\"directoryCombo\" width=\"200\" style=\"width:200px\">";

                    $number = 1;
                    if (count($directory_info_list) > 0) {

                        foreach ($directory_info_list as $key => $directory_info) {
                            if ($GLOBALS["directory_period_id"] == $directory_info["DP_REC_ID"]) {
                                echo "<option value=\"" . $directory_info["REC_ID"] . "\" selected=\"yes\"> No." . $number . "  " . $directory_info["START_DATE"] . " " . $directory_info["END_DATE"] . " " . $directory_info["DIR_NAME"] . "</option>";
                            } else {
                                echo '<option value=' . $directory_info['REC_ID'] . ' >No.' . $number . ' From ' . $directory_info['START_DATE'] . ' to ' . $directory_info['END_DATE'] . ' | ' . $directory_offering['NAME'] . ' $ ' . number_format($shadow_root['TRANSACTION_TOTAL_INCL_GST'], 2) . ' | ' . $directory_info['CATEGORIES_NUMBER'] . ' Categoies | ' . $directory_info['BRANCHES_NUMBER'] . ' Branches | ' . $directory_info['KEY_PERSONNEL_NUMBER'] . ' Key Personel</option>';
                            }
                            $number++;
                        }
                    }
                    echo ": </select>";
                    ?>

                </span>
     
            </div>
     -->
          <!--   DoChangeDirPeriodDoChang(this[selectedIndex].value);-->
            <?php
            echo '  <div id="directoryname" class="wrapper-dropdown-3" tabindex="1" >';
            $number = 1;
            if (count($directory_info_list) > 0) {

                foreach ($directory_info_list as $key => $directory_info) {
                    if ($number == 1) {
                        echo '<span value=' . $directory_info['REC_ID'] . '> From ' . $directory_info['START_DATE'] . ' to ' . $directory_info['END_DATE'] . ' </span>';
                        echo ' <ul class="dropdown">';
                        echo '<li><a href="#">From ' . $directory_info['START_DATE'] . ' to ' . $directory_info['END_DATE'] . ' | ' . $directory_offering['NAME'] . ' $ ' . number_format($shadow_root['TRANSACTION_TOTAL_INCL_GST'], 2) . ' | ' . $directory_info['CATEGORIES_NUMBER'] . ' Categoies | ' . $directory_info['BRANCHES_NUMBER'] . ' Branches | ' . $directory_info['KEY_PERSONNEL_NUMBER'] . ' Key Personel</a></li>';
                    } else {
                        echo '<li><a href="#">From ' . $directory_info['START_DATE'] . ' to ' . $directory_info['END_DATE'] . ' | ' . $directory_offering['NAME'] . ' $ ' . number_format($shadow_root['TRANSACTION_TOTAL_INCL_GST'], 2) . ' | ' . $directory_info['CATEGORIES_NUMBER'] . ' Categoies | ' . $directory_info['BRANCHES_NUMBER'] . ' Branches | ' . $directory_info['KEY_PERSONNEL_NUMBER'] . ' Key Personel</a></li>';
                    }
                    $number++;
                }
            }
            echo '</ul></div>';
            ?>




            <div id="navigation" class="navbar">

                <dl id class="main list">
                    <dt id="item1" class="module">
                        <a id="module_dashboard" onClick="changeContent(this,'/dashboard/client_dashboard.php?instanceID=<?php echo $instanceID ?>')">
                            <span class="menu_hit_area"></span>
                            <span class="icon"></span>
                            <span class="title">Dashboard</span>
                        </a>
                    </dt>
                    <dt id="item2" class="module">
                        <a id="module_profile" onClick="changeContent(this,'/dashboard/client_profile.php?instanceID=<?php echo $instanceID ?>')">
                            <span class="menu_hit_area"></span>
                            <span class="icon"></span>
                            <span class="title">Profile</span>
                        </a>
                    </dt>
                    <dt id="item3" class="module">
                        <a id="module_account" onClick="changeContent(this,'/dashboard/client_cart.php?instanceID=<?php echo $instanceID ?>')">
                            <span class="menu_hit_area"></span>
                            <span class="icon"></span>
                            <span class="title">Account</span>
                        </a>
                    </dt>
                    <dt id="item4" class="module">
                        <a id="module_settings" onClick="changeContent(this,'/dashboard/client_account.php?instanceID=<?php echo $instanceID ?>')">
                            <span class="menu_hit_area"></span>
                            <span class="icon"></span>
                            <span class="title">Settings</span>
                        </a>
                    </dt>
                    <dt >
                        <a onClick="logout()">
                            <i class="icon-signout icon-large"></i>
                            <span class="title">Logout</span>
                        </a>

                    </dt>
                </dl>
            </div>

        </div>
    </div>


</html>