HubStar.LoginModalController = Ember.Controller.extend({
 needs: ['application'],

    init: function() {

    },
    closePopupLogin:function(){
      HubStar.set('checkLoginStatus',false);
    },
     validateEmail: function(email)
    {

        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    },
     login: function() {
        if (this.get('loginUsername') !== null && this.get('loginPassword') !== null && this.get('loginPassword') !== "" && this.get('loginPassword') !== "")
        {
            this.set('isWaiting', true);
            document.getElementById("loginUsername").setAttribute("class", "login-textfield");
            document.getElementById("loginPassword").setAttribute("class", "login-textfield");

            var loginInfo = [this.get('loginUsername'), this.get('loginPassword'), this.validateEmail(this.get('loginUsername'))];
            var that = this;
            requiredBackEnd('login', 'login', loginInfo, 'POST', function(params) {
                if (params === 1) {
                    document.getElementById("loginUsername").setAttribute("class", "login-textfield error-textfield");
                    that.set('isWaiting', false);

                    $('.black-tool-tip').stop();
                    $('.black-tool-tip').css('display', 'none');
                    $('#invalid-user-name').animate({opacity: 'toggle'}).delay(8000).animate({opacity: 'toggle'});
                }// INVALID user name when the user attempts to login.


                else if (params === 0) {

                    document.getElementById("loginUsername").setAttribute("class", "login-textfield error-textfield");
                    that.set('isWaiting', false);

                    $('.black-tool-tip').css('display', 'none');
                    $('#invalid-account-type').animate({opacity: 'toggle'}).delay(8000).animate({opacity: 'toggle'});


                } // INVALID ACCOUNT TYPE; User is trying to login with a user name and password when their account type is a social network login account
                else {

                    if (that.get('loginPassword') === params.PWD_HASH && that.get('loginPassword') !== undefined) {
                        localStorage.loginStatus = params.COUCHBASE_ID;
             
                 location.reload();
                 HubStar.set('checkLoginStatus', false);
                        that.set('loginUsername', "");
                        that.set('loginPassword', "");

                    }
                    else {
                        document.getElementById("loginPassword").setAttribute("class", "login-textfield error-textfield");

                        that.set('isWaiting', false);

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
    
    signUp: function() {

        if (this.checkSignupInfo()) {
            var signupInfo = [this.get('email')];
            requiredBackEnd('login', 'getemail', signupInfo, 'POST', function(params) {
                if (params === 1) {
                    $('#register-with-email-step-2').addClass('active-step');
                    $('#click-register').addClass('active-tab');
                    $('#register-with-email-step-2').animate({height: 'toggle'});
                    $('#register-with-email-drop-down').animate({height: 'toggle'});
                    checkSocial();
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
    done: function() {
        this.set('isWaiting', true);
        var createInfo = [this.get('first_name'), this.get('last_name'), this.get('password'), this.get('email'), this.get('region'), this.get('gender'), this.get('age')];
        var that = this;
        requiredBackEnd('login', 'create', createInfo, 'POST', function(params) {
            localStorage.loginStatus = params.COUCHBASE_ID;
            var emailInfo = [params.USER_NAME, params.PWD_HASH];
            requiredBackEnd('emails', 'confirmationemail', emailInfo, 'POST', function(params) {

            });
            setTimeout(function() {
                location.reload();
                that.set('first_name', "");
                that.set('last_name', "");
                that.set('email', "");
                that.set('password', "");
                that.set('region', "");
                that.set('gender', "");
                that.set('age', "");
            }, 2000);
        });
    },
    checkSignupInfo: function() {
        function checkObject(id, input, lengthMin, lengthMax, isEmailValid)
        {
            this.id = id;
            this.input = input;
            this.lengthMin = lengthMin;
            this.lengthMax = lengthMax;
            this.isEmailValid = isEmailValid;
        }
        var checkList = new Array();
        var result;
        var first_name = new checkObject("first_name", this.get('first_name'), 0, 128, null);
        checkList.push(first_name);
        var last_name = new checkObject("last_name", this.get('last_name'), 0, 128, null);
        checkList.push(last_name);
        var email = new checkObject("email", this.get('email'), 0, 45, true);
        checkList.push(email);
        var password = new checkObject("password", this.get('password'), 6, 40, null);
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
                if (patternEmail.test(checkList[i].input || checkList[i].input === "")) {
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
    setmale: function() {
        this.set('gender', "male");
    },
    setfemale: function() {
        this.set('gender', "female");
    },
    dropdown: function(checking) {
        this.set('isGeoDropdown', !this.get('isGeoDropdown'));
        $('#geo-filter').toggleClass('Geo-Filter-active');
    },
    emailSend: function()
    {

        var signupInfo = [this.get('resetPasswordEmail')];
        var that = this;
        requiredBackEnd('login', 'resetemail', signupInfo, 'POST', function(params) {
            if (params === 1) {


                $('.black-tool-tip').stop();
                $('.black-tool-tip').css('display', 'none');
                $('#invalid-user-name').animate({opacity: 'toggle'}).delay(8000).animate({opacity: 'toggle'});


            }// INVALID EMAIL; The user has forgotten their password and inputted an invalid email address
            else if (params === 0) {

                $('.black-tool-tip').stop();
                $('.black-tool-tip').css('display', 'none');
                $('#invalid-account-type-reset').animate({opacity: 'toggle'}).delay(8000).animate({opacity: 'toggle'});
            }
            else {
                var emailInfo = [that.get('resetPasswordEmail'), params.USER_NAME, params.PWD_HASH];
                requiredBackEnd('emails', 'forgetpassword', emailInfo, 'POST', function(params) {
                    if (params === 1) {
                        $('.black-tool-tip').stop();
                        $('.black-tool-tip').css('display', 'none');
                        $('#new-password').animate({opacity: 'toggle'}).delay(8000).animate({opacity: 'toggle'});
                        /* forgotten password email sent */
                    }

                });
            }
        });
    }
    
    
});
