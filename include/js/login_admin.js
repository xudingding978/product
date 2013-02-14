$(document).ready(function($) {
    $("#loginbtn").button();
});

function searchKeyPress(e)
{
    // look for window.event in case event isn't passed in
    if (window.event) {
        e = window.event;
    }
    if (e.keyCode === 13)
    {
        $("#loginbtn").click();
    }
}

$(function() {
    $("#loginbtn").click(function() {
        var result = koolajax.callback(CB_NewLogon($("#login_username").val(), $("#login_password").val()));
        if (result === 'success') { //superadmin
            console.log(result);
            var name = result['fname'] + " " + result['lname'];
            var ret = koolajax.callback(CB_LogonSuccessful(result['sessid'], result['uid'], result['role'], $("#login_username").val(), name, result['fgid'], result['ddir'], result['dyear']));
            
            if (ret) {
                window.parent.location = "/administrator/";
                localStorage.user_data = JSON.stringify(result);
            }
//        } else if (result['role'] == 0) {
//            showMessage('warning', 'Invalid Username or Password. Please re-check your login details and try again.');
//        } else {
        } else {
            showMessage('error', result);
        }
    });
});

function asyncronusCallback(result)
{      
    if (result=="SUCCESS") 
    {                          
        window.parent.location='/administrator/';  
    }
    else
    {  
        document.getElementById("errormsg").innerHTML = "&nbsp;</br><b>Invalid user name or password.  Please try again.</b></br><i>(Please note: Both fields are case sensitive)</i></br>&nbsp;";
    }
}

