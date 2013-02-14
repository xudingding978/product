
var nodeSelect ;
var	count =1;
var nodeSelectText;
var treenodes=[];
function openDialog(){
                   
    $("#dialog1" ).dialog({
        title:"Category Product",
        autoOpen: true,
        visibility:true,
        width: 130,
        height: 200,
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

function OnExpandNode(AItems)
{
//		document.getElementById('content_zone').innerHTML += "<br /> -  <b>" + AItems + "</b> was " + AItems;    
//		document.getElementById('content_zone').scrollTop = 9999;			

// This function gets called when the server has returned a result set.  Lets add the nodes 
//- DoAddNodes(AItems);
}
	
function DoDeselectNode(sender,arg)
{			
// There is no functionality at this level
}
	
function OnSelectedNode(s){
//-if (s=="customer")
//-RoxUpdatePortalPanel("/dashboard/customer/customer-panel.php");
      
//-if (s=="domain")
//-RoxUpdatePortalPanel("/dashboard/domain/domain-panel.php");

//-if (s=="email")
//-RoxUpdatePortalPanel("/dashboard/email/email-panel.php");
		
		
//	 	tab.update("showTab.php");
//document.getElementById('tab_zone').src= 'tabs.php';
//		document.getElementById('content_zone').innerHTML += "<br /> -  <b>" + s + "</b> was <b>Selected</b>" ;    
//		document.getElementById('content_zone').scrollTop = 9999;			
}
function DoSelectNode(sender,arg)
{		
       
    koolajax.callback(DoTPLSetActiveProductCategory(arg.NodeId,instanceID));
        
    TPLUpdateProductPanel("/dashboard/supplier-category-product-panel.php");
        
        
// Firstly, lets validate that the session is active
//-if (ValidateRoxSessionActive())
//-  {
//-	// OK, lets get the selected node from the tree
//-	nodeSelect = arg.NodeId;

// Now, lets send it to the server so that the server can synchronize
//-	koolajax.callback(RoxServerSelectTreeNode(nodeSelect),OnSelectedNode); 
//-  }
}	

function DoExpandNode(sender,arg)
{			
// OK, lets get the selected node from the tree
//-nodeSelect = arg.NodeId;		
//-nodeSelectText = treeview.getNode(nodeSelect).getText();
		
// If there is a temporary stub item in the tree, then delete it
//-DoRemoveNode("~" + nodeSelect); 

// Firstly, lets validate that the session is active
//-if (ValidateRoxSessionActive())
//-  {
//-    // OK, now lets check if we need to call the server or not
//-    var childList = treeview.getNode(nodeSelect).getChildIds();
//-    if (childList.length==0) 
//-      {
//-        // OK, lets ask the server for the data expansion list 
//-        treeview.getNode(nodeSelect).setText(nodeSelectText +"<img src='./include/KoolPHPSuite/KoolAjax/koolajax/loading/14.gif'>");
//-        koolajax.callback(RoxServerExpandTreeNode(nodeSelect),OnExpandNode); 
//-      }
//-  }
}
	
function DoCollapseNode(sender,arg)
{			
// There is no functionality at this level
}
        
// OK, lets bind the event handlers to the tree
treeview.registerEvent("OnSelect",DoSelectNode);	
treeview.registerEvent("OnUnselect",DoDeselectNode);
treeview.registerEvent("OnExpand",DoExpandNode);
treeview.registerEvent("OnCollapse",DoCollapseNode);


function DoAddNodes(response) { 
    // response --returns a record delimeter "[node_delimeter]", field delimeter ","
    var myarray = [];
    var nodeid ;
    var nodeNoChildren;
    var nodename;
    var myvar;

    // OK, lets split the result record from the server into an array or records
    myvar = response.split("[node_delimeter]");  	

    // Now, lets process each of the records
    for(var i=0;(i<myvar.length-1);i++){
        var record=myvar[i];
			
        // OK, now lets split the record into an array of fields
        fields= record.split("|");
        nodename= fields[0];
        nodeid=fields[1];
        nodeNoChildren=fields[2];
			
        // OK, lets add the child node to the selected node
        treeview.getNode(nodeSelect).addChildNode(nodeid,nodename,"/images/blank.png");
			
        // OK, now, if the node has children, then lets add a stud node to the tree and collapse it
        if (nodeNoChildren>0) treeview.getNode(nodeid).addChildNode("~"+nodeid,"","/images/blank.png");
        treeview.getNode(nodeid).collapse();
			
        count ++ ;
    }	
    treeview.getNode(nodeSelect).setText(nodeSelectText);
}

function DoRemoveNode(n)
{
    if (n=="" || n==null) 
    {	
        alert("You have to select a node before trying to delete it");
        return; 
    }
    else 
    {	 
        treeview.removeNode(n);
    }		
}

