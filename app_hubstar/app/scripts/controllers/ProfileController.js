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
var workingtime;
var seletedID = "";
var collection_title_record;
var collection_desc_record;



HubStar.ProfileController = Ember.ObjectController.extend({
    model: null,
    aboutMe: "aboutMe",
    isAboutUs: false,
    about_me: "",
    address: "",
    suburb: "",
    boost: '',
    currentUserID: "",
    collections: [],
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
    keywords: "",
    last_name: "",
    needs: ["profilePartners", "itemProfiles", "userFollowers", 'permission', 'contact', 'photoCreate', 'application', 'applicationFeedback', 'userFollowings', 'collection', 'htmlEditor'],
    name: "",
    facebook: "",
    twitter: "",
    googleplus: "",
    pinterest: "",
    linkedin: "",
    youtube: "",
    profileName: "profileName",
    profile_cover_text: "",
    profile_analytics_code: "",
    profile_bg_url: "",
    profile_creator: '',
    profile_hero_url: "",
    profile_pic_url: "",
    profile_contact_number: "",
    profile_name: "",
    partnerTag: false,
    partnerPage: true,
    profileSelectionStatus: "Collections",
    profileCollectionStatistics: "",
    profilePartnerStatistics: "",
    profileFollowerStatistics: "",
    region: "",
    selectedCollection: "",
    switchPhoto: false,
    newDesc: '',
    newTitle: '',
    selectedDesc: "",
    selectedTitle: "",
    timeSetting: "timeSetting",
    temp: [],
    //  tempdesc: [],
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
    makeSureDelete: false,
    willDelete: false,
    profile_partner_ids: null,
    isTracking: false,
    cropsize: null,
    init: function() {

        this.set('is_authentic_user', false);

    },
    goToProfileRoute: function(id)
    {
     //   $('#user-stats > li').removeClass('selected-user-stats');
//this.setProfile(id);
      this.transitionToRoute('profile');
//       $('#user-stats > li').removeClass('selected-user-stats');
//        $('#defualt').addClass('selected-user-stats');
    },
    getCurrentProfile: function(id) {
        this.set('currentUserID', id);
        var profile = HubStar.Profile.find(id);
        return profile;
    },
    setProfile: function(id) {
        var profile = this.getCurrentProfile(id);
        this.set("model", profile);
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
        this.set('name', profile.get('profile_name'));
        this.set('profile_creator', profile.get('profile_creater'));
        this.set('direct_enquiry_provide_email', profile.get('owner_contact_bcc_emails'));
        this.set('secondary_email', profile.get('owner_contact_cc_emails'));
        this.set('contact_email', profile.get('owner_contact_email'));
        this.set('website', profile.get('profile_website'));
        this.set('website_url', profile.get('profile_website_url'));
        this.set('profile_cover_text', profile.get('profile_cover_text'));
        this.set('profile_analytics_code', profile.get('profile_analytics_code'));
        this.set('profile_contact_number', profile.get('profile_contact_number'));
        this.set('projectCategoryDropdownContent', profile.get('profile_package_name'));
        this.set('first_name', profile.get('profile_contact_first_name'));
        this.set('address', profile.get('profile_physical_address'));
        this.set('suburb', profile.get('profile_suburb'));
        this.set('last_name', profile.get('profile_contact_last_name'));
        this.set("profile_name", profile.get("profile_name"));
        this.set("projectActiveDropdownContent", profile.get("profile_isActive"));
        this.set("projectDeleteDropdownContent", profile.get("profile_isDeleted"));
        this.updateWorkingHourData(profile.get('profile_hours'));
        this.set("collections", profile.get("collections"));

        var collections = profile.get("collections");
        if (this.get('controllers.profilePartners').get("partnerNew") !== undefined && this.get('controllers.profilePartners').get("partnerNew") !== null && this.get('controllers.profilePartners').get("partnerNew") !== "")
        {
            this.get('controllers.profilePartners').set("partnerNew", "");
        }
        this.isFollowed();
        this.checkAuthenticUser();
      this.labelBarRefresh();

        //  this.set('profileSelectionStatus', 'Collections');
        //this.selectCollection();
        var photoCreateController = this.get('controllers.photoCreate');
        photoCreateController.setMega();
        this.initStastics(profile);
        this.followerPhoto(id);
    },
    followerPhoto: function(id)
    {
        var dataNew = new Array();
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
                    dataNew["id"] = params[i]["record_id"];
                    dataNew["name"] = params[i]["name"];
                    dataNew["photo_url"] = params[i]["photo_url"];

                    that.get("contentFollowerPhoto").pushObject(dataNew);

                    dataNew = new Array();
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
                HubStar.store.commit();
                $(".Targeting_Object_front").attr("style", "display:inline-block");
                $(" #uploadArea").attr('style', "display:none");
                $(" #uploadObject").attr('style', "display:block");
                this.statstics();
                this.set("newTitle", "");
                this.set("newDesc", "");
                setTimeout(function() {
                    $('#masonry_user_container').masonry("reload");
                }, 200);
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
            this.set('editingAbout', !this.get('editingAbout'));


        } else if (checkingInfo === "contact") {
            first_name_record = this.get('first_name');
            last_name_record = this.get('last_name');

            //contact_record = this.get('model.contact_user');
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
    yesAbout: function(checkingInfo) {
        if (checkingInfo === "aboutMe") {

            this.set('editingAbout', !this.get('editingAbout'));
        }
        this.saveUpdateAboutUs();
    },
    yes: function(checkingInfo) {
        if (checkingInfo === "profileName") {
            this.set('editing', !this.get('editing'));
        }
        else if (checkingInfo === "contact") {

            if (this.get("website_url").match(/[http]/g) === -1 || this.get("website_url").match(/[http]/g) === null)
            {
                this.set("website_url", "http://" + this.get("website_url"));
            }


            this.set('editingContact', !this.get('editingContact'));
        }
        else if (checkingInfo === "timeSetting") {
            var updateHour = this.get('hours');
            var data = "";
            for (var i = 0; i < updateHour.length; i++) {
                data = data + updateHour.objectAt(i).day + "=" + updateHour.objectAt(i).time + ",";
            }
            this.set('model.profile_hours', data.substring(0, data.length - 1));
            this.set('editingTime', !this.get('editingTime'));
        }
        this.saveUpdate();
    },
    no: function(checkingInfo) {
        if (checkingInfo === "profileName") {
            this.set('profile_name', profile_record);
            this.set('editing', !this.get('editing'));
        }
        else if (checkingInfo === "aboutMe") {
            this.set('about_me', about_record);
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
    },
    paternsStatistics: function(length) {
        this.set('profilePartnerStatistics', length);
    },
    followersStatistics: function(length) {
        this.set('profileFollowerStatistics', length);
    },
    deleteSelectedCollection: function()
    {
        var message = "You will delete every photos in this collection when you delete this collection. Are you sure to delete " + this.get("selectedCollection").get('title') + " ?";
        this.set("message", message);
        this.set('makeSureDelete', true);
        if (this.get('willDelete')) {
            var tempCollection = this.get("selectedCollection");
            var delInfo = [tempCollection.id, this.get('model').get('id'), 'profile'];
            delInfo = JSON.stringify(delInfo);
            requiredBackEnd('collections', 'delete', delInfo, 'POST', function(params) {
            });
            this.get("collections").removeObject(this.get("selectedCollection"));
            this.statstics();
            $('#masonry_user_container').masonry("reload");
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
    },
    toggleUpload: function() {
        $('.corpbanner_mask').toggleClass('hideClass');
        this.set('uploadChecking', !this.get('uploadChecking'));
    },
    editingContactForm: function() {
        this.sendEventTracking('event', 'button', 'click', 'Contact us');
        var contactController = this.get('controllers.contact');

        contactController.setSelectedMega(this.get('currentUserID'));
        this.set('contactChecking', !this.get('contactChecking'));
    },
    closeContact: function() {
        this.set('contactChecking', false);
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
        var currentUser = HubStar.User.find(localStorage.loginStatus);
        var current_user_email = currentUser.get('email');
        var permissionController = this.get('controllers.permission');
        var that = this;
        var is_authentic_user = permissionController.checkAuthenticUser(that.get("model").get("owner"), that.get("model").get("profile_editors"), current_user_email);
        if (current_user_email !== null && current_user_email !== undefined && current_user_email !== "") {
            var isAdmin = permissionController.setIsAdmin(current_user_email);
            this.set('isAdmin', isAdmin);
            that.set("is_authentic_user", is_authentic_user);
        } else {
            currentUser.addObserver('isLoaded', function() {
                var current_user_email = currentUser.get('email');
                if (currentUser.get('isLoaded')) {
                    var is_authentic_user = permissionController.checkAuthenticUser(that.get("model").get("owner"), that.get("model").get("profile_editors"), current_user_email);
                    that.set("is_authentic_user", is_authentic_user);
                    var isAdmin = permissionController.setIsAdmin(current_user_email);
                    that.set('isAdmin', isAdmin);
                    isAdmin = permissionController.setIsAdmin(current_user_email);
                }
            });
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


    },
    socialLink: function(link) {
//        var profile = HubStar.Profile.find(this.get('currentUserID'));
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
    selectCollection: function() {

     $('#user-stats > li').removeClass('selected-user-stats');
        $('#defualt').addClass('selected-user-stats');

        this.sendEventTracking('event', 'button', 'click', 'Collections');
        this.set('partnerPage', 'Collections');
        this.set('profileSelectionStatus', 'Collections');
        this.set('partnerTag', false);
        this.set('followerProfileTag', false);
        this.set('collectionTag', true);
        this.transitionToRoute('profileCollections');
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 200);
    },
    selectPartner: function(model) {
       // $(window).scrollTop(1500);
        this.sendEventTracking('event', 'button', 'click', 'Partners');
        HubStar.set("lastPositionId", model.id);
        this.set('profileSelectionStatus', 'Partners');
        //   this.get('controllers.profilePartners').getClientId(model);
        this.set('partnerTag', true);
        this.set('collectionTag', false);
        this.set('followerProfileTag', false);
        this.get('controllers.itemProfiles').setPartnerRemove();

        this.transitionToRoute('partners');
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 200);

    },
    selectFollower: function(model) {
      //  $(window).scrollTop(1500);
        this.sendEventTracking('event', 'button', 'click', 'Followers');
        this.set('profileSelectionStatus', 'Followers');
         //this.get('controllers.userFollowers').getProfileId(model);
        
        this.set('partnerTag', false);
        this.set('collectionTag', false);
        this.set('followerProfileTag', true);

        this.transitionToRoute('profileFollowers');

        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 200);

    },
    saveUpdateAboutUs: function() {
        var update_About_record = HubStar.Profile.find(this.get('model.id'));
        //update_About_record.set("profile_about_us", $('iframe').contents().find('.wysihtml5-editor').html());
        update_About_record.set("profile_about_us", editor.getValue());

        this.get('controllers.applicationFeedback').statusObserver(null, "Update successful");
        HubStar.store.get('adapter').updateRecord(HubStar.store, HubStar.Profile, update_About_record);
        HubStar.store.save();
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

        this.saveLink('profile_facebook_link', 'facebook');
        this.saveLink('profile_twitter_link', 'twitter');
        this.saveLink('profile_googleplus_link', 'googleplus');
        this.saveLink('profile_pinterest_link', 'pinterest');
        this.saveLink('profile_linkedin_link', 'linkedin');
        this.saveLink('profile_youtube_link', 'youtube');

        if (this.get('controllers.profilePartners').get("partnerNew") !== undefined && this.get('controllers.profilePartners').get("partnerNew") !== null && this.get('controllers.profilePartners').get("partnerNew") !== "")
        {
            if (update_profile_record.get('profile_partner_ids').length !== this.get('controllers.profilePartners').get("partnerNew").length) {
                update_profile_record.set('profile_partner_ids', this.get('controllers.profilePartners').get("partnerNew"));
                this.get('controllers.profilePartners').set("partnerNew", "");
            }
        }


        update_profile_record.set('profile_package_name', this.get('projectCategoryDropdownContent'));
        update_profile_record.set('owner_contact_bcc_emails', this.get('direct_enquiry_provide_email'));
        update_profile_record.set('owner_contact_cc_emails', this.get('secondary_email'));
        update_profile_record.set('owner_contact_email', this.get('contact_email'));
        update_profile_record.set('profile_website', this.get('website'));
        update_profile_record.set('profile_website_url', this.get('website_url'));
        update_profile_record.set('profile_cover_text', this.get('profile_cover_text'));
        update_profile_record.set('profile_analytics_code', this.get('profile_analytics_code'));
        update_profile_record.set('profile_contact_number', this.get('profile_contact_number'));
        update_profile_record.set('profile_contact_first_name', this.get('first_name'));
        update_profile_record.set('profile_physical_address', this.get('address'));
        update_profile_record.set('profile_suburb', this.get('suburb'));
        update_profile_record.set('profile_contact_last_name', this.get('last_name'));
        update_profile_record.set("profile_name", this.get('profile_name'));
        update_profile_record.set("profile_isActive", this.get("projectActiveDropdownContent"));
        update_profile_record.set("profile_isDeleted", this.get("projectDeleteDropdownContent"));

        HubStar.store.get('adapter').updateRecord(HubStar.store, HubStar.Profile, update_profile_record);
        if (update_profile_record.get('stateManager') !== null && update_profile_record.get('stateManager') !== undefined) {
            update_profile_record.get('stateManager').transitionTo('loaded.saved');
        }
        this.get('controllers.applicationFeedback').statusObserver(null, "Update successful");

        HubStar.store.save();
    },
    flipFrontClick: function() {
        $(".hover").addClass('flip');
        this.selectionForDashborad();


    },
    selectionForDashborad: function() {
        $('.front').attr("style", "text-align: inherit; width: auto;  box-shadow: none; border: none; position: relative;height:" + $('.back').height() + "px");
    },
    changeSize: function() {
        var that = this;
        setTimeout(function() {
            that.selectionForDashborad();
        }, 1);
    },
    flipFrontBack: function() {
        $(".hover").removeClass('flip');
        $('.front').attr("style", "text-align: inherit; width: auto; height: auto; box-shadow: none; border: none; position: relative;");
    }, setUploadImageMode: function(mode)
    {
        this.set('isPhotoUploadMode', true);
        this.set('isPhotoEditingMode', false);
        this.set('isFinished', false);
        this.set('UploadImageMode', mode);
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
                var size = "Your image size is " + width + "x" + height;
                that.set('CurrentImageSize', size);

                that.set('isCrop', true);
                that.set('isUpload', true);
            }
        });
    },
    saveLink: function(link_url, link) {

        var http = "http://";
        var update_profile_record = HubStar.Profile.find(this.get('model.id'));
        if (this.get(link) === null || this.get(link) === "" || this.get(link) === undefined)
        {
            this.get(link) === "";
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
                            //    that.set('isCrop', false);
                            that.setTempImage();
                        }
                        else if (that.get('isCrop') === true)
                        {
                            //       that.set('isUpload', false);
                            that.setCropImage();
                        }

                        var data1 = {"newStyleImageSource": that.get('newStyleImageSource'),
                            'newStyleImageName': that.get('newStyleImageName'),
                            'mode': that.get('UploadImageMode').replace(" ", "_").toLowerCase(),
                            'id': that.get('model.id')};
                         that.set('loadingTime', true);
                        requiredBackEnd('profiles', 'updateStyleImage', data1, 'POST', function(params) {
                     //     $('#uploadStyleImg').attr("style", "display:none");
                            that.set('isPhotoEditingMode', false);
                            that.set('isPhotoUploadMode', false);
                            that.set('isFinished', true);
                            that.set("isCrop", false);
                            HubStar.store.save();

                            that.get('controllers.applicationFeedback').statusObserver(null, "Update successfully");
                            that.set('loadingTime', false);
                        });

                    }


                    else if (width < params.width || height < params.height) {
                        that.set('loadingTime', false);  
                        that.get('controllers.applicationFeedback').statusObserver(null, "Please upload image size larger than  " + params.width + "x" + params.height);
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
    }, getTest: function() {

        return "test";

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
        if (this.isTracking) {
            ga(this.get('model').get('id').split('-').join('') + '.send', {
                'hitType': hitType,
                'eventCategory': category,
                'eventAction': action,
                'eventLabel': label
            });
        }
    },
    dropdownPhotoSetting: function() {
        //  this.set('sharePhotoUrl', this.get('selectedPhoto').get('photo_image_thumbnail_url'));
        //  this.set('sharePhotoName', this.get('selectedPhoto').get('photo_title'));
        $('#dropdown_id_').toggleClass('hideClass');
    },
    // share to social facebook
    fbShare: function() {
        var that = this;

        var currntUrl = 'http://beta.trendsideas.com/#/profiles/' + this.get('currentUserID');
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
                that.get('controllers.applicationFeedback').statusObserver(null, "Shared Successfully.");
            } else {
                that.get('controllers.applicationFeedback').statusObserver(null, "Shared Unsuccessfully.", "failed");
            }
        }

        FB.ui(obj, callback);

        return false;
    },
    //share to social google plus
    gpShare: function() {
        var caption = '';
        if (this.get('profile_cover_text') !== null)
        {
            caption = this.get('profile_cover_text');

        }
        else
        {
            caption = '';
        }

//        var meta = document.getElementsByTagName('meta');
//        for (var i = 0; i < meta.length; i++) {
//        }
        $("meta[property='og\\:title']").attr("content", this.get('profile_name'));
        $("meta[property='og\\:description']").attr("content", caption);
        $("meta[property='og\\:image']").attr("content", this.get('profile_pic_url'));


        var currntUrl = 'http://beta.trendsideas.com/#/profiles/' + this.get('currentUserID');
        var url = 'https://plus.google.com/share?url=' + encodeURIComponent(currntUrl);

        window.open(
                url,
                'popupwindow',
                'scrollbars=yes,width=800,height=400'
                ).focus();

        return false;
    },
    //share to social twitter
    tShare: function() {
        var currntUrl = 'http://beta.trendsideas.com/#/profiles/' + this.get('currentUserID');
        var url = 'https://twitter.com/share?text=' + this.get('profile_name') + '&url=' + encodeURIComponent(currntUrl);
        window.open(
                url,
                'popupwindow',
                'height=436,width=626'
                ).focus();
        return false;
    }

}
);

