// directory selector and directory period selector module
var result_periods;
var directory_rec_id;

function doLoadDirectory(control_id) {
    // get all directories and populate options with default selected
    var result_directories = koolajax.callback(CB_GetDirectories($("#"+ control_id + "").val(),""));
    $("#"+ control_id + "").empty();
    $.each(result_directories, function(i, val){
        $("#"+ control_id + "").append('<option value='+val.REC_ID+' title="' + val.DIRECTORY_DESC + '">'+val.NAME+'</option>');
    });
    $("select#" + control_id + " option[value=" + user[0].DIR_REC_ID + "]").attr("selected", "selected");
    $("#selDirDiv").html($("#"+ control_id + " option:selected").text());
}

function doLoadPeriods(_control_id){
    //get all periods for selected default directory
    var result_periods = koolajax.callback(CB_GetAvailableDirPeriods(user[0].DIR_REC_ID));
    $("#"+ _control_id + "").empty();
    $.each(result_periods, function(key, val){
        var default_period = "";
        if(val.IS_DEFAULT == 1){
            default_period = '*'
        };
        $("#"+ _control_id + "").append('<option value='+val.REC_ID+'>' + $.datepicker.formatDate('dd MM yy', new Date(val.START_DATE))  + ' to ' + $.datepicker.formatDate('dd MM yy', new Date(val.END_DATE)) + default_period +'</option>');
    });
    $("select#" + _control_id + " option[value=" + user[0].DIRECTORY_PERIOD_REC_ID + "]").attr("selected", "selected");
    $("#selPeriodDiv").html($("#"+ _control_id + " option:selected").text());
}

function reLoadPeriods(_control_id, _directory_rec_id) {
    //get periods available for directory and build option list into targeted control 
    var result_periods = koolajax.callback(CB_GetAvailableDirPeriods(_directory_rec_id));
    $("#"+ _control_id + "").empty();
    $.each(result_periods, function(key, val){
        var default_period = "";
        if(val.IS_DEFAULT == 1){
            default_period = '*'
        };
        $("#"+ _control_id + "").append('<option value='+val.REC_ID+'>' + $.datepicker.formatDate('dd MM yy', new Date(val.START_DATE))  + ' to ' + $.datepicker.formatDate('dd MM yy', new Date(val.END_DATE)) + default_period +'</option>');
    });
}

function updateContent(_directory_period_rec_id){
    //populate the status and summary info for the period
    reloadPeriodSummaryContent(_directory_period_rec_id);
    reloadPeriodStatsContent(_directory_period_rec_id);
}

function updateHeader(){
    //update the selected directory div in the header
    $("#selDirDiv").html($("#directorySelector option:selected").text());
    $("#selPeriodDiv").html($("#periodSelector option:selected").text());
}

function selectPeriodDefault(control_id, result){
    var default_period_rec_id = "";
    $.each(result, function(key, val){
        if(val.IS_DEFAULT == 1){
            default_period_rec_id = val.REC_ID;
            $("select#" + control_id + " option[value=" + val.REC_ID + "]").attr("selected", "selected");
        }
    });
    return default_period_rec_id;
}

function reloadPeriodSummaryContent(directory_period_rec_id){
    var results_period = koolajax.callback(CB_GetDirPeriodSummary(directory_period_rec_id));
    if(!$.isEmptyObject(results_period)){
        $("#directory_year").html(results_period[0]['DIRECTORY_YEAR']);
        $("#directory_period").html(results_period[0]['DIRECTORY_PERIOD'] + ' ' + results_period[0]['DIRECTORY_PERIOD_TYPE']);
        $("#directory_period_name").html(results_period[0]['DIRECTORY_PERIOD_NAME']);
    } 
}

function reloadPeriodStatsContent(directory_period_rec_id) {
    var results_stats = koolajax.callback(CB_GetDirSummaryInfo(directory_period_rec_id));
    if (!$.isEmptyObject(results_stats)) {
        if (!$.isEmptyObject(results_stats['OPEN'])) {
            $("#cnt_open").html(results_stats['OPEN']['NUM']);
            $("#rev_open").html(formatCurrency(results_stats['OPEN']['TOTALREVENUE']));
        } else {
            $("#cnt_open").html('0');
            $("#rev_open").html('$0.00');
        }
        if (!$.isEmptyObject(results_stats['CLOSED'])) {
            $("#cnt_closed").html(results_stats['CLOSED']['NUM']);
            $("#rev_closed").html(formatCurrency(results_stats['CLOSED']['TOTALREVENUE']));
        } else {
            $("#cnt_closed").html('0');
            $("#rev_closed").html('$0.00');
        }   
        if (!$.isEmptyObject(results_stats['MERGED'])) {
            $("#cnt_merged").html(results_stats['MERGED']['NUM']);
            $("#rev_merged").html(formatCurrency(results_stats['MERGED']['TOTALREVENUE'])); 
        } else {
            $("#cnt_merged").html('0');
            $("#rev_merged").html('$0.00');
        }
    } 
    $("#selPeriodDiv").html($("#periodSelector option:selected").text());
}

function updateDefaultDirectoryPeriod(_directory_period_rec_id){
    //this callback stores the currently selected directory period id in the admin user table
    koolajax.callback(CB_SaveDirectoryDefault(_directory_period_rec_id, user[0].REC_ID),onDone);
    //update the localStorage object on the browser
    window.user[0].DIRECTORY_PERIOD_REC_ID = _directory_period_rec_id;
    localStorage.user_data = JSON.stringify(user);
    console.log(localStorage.user_data);
    function onDone(result){
        if(result == 'SUCCESS'){
            showMessage("success","Your Default Directory Period Has Been Successfully Changed");
        }
    }
}

function showLocalStorageContents(){
    var output = "LOCALSTORAGE DATA:\n------------------------------------\n";
    if (localStorage) {
        if (localStorage.length) {
            for (var i = 0; i < localStorage.length; i++) {
                output += localStorage.key(i) + ': ' + localStorage.getItem(localStorage.key(i)) + '\n';
            }
        } else {
            output += 'There is no data stored for this domain.';
        }
    } else {
        output += 'Your browser does not support local storage.'
    }
    console.log(output);   
}