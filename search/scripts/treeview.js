	var nodeSelect ;
	var	count ;
	var nodeSelectText;
	count = 1;

	function onDone(s)
	{
		addNodes(s);
		treeview.getNode(nodeSelect).setText(nodeSelectText);
		document.getElementById('content_zone').innerHTML += "<br /> - added Nodes " ;      
		document.getElementById('content_zone').scrollTop = 9999;

	}
	
    function nodeSelect_handle(sender,arg)
	{			
		nodeSelect= arg.NodeId;		
		document.getElementById('content_zone').innerHTML += "<br />- Node <b>" + arg.NodeId + "</b> was <b>Selected</b>" ;
		document.getElementById('content_zone').scrollTop = 9999;
	}	
	function nodeUnSelect_handle(sender,arg)
	{			
		document.getElementById('content_zone').innerHTML += "<br /> - Node <b>" + arg.NodeId + "</b> was <b>UnSelected</b>" ;    
		document.getElementById('content_zone').scrollTop = 9999;			
	}
	
	function nodeExpand_handle(sender,arg)
	{			
		nodeSelect= arg.NodeId;		

		nodeSelectText = treeview.getNode(nodeSelect).getText();
		removeNode("~" + nodeSelect);  // remove temporary stub (this stub is to allow node 

        var childList = treeview.getNode(nodeSelect).getChildIds();
		if (childList.length==0) {
			treeview.getNode(nodeSelect).setText(nodeSelectText +"<img src='KoolAjax/koolajax/loading/14.gif'>");
			 koolajax.callback(get_subcategories(nodeSelect),onDone); 
		}	 
		document.getElementById('content_zone').innerHTML += "<br /> - Node <b>" + arg.NodeId + "</b> was <b>Expanded</b>" ;         
		document.getElementById('content_zone').scrollTop = 9999;
	}
	function nodeCollapse_handle(sender,arg)
	{			
		document.getElementById('content_zone').innerHTML += "<br /> - Node <b>" + arg.NodeId + "</b> was <b>Collapsed</b>" ;      
		document.getElementById('content_zone').scrollTop = 9999;
	}
	//Register event handle for treeview
	treeview.registerEvent("OnSelect",nodeSelect_handle);	
	treeview.registerEvent("OnUnselect",nodeUnSelect_handle);
	treeview.registerEvent("OnExpand",nodeExpand_handle);
	treeview.registerEvent("OnCollapse",nodeCollapse_handle);


	function addNodes(response) { 
		// response --returns a record delimeter ".", field delimeter ","
		var myarray = [];
		var nodeid ;
		var nodeNoChildren;
		var nodename;
		var myvar;
		myvar = response.split(".");  	// myvar becomes an array of records 

		for(var i=0;(i<myvar.length-1);i++){
			var record=myvar[i];
			
			fields= record.split("|");  // split record to fields  - field delimeter "|"
			nodeid=fields[1];
			var nodeNoChildren=fields[2];
			nodename= record;  			// display category with cat id
			
			// if has add category_id, category name
			treeview.getNode(nodeSelect).addChildNode(nodeid,nodename,"");
			
			// add tempory child "_0"  - to be able to expand the node --i.e., display the [+]
			if (nodeNoChildren>0) treeview.getNode(nodeid).addChildNode("~"+nodeid,"","");

			treeview.getNode(nodeid).collapse();  // after add a child, the node is expanded.  so we need to collapse it.
			
			count ++ ;
		}	
	}

	function removeNode(n)
	{
		if (n=="" || n==null) 
		{	
			alert("You have to select a Node to add");
			return; 
		}
		else 
		{	 
			treeview.removeNode(n);
		}		
	}


