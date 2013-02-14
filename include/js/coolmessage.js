
var myMessages = ['info', 'warning', 'error', 'success']; // define the messages types		 
function hideAllMessages()
{
    var messagesHeights = new Array(); // this array will store height for each

    for (i = 0; i < myMessages.length; i++)
    {
        messagesHeights[i] = $('.' + myMessages[i]).outerHeight();

        if (messagesHeights[i] != 0 && messagesHeights[i] != null) {

            $('.' + myMessages[i]).css('top', -messagesHeights[i]); //move element outside viewport
            $('.' + myMessages[i]).css('display', '');
            $('.' + myMessages[i]).css('display', '');

        } else {

            $('.' + myMessages[i]).css('top', -50); //move element outside viewport 

        }
    }
}

function hideMessage(type) {
    var messagesHeights = new Array(); // this array will store height for each 
    $('.' + type).css('top', -$('.' + type).outerHeight()); //move element outside viewport	

}

function showMessage(type, message)
{
    hideAllMessages();
    falldownMessage = document.getElementById(type);
    falldownMessage.innerHTML = "<center>" + message + "</center>";
    $('.' + type).animate({
        top: ""
    }, 500);
    setTimeout(function() {
        $('.' + type).fadeOut();
    }, 5000);
}

$(document).ready(function() {

    hideAllMessages();

});
function createDivs()
{

    var _body = document.body;

    var _divinfo = document.createElement('div');
    var _diverror = document.createElement('div');
    var _divwarning = document.createElement('div');
    var _divsuccess = document.createElement('div');
    //Div Info 
    _divinfo.setAttribute('id', "info");
    _divinfo.setAttribute('class', "info message");
    _divinfo.innerHTML = "<h3><center></center></h3>";
    //_divinfo.style.visibility = 'hidden'; 
    _body.appendChild(_divinfo);
    //Div Error 
    _diverror.setAttribute('id', "error");
    _diverror.setAttribute('class', "error message");
    _diverror.innerHTML = "<h3><center></center></h3>";
    //_diverror.style.visibility = 'hidden'; 
    _body.appendChild(_diverror);
    //Div Warning 
    _divwarning.setAttribute('id', "warning");
    _divwarning.setAttribute('class', "warning message");
    _divwarning.innerHTML = "<h3><center></center></h3>";
    //_divwarning.style.visibility = 'hidden'; 
    _body.appendChild(_divwarning);
    //Div Success 
    _divsuccess.setAttribute('id', "success");
    _divsuccess.setAttribute('class', "success message");
    _divsuccess.innerHTML = "<h3><center></center></h3>";
    //_divsuccess.style.visibility = 'hidden'; 
    _body.appendChild(_divsuccess);
    _body.appendChild(_divinfo);
    hideAllMessages();



// showMessage('info','Info notification message');
}

window.onload = createDivs;

