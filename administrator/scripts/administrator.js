var user = JSON.parse(localStorage.user_data);
console.log('user object');
console.log(user);
// user[0]['REC_ID']
// user[0]['SESSIONID']
// user[0]['USERNAME']
// user[0]['ROLE_ID']
// user[0]['FIRSTNAME'] + ' ' + user[0]['LASTNAME']
// user[0]['FRONTGRID_ID']
// user[0]['DIR_REC_ID']
// user[0]['NAME']
// user[0]['DIRECTORY_PERIOD_REC_ID']



var showStyle = "";
var roles = {
    SUPERADMIN: 1,
    ADMIN: 2
};
var modules = {
    ACCOUNT: 0,
    CLIENT: 1,
    CATEGORY: 2
};
var category = {
    BRAND: 1,
    PRODUCT: 2,
    SUPPLIER: 3,
    SHAWS_SPECIAL: 4
};
var BUTTON_DISABLE = 0;
jQuery(document).ready(function($) {
    pageStarter();
});
function pageStarter() {
    // administration forms jQuery UI skinning 

    // tabs skinning
    $(".client-options-panel #tab1s").tabs();
    $(".other-options-panel #tab2s").tabs();
    $(".category-options-panel #tab3s").tabs();
    $(".member-options-panel #tab4s").tabs();
    $(".directory-status-panel #tab5s").tabs();
    $(".controlpanel1-options-panel #tab6s").tabs();
    $(".controlpanel2-options-panel #tab7s").tabs();
    $(".controlpanel3-options-panel #tab8s").tabs();
    // buttons skinning  
    $("#exportToPDF").button();
    $("#setdefault").button();
    $("button", ".client-options-panel #tab1s").button();
    $("button", ".category-options-panel #tab3s").button();
    $("button", ".member-options-panel #tab4s").button();
    $("button", ".directory-status-panel #tab-content-directory-options-2").button();
    $("button", ".directory-status-panel #tab-content-directory-reports-3").button();
    $("button", ".controlpanel1-options-panel #tab6s").button();
    $("button", ".controlpanel2-options-panel #tab7s").button();
    $("button", ".controlpanel3-options-panel #tab8s").button();
    // dbprocs form - directory business procedures.
    $(".export-options-panel #tabs").tabs();
    $("button", ".export-options-panel #tabs").button();
    $(".export-brand-panel #brandtabs").tabs();
    $(".export-supplier-panel #suppliertabs").tabs();
    $(".export-product-panel #producttabs").tabs();
    $(".export-shaws-panel #shawstabs").tabs();
    $("#progressbar1").show();
    $("#progressbar2").show();
    //load all Directories into directory selector when page first loads, pass in control Id to target 
    doLoadDirectory("directorySelector");
    //load all the periods for the default directory and select default period
    //reLoadPeriods("periodSelector", user[0].DIR_REC_ID);
    reLoadPeriods("periodSelector", 4);
    //load the staus content areas
    updateContent(user[0].DIRECTORY_PERIOD_REC_ID);
    //boot strap any options based on intialised page
    bootStrapper();
}

function bootStrapper() {
//    if($("#directorySelector").val()==0){
//        $(":button").attr("disabled",true);
//        $("#directory").removeAttr("disabled");
//        //alert('No default directory has been created. Please create a New Directory from the Directory Options Tab.');
//        BUTTON_DISABLE=1;
//    }
}

function ChangePassword() {
    if (koolajax.callback(CB_CheckTimeout(), onDone) === true) {
        ShowTimeoutMessage();
        return;
    }
    showDetailedPopupForm("My Account", modules.ACCOUNT, $("input#userid").val());
}

function Logout() {
    koolajax.callback(CB_Logout("para1", "para2"));
    window.parent.location = "login.php";
}

$(function() {
    $("#setdefault").click(function() {
        var result = koolajax.callback(CB_SaveFrontGridDefault($('#custom_query').val()), alert('Default Set'));
    });
});
function GetSession() {
    var args;
    args = "SessID=" + $("#sessfield").val() + "&UId=" + $("#uidfield").val();
    return args;
}

function formatCurrencySimple(num) {
    num = isNaN(num) || num === '' || num === null ? 0.00 : num;
    return parseFloat(num).toFixed(2);
}

function formatCurrency(num) {
    num = num.toString().replace(/\$|\,/g, '');
    if (isNaN(num))
        num = "0";
    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num * 100 + 0.50000000001);
    cents = num % 100;
    num = Math.floor(num / 100).toString();
    if (cents < 10)
        cents = "0" + cents;
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
        num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
    return (((sign) ? '' : '-') + '$' + num + '.' + cents);
}

function doGetDirSummaryInfo() {
    var dir_period = $("#periodSelector").val();
    koolajax.callback(CB_GetDirSummaryInfo(dir_period), doReloadStatusContentJSON);
}

function doReloadStatusContentJSON(result) {
//alert(result);
    $.each(result, function(i, val) {
        alert(val.STATE);
    });
// added by JL to store current directory name selected
//showSelectedDirectoryName();
//showSelectedDirectoryPeriod();
}

function showSelectedDirectoryName() {
    $("#selDirDiv").html(getSelectedDirectoryName);
}

function showSelectedDirectoryPeriod() {
    $("#selYrDiv").html(getSelectedDirectoryPeriod);
}

function initaliseDirectorySelection() {
//getSelectedDirectoryName();
//getSelectedDirectoryPeriod();
}

function getSelectedDirectoryId() {
    var index = document.getElementById("directorySelector").selectedIndex;
    var selectedDirID = document.getElementById("directorySelector").options[index].text;
    return selectedDirID;
}

function getSelectedDirectoryName() {
    var index = document.getElementById("directorySelector").selectedIndex;
    var selectedDirName = document.getElementById("directorySelector").options[index].text;

    return selectedDirName;
}

function getSelectedDirectoryPeriod() {
    var selectedDirYear;
    var index;
    if (document.getElementById("periodSelector") !== null) {
        index = document.getElementById("periodSelector").selectedIndex;
        selectedDirYear = document.getElementById("periodSelector").options[index].text;

    } else {
        selectedDirYear = '';
    }
    console.log("selectedDirYear                      " + selectedDirYear);
    return selectedDirYear;
}

function reloadYear(thestatusform) {
    directory = $("select#dir").val();
    koolajax.callback(CB_GetAvailableDirYears(directory), doReloadYearOption);
    var result = koolajax.callback(CB_GetAvailableDirPackages(directory));
    reloadDirPackages(result);
}

function reloadDirPackages(result) {
    if (result == "Premium Listing") {
        $("select#dirpack option[value='2']").attr("selected", "selected");
    } else if (result == "Advanced Listing") {
        $("select#dirpack option[value='1']").attr("selected", "selected");
    } else {
        $("select#dirpack option[value='0']").attr("selected", "selected");
    }
}

function reloadYear2(t, mod) {
    var result = koolajax.callback(CB_GetAvailableDirYears($(t).val()));
    var obj = jQuery.parseJSON(result);
    var targetyearField = "<select id='targetyear' name='targetyear'>";
    var targetperiod = "";
    jQuery.each(obj, function() {
        if (targetperiod == "") {
            targetperiod = this.START_DATE + " To " + this.END_DATE;
            $('#targetperiod').val(targetperiod);
        }
        if (this.IS_DEFAULT == 1) {
            $('#sourceyear2').val(this.CURRENT_YEAR);
            $('#sourceperiod2').val(this.START_DATE + " To " + this.END_DATE);
        }
        targetyearField = targetyearField + '<option  value="' + this.REC_ID + '">' + this.CURRENT_YEAR + '</option>';
    });
    targetyearField = targetyearField + '</select>';
    $('#targetyearField').html(targetyearField);
//    $.each(result, function() {
//    //  alert("test");
//    });    
//    alert(result);
//    var cnt = 0;
//    var dyn_opt;
//    var content = document.getElementById("yearField" + mod);
//    content.innerHTML = "";
//    var dyn_sel = document.createElement("select");
//    dyn_sel.id = "year" + mod;
//    dyn_sel.addEventListener('change', function () {
//        doLoadTemplate (mod)
//    }, false);
//    do {
//        dyn_opt = document.createElement("option");
//        dyn_opt.value = result[cnt];
//        dyn_opt.text = result[cnt];
//        dyn_sel.appendChild(dyn_opt);
//        cnt++;
//    }
//    while (result[cnt] != undefined);
//    content.appendChild(dyn_sel);
//    if (koolajax.callback(CB_IsDirectoryProductBased($(t).val())) == true) {
//        $("#step2_l2sBtn").show();
//    }
//    else {
//        $("#step2_l2sBtn").hide();
//    }

}

function doLoadTemplate(mod) {

    if (koolajax.callback(CB_CheckTimeout(), true) == true) {
        ShowTimeoutMessage();
        return false;
    }
    var directory = $("#dir" + mod).val();
    var year = $("#year" + mod).val();
    var ctype = mod;
    var version = $("#version" + mod).val();
    doLoadTemplateEx(directory, year, ctype, version);
    updateWholePath(mod);
    return true;
}

function updateWholePath(mod) {
    var directory = $("#dir" + mod + " 'option:selected'").text();
    var year = "" + $("#year" + mod + " 'option:selected'").text();
    var version = $("#version" + mod + " 'option:selected'").text();
    $("#path").val(directory + "_" + year + "_" + version);
    document.getElementById("completepath").innerHTML = "<i>" + directory + "_" + year + "_" + version + "</i>";
}

function onDone(result) {
    alert(result);
}

function dateComparisonToFrom(fDate, tDate) {
    var fromDate = new Date(fDate);
    var toDate = new Date(tDate);
    if (fromDate > toDate)
    {
        showMessage("error", "From date should be less than to date");
        return false;
    }
    return true;
}

function checkdate(input) {
    var validformat = /^\d{2}\/\d{2}\/\d{4}$/ //Basic check for format validity
    var returnval = false
    if (!validformat.test(input))
        showMessage("error", "Invalid Date Format. Please correct and submit again.")
    else { //Detailed check for valid date ranges
        var monthfield = input.split("/")[0]
        var dayfield = input.split("/")[1]
        var yearfield = input.split("/")[2]
        var dayobj = new Date(yearfield, monthfield - 1, dayfield)
        if ((dayobj.getMonth() + 1 != monthfield) || (dayobj.getDate() != dayfield) || (dayobj.getFullYear() != yearfield))
            showMessage("error", "Invalid Day, Month, or Year range detected. Please correct and submit again.")
        else
            returnval = true
    }
    return returnval
}


// Add New Directory
$(function() {
    $("#directory").click(function() {
        if (koolajax.callback(CB_CheckTimeout("dummy_parameter")) == true) {
            ShowTimeoutMessage();
            return;
        }

        $("#popup_form").dialog({
            title: "Manage Directory",
            modal: true,
            resizable: false,
            draggable: true,
            width: '1000',
            height: '768',
            show: showStyle,
            buttons: {
                "Close": function() {
                    $(this).dialog("destroy");
                }
            },
            close: function() {
                $(this).dialog("destroy");
            }
        })
                .load('view.php?view=3&action=0').fadeIn("fast");
    });
});
// Add Client
$(function() {
    $("#addclient").click(function() {
        if (koolajax.callback(CB_CheckTimeout("dummy_parameter")) == true) {
            ShowTimeoutMessage();
            window.parent.location('/');
            return;
        }
        var direSele;
        var yearSele;
        if (getSelectedDirectoryPeriod() == '') {
            direSele = '';
            yearSele = '';
        } else {
            direSele = getSelectedDirectoryId();
            yearSele = getSelectedDirectoryPeriod();
        }
        $("#popup_form").dialog({
            title: "Add Client",
            modal: true,
            resizable: true,
            draggable: true,
            width: 805,
            height: 580,
            show: showStyle,
            buttons: {
                "Add Client": function() {
                    if ($("input#entityName").val() == "" || $("input#firstName").val() == "" || $("input#lastName").val() == "" || $("input#email").val() == "" || $("input#userName").val() == "" || $("input#pw").val() == "") {
                        showMessage("error", "Please complete all mandatory fields.");
                        return;
                    }
                    if (!checkEmail($("input#email").val())) {
                        showMessage("error", 'Please provide a valid email address');
                        return;
                    }
                    if ($("input#pw").val() == "" != $("input#repw").val() == "") {
                        showMessage("error", 'Password is mismatched.');
                        return;
                    }
                    var listingPackage = "Standard Listing";
                    var selectedPackage = $("select#dirpack").val();
                    if (selectedPackage == "2") {
                        listingPackage = "Premium Listing";
                    } else if (selectedPackage == "1") {
                        listingPackage = "Advanced Listing";
                    }
                    var exists = koolajax.callback(CB_CheckEmailExist($("input#userName").val()));
                    if (!exists) {
                        koolajax.callback(CB_AddClient($("select#clientDirectorySelector").val(), $("select#clientPeriodSelector").val(), $("input#entityName").val(), $("input#firstName").val(), $("input#lastName").val(), $("input#email").val(), $("input#userName").val(), $("input#pw").val(), listingPackage), OnClientAdded);
                    } else {
                        showMessage("error", "The Username Entered Has Already Been Registered!");
                    }

                },
                "Cancel": function() {
                    $(this).dialog("destroy");
                    $(this)
                }
            },
            close: function() {
                $(this).dialog("destroy");
            }
        })
                //.load('view.php?view=1&action=1&param1=' + direSele + '&param2=' + yearSele).fadeIn("fast");
                .load('view.php?view=1&action=1&param1=1&param2=1').fadeIn("fast");
    });
});
function checkEmail(emailadd) {
    var email = emailadd;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email)) {
        return false;
    } else {
        return true;
    }

}

function OnClientAdded(result) {
    if (result) {
        showMessage("success", "Your New Client Has Been Successfully Added");
    } else {
        showMessage("error", "The Username Entered Has Already Been Registered.");
    }
}

function OnClientAdded_old(result) {
    switch (result['RESULT']) {
        case '-1':
            showMessage("error", "Unexpected error occurs during adding new client.");
            break;
        case '0':
            //$("#clientName1_result").html("<a href='#' OnClick='FormLogin(\"" + result['USERNAME'] + "\",\"" + result['PASSWORD'] + "\"); return false;'  title='Client Portal'><img src='images/home.png'></img></a>");
            showMessage("error", "The user name is already exist.");
            //$("#notice").warningStyle();
            break;
        case '1':
            showMessage("success", "Your New Client Has Been Successfully Added");
            resetForm("theform");
            break;
        case '3':
            //$("#clientName1_result").html("<a href='#' OnClick='FormLogin(\"" + result['USERNAME'] + "\",\"" + result['PASSWORD'] + "\"); return false;'  title='Client Portal'><img src='images/home.png'></img></a>");
            showMessage("error", "The user name entered is already registered.");
            //$("#notice").warningStyle();
            break;
    }
}

function resetForm(id) {
    $('#' + id).each(function() {
        this.reset();
    });
}

// Client Reports
$(function() {
    $("#clientreports").click(function() {
        if (koolajax.callback(CB_CheckTimeout(), true) == true) {
            ShowTimeoutMessage();
            return;
        }
        $("#popup_form2").dialog({
            title: "Select All Clients",
            modal: true,
            resizable: false,
            draggable: true,
            width: 1080,
            height: 520,
            show: showStyle,
            buttons: {
                "Cancel": function() {
                    $(this).dialog("destroy");
                }
            },
            Close: function() {
                $(this).dialog("destroy");
            }
        })
                .load('view.php?view=1&action=0&param1=' + getSelectedDirectoryId() + '&param2=' + getSelectedDirectoryPeriod()).fadeIn("fast");
    });
//alert('view.php?view=1&action=1&param1=' + getSelectedDirectoryId() + '&param2=' + getSelectedDirectoryPeriod());
});
//Edit Client
$(function() {

    $("#editclient").click(function() {
        $(function() {
            showMessage("info", "Select A Client To Edit - Double Click Row To Open The Client's Dashboard");
        });
        $("#popup_form2").dialog({
            title: "Edit Client",
            modal: true,
            resizable: false,
            draggable: true,
            width: GetWidth() - 200,
            height: GetHeight() - 200,
            show: showStyle,
            closeOnEscape: false,
            open: function(event, ui) {
                $(".ui-dialog-titlebar-close", ui.dialog || ui).hide();
            },
            buttons: {
                "Cancel": function() {
                    $.ajax({
                        type: "POST",
                        url: "/administrator/ActionChooser.php",
                        dataType: "json",
                        data: {"action": "destroy"},
                        success: function(reply) {
                            console.log("OK");
                        }
                    });
                    tableLocation = "query-result";
                    $(this).dialog("destroy");
                }
            }
        });
        $.ajax({
            type: "POST",
            url: "/administrator/ActionChooser.php",
            dataType: "json",
            data: {"action": "editclientclick"},
            success: function(reply) {
                var tablediv = document.getElementById(reply);
                while (tablediv.firstChild) {
                    tablediv.removeChild(tablediv.firstChild);
                }
                $("#popup_form2").html(getSelectedDirectoryId() + "            " + getSelectedDirectoryPeriod());
                getGridData(1);
            }
        });
    }

    );
});
$(function() {
    $("#removeclient").click(function() {
        if (koolajax.callback(CB_CheckTimeout(), true) == true) {
            ShowTimeoutMessage();
            return;
        }
        $("#popup_form2").dialog({
            title: "Select Client",
            modal: true,
            resizable: false,
            draggable: true,
            width: 1080,
            height: 520,
            show: showStyle,
            buttons: {
                "Remove": function() {
                    if ($('#clientframe').contents().find("input#recid").val() != "") {
                        var name = $('#clientframe').contents().find("input#nam").val();
                        if (confirm("Are you sure you want to delete \"" + name + "\" in the record?")) {
                            if (koolajax.callback(CB_RemoveClient(dir, yr, $('#clientframe').contents().find("input#recid").val(), $('#clientframe').contents().find("input#rid").val()))) {
                                alert("The client \"" + name + "\"is successfully removed from the record.");
                                $(this).dialog("destroy");
                            }
                            else {
                                alert("Unable to delete user.");
                            }
                        }
                    }
                },
                "Cancel": function() {
                    $(this).dialog("destroy");
                }
            },
            close: function() {
                $(this).dialog("destroy");
            }
        })
                .load('view.php?view=1&action=2&param1=' + getSelectedDirectoryId() + '&param2=' + getSelectedDirectoryPeriod()).fadeIn("fast");
    });
});
$(function() {
    $("#myaccount").click(function() {
        if (koolajax.callback(CB_CheckTimeout(), true) == true) {
            ShowTimeoutMessage();
            return;
        }
        showDetailedPopupForm("My Account", modules.ACCOUNT, $("input#userid").val());
    });
});
$(function() {
    $("#adduser").click(function() {
        if (koolajax.callback(CB_CheckTimeout(), true) == true) {
            ShowTimeoutMessage();
            return;
        }
        $("#popup_form").dialog({
            title: "Add New User",
            modal: true,
            resizable: false,
            draggable: true,
            width: 565,
            height: 'auto',
            show: showStyle,
            buttons: {
                "Add User": function() {

                    var jsonObj = '{"id":0, "role":"' + $("select#add_roles").val() + '", "username":"' + $("input#username").val() +
                            '", "password":"' + $("input#password").val() + '", "confirm":"' + $("input#confirm").val() +
                            '", "firstname":"' + $("input#firstname").val() + '", "lastname":"' + $("input#lastname").val() + '"}';
                    var result = koolajax.callback(CB_AddUser(jsonObj));
                    if (result) {
                        alert("Successful");
                        $(this).dialog("destroy"); //close
                    }
                    else {
                        alert("failed to add");
                    }
                },
                "Cancel": function() {
                    $(this).dialog("destroy");
                }
            },
            close: function() {
                $(this).dialog("destroy");
            }
        })
                .load('view.php?view=0&action=1').fadeIn("fast");
    });
});
$(function() {
    $("#edituser").click(function() {
        if (koolajax.callback(CB_CheckTimeout(), true) == true) {
            ShowTimeoutMessage();
            return;
        }
        $("#popup_form").dialog({
            title: "Edit User",
            modal: true,
            resizable: false,
            draggable: true,
            width: 465,
            height: 550,
            show: showStyle,
            buttons: {
                "Search User": function() {
                    if ($("input#userName").val() != '') {
                        showSearchPopupForm("User Details", modules.ACCOUNT, $("input#userName").val());
                        $(this).dialog("destroy"); //close
                    } else { //provide warning if search user
                        $("#note").html("*").css('color', 'red');
                        $("input#userName").css('border', 'solid 2 red');
                        $("#notice").html("Username is required.");
                        $("#notice").warningStyle();
                    }
                },
                "Edit User": function() {

                    if ($("input#selected_id").val() != '') {
                        showDetailedPopupForm("User Details", modules.ACCOUNT, $("input#selected_id").val());
                    } else { //provide warning if search user
                        $("#note").html("*").css('color', 'red');
                        $("input#userName").css('border', 'solid 2 red');
                        $("#notice").html("Please select a record from grid.");
                        $("#notice").warningStyle();
                    }
                },
                "Cancel": function() {
                    $(this).dialog("destroy");
                }
            },
            close: function() {
                $(this).dialog("destroy");
            }
        })
                .load('view.php?view=0&action=2').fadeIn("fast");
        //return ;
        //        var superadmin = true; // change this when ready for session
        //        if (!superadmin)
        //            $(":button:contains('Delete')").attr("disabled", "disabled").addClass('ui-state-disabled');
    });
});
$(function() {
    $("#removeuser").click(function() {
        if (koolajax.callback(CB_CheckTimeout(), true) == true) {
            ShowTimeoutMessage();
            return;
        }
        $("#popup_form").dialog({
            title: "Remove User",
            modal: true,
            resizable: false,
            draggable: true,
            width: 465,
            height: 'auto',
            show: showStyle,
            buttons: {
                "Search User": function() {
                    if ($("input#userName").val() != "") {
                        showSearchPopupForm("User Details", modules.ACCOUNT, $("input#userName").val());
                        $(this).dialog("destroy"); //close
                    } else {
                        $("#note").html("*").css('color', 'red');
                        $("input#userName").css('border', 'solid 2 red');
                        $("#notice").html("Username is required.");
                        $("#notice").warningStyle();
                    }
                },
                "Remove User": function() {
                    if (confirm("Are you sure you want to delete the selected user?")) {
                        if (koolajax.callback(CB_RemoveUser($("input#selected_id").val()))) {
                            $(this).dialog("destroy");
                        }
                        else {
                            alert("Unable to delete user.");
                        }
                    }
                },
                "Cancel": function() {
                    $(this).dialog("destroy");
                }
            },
            close: function() {
                $(this).dialog("destroy");
            }
        })
                .load('view.php?view=0&action=3').fadeIn("fast");
    });
});
$(function() {
    $("#addcat").click(function() {
        if (koolajax.callback(CB_CheckTimeout(), true) == true) {
            ShowTimeoutMessage();
            return;
        }
        $("#popup_form2").dialog({
            title: "Add Category",
            modal: true,
            resizable: false,
            draggable: true,
            width: 700,
            height: 600,
            show: showStyle,
            buttons: {
                "Add": function() {
                    var jsonObj = '{"dir":"' + $('#catframe').contents().find("input#dir").val() + '", "id":"' + $('#catframe').contents().find("input#recid").val() + '", "name":"' + $('#catframe').contents().find("input#catname").val() +
                            '", "prnorder":"' + $('#catframe').contents().find("input#prntorder").val() + '", "prnimg":"' + $('#catframe').contents().find("input#prntimgloc").val() +
                            '", "webimg":"' + $('#catframe').contents().find("input#webimgloc").val() + '", "code":"' + $('#catframe').contents().find("input#code").val() +
                            '", "txt":"' + $('#catframe').contents().find("textarea#textinfo").val() + '"}';
                    var result = koolajax.callback(CB_AddCategory(jsonObj));
                    switch (result) {
                        case 1:
                            alert("Successful");
                            $(this).dialog("destroy");
                            refreshCatogory();
                            //$(this).dialog("destroy");
                            break;
                        case 0:
                            alert("failed to add");
                            $(this).dialog("destroy");
                            break;
                        case -1:
                            alert("Code already exist.");
                            break;
                    }
                },
                "Cancel": function() {
                    $(this).dialog("destroy");
                }
            },
            close: function() {
                $(this).dialog("destroy");
            }
        })
                .load('view.php?view=2&action=1&param1=' + getSelectedDirectoryId() + '&param2=' + getSelectedDirectoryPeriod()).fadeIn("fast");
    });
});
function refreshCatogory() {
    $("#popup_form2").dialog({
        title: "Add Category",
        modal: true,
        resizable: false,
        draggable: true,
        width: 700,
        height: 600,
        show: showStyle,
        buttons: {
            "Add": function() {
                var jsonObj = '{"dir":"' + $('#catframe').contents().find("input#dir").val() + '", "id":"' + $('#catframe').contents().find("input#recid").val() + '", "name":"' + $('#catframe').contents().find("input#catname").val() +
                        '", "prnorder":"' + $('#catframe').contents().find("input#prntorder").val() + '", "prnimg":"' + $('#catframe').contents().find("input#prntimgloc").val() +
                        '", "webimg":"' + $('#catframe').contents().find("input#webimgloc").val() + '", "code":"' + $('#catframe').contents().find("input#code").val() +
                        '", "txt":"' + $('#catframe').contents().find("textarea#textinfo").val() + '"}';
                var result = koolajax.callback(CB_AddCategory(jsonObj));
                switch (result) {
                    case 1:
                        alert("Successful");
                        $(this).dialog("destroy");
                        refreshCatogory();
                        break;
                    case 0:
                        alert("failed to add");
                        $(this).dialog("destroy");
                        break;
                    case -1:
                        alert("Code already exist.");
                        break;
                }
            },
            "Cancel": function() {
                $(this).dialog("destroy");
            }
        },
        close: function() {
            $(this).dialog("destroy");
        }
    })
            .load('view.php?view=2&action=1&param1=' + getSelectedDirectoryId() + '&param2=' + getSelectedDirectoryPeriod()).fadeIn("fast");
}



$(function() {
    $("#editcat").click(function() {

        $("#popup_form2").dialog({
            open: function() {
                //display correct dialog content
                $("#popup_form2").load("../test/request.php");
            },
            title: "Edit Category",
            modal: true,
            resizable: false,
            draggable: true,
            bgiframe: true,
            width: 900,
            height: GetHeight() - 200,
            show: showStyle,
            buttons: {
                "Save": function() {
                    var jsonObj = $("#catname").val();

                    console.log(jsonObj);
                },
                "Cancel": function() {
                    console.log("cata close ");

                    $(this).dialog("destroy");

                }
            }
        });

    });
});



function refreshEditCatogory() {
    $("#popup_form2").dialog({
        title: "Edit Category",
        modal: true,
        resizable: false,
        draggable: true,
        width: 700,
        height: 600,
        show: showStyle,
        buttons: {
            "Save": function() {
                var jsonObj = '{"id":"' + $('#catframe').contents().find("input#recid").val() + '", "name":"' + $('#catframe').contents().find("input#catname").val() +
                        '", "prnorder":"' + $('#catframe').contents().find("input#prntorder").val() + '", "prnimg":"' + $('#catframe').contents().find("input#prntimgloc").val() +
                        '", "webimg":"' + $('#catframe').contents().find("input#webimgloc").val() + '", "code":"' + $('#catframe').contents().find("input#code").val() +
                        '", "txt":"' + $('#catframe').contents().find("textarea#textinfo").val() + '"}';
                var result = koolajax.callback(CB_EditCategory(jsonObj));
                if (result) {
                    alert("Successful");
                    $(this).dialog("destroy");
                    refreshEditCatogory();
                    //close disabled $(this).dialog("destroy"); 
                }
                else {
                    alert("Failed to update");
                }
            },
            "Cancel": function() {
                $(this).dialog("destroy");
            }
        },
        close: function() {
            $(this).dialog("destroy");
        }
    })
            .load('view.php?view=2&action=2&param1=' + getSelectedDirectoryId() + '&param2=' + getSelectedDirectoryPeriod()).fadeIn("fast");
}
$(function() {
    $("#removecat").click(function() {
        if (koolajax.callback(CB_CheckTimeout(), true) == true) {
            ShowTimeoutMessage();
            return;
        }
        $("#popup_form2").dialog({
            title: "Remove Category",
            modal: true,
            resizable: false,
            draggable: true,
            width: 700,
            height: 600,
            show: showStyle,
            buttons: {
                "Remove": function() {
                    var result = koolajax.callback(CB_hasDependent($('#catframe').contents().find("input#dir").val(), $('#catframe').contents().find("input#recid").val()));
                    if (result[0] > 0) {
// this is a security filter to avoid bulks of data being removed accidentaly.
                        alert("Error! You're trying to delete a parent category.\r\n\r\nPlease first delete all [" + result[0] + "] sub-categories under '" + $('#catframe').contents().find("input#catname").val() + "'.")
                    }
                    if (result[1] > 0) {
// this is a security filter to avoid bulks of data being removed accidentaly.
                        alert("Error! You're trying to delete a category.\r\n\r\nThis category is used by " + result[1] + " client[s].")
                    }
                    if (result[2] > 0) {
// this is a security filter to avoid bulks of data being removed accidentaly.
                        alert("Error! You're trying to delete a category.\r\n\r\nThis category is used by " + result[2] + " live client[s].")
                    }

                    if (result[0] == 0 && result[1] == 0 && result[2] == 0)
                    {
                        var jsonObj = '{"id":"' + $('#catframe').contents().find("input#recid").val() + '","dir":"' + $('#catframe').contents().find("input#dir").val() + '"}';
                        bRet = koolajax.callback(CB_RemoveCategory(jsonObj));
                        if (bRet) {
                            alert("Successful");
                            $(this).dialog("destroy"); //close
                            refreshRemoveCatogory();
                        }
                        else {
                            alert("Failed to remove the category.");
                        }
                    }
                },
                "Cancel": function() {
                    $(this).dialog("destroy");
                }
            },
            close: function() {
                $(this).dialog("destroy");
            }
        })
                .load('view.php?view=2&action=3&param1=' + getSelectedDirectoryId() + '&param2=' + getSelectedDirectoryPeriod()).fadeIn("fast");
    });
});
function refreshRemoveCatogory() {
    $("#popup_form2").dialog({
        title: "Remove Category",
        modal: true,
        resizable: false,
        draggable: true,
        width: 700,
        height: 600,
        show: showStyle,
        buttons: {
            "Remove": function() {
                var result = koolajax.callback(CB_hasDependent($('#catframe').contents().find("input#dir").val(), $('#catframe').contents().find("input#recid").val()));
                if (result[0] > 0) {
                    // this is a security filter to avoid bulks of data being removed accidentaly.
                    alert("Error! You're trying to delete a parent category.\r\n\r\nPlease first delete all [" + result[0] + "] sub-categories under '" + $('#catframe').contents().find("input#catname").val() + "'.")
                }
                if (result[1] > 0) {
                    // this is a security filter to avoid bulks of data being removed accidentaly.
                    alert("Error! You're trying to delete a category.\r\n\r\nThis category is used by " + result[1] + " client[s].")
                }
                if (result[2] > 0) {
                    // this is a security filter to avoid bulks of data being removed accidentaly.
                    alert("Error! You're trying to delete a category.\r\n\r\nThis category is used by " + result[2] + " live client[s].")
                }

                if (result[0] == 0 && result[1] == 0 && result[2] == 0)
                {
                    var jsonObj = '{"id":"' + $('#catframe').contents().find("input#recid").val() + '","dir":"' + $('#catframe').contents().find("input#dir").val() + '"}';
                    bRet = koolajax.callback(CB_RemoveCategory(jsonObj));
                    if (bRet) {
                        alert("Successful");
                        $(this).dialog("destroy"); //close
                        refreshRemoveCatogory();
                    }
                    else {
                        alert("Failed to remove the category.");
                    }
                }
            },
            "Cancel": function() {
                $(this).dialog("destroy");
            }
        },
        close: function() {
            $(this).dialog("destroy");
        }
    })
            .load('view.php?view=2&action=3&param1=' + getSelectedDirectoryId() + '&param2=' + getSelectedDirectoryPeriod()).fadeIn("fast");
}
function editClientGrid(dir, yr) {
    if (koolajax.callback(CB_CheckTimeout(), true) == true) {
        ShowTimeoutMessage();
        return;
    }
    $("#popup_form2").dialog({
        title: "Select Client",
        modal: true,
        resizable: false,
        draggable: true,
        width: 'auto',
        height: 'auto',
        show: showStyle,
        buttons: {
            "Edit": function() {
                if ($('#clientframe').contents().find("input#usr").val() != "") {
                    var callbackresult = koolajax.callback(DoTPLLogin($('#clientframe').contents().find("input#usr").val(), $('#clientframe').contents().find("input#pwd").val()));
                    if (callbackresult == "SUCCESS") {
                        new_window = window.open("/portal");
                        new_window.adpHide('adpModal');
                        new_window.adpHideMask('adpMask');
                    }
                    return false;
                }
            },
            "Cancel": function() {
                $(this).dialog("destroy");
            }
        },
        close: function() {
            $(this).dialog("destroy");
        }
    })
            .load('view.php?view=1&action=2&param1=' + dir + '&param2=' + yr).fadeIn("fast");
}

function removeClientGrid(dir, yr) {
    if (koolajax.callback(CB_CheckTimeout(), true) == true) {
        ShowTimeoutMessage();
        return;
    }
    $("#popup_form2").dialog({
        title: "Select Client",
        modal: true,
        resizable: false,
        draggable: true,
        width: 'auto',
        height: 'auto',
        show: showStyle,
        buttons: {
            "Remove": function() {
                if ($('#clientframe').contents().find("input#recid").val() != "") {
                    var name = $('#clientframe').contents().find("input#nam").val();
                    if (confirm("Are you sure you want to delete \"" + name + "\" in the record?")) {
                        if (koolajax.callback(CB_RemoveClient(dir, yr, $('#clientframe').contents().find("input#recid").val(), $('#clientframe').contents().find("input#rid").val()))) {
                            alert("The client \"" + name + "\"is successfully removed from the record.");
                            $(this).dialog("destroy");
                        }
                        else {
                            alert("Unable to delete user.");
                        }
                    }
                }
            },
            "Cancel": function() {
                $(this).dialog("destroy");
            }
        },
        close: function() {
            $(this).dialog("destroy");
        }
    })
            .load('view.php?view=1&action=2&param1=' + dir + '&param2=' + yr).fadeIn("fast");
}

$(function() {

    $("#allorder").click(function() {

        $.ajax({
            url: '/common/callbacks/login.php',
            type: 'POST',
            data: {"action": "timeout"},
            async: false,
            success: function(response) {
                if ($.trim(response) == "OK") {
                    return;
                }
            }
        });
        $("#popup_form").dialog({
            title: "All Orders",
            modal: true,
            resizable: false,
            draggable: true,
            width: 820,
            height: 'auto',
            show: showStyle,
            buttons: {
                "Cancel": function() {
                    $(this).dialog("destroy");
                }
            },
            close: function() {
                $(this).dialog("destroy");
            }
        })
                .load('order_grid.php').fadeIn("fast");
    });
});
/* Display All the orders */
$(function() {
    $("#allinvoices").click(function() {
        $.ajax({
            url: '/common/callbacks/login.php',
            type: 'POST',
            data: {"action": "timeout"},
            async: false,
            success: function(response) {
                if ($.trim(response) == "OK") {
                    return;
                }
            }
        });
        $("#popup_form").dialog({
            title: "All Invoices",
            modal: true,
            resizable: false,
            draggable: true,
            width: 820,
            height: 'auto',
            show: showStyle,
            buttons: {
                "Cancel": function() {
                    $(this).dialog("destroy");
                }
            },
            close: function() {
                $(this).dialog("destroy");
            }
        })
                .load('invoice_grid.php').fadeIn("fast");
    });
});
/*Account Module Handlers*/
function Handle_OnRowSelect(sender, args) {
    var _row = args["Row"];
    $("input#selected_id").val(_row.getDataItem()["REC_ID"]);
}

function Handle_OnRowClick(sender, args) {
    var _row = args["Row"];
    var _event = args["Event"];
}


function showDetailedPopupForm(title, mod_id, item) {
    if (koolajax.callback(CB_CheckTimeout(), true) == true) {
        ShowTimeoutMessage();
        return;
    }
    $("#popup_form2").dialog({
        title: title,
        modal: true,
        resizable: false,
        draggable: true,
        width: 330,
        height: 'auto',
        show: showStyle,
        buttons: {
            "Save": function() {
                var jsonObj = '{"id":"' + $("input#recid").val() + '", "role":"' + $("select#view_roles").val() + '", "username":"' + $("input#user").val() + '", "password":"' + $("input#password").val() + '", "firstname":"' + $("input#firstname").val() + '", "lastname":"' + $("input#lastname").val() + '"}';
                var result = koolajax.callback(CB_SaveUser(jsonObj));
                if (result) {
                    alert("Successful");
                    $(this).dialog("destroy"); //close
                }
                else {
                    alert("failed to add");
                }
            },
            "Cancel": function() {
                $(this).dialog("destroy");
            }
        },
        close: function() {
            $(this).dialog("destroy");
        }
    })
            .load('view.php?view=0&action=0&param1=' + item).fadeIn("fast");
}

function showSearchPopupForm(title, mod_id, item) {
    if (koolajax.callback(CB_CheckTimeout(), true) == true) {
        ShowTimeoutMessage();
        return;
    }
    $("#popup_form2").dialog({
        title: title,
        modal: true,
        resizable: false,
        draggable: true,
        width: 465,
        height: 'auto',
        show: showStyle,
        buttons: {
            "Edit User": function() {
                if ($("input#selected_id").val() != "")
                    showDetailedPopupForm("User Details", modules.ACCOUNT, $("input#selected_id").val());
            },
            "Remove User": function() {
                if (confirm("Are you sure you want to delete the selected user?")) {
                    if (koolajax.callback(CB_RemoveUser($("input#selected_id").val()))) {
                        $(this).dialog("destroy");
                    }
                    else {
                        alert("Unable to delete user.");
                    }
                }
            },
            "Cancel": function() {
                $(this).dialog("destroy");
            }
        },
        close: function() {
            $(this).dialog("destroy");
        }
    })
            //.load('view.php?' + GetSession() + '&view=0&action=4&param1=' + item).fadeIn("fast");
            .load('view.php?view=0&action=4&param1=' + item).fadeIn("fast");
}

(function($) {
    $.fn.errorStyle = function() {
        this.replaceWith(function(i, html) {
            var StyledError = "<div class=\"ui-state-error ui-corner-all\" style=\"padding: 0 .7em;\">";
            StyledError += "<p><span class=\"ui-icon ui-icon-alert\" style=\"float: left; margin-right: .3em;\">";
            StyledError += "</span><strong>Attention : </strong>";
            StyledError += html;
            StyledError += "</p></div>";
            return StyledError;
        });
    }

    $.fn.warningStyle = function() {
        this.replaceWith(function(i, html) {
            var StyledWarning = "<div class=\"ui-state-highlight ui-corner-all\" style=\"padding: 0 .7em;\">";
            StyledWarning += "<p><span class=\"ui-icon ui-icon-alert\" style=\"float: left; margin-right: .3em;\">";
            StyledWarning += "</span><strong>Attention : </strong>";
            StyledWarning += html;
            StyledWarning += "</p></div>";
            return StyledWarning;
        });
    }
})(jQuery);
function doLoadTemplateEx(directory, year, ctype, version) {
    var ftype = "brandtab.php"; //default
    switch (ctype) {
        case category.BRAND:
            ftype = "brandtab.php";
            tabpanel_brand.update(ftype + "?param=" + directory + ":" + year + ":" + version);
            break;
        case category.PRODUCT:
            ftype = "producttab.php";
            tabpanel_product.update(ftype + "?param=" + directory + ":" + year + ":" + version);
            break;
        case category.SUPPLIER:
            ftype = "suppliertab.php";
            tabpanel_supplier.update(ftype + "?param=" + directory + ":" + year + ":" + version);
            break;
        case category.SHAWS_SPECIAL:
            ftype = "shawstab.php";
            tabpanel_shaws.update(ftype + "?param=" + directory + ":" + year + ":" + version);
            break;
    }
}

function doNewTemplate() {
    if (koolajax.callback(CB_CheckTimeout(), true) == true) {
        ShowTimeoutMessage();
        return;
    }
    var answer = prompt("Template Name", "");
    if (answer != '' && answer != null) {
        var result = koolajax.callback(CB_NewTemplate(answer));
        if (result) {
            alert("'" + answer + "' created successfully");
            location.reload(true);
        }
        else
            alert("'" + answer + "' already exist or name is invalid");
    }
}

function doSaveTemplate(mod) {
    if (koolajax.callback(CB_CheckTimeout(), true) == true) {
        ShowTimeoutMessage();
        return;
    }
    var result = false;
    var headerTag, brandNameTag, supplierNameTag, supplierBrandLogoTag;
    var directory = $("#dir" + mod).val();
    var year = $("#year" + mod).val();
    var ctype = mod;
    var version = $("#version" + mod).val();
    var id = $("#template_id" + mod).val();
    switch (ctype) {
        case category.BRAND:
            {
                headerTag = $("#headerTag" + mod).val();
                brandNameTag = $("#brandNameTag" + mod).val();
                supplierNameTag = $("#supplierNameTag" + mod).val();
                supplierBrandLogoTag = $("#supplierBrandLogoTag" + mod).val();
                commentTag = $("#commentTag" + mod).val();
                result = koolajax.callback(CB_SaveBrandTemplate(ctype, id, directory, year, version, commentTag, headerTag, brandNameTag, supplierNameTag, supplierBrandLogoTag));
                break;
            }
        case category.PRODUCT:
            {
                headerTag = $("#headerTag" + mod).val();
                productNameTag = $("#productNameTag" + mod).val();
                supplierNameTag = $("#supplierNameTag" + mod).val();
                supplierProductLogoTag = $("#supplierProductLogoTag" + mod).val();
                commentTag = $("#commentTag" + mod).val();
                result = koolajax.callback(CB_SaveProductTemplate(ctype, id, directory, year, version, commentTag, headerTag, productNameTag, supplierNameTag, supplierProductLogoTag));
                break;
            }
        case category.SUPPLIER:
            {
                headerTag = $("#headerTag" + mod).val();
                subHeaderTag = $("#subHeaderTag" + mod).val();
                logoTag = $("#logoTag" + mod).val();
                supplierCompanyNameTag = $("#supplierCompanyNameTag" + mod).val();
                companyStatementTag = $("#companyStatementTag" + mod).val();
                pysicalAddressTag = $("#pysicalAddressTag" + mod).val();
                postalAddressTag = $("#postalAddressTag" + mod).val();
                phoneTag = $("#phoneTag" + mod).val();
                freePhoneTag = $("#freePhoneTag" + mod).val();
                faxNumberTag = $("#faxNumberTag" + mod).val();
                freeFaxNumberTag = $("#freeFaxNumberTag" + mod).val();
                emailAddressTag = $("#emailAddressTag" + mod).val();
                websiteTag = $("#websiteTag" + mod).val();
                contactNameTag = $("#contactNameTag" + mod).val();
                keyPersonnelTag = $("#keyPersonnelTag" + mod).val();
                keyPersonnelNameTag = $("#keyPersonnelNameTag" + mod).val();
                keyPersonnelPositionTag = $("#keyPersonnelPositionTag" + mod).val();
                keyPersonnelEmailTag = $("#keyPersonnelEmailTag" + mod).val();
                keyPersonnelPhoneTag = $("#keyPersonnelPhoneTag" + mod).val();
                keyPersonnelFaxTag = $("#keyPersonnelFaxTag" + mod).val();
                branchesTag = $("#branchesTag" + mod).val();
                branchNameTag = $("#branchNameTag" + mod).val();
                branchPhysicalAddressTag = $("#branchPhysicalAddressTag" + mod).val();
                branchPostalAddressTag = $("#branchPostalAddressTag" + mod).val();
                branchPhoneTag = $("#branchPhoneTag" + mod).val();
                branchFreePhoneTag = $("#branchFreePhoneTag" + mod).val();
                branchFaxNumberTag = $("#branchFaxNumberTag" + mod).val();
                branchFreeFaxTag = $("#branchFreeFaxTag" + mod).val();
                branchEmailTag = $("#branchEmailTag" + mod).val();
                commentTag = $("#commentTag" + mod).val();
                result = koolajax.callback(CB_SaveSupplierTemplate(ctype, id, directory, year, version, commentTag, headerTag, subHeaderTag, logoTag, supplierCompanyNameTag, companyStatementTag,
                        pysicalAddressTag, postalAddressTag, phoneTag, freePhoneTag, faxNumberTag, freeFaxNumberTag,
                        emailAddressTag, websiteTag, contactNameTag, keyPersonnelTag, keyPersonnelNameTag, keyPersonnelPositionTag, keyPersonnelEmailTag, keyPersonnelPhoneTag, keyPersonnelFaxTag,
                        branchesTag, branchNameTag, branchPhysicalAddressTag, branchPostalAddressTag, branchPhoneTag, branchFreePhoneTag, branchFaxNumberTag, branchFreeFaxTag, branchEmailTag));
                break;
            }
        case category.SHAWS_SPECIAL:
            {
                //supplier
                headerTag = $("#headerTag" + mod).val();
                supplierCompanyNameTag = $("#supplierCompanyNameTag" + mod).val();
                companyStatementTag = $("#companyStatementTag" + mod).val();
                pysicalAddressTag = $("#pysicalAddressTag" + mod).val();
                postalAddressTag = $("#postalAddressTag" + mod).val();
                phoneTag = $("#phoneTag" + mod).val();
                freePhoneTag = $("#freePhoneTag" + mod).val();
                faxNumberTag = $("#faxNumberTag" + mod).val();
                freeFaxNumberTag = $("#freeFaxNumberTag" + mod).val();
                emailAddressTag = $("#emailAddressTag" + mod).val();
                websiteTag = $("#websiteTag" + mod).val();
                contactNameTag = $("#websiteTag" + mod).val();
                //personnel
                personnelNameTag = $("#personnelNameTag" + mod).val();
                personnelPhoneTag = $("#personnelPhoneTag" + mod).val();
                personnelFaxNumberTag = $("#personnelFaxNumberTag" + mod).val();
                personnelEmailTag = $("#personnelEmailTag" + mod).val();
                //branch
                branchesTag = $("#branchesTag" + mod).val();
                branchNameTag = $("#branchNameTag" + mod).val();
                branchPhysicalAddressTag = $("#branchPhysicalAddressTag" + mod).val();
                branchPostalAddressTag = $("#branchPostalAddressTag" + mod).val();
                branchPhoneTag = $("#branchPhoneTag" + mod).val();
                branchFreePhoneTag = $("#branchFreePhoneTag" + mod).val();
                branchFaxNumberTag = $("#branchFaxNumberTag" + mod).val();
                branchFreeFaxTag = $("#branchFreeFaxTag" + mod).val();
                branchEmailTag = $("#branchEmailTag" + mod).val();
                //brand
                brandHeadingTag = $("#brandHeadingTag" + mod).val();
                brandNameTag = $("#brandNameTag" + mod).val();
                //brand list
                brandListHeadingTag = $("#brandListHeadingTag" + mod).val();
                brandListNameTag = $("#brandListNameTag" + mod).val();
                brandListSupplierTag = $("#brandListSupplierTag" + mod).val();
                //drink type index
                drinkTypesIndexHeadingTag = $("#drinkTypesIndexHeadingTag" + mod).val();
                drinkTypeIndexCategoryNameTag = $("#drinkTypeIndexCategoryNameTag" + mod).val();
                drinkTypeIndexNameTag = $("#drinkTypeIndexNameTag" + mod).val();
                //drink types
                drinkTypesHeadingTag = $("#drinkTypesHeadingTag" + mod).val();
                drinkTypeCategoryNameTag = $("#drinkTypeCategoryNameTag" + mod).val();
                drinkTypeNameTag = $("#drinkTypeNameTag" + mod).val();
                drinkTypeProductInfoTag = $("#drinkTypeProductInfoTag" + mod).val();
                drinkTypeProductNameTag = $("#drinkTypeProductNameTag" + mod).val();
                commentTag = $("#commentTag" + mod).val();
                result = koolajax.callback(CB_SaveShawsTemplate(ctype, id, directory, year, version, commentTag, headerTag,
                        supplierCompanyNameTag, companyStatementTag, pysicalAddressTag, postalAddressTag,
                        phoneTag, freePhoneTag, faxNumberTag, freeFaxNumberTag, emailAddressTag, websiteTag,
                        contactNameTag, personnelNameTag, personnelPhoneTag, personnelFaxNumberTag, personnelEmailTag,
                        branchesTag, branchNameTag, branchPhysicalAddressTag, branchPostalAddressTag, branchPhoneTag,
                        branchFreePhoneTag, branchFaxNumberTag, branchFreeFaxTag, branchEmailTag, brandHeadingTag,
                        brandNameTag, brandListHeadingTag, brandListNameTag, brandListSupplierTag, drinkTypesIndexHeadingTag,
                        drinkTypeIndexCategoryNameTag, drinkTypeIndexNameTag, drinkTypesHeadingTag, drinkTypeCategoryNameTag,
                        drinkTypeNameTag, drinkTypeProductInfoTag, drinkTypeProductNameTag));
                break;
            }
    }

    if (result == true) {
        // call reload to update the view - hidden field will also be filled
        doLoadTemplateEx(directory, year, ctype, version);
        alert("Successful");
    }
    else {
        alert("Failed");
    }
}

function doExport(mod) {
    if (koolajax.callback(CB_CheckTimeout(), true) == true) {
        ShowTimeoutMessage();
        return;
    }
    var directory = $("#dir" + mod).val();
    var year = $("#year" + mod).val();
    var ctype = mod;
    var version = $("#version" + mod).val();
    var id = $("#template_id" + mod).val();
    /* Extracting these values from base page hidden fields.*/
    $("#dir").val(directory);
    $("#type").val(ctype);
    $("#version").val(version);
    $("#year").val(year);
    $("#baseform").submit();
//    $.post("ExportDataFile.php", {
//        dir: directory, 
//        type: ctype, 
//        year: year, 
//        version: version
//    } );

//    var result = koolajax.callback(CB_ExportData(directory, ctype, year, version));
//    if (result == true) alert("Successful");
//    else alert("Failed");
}

$(function() {
    $("#exportpage").click(function() {
        if (koolajax.callback(CB_CheckTimeout(), true) == true) {
            ShowTimeoutMessage();
            return;
        }
        window.open('export_data.php');
        return false;
    });
});
$(function() {
    $("#shadow2live2shadow").click(function() {
        if (koolajax.callback(CB_CheckTimeout(), true) == true) {
            ShowTimeoutMessage();
            return;
        }
        $("#popup_form").dialog({
            title: "Migration Option",
            modal: true,
            resizable: false,
            draggable: true,
            width: '350',
            height: '350',
            show: showStyle,
            buttons: {
                "Cancel": function() {
                    $(this).dialog("destroy");
                }
            },
            close: function() {
                $(this).dialog("destroy");
            }
        })
                .load('view.php?view=4&action=0&param2=' + getSelectedDirectoryPeriod() + '&param3=' + getSelectedDirectoryId()).fadeIn("fast");
    });
});
function doShadow2Live(id) {
    if (koolajax.callback(CB_CheckTimeout(), true) == true) {
        ShowTimeoutMessage();
        return;
    }
    var result = false;
    var directory = $("#dir" + id).val();
    var year = $("#year" + id).val();
    $("#progressbar1").html("Processing... <br/><small>note: your browser may look like not responding during this time.</small>");
    setTimeout(function() {
        ExecShadow2Live(directory, year)
    }, 500);
}

function ExecShadow2Live(directory, year) {
    result = koolajax.callback(CB_PrepareLiveData(directory, year));
    if (result == true) {
        $("#progressbar1").text("Migration from Shadow to Live is Successful");
    }
    else {
        $("#progressbar1").text("Migration did not find anything to process. Please verify you have closed your Listings.");
    }
}

function doLive2ShadowStep1(id) {
    if (koolajax.callback(CB_CheckTimeout("para1", "para2"), true) == true) {
        ShowTimeoutMessage();
        return;
    }
    var result = false;
    var directory = $("#dir" + id).val();
    //    var lyear = $("#year" + id).val();
    //    var tyear = $("#yrTarget" + id).val();
    var sourceperiod = $("#sourceyear" + id).val();
    var targetperiod = $("#targetyear").val();
    alert("targetperiod:" + targetperiod);
    //$("#progressbar2").html("Procesing... <br/><small>note: your browser may look like not responding during this time.</small>");
    showMessage("info", "Processing... <br/><small>note: your browser may look like not responding during this time.</small>");
    setTimeout(function() {
        ExecLive2Shadow(1, directory, sourceperiod, targetperiod)
    }, 500);
}

function doLive2ShadowStep2(id) {
    if (koolajax.callback(CB_CheckTimeout("para1", "para2"), true) == true) {
        ShowTimeoutMessage();
        return;
    }
    var result = false;
    var directory = $("#dir" + id).val();
    var lyear = $("#year" + id).val();
    var tyear = $("#yrTarget" + id).val();
    setTimeout(function() {
        ExecLive2Shadow(2, directory, lyear, tyear)
    }, 500);
}

function ExecLive2Shadow(step, directory, sourceperiod, targetperiod) {
    var result = koolajax.callback(CB_PrepareShadowData(step, directory, sourceperiod, targetperiod));
    if (result == true) {
        //$("#progressbar2").text("Migration from Live to Shadow is Successful");
        showMessage("success", "<br>Migration from Live to Shadow is Successful.");
    }
    else {
        //$("#progressbar2").text("Migration failed. Verify your data.");
        showMessage("error", "<br>Migration failed. Verify your data.");
    }
}

function ShowTimeoutMessage() {
    alert("Your session has timed out. Please login again.");
    window.parent.location = "login.php";
}

/* COMMON UTILITY FUNCTIONS */
function phparray(a) {
    var a_php = "";
    var total = 0;
    for (var key in a) {
        ++total;
        a_php = a_php + "\"" + String(key) + "\":" + "\"" + String(a[key]) + "\",";
        //a_php = a_php + "s:" + String(key).length + ":\"" + String(key) + "\";s:" + String(a[key]).length + ":\"" + String(a[key]) + "\";";
    }
    //a_php = "a:" + total + ":{" + a_php + "}";
    a_php = "{" + a_php + "}";
    return a_php;
}

function dumpProps(obj, parent) {
    // Go through all the properties of the passed-in object 
    for (var i in obj) {
        // if a parent (2nd parameter) was passed in, then use that to 
        // build the message. Message includes i (the object's property name) 
        // then the object's property value on a new line
        //if (parent) { var msg = parent + "." + i + "\n" + obj[i]; } else {
        var msg = i + "\n" + obj[i];
        //}
        // Display the message. If the user clicks "OK", then continue. If they 
        // click "CANCEL" then quit this level of recursion 
        if (!confirm(msg)) {
            return;
        }
        // If this property (i) is an object, then recursively process the object 
        if (typeof obj[i] == "object") {
            if (parent) {
                dumpProps(obj[i], parent + "." + i);
            } else {
                dumpProps(obj[i], i);
            }
        }
    }
}

function GetWidth()
{
    var x = 0;
    if (self.innerHeight)
    {
        x = self.innerWidth;
    }
    else if (document.documentElement && document.documentElement.clientHeight)
    {
        x = document.documentElement.clientWidth;
    }
    else if (document.body)
    {
        x = document.body.clientWidth;
    }
    return x;
}

function GetHeight()
{
    var y = 0;
    if (self.innerHeight)
    {
        y = self.innerHeight;
    }
    else if (document.documentElement && document.documentElement.clientHeight)
    {
        y = document.documentElement.clientHeight;
    }
    else if (document.body)
    {
        y = document.body.clientHeight;
    }
    return y;
}


//----------------------------------------------------------------datagrid


var rowArray = new Array();
var rowPerPage = 9;
var maxPageNumber;
var tableLocation = "";
var titleList;
var localReply;
$(document).ready(function() {
    getGridData(1);
});
function next() {
    var lNumberOfPage = tableLocation + "CurrentPageNumber";

    tempCurrentPageNumber = $("#" + lNumberOfPage).val();
    tempCurrentPageNumber++;

    $("#" + lNumberOfPage).val(tempCurrentPageNumber);
    console.log("lNumberOfPage                 " + $("#" + lNumberOfPage).val());
    validationPageNumber(tempCurrentPageNumber);
}
function previous() {
    var lNumberOfPage = tableLocation + "CurrentPageNumber";
    tempCurrentPageNumber = $("#" + lNumberOfPage).val();
    tempCurrentPageNumber--;
    $("#" + lNumberOfPage).val(tempCurrentPageNumber);
    validationPageNumber(tempCurrentPageNumber);
}
function first() {
    tempCurrentPageNumber = 1;
    validationPageNumber(tempCurrentPageNumber);
}
function last() {
    currentPageNumber = maxPageNumber;
    validationPageNumber(currentPageNumber);
}

function validationPageNumber(tempCurrentPageNumber) {
    initialization();
    if (tempCurrentPageNumber < 0 || tempCurrentPageNumber > maxPageNumber)
    {
        tempCurrentPageNumber = 1;
    }

    getGridData(tempCurrentPageNumber);
}


function removeTableContent()
{
    var Node1 = document.getElementById(tableLocation);
    for (var i = 1; i <= rowPerPage; i++)
    {
        if (Node1.childNodes[i] !== null)
        {
            Node1.deleteRow(1);
        }
    }
}


function setCurrentPageNumber(currentPageNumber)
{
    var lNumberOfPage = tableLocation + "CurrentPageNumber";
    $("#" + lNumberOfPage).val(currentPageNumber);
    pageNavigationSettle(currentPageNumber);
}

function getGridData(pageNumber)
{
    $.ajax({
        type: "POST",
        url: "/administrator/view.php",
        dataType: "json",
        data: {"rowsPage": rowPerPage,
            "pageNum": pageNumber,
            "tableLocation": tableLocation},
        success: function(reply) {
            localReply = reply;
            tableLocation = localReply.tableLocation;
            setRowArray( );
            setCurrentPageNumber(reply.currentPageNumber);
            setMaxPageNum(reply.MaxPageNumber);

        }
    });

    return false;
}
function setMaxPageNum(MaxPageNum)
{
    var numberOfPage = tableLocation + "MaxPageNumber";
    maxPageNumber = MaxPageNum;
    $("#" + numberOfPage).html(maxPageNumber);
}

function initialization()
{
    var tablediv = document.getElementById(tableLocation);
    while (tablediv.firstChild) {
        tablediv.removeChild(tablediv.firstChild);
    }
}
function checkCurrentPage(currentPage) {
    if (currentPage === null || currentPage < 1)
    {
        currentPage = 1;
    }
    return currentPage;
}



function setRowArray()
{
    rowArray = new Array();
    rowArray[0] = localReply.col_headers;
    ;
    for (var i = 0; i < localReply.dataGrid.length; i++)
    {
        rowArray[i + 1] = localReply.dataGrid[i] + "&nbsp";
    }
    drawGUI();
}

function  drawGUI() {
    var tablediv = document.getElementById(tableLocation);

    var t = document.createElement('table');
    var caption = t.createCaption();
    caption.className = "datagrid_caption ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all";
    console.log(" localReply.MaxRows " + localReply.MaxRows);
    caption.innerHTML = "<span>" + localReply.MaxRows + " Clients found, Page " + localReply.currentPageNumber + " of 3</span>";
    t.cellSpacing = "0";
    t.className = "datagrid_table";

    for (var i = 0; i < rowArray.length; i++)
    {
        var header;
        var row = t.insertRow(i);
        var headerRow;
        if (i === 0) {
            header = t.createTHead();
            headerRow = header.insertRow(i);
        }
        var numberOfCols = rowArray[i].split(",");
        createTableContent(t, numberOfCols, headerRow, row, i);
    }

    addControllerRow(t, i);
    tablediv.appendChild(t);
}

function RowAddclickFunction(row, username) {

    row.ondblclick = function()
    {
        username = username.replace("&nbsp", "");
        $.ajax({
            type: "POST",
            url: "/dashboard/initialize-callbacks.php",
            dataType: "json",
            data: {action: "login", u: username},
            success: function(reply) {
                if (reply === "SUCCESS")
                {
                    new_window = window.open("/dashboard/");
                }
                else
                {
                    alert("something goes wrong    " + reply);
                }
            }
        });
    };
}

function editIconClickFunction(btton, username) {
    btton.onclick = function() {
        username = username.replace("&nbsp", "");

        $.ajax({
            type: "POST",
            url: "/dashboard/initialize-callbacks.php",
            dataType: "json",
            data: {action: "login", u: username},
            success: function(reply) {
                if (reply === "SUCCESS")
                {
                    new_window = window.open("/dashboard/");
                }
                else
                {
                    alert("something goes wrong    " + reply);
                }
            }
        });
    };
}

function createTableContent(t, numberOfCols, headerRow, row, i)
{

    for (var j = 0; j < numberOfCols.length; j++) {
        if (i === 0)
        {// build header row
            var headerCell = headerRow.insertCell(j);
            headerCell.innerHTML = numberOfCols[j].toString() + "&nbsp;";
            headerCell.className = "datagrid_header_row";
        }
        else {
            row.className = 'datagrid_row hoverClass';
            username = numberOfCols[4];
            RowAddclickFunction(row, username);
            var cell = row.insertCell(j);
            cell.innerHTML = "<a class=datagrid_link href=#>" + numberOfCols[j].toString() + "&nbsp;</a>";
            cell.className = "datagrid_cell";
            if (j === (numberOfCols.length - 1)) {//add Action column
                var cAction = row.insertCell(j + 1);
                var editButton = document.createElement('button');
                editButton.className = "ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only";
                editButton.innerHTML = "<i class='icon-edit'></i>Edit";
                editIconClickFunction(editButton, username);
                var deleteButton = document.createElement('button');
                deleteButton.className = "ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only";
                deleteButton.innerHTML = "<i class='icon-trash'></i>Delete";
                deleteClickFunction(t, deleteButton, i);
                cAction.appendChild(editButton);
                cAction.appendChild(deleteButton);
            }
        }

    }
}

function deleteClickFunction(t, button, i)
{
    button.onclick = function() {
        t.deleteRow(i);
    };

}


function addControllerRow(table, rowNum) {
    var row = table.insertRow(rowNum);
    row.className = 'datagrid_footer';
    var controller = row.insertCell(0);
    controller.colSpan = table.rows[0].cells.length;
    controller.innerHTML = "<a id='" + tableLocation + "first'  class = 'enlarge' href = '#' onclick = 'first();' > <i class = 'icon-fast-backward  ' > </i></a>&nbsp; \n\
                <a id='" + tableLocation + "previous' class = 'enlarge' href = '#'  onclick = 'previous();' > <i class = 'icon-step-backward  ' > </i></a>&nbsp;<span>\n\
                <input id='" + tableLocation + "CurrentPageNumber' type = 'text'  size = '2'>&nbsp; of &nbsp;</span> \n\
                <span id='" + tableLocation + "MaxPageNumber'></span>\n\ \n\
                <a id='" + tableLocation + "next' class ='enlarge' href = '#' onclick = 'next();'><i class = 'icon-step-forward  ' > </i></a> &nbsp;\n\
                <a id='" + tableLocation + "last'  class = 'enlarge' href = '#' onclick = 'last();' > <i class = 'icon-fast-forward  ' > </i></a ><button>Add</button>";
}

function pageNavigationSettle(pagenumber) {
    pagenumber = parseInt(pagenumber);
    if (pagenumber === 1)

    {

        disableFirstAndPrevious();
        releaseNextAndLast();
    }
    else if (pagenumber === maxPageNumber)
    {
        disableNextAndLast();
        releaseFirstAndPrevious();
    }
    else {
        releaseFirstAndPrevious();
        releaseNextAndLast();
    }

}
function  disableFirstAndPrevious() {
    var button_first = document.getElementById(tableLocation + 'first');
    var button_previous = document.getElementById(tableLocation + 'previous');
    button_first.className = "disabled";
    button_first.disable = true;
    button_first.onclick = "";
    button_previous.className = "disabled";
    button_previous.disable = true;
    button_previous.onclick = "";
}

function  disableNextAndLast() {
    var button_next = document.getElementById(tableLocation + 'next');
    var button_last = document.getElementById(tableLocation + 'last');
    button_next.className = "disabled";
    button_next.disable = true;
    button_next.onclick = "";
    button_last.className = "disabled";
    button_last.disable = true;
    button_next.onclick = "";
}
function releaseFirstAndPrevious()
{
    var button_first = document.getElementById(tableLocation + 'first');
    var button_previous = document.getElementById(tableLocation + 'previous');
    button_first.className = "enlarge";
    button_first.disable = false;
    button_previous.className = "enlarge";
    button_previous.disable = false;
}

function releaseNextAndLast()
{

    var button_next = document.getElementById(tableLocation + 'next');
    var button_last = document.getElementById(tableLocation + 'last');
    button_next.className = "enlarge";
    button_next.disable = false;
    button_last.className = "enlarge";
    button_last.disable = false;
}

function setRowClickFunction(row, username, password) {
    row.ondblclick = function()
    {
        $.ajax({
            type: "POST",
            url: "/dashboard/initialize-callbacks.php",
            dataType: "json",
            data: {action: "login", u: username, p: password},
            success: function(reply) {
                if (reply === "SUCCESS")
                {
                    new_window = window.open("/dashboard/");
                }
                else
                {
                    alert("something goes wrong");
                }
            }
        });
    };
}







