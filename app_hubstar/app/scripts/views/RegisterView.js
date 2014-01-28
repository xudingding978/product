HubStar.RegisterView = Ember.View.extend({
    templateName: 'register',
    didInsertElement: function() {
        $(document).ready(function() {
            if (/iPhone|iPad/i.test(navigator.userAgent)) {
                alert("mobile device");
                $('.social-login-iconbox').addClass('btn');
                $('.social-links-container').css('padding', '0px');
                $('.btn').css('border', '1px  #bbbbbb');
            }
            if (localStorage.loginState === "login") {

                if (localStorage.userType === "email") {
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
                    $('#register-with-email-step-3').css('display', 'none');
                    $('#user-login-pane').css('display', 'block');

                } else {
                    $('#login-btn').text('REGISTER');
                    $('.black-tool-tip').css('display', 'none');
                    $('#click-register-social').css('display', 'none');
                    $('#click-register').css('display', 'none');
                    $('#social-link').css('display', 'none');
                    $('#login-with-email-drop-down').css('display', 'none');
                    $('#social-login-container').css('display', 'block');
                    $('#click-login').removeClass('active-tab');
                    $('#social-login').addClass('social-active');
                    $('#user-forgot-password-pane').css('display', 'none');
                    $('#forgot-message-container').css('display', 'none');
                    $('#invalid-username').css('display', 'none');

                    $('#register-with-email-drop-down').css('display', 'none');
                    $('#register-with-email-step-2').css('display', 'none');
                    $('#register-with-email-step-3').css('display', 'none');
                    $('#user-login-pane').css('display', 'block');

                }

            }
            else {
                localStorage.loginState = "register";

                if (localStorage.userType === "register_email") {
                    $('#login-btn').text('LOG IN');
                    $('.black-tool-tip').css('display', 'none');
                    $('#click-register-social').css('display', 'block');
                    $('#social-link').css('display', 'block');
                    $('#click-register').css('display', 'block');
                    $('#click-register-social').removeClass('social-active');
                    $('#click-register').addClass('active-tab');
                    $('#register-with-email-drop-down').animate({height: 'toggle'});
                    $('#user-login-pane').css('display', 'none');
                    checkSocial();
                }
            }


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



            $("#social-login").click(function() {

                $('#social-login').removeClass('social-active');
                $('#click-login').removeClass('active-tab');
                if ($('#social-login-container').css('display') === 'block') {
                    localStorage.userType = "email";
                    $('#social-login-container').animate({height: 'toggle'});
                }
                /* LOGIN TAB:  hiding social login */

                if ($('#social-login-container').css('display') === 'none') {
                    localStorage.userType = "social";
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
                    localStorage.userType = "social";
                    $('#click-login').removeClass('active-tab');

                    $('#login-with-email-drop-down').animate({height: 'toggle'});

                    if ($('#social-login-container').css('display') === 'block') {
                        $('#social-login-container').animate({height: 'toggle'});
                    }
                }
                /* LOGIN TAB: closing login with email */


                if ($('#login-with-email-drop-down').css('display') === 'none') {
                    localStorage.userType = "email";
                    $('#social-login').removeClass('social-active');
                    $('#click-login').addClass('active-tab');
                    $('#login-with-email-drop-down').animate({height: 'toggle'});

                    if ($('#social-login-container').css('display') === 'block') {
                        $('#social-login-container').animate({height: 'toggle'});
                    }
                    if (document.getElementById("loginusername").value !== undefined && document.getElementById("loginusername").value !== null && document.getElementById("loginusername").value !== "")
                    {
                        document.getElementById("loginpassword").focus();
                    }
                    else {
                        document.getElementById("loginusername").focus();
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
                    localStorage.userType = "register_social";
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
                    localStorage.userType = "register_email";
                    //alert('opening step 1');
                    $('#click-register-social').removeClass('social-active');
                    $('#click-register').addClass('active-tab');
                    $('#register-with-email-drop-down').animate({height: 'toggle'});
                    checkSocial();
                }
                /* clicking register step 1 function*/

                window.onload = changeImage();
                function changeImage() {
                    var image = document.getElementById('fadein-image');
                    $('#fadein-image').fadeIn("slow", function() {
                        setTimeout(function() {
                            $('#fadein-image').fadeOut("slow", toImage2);
                        }, 5000);
                    });
                    function toImage2() {
                        image.src = "../../../images/landing-page-title(IDEAS).png";
                        $('#fadein-image').fadeIn("slow", function() {
                            setTimeout(function() {
                                $('#fadein-image').fadeOut("slow", toImage3);
                            }, 5000);
                        });
                    }
                    function toImage3() {
                        image.src = "../../../images/landing-page-title(PRODUCTS).png";
                        $('#fadein-image').fadeIn("slow", function() {
                            setTimeout(function() {
                                $('#fadein-image').fadeOut("slow", toImage4);
                            }, 5000);
                        });
                    }
                    function toImage4() {
                        image.src = "../../../images/landing-page-title(SERVICES).png";
                        $('#fadein-image').fadeIn("slow", function() {
                            setTimeout(function() {
                                $('#fadein-image').fadeOut("slow", toImage1);
                            }, 5000);
                        });
                    }
                    function toImage1() {
                        image.src = "../../../images/landing-page-title(LOGO).png";
                        $('#fadein-image').fadeIn("slow", function() {
                            setTimeout(function() {
                                $('#fadein-image').fadeOut("slow", toImage2);
                            }, 5000);
                        });
                    }
                }
                /* ideas, products, services img animation*/


            });
        });

    },
    loginPane: function() {
        if (localStorage.loginState === "login") {

            $('#login-btn').text('LOG IN');
            $('.black-tool-tip').css('display', 'none');
            $('#click-register-social').css('display', 'block');
            $('#social-link').css('display', 'block');
            $('#click-register').css('display', 'block');
            $('#click-register-social').addClass('social-active');
            $('#click-register').removeClass('active-tab');
            $('#register-with-email-step-2').removeClass('active-step');
            $('#user-login-pane').css('display', 'none');
            localStorage.loginState = "register";

        }
        else {
            localStorage.loginState = "login";

            if (localStorage.userType === "email") {

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
                $('#register-with-email-step-3').css('display', 'none');
                $('#user-login-pane').css('display', 'block');
                if (document.getElementById("loginusername").value !== undefined && document.getElementById("loginusername").value !== null && document.getElementById("loginusername").value !== "")
                {
                    document.getElementById("loginpassword").focus();
                }
                else {
                    document.getElementById("loginusername").focus();
                }
            } else {

                $('#login-btn').text('REGISTER');
                $('.black-tool-tip').css('display', 'none');
                $('#click-register-social').css('display', 'none');
                $('#click-register').css('display', 'none');
                $('#social-link').css('display', 'none');
                $('#login-with-email-drop-down').css('display', 'none');
                $('#social-login-container').css('display', 'block');
                $('#click-login').removeClass('active-tab');
                $('#social-login').addClass('social-active');
                $('#user-forgot-password-pane').css('display', 'none');
                $('#forgot-message-container').css('display', 'none');
                $('#invalid-username').css('display', 'none');
                $('#register-with-email-drop-down').css('display', 'none');
                $('#register-with-email-step-2').css('display', 'none');
                $('#register-with-email-step-3').css('display', 'none');
                $('#user-login-pane').css('display', 'block');
            }

        }
    },
    Facebook: function() {
        var left = (screen.width / 2) - (650 / 2);
        var top = (screen.height / 2) - (400 / 2);
        var api_url = "http://" + document.domain + "/hybridauth/default/login/?provider=Facebook#_=_";
        newwindow = window.open(api_url, 'name', 'height=' + 400 + ',width=' + 650 + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');
        if (window.focus) {
            newwindow.focus();
        }
        localStorage.userType = "facebook";
    },
    Yahoo: function() {
        var left = (screen.width / 2) - (650 / 2);
        var top = (screen.height / 2) - (400 / 2);
        var api_url = "http://" + document.domain + "/hybridauth/default/login/?provider=Yahoo";
        newwindow = window.open(api_url, 'name', 'height=' + 400 + ',width=' + 650 + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');
        if (window.focus) {
            newwindow.focus();
        }
        localStorage.userType = "yahoo";
    },
    QQ: function() {
        var left = (screen.width / 2) - (650 / 2);
        var top = (screen.height / 2) - (400 / 2);
        var api_url = "http://" + document.domain + "/hybridauth/default/login/?provider=QQ";
        newwindow = window.open(api_url, 'name', 'height=' + 400 + ',width=' + 650 + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');
        if (window.focus) {
            newwindow.focus();
        }
        localStorage.userType = "qq";
    },
    Twitter: function() {
        var left = (screen.width / 2) - (650 / 2);
        var top = (screen.height / 2) - (400 / 2);
        var api_url = "http://" + document.domain + "/hybridauth/default/login/?provider=Twitter";
        newwindow = window.open(api_url, 'name', 'height=' + 400 + ',width=' + 650 + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');
        if (window.focus) {
            newwindow.focus();
        }
        localStorage.userType = "twitter";
    },
    Sina: function() {
        var left = (screen.width / 2) - (650 / 2);
        var top = (screen.height / 2) - (400 / 2);
        var api_url = "http://" + document.domain + "/hybridauth/default/login/?provider=Sina";
        newwindow = window.open(api_url, 'name', 'height=' + 400 + ',width=' + 650 + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');
        if (window.focus) {
            newwindow.focus();
        }
        localStorage.userType = "sina";
    },
    LinkedIn: function() {
        var left = (screen.width / 2) - (650 / 2);
        var top = (screen.height / 2) - (400 / 2);
        var api_url = "http://" + document.domain + "/hybridauth/default/login/?provider=LinkedIn";
        newwindow = window.open(api_url, 'name', 'height=' + 400 + ',width=' + 650 + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');
        if (window.focus) {
            newwindow.focus();
        }
        localStorage.userType = "linkedIn";
    },
    Google: function() {
        var left = (screen.width / 2) - (650 / 2);
        var top = (screen.height / 2) - (400 / 2);
        var api_url = "http://" + document.domain + "/hybridauth/default/login/?provider=Google";
        newwindow = window.open(api_url, 'name', 'height=' + 400 * 1.5 + ',width=' + 650 + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');
        if (window.focus) {
            newwindow.focus();
        }
        localStorage.userType = "google";
    }



});



