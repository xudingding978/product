<?php
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];

include_once($path_doc_root . "/common/sessionhandler.php");
include_once($path_doc_root . "/config.php");
include_once "../common/util/DBTransaction.php";
include_once "../common/dao/TplCategoryDAO.php";
include_once "../common/dao/TplDirectoryDAO.php";
include_once "../common/dao/TplSupplierCategoryDAO.php";

$supplierid = $_GET["supplierid"];
error_log("shadow_directory_id>>>>>>>>>>>>>>>>>>>>>:" . $GLOBALS["shadow_directory_id"]);
$dbtrans = new DBTransaction();
$dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
$TplCategoryDAO = new TplCategoryDAO();

$param_arr = array($GLOBALS["shadow_directory_id"]);
$categorylist = $TplCategoryDAO->select($dbconn, $param_arr);


$tplsuppliercategorydao = new TplSupplierCategoryDAO();
$array = array($supplierid);
$tplsuppliercategories = $tplsuppliercategorydao->selectSupplierCategories($dbconn, $array);
?>



<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
    <head>





        <meta http-equiv="content-type" content="text/html; charset=ISO-8859-1">
        <title>Category</title>

       
        <script type="text/javascript" src="/common/ui/js/jquery-ui.min.js"></script>
    
        

        <link href="../common/ui/css/ui.dynatree.css" rel="stylesheet" type="text/css">
        <script src="../common/ui/js/jquery.dynatree.min.js" type="text/javascript"></script>

        <!-- (Irrelevant source removed.) -->


    </head>

    <body >
        <table width="100%" border="1px"><tr><td width="25%" height="400px" valign="top">

                    <div id="tree"  >

                    </div>  

                </td>  <td  width="75%" valign="top">

                    <div id="selectedtree" >

                    </div>


                </td>
            </tr>
        </table>
    <input type="hidden" value="" id="functionname" name="functionname">


    <div id="dialogwrap" style="background-color: #EEEEEE;visibility: hidden"> 
        <div id="category_dialog" style="background-color: #EEEEEE;font-family: Arial Black; font-size: 12px; color: black">  

        </div>
    </div>
    <div id="formdiv" style="background-color: #EEEEEE;visibility: hidden"> 
        <form id="category_list" method="post" name="category_list">
            <input type="hidden" value="" id="action" name="action"> 
            <input type="hidden" value="" id="recid" name="recid">   
            <input type="hidden" value="<?php echo $supplierid; ?>" id="supplierid" name="supplierid">
        </form> 
    </div>
</body>
<html>
    <script type="text/javascript">
        
        var isUpdate=0;       
        function modifyCategory(recid,state)
        {              
            $('#recid').val(recid); 
          
            if(state){            
                $('#action').val("categoryadd"); 
            }else{
                $('#action').val("categoryremove"); 
            }
            $.post( 
            "/common/callbacks/categoryproduct.php",
            $("#category_list").serialize(),
            function(data) {
                if($.trim(data)=='Success'){                
                    alert("Category was modified.");                
                }else{                  
                    alert("Category wasn't modified.");  
                }                
            }
        );
       
        }	
           
        var treeData = [
<?php
$nodearraysize = null;
$previousnodearraysize = null;
$previousnodesarray = null;
$nodesarray = null;
$separator = "";
// error_log("-----------------------------------------------------------------" );   select: true
$nodestatus = "";
foreach ($categorylist as $key => $category) {

//
//    if (in_array($category["NODE_ID"], $tplsuppliercategories)) {
//        $nodestatus = ",select: true";
//    } else {
//        $nodestatus = "";
//    }


    $nodesarray = explode(".", $category["NODE_ID"]);
    $nodearraysize = count($nodesarray);
    if ($nodearraysize == 1) {
        //error_log("Workinggggggggggggggggg----------------------:111" );
        if ($previousnodearraysize != null) {
            for ($counter = 0; $counter < ($previousnodearraysize - $nodearraysize); $counter++) {
                error_log("} ]}");

                echo "} ]}";
            }
        }
        echo $separator . '{title: "' . $category["NAME"] . '", key: "' . $category["NODE_ID"] . '" , recid: "' . $category["REC_ID"] . '"' . $nodestatus . ',selectnumber:0 ,actualtitle:"' . $category["NAME"] . '"';
        error_log($separator . '{title: "' . $category["NAME"] . '", key: "' . $category["NODE_ID"] . '" ');
        $separator = ",";
        //error_log("<li id='" . $category["NODE_ID"] . "'>" . $category["NAME"]);
    } else {
        //error_log("Workinggggggggggggggggg----------------------:ELSE" );
        if ($nodearraysize == $previousnodearraysize) {

            //error_log("<li id='" . $category["NODE_ID"] . "'>" . $category["NAME"]);
            echo '},{title: "' . $category["NAME"] . '", key: "' . $category["NODE_ID"] . '" , recid: "' . $category["REC_ID"] . '" ' . $nodestatus . ',selectnumber:0,actualtitle:"' . $category["NAME"] . '"';
            error_log('},{title: "' . $category["NAME"] . '", key: "' . $category["NODE_ID"] . '" ');
        } else {
            if ($nodearraysize > $previousnodearraysize) {
                //error_log("<ul>");
                // error_log("<li id='" . $category["NODE_ID"] . "'>" . $category["NAME"]);
                echo ",children: [";
                echo '{title: "' . $category["NAME"] . '", key: "' . $category["NODE_ID"] . '" , recid: "' . $category["REC_ID"] . '"' . $nodestatus . ',selectnumber:0,actualtitle:"' . $category["NAME"] . '"';
                error_log(",children: [");
                error_log('{title: "' . $category["NAME"] . '", key: "' . $category["NODE_ID"] . '" ');
            } else {
                //error_log("nodearraysize .SIZE :nodearraysize < previousnodearraysize......................:" . $nodearraysize);
                for ($counter = 0; $counter < ($previousnodearraysize - $nodearraysize); $counter++) {
                    //error_log("</ul>");
                    echo "} ]},";
                    error_log("} ]},");
                }
                //error_log("<li id='" . $category["NODE_ID"] . "'>" . $category["NAME"]);
                echo '{title: "' . $category["NAME"] . '", key: "' . $category["NODE_ID"] . '" , recid: "' . $category["REC_ID"] . '"' . $nodestatus . ',selectnumber:0,actualtitle:"' . $category["NAME"] . '"';
                //echo "} ]},";
                error_log('{title: "' . $category["NAME"] . '", key: "' . $category["NODE_ID"] . '" ');
//                error_log('} ]},');
            }
        }
    }
    $previousnodesarray = $nodesarray;
    $previousnodearraysize = $nodearraysize;
}
for ($counter = 0; $counter < ($previousnodearraysize - 1); $counter++) {
    error_log("}");
    echo "}";
//    if ($counter == ($previousnodearraysize - 2)) {
//        error_log('} ]');
//    } else {
//        error_log('} ],');
//    }
}

error_log('}');
echo "]";
echo "}";
//echo "]";
?>
    ];

           
    var count=0;
    $(function(){
        $("#tree").dynatree({
            checkbox: true,           
            selectMode: 2,           
            children: treeData,
            onSelect: function(select, activenode) {
                //node.
                // Display list of selected nodes
                //alert(node.data.title);
                //node.data.title=node.data.title+" - 1";
                // node.render();
                
                // var parentnode=node.getParent();\
                var node=activenode;
                var tree = $("#tree").dynatree("getTree");
                var selectedtree = $("#selectedtree").dynatree("getTree");
                //var isCreateNode=false;
                if(select){  
                    //alert("1");
                    while(node.data.key!='_1'){
                        count=1+ eval(node.data.selectnumber);
                        node.data.selectnumber= count;                  
                        node.data.title=node.data.actualtitle + " - <b>("+count+")</b>";
                        node.render();
                        node=node.getParent();
                    }
                    node=activenode;
                    var nodearray = node.data.key.split(".")
                    //var selectednode ;
                    //alert("node.data.key:"+node.data.key);
                    var id="";
                    var keynode=null;
                    var keynode=null;
                    var parentkeynode=null;
                    for(var i=0;i<(nodearray.length-1) ;i++){
                        if(id==""){
                            id=nodearray[i];  
                        }else{
                            id=id+"."+nodearray[i];  
                        }                        
                        keynode = tree.getNodeByKey(id);
                        selectedkeynode = selectedtree.getNodeByKey(id);

                        if(selectedkeynode==null){
                            addTreeNode(parentkeynode,keynode.data.actualtitle,keynode.data.key);
                            selectedkeynode = selectedtree.getNodeByKey(id);
                        }                        
                        parentkeynode=selectedkeynode;
                    }
                    if(id==""){
                        id=nodearray[i];                        
                    }else{
                        id=id+"."+nodearray[i];  
                    }
                    keynode = tree.getNodeByKey(id);
                    selectedkeynode = selectedtree.getNodeByKey(id);
                    if(selectedkeynode==null){
                        addTreeNodeObject(parentkeynode,keynode.data.actualtitle,keynode.data.key,null,select,keynode.data.recid);
                    }else{
                        addTreeNodeObject(parentkeynode,keynode.data.actualtitle,keynode.data.key,selectedkeynode,select,keynode.data.recid); 
                        selectedkeynode.render();
                    }
                    if(dbupdateenable){
                        modifyCategory(keynode.data.recid,select);
                    }
                    
                    
                }else{
                    while(node.data.key!='_1'){
                        count=eval(node.data.selectnumber)-1;
                        node.data.selectnumber= count;                  
                        node.data.title=node.data.actualtitle + " - <b>("+count+")</b>";
                        node.render();
                        node=node.getParent();
                    }
                    node=activenode;
                    selectedkeynode = selectedtree.getNodeByKey(node.data.key);
                    if(selectedkeynode.hasChildren() == false){
                        selectedkeynode.remove() ;
                    }else{
                        addTreeNodeObject(parentkeynode,node.data.actualtitle,node.data.key,selectedkeynode,select,keynode.data.recid);
                        selectedkeynode.render();
                        
                    }
                    if(dbupdateenable){
                        modifyCategory(node.data.recid,select);
                    }
                    
                }
                // alert(parentnode.data.title);
                // alert(node);

                //                var selNodes = node.tree.getSelectedNodes();
                //                // convert to title/key array
                //                var selKeys = $.map(selNodes, function(node){
                //                    //alert(node.data.title); 
                //                    return "[" + node.data.key + "]: '" + node.data.title + "'";
                //                    
                //                });
                //$("#echoSelection2").text(selKeys.join(", "));
            },
            onClick: function(node, event) {
                if( node.getEventTargetType(event) == "title" )
                    node.toggleSelect();
            },
            onKeydown: function(node, event) {
                if( event.which == 32 ) {
                    node.toggleSelect();
                    return false;
                }
            },
            // The following options are only required, if we have more than one tree on one page:
            cookieId: "dynatree-Cb2",
            idPrefix: "dynatree-Cb2-"
        });

    });
    
    $(function(){
        // Initialize the tree in the onload event
        $("#selectedtree").dynatree({
            autoCollapse: true,
            onActivate: function(node) {
                alert("You activated " + node);
            }
        });
    });
    /* Add Tree Node*/
    var rootNode;
    function addTreeNode(parentnode,title,key){
        //alert("addTreeNode");
        if(parentnode==null){
            //alert("parentnode==null");
            rootNode = $("#selectedtree").dynatree("getRoot");
        }else{
            //alert("ELSE::::parentnode==null");
            rootNode = parentnode; 
        }
        // Call the DynaTreeNode.addChild() member function and pass options for the new node
        rootNode.addChild({
            key :key,
            title: title                      
        });
     
    };
    function addTreeNodeObject(parentnode,title,key,selectedkeynode,select,recid){
        //alert("addTreeNodeObject");
        // alert("1");
        //        var recid= selectedkeynode.data.recid;
      
        if(selectedkeynode==null){           
            if(parentnode==null){
                rootNode = $("#selectedtree").dynatree("getRoot");
            }else{
                rootNode = parentnode; 
            }        
            rootNode.addChild({
                key :key,
                title: '<button onclick=openDialog("'+recid+'") >'+title+'</button>',
                icon: "true"
            });
            //showDiv(divid); 
        }else{
            if(select){
                selectedkeynode.data.title= '<button onclick=openDialog("'+recid+'") >'+title+'</button>';
                selectedkeynode.data.key= key;
                selectedkeynode.data.icon= "true";
                //showDiv(divid);
            }else{
                selectedkeynode.data.title= title;
                selectedkeynode.data.key= key;
                selectedkeynode.data.icon= "true";                                        
                //var child = selectedkeynode.childList;
                //alert(child.length);
            }
        }                    
                            
    };
    function showDiv(divID){                               

        if ( $("#"+divID+"").is(':visible')){
            $("#"+divID+"").hide(); 
        }else{
            $("#"+divID+"").show();
        }
    }

    function openDialog(recid){                               
       
        $("#category_dialog").dialog({
            title:"Supplier Category Assesement",
            modal: true, 
            resizable: false, 
            draggable: true,
            width: '840', 
            height: '493'
        }).load("/dialogs/ui/supplier-category.php?supplierid=<?PHP echo $supplierid; ?>&categoryid="+recid).fadeIn("fast");;
    }
   

    $(function(){           
        $("#selectedtree").dynatree({
            onActivate: function(node){                    
            },
            onDeactivate: function(node) {
                //$("#echoSelected").text("-");
            }
        });
          

    });
    var dbupdateenable=false;
    $(document).ready(function() {
        var tree = $("#tree").dynatree("getTree"); 
       
<?php foreach ($tplsuppliercategories as $key => $tplsuppliercategorienodeid) { ?>  
                          
            tree.getNodeByKey('<?php echo $tplsuppliercategorienodeid; ?>').select(true);   
<?php } ?> 
        dbupdateenable=true;
    });
    </script>


