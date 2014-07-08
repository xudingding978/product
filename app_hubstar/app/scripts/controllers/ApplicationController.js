/*global HubStar */
/*global Ember */
/*global $:false */

HubStar.ApplicationController = Ember.ArrayController.extend({
    selected_topics: "",
    isAdd: false,
    error: false,
    is_authentic_user: false,
    trendsUser: false,
    totalItems: 0,
    navigator_id: "",
    nextPageSpinner: false,
    newProfile: false,
    navigator_id1: "",
    headerAbout: false,
    userProfile: false,
    contentTopicResidential: [
        {id: "1", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/newhomes.png', topic: 'New Homes'},
        {id: "2", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/renovation.png', topic: 'Renovation'},
        {id: "3", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/kitchen.png', topic: 'Kitchens'},
        {id: "4", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/bathroom.png', topic: 'Bathrooms'},
        {id: "5", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/interiordesign.png', topic: 'Interior design'},
        {id: "6", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/outdoorliving.png', topic: 'Outdoor Living'},
        {id: "13", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/hometheatre.png', topic: 'Home theatre'}
    ],
    contentTopicCommercial: [
        {id: "7", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/office.png', topic: 'Office'},
        {id: "8", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/civic.png', topic: 'Civic'},
        {id: "9", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/education.png', topic: 'Education'},
        {id: "10", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/hospitality.png', topic: 'Hospitality'},
        {id: "11", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/retail.png', topic: 'Retail'},
        {id: "12", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/apartment.png', topic: 'Apartment'},
        {id: "14", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/refurbishment.png', topic: 'Refurbishment'}
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
    from: 0,
    profiles: null,
    size: null,
    photo_url: null,
    isUnReadCountZero: false,
    userName: "",
    password: "",
    repeat: "",
    email: "",
    loginUsername: "",
    loginStatus: null,
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
    residentialKeyword: true,
    loadingTime: false,
    localStorage: "",
    applicationCategoryDropdownType: 'geoLocation',
    total_profiels: 0,
    actions: {
        dropdown: function(checking) {
            if (checking === "geoLocation") {
                this.set("isNotification", false);
                this.set('headerAbout', false);
                this.set('userProfile', false);
                this.set('isGeoDropdown', !this.get('isGeoDropdown'));
                $('#geo-filter').toggleClass('Geo-Filter-active');
                $('#notification-filter').removeClass('Geo-Filter-active');
                $('#top-about-menu').removeClass('Geo-Filter-active');
                //     $('#user-header-menu').removeClass('Geo-Filter-active');

            } else if (checking === "notification") {
                this.set("isNotification", !this.get("isNotification"));
                this.set('headerAbout', false);
                this.set('isGeoDropdown', false);
                this.set('userProfile', false);
                $('#notification-filter').addClass('Geo-Filter-active');
                this.get("controllers.notificationTop").getClientId(localStorage.loginStatus);
                $('#geo-filter').removeClass('Geo-Filter-active');
                $('#top-about-menu').removeClass('Geo-Filter-active');
                //      $('#user-header-menu').removeClass('Geo-Filter-active');
            }
            else if (checking === "about") {
                this.set("isNotification", false);
                this.set('isGeoDropdown', false);
                this.set('headerAbout', !this.get('headerAbout'));
                this.set('userProfile', false);
                $('#geo-filter').removeClass('Geo-Filter-active');
                $('#notification-filter').removeClass('Geo-Filter-active');
                $('#top-about-menu').toggleClass('Geo-Filter-active');
                //    $('#user-header-menu').removeClass('Geo-Filter-active');
            }
            else if (checking === "user") {
                this.set("isNotification", false);
                this.set('isGeoDropdown', false);
                this.set('headerAbout', false);
                this.set('userProfile', !this.get('userProfile'));
                $('#geo-filter').removeClass('Geo-Filter-active');
                $('#notification-filter').removeClass('Geo-Filter-active');
                $('#top-about-menu').removeClass('Geo-Filter-active');
            }
        },
        closeTopAd: function() {
            $(".user-top").css("height", "120px");
            $("#group-top").css("top", "70px");
            this.searchSmallScreen();
            var tempComment = [this.get("user").get("id")];
            var that = this;
            requiredBackEnd('users', 'SetTopAds', tempComment, 'POST', function() {
                HubStar.set("isTopAdDisplay", false);
                that.get("user").set("is_top_ad_display", false);
            });
        },
        ctalogin: function() {
            HubStar.set('checkLoginStatus', true);
            $(document).ready(function() {
                setTimeout(function() {


                    $("#cta-popup").css("display", "none");
                    $("#profiles-main-container").css("display", "block");
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

        },
        ctaregister: function() {
            HubStar.set('checkLoginStatus', true);
            $(document).ready(function() {
                setTimeout(function() {
                    $("#cta-popup").css("display", "none");
                    $("#profiles-main-container").css("display", "block");
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
        showDiscoveryBar: function() {

            HubStar.set("showDiscoveryBar", true);
            if (HubStar.get("isTopAdDisplay")) {
                $("#top_bar_ads").css({"position": "relative", "top": "10px"});
            }
            HubStar.set("escVideo", true);
            HubStar.set("defaultSearch", true);
            this.transitionToRoute('indexIndex');
            this.defaultSearch();
            $(".search-bar-on-small-screen").css('display', "none");
            $("#search-bar").css('display', "none");
            $("#topResidentialCommerical").css('display', "none");
            $(".Navigator-box").fadeOut("320");
            $(".navbar").css("box-shadow", "");
            var that = this;
            $(document).ready(function() {
                setTimeout(function() {
                    that.residentialCommercialStatus();
                    that.changeBackground();

                }, 50);

            });

            $('#masonry_wrapper').attr('style', "top:100px;position:relative");
            this.set("isNotification", false);
            this.set('headerAbout', false);
            this.set('userProfile', false);
            this.set('isGeoDropdown', false);
        },
        closeDropdownNavigator: function() {
            this.set('isNavigatorDropdown', false);
            this.set('isHeaderNavigatorDropdown', false);
        },
         topicSelection: function(data) {
        this.set('subcate', []);
        this.set('subcategories', []);
        for (var i = 0; i < data.get('subcate').get('length'); i++) {
            //var str = data.get('subcate').objectAt(i).get('category_topic');

            this.get('subcate').pushObject({'ids': data.get('subcate').objectAt(i).get("ids"), 'category_topic': data.get('subcate').objectAt(i).get('category_topic'), 'subcategories': data.get('subcate').objectAt(i).get('subcategories')});
        }
        $('#navigator_id_' + this.get("navigator_id")).removeClass('selected-navigation');
        this.set("navigator_id", data.get("ids"));
        $('#navigator_id_' + data.get("ids")).addClass('selected-navigation');
    },
        topicSearch: function(search_topic) {
        HubStar.set("escVideo", false);
        this.transitionToRoute('search', {id: search_topic});
        $("#search-bar").css('display', 'block');
        this.set('search_string', search_topic);
//        this.newSearch();
        this.set('isNavigatorDropdown', false);
        this.set('isHeaderNavigatorDropdown', false);
        HubStar.set("showDiscoveryBar", false);
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
        scrollDownAction: function() {
        //this.set('loadingTime', true);
        this.set("nextPageSpinner", true);
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
        var results;
        if (localStorage.geoLocation === "International") {
            results = HubStar.Stat.find({"RquireType": "search", "region": this.get("search_area"), "search_string": this.get("search_string"), "from": this.get("from"), "size": this.get("size"), "location": "Global", "classification": localStorage.resOrcom});
        } else {
            results = HubStar.Stat.find({"RquireType": "search", "region": this.get("search_area"), "search_string": this.get("search_string"), "from": this.get("from"), "size": this.get("size"), "location": localStorage.geoLocation, "classification": localStorage.resOrcom});
        }

        var that = this;
        results.then(function() {
            var stat = results.objectAt(0);
            var megasResults = stat.get("megas");
            that.setContent(megasResults);
            if (results.get("length") === 0) {
                that.get('controllers.applicationFeedback').statusObserver(null, "You have reached the end of your search results.", "info"); //added user flash message

                HubStar.set("scrollDownSearch", true);

                $(document).ready(function() {

                    $("#show_more_button").css("display", "none");

                });
            }
        });

    }
    },
    init: function() {
        HubStar.set("isTopAdDisplay", true);
        HubStar.set("isAddCollection", false);
        HubStar.set("isShareEmail", false);

        var that = this;

        this.set('categorys', HubStar.Cate.find({}));
        this.get("controllers.notificationTop").getClientId(localStorage.loginStatus);
        requiredBackEnd('tenantConfiguration', 'doesAdDisplay', null, 'post', function(callbck) {
            var array = $.map(callbck, function(value, index) {
                return [value];
            });
            if (HubStar.get("ads") !== null && HubStar.get("ads") !== undefined) {
            }
            else
            {
                for (var i = 0; i < array.length; i++) {
                    array[i].isNew = true;
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

        if (localStorage.userType !== 'email' && localStorage.checkSocialUser === 'newSocialUser') {
            ga('Trends.send', 'event', 'button', 'click', 'SignUp');
            HubStar.set('checkLoginStatus', true);
            setTimeout(function() {
                $("#cta-popup").css("display", "none");
                $("#profiles-main-container").css("display", "block");
                $('#register-with-social-select-interests').css('display', 'block');
                $('#user-login-pane').css('display', 'none');
            }, 1);
        }
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
    displayTopAds: function() {
        $(document).ready(function() {
            setTimeout(function() {
                var photo = document.getElementById("search_wall_top");
                for (var i = 0; i < HubStar.get('objectAds')[3].length; i++)
                {
                    var ad = HubStar.get('objectAds')[3][i];
                    if (document.getElementById(ad.div) === null) {
                        var adDiv = document.createElement('div');
                        adDiv.id = ad.div;
                        var height = ad.size[1];
                        var width = ad.size[0];
                        adDiv.style.display = "block";
                        adDiv.style.height = height + "px";
                        adDiv.style.width = width + "px";
                        if (photo !== null) {
                            photo.appendChild(adDiv);
                            if (ad.isNew === true) {
                                googletag.cmd.push(function() {
                                    var slot1 = googletag.defineSlot(ad.path, [ad.size[0], ad.size[1]], ad.div).addService(googletag.pubads());
                                    ad.slot1 = slot1;
                                    googletag.pubads().enableSingleRequest();
                                    googletag.enableServices();
                                    googletag.display(ad.div);
                                    googletag.pubads().refresh([slot1]);
                                });
                                ad.isNew = false;
                            }
                            else
                            {
                                googletag.cmd.push(function() {
                                    googletag.pubads().enableSingleRequest();
                                    googletag.enableServices();
                                    googletag.display(ad.div);
                                    googletag.pubads().refresh([ad.slot1]);
                                });
                            }
                        }
                    }
                }
            }, 1500);
        });
    },
    grapData: function() {
        HubStar.set("profiles", []);
        HubStar.set("userAdministrator", 0);
        HubStar.set("userEditor", 0);
        HubStar.set("userCreator", 0);
        var that = this;
        if (localStorage.resOrcom === "" || localStorage.resOrcom === null || localStorage.resOrcom === undefined) {
            localStorage.resOrcom = "All";
        }
        this.set("geoLocation", localStorage.geoLocation);

        if (localStorage.loginStatus) {
            var u = HubStar.User.find(localStorage.loginStatus);
            u.then(function() {
                HubStar.set("profiles", []);
                HubStar.set("groups", []);
                for (var i = 0; i < u.get("groups").get("length"); i++) {
                    var id = u.get("groups").objectAt(i).get("group_id");
                    var name = u.get("groups").objectAt(i).get("group_name");
                    var pic = u.get("groups").objectAt(i).get("group_pic_url");
                    var url = pic.split("_");
                    var length = url.length;
                    var width = Math.ceil(url[length - 1].split(".")[0].split("x")[0]);
                    var height = Math.ceil(url[length - 1].split(".")[0].split("x")[1]);
                    var heightNew = 50;
                    var widthNew = 50;
                    if (width > height)
                    {
                        heightNew = Math.ceil(height / width * 50);
                        widthNew = 50;
                    }
                    else
                    {
                        heightNew = 50;
                        widthNew = Math.ceil(width / height * heightNew);
                    }
                    width = widthNew + "px";
                    height = heightNew + "px";
                    HubStar.get("groups").pushObject({'group_id': id, 'group_name': name, 'group_pic_url': pic,
                        'width': width,
                        'height': height
                    });
                }
                if (HubStar.get("top_ad_display") === true) {
                    HubStar.set("isTopAdDisplay", u.get("is_top_ad_display"));
                }
                else
                {
                    HubStar.set("isTopAdDisplay", false);
                }
                if ((u.get("email")).match(/@trendsideas.com/g) !== "undefined"
                        && (u.get("email")).match(/@trendsideas.com/g) !== ""
                        && (u.get("email")).match(/@trendsideas.com/g) !== null)
                {
                    that.set("is_trends_user", true);
                }
                else {
                    that.set("is_trends_user", false);
                }
                if (HubStar.get("isTopAdDisplay")) {
                    setTimeout(function() {
                        that.displayTopAds();
                    }, 200);
                }
                for (var i = 0; i < u.get("profiles").get("length"); i++) {
                    var id = u.get("profiles").objectAt(i).get("profile_id");
                    var name = u.get("profiles").objectAt(i).get("profile_name");
                    var pic = u.get("profiles").objectAt(i).get("profile_pic");
                    var type = u.get("profiles").objectAt(i).get("type");
                    var isAdministrator = false;
                    var isEditor = false;
                    var isCreator = false;
                    if (type === "administrator")
                    {
                        isAdministrator = true;
                        HubStar.set("userAdministrator", HubStar.get("userAdministrator") + 1);
                    }
                    else if (type === "editor")
                    {
                        isEditor = true;
                        HubStar.set("userEditor", HubStar.get("userEditor") + 1);
                    }
                    else if (type === "creator")
                    {
                        isCreator = true;
                        HubStar.set("userCreator", HubStar.get("userCreator") + 1);
                    }
                    var url = pic.split("_");
                    var length = url.length;
                    var width = Math.ceil(url[length - 1].split(".")[0].split("x")[0]);
                    var height = Math.ceil(url[length - 1].split(".")[0].split("x")[1]);
                    var widthTop = Math.ceil(0);
                    var heightTop = Math.ceil(0);
                    if (width > height)
                    {
                        height = Math.ceil(135 / width * height);
                        width = 135;
                        heightTop = Math.ceil(50 / width * height);
                        widthTop = 50;
                    }
                    else
                    {
                        width = Math.ceil(135 / height * width);
                        height = 135;
                        widthTop = Math.ceil(50 / height * width);
                        heightTop = 50;
                    }
                    width = width + "px";
                    height = height + "px";
                    widthTop = widthTop + "px";
                    heightTop = heightTop + "px";
                    HubStar.get("profiles").pushObject({'profile_id': id, 'profile_name': name, "profile_pic": pic, "type": type,
                        'isAdministrator': isAdministrator, "isEditor": isEditor, "isCreator": isCreator, "height": height, "width": width,
                        "heightTop": heightTop, "widthTop": widthTop
                    });
                }
                that.set("total_profiels", HubStar.get("profiles").length);
            });
        }
        else
        {
            setTimeout(function() {
                that.displayTopAds();
            }, 5200);
        }
        this.set("user", u);
        this.set("myUserProfile", "#/users/" + localStorage.loginStatus);
        this.set("myMessageBoard", "#/users/" + localStorage.loginStatus + "/messagecenter");
    },
    searchSmallScreen: function() {

        if ($(window).width() > 1200) {
            $(".search-bar-on-small-screen").css('display', "none");
            if (HubStar.get('showDiscoveryBar') === true) {

                $("#search-bar").css('display', "none");
                if (HubStar.get("isTopAdDisplay")) {
                    $("#top_bar_ads").css({"position": "relative", "top": "10px"});

                }
                $("#topResidentialCommerical").css('display', "none");
            } else {
                if (HubStar.get("isTopAdDisplay")) {
                    $('#masonry_wrapper').css('top', "240px");
                    if (HubStar.get("isTopAdDisplay")) {
                        $("#top_bar_ads").css({"position": "fixed", "top": "90px"});

                    }
                }
                else
                {
                    $('#masonry_wrapper').css('top', "100px");
                }
                $("#search-bar").css('display', "block");
                $("#topResidentialCommerical").css('display', "block");
            }
        } else {
            $("#search-bar").css('display', "none");
            $("#topResidentialCommerical").css('display', "none");
            if (HubStar.get('showDiscoveryBar') === true) {
                if (HubStar.get("isTopAdDisplay")) {
                    $("#top_bar_ads").css({"position": "relative", "top": "10px"});

                }
                $(".search-bar-on-small-screen").css('display', "none");
            } else {
                $(".search-bar-on-small-screen").css('display', "block");
                if (HubStar.get("isTopAdDisplay")) {
                    $("#top_bar_ads").css({"position": "fixed", "top": "140px"});
                    $('#masonry_wrapper').css('top', "290px");
                }
                else
                {
                    $('#masonry_wrapper').css('top', "150px");
                }
            }
        }

    },
    changeBackground: function() {
        if (localStorage.resOrcom === "residential" || localStorage.resOrcom === "All") {
            $('#discovery_search_bar_wrapper').fadeOut(500, function() {
                $(this).css({"background": " url(../../images/discoverybarbg.jpg) "}).fadeIn(500);
            });

            $('.navbar').fadeOut(500, function() {
                $(this).css({"background": " url(../../images/landingpagebg.jpg)"}).fadeIn(500);
            });

        } else if (localStorage.resOrcom === "commercial") {
            $('#discovery_search_bar_wrapper').fadeOut(500, function() {
                $(this).css({"background": " url(../../images/commercialbg.jpg)", "background-position": "center center"}).fadeIn(500);
            });

            $('.navbar').fadeOut(500, function() {
                $(this).css({"background": "url(../../images/commercialbg.jpg)"}).fadeIn(500);

            });

        }

    },
    residentialCommercialStatus: function() {

        if (localStorage.resOrcom === "commercial")
        {
            this.set('residentialKeyword', false);
            $("#commercial").addClass("residentialCommerical-selected");
            $("#residential").removeClass("residentialCommerical-selected");
            $("#commercial1").addClass("residentialCommerical-selected");
            $("#residential1").removeClass("residentialCommerical-selected");
            $("#commercial2").addClass("residentialCommerical-selected");
            $("#residential2").removeClass("residentialCommerical-selected");
        }
        else if (localStorage.resOrcom === "residential")
        {
            this.set('residentialKeyword', true);
            $("#commercial").removeClass("residentialCommerical-selected");
            $("#residential").addClass("residentialCommerical-selected");
            $("#commercial1").removeClass("residentialCommerical-selected");
            $("#residential1").addClass("residentialCommerical-selected");
            $("#commercial2").removeClass("residentialCommerical-selected");
            $("#residential2").addClass("residentialCommerical-selected");
        }
        else if (localStorage.resOrcom === "All")
        {
            this.set('residentialKeyword', true);
            $("#commercial").addClass("residentialCommerical-selected");
            $("#residential").addClass("residentialCommerical-selected");
            $("#commercial1").addClass("residentialCommerical-selected");
            $("#residential1").addClass("residentialCommerical-selected");
            $("#commercial2").addClass("residentialCommerical-selected");
            $("#residential2").addClass("residentialCommerical-selected");
        }
        this.set('subcate', []);
        this.set('subcategories', []);
        for (var i = 0; i < this.get("categorys").get("length"); i++)
        {
            this.get("categorys").objectAt(i).set("classification", localStorage.resOrcom);
        }
    },
    articleFromSearch: function()
    {
        this.get("controllers.article").set("accessFromSearchBoard", true);
    },
    reloadPage: function() {
        this.set("test", !this.get("test"));
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
                    var url;
                    var length;
                    var width;
                    var size;
                    if (tempmega.get("getPhoto") === true || tempmega.get("getArticle") === true)
                    {
                        if (tempmega.get("object_image_url") !== null) {
                            url = tempmega.get("object_image_url").split("_");
                            length = url.length;
                            width = url[length - 1].split(".")[0].split("x")[0];
                            size = Math.ceil((url[length - 1].split(".")[0].split("x")[1]) * 350 / width);
                            if (size !== undefined)
                            {
                                $("#init_photo_" + tempmega.get("id")).css({height: size});
                            }
                        }
                    }
                    else if (tempmega.get("getVideo") === true)
                    {
                        $("#init_photo_" + tempmega.get("id")).css({height: 263});
                    }
                    else if (tempmega.get("getProfile") === true)
                    {
                        if (tempmega.get("profile").objectAt(0).get("profile_pic_url") !== null) {
                            url = tempmega.get("profile").objectAt(0).get("profile_pic_url").split("_");
                            length = url.length;
                            width = url[length - 1].split(".")[0].split("x")[0];
                            size = Math.ceil((url[length - 1].split(".")[0].split("x")[1]) * 150 / width);
                            if (size !== undefined && !isNaN(size))
                            {

                                if (size > 150) {
                                    $("#init_photo_" + tempmega.get("profile").objectAt(0).get("getID")).css({height: size});
                                }
                                else
                                {
                                    $("#init_photo_" + tempmega.get("profile").objectAt(0).get("getID")).css({height: 150});
                                }
                            }
                        }
                    }
                }
                //that.getAds();
                if (flag === "default") {
                    var ads = that.getAds();
                    that.display(ads);
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
        if (this.get('loadingTime') === false) {
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
            var stats;
            if (localStorage.geoLocation === "International") {
                stats = HubStar.Stat.find({"RquireType": "firstsearch", "region": this.get("search_area"), "search_string": this.get("search_string"), "from": this.get("from"), "size": this.get("size"), "location": "Global", "classification": localStorage.resOrcom});
            } else {
                stats = HubStar.Stat.find({"RquireType": "firstsearch", "region": this.get("search_area"), "search_string": this.get("search_string"), "from": this.get("from"), "size": this.get("size"), "location": localStorage.geoLocation, "classification": localStorage.resOrcom});
            }

            stats.addObserver('isLoaded', function() {
                if (stats.get('isLoaded')) {
                    var stat = stats.objectAt(0);
                    var megasResults = stat.get("megas");
                    HubStar.set('itemNumber', megasResults.get("length"));
                    that.setContent(megasResults, "new");
                    if (megasResults.get("length") < 20) {

                        $(document).ready(function() {
                            setTimeout(function() {
                                HubStar.set("scrollDownSearch", true);
                            }, 100);

                            $("#show_more_button").css({display: "none"});

                        });

                    }

                    var d = new Date();
                    var end = d.getTime();
                    var time = that.getResponseTime(start, end);
                    statusController.set("searchResultNum", stat.get('numberofresults'));
                    statusController.set("time", time);
                    statusController.changeDescription();
                }

            });
            HubStar.set('searchStart', true);
        }
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


        //if (localStorage.getItem("loginStatus") === null || (localStorage.loginStatus === "")) {
        // } else {
        this.set('loadingTime', true);
        //}

        var results = HubStar.Mega.find({"RquireType": "defaultSearch"});
        var that = this;

        $(".search-bar-on-small-screen").css('display', "none");
        $("#search-bar").css('display', "none");
        $("#topResidentialCommerical").css('display', "none");

        HubStar.set("scrollDownSearch", true);
        results.then(function() {
            that.setContent(results, "default");
        }, function() {
            that.setContent(results, "default");
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
            that.defaultSearch();

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

        var updateTopic = [this.get("loginStatus"), this.get('selected_topics')];
        var that = this;
        requiredBackEnd('login', 'selecttopic', updateTopic, 'POST', function() {
            setTimeout(function() {
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
    next: function() {


        var createInfo = [this.get('first_name'), this.get('last_name'), this.get('password'), this.get('email'), this.get('region'), this.get('gender'), this.get('age')];
        var that = this;
        requiredBackEnd('login', 'create', createInfo, 'POST', function(params) {
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
    encrypt: function(encryptString) {
        var tempstr = '';
        for (var a = 0; a < encryptString.length; a++) {
            tempstr = tempstr + (parseInt(encryptString.charCodeAt(a).toString(16), 16) + 10).toString(16);
        }
        return tempstr;
    },
    done: function() {

        $('#register-with-email-step-4').css('display', 'none');
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
    setmale: function() {
        this.set('gender', "male");
    },
    setfemale: function() {
        this.set('gender', "female");
    },
    dropdownNavigator: function() {
        this.set('isNavigatorDropdown', !this.get('isNavigatorDropdown'));
        var that = this;
        this.get("categorys").then(function() {
            $(document).ready(function() {
                setTimeout(function() {
                    that.residentialCommercialStatus();
                }, 50);
            });
        });
        this.set('subcate', []);
        this.set('subcategories', []);

        setTimeout(function() {
            $('.Navigator-box').fadeIn("fast");
        }, 30);
    },
    dropdownHeaderNavigator: function() {

        this.set('isHeaderNavigatorDropdown', !this.get('isHeaderNavigatorDropdown'));
        this.get("categorys").then(function() {
            var that = this;
            $(document).ready(function() {
                setTimeout(function() {
                    that.residentialCommercialStatus();
                }, 50);
            });
        });
        this.set('subcate', []);
        this.set('subcategories', []);

        setTimeout(function() {
            $('.Navigator-box').fadeIn("fast");
        }, 30);
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
                    if (that.get('loginPassword') === params[0].PWD_HASH && that.get('loginPassword') !== undefined) {

                        var email_activate = params[1];
                        if (email_activate === true)
                        {
                            localStorage.loginStatus = params[0].COUCHBASE_ID;
                            localStorage.userName = that.get('loginUsername');
                            localStorage.userType = "email";
                            HubStar.set("isLogin", true);
                            that.transitionToRoute('searchIndexTom');
                            that.defaultSearch();
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
        if (ads !== undefined) {
            if (ads.isNew === true) {
                googletag.cmd.push(function() {
                    for (var i = 0; i < ads.length; i++) {
                        var ad = ads[i];
                        var slot1 = googletag.defineSlot(ad.path, [ad.size[0], ad.size[1]], ad.div).addService(googletag.pubads());
                        ads.slot1 = slot1;
                        googletag.pubads().enableSingleRequest();
                        googletag.enableServices();
                        googletag.display(ad.div);
                        googletag.pubads().refresh([slot1]);
                    }
                });
                ads.isNew = false;
            }
            else
            {
                googletag.cmd.push(function() {
                    for (var i = 0; i < ads.length; i++) {
                        var ad = ads[i];
                        googletag.pubads().enableSingleRequest();
                        googletag.enableServices();
                        googletag.display(ad.div);
                        googletag.pubads().refresh([ads.slot1]);
                    }
                });
            }
        }
    },
    relayout: function(l)
    {
        this.set('loadingTime', false);
        this.set("nextPageSpinner", false);
        if (l !== 0) {
            var ads = this.getAds();
            HubStar.set("scrollDownSearch", false);
            if (this.get("pageCount") === 0)
            {
                l = l + 4;
            }
            else if (this.get("pageCount") >= 1 && this.get("pageCount") < 10)
            {
                l = l + 3;
            }
            //console.log(this.get("pageCount"));
            var that = this;
            var x = document.getElementById("masonry_container");
            var cusid_ele = x.getElementsByClassName('box');
            var items = [];
            for (var i = this.get("totalItems"); i < this.get("totalItems") + l; i++) {
                if (cusid_ele[i] !== undefined) {
                    var item = cusid_ele[i].parentNode;
                    if (item.id !== "masonry_container") {
                        items.push(item);
                    }
                }
            }
            if (this.get("pageCount") === 0) {
                this.set("totalItems", this.get("totalItems") + 1);
            }
            this.set("totalItems", this.get("totalItems") + items.length);
            $('#masonry_container').append(items).masonry('appended', items);
            that.display(ads);
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
        try
        {
            var adSlots = HubStar.get('ads');
            var that = this;
            var pageCount = this.get("pageCount");
            var masonry_container = document.querySelector('#masonry_container');
            var cusid_ele = masonry_container.getElementsByClassName('box');
            var masonryContainer = cusid_ele[1].parentNode.parentNode;
            var ad;
            var position;
            var child;
            var masonrybox;
            var i = 0;
            for (i = 0; i < adSlots[pageCount].length; i++) {
                ad = adSlots[pageCount][i];
                position = ad.slot_position;
                child = masonryContainer.children[that.get("totalItems") + position];
                masonrybox = document.createElement('div');
                masonrybox.id = ad.div + '_box';
                masonrybox.border = 0;
                masonrybox.backgroundColor = 'transparent';
                masonrybox.textAlign = "center";
                masonrybox.className = "colAd noStyle1";
                masonrybox.style.display = "none";
                var adDiv = document.createElement('div');
                adDiv.id = ad.div;
                masonrybox.appendChild(adDiv);
                var ad1 = document.createElement('div');
                ad1.className = "tomtomtom";
                ad1.appendChild(masonrybox);
                masonryContainer.insertBefore(ad1, child);

            }
            that.set("oldChildren", masonryContainer.children.length);
            //that.display(adSlots[pageCount]);
            var ads = adSlots[pageCount];
            var adNew;
            for (i = 0; i < ads.length; i++) {
                adNew = ads[i];
                var height = adNew.size[1];
                var div_id = adNew.div + "_box";
                var x = document.getElementById(div_id);
                x.style.display = "block";
                x.className += " box";

                x.style.height = height + "px";
            }
            return adSlots[pageCount];
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
