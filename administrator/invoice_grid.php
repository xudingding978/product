<?php
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . '/config.php');
include_once($path_doc_root . '/common/ui/datagrid/datagrid.php');
include_once $path_doc_root . "/common/dao/TplInvoicesDAO.php";
?>

<link rel="stylesheet" type="text/css" href="/common/ui/css/silk/silk-sprite.css"/>

<script type="text/javascript"> 
    //    $(document).ready(function(){ 
    //        $("#ordersgrid tr:odd").addClass("oddtr");
    //        $("#ordersgrid tr:even").addClass("eventr");
    //        $("#ordersgrid tr:first").addClass("firsttr");
    //    });
    function  orderEdit(recid){       
       
        this.rec_id=recid; 
        $( "#ordertab" ).tabs( "option", "selected", 1 );        
        
    }
    function  changeOrderStatus(status,rec_id){ 
        
        if(status==0){
            status=1;  
        }else{
            status=0;  
        }
        
        $.ajax({
            url: '/common/callbacks/orders.php',
            type: 'POST',
            data: {"action":"orderstatusupdate","status":status,"rec_id":rec_id},                            
            async: false,
            success: function(response) {
                //alert(response);
                if($.trim(response)=="Success"){  
                    refreshCurrentGrid();
//                    $( "#ordertab" ).tabs( "option", "selected", 1 );
//                    $( "#ordertab" ).tabs( "option", "selected", 0 );
                    return;                                   
                }
            }
        }); 
       
               
        
    }
    function onclickhandler(){
        //alert("");
    }   
    function doubleClickhandler(){
        //alert("Ok");
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
<body>
    <?php
    $array = array();

    $end_content = "orderentry_end";
    $datagrid = new datagrid();
    $tplinvoicedao = new TplInvoicesDAO();
    $datagrid->setDAOClass($tplinvoicedao);
    $datagrid->setDAOMethod("selectForGrid");
    $datagrid->setDAOName("TplInvoicesDAO");
    $datagrid->setDAOCountMethod("countForGrid");
    $datagrid->setItemPerPage(5);
    $datagrid->setDAOParaArr($array);
    $datagrid->setDBName($GLOBALS["DB_NAME"]);
    $datagrid->setOnClickEvent("onclickhandler");
    $datagrid->setDoubleClickEvent("doubleClickhandler");
    $datagrid->addColumnHeader("Invoice Number");
    $datagrid->addColumnHeader("Order Number");
    $datagrid->addColumnHeader("Amount");
    $datagrid->addColumnHeader("Description");
    $datagrid->addColumnHeader("Due Date");
    /* Custom Column    */
//    $datagrid->setEndCustomColumn("Manage");
//    $datagrid->setEndCustomColumnSpan(2);
//    $datagrid->setEndCustomColumnContent($end_content);

    $datagrid->render();
    ?>
</body>