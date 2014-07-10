HubStar.CallToActionView = Ember.View.extend({
    templateName: 'callToAction',
    didInsertElement: function() {
 
    },
            ctaregister: function() {
        HubStar.set("loginModal", true);
        $(document).ready(function() {
            setTimeout(function() {
                localStorage.loginState = "register";

                $('.Login-box #login-btn').text('Already have an account? Click here to Log in!');
                $('.Login-box .black-tool-tip').css('display', 'none');
                $('.Login-box #click-register-social').css('display', 'block');
                $('.Login-box #social-link').css('display', 'block');
                $('.Login-box #click-register').css('display', 'block');
                $('.Login-box #click-register-social').removeClass('social-active');
                $('.Login-box #click-register').addClass('active-tab');
                $('.Login-box #register-with-email-drop-down').animate({height: 'toggle'});
                $('.Login-box #user-login-pane').css('display', 'none');
                if ($('.Login-box #social-link').css('display') === 'block') {
                    $('.Login-box #social-link').animate({height: 'toggle'});
                    $('.Login-box #social-link').css('display', 'none');
                }
                else {
                }

                setTimeout(function() {
                    $("#first_name input").focus();
                }, 1);
            }, 1);

        });
    },
    ctalogin: function() {
        HubStar.set("loginModal", true);
        $(document).ready(function() {
            setTimeout(function() {
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
                    $("#first_name input").focus();
                }
            }, 1);
        });

    }
    
});
