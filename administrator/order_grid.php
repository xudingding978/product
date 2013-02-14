<?php
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . '/config.php');
//include_once $path_doc_root . "/common/util/DBTransaction.php";
//include_once $path_doc_root . "/common/dao/TplTenantDAO.php";
//
//
//
//$dbtrans = new DBTransaction();
//$dbconn = $dbtrans->getConnection($GLOBALS["ADMIN_DB_NAME"]);
//
////$array = array();
//$tpltenantdao = new TplTenantDAO();
//$tpltenants= $tpltenantdao->select($dbconn, $array);
?>
<script>
    var rec_id=0;
    $(function() {
        $( "#ordertab" ).tabs({
    
            select: function(event, ui){
                
                                if(ui.index==1){                   
                                    $("#ordertab").tabs("url", ui.index, "/dialogs/ui/orderitems.php?rec_id="+rec_id);
                                }              

        
            }

        });
    });

</script>
<table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-repeat: repeat-y;">
    <tr>
        
    </tr>
</table>
<table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-repeat: repeat-y;">
    <tr>
        <td  background="/images/tab_top.gif" style="background-repeat:repeat-x">
            <div class="indent indent_right topspacing bottomspacing" >	
                <div id="ordertab">
                    <ul>
                        <li><a href="/dialogs/ui/order.php">Orders</a> </li>
                        <li><a href="/dialogs/ui/orderitems.php?rec_id=0">Order Items</a> </li>

                    </ul>
                </div>
            </div>
        </td>
    </tr>
</table>

