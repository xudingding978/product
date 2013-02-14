
<?php
if (!isset($_SESSION))
    session_start();
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . "/include/db_class.php");
include_once($path_doc_root . "/include/tpldb_class.php");
include_once($path_doc_root . "/include/KoolPHPSuite/KoolAjax/koolajax.php");
include_once($path_doc_root . "/common/sessionhandler.php");
include_once "../common/util/DBTransaction.php";
include_once "../common/dao/TplCategoryDAO.php";
include_once "../common/dao/TplShadowSupplierProductCategoryDAO.php";

$dbtrans = new DBTransaction();
$dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
$TplCategoryDAO = new TplCategoryDAO();
$tplshadowproductdao = new TplShadowSupplierProductCategoryDAO();
//if ($GLOBALS["product_based"]) {

if ($GLOBALS["active_product_category_rec_id"] != "treeview.root") {
    //$tpl_db = new tpldb;
    ?>
    <table width="100%" border="0" cellpadding="0" cellspacing="0">
        <tr>
            <td><img src="/images/spacer.gif" border="0" width="550" height="8" /></td>
        </tr>
        <tr>
            <td class="bodytext">
                <b><?php echo TPLProductPanelDrawPath($GLOBALS["active_product_category_rec_id"]); ?></b>
            </td>
        </tr>
        <tr>
            <td><img src="/images/spacer.gif" border="0" width="550" height="8" /></td>
        </tr>
        <tr>
            <td valign="top" width="100%" class="BodyText">
                <table width="100%" border="0" cellpadding="0" cellspacing="0">
                    <tr>
                        <?php if ($shadow_root['STATE'] == "OPEN")
                            
                            ?>
                        <td valign="top" width="10%" class="BodyText">
                            <button id="add_new"><b>Add New</b></button>
                            </a>
                        </td>
                        <td valign="top" width="40%" class="BodyText">
                            <b><u>Label Name</u></b>
                        </td>
                        <td valign="top" width="30%" class="BodyText">
                            <b><u>Region</u></b>
                        </td>
                        <td valign="top" width="10%" class="BodyText">
                            <b><u>Logo</u></b>
                        </td>
                    </tr>
                    <?php
                    //error_log("Shadow supplier RECb ID.....................:" . $GLOBALS["shadow_supplier_rec_id"]);
                    //error_log("Active Product Category Rec ID..............:" . $GLOBALS["active_product_category_rec_id"]);
                    $param_arr = array($GLOBALS["shadow_supplier_rec_id"], $GLOBALS["active_product_category_rec_id"]);
                    $products = $tplshadowproductdao->selectProduct($dbconn, $param_arr);
                    // $products = $tpl_db->getShadowProductsByCategory($GLOBALS["shadow_root_id"], $shadow_supplier_id, $GLOBALS["active_product_category_rec_id"]);
                    if ($products) {
                        foreach ($products as $key => $product) {
                            $label = htmlspecialchars($product['LABEL_NAME']);
                            $label = str_replace("'", "\'", $label);

                            $region = $product['COUNTRY_OF_ORIGIN'];
                            if ($product['REGION_OF_ORIGIN'] != "")
                                $region = $product['REGION_OF_ORIGIN'] . ", " . $region;
                            if ($shadow_root['STATE'] == "OPEN")
                                
                                ?>
                            <tr>
                                <td valign="top" width="15%" class="BodyText">
                                    <a class="BodyText" href="#" onclick="parent.DoSupplierProductCatogoryUpdate('<?php echo $product['REC_ID'] ?>',tplproductpanel,'P'); return false">Edit</a>
                                    <img src="/images/spacer.gif" border="0" width="4" height="8" />
                                    <a class="BodyText" href="#" onclick="parent.DoSupplierProductDelete('<?php echo $product['REC_ID'] . "','" . $label . " ' " . ",'tplproductpanel" ?>'); return false">Delete</a>
                                </td>
                                <td valign="top" width="45%" class="BodyText">
                                    <?php echo htmlspecialchars($product['LABEL_NAME']) ?> 
                                </td>
                                <td valign="top" width="35%" class="BodyText">
                                    <?php echo htmlspecialchars($region) ?>
                                </td>
                                <td valign="top" width="5%" class="BodyText">
                                    <?php if ($product['IS_LOGO_LISTING'] == true) echo 'Yes'; else echo 'No'; ?>
                                </td>
                            </tr>
                            <?php
                        } //foreach products
                    } //products 
                    ?>
                </table>
            </td>
        </tr>
    </table>
<?php } else {
    ?>
    <table width="100%" border="0" cellpadding="0" cellspacing="0">
        <tr>
            <td class="bodytext">
                Please use the product category tree on the left hand side to select the product category before adding the products for this supplier.  
                Please note that you need to add the various products in the correct location in the category tree.  In other words, select the appropriate 
                product category before your add the product detail.
            </td>
        </tr>
        <tr>
            <td class="bodytext">
                <?php DoRenderCategoryProduct(); ?>
            </td>
        </tr>
    </table>
    <?php
}

//============= CATEGORY LIST FUNCTIONS ================

function DoRenderCategoryProduct() {
    ?>
    <table border="0" cellpadding="4" cellspacing="0">
        <tr>
            <td><img src="/images/spacer.gif" border="0" width="500" height="8" /></td>
        </tr>
        <tr>
            <td class="BodyText"><b><u>Category / Product Listings</u></b></td>
        </tr>
        <tr>
            <td>
                <table width="100%" border="0" cellpadding="0" cellspacing="0">
                    <?php
                    //$tpl_db = new tpldb;
                    //$directory = $tpl_db->getRecord('tpl_directory', $GLOBALS["shadow_directory_id"]);
//                if ($directory['IS_PRODUCT_BASED'] == 1) {
                    global $tplshadowproductdao;
                    global $dbconn;
                    $param_arr = array($GLOBALS["shadow_supplier_rec_id"]);
                    $categories = $tplshadowproductdao->selectSupplierProduct($dbconn, $param_arr);

                    //$tpl_db = new tpldb;
                    //$categories = $tpl_db->GetProductBasedCategoriesSummary($GLOBALS["shadow_root_id"]);  //$supplier['MASTER_REC_ID']
                    // echo "GetProductBasedCategorySummary->(SHADOW_ROOT_ID:" . $_SESSION['shadow_root_id'] . " MASTER_REC_ID:" . $supplier['MASTER_REC_ID'] . var_export($categories, true);
                    if ($categories) {
                        foreach ($categories as $key => $category) {
                            ?>
                            <tr>
                                <td valign="middle" width="10%" class="BodyText">
                                    <b><?php TPLProductPanelDrawPath($category['CATEGORY_REC_ID']); ?></b>
                                </td>
                            </tr>

                            <tr>
                                <td valign="middle" width="10%" class="BodyText"><img src="/images/spacer.gif" border="0" width="4" height="4" /></td>
                            </tr>
                            <?php
                            $param_arr = array($GLOBALS["shadow_supplier_rec_id"], $category['CATEGORY_REC_ID']);
                            $products = $tplshadowproductdao->selectCategoryProduct($dbconn, $param_arr);
                            // $products = $tpl_db->getShadowProductsByCategory($GLOBALS["shadow_root_id"], $shadow_supplier_id, $category['PRODUCT_CATEGORY_REC_ID']);
                            if ($products) {
                                foreach ($products as $key => $product) {
                                    ?>
                                    <tr>
                                        <td width="100%">
                                            <table border="0" cellpadding="4" cellspacing="0">
                                                <tr>
                                                    <td><img src="/images/spacer.gif" border="0" width="10" height="4" /></td>
                                                    <td valign="middle" width="320" class="BodyText">
                                                        <?php echo htmlspecialchars($product['LABEL_NAME']) ?>
                                                    </td>
                                                    <td valign="middle" width="250" class="BodyText">
                                                        <?php echo htmlspecialchars($product['VARIETAL']) ?>
                                                    </td>
                                                    <td valign="middle" width="100" class="BodyText">
                                                        <?php echo htmlspecialchars($product['VINTAGE']) ?>
                                                    </td>
                                                    <td valign="middle" width="200" class="BodyText">
                                                        <?php echo htmlspecialchars($product['REGION_OF_ORIGIN']) . ", " . htmlspecialchars($product['COUNTRY_OF_ORIGIN']) ?>
                                                    </td>
                                                    <?php if ($product['IS_LOGO_LISTING'] == 1) { ?>
                                                        <td valign="middle" width="50" class="BodyText">LOGO</td>
                                                    <?php } else { ?>
                                                        <td valign="middle" width="50" class="BodyText"></td>
                                                    <?php } ?>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr><?php
                            } //for each product
                        } // product loop 
                                            ?> 
                            <tr>
                                <td valign="middle" width="10%" class="BodyText"><img src="/images/spacer.gif" border="0" width="8" height="8" /></td>
                            </tr>
                            <?php
                        } // for each category
                    } //if categories found
//                        } else
//                        {
//                            DoBuildCategories($GLOBALS["shadow_directory_id"], 0, 0);
//                        }// if directory is product based 
                    ?>
                </table>
            </td>
        </tr>
    </table><?php
            }

            function TPLProductPanelDrawPath($recid) {
                global $TplCategoryDAO;
                global $dbconn;
                $param_arr = array($recid);
                $productcategory = $TplCategoryDAO->selectRecID($dbconn, $param_arr);

                //$tpl_db = new tpldb;
                //$productcategory = $tpl_db->getRecord('tpl_product_category', $recid);
                if ($productcategory) {
                    if ($productcategory[0]['PARENT_CATEGORY_REC_ID'] != 0) {
                        TPLProductPanelDrawPath($productcategory[0]['PARENT_CATEGORY_REC_ID']);
                    }
                    echo " > " . $productcategory[0]['NAME'];
                }
            }

// function DoHasSelectedChildren($directory_rec_id, $parent_rec_id) {
//    $tpl_db = new tpldb;
//    $categories = $tpl_db->GetDirectoryCategories($directory_rec_id, $parent_rec_id);
//    $result = FALSE;
//
//    if ($categories) {
//        foreach ($categories as $key => $category) {
//            if ($result != TRUE) {
//                $isdirectorycategory = $tpl_db->IsDirectoryCategory($GLOBALS["directory_rec_id"], $category['REC_ID']);
//                if ($isdirectorycategory == TRUE) {
//                    $result = $tpl_db->IsShadowDirectoryCategoryListed($GLOBALS["shadow_root_id"], $category['REC_ID']);
//
//                    if ($result != TRUE) {
//                        $result = DoHasSelectedChildren($GLOBALS["directory_rec_id"], $category['REC_ID']);
//                    }
//                }
//            }
//        }
//    }
//
//    return $result;
//}
                ?>
<script language="javascript" src="../../dashboard/js/treeview.js" ></script>
<script type="text/javascript" src="../administrator/scripts/jquery-min.js"></script>
<script type="text/javascript" src="../administrator/scripts/jquery-ui.min.js"></script>
<script type="text/javascript" src="../common/ui/js/jquery-ui.min.js"></script>

<link rel="stylesheet" type="text/css" href="/common/ui/css/silk/silk-sprite.css"/>
<link rel="stylesheet" type="text/css" href="../../dashboard/styles/ADPMask.css"/>
<link rel="stylesheet" type="text/css" href="../../dashboard/styles/kooltabs_override.css"/>
<link rel="stylesheet" type="text/css" href="../../dashboard/styles/dashboard.css"/>
<script type = "text/javascript">
    var instanceID='<?php echo $instanceID; ?>';                
   
               
    function TPLUpdateProductPanel(AUpdateLocation)
    {
        //alert("Test");
        tplproductpanel.update(AUpdateLocation);              
    }    
                
                
    var rec_id=0;
    
    function DoSupplierAwardDelete(recid, name)
    {
 	  	  
        koolajax.callback(DoTPLDeleteSupplierAwardDetails(recid,instanceID)); 
       
        tabpanel.update("/dashboard/supplier-awards.php?instanceID="+instanceID);
   	   
    }	   
   
    function DoSupplierAwardUpdate(recid,name,issued_by,year_won,award_logo_url,award_logo_link)
    {
        
        rec_id=recid;        
        $("#name").val(name);
        $("#issued_by").val(issued_by);
        $("#award_logo_url").val(award_logo_url);
        $("#award_logo_link").val(award_logo_link);
        $("#year_won").val(year_won);
        openEditWindow();
    }
    function openEditWindow(){
        $("#dialog" ).dialog({
            title:"Category Product",
            autoOpen: true,
            visibility:true,
            width: 930,
            height: 575,
            modal: true,
            buttons: {
                "Save Changes": function() {
                    DoSaveSupplierAwardDetails(this);                    
                    $(this).empty().remove();
                },
                "Cancel": function() {                    
                    $(this).empty().remove();
                }
            }
        });
    }
    
    
    function DoSaveSupplierAwardDetails(thisob)
    {
        var thisform=document.forms["supplier_awards"];
        // koolajax.callback(DoTPLUpdateSupplierAwardDetails(rec_id, thisform.name.value, thisform.issued_by.value, thisform.year_won.value, thisform.award_logo_url.value, thisform.award_logo_link.value,instanceID));
        //parent.tabpanel.update("/dashboard/supplier-awards.php");          
        $(this).empty().remove();

    }
  
    
    
  
    
    $(document).ready(function() {
       
        $("#add_new").click(function() {             
            $("#dialog1" ).dialog({
                title:"Category Product",
                autoOpen: true,
                visibility:true,
                width: 730,
                height: 600,
                modal: true,
                buttons: {
                    "Save Changes": function() {
                        DoSaveSupplierAwardDetails(this);
                        $(this).empty().remove();
                    },
                    "Cancel": function() {                       
                        $(this).empty().remove();
                    }
                }
            }); 
            subtabpanel.update("/dialogs/ui/product.php");
            return false;

        });
        
    });
    

                
                
</script> 

