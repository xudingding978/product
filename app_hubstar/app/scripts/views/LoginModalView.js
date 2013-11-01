HubStar.LoginModalView = Ember.View.extend({
    templateName: 'loginModal',
    didInsertElement: function() {

        $("#loginModal").on("click", function() {
            HubStar.set('checkLoginStatus', false);

        });

  
  $('.t-style-box .black-tool-tip').css('display', 'none');
        $('.t-style-box #click-register-social').css('display', 'none');
        $('.t-style-box #click-register').css('display', 'none');
        $('.t-style-box #social-link').css('display', 'none');
        $('.t-style-box #login-with-email-drop-down').css('display', 'block');
        $('.t-style-box #social-login-container').css('display', 'none');
        $('.t-style-box #click-login').addClass('active-tab');
        $('.t-style-box #social-login').removeClass('social-active');
        $('.t-style-box #user-forgot-password-pane').css('display', 'none');
        $('.t-style-box #forgot-message-container').css('display', 'none');
        $('.t-style-box #invalid-username').css('display', 'none');

        $('.t-style-box #register-with-email-drop-down').css('display', 'none');
        $('.t-style-box #register-with-email-step-2').css('display', 'none');
        $('.t-style-box #user-login-pane').css('display', 'block');
  
  
  
                $(".t-style-box #social-login").click(function() {

                    $('.t-style-box #social-login').removeClass('social-active');
                    $('.t-style-box #click-login').removeClass('active-tab');
                    if ($('.t-style-box #social-login-container').css('display') === 'block') {
                        $('.t-style-box #social-login-container').animate({height: 'toggle'});
                    }
                    /* LOGIN TAB:  hiding social login */

                    if ($('.t-style-box #social-login-container').css('display') === 'none') {
                        $('.t-style-box #social-login-container').animate({height: 'toggle'}); 
                        $('.t-style-box #social-login').addClass('social-active');
                        if ($('.t-style-box #login-with-email-drop-down').css('display') === 'block') {
                            $('.t-style-box #login-with-email-drop-down').animate({height: 'toggle'});
                        }
                        if ($('.t-style-box #forgot-message-container').css('display') === 'block') {
                            $('.t-style-box #forgot-message-container').animate({opacity: 'toggle'});
                        }
                        if ($('.t-style-box #invalid-username').css('display') === 'block') {
                            $('.t-style-box #invalid-username').animate({opacity: 'toggle'});
                        }
                        if ($('.t-style-box #click-login').css('display') === 'none') {
                            $('.t-style-box #click-login').animate({opacity: 'toggle'});
                        }
                        if ($('.t-style-box #user-forgot-password-pane').css('display') === 'block') {
                            $('.t-style-box #user-forgot-password-pane').animate({height: 'toggle'});
                        }

                        /* LOGIN TAB:  showing social login */

                    }
                });
                $(".t-style-box #click-login").click(function() {
                    if ($('.t-style-box #login-with-email-drop-down').css('display') === 'block' && $('#click-login').hasClass('active-tab')) {
                        $('.t-style-box #click-login').removeClass('active-tab');

                        $('.t-style-box #login-with-email-drop-down').animate({height: 'toggle'});

                        if ($('.t-style-box #social-login-container').css('display') === 'block') {
                            $('.t-style-box #social-login-container').animate({height: 'toggle'});
                        }
                    }
                    /* LOGIN TAB: closing login with email */


                    if ($('.t-style-box #login-with-email-drop-down').css('display') === 'none') {
                        $('.t-style-box #social-login').removeClass('social-active');
                        $('.t-style-box #click-login').addClass('active-tab');
                        $('.t-style-box #login-with-email-drop-down').animate({height: 'toggle'});

                        if ($('.t-style-box #social-login-container').css('display') === 'block') {
                            $('.t-style-box #social-login-container').animate({height: 'toggle'});
                        }
                    } /* LOGIN TAB: clicking login*/
                });
                $('.t-style-box #loginPassword > div').click(function() {
                    if ($('.t-style-box #login-with-email-drop-down').css('display')) {
                        $('.t-style-box #click-login').removeClass('active-tab');

                        $('.t-style-box #login-with-email-drop-down').animate({height: 'toggle'});
                        $('.t-style-box #user-forgot-password-pane').animate({height: 'toggle'});

                        if ($('.t-style-box #social-login-container').css('display') === 'block') {
                            $('.t-style-box #social-login-container').animate({height: 'toggle'});

                        }
                        if ($('.t-style-box #forgot-message-container').css('display') === 'block') {
                            $('.t-style-box #forgot-message-container').animate({opacity: 'toggle'});
                        }
                        if ($('.t-style-box #click-login').css('display') === 'block') {
                            $('.t-style-box #click-login').animate({height: 'toggle'});

                        }
                    }
                });
                /*  LOGIN TAB: show forget password pane */

                $('.t-style-box #user-forgot-password-pane .back-btn').click(function() {
                    $('.t-style-box #user-forgot-password-pane').animate({height: 'toggle'});
                    $('.t-style-box #login-with-email-drop-down').animate({height: 'toggle'});

                    if ($('.t-style-box #social-login-container').css('display') === 'block') {
                        $('.t-style-box #social-login-container').animate({height: 'toggle'});

                    }


                });
                /* Back to login with email from forget password pane */


                $('.t-style-box #reset-btn').click(function() {

                });
                /* forgot password function showing thank you message */


                $('.t-style-box #user-forgot-password-pane .back-btn').click(function() {
                    if ($('.t-style-box #forgot-message-container').css('display') === 'block') {
                        $('.t-style-box #forgot-message-container').animate({opacity: 'toggle'});
                    }
                });
                /* hiding thank you message when the user clicks the back btn */






                $(".t-style-box #click-register-social").click(function() {

                    $('.t-style-box #click-register-social').removeClass('social-active');
                    $('.t-style-box #click-register').removeClass('active-tab');
                    if ($('.t-style-box #social-link').css('display') === 'block') {
                        $('.t-style-box #social-link').animate({height: 'toggle'});
                        if ($('.t-style-box #register-with-email-drop-down').css('display') === 'block') {
                            $('.t-style-box #register-with-email-drop-down').animate({height: 'toggle'});
                        }
                        if ($('.t-style-box #register-with-email-step-2').css('display') === 'block') {
                            $('.t-style-box #register-with-email-step-2').animate({height: 'toggle'});
                        }
                    }
                    /* hiding social login */

                    if ($('.t-style-box #social-link').css('display') === 'none') {
                        $('.t-style-box #social-link').animate({height: 'toggle'});
                        $('.t-style-box #click-register-social').addClass('social-active');
                        if ($('.t-style-box #register-with-email-drop-down').css('display') === 'block') {
                            $('.t-style-box #register-with-email-drop-down').animate({height: 'toggle'});
                        }
                        if ($('.t-style-box #register-with-email-step-2').css('display') === 'block') {
                            $('.t-style-box #register-with-email-step-2').animate({height: 'toggle'});
                        }
                    }
                    /*  REGISTER TAB: showing social login section*/

                });



                $('.t-style-box #register-with-email-step-2 .back-btn').click(function() {
                    $('.t-style-box #register-with-email-step-2').removeClass('active-step');
                    $('.t-style-box #register-with-email-step-2').animate({height: 'toggle'});
                    $('.t-style-box #register-with-email-drop-down').animate({height: 'toggle'});
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

                    if ($('.t-style-box #register-with-email-drop-down').css('display') === 'block' && $('#click-register').hasClass('active-tab')) {
                        //alert('closing step1');
                        $('.t-style-box #click-register').removeClass('active-tab');
                        $('.t-style-box #social-link').animate({height: 'toggle'});
                        $('.t-style-box #register-with-email-drop-down').animate({height: 'toggle'});
                        $('.t-style-box #click-register-social').addClass('social-active');
                    }
                    /* closing register section while on step 1 function */


                    if ($('.t-style-box #register-with-email-drop-down').css('display') === 'none' && $('#register-with-email-step-2').hasClass('')) {
                        //alert('opening step 1');
                        $('.t-style-box #click-register-social').removeClass('social-active');
                        $('.t-style-box #click-register').addClass('active-tab');
                        $('.t-style-box #register-with-email-drop-down').animate({height: 'toggle'});
                        checkSocial();
                    }
                    /* clicking register step 1 function*/

                });


              


                function checkSocial() {
                    if ($('.t-style-box #social-link').css('display') === 'block') {
                        $('.t-style-box #social-link').animate({height: 'toggle'});
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














    }

});

