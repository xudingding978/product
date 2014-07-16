
var interest_record;
var collection_title_record;
var collection_desc_record;
var about_record;
HubStar.UserController = Ember.Controller.extend({
    user: null,
    identifier: "",
    uploadMode: null,
    newCollectionName: null,
    collections: [],
    temp: [],
    followerTag: false,
    followingTag: false,
    messageTag: false,
    postTag: false,
    followDisplay: true,
    newDesc: '',
    Id: "",
    more: false,
    type: "users",
    newTitle: '',
    selectedDesc: "",
    selectedTitle: "",
    display_name: "",
    about_me_limit: "",
    about_me_limit_num: 430,
    left_count_aboutme: 430,
    gender: "",
    age: "",
    userTage: true,
    currentUserID: "",
    needs: ['photoCreate', 'applicationFeedback', 'userFollowers', 'userFollowings', 'application', 'platformBar', 'collection', 'htmlEditor', 'userMessage', 'messageCenter', 'talk', 'checkingLoginStatus'],
    facebook: "",
    twitter: "",
    follow_status: false,
    following_status: false,
    googleplus: "",
    pinterest: "",
    linkedin: "",
    youtube: "",
    instagram: "",
    location: "",
    email: "",
    password: "",
    oldpassword: "",
    newpassword: "",
    repeatnew: "",
    makeSureDelete: false,
    updateOrCreate: true,
    collectionTag: true,
    selectedCollection: "",
    profileSelectionStatus: "",
    selected_topics: [],
    interests: "",
    userCollectionStatistics: "",
    userFollowingStatistics: "",
    userFollowerStatistics: "",
    editingInterest: false,
    interest: "interest",
    is_authentic_user: false,
    aboutMe: "aboutMe",
    about_me: "",
    first_name: "",
    last_name: "",
    subcateMethod: [{list_id: 3, isSelection: false, category_topic: "email"}],
    subcate: [{list_id: 0, isSelection: false, category_topic: "message"}, {list_id: 1, isSelection: false, category_topic: "follow"}, {list_id: 2, isSelection: false, category_topic: "conversation"}],
    is_Photoclick: false,
    is_click: false,
    photo_url_large: "",
    photo_url: "",
    cover_url: "",
    isCrop: false,
    isPhotoUploadMode: false,
    newStyleImageSource: '',
    newStyleImageName: '',
    currentWidth: '',
    currentHeight: '',
    CurrentImageSize: "",
    RequiredImageSize: "",
    UploadImageMode: "",
    isUserSelf: false,
    interestsActive: false,
    isUpload: false,
    loadingTime: false,
    isTalk: false,
    actions: {
        cropButton: function()
        {
            this.set('isPhotoUploadMode', false);
            this.set('isPhotoEditingMode', true);
            this.set('isUpload', false);
            var that = this;
            $('#uploadStyleImg').attr("style", "display:block");
            Ember.run.later(function() {
                crop(that.get('newStyleImageSource'));
            }, 0);
            $('#uploadStyleImg').attr("style", "display:none");
        },
        userPhotoEditBackButton: function() {
            if (this.get('is_Photoclick') === true) {
                this.set('is_Photoclick', false);
                $('#flip-front').show();
                $('#user-photo_left').show();
                $('#user-photo_left-back').hide();
                this.set('newStyleImageSource', "");
                this.set('newStyleImageName', "");
                this.set('CurrentImageSize', "");
                this.set('isUpload', false);
                this.set('isCrop', false);
            }
        },
        savePhotoUpdate: function()
        {

            if (this.get('newStyleImageSource') !== null && this.get('newStyleImageSource') !== "")
            {
                var that = this;
                var imageName = that.get('newStyleImageName').split('.');
                var type = imageName[imageName.length - 1];
                if (that.get('isUpload') === true) {
                    that.setTempImage();
                }
                else if (that.get('isCrop') === true)
                {
                    that.setCropImage();
                }
                that.set('loadingTime', true);
                var data1 = {"newStyleImageSource": that.get('newStyleImageSource'),
                    'newStyleImageName': that.get('newStyleImageName'),
                    'mode': that.get('UploadImageMode').replace(" ", "_").toLowerCase(),
                    'id': that.get('model.id'), 'type': type};
                requiredBackEnd('users', 'updateStyleImage', data1, 'POST', function(params) {

                    that.set('isPhotoUploadMode', false);
                    var update_user_record = that.get('model');
                    if (params.length === 2)
                    {
                        update_user_record.set("cover_url", params[0]);
                        update_user_record.set("cover_url_small", params[1]);
                    }
                    else if (params.length === 1)
                    {
                        update_user_record.set("photo_url_large", params[0]);
                    }
                    update_user_record.save();
                    that.send("userPhotoEditBackButton");
                    that.send("userDashboardBackButton");
                    that.get('controllers.applicationFeedback').statusObserver(null, "Profile picture updated.");
                    that.set('loadingTime', false);
                });
            }
        },
        userDashboardBackButton: function() {
            if (this.get('is_click') === true) {
                this.set('is_click', false);
                this.setUser();
                $('#user-board_right_front').show();
                $('#user-board_right_back').hide();
                $('#change_profile').show();
                this.set('newStyleImageSource', "");
                this.set('newStyleImageName', "");
                this.set('CurrentImageSize', "");
                this.set('isCrop', false);
                this.set('isUpload', false);
            }
        },
        saveUpdate: function() {
            var update_user_record = this.get('model');
            if (this.isInputValid())
            {
                update_user_record.set('collections', this.get('collections'));
                update_user_record.set('description', this.get('description'));
                update_user_record.set('display_name', this.get('display_name').replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, ''));
                update_user_record.set('first_name', this.get('first_name'));
                update_user_record.set('last_name', this.get('last_name'));
                update_user_record.set('about_me', this.get('about_me'));
                update_user_record.set('region', this.get('location'));
                update_user_record.set('email', this.get('email'));
                update_user_record.set('password', this.get('password'));
                update_user_record.set('about_me', this.get('about_me'));
                this.get('controllers.applicationFeedback').statusObserver(null, "General Settings updated.");
                update_user_record.store.save();
                this.set("display_name", this.get('display_name').replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, ''));
            }
            else {
                this.get('controllers.applicationFeedback').statusObserver(null, "Please check if you have already filled the mandatory field.", "warnning");
            }
        },
        saveSociallinkUpdate: function() {

            if (this.isSociallinkInputValid())
            {
                this.saveLink('facebook_link', 'facebook');
                this.saveLink('twitter_link', 'twitter');
                this.saveLink('googleplus_link', 'googleplus');
                this.saveLink('pinterest_link', 'pinterest');
                this.saveLink('linkedin_link', 'linkedin');
                this.saveLink('youtube_link', 'youtube');
                this.saveLink('instagram_link', 'instagram');
                this.get('controllers.applicationFeedback').statusObserver(null, "Social Links updated.");
                this.get('model').store.save();
            }
            else {
                this.get('controllers.applicationFeedback').statusObserver(null, "Please check you have entered the correct URL.", "warnning");
            }
        },
        savePassword: function() {

            var user = this.getCurrentUser();
            var isSave = true;
            var that = this;
            var getmodelInfo = [user.get('id')];
            requiredBackEnd('login', 'getmodel', getmodelInfo, 'POST', function(params) {

                if (that.get('oldpassword') === params.PWD_HASH && that.get('newpassword') === that.get('repeatnew') && that.get('newpassword').length >= 6 && that.get('newpassword').length <= 40) {

                    isSave = false;
                    var thatthat = that;
                    var updateInfo = [user.get('id'), that.get('oldpassword'), that.get('newpassword'), that.get('repeatnew'), isSave];
                    requiredBackEnd('login', 'update', updateInfo, 'POST', function() {
                        var thatthatthat = thatthat;
                        setTimeout(function() {
                            thatthatthat.set('oldpassword', "");
                            thatthatthat.set('newpassword', "");
                            thatthatthat.set('repeatnew', "");
                        }, 1000);
                        thatthat.get('controllers.applicationFeedback').statusObserver(null, "Password updated.");
                    });
                }
                else {
                    that.get('controllers.applicationFeedback').statusObserver(null, "Please check you have entered the correct information.", "warnning");
                }
            });
        },
        checkedAction: function(checkedboxselection) {
            $("#" + checkedboxselection).prop('checked', !$("#" + checkedboxselection).prop('checked'));
            //this.get("subcate").objectAt(checkedboxselection).isSelection = !this.get("subcate").objectAt(checkedboxselection).isSelection;
            Ember.set(this.get("subcate").objectAt(checkedboxselection), "isSelection", !this.get("subcate").objectAt(checkedboxselection).isSelection);
        },
        checkedMethodAction: function(checkedboxselection) {
            $("#" + checkedboxselection).prop('checked', !$("#" + checkedboxselection).prop('checked'));

            Ember.set(this.get("subcateMethod").objectAt(checkedboxselection - this.get("subcate").length), "isSelection", !this.get("subcateMethod").objectAt(checkedboxselection - this.get("subcate").length).isSelection);

        },
        saveNotification: function()
        {
            var notification = "";
            for (var i = 0; i < this.get("subcateMethod").length; i++)
            {
                if (this.get("subcateMethod").objectAt(i).isSelection === true) {
                    if (notification === "")
                    {
                        notification = this.get("subcateMethod").objectAt(i).category_topic;
                    }
                    else
                    {
                        notification = notification + "," + this.get("subcateMethod").objectAt(i).category_topic;
                    }
                }
            }
            for (var i = 0; i < this.get("subcate").length; i++)
            {
                if (this.get("subcate").objectAt(i).isSelection === true) {
                    if (notification === "")
                    {
                        notification = this.get("subcate").objectAt(i).category_topic;
                    }
                    else
                    {
                        notification = notification + "," + this.get("subcate").objectAt(i).category_topic;
                    }
                }
            }
            var notification_string = [localStorage.loginStatus, notification];
            var tempComment = JSON.stringify(notification_string);
            var that = this;
            requiredBackEnd('users', 'SaveNotification', tempComment, 'POST', function() {
                var update_user_record = that.get('model');
                update_user_record.set("notification_setting", notification);
                that.send("userDashboardBackButton");
            });
        },
        userDashboardButton: function(mode) {

            if (this.get('is_click') === false) {
                this.set('is_click', true);
                $('#user-board_right_front').hide();
                $('#user-board_right_back').show();
                $('#change_profile').hide();
                this.setUploadImageMode(mode);
            }

        },
        userPhotoEditButton: function(mode) {

            if (this.get('is_Photoclick') === false) {
                this.set('is_Photoclick', true);
                $('#flip-front').hide();
                $('#user-photo_left').hide();
                $('#user-photo_left-back').show();
                this.setUploadImageMode(mode);
            }

        },
        followThisUser: function() {
            if (this.get("controllers.checkingLoginStatus").popupLogin())
            {
                var user_id = this.get('model').get('id');
                if (this.get("follow_status") === false) {
                    this.get("controllers.userFollowers").followUser(user_id, this, null);
                } else {
                    this.get("controllers.userFollowers").unFollowUser(user_id, this, null);
                }
            }
        },
        talkToPeople: function() {
            if (this.get("controllers.checkingLoginStatus").popupLogin())
            {
                this.set("isTalk", true);
                this.get("controllers.talk").set("owner_photo_url", this.get("photo_url_large"));
                this.get("controllers.talk").set("displayName", this.get("display_name"));
            }
        },
        toggleEditing: function(data, checkingInfo) {

            if (checkingInfo === "interest") {
                interest_record = data;
                this.set('editingInterest', !this.get('editingInterest'));
            }
            else if (checkingInfo === "aboutMe") {
                about_record = data;
                this.set('editingAbout', !this.get('editingAbout'));
            }
        },
        yes: function(checkingInfo) {
            if (checkingInfo === "interest") {
                this.set('editingInterest', !this.get('editingInterest'));
            } else if (checkingInfo === "aboutMe") {
                this.set('editingAbout', !this.get('editingAbout'));
            }
            this.saveUpdateInterest();
        },
        no: function(checkingInfo) {
            if (checkingInfo === "interest") {
                this.set('interests', interest_record);
                this.set('editingInterest', !this.get('editingInterest'));
            }
            else if (checkingInfo === "aboutMe") {
                this.set('about_me', about_record);
                this.set('editingAbout', !this.get('editingAbout'));
            }

        },
        deleteTopic: function(topic) {
            var user = HubStar.User.find(localStorage.loginStatus);
            user.set('selected_topics', user.get('selected_topics') + ',');
            $('#' + topic).attr('style', 'display:none');
            user.set('selected_topics', user.get('selected_topics').replace(topic + ",", ""));
            user.set('selected_topics', user.get('selected_topics').substring(0, user.get('selected_topics').length - 1));
            user.store.commit();
            this.setIntersetsArr(user);
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
        selectCollection: function() {
            this.set('profileSelectionStatus', 'Collections');
            this.set('followingTag', false);
            this.set('collectionTag', true);
            this.set('followerTag', false);
            this.set('postTag', false);
            //this.set("Id", this.get('collections').objectAt(0).get('optional'));

            this.set('messageTag', false);
            this.transitionToRoute('userCollections');
        },
        selectFollowing: function() {
            if (this.get("controllers.checkingLoginStatus").popupLogin())
            {
                this.set('profileSelectionStatus', 'Following');
                this.set('followingTag', true);
                this.set('collectionTag', false);
                this.set('followerTag', false);
                this.set('postTag', false);
                this.set('messageTag', false);
                this.transitionToRoute('following');
            }

        },
        selectFollower: function() {
            if (this.get("controllers.checkingLoginStatus").popupLogin())
            {
                this.set('profileSelectionStatus', 'Followers');
                //     this.get('controllers.userFollowers').getClientId(model);

                this.set('followingTag', false);
                this.set('collectionTag', false);
                this.set('followerTag', true);
                this.set('postTag', false);
                this.set('messageTag', false);
                this.transitionToRoute('followers');
            }

        },
        selectMessage: function() {

            this.set('profileSelectionStatus', 'Messages');
            this.set('followingTag', false);
            this.set('collectionTag', false);
            this.set('followerTag', false);
            this.set('messageTag', true);
            this.set('postTag', false);
            this.transitionToRoute('messageCenter');
        },
        selectPost: function() {
            if (this.get("controllers.checkingLoginStatus").popupLogin())
            {
                this.set('profileSelectionStatus', 'Posts');
                this.set('followingTag', false);
                this.set('collectionTag', false);
                this.set('followerTag', false);
                this.set('messageTag', false);
                this.set('postTag', true);
                this.transitionToRoute('userMessage');
            }

        },
        deleteSelectedCollection: function()
        {
            var message = "Remove this collection?";
            this.set("message", message);
            this.set('makeSureDelete', true);
            if (this.get('willDelete')) {
                var tempCollection = this.get("selectedCollection");
                var delInfo = [tempCollection.get("id"), this.get('model').get('id'), 'user'];
                delInfo = JSON.stringify(delInfo);
                requiredBackEnd('collections', 'delete', delInfo, 'POST', function() {
                });
                this.get("collections").removeObject(this.get("selectedCollection"));
                this.send("cancelDelete");
            } else {
                this.set('willDelete', true);
            }
            this.statstics();
            setTimeout(function() {
                $('#masonry_user_container').masonry("reloadItems");
                setTimeout(function() {
                    $('#masonry_user_container').masonry();
                }, 100);
            }, 250);
        },
        submit: function()
        {
            var collectionController = this.get('controllers.collection');
            var collection = collectionController.getCreateCollection(this.get('newTitle'), this.get('newDesc'), this.get("collections"));
            if (this.get('newDesc').length < 256) {
                if (collection !== null && collection !== "") {
                    collection.set('type', 'user');
                    collection.set('optional', this.get('model').get('id'));
                    this.get("collections").insertAt(0, collection);
                    collection.store.save();
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
                        }, 100);
                    }, 250);
                }
            } else {
                this.get('controllers.applicationFeedback').statusObserver(null, "Your description should be less than 256 characters.", "warnning");
            }

        },
        updateCollectionInfo: function()
        {
            if (this.get('newDesc').length < 256) {
                this.get('selectedCollection').set('title', this.get('newTitle'));
                this.get('selectedCollection').set('desc', this.get('newDesc'));
                var collectionController = this.get('controllers.collection');
                var collection = collectionController.getUpdateCollection(this.get('selectedCollection'));
                collection.set('optional', this.get('model').get('id'));
                collection.set('type', 'user');
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
                $('#masonry_user_container').masonry("reloadItems");
                setTimeout(function() {
                    $('#masonry_user_container').masonry();
                }, 100);
            }, 250);
        },
        cancelDelete: function() {
            this.set('willDelete', false);
            this.set('makeSureDelete', false);
        }
    },
    init: function()
    {

    },
    isUserSelfOrNot: function(currentUserID) {
        this.set("isUserSelf", false);
        if (currentUserID === localStorage.loginStatus) {
            this.set("isUserSelf", true);
        }
    },
    getCurrentUser: function()
    {
        var address = document.URL;
        var user_id = address.split("#")[1].split("/")[2];
        this.set('currentUserID', user_id);
        var user = HubStar.User.find(user_id);
        return user;
    },
    notificationSetting: function() {
        if (this.get("notification_setting") !== null && this.get("notification_setting") !== "")
        {
            var items = this.get("notification_setting").split(",");
            for (var i = 0; i < items.length; i++)
            {
                if (items[i] === "email")
                {
                    Ember.set(this.get("subcateMethod").objectAt(0), "isSelection", true);
                    //this.get("subcateMethod").objectAt(0).isSelection = true;
                }
                else if (items[i] === "message")
                {
                    Ember.set(this.get("subcate").objectAt(0), "isSelection", true);
                    //this.get("subcate").objectAt(0).isSelection = true;
                }
                else if (items[i] === "follow")
                {
                    Ember.set(this.get("subcate").objectAt(1), "isSelection", true);
                    //this.get("subcate").objectAt(1).isSelection = true;
                }
                else if (items[i] === "conversation")
                {
                    Ember.set(this.get("subcate").objectAt(2), "isSelection", true);
                    //this.get("subcate").objectAt(2).isSelection = true;
                }
            }
        }
        else if (this.get("notification_setting") === null)
        {

//            this.get("subcateMethod").objectAt(0).isSelection = true;
//            this.get("subcate").objectAt(0).isSelection = true;
//            this.get("subcate").objectAt(1).isSelection = true;
//            this.get("subcate").objectAt(2).isSelection = true;
            Ember.set(this.get("subcateMethod").objectAt(0), "isSelection", true);
            Ember.set(this.get("subcate").objectAt(0), "isSelection", true);
            Ember.set(this.get("subcate").objectAt(1), "isSelection", true);
            Ember.set(this.get("subcate").objectAt(2), "isSelection", true);
        }
    },
    setUser: function()
    {
        var user = this.get('model');
        this.setIntersetsArr(user);
        this.set("user", user);
        this.set("left_count_aboutme", 430 - user.get("about_me").length);
        this.set("Id", this.get('model').get('id'));
        this.set("collections", user.get("collections"));
        this.set("description", user.get("description"));
        this.set("display_name", user.get("display_name"));
        this.set('currentUserID', this.get('model').get('id'));
        this.set("first_name", user.get("first_name"));
        this.set("last_name", user.get("last_name"));
        this.set("identifier", user.get("identifier"));
        this.set("about_me", user.get("about_me"));
        if (user.get("about_me") !== null && user.get("about_me") !== undefined && user.get("about_me") !== "")
        {
            if (user.get("about_me").length >= this.get("about_me_limit_num"))
            {
                this.set("about_me_limit", true);
                this.set("about_me_limit_data", user.get("about_me").substring(0, this.get("about_me_limit_num")));
            }
            else
            {
                this.set("about_me_limit", false);
            }

        } else
        {
            this.set("about_me_limit", false);
        }

        this.set("facebook", user.get("facebook_link"));
        this.set("twitter", user.get("twitter_link"));
        this.set("googleplus", user.get("googleplus_link"));
        this.set("pinterest", user.get("pinterest_link"));
        this.set("linkedin", user.get("linkedin_link"));
        this.set("youtube", user.get("youtube_link"));
        this.set("instagram", user.get("instagram_link"));
        this.set("location", user.get("region"));
        this.set("email", user.get("email"));
        this.set("oldpassword", "");
        this.set("newpassword", "");
        this.set("repeatnew", "");
        this.set("notification_setting", user.get("notification_setting"));
        this.notificationSetting();
        this.set("password", user.get("password"));
        if (user.get('cover_url') === null || user.get('cover_url') === "" || user.get('cover_url') === undefined) {
            this.set('cover_url', 'http://develop.devbox.s3.amazonaws.com/profile_cover/default/defaultcover6.jpg');
        }
        else
        {
            this.set("cover_url", user.get("cover_url"));
        }
        this.set("photo_url", user.get("photo_url"));

        if (user.get("photo_url_large") === null || user.get('photo_url_large') === "" || user.get('photo_url_large') === undefined) {
            this.set('photo_url_large', 'https://s3-ap-southeast-2.amazonaws.com/develop.devbox/profile_pic/default/defaultpic1.jpg');
        } else {
            this.set("photo_url_large", user.get("photo_url_large"));
        }
        this.isUserSelfOrNot(this.get("currentUserID"));
        this.isFollowed();
        if (this.get("collections").objectAt(0) !== null && typeof this.get("collections").objectAt(0) !== 'undefined') {
            this.setDesc(this.get("collections").objectAt(0).get("desc"));
            this.setTitle(this.get("collections").objectAt(0).get("title"));
        }
        setTimeout(function() {
            $('#masonry_user_container').masonry("reloadItems");
            setTimeout(function() {
                $('#masonry_user_container').masonry();
            }, 100);
        }, 250);
        if (this.get('editingInterest') === true) {
            this.set('editingInterest', false);
            this.set('interestsActive', false);
            $('#show_interest').animate({top: 298, height: 150}, 400, function() {
                $('.interesttags-container').css('height', '100px');
            });
            $('#interest_btn').addClass('fa-angle-double-up');
            $('#interest_btn').removeClass('fa-angle-double-down');
            setTimeout(function() {
                $("#profile-picture").removeClass('profile-picture-active');
                $(".follow-btn").removeClass('follow-btn-active');
                $('#interest_btn').css('display', 'block');
                $('.interesttags-container').css('height', '100px');
            }, 120);
        }
        this.initStastics(user);
        this.checkAuthenticUser();
        this.send("userPhotoEditBackButton");
        this.send("userDashboardBackButton");
        this.set('profileSelectionStatus', 'Collections');
        this.set('followingTag', false);
        this.set('collectionTag', true);
        this.set('followerTag', false);
        this.set('messageTag', false);
        this.set('postTag', false);
        this.labelBarRefresh();
        this.trendsUser();
        $(document).ready(function() {
            setTimeout(function() {
                if ($(window).width() > 1200) {
                    $("#search-bar").css('display', "block");
                    $("#topResidentialCommerical").css('display', "block");
                    $(".search-bar-on-small-screen").css('display', "none");

                    if (HubStar.get("isTopAdDisplay")) {

                    } else {
                        $(".user-top").css("height", "120px");
                    }

                } else {
                    $("#search-bar").css('display', "none");
                    $("#topResidentialCommerical").css('display', "none");
                    $(".search-bar-on-small-screen").css('display', "block");
                    if (HubStar.get("isTopAdDisplay")) {
                        $("#top_bar_ads").css({"position": "fixed", "top": "140px"});
                    } else {
                        $(".user-top").css("height", "120px");
                    }
                }


            }, 50);
        });

    },
    trendsUser: function() {
        if (localStorage.loginStatus)
        {
            if (this.get("user").get("email").match(/@trendsideas.com/g) !== "" && this.get("user").get("email").match(/@trendsideas.com/g) !== "undefined" && this.get("user").get("email").match(/@trendsideas.com/g) !== null)
            {
                HubStar.set("is_trends_user", true);
            }
            else {
                HubStar.set("is_trends_user", false);
            }
        }
        else {
        }

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
    goToUserRoute: function()
    {
        this.transitionToRoute('user');
        $('#user-stats > li').removeClass('selected-user-stats');
        $('#defualt').addClass('selected-user-stats');
    },
    initStastics: function(user) {
        if (user.get("followers") !== null) {
            this.set('userFollowerStatistics', user.get("followers").get("length"));
        }
        else {
            this.set('userFollowerStatistics', 0);
        }
        if (user.get("followings") !== null) {
            this.set('userFollowingStatistics', user.get("followings").get("length"));
        }
        else {
            this.set('userFollowingStatistics', 0);
        }
        this.statstics();
    },
    statstics: function()
    {
        if (this.get("collections").get("length") !== 0) {
            this.set('userCollectionStatistics', this.get("collections").get("length"));
        }
        else
        {
            this.set('userCollectionStatistics', 0);
        }
    },
    getHeroImage: function(id, col) {
        var photo = HubStar.Mega.find(id);
        photo.addObserver('isLoaded', function() {
            if (photo.get('isLoaded')) {
                if (col.get("cover") === null || col.get("cover") === "" || col.get("cover") === undefined || col.get("cover") === 'null'
                        || col.get("cover") === 'https://s3-ap-southeast-2.amazonaws.com/develop.devbox/Defaultcollection-cover.png') {
                    col.set("cover", photo.get('photo').objectAt(0).get("photo_image_hero_url"));
                    col.store.save();
                }
            }
        });
    },
    exit: function()
    {
    },
    getCurrentPage: function()
    {
        var address = document.URL;
        var user_id = address.split("#")[1].split("/")[2];
        this.set('currentUserID', user_id);
        var user = HubStar.User.find(user_id);
        this.set('model', user);
        return user;
    },
    checkingIdisExsinting: function(id, postOrPut) {
        var isExsinting = true;
        if (postOrPut === "create") {
            for (var i = 0; i < this.get("collections").get('length'); i++) {
                if (this.get("collections").objectAt(i).id === id) {
                    isExsinting = false;
                }
            }
            if (!isExsinting) {
                this.get('controllers.applicationFeedback').statusObserver(null, "This Collection is already exsiting.");
            }
        }
        return isExsinting;
    },
    showMore: function() {
        this.set("more", true);
        $(".limit_about_us").attr('style', 'display: none');
    },
    collap: function(checkingInfo) {
        this.set("more", false);
        this.set('about_me', checkingInfo);
        this.saveUpdateInterest();
        $(".limit_about_us").attr('style', 'display: block');
    },
    isInputValid: function() {

        function CheckObject(id, input, length, isEmailValid)
        {
            this.id = id;
            this.input = input;
            this.length = length;
            this.isEmailValid = isEmailValid;
        }
        var checkList = [];
        var result = true;
        var displayName = new CheckObject("displayName", this.get('display_name'), 128, null);
        checkList.push(displayName);
        var first_name = new CheckObject("first_name", this.get('first_name'), 128, null);
        checkList.push(first_name);
        var last_name = new CheckObject("last_name", this.get('last_name'), 128, null);
        checkList.push(last_name);
        var about_me = new CheckObject("about_me", this.get('about_me'), 4096, null);
        checkList.push(about_me);
        var location = new CheckObject("location", this.get('location'), 128, null);
        checkList.push(location);
        for (var i = 0; i < checkList.length; i++)
        {

            if (checkList[i].id === 'email') {
                document.getElementById(checkList[i].id).setAttribute("class", "disabled-btn");
            }
            else {
                document.getElementById(checkList[i].id).setAttribute("class", "");
            }
            if (checkList[i].input !== null && checkList[i].input.length > checkList[i].length)
            {
                result = false;
                document.getElementById(checkList[i].id).setAttribute("class", "error-textfield");
                break;
            }

            if (checkList[i].id === 'first_name' || checkList[i].id === 'last_name')
            {
                if (checkList[i].input === null || checkList[i].input === "") {
                    result = false;
                    document.getElementById(checkList[i].id).setAttribute("class", "error-textfield");
                    break;
                }
            }
        }

        return result;
    },
    isSociallinkInputValid: function() {

        function CheckObject(id, input, length, isUrlValid, shouldInclude)
        {
            this.id = id;
            this.input = input;
            this.length = length;
            this.isUrlValid = isUrlValid;
            this.shouldInclude = shouldInclude;
        }
        var result;
        var checkList = [];
        var facebook = new CheckObject("facebook", this.get('facebook'), 128, true, "facebook");
        checkList.push(facebook);
        var twitter = new CheckObject("twitter", this.get('twitter'), 128, true, "twitter");
        checkList.push(twitter);
        var googleplus = new CheckObject("googleplus", this.get('googleplus'), 128, true, "plus.google");
        checkList.push(googleplus);
        var pinterest = new CheckObject("pinterest", this.get('pinterest'), 128, true, "pinterest");
        checkList.push(pinterest);
        var linkedin = new CheckObject("linkedin", this.get('linkedin'), 128, true, "linkedin");
        checkList.push(linkedin);
        var youtube = new CheckObject("youtube", this.get('youtube'), 128, true, "youtube");
        checkList.push(youtube);
        var instagram = new CheckObject("instagram", this.get('instagram'), 128, true, "instagram");
        checkList.push(instagram);
        for (var i = 0; i < checkList.length; i++)
        {
            document.getElementById(checkList[i].id).setAttribute("class", "");
            if (checkList[i].input !== null && checkList[i].input.length > checkList[i].length)
            {
                result = false;
                document.getElementById(checkList[i].id).setAttribute("class", "error-textfield");
                break;
            }
            if (checkList[i].input !== null && checkList[i].isUrlValid === true)
            {
                if (checkList[i].input.indexOf(checkList[i].shouldInclude) !== -1 || checkList[i].input === "") {
                    result = true;
                }
                else {
                    result = false;
                    document.getElementById(checkList[i].id).setAttribute("class", "error-textfield");
                    break;
                }
            }
        }
        return result;
    },
    saveLink: function(link_url, link) {
        var http = "http://";
        var update_user_record = this.get('model');
        if (this.get(link) === null || this.get(link) === "")
        {
            this.set(link, "");
            update_user_record.set(link_url, this.get(link));
            this.set(link, this.get(link));
        }
        else if (this.get(link).slice(0, 5) === 'https' || this.get(link).slice(0, 5) === 'http:') {
            update_user_record.set(link_url, this.get(link));
            this.set(link, this.get(link));
        } else if (this.get(link) !== "") {
            update_user_record.set(link_url, http.concat(this.get(link)));
            this.set(link, http.concat(this.get(link)));
        }
        return update_user_record;
    },
    interestTrim: function(param) {
        var result = param.replace(/[,\s]*,[,\s]*/g, ",");
        result = result.replace(/^,/, "");
        result = result.replace(/,$/, "");
        return result.trim();
    },
    saveUpdateInterest: function() {
        var checkString = this.interestTrim(this.get('interests'));
        this.set('interests', checkString);
        if ((checkString.substring(checkString.length - 1, checkString.length) !== ',') && (!/,,/.test(checkString))) {
            var update_interest_record = HubStar.User.find(this.get('user.id'));
            interests = this.get('interests');
            var tempInterest = '';
            this.set('selected_topics', []);
            if (interests !== null && interests !== "" && interests !== undefined) {
                var interest = interests.split(",");
                for (var i = 0; i < interest.length; i++) {
                    this.get('selected_topics').pushObject({interests: interest[i].trim()});
                    tempInterest = tempInterest + ',' + interest[i].trim();
                }
            }
            this.set('interests', tempInterest.substring(1, tempInterest.length));
            update_interest_record.set('selected_topics', this.get('interests'));
            update_interest_record.set('about_me', this.get('about_me'));
            if (this.get('about_me').length >= this.get("about_me_limit_num"))
            {
                this.set("about_me_limit", true);
                this.set("about_me_limit_data", this.get("about_me").substring(0, this.get("about_me_limit_num")));
                this.get('controllers.applicationFeedback').statusObserver(null, "The maximum characters can be shown are 430.", "warnning");
            }
            else
            {
                this.set("about_me_limit", false);
            }
            update_interest_record.save();
        } else {
            this.get('controllers.applicationFeedback').statusObserver(null, "Invalid input");
        }

    },
    specialCharactersChecking: function(str) {
        var re = /^[a-zA-Z-][a-zA-Z0-9-]*$/;
        return re.test(str);
    },
    checkingValidInput: function(title) {
        if (title === null || title === "") {
        } else {
            if (title.indexOf(" ") !== -1) {
                title = title.split(' ').join('-');
            }
        }
        return title;
    },
    setDesc: function(desc) {
        this.set("selectedDesc", desc);
    },
    setTitle: function(title) {
        this.set("selectedTitle", title);
    },
    checkInput: function(title) {
        var isInputValid = false;
        if (title !== null && title !== "")
        {
            isInputValid = this.isTitleNotExist(title);
        }
        else {
            isInputValid = false;
        }
        return isInputValid;
    },
    isTitleNotExist: function(title) {
        var isContainsTitle = true;
        for (var i = 0; i < this.get("collections").get("length"); i++)
        {
            var collection = this.get("collections").objectAt(i);
            if (collection.get("title") === title)
            {
                isContainsTitle = false;
            }
        }
        return isContainsTitle;
    },
    setSelectedCollection: function(id) {
        for (var i = 0; i < this.get("collections").get("length"); i++) {
            var thisCollection = this.get("collections").objectAt(i);
            this.get('temp').pushObject(thisCollection.get("id"));
            if (id === thisCollection.get("id")) {
                this.set("selectedCollection", thisCollection);
            }
        }
    },
    newCollection: function()
    {
        var collection = HubStar.Collection.createRecord({"id": null, "title": null, "desc": null, "collection_ids": null, "createdAt": new Date(),
            'cover': 'https://s3-ap-southeast-2.amazonaws.com/develop.devbox/Defaultcollection-cover.png', "optional": this.get('model').get('id'), 'type': 'user'
        });
        this.set("selectedCollection", collection);
    },
    checkAuthenticUser: function() {
        {
            if (localStorage.loginStatus === this.get('user').id) {
                this.set('is_authentic_user', true);
            }
            else {
                this.set('is_authentic_user', false);
            }
        }
    },
    flickButtonClick: function()
    {
        this.set("isEditingMode", !this.get("isEditingMode"));
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
    setIntersetsArr: function(user) {
        interests = user.get('selected_topics');
        this.set('interests', user.get('selected_topics'));
        this.set('selected_topics', []);
        if (interests !== null && interests !== "" && interests !== undefined) {
            var interests = interests.split(",");
            for (var i = 0; i < interests.length; i++) {
                this.get('selected_topics').pushObject({interests: interests[i]});
            }
        }
    },
    isFollowed: function()
    {
        var currentUser = HubStar.User.find(localStorage.loginStatus);
        if (currentUser.get('isLoaded')) {
            this.get("controllers.userFollowers").checkFollowStatus(currentUser, this, null);
        }
        else {
            var that = this;
            currentUser.addObserver('isLoaded', function() {
                if (currentUser.get('isLoaded')) {
                    that.get("controllers.userFollowers").checkFollowStatus(currentUser, that, null);
                }
            });
        }
    },
    profileStyleImageDrop: function(e, name)
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
                var size = " size is " + width + "x" + height;
                that.set('CurrentImageSize', size);
                if (that.get('UploadImageMode') === "User Picture" || that.get('UploadImageMode') === "User Cover") {
                    if (width < 150 || height < 150) {
                        that.get('controllers.applicationFeedback').statusObserver(null, "Please upload image size larger than  " + 150 + "x" + 150, "warnning");
                        that.set('newStyleImageSource', "");
                        that.set('newStyleImageName', "");
                        that.set('CurrentImageSize', "");
                        that.set('isCrop', false);
                        that.set('isUpload', false);
                    }
                    else if (width >= 150 || height >= 150) {
                        that.set('isCrop', true);
                        that.set('isUpload', true);
                    }
                }
            }
        });
    },
    setUploadImageMode: function(mode)
    {
        this.set('isPhotoUploadMode', true);
        this.set('isPhotoEditingMode', false);
        this.set('UploadImageMode', mode);
        var data = {"RequireIamgeType": mode};
        var that = this;
        requiredBackEnd('tenantConfiguration', 'getRequireIamgeSize', data, 'POST', function(params) {

            var requiredSize = "For best results, the image should be at least " + params.width + " x " + params.height + " pixels";
            that.set('RequiredImageSize', requiredSize);
        });
    },
    setCropImage: function() {
        var cropData = getResults();
        this.set('newStyleImageSource', cropData);
        this.setTempImage();
    },
    setTempImage: function() {
        var model = this.get('model');
        if (this.get('UploadImageMode') === "User Picture")
        {
            this.set('photo_url_large', this.get('newStyleImageSource'));
            this.set('newStyleImageName', 'user_picture');
            var ac = this.get("controllers.application");
            var pb = this.get("controllers.platformBar");
            ac.changeImage(this.get('photo_url_large'));
            pb.changeImage(this.get('photo_url_large'));
            model.set('photo_url_large', this.get('newStyleImageSource'));
        } else if (this.get('UploadImageMode') === "User Cover") {
            this.set('cover_url', this.get('newStyleImageSource'));
            this.set('cover_url_small', this.get('newStyleImageSource'));
            this.set('newStyleImageName', 'user_cover');
            model.set('cover_url', this.get('newStyleImageSource'));
        }
    }
}
);
























