treeview.registerEvent("OnSelect", DoSelectNode);
treeview.registerEvent("OnUnselect", DoDeselectNode);
treeview.registerEvent("OnExpand", DoExpandNode);
treeview.registerEvent("OnCollapse", DoCollapseNode);

function DoSelectNode(sender, arg) {
	//if (koolajax.callback(CB_CheckTimeout()) == true) { ShowTimeoutMessage(); return; }
	koolajax.callback(CB_GetSelectedProductCategory($("#action").val(), arg.NodeId), UpdateFormValues);
}

function UpdateFormValues(s) {
	$("#category_path").text(s["PATH"]);
	$("input#recid").val(s["REC_ID"]);
	if ($("#action").val() != 1 /*ADD new category*/) {
		$("input#catname").val(s["NAME"]);
		$("input#prntorder").val(s["PRINT_ORDER"]);
		$("input#prntimgloc").val(s["PRINT_IMAGE_LOCATION"]);
		$("input#webimgloc").val(s["WEB_IMAGE_LOCATION"]);
		$("input#code").val(s["CODE"]);
		$("textarea#textinfo").val(s["TEXT"]);
	}
}

function DoDeselectNode(sender, arg) {
}

function DoExpandNode(sender, arg) {
}

function DoCollapseNode(sender, arg) {
}

function reloadYear(theform)
{
	alert("reload year");
}