HubStar.LoginModalController = Ember.Controller.extend({
     selected_topics: "",
    isAdd: false,
    contentTopic: [
        {id: "1", image: '../images/welcomepage/bedroom.jpg', topic: 'Bedrooms'},
        {id: "2", image: '../images/welcomepage/home-theatre.jpg', topic: 'Home Theatre'},
        {id: "3", image: '../images/welcomepage/interior-living.jpg', topic: 'Interior Living'},
        {id: "4", image: '../images/welcomepage/kitchens.jpg', topic: 'Kitchens'},
        {id: "5", image: '../images/welcomepage/new-homes.jpg', topic: 'New Homes'},
        {id: "6", image: '../images/welcomepage/outdoor-living.jpg', topic: 'Outdoor Living'},
        {id: "7", image: '../images/welcomepage/renovation.jpg', topic: 'Renovation'},
        {id: "8", image: '../images/welcomepage/apartment-design.jpg', topic: 'Apartment Design'},
        {id: "9", image: '../images/welcomepage/civic-design.jpg', topic: 'Civic Design'},
        {id: "10", image: '../images/welcomepage/educational-design.jpg', topic: 'Educational Design'},
        {id: "11", image: '../images/welcomepage/hospitality-design.jpg', topic: 'Hospitality Design'},
        {id: "12", image: '../images/welcomepage/office-design.jpg', topic: 'Office Design'},
        {id: "13", image: '../images/welcomepage/refurbishment.jpg', topic: 'Refurbishment'},
        {id: "14", image: '../images/welcomepage/retail-design.jpg', topic: 'Retail Design'}

    ],
    needs: ['application'],
    init: function() {
this.set('loginUsername', localStorage.userName);
    },
    closePopupLogin: function() {
        HubStar.set('checkLoginStatus', false);
    },
    validateEmail: function(email)
    {

        var re = /\S+@\S+\.\S+/;
        return re.test(email);
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
              

                    $('.black-tool-tip').css('display', 'none');
                    $('#invalid-account-type').animate({opacity: 'toggle'}).delay(8000).animate({opacity: 'toggle'});


                } // INVALID ACCOUNT TYPE; User is trying to login with a user name and password when their account type is a social network login account
                else {

                    if (that.get('loginPassword') === params[0]["PWD_HASH"] && that.get('loginPassword') !== undefined) {
                     
                             var email_activate = params[1];


                        if (email_activate === true)
                        {
                        localStorage.loginStatus =  params[0].COUCHBASE_ID;

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
                            $('#invalid-account-type').animate({opacity: 'toggle'}).delay(8000).animate({opacity: 'toggle'});
                              alert("Registration successful! To activate your myTrends account, please click the activation link in the email we just sent you.");
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
    selectTopic: function(id, topic) {     
        if (HubStar.get(id)) {
            $('#minus_' + id).attr("style", "opacity: .8; z-index: 10; right: 0; margin: 10px; display:none;");
            if (this.get('selected_topics').indexOf(topic) !== -1) {
                this.set('selected_topics', this.get('selected_topics').replace(topic + ",", ""));
            }
            HubStar.set(id, false);
        } else {     
           $('#minus_' + id).attr("style", "opacity: .8; z-index: 10; right: 0; display:block;");
            if(this.get('selected_topics').length===0){
                this.set('selected_topics', topic);
            }else{              
                this.set('selected_topics', this.get('selected_topics') + "," + topic);    
            }  
             HubStar.set(id, true);                  
        }
    },
    submitSelection: function() {

        $('#register-with-email-step-4').css('display', 'block');
        $('#register-with-email-step-3').css('display', 'none');
        $('#user-login-pane').css('display', 'none');
    },
    next: function() {

        $('#register-with-email-step-3').css('display', 'block');
        
        
    },
    done: function() {
        this.set('loginTime', true);
        var createInfo = [this.get('first_name'), this.get('last_name'), this.get('password'), this.get('email'), this.get('region'), this.get('gender'), this.get('age'), this.get('selected_topics')];
        var that = this;
         $('#finishRegister').css('display', 'none');
          $('#skipRegister').css('display', 'block');   
        requiredBackEnd('login', 'create', createInfo, 'POST', function(params) {
            localStorage.loginStatus = params.COUCHBASE_ID;
            var emailInfo = [params.USER_NAME, params.PWD_HASH];
            requiredBackEnd('emails', 'confirmationemail', emailInfo, 'POST', function(params) {

            });
            setTimeout(function() {
                that.set('first_name', "");
                that.set('last_name', "");
                that.set('email', "");
                that.set('password', "");
                that.set('region', "");
                that.set('gender', "");
                that.set('age', "");
                that.set('loginTime', false);

            }, 2000);
        });
        
    },
     skip: function(){
      //  HubStar.set("isLogin", true);
       this.transitionToRoute("searchIndex");//need to change to current state page
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
