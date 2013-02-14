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
        var result = koolajax.callback(DoTPLLogin($("#login_username").val(), $("#login_password").val()),asyncronusCallback);
//        if (result === 'success') { //superadmin
//            console.log(result);
//            var name = result['fname'] + " " + result['lname'];
//            var ret = koolajax.callback(CB_LogonSuccessful(result['sessid'], result['uid'], result['role'], $("#login_username").val(), name, result['fgid'], result['ddir'], result['dyear']));
//            
//            if (ret) {
//                window.parent.location = "index.php";
//                localStorage.user_data = JSON.stringify(result);
//            }
//        } else if (result['role'] == 0) {
//            showMessage('warning', 'Invalid Username or Password. Please re-check your login details and try again.');
//        } else {
//            showMessage('error', 'Username and Password fields are required. Please enter your login details.');
//        }
    });
});




function DoReLogin()
{	

    if(checkEmail(username))
    {
        koolajax.callback(DoTPLLogin(username,password),asyncronusCallback);         
    }
    else 
    {
        $("#errormsg").html("Please enter a valid email address.");
    }

}
function asyncronusCallback(result)
{                        
    if (result === "SUCCESS") {                          
        window.parent.location='/dashboard/';                             
    } else if (result['role'] == 0) {
        showMessage('warning', 'Invalid Username or Password. Please re-check your login details and try again.');
    } else {
        showMessage('error', 'Username and Password fields are required. Please enter your login details.');
        document.getElementById("errormsg").innerHTML = "&nbsp;</br><b>Invalid user name or password.  Please try again.</b></br><i>(Please note: Both fields are case sensitive)</i></br>&nbsp;";
    }
}

function checkEmail(emailadd) {
    var email = emailadd;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email)) {               
        return false;
    }else{
        return true;
    }
    
}


