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

class ShawsTab extends BasePage {

    function Name() {
        return "Shaws";
    }

    function ID() {
        return 4;
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
        <updatepanel id="tabpanel_shaws">
            <content>
                <![CDATA[
                <script type="text/javascript">
                    jQuery(document).ready(function($) {
                        $(".export-shaws-panel #shawstabs").tabs();			
                    });
                </script>
                <div class="export-shaws-panel">
                    <div id="shawstabs">
                        <ul>
                            <li><a href="#shaws-content-1">Supplier</a></li>
                            <li><a href="#shaws-content-2">Personnel</a></li>
                            <li><a href="#shaws-content-3">Branch</a></li>
                            <li><a href="#shaws-content-4">Brands</a></li>
                            <li><a href="#shaws-content-5">Brand List</a></li>
                            <li><a href="#shaws-content-6">Drink Types Index</a></li>
                            <li><a href="#shaws-content-7">Drink Types</a></li>
                        </ul>
                        <div id="shaws-content-1">
                            <table width="100%" border="0">
                                <tr>
                                    <td>Header</td>
                                    <td><textarea id='headerTag<?php echo $this->ID(); ?>' name='headerTag<?php echo $this->ID(); ?>' cols='72' rows='5'><?php if ($hasValue) echo $tag["HEADER_TAG"]; ?> </textarea></td>
                                </tr>
                                <tr>
                                    <td>Supplier Company Name</td>
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
                                    <td>Distributors Name</td>
                                    <td><input id='contactNameTag<?php echo $this->ID(); ?>' name='contactNameTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["DISTRIBUTORSNAME_TAG"]; ?>'/></td>
                                </tr>
                            </table>
                        </div>
                        <div id="shaws-content-2">
                            <table width="100%" border="0">
                                <tr>
                                    <td>Name</td>
                                    <td><input id='personnelNameTag<?php echo $this->ID(); ?>' name='personnelNameTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["PERSONNELNAME_TAG"]; ?>'/></td>
                                </tr>
                                <tr>
                                    <td>Phone</td>
                                    <td><input id='personnelPhoneTag<?php echo $this->ID(); ?>' name='personnelPhoneTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["PERSONNELPHONE_TAG"]; ?>'/></td>
                                </tr>
                                <tr>
                                    <td>Fax</td>
                                    <td><input id='personnelFaxNumberTag<?php echo $this->ID(); ?>' name='personnelFaxNumberTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["PERSONNEL_FAX_TAG"]; ?>'/></td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td><input id='personnelEmailTag<?php echo $this->ID(); ?>' name='personnelEmailTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["PERSONNEL_EMAIL_TAG"]; ?>'/></td>
                                </tr>
                            </table>
                        </div>
                        <div id="shaws-content-3">
                            <table width="100%" border="0">
                                <tr>
                                    <td>Heading <i>(Separator Tag)</i></td>
                                    <td><input id='branchesTag<?php echo $this->ID(); ?>' name='branchesTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["BRANCHES_TAG"]; ?>'/></td>
                                </tr>
                                <tr>
                                    <td>Branch Name</td>
                                    <td><input id='branchNameTag<?php echo $this->ID(); ?>' name='branchNameTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["BRANCH_NAME_TAG"]; ?>'/></td>
                                </tr>
                                <tr>
                                    <td>Branch Physical Address</td>
                                    <td><input id='branchPhysicalAddressTag<?php echo $this->ID(); ?>' name='branchPhysicalAddressTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["BRANCH_PHYSICAL_ADDRESS_TAG"]; ?>'/></td>
                                </tr>
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
                            </table>
                        </div>
                        <div id="shaws-content-4">
                            <table width="100%" border="0">
                                <tr>
                                    <td>Heading <i>(Separator Tag)</i></td>
                                    <td><input id='brandHeadingTag<?php echo $this->ID(); ?>' name='brandHeadingTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["BRAND_HEADING_TAG"]; ?>'/></td>
                                </tr>
                                <tr>
                                    <td>Brand Name</td>
                                    <td><input id='brandNameTag<?php echo $this->ID(); ?>' name='brandNameTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["BRAND_NAME_TAG"]; ?>'/></td>
                                </tr>
                            </table>
                        </div>
                        <div id="shaws-content-5">
                            <table width="100%" border="0">
                                <tr>
                                    <td>Heading <i>(Separator Tag)</i></td>
                                    <td><input id='brandListHeadingTag<?php echo $this->ID(); ?>' name='brandListHeadingTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["BRAND_LIST_HEADING_TAG"]; ?>'/></td>
                                </tr>
                                <tr>
                                    <td>Brand List Name</td>
                                    <td><input id='brandListNameTag<?php echo $this->ID(); ?>' name='brandListNameTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["BRAND_LIST_NAME_TAG"]; ?>'/></td>
                                </tr>
                                <tr>
                                    <td>Supplier Name</td>
                                    <td><input id='brandListSupplierTag<?php echo $this->ID(); ?>' name='brandListSupplierTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["BRAND_LIST_SUPPLIER_TAG"]; ?>'/></td>
                                </tr>
                            </table>
                        </div>
                        <div id="shaws-content-6">
                            <table width="100%" border="0">
                                <tr>
                                    <td>Heading <i>(Separator Tag)</i></td>
                                    <td><input id='drinkTypesIndexHeadingTag<?php echo $this->ID(); ?>' name='drinkTypesIndexHeadingTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["DRINK_TYPE_INDEX_HEADING_TAG"]; ?>'/></td>
                                </tr>
                                <tr>
                                    <td>Category Name</td>
                                    <td><input id='drinkTypeIndexCategoryNameTag<?php echo $this->ID(); ?>' name='drinkTypeIndexCategoryNameTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["DRINK_TYPE_INDEX_CATEGORY_NAME_TAG"]; ?>'/></td>
                                </tr>
                                <tr>
                                    <td>Drink Name</td>
                                    <td><input id='drinkTypeIndexNameTag<?php echo $this->ID(); ?>' name='drinkTypeIndexNameTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["DRINK_TYPE_INDEX_NAME_TAG"]; ?>'/></td>
                                </tr>
                            </table>
                        </div>
                        <div id="shaws-content-7">
                            <table width="100%" border="0">
                                <tr>
                                    <td>Heading <i>(Separator Tag)</i></td>
                                    <td><input id='drinkTypesHeadingTag<?php echo $this->ID(); ?>' name='drinkTypesHeadingTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["DRINK_TYPE_HEADING_TAG"]; ?>'/></td>
                                </tr>
                                <tr>
                                    <td>Category Name</td>
                                    <td><input id='drinkTypeCategoryNameTag<?php echo $this->ID(); ?>' name='drinkTypeCategoryNameTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["DRINK_TYPE_CATEGORY_NAME_TAG"]; ?>'/></td>
                                </tr>
                                <tr>
                                    <td>Drink Name</td>
                                    <td><input id='drinkTypeNameTag<?php echo $this->ID(); ?>' name='drinkTypeNameTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["DRINK_TYPE_NAME_TAG"]; ?>'/></td>
                                </tr>
                                <tr>
                                    <td>Product Info</td>
                                    <td><input id='drinkTypeProductInfoTag<?php echo $this->ID(); ?>' name='drinkTypeProductInfoTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["DRINK_TYPE_PRODUCT_INFO_TAG"]; ?>'/></td>
                                </tr>
                                <tr>
                                    <td>Product Name</td>
                                    <td><input id='drinkTypeProductNameTag<?php echo $this->ID(); ?>' name='drinkTypeProductNameTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["DRINK_TYPE_PRODUCT_NAME_TAG"]; ?>'/></td>
                                </tr>
                                <tr>
                                    <td>Hidden Type <i>(like Comment)</i></td>
                                    <td><input id='commentTag<?php echo $this->ID(); ?>' name='commentTag<?php echo $this->ID(); ?>' type='text' size='100' value='<?php if ($hasValue) echo $tag["COMMENT_TAG"]; ?>'/></td>
                                </tr>
                                <tr>
                                    <td colspan='2'>
                                        <input type='hidden' id='template_id<?php echo $this->ID(); ?>' name='template_id<?php echo $this->ID(); ?>' value='<?php if ($hasValue) echo $tag["REC_ID"]; ?>'/>
                                    </td></tr>
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
        $result = $this->ConnectionObj->doQuery("SELECT * from " . $ADMIN_DB_NAME . ".tpl_admin_shaws_template WHERE RELEASE_YEAR = ? AND TEMPLATE_REC_ID = ? AND DIRECTORY_REC_ID = ?", array($this->year, $this->tversion, $this->directory));
        return $result;
    }

}

$object = new ShawsTab();
$object->showPage();
$object->Destroy();
?>