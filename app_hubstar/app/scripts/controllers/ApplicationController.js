/*global HubStar */
/*global Ember */
/*global $:false */

HubStar.ApplicationController = Ember.ArrayController.extend({
    selected_topics: "",
    isAdd: false,
    is_authentic_user: false,
    trendsUser: false,
    totalItems: 0,
    navigator_id: "",
    nextPageSpinner:false,
    navigator_id1: "",
    contentTopic: [
        {id: "1", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/newhomes.png', topic: 'New Homes'},
        {id: "2", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/renovation.png', topic: 'Renovation'},
        {id: "3", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/kitchen.png', topic: 'Kitchens'},
        {id: "4", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/bathroom.png', topic: 'Bathrooms'},
        {id: "5", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/interiordesign.png', topic: 'Interior design'},
        {id: "6", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/outdoorliving.png', topic: 'Outdoor Living'}
    ],
    contentTopicCommercial: [
        {id: "7", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/office.png', topic: 'Office'},
        {id: "8", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/civic.png', topic: 'Civic'},
        {id: "9", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/education.png', topic: 'Education'},
        {id: "10", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/hospitality.png', topic: 'Hospitality'},
        {id: "11", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/retail.png', topic: 'Retail'},
        {id: "12", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/apartment.png', topic: 'Apartment'}

    ],
    classification: "All",
    //commercial: "1",
    needs: ['status', 'applicationFeedback', 'user', 'megaCreate', 'notificationTop', 'article', 'mega', 'checkingLoginStatus', 'addCollection', 'search'],
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
    isUnReadCountZero: false,
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
    loginTime: false,
    isGeoDropdown: false,
    //  isNotification:false,
    isNavigatorDropdown: false,
    isHeaderNavigatorDropdown: false,
    adPageNo: 0,
    searchFromTopic: false, //call the applicationView is true. new search or search
    // topicSearch: false,
    googletagCmd: null,
    unReadCount: 0,
    categorys: [],
    temp: [],
    subcate: [],
    subcategories: [],
    pageCount: 0,
    applicationCategoryDropdownType: 'geoLocation',
    init: function() {

        var that = this;
        this.set('categorys', HubStar.Cate.find({}));
        this.get("categorys").then(function() {
            for (var i = 0; i < that.get("categorys").get("length"); i++)
            {
                that.get("categorys").objectAt(i).set("id", createNavigatorId());

                for (var j = 0; j < that.get("categorys").objectAt(i).get("subcate").get("length"); j++)
                {
                    that.get("categorys").objectAt(i).get("subcate").objectAt(j).set("ids", createNavigatorId());
                }
            }
        });

        requiredBackEnd('tenantConfiguration', 'doesAdDisplay', null, 'post', function(callbck) {
            var array = $.map(callbck, function(value, index) {
                return [value];
            });
            if (HubStar.get("ads") !== null && HubStar.get("ads") !== undefined) {
            }
            else
            {
                for (var i = 0; i < array.length; i++) {
                    array[i]["isNew"] = true;
                }
            }
            HubStar.set('ads', array);
            that.set("pageCount", 0);
            var address = document.URL;

            var search_id = address.split("#")[1];
            if (search_id !== undefined) {
                var search = search_id.split("/")[2];
                if (search === "default")
                {
                    that.defaultSearch();
                }
            }
        });
        HubStar.set("escVideo", false);
        this.set('search_string', '');
        this.set('loginUsername', localStorage.userName);
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
        if (localStorage.loginStatus) {
            var u = HubStar.User.find(localStorage.loginStatus);
            var that = this;
            u.then(function() {
                if ((u.get("email")).match(/@trendsideas.com/g) !== "undefined"
                        && (u.get("email")).match(/@trendsideas.com/g) !== ""
                        && (u.get("email")).match(/@trendsideas.com/g) !== null)
                {

                    that.set("is_trends_user", true);
                }
                else {

                    that.set("is_trends_user", false);
                }
            });
        }
        this.set("user", u);
        this.get("controllers.notificationTop").getClientId(localStorage.loginStatus);
        this.set("myUserProfile", "#/users/" + localStorage.loginStatus);
        this.set("myMessageBoard", "#/users/" + localStorage.loginStatus + "/messagecenter");
    },
    articleFromSearch: function()
    {
        this.get("controllers.article").set("accessFromSearchBoard", true);
    },
    reloadPage: function() {
        this.set("test", !this.get("test"));
    },
    scrollDownAction: function() {
        //this.set('loadingTime', true);
        this.set("nextPageSpinner",true);
        HubStar.set("scrollDownSearch", true);
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
        var results = HubStar.Mega.find({"RquireType": "search", "region": this.get("search_area"), "search_string": this.get("search_string"), "from": this.get("from"), "size": this.get("size"), "location": HubStar.get('geoLocation'), "classification": this.get("classification")});
        var that = this;
        results.addObserver('isLoaded', function() {
            if (results.get('isLoaded')) {
                that.setContent(results);
                if (results.get("length") === 0) {
                    that.get('controllers.applicationFeedback').statusObserver(null, "You have reached the end of your search results.", "info"); //added user flash message

                    HubStar.set("scrollDownSearch", true);

                    $(document).ready(function() {

                        $("#show_more_button").css("display", "none");

                    });
                }
            }
        });

    },
    setContent: function(results, flag)
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
        $(document).ready(function() {
            setTimeout(function() {
                for (var i = 0; i < results.get("length"); i++) {
                    var tempmega = results.objectAt(i);
                    if (tempmega.get("getPhoto") === true || tempmega.get("getArticle") === true)
                    {
                        if (tempmega.get("object_image_url") !== null) {
                            var url = tempmega.get("object_image_url").split("_");
                            var length = url.length;
                            var width = url[length - 1].split(".")[0].split("x")[0];
                            var size = Math.ceil((url[length - 1].split(".")[0].split("x")[1]) * 350 / width);
                            if (size !== undefined)
                            {
                                $("#init_photo_" + tempmega.get("id")).css({height: size});
                            }
                        }
                    }
                    else if (tempmega.get("getProfile") === true)
                    {
                        if (tempmega.get("profile").objectAt(0).get("profile_pic_url") !== null) {
                            var url = tempmega.get("profile").objectAt(0).get("profile_pic_url").split("_");
                            var length = url.length;
                            var width = url[length - 1].split(".")[0].split("x")[0];
                            var size = Math.ceil((url[length - 1].split(".")[0].split("x")[1]) * 150 / width);
                            if (size !== undefined && !isNaN(size))
                            {
                                if (size > 150) {
                                    $("#init_photo_" + tempmega.get("id")).css({height: size});
                                }
                                else
                                {
                                    $("#init_photo_" + tempmega.get("id")).css({height: 150});
                                }
                            }
                        }
                    }
                }
                //that.getAds();
                if (that.get("classification") === "commercial")
                {
                    $('#switchbarBtn').attr("style", "margin-left:28px;");
                }
                else if (that.get("classification") === "residential")
                {
                    $('#switchbarBtn').attr("style", "margin-left:0px;");
                }
                else if (that.get("classification") === "All")
                {
                    $('#switchbarBtn').attr("style", "margin-left:13px;");
                }
                if (flag === "default") {
                    that.getAds();
                    that.relayoutDefault();
                }
                else {
                    //that.set('loadingTime', false);
                    that.relayout(results.get("length"));
                }
            }, 5);
        });
    },
    newSearch: function() {
        this.set("googletagCmd", []);
        this.set("content", []);
        this.set("oldChildren", 0);
        this.set("totalItems", 0);
        this.set("from", 0);
        this.set("size", 20);
        this.set('loadingTime', true);
        this.set("pageCount", 0);
        var d = new Date();
        var start = d.getTime();
        var that = this;
        var statusController = this.get('controllers.status');
        var stats = HubStar.Stat.find({"RquireType": "firstsearch", "region": this.get("search_area"), "search_string": this.get("search_string"), "from": this.get("from"), "size": this.get("size"), "location": HubStar.get('geoLocation'), "classification": this.get("classification")});
        stats.addObserver('isLoaded', function() {
            if (stats.get('isLoaded')) {
                var stat = stats.objectAt(0);
                var megasResults = stat.get("megas");
                HubStar.set('itemNumber', megasResults.get("length"));
                that.setContent(megasResults, "new");
                if (megasResults.get("length") < 20) {
                    HubStar.set("scrollDownSearch", true);
                    $(document).ready(function() {

                        $("#show_more_button").css({display: "none"});

                    });

                }



                that.set("from", that.get("size"));

                var d = new Date();
                var end = d.getTime();
                var time = that.getResponseTime(start, end);
                statusController.set("searchResultNum", stat.get('numberofresults'));
                statusController.set("time", time);
                statusController.changeDescription();
            }

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

        this.set("totalItems", 0);
        this.set("oldChildren", 0);


        if (localStorage.getItem("loginStatus") === null || (localStorage.loginStatus === "")) {
        } else {
            this.set('loadingTime', true);
        }

        var results = HubStar.Mega.find({"RquireType": "defaultSearch"});
        var that = this;
        HubStar.set("scrollDownSearch", true);
        results.addObserver('isLoaded', function() {
            if (results.get('isLoaded')) {
                that.setContent(results, "default");
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
            localStorage.checkUser = "newUser";
            HubStar.set("isLogin", true);

            that.transitionToRoute("searchIndexTom");


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

        $('#register-with-email-step-4').css('display', 'block');
        $('#register-with-email-step-3').css('display', 'none');
        $('#user-login-pane').css('display', 'none');
    },
    next: function() {

        $('#register-with-email-step-3').css('display', 'block');
        $('#register-with-email-step-2').css('display', 'none');
        $('#click-register-social').css('display', 'none');
        $('#click-register').css('display', 'none');
        $('.learnmore-btn').css('display', 'none');

    },
    backRegister: function() {
        $('#register-with-email-step-3').css('display', 'none');
        $('#register-with-email-step-2').css('display', 'block');
         $('#click-register-social').css('display', 'block');
        $('#click-register').css('display', 'block');
        $('.learnmore-btn').css('display', 'block');
    },
    encrypt: function(encryptString) {
        var tempstr = '';
        for (var a = 0; a < encryptString.length; a++) {
            tempstr = tempstr + (parseInt(encryptString.charCodeAt(a).toString(16), 16) + 10).toString(16);
        }
        return tempstr;
    },
    done: function() {
        this.set('loginTime', true);
        var createInfo = [this.get('first_name'), this.get('last_name'), this.get('password'), this.get('email'), this.get('region'), this.get('gender'), this.get('age'), this.get('selected_topics')];
        var that = this;
        $('#register-with-email-step-4').css('display', 'none');
        //     $('#skipRegister').css('display', 'block');
        requiredBackEnd('login', 'create', createInfo, 'POST', function(params) {
            localStorage.userName = params.USER_NAME;
            that.set('loginUsername', localStorage.userName);
            localStorage.userType = "email";
            localStorage.loginState = "login";

            var emailInfo = [params.USER_NAME, that.encrypt(params.USER_NAME), that.encrypt(params.PWD_HASH)];
            requiredBackEnd('emails', 'confirmationemail', emailInfo, 'POST', function(params) {

            });
            setTimeout(function() {
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
//    skip: function(){
//       // HubStar.set("isLogin", true);
//       this.transitionToRoute("searchIndex");
//    },
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
            $('#geo-filter').addClass('Geo-Filter-active');

        } else if (checking === "notification") {

            this.set("isNotification", !this.get("isNotification"));
            this.get("controllers.notificationTop").getClientId(localStorage.loginStatus);
            $('#Geo-Filter').toggleClass('Geo-Filter-active');

        }
    },
    canelDropDown: function()
    {
        $('#geo-filter').toggleClass('Geo-Filter-active');
        this.set('isGeoDropdown', !this.get('isGeoDropdown'));

    },
    dropdownNavigator: function() {

        //console.log("ssssssssssssssssssss");
        this.set('isNavigatorDropdown', !this.get('isNavigatorDropdown'));


        var that = this;
        this.get("categorys").then(function() {
            if (that.get("classification") === "commercial")
            {
                $('#switchbarBtn1').attr("style", "margin-left:28px;");
                $("#Commercial1").css("opacity", "1");
                $("#Residential1").css("opacity", "0.4");
            }
            else if (that.get("classification") === "residential")
            {
                $('#switchbarBtn1').attr("style", "margin-left:0px;");
                $("#Commercial1").css("opacity", "0.4");
                $("#Residential1").css("opacity", "1");
            }
            else if (that.get("classification") === "All")
            {
                $('#switchbarBtn1').attr("style", "margin-left:13px;");
                $("#Commercial1").css("opacity", "1");
                $("#Residential1").css("opacity", "1");
            }
        });
        this.set('subcate', []);
        this.set('subcategories', []);

        setTimeout(function() {
            $('.Navigator-box').fadeIn("fast");
        }, 30);
    },
    showDiscoveryBar: function() {

        HubStar.set("showDiscoveryBar", true);

        HubStar.set("escVideo", true);
        HubStar.set("defaultSearch", true);
        this.transitionToRoute('indexIndex');
        this.defaultSearch();
        $("#top-about-menu").fadeIn("320");
        $("#search-bar").fadeOut("320");
        $(".Navigator-box").fadeOut("320");
        $(".navbar").css("box-shadow", "");
        //    $('#masonry_container').attr('style', "top:100px;position:relative");
        $('#masonry_wrapper').attr('style', "top:100px;position:relative");

    },
    closeDropdownNavigator: function() {
        this.set('isNavigatorDropdown', false);
        this.set('isHeaderNavigatorDropdown', false);
    },
    dropdownHeaderNavigator: function() {

        this.set('isHeaderNavigatorDropdown', !this.get('isHeaderNavigatorDropdown'));
        var that = this;
        this.get("categorys").then(function() {

            if (that.get("classification") === "commercial")
            {
                $('#switchbarBtn1').attr("style", "margin-left:28px;");
            }
            else if (that.get("classification") === "residential")
            {
                $('#switchbarBtn1').attr("style", "margin-left:0px;");
            }
            else if (that.get("classification") === "All")
            {
                $('#switchbarBtn1').attr("style", "margin-left:13px;");
            }
        });

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

            this.get('subcate').pushObject({'ids': data.get('subcate').objectAt(i).get("ids"), 'category_topic': data.get('subcate').objectAt(i).get('category_topic'), 'subcategories': data.get('subcate').objectAt(i).get('subcategories')});
        }
        $('#navigator_id_' + this.get("navigator_id")).removeClass('selected-navigation');
        this.set("navigator_id", data.get("id"));
        $('#navigator_id_' + data.get("id")).addClass('selected-navigation');
    },
    searchTopicSelection: function(data, ids) {

        this.set('subcategories', []);
        for (var i = 0; i < data.get('length'); i++) {
            this.get('subcategories').pushObject({'search_topic': data.objectAt(i).get('search_topic')});
        }
        $('#navigator_id1_' + this.get("navigator_id1")).removeClass('selected-navigation');
        this.set("navigator_id1", ids);
        $('#navigator_id1_' + ids).addClass('selected-navigation');
    },
    topicSearch: function(search_topic) {
        HubStar.set("escVideo", false);
        this.transitionToRoute('search', {id: search_topic});
        $("#top-about-menu").css('display', 'none');
        $("#search-bar").css('display', 'block');
        this.set('search_string', search_topic);
//        this.newSearch();
        this.set('isNavigatorDropdown', false);
        this.set('isHeaderNavigatorDropdown', false);
        HubStar.set("showDiscoveryBar", false);
    },
    login: function() {
        if (this.get('loginUsername') !== null && this.get('loginPassword') !== null && this.get('loginUsername') !== "" && this.get('loginPassword') !== "")
        {
            this.set('loginTime', true);
            document.getElementById("loginUsername").setAttribute("class", "login-textfield");
            document.getElementById("loginPassword").setAttribute("class", "login-textfield");
            var loginInfo = [this.get('loginUsername'), this.get('loginPassword'), this.validateEmail(this.get('loginUsername'))];
            var that = this;
            requiredBackEnd('login', 'login', loginInfo, 'POST', function(params) {
                if (params === 1) {
                    document.getElementById("loginUsername").setAttribute("class", "login-textfield error-textfield");
                    that.set('loginTime', false);
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


                    if (that.get('loginPassword') === params[0]["PWD_HASH"] && that.get('loginPassword') !== undefined) {

                        var email_activate = params[1];


                        if (email_activate === true)
                        {
                            localStorage.loginStatus = params[0].COUCHBASE_ID;
                            localStorage.userName = that.get('loginUsername');
                            localStorage.userType = "email";
                            HubStar.set("isLogin", true);
                            that.transitionToRoute('searchIndexTom');
                            that.init();




                            HubStar.set("showDiscoveryBar", true);
                            that.set('loginPassword', "");
                            that.set('loginTime', false);
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
            var height = ad.size[1];
            var div_id = ad.div + "_box";
            var x = document.getElementById(div_id);
            x.style.display = "block";
            x.className += " box";

            x.style.height = height + "px";
        }
    },
    relayout: function(l)
    {
        //console.log(l);
        this.set('loadingTime', false);
        this.set("nextPageSpinner",false);
        if (l !== 0) {
            this.getAds();
            HubStar.set("scrollDownSearch", false);
            if (this.get("pageCount") === 0)
            {
                l = l + 3;
            }
            else if (this.get("pageCount") === 1)
            {
                l = l + 3;
            }
            else if (this.get("pageCount") === 2)
            {
                l = l + 2;
            }

            var that = this;

            var x = document.getElementById("masonry_container");
            var cusid_ele = x.getElementsByClassName('box');
            var items = Array();
            for (var i = this.get("totalItems"); i < this.get("totalItems") + l; i++) {
                if (cusid_ele[i] !== undefined) {
                    var item = cusid_ele[i].parentNode;
                    if (item.id !== "masonry_container") {
                        items.push(item);
                    }
                }
            }
            this.set("totalItems", this.get("totalItems") + l);
            $('#masonry_container').append(items).masonry('appended', items);
        }
    },
    relayoutDefault: function()
    {
        var that = this;
        setTimeout(function() {
            $('#masonry_container').masonry("reloadItems");
            setTimeout(function() {
                $('#masonry_container').masonry();
                that.set('loadingTime', false);
            }, 50);
        }, 50);
    },
    getAds: function() {

//        DFP code


        try
        {
            var adSlots = HubStar.get('ads');
            var that = this;
            var pageCount = this.get("pageCount");
            var masonry_container = document.querySelector('#masonry_container');
            var cusid_ele = masonry_container.getElementsByClassName('box');
            var masonryContainer = cusid_ele[1].parentNode.parentNode;
            for (var i = 0; i < adSlots[pageCount].length; i++) {
                var ad = adSlots[pageCount][i];
                var position = ad.slot_position;
                var child = masonryContainer.children[that.get("totalItems") + position];
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
                var ad = document.createElement('div');
                ad.className = "tomtomtom";
                ad.appendChild(masonrybox);
                masonryContainer.insertBefore(ad, child);

            }
            that.set("oldChildren", masonryContainer.children.length);

            that.display(adSlots[pageCount]);
        }
        catch (err) {
//            console.log("container is empty");
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
        this.transitionToRoute('searchIndexTom');

    },
    clearSearch: function() {
        this.set('search_string', '');
        this.transitionToRoute('searchIndexTom');
    }
});
