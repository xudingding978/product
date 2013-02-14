<?php
//if (!isset($_SESSION))
//    session_start();
//if (isset($_SESSION['user'])) {
    include_once($_SERVER["DOCUMENT_ROOT"] . "/include/tpldb_class.php");
    include_once($path_doc_root . "/common/sessionhandler.php");
    
//    include_once($_SERVER["DOCUMENT_ROOT"]."/common/sessionmaintain.php");
//    
//    $session_maintain = new session_maintain();
//    $GLOBALS["clientuser"]=$session_maintain->get_client_field("client_user", $_SESSION["user"], "client_data");
            
    $tpl_db = new tpldb;
    //$shadow_root = $tpl_db->getShadowRootOfUser($_SESSION["client_user"]);
    $shadow_root = $tpl_db->getShadowRootOfUser($GLOBALS["clientuser"]);
    $shadow_suppliers = $tpl_db->getShadowSuppliersByRoot($shadow_root["REC_ID"]);
    $shadow_directory = $tpl_db->getDirectoryDetails($shadow_root['DIRECTORY_REC_ID']);
    if (count($shadow_suppliers) == 1) {
        $supplier = $tpl_db->getShadowRecord("tpl_shadow_supplier", $shadow_suppliers[0]["REC_ID"]);
        $directory_offering = $tpl_db->getShadowRecord("tpl_shadow_directory_offering", $shadow_root['SHADOW_DIRECTORY_OFFERING_REC_ID']);
    }
//}

?>
<table width="100%" border="0" cellpadding="0" cellspacing="0">
    <tr>
        <td>
            <table width="100%" border="0" cellpadding="0" cellspacing="0">
                <tr align="center">
                    <td colspan="3" width="200" valign="top"><a href="/"><img src="/images/blank.png" border="0"></a></td>  
                </tr>
                <tr>
                    <td colspan="3" align="right" style="font-family: Verdana,sans-serif; color:#606060; font-size:12px;">
                        <?php
                            if (isset($shadow_root['REC_ID']))
                                ; {
                                echo "Details:&nbsp;<strong>" . $shadow_directory[0]['NAME'] . "</strong>&nbsp;|&nbsp;<strong>" . $shadow_root['DIRECTORY_YEAR'] . "</strong>&nbsp;|&nbsp;<strong>" . $shadow_root['STATE'] . "</strong>&nbsp;|&nbsp;<strong>" . $directory_offering['NAME'] . "</strong>&nbsp;|&nbsp;$<strong>" . number_format($shadow_root['TRANSACTION_TOTAL_INCL_GST'], 2) . "</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><br/>";
                            }
                        ?>
                    </td>
                </tr>
                <tr>
                    <td align="left" colspan="2" style="padding-left: 4px; font-family: Arial, Sans-Serif; font-size: 20pt; font-weight:bold; color: #58585A;">
                        <?php
                        echo $supplier['NAME'];
                        ?>
                    </td>
                    <td class="BodyText" align="right">&nbsp;<br>
                        <?php
//                        if (!isset($_SESSION))
//                            session_start();
                        if (isset($GLOBALS["clientuser"])) {
                            echo "user: " . $GLOBALS["clientuser"] . "&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"BodyText\" href=\"/\" onclick=\"TPLLogout();\">logout</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>";
                        }
                        if (isset($GLOBALS["clientuser"]))
                            ; {
                            echo "Shadow Root ID:" . "&nbsp;&nbsp;&nbsp;&nbsp;" . $shadow_root['REC_ID'] . "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>";
                        }
                        if (isset($supplier['REC_ID']))
                            ; {
                            echo "Shadow Supplier ID:" . "&nbsp;&nbsp;&nbsp;&nbsp;" . $supplier['REC_ID'] . "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>";
                        }
                        if (isset($supplier['CLIENT_REC_ID']))
                            ; {
                            echo "Client ID:" . "&nbsp;&nbsp;&nbsp;&nbsp;" . $supplier['CLIENT_REC_ID'] . "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
                        }
                        ?>
                    </td>
                </tr>
                <tr>
                    <td width="100px" class="BodyText" align="right"  style="padding-left: 4px; font-family: Arial,Sans-Serif; font-size: 12pt; font-weight: bold;">
                        Client Name:              
                    </td>
                    <td class="BodyText" style="padding-left: 12px;">
                        <?php
                        $supplierName = $tpl_db->getSupplierName($supplier['CLIENT_REC_ID']);
                        echo $supplierName[0]["NAME"];
                        ?>
                    </td>
                    <td class="BodyText" align="right">
                        <a class="BodyText" href="/dashboard/proof-doc.php" target="_blank">Proof Sheet</a>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>