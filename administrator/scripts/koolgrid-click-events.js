
function Handle_OnRowMouseOver(sender, args) {
    var _row = args["Row"];
    var _event = args["Event"];
    $("input#nam").val(_row.getDataItem()["NAME"]);
    $("input#client_rec_id").val(_row.getDataItem()["CLIENT_REC_ID"]);
    $("input#sr_rec_id").val(_row.getDataItem()["SHADOW_ROOT_REC_ID"]);
    $("input#usr").val(_row.getDataItem()["USERNAME"]);
    $("input#pwd").val(_row.getDataItem()["PASSWORD"]);
    var _rowResult = document.getElementById("rowResult");
    rowResult.innerHTML = "Client selected is: " + _row.getDataItem()["CLIENT_REC_ID"];
}

function Handle_OnRowClick(sender, args) {
    var _row = args["Row"];
    var _event = args["Event"];
    $("input#sr_rec_id").val(_row.getDataItem()["SHADOW_ROOT_REC_ID"]);
    $("input#client_rec_id").val(_row.getDataItem()["CLIENT_REC_ID"]);
    $("input#nam").val(_row.getDataItem()["NAME"]);
    $("input#usr").val(_row.getDataItem()["USERNAME"]);
    $("input#pwd").val(_row.getDataItem()["PASSWORD"]);
}
function Handle_OnRowDoubleClick(sender, args) {
    var _row = args["Row"];
    var _event = args["Event"];
    $("input#sr_rec_id").val(_row.getDataItem()["SHADOW_ROOT_REC_ID"]);
    $("input#client_rec_id").val(_row.getDataItem()["CLIENT_REC_ID"]);
    $("input#nam").val(_row.getDataItem()["NAME"]);
    $("input#usr").val(_row.getDataItem()["USERNAME"]);
    $("input#pwd").val(_row.getDataItem()["PASSWORD"]);
    //if ($("input#usr").val(_row.getDataItem()["USERNAME"]) != "") {
    if ((_row.getDataItem()["USERNAME"]) != "") {
           
        var callbackresult = koolajax.callback(DoTPLLogin($("input#usr").val(), $("input#pwd").val()));
        if (callbackresult == "SUCCESS") {            
            new_window = window.open("/dashboard/");      
        }
        return false;
    }
}
