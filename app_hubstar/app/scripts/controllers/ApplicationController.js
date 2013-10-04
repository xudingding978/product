
/*global HubStar */
/*global Ember */
/*global $:false */

HubStar.ApplicationController = Ember.ArrayController.extend({
    needs: ['status', 'applicationFeedback'],
    content: [],
    loginInfo: "",
    search_area: "",
    search_string: "inspirational",
    firstTimeUser: false,
    test: false,
    user: null,
    from: null,
    size: null,
    photo_url: null,
    userName: "",
    password: "",
    repeat: "",
    email: "",
    loginUsername: "",
    loginPassword: "",
    resetPasswordEmail: "",
    gender: "",
    iframeURL: "",
    iframeLoginURL: "",
    isWaiting:"",
    hasEmailsend:"",
    init: function() {
        this.newSearch();
        this.set('search_string', '');
        var address = document.URL;
        var domain = address.split("/")[2];

    },
    popupModal: function() {
        this.set('popup', !this.get('popup'));
    },
    email_login: function() {
        this.set('mail', !this.get('mail'));
    },
    loginStatus: function() {
    },
    grapData: function() {
        this.set("user", HubStar.User.find(localStorage.loginStatus));
        this.set("myUserProfile", "#/users/" + localStorage.loginStatus);
    },
    reloadPage: function() {
        this.set("test", !this.get("test"));
    },
    scrollDownAction: function() {


        this.set('loadingTime', true);

        this.set("size", 20);
        this.set("from", this.get("from") + this.get("size"));
        var results = HubStar.Mega.find({"RquireType": "search", "region": this.get("search_area"), "search_string": this.get("search_string"), "from": this.get("from"), "size": this.get("size")});
        var that = this;
        results.addObserver('isLoaded', function() {
            if (results.get('isLoaded')) {
                for (var i = 0; i < results.get("length"); i++) {
                    var tempmega = results.objectAt(i);

                    if (tempmega.get("profile").objectAt(0) !== undefined) {
                        var isFollow = false;
                        for (var j = 0; j < tempmega.get("profile").objectAt(0).get("followers").get("length"); j++)
                        {
                            if (tempmega.get("profile").objectAt(0).get("followers").objectAt(j).get("follower_id") === localStorage.loginStatus)
                            {
                                isFollow = true;
                                break;
                            }
                        }
                        tempmega.get("profile").objectAt(0).set("isFollowCurrentUser", isFollow);
                    }
                    that.pushObject(tempmega);
                }
                setTimeout(function() {
                    $('#masonry_container').masonry("reload");
                }, 2200);
                that.set('loadingTime', false);
                if (results.get("length") === 0) {
                    that.get('controllers.applicationFeedback').statusObserver(null, "You have reached the end of your search results.", "info"); //added user flash message
                }
            }
        });
    },
    newSearch: function() {
        this.set("content", []);
        this.set("from", 0);
        this.set("size", 20);
        this.set('loadingTime', true);
        var d = new Date();
        var start = d.getTime();
        var that = this;
        var statusController = this.get('controllers.status');
        var stats = HubStar.Stat.find({"RquireType": "firstsearch", "region": this.get("search_area"), "search_string": this.get("search_string"), "from": this.get("from"), "size": this.get("size")});
        stats.addObserver('isLoaded', function() {
            if (stats.get('isLoaded')) {
                var stat = stats.objectAt(0);
                var megasResults = stat.get("megas");
                HubStar.set('itemNumber', megasResults.get("length"));
                for (var i = 0; i < megasResults.get("length"); i++) {
                    var tempmega = megasResults.objectAt(i);
                    //console.log(tempmega.get("profile").objectAt(0));
                    if (tempmega.get("profile").objectAt(0) !== undefined) {
                        var isFollow = false;
                        for (var j = 0; j < tempmega.get("profile").objectAt(0).get("followers").get("length"); j++)
                        {
                            if (tempmega.get("profile").objectAt(0).get("followers").objectAt(j).get("follower_id") === localStorage.loginStatus)
                            {
                                isFollow = true;
                                break;
                            }
                        }
                        tempmega.get("profile").objectAt(0).set("isFollowCurrentUser", isFollow);
                    }
                    that.pushObject(tempmega);
                }
                that.set('loadingTime', false);
                this.set("from", this.get("size"));
                var d = new Date();
                var end = d.getTime();
                var time = that.getResponseTime(start, end);
                statusController.set("searchResultNum", stat.get('numberofresults'));
                statusController.set("time", time);
                statusController.changeDescription();
            }
            setTimeout(function() {
                $('#masonry_container').masonry("reload");
            }, 1800);
        });

        HubStar.set('searchStart', true);
    },
    defaultSearch: function() {
        this.set("loginInfo", localStorage.loginStatus);
        var results = HubStar.Mega.find({});
        this.set("content", results);
    },
    getResponseTime: function(start, end) {
        var totalTime = end - start;
        totalTime += "ms";
        return totalTime;
    },
    flipFrontClick: function() {
        $(".hover").addClass('flip');
    },
    flipFrontBack: function() {
        $(".hover").removeClass('flip');
    },
    changeImage: function(imageSrc)
    {
        this.set('photo_url', imageSrc);
    },
    validateEmail: function(email)
    {

        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    },
    signUp: function() {

        if (this.checkSignupInfo()) {
            var signupInfo = [this.get('email')];
            var that = this;
            requiredBackEnd('site', 'getemail', signupInfo, 'POST', function(params) {
                if (params === 1) {
                    $('#register-with-email-step-2').addClass('active-step');
                    $('#click-register').addClass('active-tab');
                    $('#register-with-email-step-2').animate({height: 'toggle'});
                    $('#register-with-email-drop-down').animate({height: 'toggle'});
                    checkSocial();
                }
                else if (params === 0) {
               //     document.getElementById('email').style.border = '2px solid red';
                    document.getElementById('email').style.setAttribute("class", "login-textfield error-textfield");
                    that.get('controllers.applicationFeedback').statusObserver(null, "You have registered with this email using social media account.", "warnning");
                }
                else if (params === 2) {
           //         document.getElementById('email').style.border = '2px solid red';
                    document.getElementById('email').style.setAttribute("class", "login-textfield error-textfield");
                    that.get('controllers.applicationFeedback').statusObserver(null, "Email already exists.", "warnning");
                }
            });
        }
    },
    done: function() {
        this.set('isWaiting',true);
        var createInfo = [this.get('first_name'), this.get('last_name'), this.get('password'), this.get('email'), this.get('region'), this.get('gender'), this.get('age')];
        var that = this;
        requiredBackEnd('site', 'create', createInfo, 'POST', function(params) {
            localStorage.loginStatus = params.COUCHBASE_ID;
//              var emailInfo = [ params.USER_NAME, params.PWD_HASH];
//             requiredBackEnd('emails', 'confirmationemail', emailInfo, 'POST', function(params) {
//
//                });
            setTimeout(function() {
                that.transitionToRoute('search');
                that.set('isWaiting',false);
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
            var patternEmail = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
            document.getElementById(checkList[i].id).setAttribute("class", "login-textfield");
            if (checkList[i].input !== null && checkList[i].input !== "" && checkList[i].input !== undefined)
            {
                if (checkList[i].input.length > checkList[i].lengthMax || checkList[i].input.length < checkList[i].lengthMin)
                {
                    result = false;
                    this.get('controllers.applicationFeedback').statusObserver(null, "Your length should be between " + checkList[i].lengthMin + " and " + checkList[i].lengthMax + ".", "warnning");
                    document.getElementById(checkList[i].id).style.setAttribute("class", "login-textfield error-textfield");
                    break;
                }
            }
            if (checkList[i].id === 'first_name' || checkList[i].id === 'last_name' || checkList[i].id === 'email' || checkList[i].id === 'password')
            {
                if (checkList[i].input === null || checkList[i].input === "" || checkList[i].input === undefined) {
                    result = false;
                    this.get('controllers.applicationFeedback').statusObserver(null, "Please fill the mandory field.", "warnning");
                    document.getElementById(checkList[i].id).setAttribute("class", "login-textfield error-textfield");
                    break;
                }
            }
            if (checkList[i].input !== null && checkList[i].isEmailValid === true)
            {
                if (patternEmail.test(checkList[i].input || checkList[i].input === "")) {
                    result = true;
                }
                else {
                    result = false;
                    this.get('controllers.applicationFeedback').statusObserver(null, "Invalid Email.", "warnning");
                    document.getElementById(checkList[i].id).setAttribute("class", "login-textfield error-textfield");
                    break;
                }
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
    login: function() {
 this.set('isWaiting',true);
document.getElementById("loginUsername").setAttribute("class", "login-textfield");
document.getElementById("loginPassword").setAttribute("class", "login-textfield");

        var loginInfo = [this.get('loginUsername'), this.get('loginPassword'), this.validateEmail(this.get('loginUsername'))];
        var that = this;
        requiredBackEnd('site', 'login', loginInfo, 'POST', function(params) {
            if (params === 1) {
                document.getElementById("loginUsername").setAttribute("class", "login-textfield error-textfield");
                that.set('isWaiting',false);
                that.get('controllers.applicationFeedback').statusObserver(null, "Invalid Username.", "warnning");
            }
            else if (params === 0) {
                 document.getElementById("loginUsername").setAttribute("class", "login-textfield error-textfield");
                that.set('isWaiting',false);
                that.get('controllers.applicationFeedback').statusObserver(null, "You have registered with this email using social media account.", "warnning");
            }
            else {
             
                if (that.get('loginPassword') === params.PWD_HASH && that.get('loginPassword') !== undefined) {
         
                    localStorage.loginStatus = params.COUCHBASE_ID;
                    that.transitionToRoute('search');
                    that.set('loginUsername', "");
                    that.set('loginPassword', "");
                   that.set('isWaiting',false);
                }
                else {
                     document.getElementById("loginPassword").setAttribute("class", "login-textfield error-textfield");
                 
                    that.set('isWaiting',false);
                    that.get('controllers.applicationFeedback').statusObserver(null, " Invalid password.", "warnning");
                }
            }
        });
    },
    emailSend: function()
    {
        
        var signupInfo = [this.get('resetPasswordEmail')];
        var that = this;
        requiredBackEnd('site', 'resetemail', signupInfo, 'POST', function(params) {
            if (params === 1) {
                that.get('controllers.applicationFeedback').statusObserver(null, "Invalid Username.", "warnning");
            }
            else if (params === 0) {
                that.get('controllers.applicationFeedback').statusObserver(null, "You have registered this email using social media account.", "warnning");
            }
            else {
                var thatthat=that;
                var emailInfo = [that.get('resetPasswordEmail'), params.USER_NAME, params.PWD_HASH];
                requiredBackEnd('emails', 'forgetpassword', emailInfo, 'POST', function(params) {

                });
            }
        });

    }
});
