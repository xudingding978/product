<!-- Tab implementation-->


<script type="text/javascript">
    $(document).ready(function($){

        // Tabs
        $('#tabs').tabs();
        $('#awardssubtab').tabs();
        $('#supdetailssubtab').tabs();
        $('#mediasubtab').tabs();
        $('#uploadertab').tabs();
                
        //hover states on the static widgets
        $('#dialog_link, ul#icons li').hover(
        function() { $(this).addClass('ui-state-hover'); },
        function() { $(this).removeClass('ui-state-hover'); }
    );

    });
    function tabIndexShow(){
        var current_index = $("#tabs").tabs("option","selected");
        $("#tabs").tabs('select', 1);
        //alert("The index of the current tab is " + current_index);
    }
</script>


<?php
$path_doc_root = $_SERVER['DOCUMENT_ROOT'];
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

global $path_doc_root;
global $koolajax;

if (isset($GLOBALS["client_user"])) {
    //$tpl_db = new tpldb;
    $dbtrans = new DBTransaction();
    $dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
    $tplclientdao = new TplClientDAO();
    $tplshadowrootdao = new TplShadowRootDAO();
    $tplshadowsupplierdao = new TplShadowSupplierDAO();
    $tpldirectoryperioddao = new TplDirectoryPeriodDAO();
    $tpldirectoryperiodofferdao = new TplShadowDirectoryPeriodOfferingDAO();


    $session_maintain = new session_maintain();
    //$shadow_root = $tpl_db->getShadowRootOfUser($client_user);

    $array = array($GLOBALS["client_id"]);
    $shadow_root_list = $tplshadowrootdao->selectClient($dbconn, $array);
    $shadow_root = $shadow_root_list[0];

    $array = array($GLOBALS["client_id"]);
    error_log("SHADOW_SUPPLIERS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>" . $GLOBALS["client_id"]);
    $shadow_suppliers = $tplshadowsupplierdao->selectSupplierList($dbconn, $array);



    // $shadow_suppliers = $tpl_db->getShadowSuppliersByRoot($shadow_root['REC_ID']);
    //$shadow_directory = $tpl_db->getDirectoryDetails($shadow_root['DIRECTORY_REC_ID']);
    $array = array($shadow_root['DIRECTORY_PERIOD_REC_ID']);
    error_log("DIRECTORY_PERIOD_REC_ID:" . $shadow_root['DIRECTORY_PERIOD_REC_ID']);
    $shadow_directory = $tpldirectoryperioddao->selectDirDetail($dbconn, $array);
    global $supplier;
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
?>
<table id="profile" height="100%" width="100%" border="0" cellpadding="0" cellspacing="0">
    <tr>
        <td valign="top">
            <table width="100%" border="0" cellpadding="2" cellspacing="8">
                <tr>
                    <td>
                        <table width="100%" border="0" cellpadding="0" cellspacing="0">
                            <tr>
                                <td>
                                    <table width="100%" border="0" cellpadding="0" cellspacing="0">
                                        <tr>
                                            <td colspan="3" align="right" style="font-family: Verdana,sans-serif; color:#606060; font-size:12px;">
                                                <?php
                                                if (isset($shadow_root['REC_ID'])) {
                                                    echo $shadow_directory[0]['NAME'] . ' | ' . $shadow_directory[0]['DIRECTORY_YEAR'] . ' | ' . $shadow_root['STATE'] . ' | ' . $directory_offering['NAME'] . ' |$ ' . number_format($shadow_root['TRANSACTION_TOTAL_INCL_GST'], 2) . '<br/>';
                                                }
                                                ?>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="left" colspan="3" class="client-title" title="<?php echo var_export($_SESSION); ?>">
                                                <?php echo $supplier['NAME']; ?></br>
                                                <p style="font-family: Verdana,sans-serif; color:#606060; font-size:12px;">User name: <?php echo $client_name; ?></p>
                                            </td>
                                        </tr>
                                        <!--  <tr>
                                            <td width="100px" align="right" class="client-name-label">
                                                Client Name:              
                                            </td>
                                            <td class="client-name">
                                        <?php
                                        // $supplierName = $tpl_db->getSupplierName($supplier['CLIENT_REC_ID']);
                                        echo $GLOBALS["client_user"];
                                        ?>
                                            </td>
                                            <td class="BodyText" align="right">
                                                <a class="BodyText" href="/dashboard/proof-doc.php" target="_blank">Proof Sheet</a>
                                            </td>
                                        </tr>-->
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>
                        <table width="100%" border="0" cellpadding="2" cellspacing="0">
                            <tr valign="top">
                                <td width="100%" valign="top" class="BodyText">
                                    <table id="SupplierTabs" width="100%" border="0" cellpadding="0" cellspacing="8">
                                        <tr valign="top">
                                            <td width="100%" valign="top" class="BodyText">
                                                <?php
                                                //$shadow_suppliers = $tpl_db->getShadowSuppliersByRoot($session_maintain->get_client_field('shadow_root_id', $instanceID, 'client_data'));
                                                // var_export($shadow_suppliers );

                                                if (count($shadow_suppliers) == 1) {

                                                    $session_maintain->add_client_field('shadow_supplier_rec_id', $shadow_suppliers[0]['REC_ID'], $instanceID, 'client_data');
                                                    $session_maintain->add_client_field('shadow_supplier_id', $shadow_suppliers[0]['MASTER_REC_ID'], $instanceID, 'client_data');

                                                    include_once('supplier-editor.php');
                                                } else {
                                                    // OK, there are several suppliers in the list.  Lets ask the user to select from the list                                                
                                                    echo count($shadow_suppliers) . 'Multiple Supplier Listings found for the client. - Display Dashboard Grid.';
                                                }
                                                ?>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
