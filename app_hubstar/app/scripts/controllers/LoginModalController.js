HubStar.LoginModalController = Ember.Controller.extend({
    selected_topics: "",
    isAdd: false,
    isRegistering: true,
    isEmailsend: true,
    contentTopicResidential: [
        {id: "1", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/apartment.png', topic: 'Apartment Design'},
        {id: "2", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/bathroom.png', topic: 'Bathrooms'},
        {id: "3", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/hometheatre.png', topic: 'Home Theatre'},
        {id: "4", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/interiordesign.png', topic: 'Interior design'},
        {id: "5", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/kitchen.png', topic: 'Kitchens'},
        {id: "6", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/newhomes.png', topic: 'New Homes'},
        {id: "7", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/outdoorliving.png', topic: 'Outdoor Living'},
        {id: "8", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/renovation.png', topic: 'Renovation'}
    ],
    contentTopicCommercial: [
        {id: "9", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/apartment.png', topic: 'Apartment Design'},
        {id: "10", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/civic.png', topic: 'Civic Design'},
        {id: "11", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/education.png', topic: 'Educational Design'},
        {id: "12", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/hospitality.png', topic: 'Hospitality Desgin'},
        {id: "13", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/office.png', topic: 'Office Design'},
        {id: "14", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/refurbishment.png', topic: 'Refurbishment'},
        {id: "15", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/retail.png', topic: 'Retail Design'}
    ],
    needs: ['application', 'mega'],
    actions: {
        signUp: function() {

            if (this.checkSignupInfo()) {
                var signupInfo = [this.get('email')];
                var that = this;
                requiredBackEnd('login', 'getemail', signupInfo, 'POST', function(params) {
                    if (params === 1) {
                        $('#register-with-email-step-2').addClass('active-step');
                        $('#click-register').addClass('active-tab');
                        $('#register-with-email-step-2').animate({height: 'toggle'});
                        $('#register-with-email-drop-down').animate({height: 'toggle'});
                        that.checkSocial();
                    }
                    else if (params === 0) {

                        document.getElementById("email").setAttribute("class", "login-textfield error-textfield");

                        $('.black-tool-tip').stop();
                        $('.black-tool-tip').css('display', 'none');
                        $('#email-used-by-social').animate({opacity: 'toggle'}).delay(8000).animate({opacity: 'toggle'});


                    } // EMAIL ALREADY IN USE; The use has attempted to register with an email address that has already been used via 'register with social account'

                    else if (params === 2) {

                        document.getElementById("email").setAttribute("class", "login-textfield error-textfield");


                        $('.black-tool-tip').stop();
                        $('.black-tool-tip').css('display', 'none');
                        $('#email-in-use').animate({opacity: 'toggle'}).delay(8000).animate({opacity: 'toggle'});

                    }// EMAIL ALREADY IN USE; The user as attempted to register with an email address that is already in use
                });
            }
        },
        setmale: function() {
            this.set('gender', "male");
        },
        setfemale: function() {
            this.set('gender', "female");
        },
        next: function() {
            this.set("isRegistering", false);
            var createInfo = [this.get('first_name'), this.get('last_name'), this.get('password'), this.get('email'), this.get('region'), this.get('gender'), this.get('age')];
            var that = this;
            requiredBackEnd('login', 'create', createInfo, 'POST', function(params) {
                ga('Trends.send', 'event', 'button', 'click', 'SignUp');
                localStorage.userName = params.USER_NAME;
                that.set('loginUsername', localStorage.userName);
                that.set('loginStatus', params.COUCHBASE_ID);
                localStorage.userType = "email";
                localStorage.loginState = "login";

                var emailInfo = [params.USER_NAME, that.encrypt(params.USER_NAME), that.encrypt(params.PWD_HASH)];
                requiredBackEnd('emails', 'confirmationemail', emailInfo, 'POST', function() {

                });
                setTimeout(function() {
                    $('#register-with-email-step-3').css('display', 'block');
                    $('#register-with-email-step-2').css('display', 'none');
                    $('#click-register-social').css('display', 'none');
                    $('#click-register').css('display', 'none');
                    $('.learnmore-btn').css('display', 'none');
                    $('#login-btn').css('display', 'none');
                }, 1000);
            });

        },
        selectTopic: function(id, topic) {
            if (HubStar.get(id)) {
                $('#minus_' + id).attr("style", "opacity: .8; z-index: 10; right: 0; margin: 10px; display:none;");
                if (this.get('selected_topics').indexOf(topic) !== -1) {
                    this.set('selected_topics', this.get('selected_topics').replace(topic + ",", ""));
                }
                HubStar.set(id, false);
            } else {
                $('#minus_' + id).attr("style", "opacity: .8; z-index: 10; right: 0; display:block;");
                if (this.get('selected_topics').length === 0) {
                    this.set('selected_topics', topic);
                } else {
                    this.set('selected_topics', this.get('selected_topics') + "," + topic);
                }
                HubStar.set(id, true);
            }
        },
        submitSelection: function() {

            var updateTopic = [this.get("loginStatus"), this.get('selected_topics')];
            var that = this;
            requiredBackEnd('login', 'selecttopic', updateTopic, 'POST', function() {
                setTimeout(function() {
                    ga('Trends.send', 'event', 'button', 'click', 'SignUp');
                    $('#register-with-email-step-4').css('display', 'block');
                    $('#register-with-email-step-3').css('display', 'none');
                    $('#user-login-pane').css('display', 'none');
                    that.set('first_name', "");
                    that.set('last_name', "");
                    that.set('email', "");
                    that.set('password', "");
                    that.set('region', "");
                    that.set('gender', "");
                    that.set('age', "");
                }, 1000);
            });
        },
        selectSocialTopic: function(id, topic) {
            if (HubStar.get(id)) {
                $('#minuss_' + id).attr("style", "opacity: .8; z-index: 10; right: 0; margin: 10px; display:none;");
                if (this.get('selected_topics').indexOf(topic) !== -1) {
                    this.set('selected_topics', this.get('selected_topics').replace(topic + ",", ""));
                }
                HubStar.set(id, false);
            } else {
                $('#minuss_' + id).attr("style", "opacity: .8; z-index: 10; right: 0; display:block;");
                if (this.get('selected_topics').length === 0) {
                    this.set('selected_topics', topic);
                } else {
                    this.set('selected_topics', this.get('selected_topics') + "," + topic);
                }
                HubStar.set(id, true);
            }
        },
        submitSocialSelection: function() {
            var updateTopic = [localStorage.loginStatus, this.get('selected_topics')];
            var that = this;
            requiredBackEnd('login', 'selecttopic', updateTopic, 'POST', function() {
                setTimeout(function() {
                    ga('Trends.send', 'event', 'button', 'click', 'SignUp');
                    HubStar.set('checkLoginStatus', false);
                    localStorage.checkUser = 'newUser';
                    localStorage.checkSocialUser = '';
                    location.reload();
                }, 1000);
            });
        },
        done: function() {
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
            $('.Login-box #user-login-pane').css('display', 'block');
            $('#register-with-email-step-4').css('display', 'none');
            this.set("isRegistering", true);
        },
        login: function() {
            if (this.get('loginUsername') !== null && this.get('loginPassword') !== null && this.get('loginPassword') !== "" && this.get('loginPassword') !== "")
            {
                document.getElementById("loginUsername").setAttribute("class", "login-textfield");
                document.getElementById("loginPassword").setAttribute("class", "login-textfield");

                var loginInfo = [this.get('loginUsername'), this.get('loginPassword'), this.validateEmail(this.get('loginUsername'))];
                var that = this;
                requiredBackEnd('login', 'login', loginInfo, 'POST', function(params) {
                    if (params === 1) {
                        document.getElementById("loginUsername").setAttribute("class", "login-textfield error-textfield");


                        $('.black-tool-tip').stop();
                        $('.black-tool-tip').css('display', 'none');
                        $('#invalid-user-name').animate({opacity: 'toggle'}).delay(8000).animate({opacity: 'toggle'});
                    }// INVALID user name when the user attempts to login.


                    else if (params === 0) {
                        document.getElementById("loginUsername").setAttribute("class", "login-textfield error-textfield");
                        that.set('loginTime', false);
                        $('.black-tool-tip').css('display', 'none');
                        $('#invalid-account-type-facebook').animate({opacity: 'toggle'}).delay(8000).animate({opacity: 'toggle'});
                    } // INVALID ACCOUNT TYPE; User is trying to login with a user name and password when their account type is Facebook account
                    else if (params === 3) {
                        document.getElementById("loginUsername").setAttribute("class", "login-textfield error-textfield");
                        that.set('loginTime', false);
                        $('.black-tool-tip').css('display', 'none');
                        $('#invalid-account-type-twitter').animate({opacity: 'toggle'}).delay(8000).animate({opacity: 'toggle'});
                    } // INVALID ACCOUNT TYPE; User is trying to login with a user name and password when their account type is Twitter account
                    else if (params === 4) {
                        document.getElementById("loginUsername").setAttribute("class", "login-textfield error-textfield");
                        that.set('loginTime', false);
                        $('.black-tool-tip').css('display', 'none');
                        $('#invalid-account-type-google').animate({opacity: 'toggle'}).delay(8000).animate({opacity: 'toggle'});
                    } // INVALID ACCOUNT TYPE; User is trying to login with a user name and password when their account type is Google account
                    else if (params === 5) {
                        document.getElementById("loginUsername").setAttribute("class", "login-textfield error-textfield");
                        that.set('loginTime', false);
                        $('.black-tool-tip').css('display', 'none');
                        $('#invalid-account-type-linkedin').animate({opacity: 'toggle'}).delay(8000).animate({opacity: 'toggle'});
                    } // INVALID ACCOUNT TYPE; User is trying to login with a user name and password when their account type is Linkedin account
                    else {

                        if (that.get('loginPassword') === params[0].PWD_HASH && that.get('loginPassword') !== undefined) {

                            var email_activate = params[1];


                            if (email_activate === true)
                            {
                                localStorage.loginStatus = params[0].COUCHBASE_ID;
                                localStorage.userName = that.get('loginUsername');
                                localStorage.userType = "email";
                                localStorage.loginState = "login";
                                location.reload();
                                HubStar.set("isLogin", true);
                                HubStar.set('checkLoginStatus', false);
                                that.set('loginUsername', "");
                                that.set('loginPassword', "");
                            }
                            else
                            {
                                that.set('loginTime', false);
                                $('.black-tool-tip').css('display', 'none');
                                $('#incorrect-varify').animate({opacity: 'toggle'}).delay(8000).animate({opacity: 'toggle'});
                            }
                        }
                        else {
                            document.getElementById("loginPassword").setAttribute("class", "login-textfield error-textfield");


                            if ($('#incorrect-password').css('display') === 'none') {

                                $('.black-tool-tip').stop();
                                $('.black-tool-tip').css('display', 'none');
                                $('#incorrect-password').animate({opacity: 'toggle'});
                            }// INCORRECT PASSWORD; User is trying to login with incorrect password

                        }
                    }
                });
            }
        },
        emailSend: function()
        {
            this.set("isEmailsend", false);
            var signupInfo = [this.get('resetPasswordEmail')];
            var that = this;
            requiredBackEnd('login', 'resetemail', signupInfo, 'POST', function(params) {

                if (params === 1) {
                    that.set("isEmailsend", true);

                    $('.black-tool-tip').stop();
                    $('.black-tool-tip').css('display', 'none');
                    $('#invalid-user-name').animate({opacity: 'toggle'}).delay(8000).animate({opacity: 'toggle'});


                }// INVALID EMAIL; The user has forgotten their password and inputted an invalid email address
                else if (params === 0) {
                    that.set("isEmailsend", true);
                    $('.black-tool-tip').stop();
                    $('.black-tool-tip').css('display', 'none');
                    $('#invalid-account-type-reset').animate({opacity: 'toggle'}).delay(8000).animate({opacity: 'toggle'});
                }
                else {
                    var emailInfo = [that.get('resetPasswordEmail'), params.USER_NAME, params.PWD_HASH];
                    requiredBackEnd('emails', 'forgetpassword', emailInfo, 'POST', function(params) {
                        that.set("isEmailsend", true);
                        if (params === 1) {

                            $('.black-tool-tip').stop();
                            $('.black-tool-tip').css('display', 'none');
                            $('#new-password').animate({opacity: 'toggle'}).delay(8000).animate({opacity: 'toggle'});
                            /* forgotten password email sent */
                        }

                    });
                }
            });
        },
        closePopupLogin: function() {
            HubStar.set('loginModal', false);
        }

    },
    init: function() {
        this.set('loginUsername', localStorage.userName);
    },
    validateEmail: function(email)
    {

        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    },
    encrypt: function(encryptString) {
        var tempstr = '';
        for (var a = 0; a < encryptString.length; a++) {
            tempstr = tempstr + (parseInt(encryptString.charCodeAt(a).toString(16), 16) + 10).toString(16);
        }
        return tempstr;
    },
    checkSignupInfo: function() {
        function CheckObject(id, input, lengthMin, lengthMax, isEmailValid)
        {
            this.id = id;
            this.input = input;
            this.lengthMin = lengthMin;
            this.lengthMax = lengthMax;
            this.isEmailValid = isEmailValid;
        }
        var checkList = [];
        var result;
        var first_name = new CheckObject("first_name", this.get('first_name'), 0, 128, null);
        checkList.push(first_name);
        var last_name = new CheckObject("last_name", this.get('last_name'), 0, 128, null);
        checkList.push(last_name);
        var email = new CheckObject("email", this.get('email'), 0, 45, true);
        checkList.push(email);
        var password = new CheckObject("password", this.get('password'), 6, 40, null);
        checkList.push(password);

        for (var i = 0; i < checkList.length; i++)
        {
            var patternEmail = /^(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6}$/;
            document.getElementById(checkList[i].id).setAttribute("class", "login-textfield");
            if (checkList[i].input !== null && checkList[i].input !== "" && checkList[i].input !== undefined)
            {
                if (checkList[i].input.length > checkList[i].lengthMax || checkList[i].input.length < checkList[i].lengthMin)
                {
                    result = false;

                    $('.black-tool-tip').stop();
                    $('.black-tool-tip').css('display', 'none');
                    $('#invalid-password').animate({opacity: 'toggle'}).delay(8000).animate({opacity: 'toggle'});

                    document.getElementById(checkList[i].id).setAttribute("class", "login-textfield error-textfield");
                    break;

                }
            }// INVALID PASSWORD; the user has entered a  password that does not meet the requirements (6-40 characters long)


            if (checkList[i].id === 'first_name' || checkList[i].id === 'last_name' || checkList[i].id === 'email' || checkList[i].id === 'password')
            {
                if (checkList[i].input === null || checkList[i].input === "" || checkList[i].input === undefined) {
                    result = false;

                    $('.black-tool-tip').stop();
                    $('.black-tool-tip').css('display', 'none');
                    $('#missing-fields').animate({opacity: 'toggle'}).delay(8000).animate({opacity: 'toggle'});

                    document.getElementById(checkList[i].id).setAttribute("class", "login-textfield error-textfield");
                    break;


                }
            }//MISSING FIELDS; the user has not filled in all the mandatory fields


            if (checkList[i].input !== null && checkList[i].isEmailValid === true)
            {

                if (/\s/.test(checkList[i].input)) {
                    result = false;
                    $('.black-tool-tip').stop();
                    $('.black-tool-tip').css('display', 'none');
                    $('#invalid-user-name-register-with-spaces').animate({opacity: 'toggle'}).delay(8000).animate({opacity: 'toggle'});
                    document.getElementById(checkList[i].id).setAttribute("class", "login-textfield error-textfield");
                    break;
                }
                else if (patternEmail.test(checkList[i].input || checkList[i].input === "")) {
                    result = true;
                }
                else {
                    result = false;
                    $('.black-tool-tip').stop();
                    $('.black-tool-tip').css('display', 'none');
                    $('#invalid-user-name-register').animate({opacity: 'toggle'}).delay(8000).animate({opacity: 'toggle'});

                    document.getElementById(checkList[i].id).setAttribute("class", "login-textfield error-textfield");
                    break;
                }// INVALID user name when the user attempts to login.
            }
        }
        return result;
    },
    dropdown: function() {
        this.set('isGeoDropdown', !this.get('isGeoDropdown'));
        $('#geo-filter').toggleClass('Geo-Filter-active');
    }
});
