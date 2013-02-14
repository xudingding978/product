/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


$(function() {
    $( "#directory_accordion" ).accordion({
        autoHeight:  false,
        active: 0
    });
    $( "#subscription_tabs").tabs();
    $( "#directorymanagement_tabs").tabs();
    $("#btnSaveDirectory").button();
    $("#addNewPeriod").button();
    $("#btnNewDir").button();
    $("#directoryperiodstart").datepicker();
    $("#directoryperiodend").datepicker();
    $("#adddirectoryperiodstart").datepicker();
    $("#adddirectoryperiodend").datepicker();
                                                
    $("#addNewPeriod").click(function() {
        $("#directory_period_panel").toggleClass("show_directory_period_panel");
        return false;
    });
                                                
                                                
    $("#btnNewDir").click(function(){
        $("#directory_accordion").accordion("option", "active",1);
    });
    $(".editDir").click(function(){
        $("#directory_accordion").accordion("option", "active",1);                    
    });
    $("#btnSaveDirectory").click(function(){
                                                     
        var dir_default=  $("input#dir_default:checked").length;
        var dir_pac_default=  $("input#dir_pac_default:checked").val();
                                                    
                                                    
        $("input#directoryperiodstart").val();
        var startDate=$("input#directoryperiodstart").val();
        var endDate=$("input#directoryperiodend").val();
                                                    
                                                    
        if(startDate==""||endDate==""||$("input#directoryname").val()=="" ||$("select#directoryyear").val()=="" ||$("input#directoryperiod").val()=="" ){
            showMessage("error","Please complete all the mandatory fields."); 
            return;
        }
        if(!checkdate(startDate)){
            return;
        }
        if(!checkdate(endDate)){
            return;
        }
        if(!dateComparisonToFrom(startDate,endDate)){
            return;  
        }              
                                                   
        var list = startDate.split('/');
        startDate=list[2]+'-'+list[0]+'-'+list[1];
        list = endDate.split('/');
        endDate=list[2]+'-'+list[0]+'-'+list[1];
                                                 
        var jsonObj = '{"directoryname":"' + $("input#directoryname").val() + '", "prodbase":"' + $("select#prodbase").val() + '", "directoryyear":"' + $("select#directoryyear").val() +
        '", "directoryperiodname":"' + $("input#directoryperiodname").val() + '", "directoryperiodcode":"' + $("input#directoryperiodcode").val() +
        '", "directoryperiod":"' + $("input#directoryperiod").val() + '", "directoryperiodtype":"' + $("select#directoryperiodtype").val() +    
        '", "directoryperiodstart":"' + startDate + '", "directoryperiodend":"' + endDate +
        '", "std_listingdesc":"' + $("input#std_listingdesc").val() + '", "std_costexclgst":"' + $("input#std_costexclgst").val() +
        '", "std_gstrate":"' + $("input#std_gstrate").val() + '", "std_maxbranch":"' + $("input#std_maxbranch").val() +
        '", "std_maxpersonnel":"' + $("input#std_maxpersonnel").val() + '", "std_maxbrand":"' + $("input#std_maxbrand").val() +
        '", "std_maxprodcat":"' + $("input#std_maxprodcat").val() + '", "adv_listingdesc":"' + $("input#adv_listingdesc").val() +
        '", "adv_costexclgst":"' + $("input#adv_costexclgst").val() + '", "adv_gstrate":"' + $("input#adv_gstrate").val() +
        '", "adv_maxbranch":"' + $("input#adv_maxbranch").val() + '", "adv_maxpersonnel":"' + $("input#adv_maxpersonnel").val() +
        '", "adv_maxbrand":"' + $("input#adv_maxbrand").val() + '", "adv_maxprodcat":"' + $("input#adv_maxprodcat").val() +
        '", "prem_listingdesc":"' + $("input#prem_listingdesc").val() + '", "prem_costexclgst":"' + $("input#prem_costexclgst").val() +
        '", "prem_gstrate":"' + $("input#prem_gstrate").val() + '", "prem_maxbranch":"' + $("input#prem_maxbranch").val() +
        '", "prem_maxpersonnel":"' + $("input#prem_maxpersonnel").val() + '", "prem_maxbrand":"' + $("input#prem_maxbrand").val() +
        '", "prem_maxprodcat":"' + $("input#prem_maxprodcat").val() + '", "addoffer_name":"' + $("input#addoffer_name").val() +
        '", "addoffer_description":"' + $("input#addoffer_description").val() + '", "addoffer_code":"' + $("input#addoffer_code").val() +
        '", "addoffer_costexclgst":"' + $("input#addoffer_costexclgst").val() + '", "addoffer_gstrate":"' + $("input#addoffer_gstrate").val() + 
        '", "directorydesc":"' + $("input#directorydesc").val() +'", "dir_default":"' + dir_default +'", "dir_pac_default":"' + dir_pac_default +'"}';
        var result = koolajax.callback(CB_AddDirectory(jsonObj));
        if (result) {                                             
            showMessage("success","Your New Directory Has Been Successfully Created. Well Done :)");
            doReloadDirectoryList() ;
            $(this).dialog("destroy"); //close
        }
        else {
            alert("failed to add");
        }
    });
});
                                                                                                                                                                                                                                                     
                                          
                                                                                                                    
function Handle_OnRowSelect(sender, args){
    var _row = args["Row"];
//onSelect load the selected Directory into the editing form including  
// alert("editing row");                                                                
}
                                                    
function Handle_OnRowDoubleClick(sender, args){
    var _row = args["Row"];
    getDirectory(_row.getDataItem()["REC_ID"]);
}
                                                    
function getDirectory(dir_rec_id){
    // retrieve JSON object as the result from the callback
    koolajax.callback(CB_GetDirectoryByDirRecID(dir_rec_id),editDirectory);
}
                                                    
function editDirectory(results){
    $("#directory_accordion").accordion("option", "active",1);
    //assign the JSON object values into the form fields
    $('#directoryname').val(results[0]["NAME"]);
    $('#directorydesc').val(results[0]["DIRECTORY_DESC"]);
    $("#directoryperiodname").val(results[0]["DIRECTORY_PERIOD_NAME"]);
    $("#directoryperiodcode").val(results[0]["DIRECTORY_PERIOD_CODE"]);
    $("#directoryperiodstart").val(results[0]["DIRECTORY_PERIOD_START"]);
    $("#directoryperiodend").val(results[0]["DIRECTORY_PERIOD_END"]);
    $('input[name="dir_default"][value="1"]').attr("checked", true);
}
                                                    
                                                    
function deleteDirectory(dir_rec_id){
    alert("Are you sure you want to delete the directory... " + dir_rec_id);
}
                                            
var digitsOnly = /[1234567890]/g;
var integerOnly = /[0-9\.]/g;
var alphaOnly = /[A-Z]/g;

function restrictCharacters(myfield, e, restrictionType) {
    if (!e) var e = window.event
    if (e.keyCode) code = e.keyCode;
    else if (e.which) code = e.which;
    var character = String.fromCharCode(code);

    // if they pressed esc... remove focus from field...
    if (code==27) {
        this.blur();
        return false;
    }
                                                                                                                                                                                                                                                	
    // ignore if they are press other keys
    // strange because code: 39 is the down key AND ' key...
    // and DEL also equals .
                                                                                                                                                                                                                                                        
    //if (!e.ctrlKey && code!=9 && code!=8 && code!=36 && code!=37 && code!=38 && (code!=39 || (code==39 && character=="'")) && code!=40) {
    if (!e.ctrlKey && code!=9 && code!=8 && code!=36 && code!=37 && code!=38 && code!=39  && code!=40) {
        if (character.match(restrictionType)) {
            return true;
        } else {
            return false;
        }
                                                                                                                                                                                                                                                		
    }
}
                       