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

include_once("callbacks.php");
require_once ($path_doc_root . "/include/KoolPHPSuite/KoolGrid/koolgrid.php");
require_once ($path_doc_root . "/include/KoolPHPSuite/KoolAjax/koolajax.php");
include_once($path_doc_root . "/include/tpldb_class.php");
require_once($path_doc_root . "/include/KoolPHPSuite/KoolAjax/koolajax.php");
$koolajax->scriptFolder = "./../include/KoolPHPSuite/KoolAjax";
if ($koolajax->isCallback)
    sleep(0);

require_once 'constants.php';
require_once 'dataconnection.php';
$koolajax->scriptFolder = "./../include/KoolPHPSuite/KoolAjax";

//Step 2: Create datasource
global $DB_NAME, $DB_HOST, $DB_USER, $DB_PASS;
$db_con = mysql_connect($DB_HOST, $DB_USER, $DB_PASS);
mysql_select_db($DB_NAME, $db_con);
$ds = new MySQLDataSource($db_con);
//$ds->SelectCommand = "SELECT REC_ID, REC_DATETIME, REC_TIMESTAMP, NAME, IS_PRODUCT_BASED, CURRENT_YEAR FROM ".$DB_NAME.".tpl_directory ORDER BY NAME ASC";
$ds->SelectCommand = "SELECT REC_ID, DOMAIN_NAME, JSON_DATA FROM " . $DB_NAME . ".tpl_domains ORDER BY DOMAIN_NAME ASC";

//$ds_directory_period = new MySQLDataSource($db_con);
//$ds_directory_period->SelectCommand = "SELECT DIRECTORY_REC_ID, DIRECTORY_YEAR, DIRECTORY_PERIOD, DIRECTORY_PERIOD_TYPE, DIRECTORY_PERIOD_START, DIRECTORY_PERIOD_END FROM ".$DB_NAME.".tpl_directory_period WHERE tpl_directory_rec_id = REC_ID";
//Step 3: Init KoolGrid and settings
$grid = new KoolGrid("grid");
$grid->scriptFolder = "./../include/KoolPHPSuite/KoolGrid";
$grid->AjaxEnabled = true;
//$grid->AjaxLoadingImage =  "KoolPHPSuite/KoolAjax/loading/5.gif";
$grid->styleFolder = "default";
$grid->DataSource = $ds;
$grid->Width = "1000px";
$grid->AllowInserting = true;
$grid->AllowSelecting = true;
$grid->RowAlternative = true;
//$grid->AllowFiltering = true;

$col_id = new gridboundcolumn();
$col_id->DataField = "REC_ID";
$col_id->HeaderText = "ID";
$grid->MasterTable->AddColumn($col_id);

$col_name = new gridboundcolumn();
$col_name->DataField = "DOMAIN_NAME";
$col_name->HeaderText = "Domain Name";
$grid->MasterTable->AddColumn($col_name);

$col_prod = new gridboundcolumn();
$col_prod->DataField = "JSON_DATA";
$col_prod->HeaderText = "JSON Data";
$grid->MasterTable->AddColumn($col_prod);


$grid->MasterTable->Pager = new GridPrevNextAndNumericPager();
//Step 4: Process Grid
$grid->Process();
$grid->refresh();
$grid->ClientSettings->ClientEvents["OnRowSelect"] = "Handle_OnRowSelect";
?>
<?php echo $koolajax->Render(); ?>
<script type="text/javascript">
    var isUpdate=0;    
    $(function(){       
        $("#resetBtn").click(function() { 
            $('#domain')[0].reset();
            $(':checkbox').removeAttr('checked');
            showMessage("info","Reset Successful")
            isUpdate=0;
            $("#saveDomainBtn > span").text('Save'); 
            return false;
           
        }) 
    });

    $(function() {        
        $("#saveDomainBtn").click(function() {
            if($('#domain_name').val()==""){
                alert("Please enter valid domain name");
                return false;
            }
           
            if($('#title_de').val()==""){
                alert("Please select valid title");
                return false;
            }            
            var arr = new Array();
            var obj_json = new Object();            
            $('#dirid:checked').each(function() {
                arr.push($(this).val());
            });
            obj_json["dir_ids"]=arr;
            obj_json["domain_name"]=$('#domain_name').val();           
            obj_json["title"]=$('#title_de').val();
            obj_json["paypal_email"]=$('#paypal_email').val();            
            var myJsonString = JSON.stringify(obj_json); 
           
            koolajax.callback(DoDomainSave($('#domain_name').val(),myJsonString,isUpdate),callbackmethod);          
            grid.refresh();
            grid.commit();
            $('#domain')[0].reset();
            return false;
            
        });
    });
    function callbackmethod() {     
        if(isUpdate==0){
            showMessage("success","Successfully Added");
        }else{
            showMessage("success","Successfully Updated");           
        }
        $("#saveDomainBtn > span").text('Save');
        $(':checkbox').removeAttr('checked');
        isUpdate=0;
    }
    
    function Handle_OnRowSelect(sender, args) {
        var _row = args["Row"];
        $('#domain_name').val(_row.getDataItem()["DOMAIN_NAME"]);
        var obj_json = $.parseJSON(_row.getDataItem()["JSON_DATA"]);
        $('#title_de').val(obj_json["title"]);
        $('#paypal_email').val(obj_json["paypal_email"]);
        var dirid_arr = new Array();
        dirid_arr=obj_json["dir_ids"];        
        $(':checkbox').each(function() {
            if(jQuery.inArray($(this).val(), dirid_arr)!=(-1)){               
                $($(this)).attr('checked','checked');
            }else{              
                $($(this)).removeAttr('checked');
            }      
        }); 
        isUpdate=_row.getDataItem()["REC_ID"]
        $("#saveDomainBtn > span").text('Update');      
        $("#saveDomainBtn").addClass("ui-button ui-button-text-only ui-widget ui-state-default ui-corner-all");
       
        
    }
  
</script>

<updatepanel id="tabpanel_brand">
    <content>     
        <form id="domain">
            <div class="export-brand-panel">

                <div id="brand-content-1">
                    <table width="100%" border="0">
                        <tr>
                            <td>Domain Name</td>
                            <td><input id='domain_name' name='domain_name' type='text'  size='50' value=""/></td>
                        </tr>
                        <tr>
                            <td>Directories </td>
                            <td>
                                <div style="overflow-y:auto;overflow-x:hidden;height:auto;width:100%;border: 1px;">

                                    <table width="100%" id="table1">
                                        <?php
                                        $tpl_db = new tpldb;
                                        $directory_list = $tpl_db->GetDirectoryList();

                                        if ($directory_list) {
                                            foreach ($directory_list as $key => $dir) {
                                                ?>
                                                <tr>
                                                    <td><input type="checkbox" id="dirid" name="dirid" value="<?php echo $dir['REC_ID'] ?>"></td> <td><?php echo $dir['REC_ID']; ?></td> <td><?php echo $dir["NAME"] ?></td><td><?php echo $dir["DIRECTORY_DESC"] ?></td>
                                                </tr>
                                                <?php
                                            }
                                        }
                                        ?>                                
                                    </table>
                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>Title </td>
                            <td><input id='title_de' name='title_de' type='text'  size='50' value=""/></td>
                        </tr>
                        <tr>
                            <td>Paypal Email Add.</td>
                            <td><input id='paypal_email' name='paypal_email' type='text'  size='50' value=""/></td>
                        </tr>
                        <tr height="15px">
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td width="20%">
                                <button id="saveDomainBtn" >
                                    Save
                                </button>
                                <button id="resetBtn" >
                                    Reset
                                </button>

                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>

                            </td>
                        </tr>

                    </table>
                </div>

                <table width="100%" border="0">   
                    <tr>
                        <td>
                            <?php echo $grid->Render(); ?>
                        </td>
                    </tr>

                </table>        

            </div>
        </form>
    </content>
    <loading image="../KoolPHPSuite/KoolAjax/loading/11.gif"/>
</updatepanel>

