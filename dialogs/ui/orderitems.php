<?php
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . '/config.php');
include_once $path_doc_root . "/common/util/DBTransaction.php";
include_once $path_doc_root . "/common/dao/TplDirectoryPeriodOrderItemsDAO.php";
include_once $path_doc_root . "/common/dao/TplDirectoryPeriodDAO.php";

$recid = $_GET["rec_id"];
//$recid = 37;
$tpldirperioddao = new TplDirectoryPeriodDAO();
$tpldirperiod;
$previosperiodid = 0;


$dbtrans = new DBTransaction();
$dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
$tpldirperorderitemsdao = new TplDirectoryPeriodOrderItemsDAO();
$array = array($recid);
$tpldirperitems = $tpldirperorderitemsdao->selectOrderItems($dbconn, $array);



$buttonactivelogo="ui-silk-basket-delete";
$buttonactivetitle="Deactivate";

$buttoninactivelogo="ui-silk-basket-add";
$buttoninactivetitle="Activate";
?>

<link rel="stylesheet" type="text/css" href="/common/ui/css/silk/silk-sprite.css"/>

<script type="text/javascript"> 
      $(document).ready(function(){ 
        $("#orderitems tr:odd").addClass("oddtr");
        $("#orderitems tr:even").addClass("eventr");
        $("#orderitems tr:first").addClass("firsttr");
    }); 
  
  function  changeOrderItemStatus(status,rec_id){ 
             
        if(status==0){
            status=1;  
        }else{
            status=0;  
        }
      
        $.ajax({
            url: '/common/callbacks/orders.php',
            type: 'POST',
            data: {"action":"orderitemstatusupdate","status":status,"rec_id":rec_id},                            
            async: false,
            success: function(response) {                
                if($.trim(response)=="Success"){  
                    $( "#ordertab" ).tabs( "option", "selected", 0 );
                    $( "#ordertab" ).tabs( "option", "selected", 1 );
                    return;                                   
                }
            }
        }); 
  }
</script>

<style>
    
    
    .firsttr{
        background-color: #000000
    } 
    .oddtr{
        background-color: #EFF1F1
    } 
    .eventr{
        background-color: #F8F8F8
    }    
    
</style>

<div id="order_items" class="scCart" style="width: 100%">
    <select class="scProductSelect" id="product_list" name="product_list[]" style="display:none;" multiple="multiple">
    </select>               
    <div class="scCartListHead">
        <table width="100%" id="orderitems"><tbody><tr>
                    <td>&nbsp;&nbsp;Directory</td>
                    <td width="80px">Year</td>
                    <td width="80px">Package</td>
                    <td width="140px">Amount ($)</td>
                    <td valign="top" width="8%" class="BodyText" colspan="2"><b><u>Manage</u></b></td>
                </tr></tbody>

<?php if ($tpldirperitems) {
    $status=false;
    
    ?>
                <?php
                foreach ($tpldirperitems as $key => $tpldirperitem) {
                    if($tpldirperitem["STATUS"]==0){
                        $status=true;
                    }else{
                        $status=false; 
                    }
                    
                    
                    if ($previosperiodid != $tpldirperitem["DIRE_PER_ID"]) {
                        $previosperiodid = $tpldirperitem["DIRE_PER_ID"];
                        $array = array($tpldirperitem["DIRE_PER_ID"]);
                        $tpldirperiod = $tpldirperioddao->selectDirDetail($dbconn, $array);
                        ?>

                        <tr>
                            <td>&nbsp;&nbsp;<?php echo $tpldirperiod[0]["NAME"] ?></td>
                            <td width="80px"><?php echo $tpldirperiod[0]["DIRECTORY_YEAR"] ?></td>
                            <td width="80px"><?php echo $tpldirperitem["PACKAGE"] ?></td>
                            <td width="140px"><?php echo $tpldirperitem["LINE_TOTAL"] ?></td>
                            <td valign=top width=4% class=BodyText></td><td valign=top width=4% class=BodyText><div class="icn"  title="<?php if($status){echo $buttonactivetitle;}else{echo $buttoninactivetitle;} ?>"><a href="#"  onclick="changeOrderItemStatus('<?php echo $tpldirperitem["STATUS"] ?>','<?php echo $tpldirperitem["REC_ID"] ?>');return false"class="ui-silk <?php if($status){echo $buttonactivelogo;}else{echo $buttoninactivelogo;} ?>"><b>Delete</b></a></div></td>
                        </tr>
                     <?php } else { ?>
                        <tr>
                            <td>&nbsp;&nbsp;</td>
                            <td width="80px"></td>
                            <td width="80px"><?php echo $tpldirperitem["PACKAGE"] ?></td>
                            <td width="140px"><?php echo $tpldirperitem["LINE_TOTAL"] ?></td>
                            <td valign=top width=4% class=BodyText></td><td valign=top width=4% class=BodyText><div class="icn"  title="<?php if($status){echo $buttonactivetitle;}else{echo $buttoninactivetitle;} ?>"><a href="#"  onclick="changeOrderItemStatus('<?php echo $tpldirperitem["STATUS"] ?>','<?php echo $tpldirperitem["REC_ID"] ?>');return false"class="ui-silk <?php if($status){echo $buttonactivelogo;}else{echo $buttoninactivelogo;} ?>"><b>Delete</b></a></div></td>
                        </tr>
                    <?php } ?>
                <?php } ?>
            <?php } ?>




        </table>
    </div>
    <!-- Cart List: Selected Products are listed inside div below -->
    <div id="checkoutcart" style="height: 100px"class="scCartList"></div>


    <br/>  


</div>