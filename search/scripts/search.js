/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var nodeSelect, tmpNode ;
var     count =1;
var nodeSelectText;
var treenodes=[];
        
document.getElementById('content_target').src = 'search/home.php';
        
if (getParameterByName("drawentry") === "rbs2011"){
    document.getElementById('content_target').src = 'content/subscribe/drawentry.html';
}
        
function getParameterByName(name){
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if(results === null)
        return "";
    else
        return decodeURIComponent(results[1].replace(/\+/g, " "));
}       
        
function loadPHPPage(page){
    document.getElementById('content_target').src = page;
}
        
function loadPage(page){
    document.getElementById('content_target').src = 'content/'+page+'.html';
}

function loadContent(){
    document.getElementById('content_target').src = 'search/search.php?search_key='+document.getElementById('search_key').value+"&p=1";
}
function onDone(s)
{
    addNodes(s);
}
        
function nodeSelect_handle(sender,arg)
{                       
        
    nodeSelect= arg.NodeId;
    if (nodeSelect === "treeview.root")              
        document.getElementById('content_target').src = 'search/home.php';
    else
    {
        nodeSelectText = treeview.getNode(nodeSelect).getText();
        if (nodeSelectText === "<b><u>more</u></b>" || nodeSelectText === "<B><U>more</U></B>")
        {
                                
            treeview.getNode(nodeSelect).setText(nodeSelectText +"<img src='KoolAjax/koolajax/loading/14.gif'>");
            var parentid = treeview.getNode(nodeSelect).getParentId();
            var start = 50;
            if (arg.NodeId > 999999); // use the node key to determine the start key
            {
                start = arg.NodeId - 999999;
            }
            tmpNode = nodeSelect;
            var treenode = treeview.getNode(parentid);
            var isBev = 0;
            /*
                                if (isBeverages(treeview.getNode(parentid)) == true)
                                {
                                        isBev = 1;
                                }
                                */
            treenode.select();
            koolajax.callback(CB_getSubcategories(isBev, parentid,start,50),onDone);
        }
        else
        {
            if (!tmpNode) //if tmpNode exist means we clicked the temp root "more", was remove after adding
            {
                /* added by archer - filter a node that has final value and connect to view.php */
                var callbackresult=koolajax.callback(CB_hasFinalLeaf(nodeSelect));
                // as help from the callback, if callback return true then connect the view else no connection
                if (callbackresult === "true")
                {
                    // check if Beverages then make a special list to make the link like in the tree
                    var isBeverages = false;
                    var parentid = treeview.getNode(nodeSelect).getParentId();
                    var node = treeview.getNode(parentid);
                    while (node.getText() !== "treeview.root") //loop until root
                    {
                        if (node.getText() === "") break;
                        if (node.getText() === "Beverages") //this is pretty tied with the name
                        {
                            isBeverages = true;
                            document.getElementById('content_target').src = 'search/view.php?key=c,'+nodeSelect+',tree&cat=bevp';
                            break;
                        }
                        parentid = node.getParentId();
                        node = treeview.getNode(parentid);
                    }
                    if (!isBeverages)
                        document.getElementById('content_target').src = 'search/view.php?key=c,'+nodeSelect+',tree';
                }
                else
                {
                    var isLeaf=koolajax.callback(CB_isFinalLeaf(nodeSelect));
                    if (isLeaf === "true")
                    {
                        //alert ("ID = "+nodeSelect);
                        // additional checking for Beverages
                        var isBeverages = false;
                        var parentid = treeview.getNode(nodeSelect).getParentId();
                        var node = treeview.getNode(parentid);
                        while (node.getText() !== "treeview.root") //loop until root
                        {
                            if (node.getText() === "") break;
                            if (node.getText() === "Beverages") //this is pretty tied with the name
                            {
                                isBeverages = true;
                                document.getElementById('content_target').src = 'search/view.php?key=c,'+nodeSelect+',tree&cat=bevc';
                                break;
                            }
                            parentid = node.getParentId();
                            node = treeview.getNode(parentid);
                        }
                        if (!isBeverages)
                            document.getElementById('content_target').src = 'search/search.php?search_key='+nodeSelect+'&ref=tree';
                    //document.getElementById('content_target').src = 'view.php?key=c,'+nodeSelect+',search';
                    }
                }
            }
        }
    }
}       
function nodeUnSelect_handle(sender,arg)
{                       
}
        
function nodeExpand_handle(sender,arg)
{                       
    nodeSelect= arg.NodeId;         

    nodeSelectText = treeview.getNode(nodeSelect).getText();
    removeNode("~" + nodeSelect);  // remove temporary stub (this stub is to allow node 

    var childList = treeview.getNode(nodeSelect).getChildIds();
    if (childList.length===0) 
    {
        // we have special treatment for beverages so we need to filter
        var isBev = 0; 
        if (isBeverages(treeview.getNode(nodeSelect)) === true)
        {
            isBev = 1;
        }
        treeview.getNode(nodeSelect).setText(nodeSelectText +"<img src='KoolAjax/koolajax/loading/14.gif'>");
        koolajax.callback(CB_getSubcategories(isBev, nodeSelect,0,50),onDone); 
    }
}

function isBeverages(node)
{
    var isBeverages = false;
                
    while (node.getText() !== "treeview.root") //loop until root
    {
        if (node.getText() === "") break;
        if (node.getText() === "Beverages") //this is pretty tied with the name
        {
            isBeverages = true;
            break;
        }
        parentid = node.getParentId();
        node = treeview.getNode(parentid);
    }
    return isBeverages;
}
        
function nodeCollapse_handle(sender,arg)
{                       
}
//Register event handle for treeview
treeview.registerEvent("OnSelect",nodeSelect_handle);
treeview.registerEvent("OnUnselect",nodeUnSelect_handle);
treeview.registerEvent("OnExpand",nodeExpand_handle);
treeview.registerEvent("OnCollapse",nodeCollapse_handle);


function addNodes(response) { 
    // response --returns a record delimeter ".", field delimeter ","
    var myarray = [];
    var nodeid;
    var nodeNoChildren;
    var nodename;
    var myvar;
    myvar = response.split("::");   // myvar becomes an array of records 

    for(var i=0;(i<myvar.length-1);i++){
        var record=myvar[i];
                        
        fields= record.split("|");  // split record to fields  - field delimeter "|"  name,id,noChildren
        nodeid=fields[1];
        var nodeNoChildren=fields[2];
        nodename= fields[0];                    // display category name
        // if has add category_id, category name
        treeview.getNode(nodeSelect).addChildNode(nodeid,nodename,"images/blank.png");
        if (tmpNode) {
            removeNode(tmpNode);
            tmpNode="";
        }
        // add tempory child "_0"  - to be able to expand the node --i.e., display the [+]
        if (nodeNoChildren>0) treeview.getNode(nodeid).addChildNode("~"+nodeid,"","images/blank.png");

        treeview.getNode(nodeid).collapse();  // after add a child, the node is expanded.  so we need to collapse it.
                        
        count ++ ;
    }       
    treeview.getNode(nodeSelect).setText(nodeSelectText);
}

function removeNode(n)
{
    if (n==="" || n===null) 
    {       
        alert("You have to select a Node to add");
        return; 
    }
    else 
    {        
        treeview.removeNode(n);
    }               
}
        
/* GOOGLE ANALYTICS CODE*/
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-4213918-20']);
_gaq.push(['_trackPageview']);

(function() 
{
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' === document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();
document.getElementById('search_key').focus();
