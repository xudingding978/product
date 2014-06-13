HubStar.LoginModalView = Ember.View.extend({
    templateName: 'loginModal',
    didInsertElement: function() {
        var that = this;
        $(document).ready(function() {
            if (localStorage.loginState === "login") {
                $('.Login-box #login-btn').text('Sign up for a new account!');
                $('.Login-box .black-tool-tip').css('display', 'none');
                $('.Login-box #click-register-social').css('display', 'none');
                $('.Login-box #click-register').css('display', 'none');
                $('.Login-box #social-link').css('display', 'none');
                $('.Login-box #user-forgot-password-pane').css('display', 'none');
                $('.Login-box #forgot-message-container').css('display', 'none');
                $('.Login-box #invalid-username').css('display', 'none');
                $('.Login-box #register-with-email-drop-down').css('display', 'none');
                $('.Login-box #register-with-email-step-2').css('display', 'none');
                $('.Login-box #register-with-email-step-3').css('display', 'none');
                $('.Login-box #user-login-pane').css('display', 'block');

                if (localStorage.userType === "email") {
                    $('.Login-box #login-with-email-drop-down').css('display', 'block');
                    $('.Login-box #social-login-container').css('display', 'none');
                    $('.Login-box #click-login').addClass('active-tab');
                    $('.Login-box #social-login').removeClass('social-active');
                    
                } else {
                    $('.Login-box #login-with-email-drop-down').css('display', 'none');
                    $('.Login-box #social-login-container').css('display', 'block');
                    $('.Login-box #click-login').removeClass('active-tab');
                    $('.Login-box #social-login').addClass('social-active');
                }

            }
            else {
                localStorage.loginState = "register";
                 setTimeout(function(){
               $("#first_name input").focus();  
            },1);
                if (localStorage.userType === "register_email") {
                    $('.Login-box #login-btn').text('Already have an account? Click here to Log in!');
                    $('.Login-box .black-tool-tip').css('display', 'none');
                    $('.Login-box #click-register-social').css('display', 'block');
                    $('.Login-box #social-link').css('display', 'block');
                    $('.Login-box #click-register').css('display', 'block');
                    $('.Login-box #click-register-social').removeClass('social-active');
                    $('.Login-box #click-register').addClass('active-tab');
                    $('.Login-box #register-with-email-drop-down').animate({height: 'toggle'});
                    $('.Login-box #user-login-pane').css('display', 'none');
                    that.checkSocial();
                }
            }
            $(".Login-box #social-login").click(function() {

                $('.Login-box #social-login').removeClass('social-active');
                $('.Login-box #click-login').removeClass('active-tab');
                if ($('.Login-box #social-login-container').css('display') === 'block') {
                    $('.Login-box #social-login-container').animate({height: 'toggle'});
                }
                /* LOGIN TAB:  hiding social login */

                if ($('.Login-box #social-login-container').css('display') === 'none') {
                    $('.Login-box #social-login-container').animate({height: 'toggle'});
                    $('.Login-box #social-login').addClass('social-active');
                    if ($('.Login-box #login-with-email-drop-down').css('display') === 'block') {
                        $('.Login-box #login-with-email-drop-down').animate({height: 'toggle'});
                    }
                    if ($('.Login-box #forgot-message-container').css('display') === 'block') {
                        $('.Login-box #forgot-message-container').animate({opacity: 'toggle'});
                    }
                    if ($('.Login-box #invalid-username').css('display') === 'block') {
                        $('.Login-box #invalid-username').animate({opacity: 'toggle'});
                    }
                    if ($('.Login-box #click-login').css('display') === 'none') {
                        $('.Login-box #click-login').animate({opacity: 'toggle'});
                    }
                    if ($('.Login-box #user-forgot-password-pane').css('display') === 'block') {
                        $('.Login-box #user-forgot-password-pane').animate({height: 'toggle'});
                    }

                    /* LOGIN TAB:  showing social login */

                }
            });
            $(".Login-box #click-login").click(function() {

                if ($('.Login-box #login-with-email-drop-down').css('display') === 'block' && $('#click-login').hasClass('active-tab')) {
                    $('.Login-box #click-login').removeClass('active-tab');

                    $('.Login-box #login-with-email-drop-down').animate({height: 'toggle'});

                    if ($('.Login-box #social-login-container').css('display') === 'block') {
                        $('.Login-box #social-login-container').animate({height: 'toggle'});
                      
                    }
                }
                /* LOGIN TAB: closing login with email */


                if ($('.Login-box #login-with-email-drop-down').css('display') === 'none') {
                    setTimeout(function(){
                        if (localStorage.userName !== undefined && localStorage.userName !== null && localStorage.userName !== "")
                        {
                            $("#loginPassword input").focus();
                        }
                        else {
                            $("#loginUsername input").focus();
                        }
                    },1);
                       
                    $('.Login-box #social-login').removeClass('social-active');
                    $('.Login-box #click-login').addClass('active-tab');
                    $('.Login-box #login-with-email-drop-down').animate({height: 'toggle'});

                    if ($('.Login-box #social-login-container').css('display') === 'block') {
                        $('.Login-box #social-login-container').animate({height: 'toggle'});
                    }
                } /* LOGIN TAB: clicking login*/
            });
            $('.Login-box #loginPassword > div').click(function() {

                if ($('.Login-box #login-with-email-drop-down').css('display')) {
                    $('.Login-box #click-login').removeClass('active-tab');

                    $('.Login-box #login-with-email-drop-down').animate({height: 'toggle'});
                    $('.Login-box #user-forgot-password-pane').animate({height: 'toggle'});

                    if ($('.Login-box #social-login-container').css('display') === 'block') {
                        $('.Login-box #social-login-container').animate({height: 'toggle'});

                    }
                    if ($('.Login-box #forgot-message-container').css('display') === 'block') {
                        $('.Login-box #forgot-message-container').animate({opacity: 'toggle'});
                    }
                    if ($('.Login-box #click-login').css('display') === 'block') {
                        $('.Login-box #click-login').animate({height: 'toggle'});
                        //        $('.Login-box #click-login').addClass('active-tab');

                    }
                }
            });
            /*  LOGIN TAB: show forget password pane */

            $('.Login-box #user-forgot-password-pane .back-btn').click(function() {
                $('.Login-box #user-forgot-password-pane').animate({height: 'toggle'});
                $('.Login-box #login-with-email-drop-down').animate({height: 'toggle'});
                $('.Login-box #click-login').css("display", "block");
                $('.Login-box #click-login').addClass('active-tab');
                if ($('.Login-box #social-login-container').css('display') === 'block') {
                    $('.Login-box #social-login-container').animate({height: 'toggle'});

                }


            });
            /* Back to login with email from forget password pane */


            $('.Login-box #reset-btn').click(function() {

            });
            /* forgot password function showing thank you message */


            $('.Login-box #user-forgot-password-pane .back-btn').click(function() {
                if ($('.Login-box #forgot-message-container').css('display') === 'block') {
                    $('.Login-box #forgot-message-container').animate({opacity: 'toggle'});
                }
            });
            /* hiding thank you message when the user clicks the back btn */


            $(".Login-box #click-register-social").click(function() {

                $('.Login-box #click-register-social').removeClass('social-active');
                $('.Login-box #click-register').removeClass('active-tab');
                if ($('.Login-box #social-link').css('display') === 'block') {
                    $('.Login-box #social-link').animate({height: 'toggle'});
                    if ($('.Login-box #register-with-email-drop-down').css('display') === 'block') {
                        $('.Login-box #register-with-email-drop-down').animate({height: 'toggle'});
                    }
                    if ($('.Login-box #register-with-email-step-2').css('display') === 'block') {
                        $('.Login-box #register-with-email-step-2').animate({height: 'toggle'});
                    }
                }
                /* hiding social login */

                if ($('.Login-box #social-link').css('display') === 'none') {
                    $('.Login-box #social-link').animate({height: 'toggle'});
                    $('.Login-box #click-register-social').addClass('social-active');
                    if ($('.Login-box #register-with-email-drop-down').css('display') === 'block') {
                        $('.Login-box #register-with-email-drop-down').animate({height: 'toggle'});
                    }
                    if ($('.Login-box #register-with-email-step-2').css('display') === 'block') {
                        $('.Login-box #register-with-email-step-2').animate({height: 'toggle'});
                    }
                }
                /*  Sign up for a new account! TAB: showing social login section*/

            });



            $('.Login-box #register-with-email-step-2 .back-btn').click(function() {
                $('.Login-box #register-with-email-step-2').removeClass('active-step');
                $('.Login-box #register-with-email-step-2').animate({height: 'toggle'});
                $('.Login-box #register-with-email-drop-down').animate({height: 'toggle'});
                that.checkSocial();
            });
            /* going back to step 1 function*/

            $(".Login-box .register-clicker").click(function() {
                setTimeout(function() {
                    $("#first_name input").focus();
                }, 1);
                if ($('.Login-box #register-with-email-step-2').hasClass('active-step')) {
                    //alert('closing step2');

                    $('.Login-box #social-link').animate({height: 'toggle'});
                    $('.Login-box #register-with-email-step-2').animate({height: 'toggle'});
                    if ($('.Login-box #click-register').hasClass('active-tab')) {
                        $('.Login-box #click-register').removeClass('active-tab');
                        /* closing step */
                    }

                    else {
                        $('.Login-box #click-register').addClass('active-tab');
                        /* opening step */
                    }

                }
                /* closing/opening register section while on step 2 function */

                if ($('.Login-box #register-with-email-drop-down').css('display') === 'block' && $('#click-register').hasClass('active-tab')) {
                    $('.Login-box #click-register').removeClass('active-tab');
                    $('.Login-box #social-link').animate({height: 'toggle'});
                    $('.Login-box #register-with-email-drop-down').animate({height: 'toggle'});
                    $('.Login-box #click-register-social').addClass('social-active');
                }
                /* closing register section while on step 1 function */


                if ($('.Login-box #register-with-email-drop-down').css('display') === 'none' && $('#register-with-email-step-2').hasClass('')) {
                    //alert('opening step 1');
                    $('.Login-box #click-register-social').removeClass('social-active');
                    $('.Login-box #click-register').addClass('active-tab');
                    $('.Login-box #register-with-email-drop-down').animate({height: 'toggle'});
                    if ($('.Login-box #social-link').css('display') === 'block') {
                        $('.Login-box #social-link').animate({height: 'toggle'});
                        $('.Login-box #social-link').css('display', 'none');
                    }
                    else {
                    }
                }
                /* clicking register step 1 function*/

            });

            /* close social login checker function */


            $('.Login-box .login-select').click(function() {
                $('.Login-box .login-select').removeClass('login-selected');
                $(this).addClass('login-selected');
            });
            /* select gender function */



        });


    },
    checkSocial: function() {
        if ($('.Login-box #social-link').css('display') === 'block') {
            $('.Login-box #social-link').animate({height: 'toggle'});
            $('.Login-box #social-link').css('display', 'none');
        }
        else {
        }
    },
    ctaregister: function() {
        $("#cta-popup").css("display", "none");
        $("#profiles-main-container").css("display", "block");
        localStorage.loginState = "register";
        $("#first_name input").focus();
        $('.Login-box #login-btn').text('Already have an account? Click here to Log in!');
        $('.Login-box .black-tool-tip').css('display', 'none');
        $('.Login-box #click-register-social').css('display', 'block');
        $('.Login-box #social-link').css('display', 'block');
        $('.Login-box #click-register').css('display', 'block');
        $('.Login-box #click-register-social').removeClass('social-active');
        $('.Login-box #click-register').addClass('active-tab');
        $('.Login-box #register-with-email-drop-down').animate({height: 'toggle'});
        $('.Login-box #user-login-pane').css('display', 'none');
         setTimeout(function(){
               $("#first_name input").focus();  
            },1);
        this.checkSocial();

    },
    ctalogin: function() {
        $("#cta-popup").css("display", "none");
        $("#profiles-main-container").css("display", "block");
        localStorage.loginState = "login";
        if (localStorage.userType === "email") {
            $('.Login-box #login-btn').text('Sign up for a new account!');
            $('.Login-box .black-tool-tip').css('display', 'none');
            $('.Login-box #click-register-social').css('display', 'none');
            $('.Login-box #click-register').css('display', 'none');
            $('.Login-box #social-link').css('display', 'none');
            $('.Login-box #login-with-email-drop-down').css('display', 'block');
            $('.Login-box #social-login-container').css('display', 'none');
            $('.Login-box #click-login').addClass('active-tab');
            $('.Login-box #social-login').removeClass('social-active');
            $('.Login-box #user-forgot-password-pane').css('display', 'none');
            $('.Login-box #forgot-message-container').css('display', 'none');
            $('.Login-box #invalid-username').css('display', 'none');
            $('.Login-box #register-with-email-drop-down').css('display', 'none');
            $('.Login-box #register-with-email-step-2').css('display', 'none');
            $('.Login-box #register-with-email-step-3').css('display', 'none');
            $('.Login-box #user-login-pane').css('display', 'block');
             if (localStorage.userName !== undefined && localStorage.userName !== null && localStorage.userName !== "")
                {
                    $("#loginPassword input").focus();
                }
                else {
                    $("#loginUsername input").focus();
                }

        } else {
            $('.Login-box #login-btn').text('Sign up for a new account!');
            $('.Login-box .black-tool-tip').css('display', 'none');
            $('.Login-box #click-register-social').css('display', 'none');
            $('.Login-box #click-register').css('display', 'none');
            $('.Login-box #social-link').css('display', 'none');
            $('.Login-box #login-with-email-drop-down').css('display', 'none');
            $('.Login-box #social-login-container').css('display', 'block');
            $('.Login-box #click-login').removeClass('active-tab');
            $('.Login-box #social-login').addClass('social-active');
            $('.Login-box #user-forgot-password-pane').css('display', 'none');
            $('.Login-box #forgot-message-container').css('display', 'none');
            $('.Login-box #invalid-username').css('display', 'none');
            $('.Login-box #register-with-email-drop-down').css('display', 'none');
            $('.Login-box #register-with-email-step-2').css('display', 'none');
            $('.Login-box #register-with-email-step-3').css('display', 'none');
            $('.Login-box #user-login-pane').css('display', 'block');

        }

    },
    loginPane: function() {
        if (localStorage.loginState === "login") {

            $('.Login-box #login-btn').text('Already have an account? Click here to Log in!');
            $('.Login-box .black-tool-tip').css('display', 'none');
            $('.Login-box #click-register-social').css('display', 'block');
            $('.Login-box #social-link').css('display', 'block');
            $('.Login-box #click-register').css('display', 'block');
            $('.Login-box #click-register-social').addClass('social-active');
            $('.Login-box #click-register').removeClass('active-tab');
            $('.Login-box #register-with-email-step-2').removeClass('active-step');
            $('.Login-box #user-login-pane').css('display', 'none');
            setTimeout(function(){
               $("#first_name input").focus();  
            },1);
           
            localStorage.loginState = "register";

        }
        else if (localStorage.loginState === "register") {
            localStorage.loginState = "login";
            if (localStorage.userType === "email") {

                $('.Login-box #login-btn').text('Sign up for a new account!');
                $('.Login-box .black-tool-tip').css('display', 'none');
                $('.Login-box #click-register-social').css('display', 'none');
                $('.Login-box #click-register').css('display', 'none');
                $('.Login-box #social-link').css('display', 'none');
                $('.Login-box #login-with-email-drop-down').css('display', 'block');
                $('.Login-box #social-login-container').css('display', 'none');
                $('.Login-box #click-login').addClass('active-tab');
                $('.Login-box #social-login').removeClass('social-active');
                $('.Login-box #user-forgot-password-pane').css('display', 'none');
                $('.Login-box #forgot-message-container').css('display', 'none');
                $('.Login-box #invalid-username').css('display', 'none');
                $('.Login-box #register-with-email-drop-down').css('display', 'none');
                $('.Login-box #register-with-email-step-2').css('display', 'none');
                $('.Login-box #register-with-email-step-3').css('display', 'none');
                $('.Login-box #user-login-pane').css('display', 'block');
                if (localStorage.userName !== undefined && localStorage.userName !== null && localStorage.userName !== "")
                {
                    $("#loginPassword input").focus();
                }
                else {
                    $("#loginUsername input").focus();
                }
            } else {

                $('.Login-box #login-btn').text('Sign up for a new account!');
                $('.Login-box .black-tool-tip').css('display', 'none');
                $('.Login-box #click-register-social').css('display', 'none');
                $('.Login-box #click-register').css('display', 'none');
                $('.Login-box #social-link').css('display', 'none');
                $('.Login-box #login-with-email-drop-down').css('display', 'none');
                $('.Login-box #social-login-container').css('display', 'block');
                $('.Login-box #click-login').removeClass('active-tab');
                $('.Login-box #social-login').addClass('social-active');
                $('.Login-box #user-forgot-password-pane').css('display', 'none');
                $('.Login-box #forgot-message-container').css('display', 'none');
                $('.Login-box #invalid-username').css('display', 'none');
                $('.Login-box #register-with-email-drop-down').css('display', 'none');
                $('.Login-box #register-with-email-step-2').css('display', 'none');
                $('.Login-box #register-with-email-step-3').css('display', 'none');
                $('.Login-box #user-login-pane').css('display', 'block');

            }
        }
    },
    closePane: function() {
        //   this.get("controller").get("controllers.mega").closeWindow();
        //    $("#body_id").css("overflow","auto");
        HubStar.set('checkLoginStatus', false);
    }
    ,
    Facebook: function() {
        var left = (screen.width / 2) - (650 / 2);
        var top = (screen.height / 2) - (400 / 2);
        var api_url = "http://" + document.domain + "/hybridauth/default/login/?provider=Facebook#_=_";
        var newwindow = window.open(api_url, 'name', 'height=' + 400 + ',width=' + 650 + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');
        if (window.focus) {
            newwindow.focus();
        }
        localStorage.userType = "facebook";
    },
    Yahoo: function() {
        var left = (screen.width / 2) - (650 / 2);
        var top = (screen.height / 2) - (400 / 2);
        var api_url = "http://" + document.domain + "/hybridauth/default/login/?provider=Yahoo";
        var newwindow = window.open(api_url, 'name', 'height=' + 400 + ',width=' + 650 + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');
        if (window.focus) {
            newwindow.focus();
        }
        localStorage.userType = "yahoo";
    },
    Twitter: function() {
        var left = (screen.width / 2) - (650 / 2);
        var top = (screen.height / 2) - (400 / 2);
        var api_url = "http://" + document.domain + "/hybridauth/default/login/?provider=Twitter";
        var newwindow = window.open(api_url, 'name', 'height=' + 400 + ',width=' + 650 + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');
        if (window.focus) {
            newwindow.focus();
        }
        localStorage.userType = "twitter";
    },
    Sina: function() {
        var left = (screen.width / 2) - (650 / 2);
        var top = (screen.height / 2) - (400 / 2);
        var api_url = "http://" + document.domain + "/hybridauth/default/login/?provider=Sina";
        var newwindow = window.open(api_url, 'name', 'height=' + 400 + ',width=' + 650 + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');
        if (window.focus) {
            newwindow.focus();
        }
        localStorage.userType = "sina";
    },
    LinkedIn: function() {
        var left = (screen.width / 2) - (650 / 2);
        var top = (screen.height / 2) - (400 / 2);
        var api_url = "http://" + document.domain + "/hybridauth/default/login/?provider=LinkedIn";
        var newwindow = window.open(api_url, 'name', 'height=' + 400 + ',width=' + 650 + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');
        if (window.focus) {
            newwindow.focus();
        }
        localStorage.userType = "linkedIn";
    },
    Google: function() {
        var left = (screen.width / 2) - (650 / 2);
        var top = (screen.height / 2) - (400 / 2);
        var api_url = "http://" + document.domain + "/hybridauth/default/login/?provider=Google";
        var newwindow = window.open(api_url, 'name', 'height=' + 400 * 1.5 + ',width=' + 650 + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');
        if (window.focus) {
            newwindow.focus();
        }
        localStorage.userType = "google";
    }
});

