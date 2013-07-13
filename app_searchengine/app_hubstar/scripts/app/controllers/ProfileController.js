define([
    'models/ProfileModel',
    'ember'],
        function(
                ProfileModel,
                Ember
                ) {
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
            var ProfileController = Ember.ObjectController.extend({
                model: null,
                editing: false,
                switchPhoto: false,
                editingAbout: false,
                editingContact: false,
                galleryInsert: false,
                contactChecking: false,
                collectionTag: true,
                followerTag: false,
                updateOrCreate: true,
                partnerTag: false,
                profileSelectionStatus: "Collections",
                temp: [],
                selectedDesc: "",
                selectedTitle: "",
                editingTime: false,
                aboutMe: "aboutMe",
                profileName: "profileName",
                contact: "contact",
                timeSetting: "timeSetting",
                uploadChecking: false,
                currentUserID: "",
                collections: [],
                selectedCollection: "",
                needs: ["application", "contact", "profilePartners", "itemProfiles","profileFollowers"],
                profile_bg_url: "",
                profile_hero_url: "",
                profile_pic_url: "",
                hours: [],
                follow_status: "+ Follow",
                is_authentic_user: false,
                init: function() {

                    this.set('is_authentic_user', false);
                },
                getCurrentClient: function(id)
                {
                    this.set('currentUserID', id);
                    var user = ProfileModel.find(id);
                    return user;
                },
                setProfile: function(id) {

                    var profile = this.getCurrentClient(id);
                    this.set('profile_bg_url', profile.get('profile_bg_url'));
                    this.set('profile_hero_url', profile.get('profile_hero_url'));
                    this.set('profile_pic_url', profile.get('profile_pic_url'));
                    this.updateWorkingHourData(profile.get('profile_hours'));
                    this.set("model", this.getCurrentClient(id));
                    this.set("collections", profile.get("collections"));
                    var collections = profile.get("collections");
                    //           console.log(collections);
                    for (var i = 0; i < collections.get("length"); i++)
                    {
                        var col = collections.objectAt(i);
                        if ((col.get("collection_ids") !== null && col.get("collection_ids") !== "")) {
                            var imgId = col.get("collection_ids").split(",").objectAt(0);
                            this.getHeroImgae(imgId, col);
                        }
                    }
                    this.isFollowed();
                    this.checkAuthenticUser();
                },
                submit: function()
                {

                    var id = this.checkingValidInput(this.selectedCollection.get('id'));
                    this.checkingIdisExsinting(id, "create");
                    if (isExsinting) {
                        this.selectedCollection.set('id', id);
                        this.selectedCollection.set('title', id);
                        this.get("collections").insertAt(0, this.selectedCollection);
                        this.get("collections").store.commit();
                        $(".Targeting_Object_front").attr("style", "display:inline-block");
                        $(" #uploadArea").attr('style', "display:none");
                        $(" #uploadObject").attr('style', "display:block");
                    } else {
                        isExsinting = true;
                    }
                },
                checkingValidInput: function(title) {

                    if (title.indexOf(" ") !== -1) {

                        title = title.split(' ').join('-');
                    }
                    return title;
                },
                checkingIdisExsinting: function(id, postOrPut) {

                    if (postOrPut === "update") {
                        for (var i = 0; i < this.get("temp").get('length'); i++) {

                            if (this.get("temp").objectAt(i) === id) {

                                isExsinting = false;
                            }
                        }
                        if (!isExsinting) {
                            alert('This Collection is already exsiting!!!');
                        }
                    } else if (postOrPut === "create") {

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
                    App.set('afterSearch', true);
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
                    var update_profile_record = App.Profile.find(this.get('model.id'));
                    App.store.get('adapter').updateRecord(App.store, App.Profile, update_profile_record);
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
                        this.get('temp').pushObject(thisCollection.get("id"));
                        if (id === thisCollection.get("id")) {
                            this.set("selectedCollection", thisCollection);
                            //      console.log(  this.get("selectedCollection"));
                        }
                    }
                },
                updateCollectionInfo: function()
                {

                    var id = this.checkingValidInput(this.selectedCollection.get('id'));
                    this.checkingIdisExsinting(id, "update");
                    if (isExsinting) {
                        var title = this.get("selectedCollection").get("id");
                        this.get("selectedCollection").set("title", title);
                        this.set("selectedTitle", title);
                        this.get("selectedCollection").store.save();
                        $(".Targeting_Object_front").attr("style", "display:inline-block");
                        $(" #uploadArea").attr('style', "display:none");
                        $(" #uploadObject").attr('style', "display:block");
                    } else {
                        isExsinting = true;
                    }
                },
                newCollection: function()
                {
                    var collection = App.Collection.createRecord({"id": null, "title": null, "desc": null, "collection_ids": null, "createdAt": new Date()});
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
                    var user = this.getCurrentClient(this.get('currentUserID'));
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
                    var authenticUsers = this.get("model").get("owner") + "," + this.get("model").get("profile_editors");
                    var currentUser = App.User.find(localStorage.loginStatus);
                    var that = this;
                    var email = currentUser.get('email');
                    if (authenticUsers !== null && authenticUsers !== undefined && email !== null && email !== undefined) {
                        this.setIsAuthenticUser(authenticUsers, email);
                    }
                    currentUser.addObserver('isLoaded', function() {
                        email = currentUser.get('email');

                        if (currentUser.get('isLoaded')) {
                            that.setIsAuthenticUser(authenticUsers, email);
                        }
                    });
                },
                setIsAuthenticUser: function(authenticUsers, email)
                {

                    if (authenticUsers.indexOf(email) !== -1) {
                        this.set('is_authentic_user', true);
                    }
                    else if (email.indexOf('@trendsideas.com') !== -1) {
                        this.set('is_authentic_user', true);
                    }
                    else {
                        this.set('is_authentic_user', false);
                    }
                },
                isFollowed: function()
                {
                    if (this.checkFollowStatus())
                    {
                        this.set('follow_status', "Following");
                    }
                    else {
                        this.set('follow_status', "+ Follow");
                    }
                },
                followThisProfile: function() {
                    if (!this.checkFollowStatus()) {
                        var currentUser = App.User.find(localStorage.loginStatus);
                        var commenter_profile_pic_url = currentUser.get('photo_url_large');
                        var commenter_id = currentUser.get('id');
                        var name = currentUser.get('display_name');
                        var date = new Date();
                        var tempComment = App.Follower.createRecord({"follower_profile_pic_url": commenter_profile_pic_url,
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
                    var currentUser = App.User.find(localStorage.loginStatus);
                    var commenter_profile_pic_url = currentUser.get('photo_url_large');
                    var commenter_id = currentUser.get('id');
                    var name = currentUser.get('display_name');
                    var date = new Date();
                    var tempComment = App.Follower.createRecord({"follower_profile_pic_url": commenter_profile_pic_url,
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
                }

            });
            return ProfileController;
        });
