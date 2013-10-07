/* NOTE:************
 * 
 *   IF THIS BEHAVES ODDLY SIMPLY REMOVE/ADD "stop()" before all the animate functions EG
 *   $('#register-with-email-drop-down').stop().animate({height: 'toggle'});
 *   This javascript will need to be cleaned up via setting some of the elements as preset variables etc, once 100% tested.
 */

var loginState = false;
$("#social-login").click(function() {

    $('#social-login').removeClass('social-active');
    $('#click-login').removeClass('active-tab');
    if ($('#social-login-container').css('display') === 'block') {
        $('#social-login-container').animate({height: 'toggle'});
    }
    /* LOGIN TAB:  hiding social login */

    if ($('#social-login-container').css('display') === 'none') {
        $('#social-login-container').animate({height: 'toggle'});
        $('#social-login').addClass('social-active');
        if ($('#login-with-email-drop-down').css('display') === 'block') {
            $('#login-with-email-drop-down').animate({height: 'toggle'});
        }
        if ($('#forgot-message-container').css('display') === 'block') {
            $('#forgot-message-container').animate({opacity: 'toggle'});
        }
         if ($('#invalid-username').css('display') === 'block') {
            $('#invalid-username').animate({opacity: 'toggle'});
        }
        if ($('#click-login').css('display') === 'none') {
            $('#click-login').animate({opacity: 'toggle'});
        }
        if ($('#user-forgot-password-pane').css('display') === 'block') {
            $('#user-forgot-password-pane').animate({height: 'toggle'});
        }

        /* LOGIN TAB:  showing social login */

    }
});
$("#click-login").click(function() {
    if ($('#login-with-email-drop-down').css('display') === 'block' && $('#click-login').hasClass('active-tab')) {
        $('#click-login').removeClass('active-tab');

        $('#login-with-email-drop-down').animate({height: 'toggle'});

        if ($('#social-login-container').css('display') === 'block') {
            $('#social-login-container').animate({height: 'toggle'});
        }
    }
    /* LOGIN TAB: closing login with email */


    if ($('#login-with-email-drop-down').css('display') === 'none') {
        $('#social-login').removeClass('social-active');
        $('#click-login').addClass('active-tab');
        $('#login-with-email-drop-down').animate({height: 'toggle'});

        if ($('#social-login-container').css('display') === 'block') {
            $('#social-login-container').animate({height: 'toggle'});
        }
    } /* LOGIN TAB: clicking login*/
});
$('#loginPassword > div').click(function() {
    if ($('#login-with-email-drop-down').css('display')) {
        $('#click-login').removeClass('active-tab');

        $('#login-with-email-drop-down').animate({height: 'toggle'});
        $('#user-forgot-password-pane').animate({height: 'toggle'});

        if ($('#social-login-container').css('display') === 'block') {
            $('#social-login-container').animate({height: 'toggle'});

        }
        if ($('#forgot-message-container').css('display') === 'block') {
            $('#forgot-message-container').animate({opacity: 'toggle'});
        }
        if ($('#click-login').css('display') === 'block') {
            $('#click-login').animate({height: 'toggle'});

        }
    }
});
/*  LOGIN TAB: show forget password pane */

$('#user-forgot-password-pane .back-btn').click(function() {
    $('#user-forgot-password-pane').animate({height: 'toggle'});
    $('#login-with-email-drop-down').animate({height: 'toggle'});

    if ($('#social-login-container').css('display') === 'block') {
        $('#social-login-container').animate({height: 'toggle'});

    }


});
/* Back to login with email from forget password pane */


$('#reset-btn').click(function() {
   
});
/* forgot password function showing thank you message */


$('#user-forgot-password-pane .back-btn').click(function() {
    if ($('#forgot-message-container').css('display') === 'block') {
        $('#forgot-message-container').animate({opacity: 'toggle'});
    }
});
/* hiding thank you message when the user clicks the back btn */






$("#click-register-social").click(function() {

    $('#click-register-social').removeClass('social-active');
    $('#click-register').removeClass('active-tab');
    if ($('#social-link').css('display') === 'block') {
        $('#social-link').animate({height: 'toggle'});
        if ($('#register-with-email-drop-down').css('display') === 'block') {
            $('#register-with-email-drop-down').animate({height: 'toggle'});
        }
        if ($('#register-with-email-step-2').css('display') === 'block') {
            $('#register-with-email-step-2').animate({height: 'toggle'});
        }
    }
    /* hiding social login */

    if ($('#social-link').css('display') === 'none') {
        $('#social-link').animate({height: 'toggle'});
        $('#click-register-social').addClass('social-active');
        if ($('#register-with-email-drop-down').css('display') === 'block') {
            $('#register-with-email-drop-down').animate({height: 'toggle'});
        }
        if ($('#register-with-email-step-2').css('display') === 'block') {
            $('#register-with-email-step-2').animate({height: 'toggle'});
        }
    }
    /*  REGISTER TAB: showing social login section*/

});



$('#register-with-email-step-2 .back-btn').click(function() {
    $('#register-with-email-step-2').removeClass('active-step');
    $('#register-with-email-step-2').animate({height: 'toggle'});
    $('#register-with-email-drop-down').animate({height: 'toggle'});
    checkSocial();
});
/* going back to step 1 function*/


$(".register-clicker").click(function() {

    if ($('#register-with-email-step-2').hasClass('active-step')) {
        //alert('closing step2');

        $('#social-link').animate({height: 'toggle'});
        $('#register-with-email-step-2').animate({height: 'toggle'});
        if ($('#click-register').hasClass('active-tab')) {
            $('#click-register').removeClass('active-tab');
            /* closing step */
        }

        else {
            $('#click-register').addClass('active-tab');
            /* opening step */
        }

    }
    /* closing/opening register section while on step 2 function */

    if ($('#register-with-email-drop-down').css('display') === 'block' && $('#click-register').hasClass('active-tab')) {
        //alert('closing step1');
        $('#click-register').removeClass('active-tab');
        $('#social-link').animate({height: 'toggle'});
        $('#register-with-email-drop-down').animate({height: 'toggle'});
        $('#click-register-social').addClass('social-active');
    }
    /* closing register section while on step 1 function */


    if ($('#register-with-email-drop-down').css('display') === 'none' && $('#register-with-email-step-2').hasClass('')) {
        //alert('opening step 1');
        $('#click-register-social').removeClass('social-active');
        $('#click-register').addClass('active-tab');
        $('#register-with-email-drop-down').animate({height: 'toggle'});
        checkSocial();
    }
    /* clicking register step 1 function*/

});


window.onload = changeImage(); 
function changeImage() {
    var image = document.getElementById('fadein-image');
     $('#fadein-image').fadeIn("slow",function(){
              setTimeout(function() {
                   $('#fadein-image').fadeOut("slow",toImage2);
            }, 1800);
    
        });
    function toImage2() {
        image.src = "../../../images/landing-page-title(IDEAS).png";
        $('#fadein-image').fadeIn("slow",function(){
             setTimeout(function() {
                   $('#fadein-image').fadeOut("slow",toImage3);
            }, 1800);
         
      //      setTimeout(toImage3,5000);
        });
        
    }
     function toImage3() {
        image.src = "../../../images/landing-page-title(PRODUCTS).png";
       
        $('#fadein-image').fadeIn("slow",function(){
              setTimeout(function() {
                   $('#fadein-image').fadeOut("slow",toImage4);
            }, 1800);
        
        });
    }
     function toImage4() {
        image.src = "../../../images/landing-page-title(SERVICES).png";
      
        $('#fadein-image').fadeIn("slow",function(){
              setTimeout(function() {
                   $('#fadein-image').fadeOut("slow",toImage1);
            }, 1800);
      
        });
    }
    function toImage1() {
    image.src = "../../../images/landing-trends.png";
       
        $('#fadein-image').fadeIn("slow",function(){
              setTimeout(function() {
                   $('#fadein-image').fadeOut("slow",toImage2);
            }, 1800);
            
          //  setTimeout(toImage2,5000);
        });
    } 
  
   //  setTimeout(toImage2,5000);
}
 /* ideas, products, services img animation*/



function checkSocial() {
    if ($('#social-link').css('display') === 'block') {
        $('#social-link').animate({height: 'toggle'});
    }
    else {
    }
}
/* close social login checker function */


$('.login-select').click(function() {
    $('.login-select').removeClass('login-selected');
    $(this).addClass('login-selected');
});
/* select gender function */


function loginPane() {

    if (loginState === false) {
        $('#login-btn').text('REGISTER');
        $('.black-tool-tip').css('display', 'none');
        $('#click-register-social').css('display', 'none');
        $('#click-register').css('display', 'none');
        $('#social-link').css('display', 'none');
        $('#login-with-email-drop-down').css('display', 'block');
        $('#social-login-container').css('display', 'none');
        $('#click-login').addClass('active-tab');
        $('#social-login').removeClass('social-active');
        $('#user-forgot-password-pane').css('display', 'none');
        $('#forgot-message-container').css('display', 'none');
        $('#invalid-username').css('display', 'none');

        $('#register-with-email-drop-down').css('display', 'none');
        $('#register-with-email-step-2').css('display', 'none');
        $('#user-login-pane').css('display', 'block');
        loginState = true;
    }
    else {

        $('#login-btn').text('LOGIN');
        $('.black-tool-tip').css('display', 'none');
        $('#click-register-social').css('display', 'block');
        $('#social-link').css('display', 'block');
        $('#click-register').css('display', 'block');
        $('#click-register-social').addClass('social-active');
        $('#click-register').removeClass('active-tab');
        $('#register-with-email-step-2').removeClass('active-step');
        $('#user-login-pane').css('display', 'none');
        
        loginState = false;
    }
}












function DropDown(el) {
    this.dd = el;
    this.placeholder = this.dd.children('span');
    this.opts = this.dd.find('ul.dropdown > li');
    this.val = '';
    this.index = -1;
    this.initEvents();
}
DropDown.prototype = {
    initEvents: function() {
        var obj = this;

        obj.dd.on('click', function(event) {
            $(this).parents('div .wrapper-dropdown-3').toggleClass('active');
            return false;
        });
        obj.opts.on('click', function() {
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
        });
    },
    getValue: function() {
        return this.val;
    },
    getIndex: function() {
        return this.index;
    }
};

$(function() {

    var dd3 = new DropDown($('.dropdown_test_3'));
    $(document).click(function() {
        $('.wrapper-dropdown-3').removeClass('active');
    });

});

function setDomain() {

    var api_url = document.domain;
    var api_domain_start_pos = api_url.indexOf('.');
    var api_url = api_url.slice(api_domain_start_pos);

    return api_url;
}


function Facebook(popupWidth, popupHeight) {

    var left = (screen.width / 2) - (popupWidth / 2);
    var top = (screen.height / 2) - (popupHeight / 2);
    var api_url = "http://" + document.domain + "/hybridauth/default/login/?provider=Facebook#_=_";
    newwindow = window.open(api_url, 'name', 'height=' + popupHeight + ',width=' + popupWidth + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');
    if (window.focus) {
        newwindow.focus();
    }



}
function Yahoo(popupWidth, popupHeight) {
    var left = (screen.width / 2) - (popupWidth / 2);
    var top = (screen.height / 2) - (popupHeight / 2);
    var api_url = "http://" + document.domain + "/hybridauth/default/login/?provider=Yahoo";
    newwindow = window.open(api_url, 'name', 'height=' + popupHeight + ',width=' + popupWidth + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');
    if (window.focus) {
        newwindow.focus();
    }
}
function QQ(popupWidth, popupHeight) {
    var left = (screen.width / 2) - (popupWidth / 2);
    var top = (screen.height / 2) - (popupHeight / 2);
    var api_url = "http://" + document.domain + "/hybridauth/default/login/?provider=QQ";
    newwindow = window.open(api_url, 'name', 'height=' + popupHeight + ',width=' + popupWidth + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');
    if (window.focus) {
        newwindow.focus();
    }
}
function Twitter(popupWidth, popupHeight) {
    var left = (screen.width / 2) - (popupWidth / 2);
    var top = (screen.height / 2) - (popupHeight / 2);
    var api_url = "http://" + document.domain + "/hybridauth/default/login/?provider=Twitter";
    newwindow = window.open(api_url, 'name', 'height=' + popupHeight + ',width=' + popupWidth + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');
    if (window.focus) {
        newwindow.focus();
    }
}
function Sina(popupWidth, popupHeight) {
    var left = (screen.width / 2) - (popupWidth / 2);
    var top = (screen.height / 2) - (popupHeight / 2);
    var api_url = "http://" + document.domain + "/hybridauth/default/login/?provider=Sina";
    newwindow = window.open(api_url, 'name', 'height=' + popupHeight + ',width=' + popupWidth + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');
    if (window.focus) {
        newwindow.focus();
    }
}
function LinkedIn(popupWidth, popupHeight) {
    var left = (screen.width / 2) - (popupWidth / 2);
    var top = (screen.height / 2) - (popupHeight / 2);
    var api_url = "http://" + document.domain + "/hybridauth/default/login/?provider=LinkedIn";
    newwindow = window.open(api_url, 'name', 'height=' + popupHeight + ',width=' + popupWidth + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');
    if (window.focus) {
        newwindow.focus();
    }
}
function Google(popupWidth, popupHeight) {
    var left = (screen.width / 2) - (popupWidth / 2);
    var top = (screen.height / 2) - (popupHeight / 2);
    var api_url = "http://" + document.domain + "/hybridauth/default/login/?provider=Google";
    newwindow = window.open(api_url, 'name', 'height=' + popupHeight * 1.5 + ',width=' + popupWidth + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');
    if (window.focus) {
        newwindow.focus();
    }
}
