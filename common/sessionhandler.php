<?php

if (!isset($_SESSION))
    session_start(); // start a session if not started on the server
$path_doc_root = $_SERVER["DOCUMENT_ROOT"]; // set the document root
include_once $path_doc_root . '/common/sessionmaintain.php';
global $instanceID;
if (isset($_POST["instanceID"])) {
    $instanceID = $_POST['instanceID'];
} else if (isset($_GET["instanceID"])) {
    $instanceID = $_GET['instanceID'];
} else if ($instanceID == null) {
    if (isset($_SESSION['instanceID'])) {
        $instanceID = $_SESSION['instanceID'];
    } else {
        header('location:/dashboard/login.php'); // redirect back to the login page
    }
}

/*  @var $shadow_root ShadowRoot */
global $client_tab, $active_product_rec_id, $shadow_root, $client_user, $active_product_category_rec_id, $shadow_directory_id, $shadow_root_id, $shadow_supplier_id, $active_branch_rec_id, $active_award_rec_id, $active_accreditation_rec_id, $shadow_supplier_rec_id;
$session_maintain = new session_maintain();
$shadow_root = $session_maintain->get_client_field("shadow_root", $instanceID, "client_data");
$shadow_state = $session_maintain->get_client_field("shadow_state", $instanceID, "client_data");
$client_user = $session_maintain->get_client_field("client_user", $instanceID, "client_data");
$client_id = $session_maintain->get_client_field('client_id', $instanceID, 'client_data');
$client_tab = $session_maintain->get_client_field("client_active_tab", $instanceID, "client_data");
$shadow_directory_id = $session_maintain->get_client_field("shadow_directory_id", $instanceID, "client_data");
$directory_period_id = $session_maintain->get_client_field("directory_period_id", $instanceID, "client_data");
$shadow_root_id = $session_maintain->get_client_field("shadow_root_id", $instanceID, "client_data");
$shadow_supplier_id = $session_maintain->get_client_field("shadow_supplier_id", $instanceID, "client_data");
$active_branch_rec_id = $session_maintain->get_client_field("active_branch_rec_id", $instanceID, "client_data");
$active_award_rec_id = $session_maintain->get_client_field("active_award_rec_id", $instanceID, "client_data");
$active_accreditation_rec_id = $session_maintain->get_client_field("active_accreditation_rec_id", $instanceID, "client_data");
$shadow_supplier_rec_id = $session_maintain->get_client_field('shadow_supplier_rec_id', $instanceID, 'client_data');
$active_product_category_rec_id = $session_maintain->get_client_field("active_product_category_rec_id", $instanceID, "client_data");
$active_brand_rec_id = $session_maintain->get_client_field('active_brand_rec_id', $instanceID, 'client_data');
$active_distributor_rec_id = $session_maintain->get_client_field('active_distributor_rec_id', $instanceID, 'client_data');
$active_person_rec_id = $session_maintain->get_client_field('active_person_rec_id', $instanceID, 'client_data');
$product_based = $session_maintain->get_client_field('product_based', $instanceID, 'client_data');
$active_logo_rec_id = $session_maintain->get_client_field('active_logo_rec_id', $instanceID, "client_data");
$active_function_type = $session_maintain->get_client_field('active_function_type', $instanceID, "client_data");
$active_product_rec_id = $session_maintain->get_client_field('active_product_rec_id', $instanceID, "client_data");
$client_name = $session_maintain->get_client_field('client_name', $instanceID, "client_data");
?>
<?php if (!$client_user) { ?>
    <table width="100%" border="0" cellpadding="0" cellspacing="0">
        <tr>
            <td valign="top" height="472" width="100%">
                <p class="ErrorText"><b>Session Expired</b></p>
            </td>
        </tr>
    </table>
    <script language="javascript">
        parent.location='/dashboard/login.php'
    </script>
<?php } ?>

