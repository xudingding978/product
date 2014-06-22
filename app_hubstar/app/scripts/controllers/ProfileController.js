var profile_record;
var about_record;
var first_name_record;
var last_name_record;
var category_record;
var address_record;
var suburb_record;
var phone_record;
var website_record;
var website_url_record;
var collection_title_record;
var collection_desc_record;


HubStar.ProfileController = Ember.ObjectController.extend({
    role: "",
    model: null,
    aboutMe: "aboutMe",
    isAboutUs: false,
    about_me: "",
    rateTime: false,
    google_map: "",
    address: "",
    suburb: "",
    boost: '',
    currentUserID: "",
    collections: [],
    Id: "",
    type: "profiles",
    reviews: [],
    contentFollowerPhoto: [],
    contactChecking: false,
    collectionTag: true,
    contact: "contact",
    country: "",
    contact_email: "",
    secondary_email: "",
    domains: "",
    direct_enquiry_provide_email: "",
    editing: false,
    editingAbout: false,
    editingContact: false,
    editingTime: false,
    editors: "",
    followerProfileTag: false,
    follow_status: false,
    followers: '',
    first_name: "",
    galleryInsert: false,
    hours: [],
    is_authentic_user: false,
    is_editor: false,
    keywords: "",
    keywords_array: [],
    keyword_num: 0,
    keyword_left: 0,
    add_keywords: "",
    show_keyword_id: "",
    show_keyword_array: [],
    dragTargetIndex: -1,
    last_name: "",
    needs: ["editEditors", "profilePartners", "itemProfiles", "userFollowers", 'permission', 'contact', 'photoCreate', 'application', 'applicationFeedback', 'userFollowings', 'collection', 'htmlEditor', 'review', 'keywords', 'profileVideos', 'checkingLoginStatus', 'profilePdf', 'shareEmail'],
    name: "",
    facebook: "",
    twitter: "",
    googleplus: "",
    pinterest: "",
    linkedin: "",
    youtube: "",
    instagram: "",
    profileName: "profileName",
    profile_cover_text: "",
    profile_analytics_code: "",
    profile_bg_url: "",
    profile_creator: '',
    profile_hero_url: "",
    profile_pic_url: "",
    profile_contact_number: "",
    profile_google_map: "",
    profile_name: "",
    partnerTag: false,
    reviewTag: false,
    videoTag: false,
    pdfTag: false,
    partnerPage: true,
    profile_average_review: '',
    profileSelectionStatus: "Collections",
    profileCollectionStatistics: "",
    profileReviewStatistics: "",
    profilePartnerStatistics: "",
    profileFollowerStatistics: "",
    profileVideoStatistics: "",
    region: "",
    selectedCollection: "",
    switchPhoto: false,
    newDesc: '',
    newTitle: '',
    selectedDesc: "",
    selectedTitle: "",
    timeSetting: "timeSetting",
    temp: [],
    website: "",
    website_url: "",
    UploadImageMode: "",
    uploadChecking: false,
    updateOrCreate: true,
    isPhotoUploadMode: false,
    isPhotoEditingMode: false,
    isCrop: false,
    isUpload: false,
    loadingTime: false,
    isFinished: false,
    isProfilePicture: false,
    isProfileHero: false,
    isProfileBackground: false,
    CurrentImageSize: "",
    RequiredImageSize: "",
    isAdmin: false,
    newStyleImageSource: '',
    newStyleImageName: '',
    currentWidth: '',
    currentHeight: '',
    isPackgetDropdown: false,
    projectCategoryDropdownType: 'package',
    projectCategoryDropdownContent: '',
    isActiveDropdown: false,
    projectActiveDropdownType: 'active',
    projectActiveDropdownContent: '',
    isDeleteDropdown: false,
    projectDeleteDropdownType: 'delete',
    projectDeleteDropdownContent: '',
    message: null,
    select_one: null,
    select_two: null,
    makeSelection: false,
    makeSureDelete: false,
    popUpMap: false,
    willDelete: false,
    profile_partner_ids: null,
    partnerSearchString: '',
    isTracking: false,
    goBackType: false,
    cropsize: null,
    fromAddress: '',
    isInreview: false,
    profile_average_review_length: '',
    toAddress: '',
    isAboutUsObjectExist: false,
    about_us: [],
    embeded_url: '',
    embeded_code: "",
    profileCategoryDropdown: false,
    profileSubcategoryDropdown: false,
    profileCategorySelection: "",
    profileSubcategorySelection: "",
    categorys: [],
    subcate: [],
    backgroundImage: "",
    editorAdd: false,
    isShareEmail: false,
    init: function() {

        this.set('is_authentic_user', false);
        this.setTopicModel(HubStar.Cate.find({}));
    },
    editingEditor: function() {
        this.set("editorAdd", true);
        this.get("controllers.editEditors").getClientId(this.get("Id"));
    },
    goToProfileRoute: function(id)
    {
        //this.transitionToRoute('user');
        this.set("goBackType", true);
        var model = {id: id};
        this.transitionToRoute('profile', model);
    },
    getCurrentProfile: function(id) {
        this.set('currentUserID', id);
        var profile = HubStar.Profile.find(id);
        //    profile.reload();  //r  profile.reload();  eload the collection which have the same name
        return profile;
    },
    setProfile: function(id) {
        var that = this;
        var tempComment = [id];
        requiredBackEnd('megas', 'SetProfileViewCount', tempComment, 'POST', function() {

            var mega = HubStar.Mega.find(id);
            mega.then(function() {
                if (mega.get('classification') === "commercial" && localStorage.resOrcom === "residential") {
                    localStorage.resOrcom = "commercial";
                }
                else if (mega.get('classification') === "residential" && localStorage.resOrcom === "commercial") {
                    localStorage.resOrcom = "residential";
                }
                else if (mega.get('classification') === undefined || mega.get('classification') === "" || mega.get('classification') === null) {
                    localStorage.resOrcom = "All";
                }
                var thatthat = that;
                $(document).ready(function() {
                    setTimeout(function() {
                        thatthat.get("controllers.application").residentialCommercialStatus();
                        thatthat.get("controllers.application").changeBackground();

                        if ($(window).width() > 1200) {
                            $("#search-bar").css('display', "block");
                            $("#topResidentialCommerical").css('display', "block");
                            $(".search-bar-on-small-screen").css('display', "none");
                        } else {
                            $("#search-bar").css('display', "none");
                            $("#topResidentialCommerical").css('display', "none");
                            $(".search-bar-on-small-screen").css('display', "block");
                        }
                        $('#masonry_user_container').masonry("reloadItems");
                        setTimeout(function() {
                            $('#masonry_user_container').masonry();
                        }, 20);
                    }, 50);
                });
            });
        });
        var profile = this.getCurrentProfile(id);

        this.set("model", profile);
        this.set("Id", this.get('model').get('id'));
        this.set("about_me", profile.get('profile_about_us'));
        this.set("domains", profile.get('profile_domains'));
        this.set("boost", profile.get('profile_boost'));
        this.set('profile_bg_url', profile.get('profile_bg_url'));
        this.set('profile_hero_url', profile.get('profile_hero_url'));
        this.set('profile_pic_url', profile.get('profile_pic_url'));
        this.set('editors', profile.get('profile_editors'));
        this.set('keywords', profile.get('profile_keywords'));
        this.set('region', profile.get('profile_regoin'));
        this.set('country', profile.get('profile_country'));
        this.set('facebook', profile.get('profile_facebook_link'));
        this.set('twitter', profile.get('profile_twitter_link'));
        this.set('googleplus', profile.get('profile_googleplus_link'));
        this.set('pinterest', profile.get('profile_pinterest_link'));
        this.set('linkedin', profile.get('profile_linkedin_link'));
        this.set('youtube', profile.get('profile_youtube_link'));
        this.set('instagram', profile.get('profile_instagram_link'));
        this.set('name', profile.get('profile_name'));
        this.set('profile_creator', profile.get('profile_creater'));
        this.set('direct_enquiry_provide_email', profile.get('owner_contact_bcc_emails'));
        this.set('secondary_email', profile.get('owner_contact_cc_emails'));
        if (profile.get("owner_contact_email") !== null && profile.get("owner_contact_email") !== "undefined" && profile.get("owner_contact_email") !== "") {
            this.set('contact_email', profile.get('owner_contact_email'));
        }
        this.set('website', profile.get('profile_website'));
        this.set('website_url', profile.get('profile_website_url'));
        this.set('profile_cover_text', profile.get('profile_cover_text'));
        this.set('profile_analytics_code', profile.get('profile_analytics_code'));
        this.set('profile_contact_number', profile.get('profile_contact_number'));
        this.set('projectCategoryDropdownContent', profile.get('profile_package_name'));

        if (profile.get("profile_keywords_num") !== null && profile.get("profile_keywords_num") !== "undefined" && profile.get("profile_keywords_num") !== "") {

            this.set("keyword_num", profile.get("profile_keywords_num"));
        } else {
            this.setKeywordsNum(this.get('model').get('profile_package_name'));
        }
        this.set('first_name', profile.get('profile_contact_first_name'));
        this.set('address', profile.get('profile_physical_address'));
        if (profile.get('profile_category') === null || profile.get('profile_category') === 'undefined' || profile.get('profile_category') === "") {
            this.set('profileCategorySelection', "Apartment design");
        }
        else {
            this.set('profileCategorySelection', profile.get('profile_category'));
        }
        if (profile.get('profile_subcategory') === null || profile.get('profile_subcategory') === 'undefined' || profile.get('profile_subcategory') === "") {
            this.set('profileSubcategorySelection', "Accessories");
        }
        else {
            this.set('profileSubcategorySelection', profile.get('profile_subcategory'));
        }
        this.set('partnerSearchString', '');
        if (profile.get('profile_google_map') === null || profile.get('profile_google_map') === 'undefined' || profile.get('profile_google_map') === "") {
            this.createGooglemap();
        }
        else {
            this.set('profile_google_map', profile.get('profile_google_map'));
        }
        this.set('toAddress', profile.get('profile_physical_address') + ", " + profile.get('profile_suburb') + ", " + profile.get('profile_regoin') + ", " + profile.get('profile_country'));

        this.set('suburb', profile.get('profile_suburb'));
        this.set('last_name', profile.get('profile_contact_last_name'));
        this.set("profile_name", profile.get("profile_name"));
        this.set("projectActiveDropdownContent", profile.get("profile_is_active"));
        this.set("projectDeleteDropdownContent", profile.get("profile_is_deleted"));
        this.updateWorkingHourData(profile.get('profile_hours'));
        this.set("collections", profile.get("collections"));


        this.set("reviews", profile.get("reviews"));

        if (profile.get("profile_average_review_length") !== "" && profile.get("profile_average_review_length") !== null && profile.get("profile_average_review_length") !== undefined) {
            this.set('profile_average_review_length', profile.get("profile_average_review_length"));
            $('#starsize').attr("style", "width:" + profile.get("profile_average_review_length") + "px");
            this.set("profile_average_review", profile.get("profile_average_review"));
        }
        else if (profile.get('reviews').get("length") === 0) {

            $('#starsize').attr("style", "width:100px");

            this.set("profile_average_review", "5");
        }
        else {
            $('#starsize').attr("style", "width:100px");
            this.set("profile_average_review", "5");
        }
        if (this.get('controllers.profilePartners').get("partnerNew") !== undefined && this.get('controllers.profilePartners').get("partnerNew") !== null && this.get('controllers.profilePartners').get("partnerNew") !== "")
        {
            this.get('controllers.profilePartners').set("partnerNew", "");
        }
        this.isFollowed();
        this.checkAuthenticUser();
        this.labelBarRefresh();
        this.flipFrontBack();
        var photoCreateController = this.get('controllers.photoCreate');
        photoCreateController.setMega();
        this.initStastics(profile);
        this.followerPhoto(id);
        this.set("keywords_array", profile.get('keywords'));
        this.set("show_keyword_id", profile.get('show_keyword_id'));

        if (profile.get("show_keyword_id") !== null && profile.get("show_keyword_id") !== "undefined" && profile.get("show_keyword_id") !== '') {
            this.setShowKeywordsArray(profile.get('show_keyword_id'), profile.get('keywords'));
        } else {
            this.set('show_keyword_id', '');
            this.set('show_keyword_array', []);
        }
        this.set('keyword_left', parseInt(this.get("keyword_num")) - profile.get('keywords').get('length'));
        this.setAboutUsObject();
        this.set('editingAbout', false);
        this.set('editing', false);
        this.set('editingTime', false);
        if (this.get('model').get('show_template') !== true && this.get('model').get('show_template') !== false) {
            if (this.get('isAboutUsObjectExist')) {
                this.get('model').set('show_template', true);
            } else {
                this.get('model').set('show_template', false);
            }
        }

    },
    setAboutUsObject: function() {
        if (this.get('model').get('about_us') !== null && this.get('model').get('about_us') !== 'undefined' && this.get('model').get('about_us').get('length') > 0) {
            this.set("about_us", this.get('model').get("about_us"));
            this.getVideoURL();
            this.set("isAboutUsObjectExist", true);
        } else {
            this.set('about_us', []);
            this.set("isAboutUsObjectExist", false);
        }
    },
    setShowKeywordsArray: function(show_keywords_id, keywords) {
        var newArray = [];
        for (var i = 0; i < keywords.get('length'); i++) {
            if (show_keywords_id.indexOf(keywords.objectAt(i).get('keyword_id')) !== -1) {
                newArray.push(keywords.objectAt(i));
            }
        }
        this.set('show_keyword_array', newArray);
    },
    setKeywordsNum: function(profile_package_name) { // change "profile.profile_keywords_num", "profile.profile_boost"
        if (profile_package_name === 'Platinum') {
            this.set('keyword_num', 200);
            this.set('boost', 200);
        } else if (profile_package_name === 'Gold') {
            this.set('keyword_num', 100);
            this.set('boost', 100);
        } else if (profile_package_name === 'Silver') {
            this.set('keyword_num', 50);
            this.set('boost', 50);
        } else if (profile_package_name === 'Bronze') {
            this.set('keyword_num', 25);
            this.set('boost', 25);
        }

    },
    checkKeywordNum: function(updatePackageName, originPackageName) {
        if (this.getKeywordsNum(updatePackageName) < this.getKeywordsNum(originPackageName)) {
            return true;
        }
        return false;
    },
    getKeywordsNum: function(profile_package_name) {
        if (profile_package_name === 'Platinum') {
            return 200;
        } else if (profile_package_name === 'Gold') {
            return 100;
        } else if (profile_package_name === 'Silver') {
            return 50;
        } else if (profile_package_name === 'Bronze') {
            return 25;
        }
    },
    setTopicModel: function(model) {
        this.set('categorys', null);
        this.set('categorys', model);
        var that = this;
        model.addObserver('isLoaded', function() {
            if (model.get('isLoaded')) {
                for (var i = 0; i < model.get('content').get('length'); i++)
                {

                    if (that.get('model') !== null) {
                        if (model.get('content').objectAt(i).data.topic === undefined) {
                            if (that.get('model').get('profile_category') === model.get('content').objectAt(i).record._data.topic) {
                                that.set('subcate', []);
                                for (var j = 0; j < model.get('content').objectAt(i).record._data.subcate.length; j++)
                                {
                                    that.get('subcate').pushObject({'category_topic': model.get('content').objectAt(i).record._data.subcate.objectAt(j).data.category_topic, 'subcategories': model.get('content').objectAt(i).record._data.subcate.objectAt(j).data.subcategories
                                    });
                                }
                            }
                        }
                        else {
                            if (that.get('model').get('profile_category') === model.get('content').objectAt(i).data.topic) {
                                that.set('subcate', []);
                                for (var j = 0; j < model.get('content').objectAt(i).data.subcate.length; j++)
                                {
                                    that.get('subcate').pushObject({'category_topic': model.get('content').objectAt(i).data.subcate.objectAt(j).category_topic, 'subcategories': model.get('content').objectAt(i).data.subcate.objectAt(j).subcategories
                                    });
                                }
                            }
                        }
                    }
                }
            }
        }
        );

    },
    topicSelection: function(data) {
        this.set('subcate', []);
        for (var i = 0; i < data.get('subcate').get('length'); i++)
        {
            this.get('subcate').pushObject({'category_topic': data.get('subcate').objectAt(i).get('category_topic'), 'subcategories': data.get('subcate').objectAt(i).get('subcategories')
            });
        }

    },
    createGooglemap: function() {

        var geocoder = new google.maps.Geocoder();
        var addressmap = this.get('model').get("profile_physical_address") + ", " + this.get('model').get("profile_suburb") + ", " + this.get('model').get("profile_regoin") + ", " + this.get('model').get('profile_country');
        var that = this;

        geocoder.geocode({'address': addressmap}, function(results) {
            var imageMap = "http://maps.googleapis.com/maps/api/staticmap?center=" + results[0].geometry.location.lat() + "," + results[0].geometry.location.lng() + "&markers=" + results[0].geometry.location.lat() + "," + results[0].geometry.location.lng() + "&zoom=15&size=300x250&maptype=roadmap&sensor=false";
            that.set('profile_google_map', imageMap);

            requiredBackEnd('profiles', 'googleMap', [that.get('profile_google_map'), that.get('model').get('id')], 'POST', function() {
            });
        });
    },
    popUpGoogleMap: function() {

        if (this.get("controllers.checkingLoginStatus").popupLogin())
        {
            this.set('popUpMap', true);
            document.getElementById("body_id").style.overflow = "hidden";
        }
    },
    followerPhoto: function(id)
    {
        var dataNew = [];
        var that = this;
        requiredBackEnd('followers', 'ReadPhoto', id, 'POST', function(params) {
            that.set("contentFollowerPhoto", []);

            if (params === undefined)
            {
            }
            else
            {
                for (var i = 0; i < params.length; i++)
                {
                    dataNew.id = params[i].record_id;
                    dataNew.name = params[i].name;
                    dataNew.photo_url = params[i].photo_url;

                    that.get("contentFollowerPhoto").pushObject(dataNew);

                    dataNew = [];
                }
            }
        });

    },
    labelBarRefresh: function() {
        this.set("profileSelectionStatus", "Collections");
        $('#user-stats > li').removeClass('selected-user-stats');
        $('#defualt').addClass('selected-user-stats');
        $('#user-stats > li').click(function() {
            $('#user-stats > li').removeClass('selected-user-stats');
            $(this).addClass('selected-user-stats');
        });
    },
    initStastics: function(profile) {
        this.set("profile_partner_ids", profile.get("profile_partner_ids"));
        //this.set("profileVideoStatistics",0);
        this.set("profileVideoStatistics", profile.get("profile_video_num"));
        if (this.get("profile_partner_ids") !== null) {
            if (this.get("profile_partner_ids").length !== 0) {
                var ids = this.get("profile_partner_ids").split(",");
                this.paternsStatistics(ids.get('length'));
            }
            else
            {
                this.set('profilePartnerStatistics', 0);
            }
        }
        else {
            this.set('profilePartnerStatistics', 0);
        }
        this.set("followers", profile.get("followers"));

        if (this.get("followers") !== null)
        {
            this.followersStatistics(this.get('followers').get("length"));
        }
        else {
            this.followersStatistics(0);
        }
        this.statstics();
    },
    submit: function() {
        var collectionController = this.get('controllers.collection');
        var collection = collectionController.getCreateCollection(this.get('newTitle'), this.get('newDesc'), this.get("collections"));
        if (this.get('newDesc').length < 256) {
            if (collection !== null && collection !== "") {
                collection.set('type', 'profile');
                collection.set('optional', this.get('model').get('id'));
                this.get("collections").insertAt(0, collection);

                collection.store.commit();
                $(".Targeting_Object_front").attr("style", "display:inline-block");
                $(" #uploadArea").attr('style', "display:none");
                $(" #uploadObject").attr('style', "display:block");
                this.statstics();
                this.set("newTitle", "");
                this.set("newDesc", "");
                setTimeout(function() {
                    $('#masonry_user_container').masonry("reloadItems");
                    setTimeout(function() {
                        $('#masonry_user_container').masonry();
                    }, 300);
                }, 250);
            }
        } else {
            this.get('controllers.applicationFeedback').statusObserver(null, "Your description should be less than 256 characters.", "warnning");
        }
    },
    checkingIdisExsinting: function(desc, id, postOrPut) {
        var isExsinting = true;
        if (postOrPut === "create") {
            for (var i = 0; i < this.get("collections").get('length'); i++) {
                if (this.get("collections").objectAt(i).id === id) {
                    isExsinting = false;
                }
            }
            if (!isExsinting) {
                this.get('controllers.applicationFeedback').statusObserver(null, "This Collection is already exsiting");
            }
        }
        return isExsinting;
    },
    setLocalLoginRecrod: function() {
        HubStar.set('afterSearch', true);
        localStorage.user_id = this.get('model.id');     //??why model.id is user_id??
    },
    toggleEditing: function(data, checkingInfo) {
        if (checkingInfo === "profileName") {
            profile_record = data;
            this.set('editing', !this.get('editing'));
        } else if (checkingInfo === "aboutMe") {
            about_record = data;
            this.selectAboutVersion();
        } else if (checkingInfo === "contact") {
            first_name_record = this.get('first_name');
            last_name_record = this.get('last_name');
            category_record = this.get('model.profile_category');
            address_record = this.get('address');
            suburb_record = this.get('suburb');
            phone_record = this.get('profile_contact_number');
            website_record = this.get('website');
            website_url_record = this.get('website_url');
            this.set('editingContact', !this.get('editingContact'));
        }
        else if (checkingInfo === "timeSetting") {
            this.set('editingTime', !this.get('editingTime'));
        }
    },
    selectAboutVersion: function() {
        var message = "Choose the <b>Template editor</b> to easily modify this section using the default About Us template. <br>Choose the <b>HTML5 editor</b> for more advanced editing options. <br>Please note: <br>- If you choose the <b>Template editor</b> after adding content to this section using the <b>HTML5 editor</b>, you will need to re-enter this content. <br>- Once changes made with the <b>Template editor</b> have been saved, you will no longer be able to access the <b>HTML5 editor</b>.";
        this.set("message", message);
        this.set('select_one', 'HTML5 editor');
        this.set('select_two', 'Template editor');
        this.set('makeSelection', true);
    },
    selectOldAbout: function() {
        this.set('makeSelection', false);
        this.set('isAboutUsObjectExist', false);
        this.get('model').set('show_template', false);
        this.set('editingAbout', !this.get('editingAbout'));
    },
    selectNewAbout: function() {
        var about_embeded_object;
        if (this.get('about_us').get('length') < 1) {

            var about_us = HubStar.AboutUs.createRecord({"about_id": this.get('model').get('id'), "about_desc": '', "about_template_id": '1', "about_embeded_object": [],
                "about_video": [], "about_image": [], 'about_book': []});

            about_embeded_object = HubStar.AboutEmbededObject.createRecord({"embeded_object_id": "", "embeded_object_title": "", "embeded_object_desc": "",
                "embeded_object_code": "", "embeded_object_url": "", "optional": this.get('model').get('id'), "embed_object_enabled": false});

            var about_video = HubStar.AboutVideo.createRecord({"video_id": '1', "video_title": '', "video_desc": '',
                "video_url": '', "optional": this.get('model').get('id')});
            about_us.get('about_embeded_object').pushObject(about_embeded_object);
            about_us.get('about_video').pushObject(about_video);
            for (var i = 0; i < 2; i++) {
                var about_image = HubStar.AboutImage.createRecord({"image_id": i.toString(), "image_title": '', "image_desc": '',
                    "image_url": '', "image_link": '', "optional": this.get('model').get('id')});
                about_us.get('about_image').pushObject(about_image);
            }
            for (var i = 0; i < 3; i++) {
                var about_book;
                if (i === 0) {
                    about_book = HubStar.AboutBook.createRecord({"book_id": i.toString(), "book_title": '', "book_description": 'Renovation Trends (29/11)',
                        "book_image_url": 'http://shop.trendsideas.co.nz/DesktopModules/NB_Store/makethumbnail.ashx?Image=499&w=300&tabid=101&h=0',
                        "book_read_url": 'http://ebooks.trendsideas.com/Book885', "book_buy_url": 'http://shop.trendsideas.co.nz/HomeSeries/tabid/101/ProdID/455/Renovation_Ideas_Trends_Vol_2911.aspx',
                        "optional": this.get('model').get('id'), "display_size": 1, "read_available": true, "buy_available": true});
                } else if (i === 1) {
                    about_book = HubStar.AboutBook.createRecord({"book_id": i.toString(), "book_title": '', "book_description": 'New Home Trends (29/10)',
                        "book_image_url": 'http://shop.trendsideas.co.nz/DesktopModules/NB_Store/makethumbnail.ashx?Image=483&w=300&tabid=101&h=0',
                        "book_read_url": 'http://ebooks.trendsideas.com/Book873', "book_buy_url": 'http://shop.trendsideas.co.nz/HomeSeries/tabid/101/ProdID/447/New_Home_Trends_Vol_2910.aspx',
                        "optional": this.get('model').get('id'), "display_size": 1, "read_available": true, "buy_available": true});
                } else {
                    about_book = HubStar.AboutBook.createRecord({"book_id": i.toString(), "book_title": '', "book_description": 'Limited Edition!',
                        "book_image_url": 'http://library.trendsideas.com/Portals/0/productimages/418_06894.jpg',
                        "book_read_url": '', "book_buy_url": 'http://shop.trendsideas.co.nz/homeseries.aspx?prodid=418', "optional": this.get('model').get('id'),
                        "display_size": 1, "read_available": false, "buy_available": true});
                }
                about_us.get('about_book').pushObject(about_book);
            }
            this.get('about_us').pushObject(about_us);

        }
        else {
            if (this.get("about_us").objectAt(0).get('about_embeded_object').get("length") < 1) {
                about_embeded_object = HubStar.AboutEmbededObject.createRecord({"embeded_object_id": "", "embeded_object_title": "", "embeded_object_desc": "",
                    "embeded_object_code": "", "embeded_object_url": "", "optional": this.get('model').get('id'), "embed_object_enabled": false});
                this.get("about_us").objectAt(0).get('about_embeded_object').pushObject(about_embeded_object);
            }
        }
        this.set('makeSelection', false);
        this.set('isAboutUsObjectExist', true);
        this.get('model').set('show_template', true);
        this.set('editingAbout', !this.get('editingAbout'));
    },
    yesAbout: function(checkingInfo) {
        $(window).scrollTop(650);
        if (checkingInfo === "aboutMe") {

            this.set('editingAbout', !this.get('editingAbout'));
        }
        if (this.get('model').get('show_template')) {
            for (var i = 0; i < this.get('about_us').objectAt(0).get('about_book').get('length'); i++) {
                var about_book = this.get('about_us').objectAt(0).get('about_book').objectAt(i);
                if (about_book.get('book_read_url') !== null && about_book.get('book_read_url') !== '' && about_book.get('book_read_url') !== undefined) {
                    this.get('about_us').objectAt(0).get('about_book').objectAt(i).set('read_available', true);
                } else {
                    this.get('about_us').objectAt(0).get('about_book').objectAt(i).set('read_available', false);
                }

                if (about_book.get('book_buy_url') !== null && about_book.get('book_buy_url') !== '' && about_book.get('book_buy_url') !== undefined) {
                    this.get('about_us').objectAt(0).get('about_book').objectAt(i).set('buy_available', true);
                } else {
                    this.get('about_us').objectAt(0).get('about_book').objectAt(i).set('buy_available', false);
                }
            }
            for (var i = 0; i < this.get('about_us').objectAt(0).get('about_embeded_object').get('length'); i++) {
                var about_embeded_object = this.get('about_us').objectAt(0).get('about_embeded_object').objectAt(i);
                if (about_embeded_object.get('embeded_object_code') !== null && about_embeded_object.get('embeded_object_code') !== '' && about_embeded_object.get('embeded_object_code') !== undefined) {
                    this.get('about_us').objectAt(0).get('about_embeded_object').objectAt(i).set('embed_object_enabled', true);
                    var embeded_object_code = this.get('about_us').objectAt(0).get('about_embeded_object').objectAt(i).get('embeded_object_code');
                    var embeded_object_id = embeded_object_code.split('?')[1].split('=')[1];
                    this.get('about_us').objectAt(0).get('about_embeded_object').objectAt(i).set('embeded_object_id', embeded_object_id);
                } else {
                    this.get('about_us').objectAt(0).get('about_embeded_object').objectAt(i).set('embed_object_enabled', false);
                }
            }
            if (this.get('model').get('about_us') === null || this.get('model').get('about_us') === 'undefined' || this.get('model').get('about_us').get('length') === 0) {
                this.get('model').get('about_us').pushObject(this.get('about_us').objectAt(0));
            }
            this.get('about_us').objectAt(0).save();
            this.get('model').store.save();
            this.get('controllers.applicationFeedback').statusObserver(null, "Profile updated.");
        } else {
            this.saveUpdateAboutUs();
        }
    },
    yes: function(checkingInfo) {
        if (checkingInfo === "profileName") {
            var title_modify_time = Date.parse(new Date());
            var update_profile_record = HubStar.Profile.find(this.get('model.id'));
            this.set('editing', !this.get('editing'));

            update_profile_record.set("profile_name", this.get('profile_name'));
            update_profile_record.set("title_modify_time", title_modify_time);
            this.get('controllers.applicationFeedback').statusObserver(null, "Profile updated.");
            update_profile_record.store.save();

        }
        else if (checkingInfo === "contact") {
            if (this.get("website_url") !== null) {
                if (this.get("website_url").match(/[http]/g) !== -1 || this.get("website_url").match(/[http]/g) !== null)
                {
                    this.set("website_url", this.get("website_url"));
                } else {
                    this.set("website_url", "http://" + this.get("website_url"));
                }
            }


            this.set('editingContact', !this.get('editingContact'));

            this.saveUpdateGeneral();
        }
        else if (checkingInfo === "timeSetting") {
            var updateHour = this.get('hours');
            var data = "";
            for (var i = 0; i < updateHour.length; i++) {
                data = data + updateHour.objectAt(i).day + "=" + updateHour.objectAt(i).time + ",";
            }
            this.set('model.profile_hours', data.substring(0, data.length - 1));
            this.set('editingTime', !this.get('editingTime'));
            this.saveUpdate();

        }
    },
    noSelection: function() {
        this.set('editing', false);
        this.set('makeSelection', false);
    },
    no: function(checkingInfo) {
        $(window).scrollTop(650);
        if (checkingInfo === "profileName") {
            this.set('profile_name', profile_record);
            this.set('editing', !this.get('editing'));
        }
        else if (checkingInfo === "aboutMe") {
            var author = this.get('model');
            author.get('transaction').rollback();
            setTimeout(function() {
                $('#masonry_user_container').masonry("reloadItems");
                setTimeout(function() {
                    $('#masonry_user_container').masonry();
                }, 300);
            }, 800);
            this.setAboutUsObject();
            this.set('editingAbout', !this.get('editingAbout'));
        }
        else if (checkingInfo === "contact") {
            this.set('first_name', first_name_record);
            this.set('last_name', last_name_record);
            this.set('model.profile_category', category_record);
            this.set('address', address_record);
            this.set('suburb', suburb_record);
            this.set('profile_contact_number', phone_record);
            this.set('website', website_record);
            this.set('website_url', website_url_record);

            this.set('editingContact', !this.get('editingContact'));
        }
        else if (checkingInfo === "timeSetting") {
            this.updateWorkingHourData(this.get('model.profile_hours'));
            this.set('editingTime', !this.get('editingTime'));
        }
    },
    updateWorkingHourData: function(times) {
        this.set('hours', []);
        if (times !== null && times !== "" && typeof times !== "undefined") {
            var time = times.split(",");
            for (var i = 0; i < time.length; i++) {
                var dayAndTime = time[i].split("=");
                this.get('hours').pushObject({day: dayAndTime[0], time: dayAndTime[1]});
            }
        }
    },
    setSelectedCollection: function(id) {
        for (var i = 0; i < this.get("collections").get("length"); i++) {
            var thisCollection = this.get("collections").objectAt(i);
            if (id === thisCollection.get("id")) {
                this.set("selectedCollection", thisCollection);
            }
        }
    },
    statstics: function()
    {
        if (this.get("collections").get("length") !== 0) {
            this.set('profileCollectionStatistics', this.get("collections").get("length"));
        }
        else
        {
            this.set('profileCollectionStatistics', 0);
        }

        if (this.get("reviews").get("length") !== 0) {
            this.set('profileReviewStatistics', this.get("reviews").get("length"));
        }
        else
        {
            this.set('profileReviewStatistics', 0);
        }
    },
    paternsStatistics: function(length) {
        this.set('profilePartnerStatistics', length);
    },
    followersStatistics: function(length) {
        this.set('profileFollowerStatistics', length);
    },
    deleteSelectedCollection: function()
    {

        var message = "Remove this collection?";

        this.set("message", message);
        this.set('makeSureDelete', true);
        if (this.get('willDelete')) {
            var tempCollection = this.get("selectedCollection");
            var delInfo = [tempCollection.id, this.get('model').get('id'), 'profile'];
            delInfo = JSON.stringify(delInfo);
            requiredBackEnd('collections', 'delete', delInfo, 'POST', function() {
            });
            this.get("collections").removeObject(this.get("selectedCollection"));
            this.statstics();
            setTimeout(function() {
                $('#masonry_user_container').masonry("reloadItems");
                setTimeout(function() {
                    $('#masonry_user_container').masonry();
                }, 300);
            }, 800);
            this.cancelDelete();
        } else {
            this.set('willDelete', true);
        }
    },
    cancelDelete: function() {
        this.set('willDelete', false);
        this.set('makeSureDelete', false);
    },
    updateCollectionInfo: function() {
        if (this.get('newDesc').length < 256) {
            this.get('selectedCollection').set('title', this.get('newTitle'));
            this.get('selectedCollection').set('desc', this.get('newDesc'));
            var collectionController = this.get('controllers.collection');
            var collection = collectionController.getUpdateCollection(this.get('selectedCollection'));
            collection.set('optional', this.get('model').get('id'));
            collection.set('type', 'profile');
            this.set('selectedCollection', collection);
            this.get("selectedCollection").store.save();
            $(".Targeting_Object_front").attr("style", "display:inline-block");
            $(" #uploadArea").attr('style', "display:none");
            $(" #uploadObject").attr('style', "display:block");
            this.set('newTitle', '');
            this.set('newDesc', '');
        }
        else
        {
            this.get('controllers.applicationFeedback').statusObserver(null, "Your description should be less than 256 characters.", "warnning");
        }
        setTimeout(function() {
            $('#masonry_user_container').masonry();
        }, 20);
    },
    toggleUpload: function() {
        $('.corpbanner_mask').toggleClass('hideClass');
        this.set('uploadChecking', !this.get('uploadChecking'));
    },
    editingContactForm: function() {

        if (this.get("controllers.checkingLoginStatus").popupLogin())
        {
            this.sendEventTracking('event', 'button', 'click', 'Contact us');
            var contactController = this.get('controllers.contact');

            this.get("controllers.contact").set('secondStepOfContactEmail', false);
            this.get("controllers.contact").set('firstStepOfContactEmail', false);

            contactController.setSelectedMega(this.get('currentUserID'));

            document.getElementById("body_id").style.overflow = "hidden";

            this.set('contactChecking', !this.get('contactChecking'));
        }
    },
    eShare: function() {
        if (this.get("controllers.checkingLoginStatus").popupLogin())
        {
            $("#showprofile").css("display", "block");
            var mega = HubStar.Mega.find(this.get('currentUserID'));
            mega.then(function() {
                if (mega.get("share_count") === undefined || mega.get("share_count") === null || mega.get("share_count") === "")
                {
                    mega.set("share_count", 0);
                }
                else
                {
                    mega.set("share_count", mega.get("share_count") + 1);
                }
                mega.store.save();
            });
//            this.sendEventTracking('event', 'button', 'click', 'Contact us');
            var shareEmailController = this.get('controllers.shareEmail');
            shareEmailController.setProfileSelectedMega(this.get('currentUserID'));
//            document.getElementById('light').style.display = 'block';
//            document.getElementById('fade').style.display = 'block';
            this.set("isShareEmail", true);
//        this.get("controllers.shareEmail").getClientId(this.get("Id"));


//            this.set('contactChecking', !this.get('contactChecking'));
            //return false;
        }
    },
    closeContact: function() {
        this.set('contactChecking', false);
        document.getElementById("body_id").style.overflow = "auto";
    },
    closeShareEmail: function() {
        this.set('shareEmail', false);
    },
    uploadImage: function() {
        var user = this.getCurrentProfile(this.get('currentUserID'));
        if ($('.background').val() !== "") {
            user.set("profile_bg_url", $('.background').val());
        }
        if ($('.hero').val() !== "") {
            user.set("profile_hero_url", $('.hero').val());
        }
        if ($('.picture').val() !== "") {
            user.set("profile_pic_url", $('.picture').val());
        }
        this.saveUpdate();
        this.toggleUpload();
    },
    checkAuthenticUser: function() {
        if (localStorage.loginStatus) {
            var currentUser = HubStar.User.find(localStorage.loginStatus);

            var current_user_email = currentUser.get('email');
            var permissionController = this.get('controllers.permission');
            var that = this;
            var is_authentic_user = permissionController.checkAuthenticUser(that.get("model").get("owner"), that.get("model").get("profile_editors"), current_user_email);
            var role = permissionController.checkAuthenticEdit(that.get("model").get("profile_creator"), that.get("model").get("profile_administrator"), that.get("model").get("profile_editor"));
            that.set("role", role);
            var is_edit = false;
            if (role !== "")
            {
                is_edit = true;
                if (role === "editor") {
                    this.set("is_editor", is_authentic_user || false);
                }
                else
                {
                    this.set("is_editor", is_authentic_user || is_edit);
                }
            }
            if (current_user_email !== null && current_user_email !== undefined && current_user_email !== "") {
                var isAdmin = permissionController.setIsAdmin(current_user_email);
                this.set('isAdmin', isAdmin);
//                this.set('isAdmin', isAdmin || is_edit);
                that.set("is_authentic_user", is_authentic_user || is_edit);

            } else {

                currentUser.then(function() {
                    var current_user_email = currentUser.get('email');

                    if (currentUser.get('isLoaded')) {

                        var is_authentic_user = permissionController.checkAuthenticUser(that.get("model").get("owner"), that.get("model").get("profile_editors"), current_user_email);
                        that.set("is_authentic_user", is_authentic_user || is_edit);

                        var isAdmin = permissionController.setIsAdmin(current_user_email);
                        that.set('isAdmin', isAdmin);
                    }
                });
            }
        }
    },
    isFollowed: function()
    {
        if (this.checkFollowStatus())
        {
            this.set('follow_status', true);
        }
        else {
            this.set('follow_status', false);
        }
    },
    followThisProfile: function() {

        if (this.get("controllers.checkingLoginStatus").popupLogin()) {
            var profile_id = this.get('model').get('id');
            if (this.checkFollowStatus() === false) {
                this.get("controllers.userFollowings").followProfile(profile_id);
                this.sendEventTracking('event', 'button', 'click', 'Follow');
                this.set('follow_status', true);
            } else {
                this.get("controllers.userFollowings").unFollowProfile(profile_id);
                this.sendEventTracking('event', 'button', 'click', 'unFollow');
                this.set('follow_status', false);
            }
        }

    },
    socialLink: function(link) {
        if (link === 'facebook') {
            window.open(this.get("facebook"));
        }
        else if (link === 'twitter') {
            window.open(this.get("twitter"));
        }
        else if (link === 'googleplus') {
            window.open(this.get("googleplus"));
        }
        else if (link === 'pinterest') {
            window.open(this.get("pinterest"));
        }
        else if (link === 'youtube') {
            window.open(this.get("youtube"));
        }
        else if (link === 'linkedin') {
            window.open(this.get("linkedin"));
        }
        else if (link === 'instagram') {
            window.open(this.get("instagram"));
        }

    },
    checkFollowStatus: function()
    {
        var isFollow = false;
        var followers = this.get("model").get("followers");
        for (var i = 0; i < followers.get('length'); i++) {
            var follower_id = followers.objectAt(i).get("follower_id");
            if (follower_id === localStorage.loginStatus)
            {
                isFollow = true;
                break;
            }
        }
        return isFollow;
    },
    selectCollectionFake: function() {
        $('#user-stats > li').removeClass('selected-user-stats');
        $('#defualt').addClass('selected-user-stats');
        this.sendEventTracking('event', 'button', 'click', 'Collections');
        this.set('partnerPage', 'Collections');
        this.set('profileSelectionStatus', 'Collections');
        this.set('partnerTag', false);
        this.set('followerProfileTag', false);
        this.set('collectionTag', true);
        this.set('reviewTag', false);
        this.set('videoTag', false);
        setTimeout(function() {
            $('#masonry_user_container').masonry("reloadItems");
            setTimeout(function() {
                $('#masonry_user_container').masonry();

            }, 200);
        }, 250);
    },
    selectCollection: function() {
        $('#user-stats > li').removeClass('selected-user-stats');
        $('#defualt').addClass('selected-user-stats');
        this.sendEventTracking('event', 'button', 'click', 'Collections');
        this.set('partnerPage', 'Collections');
        this.set('profileSelectionStatus', 'Collections');
        this.set('partnerTag', false);
        this.set('followerProfileTag', false);
        this.set('collectionTag', true);
        this.set('reviewTag', false);
        this.set('videoTag', false);
        this.set('pdfTag', false);
        this.transitionToRoute('profileCollections');
        setTimeout(function() {
            $('#masonry_user_container').masonry("reloadItems");
            setTimeout(function() {
                $('#masonry_user_container').masonry();

            }, 200);
        }, 250);
    },
    selectVideo: function(model) {
        if (this.get("controllers.checkingLoginStatus").popupLogin())
        {
            this.sendEventTracking('event', 'button', 'click', 'Video');
            $('#user-stats > li').removeClass('selected-user-stats');
            $('#video').addClass('selected-user-stats');
            this.set('profileSelectionStatus', 'Videos');
            this.get('controllers.profileVideos').getClientId(model);
            this.set('videoTag', true);
            this.set('pdfTag', false);
            this.set('partnerTag', false);
            this.set('collectionTag', false);
            this.set('reviewTag', false);
            this.set('followerProfileTag', false);
            this.transitionToRoute('profileVideos');
        }
    },
    selectPartner: function() {

        if (this.get("controllers.checkingLoginStatus").popupLogin())
        {
            this.sendEventTracking('event', 'button', 'click', 'Partners');
            $('#user-stats > li').removeClass('selected-user-stats');
            $('#network').addClass('selected-user-stats');
            this.set('profileSelectionStatus', 'Network');
            this.set('partnerTag', true);
            this.set('collectionTag', false);
            this.set('followerProfileTag', false);
            this.set('reviewTag', false);
            this.get('controllers.itemProfiles').setPartnerRemove();
            this.set('videoTag', false);
            this.set('pdfTag', false);
            this.transitionToRoute('partners');

            setTimeout(function() {
                $('#masonry_user_container').masonry("reloadItems");
                setTimeout(function() {
                    $('#masonry_user_container').masonry();
                }, 100);
            }, 250);

        }
    },
    selectFollower: function() {

        if (this.get("controllers.checkingLoginStatus").popupLogin())
        {
            this.sendEventTracking('event', 'button', 'click', 'Followers');
            this.set('profileSelectionStatus', 'Followers');
            this.set('partnerTag', false);
            this.set('collectionTag', false);
            this.set('followerProfileTag', true);
            this.set('reviewTag', false);
            this.set('videoTag', false);
            this.set('pdfTag', false);
            this.transitionToRoute('profileFollowers');
        }
    },
    selectReview: function() {
        if (this.get("controllers.checkingLoginStatus").popupLogin())
        {
            this.sendEventTracking('event', 'button', 'click', 'Reviews');
            this.set('profileSelectionStatus', 'Reviews');
            this.set('partnerTag', false);
            this.set('collectionTag', false);
            this.set('followerProfileTag', false);
            this.set('reviewTag', true);
            this.set('videoTag', false);
            this.set('pdfTag', false);
            this.transitionToRoute('reviews');
        }
    },
    selectPdf: function(model) {
        if (this.get("controllers.checkingLoginStatus").popupLogin())
        {
            this.sendEventTracking('event', 'button', 'click', 'PDF');
            this.set('profileSelectionStatus', 'Pdf');
            this.get('controllers.profilePdf').getClientId(model);
            this.set('videoTag', false);
            this.set('pdfTag', true);
            this.set('partnerTag', false);
            this.set('collectionTag', false);
            this.set('reviewTag', false);
            this.set('followerProfileTag', false);
            this.transitionToRoute('profilePdf');


        }
    },
    saveUpdateAboutUs: function() {
        var update_About_record = HubStar.Profile.find(this.get('model.id'));
        var textarea = document.getElementById("wysihtml5-editor");
        update_About_record.set("profile_about_us", textarea.value);
        update_About_record.set("show_template", this.get('model').get('show_template'));
        this.get('controllers.applicationFeedback').statusObserver(null, "Profile updated.");
        update_About_record.store.save();
    },
    saveUpdateGeneral: function() {
        var update_profile_record = HubStar.Profile.find(this.get('model.id'));
        update_profile_record.set('profile_contact_first_name', this.get('first_name'));
        update_profile_record.set('profile_contact_last_name', this.get('last_name'));
        update_profile_record.set("profile_name", this.get('profile_name'));
        update_profile_record.set('profile_physical_address', this.get('address'));
        update_profile_record.set('profile_suburb', this.get('suburb'));
        update_profile_record.set('profile_contact_number', this.get('profile_contact_number'));
        update_profile_record.set('profile_regoin', this.get('region'));
        update_profile_record.set('profile_country', this.get('country'));
        update_profile_record.set('profile_cover_text', this.get('profile_cover_text'));
        update_profile_record.set('profile_analytics_code', this.get('profile_analytics_code'));
        update_profile_record.set('profile_website', this.get('website'));
        update_profile_record.set('profile_website_url', this.get('website_url'));
        update_profile_record.set('profile_category', this.get('profileCategorySelection'));
        update_profile_record.set('profile_subcategory', this.get('profileSubcategorySelection'));

        this.createGooglemap();
        this.set('toAddress', update_profile_record.get('profile_physical_address') + ", " + update_profile_record.get('profile_suburb') + ", " + update_profile_record.get('profile_regoin') + ", " + update_profile_record.get('profile_country'));
        this.get('controllers.applicationFeedback').statusObserver(null, "Profile updated.");
        update_profile_record.store.save();
    },
    saveUpdate: function() {
        var update_profile_record = HubStar.Profile.find(this.get('model.id'));

        update_profile_record.set('profile_editors', this.get('editors'));
        update_profile_record.set('profile_keywords', this.get('keywords'));
        update_profile_record.set('profile_regoin', this.get('region'));
        update_profile_record.set('profile_country', this.get('country'));
        update_profile_record.set('profile_boost', this.get('boost'));
        update_profile_record.set('profile_domains', this.get('domains'));
        update_profile_record.set('profile_hero_url', this.get('profile_hero_url'));
        update_profile_record.set('profile_pic_url', this.get('profile_pic_url'));
        update_profile_record.set('profile_bg_url', this.get('profile_bg_url'));
        update_profile_record.set('show_keyword_id', this.get('show_keyword_id'));
        this.saveLink('profile_facebook_link', 'facebook');
        this.saveLink('profile_twitter_link', 'twitter');
        this.saveLink('profile_googleplus_link', 'googleplus');
        this.saveLink('profile_pinterest_link', 'pinterest');
        this.saveLink('profile_linkedin_link', 'linkedin');
        this.saveLink('profile_youtube_link', 'youtube');
        this.saveLink('profile_instagram_link', 'instagram');

        if (this.get('controllers.profilePartners').get("partnerNew") !== undefined && this.get('controllers.profilePartners').get("partnerNew") !== null && this.get('controllers.profilePartners').get("partnerNew") !== "")
        {
            if (update_profile_record.get('profile_partner_ids').length !== this.get('controllers.profilePartners').get("partnerNew").length) {
                update_profile_record.set('profile_partner_ids', this.get('controllers.profilePartners').get("partnerNew"));
                this.get('controllers.profilePartners').set("partnerNew", "");
            }
        }
        update_profile_record.set('owner_contact_bcc_emails', this.get('direct_enquiry_provide_email'));
        update_profile_record.set('owner_contact_cc_emails', this.get('secondary_email'));
        if (this.get('contact_email') !== null || this.get('contact_email') !== undefined || this.get('contact_email') !== "") {
            update_profile_record.set('owner_contact_email', this.get('contact_email'));
        }
        update_profile_record.set("profile_is_active", this.get("projectActiveDropdownContent"));
        update_profile_record.set("profile_is_deleted", this.get("projectDeleteDropdownContent"));
        this.createGooglemap();
        this.set('toAddress', update_profile_record.get('profile_physical_address') + ", " + update_profile_record.get('profile_suburb') + ", " + update_profile_record.get('profile_regoin') + ", " + update_profile_record.get('profile_country'));
        if (update_profile_record.get('stateManager') !== null && update_profile_record.get('stateManager') !== undefined) {
            update_profile_record.get('stateManager').transitionTo('loaded.saved');
        }
        $('#errorMessage2').attr('style', 'display:none');

        if (this.checkKeywordNum(this.get('projectCategoryDropdownContent'), update_profile_record.get('profile_package_name')) && this.getKeywordsNum(this.get('projectCategoryDropdownContent')) - update_profile_record.get('keywords').get('length') < 0) {

            this.get('controllers.applicationFeedback').statusObserver(null, "Please delete keywords, it can't exceed " +
                    this.getKeywordsNum(this.get('projectCategoryDropdownContent')));
            $('#errorMessage2').attr('style', 'display:block');
            this.set('projectCategoryDropdownContent', update_profile_record.get('profile_package_name'));

        } else {

            update_profile_record.set('profile_package_name', this.get('projectCategoryDropdownContent'));
            this.setKeywordsNum(this.get('model').get('profile_package_name'));
            update_profile_record.set('profile_keywords_num', parseInt(this.get('keyword_num')));
            update_profile_record.set('profile_boost', parseInt(this.get('boost')));
            this.set('keyword_left', parseInt(this.get("keyword_num")) - update_profile_record.get('keywords').get('length'));
            if (this.get('contact_email') === null || this.get('contact_email') === undefined || this.get('contact_email') === "")
            {
                this.get('controllers.applicationFeedback').statusObserver(null, "Please type in Direct Enquiry Primary Email.");
            } else {
                this.get('controllers.applicationFeedback').statusObserver(null, "Profile updated.");
                update_profile_record.store.save();
            }

        }

    },
    addKeywords: function() {
        var keywords_JSON = [];
        var add_keywords_array = this.get('add_keywords').split(',');
        if (this.get('keywords_array').get('length') + add_keywords_array.get('length') <= this.get('keyword_num')) {
            for (var i = 0; i < add_keywords_array.get('length'); i++) {
                if (add_keywords_array[i].trim() !== '' && add_keywords_array[i] !== null && add_keywords_array[i] !== undefined) {
                    var keyword = this.addKeyword(add_keywords_array[i].trim());
                    keywords_JSON.push(JSON.stringify(keyword));
                }
            }
            requiredBackEnd('keywords', 'addKeywords', keywords_JSON, 'POST', function() {
            });
            this.set('add_keywords', "");
            this.set('keyword_left', this.get('keyword_left') - add_keywords_array.get('length'));
        } else {
            this.get('controllers.applicationFeedback').statusObserver(null, "You can not add keywords more than " + this.get('keyword_num'), 'failed');
        }
    },
    addKeyword: function(keyword_name) {
        var keyword_id = new Date().getTime() + Math.random().toString().substring(2, 7);
        var keyword = HubStar.Keyword.createRecord({"keyword_id": keyword_id, "keyword_name": keyword_name, "create_date": new Date().getTime(),
            "expire_date": null, "value": null, 'profile_id': this.get('model').get('id'), 'collection_id': null, "is_delete": false});
        this.get('keywords_array').pushObject(keyword);
        return keyword;
    },
    deleteKeywords: function(keyword_id, type) {
        if (type === "all") {
            for (var i = 0; i < this.get('keywords_array').get('length'); i++) {
                if (this.get('keywords_array').objectAt(i).get('keyword_id') === keyword_id) {
                    requiredBackEnd('keywords', 'delete', JSON.stringify(this.get('keywords_array').objectAt(i)), 'POST', function() {
                    });
                    this.get('keywords_array').removeObject(this.get('keywords_array').objectAt(i));
                    this.set('keyword_left', this.get('keyword_left') + 1);
                }
            }
            if (this.get('show_keyword_id').indexOf(keyword_id) > -1) {
                this.set('show_keyword_id', this.get('show_keyword_id').replace(',' + keyword_id, ''));
                this.set('show_keyword_id', this.get('show_keyword_id').replace(keyword_id, ''));
                for (var i = 0; i < this.get('show_keyword_array').get('length'); i++) {
                    if (this.get('show_keyword_array').objectAt(i).get('keyword_id') === keyword_id) {
                        this.get('show_keyword_array').removeObject(this.get('show_keyword_array').objectAt(i));
                        this.set('show_keyword_id', this.get('show_keyword_id').replace(',' + keyword_id, ''));
                    }
                }
            }
        } else {
            for (var i = 0; i < this.get('show_keyword_array').get('length'); i++) {
                if (this.get('show_keyword_array').objectAt(i).get('keyword_id') === keyword_id) {
                    this.get('show_keyword_array').removeObject(this.get('show_keyword_array').objectAt(i));
                    this.set('show_keyword_id', this.get('show_keyword_id').replace(',' + keyword_id, ''));
                    this.set('show_keyword_id', this.get('show_keyword_id').replace(keyword_id, ''));
                }
            }
        }
    },
    flipFrontClick: function() {
        $("#profilePanel").addClass('flip');
        this.selectionForDashborad();


    },
    selectionForDashborad: function() {
        $('.front').attr("style", "text-align: inherit; width: auto;  box-shadow: none; border: none; position: relative;height:" + $('.back').height() + "px");
        $("#profileDashboard").attr("style", "width: 100%;height:auto;  background-color:white; border-radius:3px;border:none;position:absolute;top:0;left:0; display:block");
    },
    changeSize: function() {
        var that = this;
        setTimeout(function() {
            that.selectionForDashborad();
        }, 1);
    },
    flipFrontBack: function() {
        $("#profilePanel").removeClass('flip');
        $('.front').attr("style", "text-align: inherit; width: auto; height: auto; box-shadow: none; border: none; position: relative;");
    }, setUploadImageMode: function(mode)
    {
        this.set('isPhotoUploadMode', true);
        this.set('isPhotoEditingMode', false);
        this.set('isFinished', false);
        this.set('UploadImageMode', mode);
        if (mode === "Profile Picture") {
            this.set("backgroundImage", "http://develop.devbox.s3.amazonaws.com/uploaddemo-profilepicture.png");
        } else if (mode === "Profile Hero") {
            this.set("backgroundImage", "http://develop.devbox.s3.amazonaws.com/uploaddemo-profilehero.png");
        } else {
            this.set("backgroundImage", "http://develop.devbox.s3.amazonaws.com/uploaddemo-profilebackground.png");
        }
        var data = {"RequireIamgeType": mode};
        var that = this;
        requiredBackEnd('tenantConfiguration', 'getRequireIamgeSize', data, 'POST', function(params) {

            var requiredSize = "Your required image size is " + params.width + "x" + params.height;
            that.set('RequiredImageSize', requiredSize);
        });
    }, profileStyleImageDrop: function(e, name)
    {
        var target = getTarget(e, "single");
        var src = target.result;
        var that = this;

        getImageWidth(src, function(width, height) {
            that.set('newStyleImageSource', src);
            that.set('newStyleImageName', name);
            that.set('currentWidth', width);
            that.set('currentHeight', height);
            if (that.get('newStyleImageSource') !== null && that.get('newStyleImageSource') !== "")
            {
                $("#smallUploadImage").css("display", "inline-block");
                var size = "Your image size is " + width + "x" + height;
                that.set('CurrentImageSize', size);

                that.set('isUpload', true);
                that.set('isCrop', true);

            }
        });
    },
    saveLink: function(link_url, link) {

        var http = "http://";
        var update_profile_record = HubStar.Profile.find(this.get('model.id'));
        if (this.get(link) === null || this.get(link) === "" || this.get(link) === undefined)
        {
            this.set(link, "");
            update_profile_record.set(link_url, this.get(link));
            this.set(link, this.get(link));
        }
        else if (this.get(link).slice(0, 5) === 'https' || this.get(link).slice(0, 5) === 'http:') {
            update_profile_record.set(link_url, this.get(link));
            this.set(link, this.get(link));
        } else if (link !== "") {
            update_profile_record.set(link_url, http.concat(this.get(link)));
            this.set(link, http.concat(this.get(link)));
        }
        return update_profile_record;
    },
    cropButton: function()
    {

        this.set('cropsize', $('#panel').text());
        this.set('isPhotoUploadMode', false);
        this.set('isPhotoEditingMode', true);
        this.set('isFinished', false);
        this.set('isUpload', false);

        if (this.get('UploadImageMode') === "Profile Picture")
        {
            this.set('isProfilePicture', true);
            this.set('isProfileHero', false);
            this.set('isProfileBackground', false);
        } else if (this.get('UploadImageMode') === "Profile Hero")
        {
            this.set('isProfilePicture', false);
            this.set('isProfileHero', true);
            this.set('isProfileBackground', false);
        } else if (this.get('UploadImageMode') === "Background")
        {
            this.set('isProfilePicture', false);
            this.set('isProfileHero', false);
            this.set('isProfileBackground', true);

        }
        var that = this;
        Ember.run.later(function() {
            crop(that.get('newStyleImageSource'));
        }, 0);


    },
    photoUpload: function() {
        if (this.get('newStyleImageSource') !== null && this.get('newStyleImageSource') !== "")
        {

            var src = this.get('newStyleImageSource');
            var that = this;
            that.set('loadingTime', true);

            getImageWidth(src, function(width, height) {
                that.set('currentWidth', width);
                that.set('currentHeight', height);
                var data = {"RequireIamgeType": that.get('UploadImageMode')};
                requiredBackEnd('tenantConfiguration', 'getRequireIamgeSize', data, 'POST', function(params) {
                    if ((width >= params.width) && (height >= params.height))
                    {

                        if (that.get('isUpload') === true) {
                            that.setTempImage();
                        }
                        else if (that.get('isCrop') === true)
                        {
                            that.setCropImage();
                        }

                        var data1 = {"newStyleImageSource": that.get('newStyleImageSource'),
                            'newStyleImageName': that.get('newStyleImageName'),
                            'mode': that.get('UploadImageMode').replace(" ", "_").toLowerCase(),
                            'id': that.get('model.id')};

                        requiredBackEnd('profiles', 'updateStyleImage', data1, 'POST', function() {
                            that.set('isPhotoEditingMode', false);
                            that.set('isPhotoUploadMode', false);
                            that.set('isUpload', false);
                            that.set("isCrop", false);
                            that.get('controllers.applicationFeedback').statusObserver(null, "Profile updated.");
                            that.set('loadingTime', false);
                            that.set('isFinished', true);
                        });

                    }
                    else if (width < params.width || height < params.height) {
                        that.set('loadingTime', false);
                        that.get('controllers.applicationFeedback').statusObserver(null, "Please upload image size larger than  " + params.width + "x" + params.height);
                        $("#smallUploadImage").css("display", "none");
                        that.set('newStyleImageSource', "");
                        that.set('newStyleImageName', "");
                        that.set('CurrentImageSize', "");
                        that.set('isCrop', false);
                        that.set('isUpload', false);


                    }

                });


            });

        }

    },
    setCropImage: function() {
        var cropData = getResults();
        this.set('newStyleImageSource', cropData);
        this.setTempImage();
    },
    setTempImage: function() {
        var model = this.get('model');
        if (this.get('UploadImageMode') === "Profile Picture")
        {
            this.set('isProfilePicture', true);
            this.set('isProfileHero', false);
            this.set('isProfileBackground', false);
            this.set('profile_pic_url', this.get('newStyleImageSource'));
            model.set('profile_pic_url', this.get('newStyleImageSource'));
        } else if (this.get('UploadImageMode') === "Profile Hero")
        {
            this.set('isProfilePicture', false);
            this.set('isProfileHero', true);
            this.set('isProfileBackground', false);
            this.set('profile_hero_url', this.get('newStyleImageSource'));
            model.set('profile_hero_url', this.get('newStyleImageSource'));
        } else if (this.get('UploadImageMode') === "Background")
        {
            this.set('isProfilePicture', false);
            this.set('isProfileHero', false);
            this.set('isProfileBackground', true);
            this.set('profile_bg_url', this.get('newStyleImageSource'));
            model.set('profile_bg_url', this.get('newStyleImageSource'));
        }


    },
    resetNewStyleImageSource: function()
    {
        this.set('newStyleImageSource', "");
        $("#smallUploadImage").css("display", "none");
        this.set('newStyleImageName', "");
        this.set('CurrentImageSize', "");
        this.set('isCrop', false);
        this.set('isUpload', false);

        this.changeSize();
    }, dropdown: function(checking) {
        if (checking === "package") {
            this.set('isActiveDropdown', false);
            this.set('isDeleteDropdown', false);
            this.set('isPackgetDropdown', !this.get('isPackgetDropdown'));

        } else if (checking === "active") {
            this.set('isDeleteDropdown', false);
            this.set('isPackgetDropdown', false);
            this.set('isActiveDropdown', !this.get('isActiveDropdown'));
        }
        else if (checking === "delete") {
            this.set('isPackgetDropdown', false);
            this.set('isActiveDropdown', false);
            this.set('isDeleteDropdown', !this.get('isDeleteDropdown'));
        }
        if (checking === "category") {
            this.set('profileSubcategoryDropdown', false);
            this.set('profileCategoryDropdown', !this.get('profileCategoryDropdown'));
        }
        else if (checking === "subcategory") {
            this.set('profileCategoryDropdown', false);
            this.set('profileSubcategoryDropdown', !this.get('profileSubcategoryDropdown'));
        }
    },
    rateEditing: function() {
        if (this.get("controllers.checkingLoginStatus").popupLogin())
        {

            if (this.get('model').get('reviews').get('length') === 0) {
                this.set("rateTime", true);
            }
            else if (this.get('model').get('reviews').get('length') > 0) {
                if (this.get('model').get('reviews').objectAt(0).get("review_user_id").indexOf(localStorage.loginStatus) !== -1)
                {
                    this.set("rateTime", false);
                    this.transitionToRoute('reviews');
                    $(window).scrollTop(2500);
                    this.get('controllers.applicationFeedback').statusObserver(null, "You have already reviewed this profile, thank you!", "warnning");
                } else {
                    this.set("rateTime", true);
                }
            }
        }
    },
    setCollectionAttr: function() {
        this.set("newTitle", this.get('selectedCollection').get('title'));
        this.set("newDesc", this.get('selectedCollection').get('desc'));
        collection_title_record = this.get('selectedCollection').get('title');
        collection_desc_record = this.get('selectedCollection').get('desc');
    },
    getCollectionAttr: function() {
        this.get('selectedCollection').set('title', collection_title_record);
        this.get('selectedCollection').set('desc', collection_desc_record);
        this.set("newTitle", collection_title_record);
        this.set("newDesc", collection_desc_record);
    },
    gotoSize: function()
    {
        if (this.get('website_url') !== null && this.get('website_url') !== "") {
            window.open(this.get('website_url'));
        }
    },
    sendEventTracking: function(hitType, category, action, label) {
        if (this.isTracking && this.get('model').get('profile_analytics_code') !== null) {
            var analytics_array = this.get('model').get('profile_analytics_code').split(',');
            for (var i = 0; i < analytics_array.length; i++) {
                ga(this.get('model').get('id').split('-').join('') + i.toString() + '.send', {
                    'hitType': hitType,
                    'eventCategory': category,
                    'eventAction': action,
                    'eventLabel': label
                });
            }
        }
    },
    dropdownPhotoSetting: function() {
        $("#dropdown_id_").toggleClass('hideClass');
        $("#dropdown_id_").click(function() {
            $(this).removeClass('hideClass');
        }).mouseleave(function() {
            $(this).addClass('hideClass');
        });
    },
    // share to social facebook
    fbShare: function() {
        if (this.get("controllers.checkingLoginStatus").popupLogin())
        {
            var that = this;
            var currntUrl = 'http://' + document.domain + '/#/profiles/' + this.get('currentUserID');
            var caption = '';

            if (this.get('profile_cover_text') !== null)
            {
                caption = this.get('profile_cover_text');

            }
            else
            {
                caption = '';
            }

            var obj = {
                method: 'feed',
                link: currntUrl,
                picture: this.get('profile_pic_url'),
                name: this.get('profile_name'),
                caption: 'Trends Ideas',
                description: caption
            };

            function callback(response) {
                if (response && response.post_id) {
                    var mega = HubStar.Mega.find(that.get('currentUserID'));
                    mega.then(function() {
                        if (mega.get("share_count") === undefined || mega.get("share_count") === null || mega.get("share_count") === "")
                        {
                            mega.set("share_count", 0);
                        }
                        else
                        {
                            mega.set("share_count", mega.get("share_count") + 1);
                        }
                        mega.store.save();
                    });
                    that.get('controllers.applicationFeedback').statusObserver(null, "Shared Successfully.");
                } else {
                    that.get('controllers.applicationFeedback').statusObserver(null, "Share cancelled.", "failed");
                }
            }

            FB.ui(obj, callback);

            return false;
        }
    },
    //share to social google plus
    gpShare: function() {
        if (this.get("controllers.checkingLoginStatus").popupLogin())
        {
            var caption = '';
            if (this.get('profile_cover_text') !== null)
            {
                caption = this.get('profile_cover_text');

            }
            else
            {
                caption = '';
            }

            $("meta[property='og\\:title']").attr("content", this.get('profile_name'));
            $("meta[property='og\\:description']").attr("content", caption);
            $("meta[property='og\\:image']").attr("content", this.get('profile_pic_url'));


            var currntUrl = 'http://' + document.domain + '/#/profiles/' + this.get('currentUserID');
            var url = 'https://plus.google.com/share?url=' + encodeURIComponent(currntUrl);
            var mega = HubStar.Mega.find(this.get('currentUserID'));
            mega.then(function() {
                if (mega.get("share_count") === undefined || mega.get("share_count") === null || mega.get("share_count") === "")
                {
                    mega.set("share_count", 0);
                }
                else
                {
                    mega.set("share_count", mega.get("share_count") + 1);
                }
                mega.store.save();
            });
            window.open(
                    url,
                    'popupwindow',
                    'scrollbars=yes,width=800,height=400'
                    ).focus();

            return false;
        }
    },
    //share to social twitter
    tShare: function() {
        if (this.get("controllers.checkingLoginStatus").popupLogin())
        {
            var currntUrl = 'http://' + document.domain + '/#/profiles/' + this.get('currentUserID');
            var url = 'https://twitter.com/share?text=' + this.get('profile_name') + '&url=' + encodeURIComponent(currntUrl);
            var mega = HubStar.Mega.find(this.get('currentUserID'));
            mega.then(function() {
                if (mega.get("share_count") === undefined || mega.get("share_count") === null || mega.get("share_count") === "")
                {
                    mega.set("share_count", 0);
                }
                else
                {
                    mega.set("share_count", mega.get("share_count") + 1);
                }
                mega.store.save();
            });
            window.open(
                    url,
                    'popupwindow',
                    'height=436,width=626'
                    ).focus();
            return false;
        }
    },
    pShare: function() {
        if (this.get("controllers.checkingLoginStatus").popupLogin())
        {
            var currntUrl = 'http://' + document.domain + '/#/profiles/' + this.get('currentUserID');
            var url = 'http://www.pinterest.com/pin/create/button/?url=' + encodeURIComponent(currntUrl) +
                    '&media=' + encodeURIComponent(this.get('profile_pic_url')) +
                    '&description=' + encodeURIComponent(this.get('profile_name'));
            var mega = HubStar.Mega.find(this.get('currentUserID'));
            mega.then(function() {
                if (mega.get("share_count") === undefined || mega.get("share_count") === null || mega.get("share_count") === "")
                {
                    mega.set("share_count", 0);
                }
                else
                {
                    mega.set("share_count", mega.get("share_count") + 1);
                }
                mega.store.save();
            });
            window.open(
                    url,
                    'popupwindow',
                    'height=436,width=626'
                    ).focus();
            return false;
        }
    },
    keywordSearch: function(keyword) {
        this.transitionToRoute('searchIndexTom');
        this.get("controllers.application").set('search_string', keyword);
        this.get("controllers.application").newSearch();
    },
    dragIntoFront: function() {
        if (this.get('dragTargetIndex') < 0) {
            this.get('controllers.applicationFeedback').statusObserver(null, "Please drag keywords from the keywords list below.", "warnning");
        } else if (this.get('show_keyword_array').get('length') > 9) {
            this.get('controllers.applicationFeedback').statusObserver(null, "Your can only display 10 keywords at a time on your business profile.", "warnning");
        } else {
            if (this.get('show_keyword_id').indexOf(this.get('keywords_array').objectAt(this.get('dragTargetIndex')).get('keyword_id')) === -1) {
                this.get('show_keyword_array').pushObject(this.get('keywords_array').objectAt(this.get('dragTargetIndex')));
                if (this.get('show_keyword_id') !== null && this.get('show_keyword_id') !== '') {
                    this.set('show_keyword_id', this.get('show_keyword_id') + ',' + this.get('keywords_array').objectAt(this.get('dragTargetIndex')).get('keyword_id'));
                } else {
                    this.set('show_keyword_id', this.get('keywords_array').objectAt(this.get('dragTargetIndex')).get('keyword_id'));
                }
            } else {
                this.get('controllers.applicationFeedback').statusObserver(null, "This keyword has already been added to your display list.", "warnning");
            }
        }
    },
    partnerSearch: function()
    {
        if (this.get('partnerSearchString') !== null && this.get('partnerSearchString') !== '') {
            var profilePartnersController = this.get("controllers.profilePartners");
            profilePartnersController.searchPartner(this.get('partnerSearchString'));
        }
    },
    partnerSearchReset: function(model)
    {
        var profilePartnersController = this.get("controllers.profilePartners");
        this.set('partnerSearchString', '');
        profilePartnersController.getClientId(model);
    },
    getVideoURL: function() {
        var video_url = this.get('about_us').objectAt(0).get('about_video').objectAt(0).get('video_url').split('?');
        if (video_url.get('length') > 1) {
            var VideoURL = '//www.youtube.com/embed/' + video_url[1].split('=')[1];
            this.set('embeded_url', VideoURL);
        } else {
            this.set('embeded_url', '');
        }
    }
}
);

