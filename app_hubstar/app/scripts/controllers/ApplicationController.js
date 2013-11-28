/*global HubStar */
/*global Ember */
/*global $:false */

HubStar.ApplicationController = Ember.ArrayController.extend({
    needs: ['status', 'applicationFeedback', 'user', 'megaCreate', 'notificationTop'],
    content: [],
    loginInfo: "",
    search_area: "",
    search_string: "inspirational",
    firstTimeUser: false,
    oldChildren: 0,
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
    isWaiting: "",
    loginTime: false,
    isGeoDropdown: false,
    adPageNo: 0,
    searchFromTopic: false, //call the applicationView is true. new search or search
    topicSearch:false,
    googletagCmd: null,
    unReadCount: 0,
    pageCount: 0,
    applicationCategoryDropdownType: 'geoLocation',
    init: function() {
        var that = this;

        requiredBackEnd('tenantConfiguration', 'doesAdDisplay', null, 'post', function(callbck) {
            var array = $.map(callbck, function(value, index) {
                return [value];
            });
            for (var i = 0; i < array.length; i++) {
                array[i]["isNew"] = true;
            }
            HubStar.set('ads', array);
            that.set("pageCount", 0);
            that.defaultSearch();
        });

        this.set('search_string', '');
        this.set('loginUsername', localStorage.userName);
    },
    dropdownPhotoSetting: function() {
        this.set("isNotification", !this.get("isNotification"));
        this.get("controllers.notificationTop").getClientId(localStorage.loginStatus);
    },
    popupModal: function() {
        HubStar.set('checkLoginStatus', true);
    },
    email_login: function() {
        this.set('mail', !this.get('mail'));
    },
    loginStatus: function() {
    },
    grapData: function() {
        var u = HubStar.User.find(localStorage.loginStatus);
        this.set("user", u);
        this.get("controllers.notificationTop").getClientId(localStorage.loginStatus);
        this.set("myUserProfile", "#/users/" + localStorage.loginStatus);
        this.set("myMessageBoard", "#/users/" + localStorage.loginStatus + "/messagecenter");

    },
    reloadPage: function() {
        this.set("test", !this.get("test"));
    },
    scrollDownAction: function() {
        this.set('loadingTime', true);
        this.set("size", 20);

        if (this.get("searchFromTopic") === false)
        {
            this.set("pageCount", this.get("pageCount") + 1);
        }
        else
        {
            this.set("searchFromTopic", false);
        }
        this.getPageNo();
        this.set("from", this.get("from") + this.get("size"));
        var results = HubStar.Mega.find({"RquireType": "search", "region": this.get("search_area"), "search_string": this.get("search_string"), "from": this.get("from"), "size": this.get("size"), "location": HubStar.get('geoLocation')});
        var that = this;
        results.addObserver('isLoaded', function() {
            if (results.get('isLoaded')) {
                that.setContent(results);
                that.set('loadingTime', false);
                if (results.get("length") === 0) {
                    that.get('controllers.applicationFeedback').statusObserver(null, "You have reached the end of your search results.", "info"); //added user flash message
                }
            }
        });

    },
    setContent: function(results)
    {
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
            this.pushObject(tempmega);
        }
        var that = this;
        setTimeout(function() {
            that.getAds();
            that.relayout();
        }, 200);
    },
    newSearch: function() {
        this.set("googletagCmd", []);
        this.set("content", []);

        this.set("oldChildren", 0);
        this.set("from", 0);
        this.set("size", 20);
        this.set('loadingTime', true);
        this.set("pageCount", 0);
        var d = new Date();
        var start = d.getTime();
        var that = this;
        var statusController = this.get('controllers.status');
        var stats = HubStar.Stat.find({"RquireType": "firstsearch", "region": this.get("search_area"), "search_string": this.get("search_string"), "from": this.get("from"), "size": this.get("size"), "location": HubStar.get('geoLocation')});
        stats.addObserver('isLoaded', function() {
            if (stats.get('isLoaded')) {
                var stat = stats.objectAt(0);
                var megasResults = stat.get("megas");
                HubStar.set('itemNumber', megasResults.get("length"));
                that.setContent(megasResults);
                // that.set('isWaiting', false);
                that.set('loadingTime', false);
                that.set("from", that.get("size"));

                var d = new Date();
                var end = d.getTime();
                var time = that.getResponseTime(start, end);
                statusController.set("searchResultNum", stat.get('numberofresults'));
                statusController.set("time", time);
                statusController.changeDescription();
            }
            that.relayout();
        });
        HubStar.set('searchStart', true);

    },
    defaultSearch: function() {
        this.set("adPageNo", 0);
        this.set("pageCount", 0);
        this.set("loginInfo", localStorage.loginStatus);
        this.set("googletagCmd", []);
        this.set("content", []);
        this.set("adPageNo", 0);
        var results = HubStar.Mega.find({"RquireType": "defaultSearch"});
        var that = this;

        results.addObserver('isLoaded', function() {
            if (results.get('isLoaded')) {
                that.setContent(results);
                //that.relayout();
            }
        });
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
    verify: function(verifyAccount, verifyPassword)
    {
        var emailVerify = [verifyAccount, verifyPassword];
        var that = this;
        requiredBackEnd('login', 'verify', emailVerify, 'POST', function(params) {
            localStorage.loginStatus = params;
            HubStar.set("isLogin", true);
            var s = HubStar.User.find(localStorage.loginStatus);
            var thatthat = that;
            s.addObserver('isLoaded', function() {
                if (s.get('isLoaded')) {
                    //  var model = {id: localStorage.loginStatus};
                    thatthat.transitionToRoute("user", s);
                }
            });
        });
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
        //   this.set('isWaiting', true);
        this.set('loginTime', true);
        var createInfo = [this.get('first_name'), this.get('last_name'), this.get('password'), this.get('email'), this.get('region'), this.get('gender'), this.get('age')];
        var that = this;
        requiredBackEnd('login', 'create', createInfo, 'POST', function(params) {
            localStorage.loginStatus = params.COUCHBASE_ID;
            var emailInfo = [params.USER_NAME, params.PWD_HASH];
            requiredBackEnd('emails', 'confirmationemail', emailInfo, 'POST', function(params) {

            });
            setTimeout(function() {
                //that.transitionToRoute('search');
                that.set('first_name', "");
                that.set('last_name', "");
                that.set('email', "");
                that.set('password', "");
                that.set('region', "");
                that.set('gender', "");
                that.set('age', "");
//                that.set('isWaiting', false);
                that.set('loginTime', false);
                alert("Register successful! Please acticate your account which sent to your register email before start you journal on myTrends web!");
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
    canelDropDown: function()
    {
        $('#geo-filter').toggleClass('Geo-Filter-active');
        this.set('isGeoDropdown', false);
    },
    login: function() {
        if (this.get('loginUsername') !== null && this.get('loginPassword') !== null && this.get('loginPassword') !== "" && this.get('loginPassword') !== "")
        {
            //   this.set('isWaiting', true);
            this.set('loginTime', true);
            document.getElementById("loginUsername").setAttribute("class", "login-textfield");
            document.getElementById("loginPassword").setAttribute("class", "login-textfield");
            var loginInfo = [this.get('loginUsername'), this.get('loginPassword'), this.validateEmail(this.get('loginUsername'))];
            var that = this;
            requiredBackEnd('login', 'login', loginInfo, 'POST', function(params) {
                if (params === 1) {
                    document.getElementById("loginUsername").setAttribute("class", "login-textfield error-textfield");
                    //  that.set('isWaiting', false);
                    that.set('loginTime', false);
                    $('.black-tool-tip').stop();
                    $('.black-tool-tip').css('display', 'none');
                    $('#invalid-user-name').animate({opacity: 'toggle'}).delay(8000).animate({opacity: 'toggle'});
                }// INVALID user name when the user attempts to login.
                else if (params === 0) {
                    document.getElementById("loginUsername").setAttribute("class", "login-textfield error-textfield");
//                    that.set('isWaiting', false);
                    that.set('loginTime', false);
                    $('.black-tool-tip').css('display', 'none');
                    $('#invalid-account-type').animate({opacity: 'toggle'}).delay(8000).animate({opacity: 'toggle'});
                } // INVALID ACCOUNT TYPE; User is trying to login with a user name and password when their account type is a social network login account
                else {


                    if (that.get('loginPassword') === params[0]["PWD_HASH"] && that.get('loginPassword') !== undefined) {

                        var email_activate = params[1];


                        if (email_activate === true)
                        {
                            localStorage.loginStatus = params[0].COUCHBASE_ID;
                            HubStar.set("isLogin", true);
                            that.transitionToRoute('searchIndex');
                            that.set('loginUsername', "");
                            that.set('loginPassword', "");
//                            that.set('isWaiting', false);
                            that.set('loginTime', false);
                        }
                        else
                        {
                            that.set('loginTime', false);
                            $('.black-tool-tip').css('display', 'none');
                            $('#invalid-account-type').animate({opacity: 'toggle'}).delay(8000).animate({opacity: 'toggle'});
                              alert("Register successful! Please acticate your account which sent to your register email before start you journal on myTrends web!");
                        }

                    }
                    else {
                        document.getElementById("loginPassword").setAttribute("class", "login-textfield error-textfield");
//                        that.set('isWaiting', false);
                        that.set('loginTime', false);
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
    },
    display: function(ads)
    {
        var that = this;
        if (ads["isNew"] === true) {
            googletag.cmd.push(function() {
                for (var i = 0; i < ads.length; i++) {
                    var ad = ads[i];
                    var slot1 = googletag.defineSlot(ad.path, [ad.size[0], ad.size[1]], ad.div).addService(googletag.pubads());

                    googletag.pubads().enableSingleRequest();
                    googletag.enableServices();
                    googletag.display(ad.div);
                    googletag.pubads().refresh([slot1]);
                }
            });
            ads["isNew"] = false;
        }
        else
        {
            googletag.cmd.push(function() {
                for (var i = 0; i < ads.length; i++) {
                    var ad = ads[i];
                    googletag.pubads().enableSingleRequest();
                    googletag.enableServices();
                    googletag.display(ad.div);
                }
            });
        }


        for (var i = 0; i < ads.length; i++) {
            var ad = ads[i];
            var div_id = ad.div + "_box";
            var x = document.getElementById(div_id);
            x.style.display = "block";
            x.className += " box";
        }
    },
    relayout: function()
    {
        setTimeout(function() {
            $('#masonry_container').masonry("reload");
        }, 1000);
    },

    getAds: function() {   

//        DFP code
        var adSlots = HubStar.get('ads');
        var that = this;
        var pageCount = this.get("pageCount");
        var masonryContainer = document.getElementById('masonry_container');
        try
        {
            for (var i = 0; i < adSlots[pageCount].length; i++) {
                var ad = adSlots[pageCount][i];
                var position = ad.slot_position;

                var child = masonryContainer.children[that.get("oldChildren") + position * 4];
                var masonrybox = document.createElement('div');
                masonrybox.id = ad.div + '_box';
                masonrybox.border = 0;
                masonrybox.backgroundColor = 'transparent';
                masonrybox.textAlign = "center";
                masonrybox.className = "colAd noStyle1";
                masonrybox.style.display = "none";
                var adDiv = document.createElement('div');
                adDiv.id = ad.div;
                masonrybox.appendChild(adDiv);
                masonryContainer.insertBefore(masonrybox, child);
            }
            that.set("oldChildren", masonryContainer.children.length);
            that.display(adSlots[pageCount]);
        }
        catch (err) {
            console.log("container is empty");
        }
    },
    getPageNo: function()
    {
        var pageNo = this.get('adPageNo');
        var increaseby0ne = pageNo + 1;
        this.set('adPageNo', increaseby0ne);
        return pageNo;
    },
    backToDefault: function() {
        this.defaultSearch();
        this.set('search_string', '');
        this.transitionToRoute('searchIndex');

    },
    clearSearch: function() {
        this.set('search_string', '');
        this.transitionToRoute('searchIndex');
    }
});
