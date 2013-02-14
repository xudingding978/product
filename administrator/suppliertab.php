<?php
if (!isset($_SESSION)) {
    session_start();
}
if (!isset($_SESSION["uid"])) {
    include("login.php");
    return;
}

include_once("basepage.php");
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
require_once($path_doc_root . "/include/KoolPHPSuite/KoolAjax/koolajax.php");
$koolajax->scriptFolder = "./../include/KoolPHPSuite/KoolAjax";
if ($koolajax->isCallback)
    sleep(0);
echo $koolajax->Render();

class SupplierTab extends BasePage {

    function Name() {
        return "Supplier"; // name of the class
    }

    function ID() { //this is the value reference of this class
        return 3;
    }

    function showPage() {
        $this->buildMainControlPage();
    }

    function buildTemplateEditor() {
        $hasValue = false;
        $tag = null;
        if (isset($this->directory) && isset($this->year) && isset($this->tversion)) {
            $tags = $this->getTags();
            if ($tags && $tags->num_rows > 0) {
                $tag = $tags->fetch_array(MYSQLI_ASSOC);
                $hasValue = true;
            }
        }
        ?>
        <?php echo KoolScripting::Start(); ?>
        <updatepanel id="tabpanel_supplier">
            <content>
                <![CDATA[
                <script type="text/javascript">
                    jQuery(document).ready(function($) {
                        $(".export-supplier-panel #suppliertabs").tabs();			
                    });
                </script>					
                <div class="export-supplier-panel">
                    <div id="suppliertabs">
                        <ul>
                            <li><a href="#supplier-content-1">Supplier Information</a></li>
                            <li><a href="#supplier-content-2">Key Personnel</a>
                            <li><a href="#supplier-content-3">Branch</a></li>
                        </ul>
                        <div id="supplier-content-1">
                            <table width="100%" border="0">
                                <tr>
                                    <td>Header</td>
                                    <td><textarea id='headerTag<?php echo $this->ID(); ?>' name='headerTag<?php echo $this->ID(); ?>' cols='72' rows='5'><?php if ($hasValue) echo $tag["HEADER_TAG"]; ?> </textarea></td>
                                </tr>
                                <tr>
                                    <td>SubHeader</td>
                                    <td><input id='subHeaderTag<?php echo $this->ID(); ?>' name='subHeaderTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["SUB_HEADER_TAG"]; ?>'/></td>
                                </tr>
                                <tr>
                                    <td>Logo</td>
                                    <td><input id='logoTag<?php echo $this->ID(); ?>' name='logoTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["LOGO_TAG"]; ?>'/></td>
                                </tr>
                                <tr>
                                    <td>Company Name</td>
                                    <td><input id='supplierCompanyNameTag<?php echo $this->ID(); ?>' name='supplierCompanyNameTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["SUPPLIERNAME_TAG"]; ?>'/></td>
                                </tr>
                                <tr>
                                    <td>Company Statement</td>
                                    <td><input id='companyStatementTag<?php echo $this->ID(); ?>' name='companyStatementTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["COMPANYSTATEMENT_TAG"]; ?>'/></td>
                                </tr>
                                <tr>
                                    <td>Physical Address</td>
                                    <td><input id='pysicalAddressTag<?php echo $this->ID(); ?>' name='pysicalAddressTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["PHYSICAL_ADDRESS_TAG"]; ?>'/></td>
                                </tr>
                                <tr>
                                    <td>Postal Address</td>
                                    <td><input id='postalAddressTag<?php echo $this->ID(); ?>' name='postalAddressTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["POSTAL_ADDRESS_TAG"]; ?>'/></td>
                                </tr>
                                <tr>
                                    <td>Phone</td>
                                    <td><input id='phoneTag<?php echo $this->ID(); ?>' name='phoneTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["PHONE_TAG"]; ?>'/></td>
                                </tr>
                                <tr>
                                    <td>Free Phone</td>
                                    <td><input id='freePhoneTag<?php echo $this->ID(); ?>' name='freePhoneTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["FREEPHONE_TAG"]; ?>'/></td>
                                </tr>
                                <tr>
                                    <td>Fax</td>
                                    <td><input id='faxNumberTag<?php echo $this->ID(); ?>' name='faxNumberTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["FAX_TAG"]; ?>'/></td>
                                </tr>
                                <tr>
                                    <td>Free Fax</td>
                                    <td><input id='freeFaxNumberTag<?php echo $this->ID(); ?>' name='freeFaxNumberTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["FREEFAX_TAG"]; ?>'/></td>
                                </tr>
                                <tr>
                                    <td>Email Address</td>
                                    <td><input id='emailAddressTag<?php echo $this->ID(); ?>' name='emailAddressTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["EMAIL_TAG"]; ?>'/></td>
                                </tr>
                                <tr>
                                    <td>Website</td>
                                    <td><input id='websiteTag<?php echo $this->ID(); ?>' name='websiteTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["WEBSITE_TAG"]; ?>'/></td>
                                </tr>
                                <tr>
                                    <td>Contact Name</td>
                                    <td><input id='contactNameTag<?php echo $this->ID(); ?>' name='contactNameTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["CONTACTNAME_TAG"]; ?>'/></td>
                                </tr>
                            </table>
                        </div>
                        <div id="supplier-content-2">
                            <table width="100%" border="0">
                                <tr>
                                    <td>Key Personnel's Heading <i>(Separator Tag)</i></td>
                                    <td><input id='keyPersonnelTag<?php echo $this->ID(); ?>' name='keyPersonnelTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["KEYPERSONNEL_TAG"]; ?>'/></td>
                                </tr>
                                <tr>
                                    <td>Name</td>
                                    <td><input id='keyPersonnelNameTag<?php echo $this->ID(); ?>' name='keyPersonnelNameTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["KEYPERSONNEL_NAME_TAG"]; ?>'/></td>
                                </tr>
                                <tr>
                                    <td>Position</td>
                                    <td><input id='keyPersonnelPositionTag<?php echo $this->ID(); ?>' name='keyPersonnelPositionTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["KEYPERSONNEL_POSITION_TAG"]; ?>'/></td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td><input id='keyPersonnelEmailTag<?php echo $this->ID(); ?>' name='keyPersonnelEmailTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["KEYPERSONNEL_EMAIL_TAG"]; ?>'/></td>
                                </tr>
                                <tr>
                                    <td>Phone</td>
                                    <td><input id='keyPersonnelPhoneTag<?php echo $this->ID(); ?>' name='keyPersonnelPhoneTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["KEYPERSONNEL_PHONE_TAG"]; ?>'/></td>
                                </tr>
                                <tr>
                                    <td>Fax</td>
                                    <td><input id='keyPersonnelFaxTag<?php echo $this->ID(); ?>' name='keyPersonnelFaxTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["KEYPERSONNEL_FAX_TAG"]; ?>'/></td>
                                </tr>
                            </table>
                        </div>
                        <div id="supplier-content-3">
                            <table width="100%" border="0">
                                <tr>
                                    <td>Branches Heading <i>(Separator Tag)</i></td>
                                    <td><input id='branchesTag<?php echo $this->ID(); ?>' name='branchesTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["BRANCHES_TAG"]; ?>'/></td>
                                </tr>
                                <tr>
                                    <td>Branch Name</td>
                                    <td><input id='branchNameTag<?php echo $this->ID(); ?>' name='branchNameTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["BRANCH_NAME_TAG"]; ?>'/></td>
                                </tr>
                                <!-- reported by TPL during winetech export (refer email on 26/05/2011)
                                <tr>
                                        <td>Branch Physical Address</td>
                                        <td><input id='branchPhysicalAddressTag<?php //echo $this->ID();  ?>' name='branchPhysicalAddressTag<?php //echo $this->ID();  ?>' type='text' size='100' value='<?php //if ($hasValue) echo $tag["BRANCH_PHYSICAL_ADDRESS_TAG"]; ?>'/></td>
                                </tr> -->
                                <tr>
                                    <td>Branch Postal Address</td>
                                    <td><input id='branchPostalAddressTag<?php echo $this->ID(); ?>' name='branchPostalAddressTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["BRANCH_POSTAL_ADDRESS_TAG"]; ?>'/></td>
                                </tr>
                                <tr>
                                    <td>Branch Phone</td>
                                    <td><input id='branchPhoneTag<?php echo $this->ID(); ?>' name='branchPhoneTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["BRANCH_PHONE_TAG"]; ?>'/></td>
                                </tr>
                                <tr>
                                    <td>Branch Free Phone</td>
                                    <td><input id='branchFreePhoneTag<?php echo $this->ID(); ?>' name='branchFreePhoneTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["BRANCH_FREEPHONE_TAG"]; ?>'/></td>
                                </tr>
                                <tr>
                                    <td>Branch Fax</td>
                                    <td><input id='branchFaxNumberTag<?php echo $this->ID(); ?>' name='branchFaxNumberTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["BRANCH_FAX_TAG"]; ?>'/></td>
                                </tr>
                                <tr>
                                    <td>Branch Free Fax</td>
                                    <td><input id='branchFreeFaxTag<?php echo $this->ID(); ?>' name='branchFreeFaxTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["BRANCH_FREEFAX_TAG"]; ?>'/></td>
                                </tr>
                                <tr>
                                    <td>Branch Email</td>
                                    <td><input id='branchEmailTag<?php echo $this->ID(); ?>' name='branchEmailTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["BRANCH_EMAIL_TAG"]; ?>'/></td>
                                </tr>
                                <tr>
                                    <td>Hidden Type <i>(like Comment)</i></td>
                                    <td><input id='commentTag<?php echo $this->ID(); ?>' name='commentTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["COMMENT_TAG"]; ?>'/></td>
                                </tr>
                                <tr>
                                    <td colspan='2'>
                                        <input type='hidden' id='template_id<?php echo $this->ID(); ?>' name='template_id<?php echo $this->ID(); ?>' value='<?php if ($hasValue) echo $tag["REC_ID"]; ?>'/>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                ]]>
            </content>
            <loading image="../KoolPHPSuite/KoolAjax/loading/11.gif"/>
        </updatepanel>
        <?php echo KoolScripting::End(); ?>
        <?php
    }

    protected function getTags() {
        global $ADMIN_DB_NAME;
        $result = $this->ConnectionObj->doQuery("SELECT * from " . $ADMIN_DB_NAME . ".tpl_admin_supplier_template WHERE RELEASE_YEAR = ? AND TEMPLATE_REC_ID = ? AND DIRECTORY_REC_ID = ?", array($this->year, $this->tversion, $this->directory));
        return $result;
    }

}

$object = new SupplierTab();
$object->showPage();
$object->Destroy();
?>