
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
    isGeoDropdown: false,
    isNavigatorDropdown: false,
    isHeaderNavigatorDropdown: false,
    adPageNo: 0,
    googletagCmd: null,
    unReadCount: 0,
    categorys: [],
    temp: [],
    subcate: [],
    subcategories: [],
    applicationCategoryDropdownType: 'geoLocation',
    init: function() {
        this.defaultSearch();
        this.set('search_string', '');
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
            var ads = that.get('ads');
            var masonryContainer = document.getElementById('masonry_container');
            for (var i = 0; i < ads.length; i++) {
                var ad = ads[i];
                var position = ad.slot_position;
                var p = masonryContainer.children.length - position;
                if (p > 0) {
                    var child = masonryContainer.children[p];
                    var masonrybox = document.createElement('div');
                    masonrybox.border = 0;
                    masonrybox.backgroundColor = 'transparent';
                    masonrybox.textAlign = "center";
                    masonrybox.className = "colAd noStyle1 box";
                    masonrybox.style.display = "block";

                    var adDiv = document.createElement('div');
                    var a = document.createElement('a');
                    var elem = document.createElement("img");
                    if (position / 4 === 1) {
                        elem.setAttribute("src", "images/adsImages/resene_336x280.jpg");
                        a.href = "http://www.resene.co.nz/";
                    }
                    else if (position / 4 === 2)
                    {
                        elem.setAttribute("src", "images/adsImages/metroglasstech_300x600.jpg");
                        a.href = "http://www.hettich.co.nz/";
                    }
                    else if (position / 4 === 3)
                    {
                        elem.setAttribute("src", "images/adsImages/hettich.jpg");
                        a.href = "http://www.hettich.co.nz/";

                    }
                    a.appendChild(elem);
                    adDiv.appendChild(a);
                    masonrybox.appendChild(adDiv);
                    masonryContainer.insertBefore(masonrybox, child);
                }
            }

        });
//        var ads = this.get('ads');
//        var ad = ads[2];
//        var div_id = ad.div + "_box";
//        var x = document.getElementById(div_id);
//        x.style.display = "block";
//        x.className += " box";
//            var child = masonryContainer.children[3];
//            masonryContainer.insertBefore(x, child);


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
            if (that.get('from') === 0)
            {
                that.getAds();
            }
            that.relayout();
        }, 300);


    },
    newSearch: function() {
        this.set("googletagCmd", []);
        this.set("content", []);
        this.set("adPageNo", 0);
        this.set("from", 0);
        this.set("size", 20);
        this.set('loadingTime', true);
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
                that.set('isWaiting', false);
                that.set('loadingTime', false);
                this.set("from", this.get("size"));
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
        this.set("loginInfo", localStorage.loginStatus);
        this.set("googletagCmd", []);
        this.set("content", []);
        this.set("adPageNo", 0);
        var results = HubStar.Mega.find({"RquireType": "defaultSearch"});
        var that = this;
        results.addObserver('isLoaded', function() {
            if (results.get('isLoaded')) {
                that.setContent(results);
                that.relayout();
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
                that.transitionToRoute('search');
                that.set('first_name', "");
                that.set('last_name', "");
                that.set('email', "");
                that.set('password', "");
                that.set('region', "");
                that.set('gender', "");
                that.set('age', "");
                that.set('isWaiting', false);
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
        if (checking === "geoLocation") {
            this.set('isGeoDropdown', !this.get('isGeoDropdown'));
            $('#geo-filter').toggleClass('Geo-Filter-active');
        } else {

        }
    },
    dropdownNavigator: function() {

        this.set('isNavigatorDropdown', !this.get('isNavigatorDropdown'));
        this.set('categorys', HubStar.Cate.find({}));
        this.set('subcate', []);
        this.set('subcategories', []);

        setTimeout(function() {
            $('.Navigator-box').fadeIn("fast");
        }, 30);
    },
    showDiscoveryBar: function() {
        HubStar.set("showDiscoveryBar", true);
        this.transitionToRoute('searchIndex');
        $("#top-about-menu").fadeIn("320");
        $("#search-bar").fadeOut("320");
        $(".Navigator-box").fadeOut("320");
        $(".navbar").css("box-shadow", "");
         $(window).scrollTop(0);
    },
    dropdownHeaderNavigator: function() {
console.log('bbbb');
        this.set('isHeaderNavigatorDropdown', !this.get('isHeaderNavigatorDropdown'));
        console.log(this.get('isHeaderNavigatorDropdown'));

        this.set('categorys', HubStar.Cate.find({}));

        this.set('subcate', []);
        this.set('subcategories', []);

        setTimeout(function() {
            $('.Navigator-box').fadeIn("fast");
        }, 30);
    },
    topicSelection: function(data) {


        this.set('subcate', []);
        this.set('subcategories', []);
        for (var i = 0; i < data.get('subcate').get('length'); i++) {
            var str = data.get('subcate').objectAt(i).get('category_topic');
//           str=str.slice(0,5);
//           console.log(str);
            this.get('subcate').pushObject({'category_topic': data.get('subcate').objectAt(i).get('category_topic'), 'subcategories': data.get('subcate').objectAt(i).get('subcategories')});
        }

    },
    searchTopicSelection: function(data) {

        this.set('subcategories', []);
        for (var i = 0; i < data.get('length'); i++) {
            this.get('subcategories').pushObject({'search_topic': data.objectAt(i).get('search_topic')});
        }

    },
    topicSearch: function(search_topic) {
        this.transitionToRoute('searchIndex');
        $("#top-about-menu").css('display', 'none');
        $("#search-bar").css('display', 'block');
        this.set('search_string', search_topic);
        this.newSearch();
        this.set('isNavigatorDropdown', false);
        this.set('isHeaderNavigatorDropdown', false);
        HubStar.set("showDiscoveryBar", false);
    },
    canelDropDown: function()
    {
        $('#geo-filter').toggleClass('Geo-Filter-active');
        this.set('isGeoDropdown', false);
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
                        HubStar.set("isLogin", true);
                        that.transitionToRoute('searchIndex');
                        that.set('loginUsername', "");
                        that.set('loginPassword', "");
                        that.set('isWaiting', false);
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

//        if (that.get('adPageNo') === 1) {
//        googletag.cmd.push(function() {
//            for (var i = 0; i < ads.length; i++) {
//                var ad = ads[i];
//                googletag.defineSlot(ad.path, [ad.size[0], ad.size[1]], ad.div).addService(googletag.pubads());
//            }
//            googletag.pubads().enableSingleRequest();
//            googletag.enableServices();
//        });
//        googletag.cmd.push(function() {
//            for (var i = 0; i < ads.length; i++) {
//                var ad = ads[i];
//                googletag.display(ad.div);
//            }
//        });
//        that.set('googletagCmd', googletag.cmd);



//        }
//        else {
//            googletag.cmd.push(function() {
//                for (var i = 0; i < ads.length; i++) {
//                    var ad = ads[i];
//                    slot1 = googletag.defineSlot(ad.path, [ad.size[0], ad.size[1]], ad.div).addService(googletag.pubads());
//
//                    googletag.pubads().enableSingleRequest();
//                    googletag.enableServices();
//                    googletag.display(ad.div);
//                    googletag.pubads().refresh([slot1]);
//                }
//            });
//        }


// googletag.cmd.push(function() {
//        var slot1 = googletag.defineSlot("/12345678/Refresh_Example", [728, 90],
//        "div-gpt-ad-1327312723268-0").addService(googletag.pubads());
//        googletag.enableServices();
//        googletag.display("div-gpt-ad-1327312723268-0");
//        setInterval(function(){googletag.pubads().refresh([slot1]);}, 30000);
//        });
//        
//     
//        var masonryContainer = document.getElementById('masonry_container');
        for (var i = 0; i < ads.length; i++) {
            var ad = ads[i];
            var div_id = ad.div + "_box";
            var x = document.getElementById(div_id);
            x.style.display = "block";
            x.className += " box";
//            var child = masonryContainer.children[3];
//            masonryContainer.insertBefore(x, child);
        }




//        this.relayout();
    },
    relayout: function()
    {
        setTimeout(function() {
            $('#masonry_container').masonry("reload");
        }, 1000);
    },
    getAds: function() {

//        var requiredNumber = {"adPageNo": this.getPageNo()};
//        var that = this;
//        requiredBackEnd('tenantConfiguration', 'doesAdDisplay', requiredNumber, 'post', function(callbck) {
//            var ads = $.map(callbck, function(value, index) {
//                return [value];
//            });
//            for (var i = 0; i < ads.length; i++) {
//                var ad = ads[i];
//                var mega = HubStar.Mega.createRecord({"id": ad.div, "type": "ad"});
//                mega.store.save();
//                that.insertAt(ad.slot_position, mega);
//            }
//            that.display(ads);
//        });
//        
//        DFP code
        var adSlots = HubStar.get('ads');
        var ads = new Array();
        for (var i = 0; i < adSlots.length; i++) {
            var adslot = adSlots[i];
            for (var n = 0; n < adslot.length; n++) {
                var ad = adslot[n];
                ads.push(ad);
            }
        }
        this.set('ads', ads);
//        var masonryContainer = document.getElementById('masonry_container');
        try
        {
            for (var i = 0; i < ads.length; i++) {
                var ad = ads[i];
                var position = ad.slot_position;
                var child = masonryContainer.children[position * 4];
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
            this.display(ads);
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


