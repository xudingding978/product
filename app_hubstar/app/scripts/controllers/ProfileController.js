
var profile_record;
var about_record;
var contact_record;
var category_record;
var address_record;
var phone_record;
var website_record;
var workingtime;
var isExsinting = true;
var seletedID = "";
HubStar.ProfileController = Ember.ObjectController.extend({
    model: null,
    aboutMe: "aboutMe",
    address: "",
    boost: '',
    currentUserID: "",
    collections: [],
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
    followerTag: false,
    follow_status: "+ Follow",
    first_name: "",
    galleryInsert: false,
    hours: [],
    is_authentic_user: false,
    keywords: "",
    last_name: "",
    needs: ["profilePartners", "itemProfiles", "profileFollowers", 'permission', 'contact', 'photoCreate'],
    name: "",
    profileName: "profileName",
    profile_bg_url: "",
    profile_creator: '',
    profile_hero_url: "",
    profile_pic_url: "",
    profile_contact_number: "",
    profile_name: "",
    partnerTag: false,
    partnerPage: true,
    profileSelectionStatus: "Collections",
    region: "",
    selectedCollection: "",
    switchPhoto: false,
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
    isAdmin: false,
    newStyleImageSource: '',
    newStyleImageName: '',
    isPackgetDropdown: false,
    projectCategoryDropdownType: 'package',
    projectCategoryDropdownContent: '',
    isActiveDropdown: false,
    projectActiveDropdownType: 'active',
    projectActiveDropdownContent: '',
    isDeleteDropdown: false,
    projectDeleteDropdownType: 'delete',
    projectDeleteDropdownContent: '',
    init: function() {
        this.set('is_authentic_user', false);
    },
    getCurrentProfile: function(id) {
        this.set('currentUserID', id);
        var profile = HubStar.Profile.find(id);


        return profile;
    },
    setProfile: function(id) {
        var profile = this.getCurrentProfile(id);
        this.set("model", profile);
        this.set("domains", profile.get('profile_domains'));
        this.set("boost", profile.get('profile_boost'));
        this.set('profile_bg_url', profile.get('profile_bg_url'));
        this.set('profile_hero_url', profile.get('profile_hero_url'));
        this.set('profile_pic_url', profile.get('profile_pic_url'));
        this.set('editors', profile.get('profile_editors'));
        this.set('keywords', profile.get('profile_keywords'));
        this.set('region', profile.get('profile_regoin'));
        this.set('country', profile.get('profile_country'));
        this.set('name', profile.get('profile_name'));
        this.set('profile_creator', profile.get('profile_creater'));
        this.set('direct_enquiry_provide_email', profile.get('owner_contact_bcc_emails'));
        this.set('secondary_email', profile.get('owner_contact_cc_emails'));
        this.set('contact_email', profile.get('owner_contact_email'));
        this.set('website', profile.get('profile_website'));
        this.set('website_url', profile.get('profile_website_url'));
        this.set('profile_contact_number', profile.get('profile_contact_number'));
        this.set('projectCategoryDropdownContent', profile.get('profile_package_name'));
        this.set('first_name', profile.get('profile_contact_first_name'));
        this.set('address', profile.get('profile_physical_address'));
        this.set('last_name', profile.get('profile_contact_last_name'));
        this.set("profile_name", profile.get("profile_name"));
        this.set("projectActiveDropdownContent", profile.get("profile_isActive"));
        this.set("projectDeleteDropdownContent", profile.get("profile_isDeleted"));
        this.updateWorkingHourData(profile.get('profile_hours'));
        this.set("collections", profile.get("collections"));
        var collections = profile.get("collections");
        this.isFollowed();
        this.checkAuthenticUser();
        var photoCreateController = this.get('controllers.photoCreate');
        photoCreateController.setMega();
    },
    submit: function() {
        var desc = this.checkingValidInput(this.selectedCollection.get('desc'));
        var id = this.checkingValidInput(this.selectedCollection.get('title'));
        this.checkingIdisExsinting(desc, id, "create");
        var profile_id = this.get('model').get('id');

        if (isExsinting) {
            var validID = this.checkingValidInput(id);
            var checkingCharater = this.specialCharactersChecking(validID);
            if (checkingCharater) {
                this.selectedCollection.set('id', validID.toLowerCase());
                this.selectedCollection.set('title', this.selectedCollection.get('title'));
                this.selectedCollection.set('optional', profile_id);

                this.selectedCollection.set('cover', "https://s3-ap-southeast-2.amazonaws.com/develop.devbox/Defaultcollection-cover.png");
                if (this.selectedCollection.get('desc') !== null && this.selectedCollection.get('desc') !== "") {
                    this.selectedCollection.set('desc', desc);
                } else {
                    this.selectedCollection.set('desc', "Add a short description to your Collection");
                }
                    
                this.get("collections").insertAt(0, this.selectedCollection);
                HubStar.store.commit();
                $(".Targeting_Object_front").attr("style", "display:inline-block");
                $(" #uploadArea").attr('style', "display:none");
                $(" #uploadObject").attr('style', "display:block");
            } else {
                alert('invalide characters...');

            }


        } else {
            isExsinting = true;
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
    checkingIdisExsinting: function(desc, id, postOrPut) {
//        if (postOrPut === "update") {
//            for (var i = 0; i < this.get("temp").get('length'); i++) {
//                if (this.get("temp").objectAt(i) === id) {
//                    isExsinting = false;
//                }
//            }
//            if (!isExsinting) {
//                for (var i = 0; i < this.get("tempdesc").get('length'); i++) {
//                    if (this.get("tempdesc").objectAt(i) === desc) {
//                        isExsinting = false;
//                        break;
//                    } else {
//                        isExsinting = true;
//                    }
//                }
//            }
//            if (!isExsinting) {
//                alert('This Collection is already exsiting!!!');
//            }
//        } else 
            if (postOrPut === "create") {
            for (var i = 0; i < this.get("collections").get('length'); i++) {
                if (this.get("collections").objectAt(i).id === id) {
                    isExsinting = false;
                }
            }
            if (!isExsinting) {
                alert('This Collection is already exsiting!!!');
            }
        }
    },
    setLocalLoginRecrod: function() {
        HubStar.set('afterSearch', true);
        localStorage.user_id = this.get('model.id');
    },
    toggleEditing: function(data, checkingInfo) {
        if (checkingInfo === "profileName") {
            profile_record = data;
            this.set('editing', !this.get('editing'));
        } else if (checkingInfo === "aboutMe") {
            about_record = data;
            this.set('editingAbout', !this.get('editingAbout'));
        } else if (checkingInfo === "contact") {
            contact_record = this.get('model.contact_user');
            category_record = this.get('model.profile_category');
            address_record = this.get('model.profile_physical_address');
            phone_record = this.get('model.phone_number');
            website_record = this.get('model.website_url');
            this.set('editingContact', !this.get('editingContact'));
        }
        else if (checkingInfo === "timeSetting") {
            this.set('editingTime', !this.get('editingTime'));
        }
    },
    yes: function(checkingInfo) {
        if (checkingInfo === "profileName") {
            this.set('editing', !this.get('editing'));
        }
        else if (checkingInfo === "aboutMe") {
            this.set('editingAbout', !this.get('editingAbout'));
        } else if (checkingInfo === "contact") {
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
        this.updateClient();
    },
    updateClient: function() {
        var update_profile_record = HubStar.Profile.find(this.get('model.id'));
        HubStar.store.get('adapter').updateRecord(HubStar.store, HubStar.Profile, update_profile_record);
        if (update_profile_record.get('stateManager') !== null && update_profile_record.get('stateManager') !== undefined) {
            update_profile_record.get('stateManager').transitionTo('loaded.saved');
        }
        HubStar.store.save();
    },
    no: function(checkingInfo) {
        if (checkingInfo === "profileName") {
            this.set('model.profile_name', profile_record);
            this.set('editing', !this.get('editing'));
        }
        else if (checkingInfo === "aboutMe") {
            this.set('model.about', about_record);
            this.set('editingAbout', !this.get('editingAbout'));
        }
        else if (checkingInfo === "contact") {
            this.set('model.contact_user', contact_record);
            this.set('model.profile_category', category_record);
            this.set('model.profile_physical_address', address_record);
            this.set('model.phone_number', phone_record);
            this.set('model.website_url', website_record);
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
  //          this.get('temp').pushObject(thisCollection.get("id"));
      //      this.get('tempdesc').pushObject(thisCollection.get("desc"));
            if (id === thisCollection.get("id")) {
                this.set("selectedCollection", thisCollection);
            }
        }


    },
    updateCollectionInfo: function() {
        var desc = this.checkingValidInput(this.selectedCollection.get('desc'));
        var id = this.checkingValidInput(this.selectedCollection.get('id'));


            var title = this.get("selectedCollection").get("title");
            this.get("selectedCollection").set("title", title);
            this.set("selectedTitle", title);
            this.get("selectedCollection").store.save();
            $(".Targeting_Object_front").attr("style", "display:inline-block");
            $(" #uploadArea").attr('style', "display:none");
            $(" #uploadObject").attr('style', "display:block");

    },
    newCollection: function()
    {
        var collection = HubStar.Collection.createRecord({"id": null, "title": null, "desc": null, "collection_ids": null, "createdAt": new Date()});
        this.set("selectedCollection", collection);
    },
    toggleUpload: function() {
        $('.corpbanner_mask').toggleClass('hideClass');
        this.set('uploadChecking', !this.get('uploadChecking'));
    },
    editingContactForm: function() {
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
        this.updateClient();
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
        if (this.checkFollowStatus() === false) {
            var currentUser = HubStar.User.find(localStorage.loginStatus);
            var commenter_profile_pic_url = currentUser.get('photo_url_large');
            var commenter_id = currentUser.get('id');
            var name = currentUser.get('display_name');
            var date = new Date();
            var tempComment = HubStar.Follower.createRecord({"follower_profile_pic_url": commenter_profile_pic_url,
                "follower_id": commenter_id, "name": name, "time_stamp": date.toString(), "is_delete": false});
            tempComment.store.save();
            this.get("model").get("followers").insertAt(0, tempComment);
            this.set('follow_status', "Following");
        }
        else {
            //dont delete this line
            //         this.unfollow();
        }
    },
    checkFollowStatus: function()
    {
        var isFollow = false;
        var followers = this.get("model").get("followers");
        for (var i = 0; i < followers.get('length'); i++) {
            var follower_id = followers.get("content").objectAt(i).data.follower_id;
            if (follower_id === localStorage.loginStatus)
            {
                isFollow = true;
                break;
            }
        }
        return isFollow;
    },
    unfollow: function() {
        var currentUser = HubStar.User.find(localStorage.loginStatus);
        var commenter_profile_pic_url = currentUser.get('photo_url_large');
        var commenter_id = currentUser.get('id');
        var name = currentUser.get('display_name');
        var date = new Date();
        var tempComment = HubStar.Follower.createRecord({"follower_profile_pic_url": commenter_profile_pic_url,
            "follower_id": commenter_id, "name": name, "time_stamp": date.toString(), "is_delete": false});
        //dont delete this line
        //      tempComment.store.commit();
    },
    selectCollection: function() {
        this.set('profileSelectionStatus', 'Collections');
        this.set('partnerTag', false);
        this.set('collectionTag', true);
        this.set('followerTag', false);
    },
    selectPartner: function(model) {

        this.set('profileSelectionStatus', 'Partners');
        this.get('controllers.profilePartners').getClientId(model);
        this.set('partnerTag', true);
        this.set('collectionTag', false);
        this.set('followerTag', false);
        this.get('controllers.itemProfiles').setPartnerRemove();
    },
    selectFollower: function(model) {
        this.set('profileSelectionStatus', 'Followers');
        this.get('controllers.profileFollowers').getClientId(model);
        this.set('partnerTag', false);
        this.set('collectionTag', false);
        this.set('followerTag', true);
    },
    saveUpdate: function() {
        var update_profile_record = HubStar.Profile.find(this.get('model.id'));
        update_profile_record.set('profile_editors', this.get('editors'));
        update_profile_record.set('profile_keywords', this.get('keywords'));
        update_profile_record.set('profile_regoin', this.get('region'));
        update_profile_record.set('profile_country', this.get('country'));
        update_profile_record.set('profile_boost', this.get('boost'));
        update_profile_record.set('profile_domains', this.get('domains'));
        update_profile_record.set('profile_hero_url', '');
        update_profile_record.set('profile_pic_url', '');
        update_profile_record.set('profile_bg_url', '');
        update_profile_record.set('profile_name', this.get('name'));
        update_profile_record.set('profile_package_name', this.get('projectCategoryDropdownContent'));
        update_profile_record.set('owner_contact_bcc_emails', this.get('direct_enquiry_provide_email'));
        update_profile_record.set('owner_contact_cc_emails', this.get('secondary_email'));
        update_profile_record.set('owner_contact_email', this.get('contact_email'));
        update_profile_record.set('profile_website', this.get('website'));
        update_profile_record.set('profile_website_url', this.get('website_url'));
        update_profile_record.set('profile_contact_number', this.get('profile_contact_number'));
        update_profile_record.set('profile_contact_first_name', this.get('first_name'));
        update_profile_record.set('profile_physical_address', this.get('address'));
        update_profile_record.set('profile_contact_last_name', this.get('last_name'));
        update_profile_record.set("profile_name", this.get('profile_name'));
        update_profile_record.set("profile_isActive", this.get("projectActiveDropdownContent"));
        update_profile_record.set("profile_isDeleted", this.get("projectDeleteDropdownContent"));
        HubStar.store.get('adapter').updateRecord(HubStar.store, HubStar.Profile, update_profile_record);
        if (update_profile_record.get('stateManager') !== null && update_profile_record.get('stateManager') !== undefined) {
            update_profile_record.get('stateManager').transitionTo('loaded.saved');
        }

        HubStar.store.save();
    },
    flipFrontClick: function() {
        $(".hover").addClass('flip');
    },
    flipFrontBack: function() {
        $(".hover").removeClass('flip');
    }, setUploadImageMode: function(mode)
    {
        this.set('isPhotoUploadMode', true);
        this.set('isPhotoEditingMode', false);
        this.set('UploadImageMode', mode);
        var data = {"RequireIamgeType": mode};
        requiredBackEnd('tenantConfiguration', 'getRequireIamgeSize', data, 'POST', function(params) {
            //       console.log(params.height);
            //            console.log(params.width);
        });
    }, profileStyleImageDrop: function(e, name)
    {
        var target = this.getTarget(e);
        var src = target.result;
        var that = this;
        getImageWidth(src, function(width, height) {
            that.set('newStyleImageSource', src);
            that.set('newStyleImageName', name);
            $('#photoUploadbtn').removeClass();
            $("#photoUploadbtn").toggleClass("new-btn green-btn");
        });
    }, photoUpload: function() {
        if (this.get('newStyleImageSource') !== null && this.get('newStyleImageSource') !== "")
        {
            this.setTempImage();
            $('#uploadStyleImg').attr("style", "display:block");
            var data = {"newStyleImageSource": this.get('newStyleImageSource'),
                'newStyleImageName': this.get('newStyleImageName'),
                'mode': this.get('UploadImageMode').replace(" ", "_").toLowerCase(),
                'id': this.get('model.id')};
            var that = this;
            requiredBackEnd('profiles', 'updateStyleImage', data, 'POST', function(params) {
                $('#uploadStyleImg').attr("style", "display:none");
                that.set('isPhotoUploadMode', false);
                that.set('isPhotoEditingMode', true);
                HubStar.store.save();
            });
        }
    },
    setTempImage: function() {
        var model = this.get('model');
        if (this.get('UploadImageMode') === "Profile Picture")
        {
            this.set('profile_pic_url', this.get('newStyleImageSource'));
            model.set('profile_pic_url', this.get('newStyleImageSource'));
        } else if (this.get('UploadImageMode') === "Profile Hero")
        {
            this.set('profile_hero_url', this.get('newStyleImageSource'));
            model.set('profile_hero_url', this.get('newStyleImageSource'));
        } else if (this.get('UploadImageMode') === "Background")
        {
            this.set('profile_bg_url', this.get('newStyleImageSource'));
            model.set('profile_bg_url', this.get('newStyleImageSource'));
        }
    },
    getTarget: function(obj) {
        var targ;
        var e = obj;
        if (e.target)
            targ = e.target;
        else if (e.srcElement)
            targ = e.srcElement;
        if (targ.nodeType === 3) // defeat Safari bug
            targ = targ.parentNode;
        return targ;
    },
    resetNewStyleImageSource: function()
    {
        this.set('newStyleImageSource', "");
        this.set('newStyleImageName', "");
        $('#photoUploadbtn').removeClass();
        $("#photoUploadbtn").toggleClass("disabled-btn");
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

    }


});
