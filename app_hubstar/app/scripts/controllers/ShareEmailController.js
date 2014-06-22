HubStar.ShareEmailController = Ember.Controller.extend({
    selectedMega: null,
    recieveProfile: null,
    displayName: null,
    displayEmail: null,
    currentUser: null,
    isDisplayNameEditable: false,
    isDisplayEmailEditable: false,
    editNameStatus: "edit",
    editEmailStatus: "edit",
    emailBody: null,
    emailSubject: null,
    emailDestination: null,
    emaiCCDestination: null,
    rememberMessage: true,
    userEnvironment: "",
    owner_profile_pic: null,
    emaiBCCDestination: null,
    projectCategory: null,
    projectTimeframe: null,
    categorys: [],
    showCate: false,
    temp: [],
    subcate: [],
    selectedDesc: "",
    objectID: "",
    parentTController: "",
    userName: '',
    email_profile_pic_url: "",
    selectedPhotoThumbnailUrl: "",
    projectBudget: null,
    projectExperience: null,
    email_title: "",
    needs: ['permission', 'applicationFeedback', 'user', 'profile', "mega", 'article', 'video', 'application', 'itemFunction'],
    init: function()
    {
        if (localStorage.loginStatus) {
            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
            $("#showpic").fadeIn().css("display", "block");
            $('#showpic').attr('style', 'display: block');
            console.log("000000000");
        }
    },
    checkAuthority: function() {
        var currentUser = HubStar.User.find(localStorage.loginStatus);
        var current_user_email = currentUser.get('email');
        var profile = this.get("controllers.profile").get("model");
        var permissionController = this.get('controllers.permission');
        var role = permissionController.checkAuthenticEdit(profile.get("profile_creator"), profile.get("profile_administrator"), profile.get("profile_editor"));
        var is_authentic_user = permissionController.checkAuthenticUser(profile.get("owner"), profile.get("profile_editors"), current_user_email);
        if (is_authentic_user) {
            this.set("isCreator", true);
            this.set("isAdministrator", true);
        }
        else
        {
            if (role === "creator")
            {
                this.set("isCreator", true);
                this.set("isAdministrator", true);
            }
            else if (role === "administrator")
            {
                this.set("isCreator", false);
                this.set("isAdministrator", true);
            }
            else {
                this.set("isCreator", false);
                this.set("isAdministrator", false);
            }
        }
    },
    getClientId: function(id) {
        this.checkAuthority();
        this.set('loadingTime', true);
        this.set('clientID', id);
        var profile = this.get("controllers.profile").get("model");
        this.set("administrator", profile.get("profile_administrator"));
        this.set("editor", profile.get("profile_editor"));
        var that = this;
        requiredBackEnd('followers', 'ReadProfilePic', id, 'POST', function(params) {
            that.set("contentFollowerPhoto", []);
            that.set("contentCreatorPhoto", []);
            that.set("contentAdministratorPhoto", []);
            that.set("contentEditorPhoto", []);
            if (params === undefined)
            {
            }
            else
            {
                for (var i = 0; i < params.get("length"); i++)
                {
                    if (profile.get("profile_creator") !== null && ((profile.get("profile_creator").indexOf(params.objectAt(i).record_id) !== -1 &&
                            (profile.get("profile_creator")[profile.get("profile_creator").indexOf(params.objectAt(i).record_id) - 1] === "," ||
                                    profile.get("profile_creator")[profile.get("profile_creator").indexOf(params.objectAt(i).record_id) + params.objectAt(i).record_id.length] === ",")) ||
                            profile.get("profile_creator") === params.objectAt(i).record_id))
                    {
                        that.get("contentCreatorPhoto").pushObject(params.objectAt(i));
                    }
                    else if (profile.get("profile_administrator") !== null && ((profile.get("profile_administrator").indexOf(params.objectAt(i).record_id) !== -1 &&
                            (profile.get("profile_administrator")[profile.get("profile_administrator").indexOf(params.objectAt(i).record_id) - 1] === "," ||
                                    profile.get("profile_administrator")[profile.get("profile_administrator").indexOf(params.objectAt(i).record_id) + params.objectAt(i).record_id.length] === ",")) ||
                            profile.get("profile_administrator") === params.objectAt(i).record_id))
                    {
                        //params.objectAt(i)["isClick"] = true;
                        that.get("contentAdministratorPhoto").pushObject(params.objectAt(i));
                    }
                    else if (profile.get("profile_editor") !== null && ((profile.get("profile_editor").indexOf(params.objectAt(i).record_id) !== -1 &&
                            (profile.get("profile_editor")[profile.get("profile_editor").indexOf(params.objectAt(i).record_id) - 1] === "," ||
                                    profile.get("profile_editor")[profile.get("profile_editor").indexOf(params.objectAt(i).record_id) + params.objectAt(i).record_id.length] === ",")) ||
                            profile.get("profile_editor") === params.objectAt(i).record_id))
                    {
                        //params.objectAt(i)["isClick"] = true;
                        that.get("contentEditorPhoto").pushObject(params.objectAt(i));
                    }
                    else
                    {
                        //params.objectAt(i)["isClick"] = false;
                        that.get("contentFollowerPhoto").pushObject(params.objectAt(i));
                    }
                }
            }
            that.set('loadingTime', false);
        });
    },
    closeShareEmail: function() {
        var megaController = this.get("controllers.mega");
        var profileController = this.get("controllers.profile");
        var articleController = this.get("controllers.article");
        var videoController = this.get("controllers.video");
        var itemFunctionController = this.get("controllers.itemFunction");
//        this.set('projectCategoryDropdown', false);
//        this.set('projectTimeframeDropdown', false);
//        this.set('projectBudgetDropdown', false);
//        this.set('projectExperienceDropdown', false);
//        this.set('showCate', false);
        this.get("controllers.profile").set("isShareEmail", false);
        this.get("controllers.article").set("isShareEmail", false);
        this.get("controllers.mega").set("isShareEmail", false);
        this.get("controllers.video").set("isShareEmail", false);
        this.controllerFor("itemFunction").closeShareEmail();
        videoController.closeShareEmail();
        megaController.closeShareEmail();
        profileController.closeShareEmail();
        articleController.closeShareEmail();
        itemFunctionController.closeShareEmail();
    },
    emailSend: function()
    {
        var that = this;
//        var currentUser = HubStar.User.find(localStorage.loginStatus);

//        var senderName = this.set('senderName', this.get("currentUser").get("first_name") + " " + this.get("currentUser").get("last_name"));

        var tempEmail = [this.get("emailDestination"), this.get("emailBody"), this.get('displayName'), this.get('displayEmail'), this.get("currentUser").get('photo_url_large'), this.get("owner_profile_pic"), this.get("selectedPhotoThumbnailUrl"), document.URL];

        requiredBackEnd('emails', 'shareemail', tempEmail, 'POST', function(params) {
        });
        console.log(this.get('displayName'));
        console.log(this.get('displayEmail'));
        console.log(this.get("currentUser").get('photo_url_large'));
        console.log(this.get("owner_profile_pic"));
        console.log(this.get("selectedPhotoThumbnailUrl"));
        console.log(document.URL);
        this.get('controllers.applicationFeedback').statusObserver(null, "Your message has been sent.");
        this.get("controllers.profile").set("isShareEmail", false);
        this.get("controllers.article").set("isShareEmail", false);
        this.get("controllers.mega").set("isShareEmail", false);
        this.get("controllers.video").set("isShareEmail", false);
        this.controllerFor("itemFunction").closeShareEmail();
    },
    setImageID: function(id) {
        this.set("objectID", id);
    },
    setThumbnailUrl: function(photo_image_thumbnail_url) {
        this.set("selectedPhotoThumbnailUrl", photo_image_thumbnail_url);
    },
    setRelatedController: function(parentController)
    {

        this.set('parentTController', parentController);
    },
    setUser: function()
    {
        var user = HubStar.User.find(localStorage.loginStatus);

        this.set("collections", user.get("collections"));
        if (this.get("collections").objectAt(0) !== null && this.get("collections").objectAt(0) !== undefined) {
            this.setDesc("");

        }
    },
    setDesc: function(desc) {
        this.set("selectedDesc", desc);
    },
    setProfileSelectedMega: function(id)
    {

        this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
        if (this.get("currentUser").get("first_name") !== null && this.get("currentUser").get("last_name")) {
            this.set("displayName", this.get("currentUser").get("first_name") + " " + this.get("currentUser").get("last_name"));
        }
        else {
            this.set("displayName", this.get("currentUser").get("display_name"));
        }
        displayEmail = this.set("displayEmail", this.get("currentUser").get("email"));
        var idProfile;
        var tempMega = HubStar.Mega.find(id);
        this.set("selectedMega", tempMega);
        var that = this;
//        var email_profile_pic_url = 'https://s3-ap-southeast-2.amazonaws.com/develop.devbox/profile_pic/default/defaultpic1.jpg';
//        if (this.get("currentUser").get('photo_url_large').indexOf('data:image') > -1) {
//            email_profile_pic_url = HubStar.get('photoDomain') + '/users/' + localStorage.loginStatus + '/user_picture/user_picture';
//        } else {
//            email_profile_pic_url = this.set("email_profile_pic_ur", this.get("currentUser").get('photo_url_large'));
//        }

        tempMega.then(function() {
            that.set("selectedMega", tempMega);

            that.set("ownerTitle", that.get("selectedMega").get("owner_title"));
            idProfile = that.get("selectedMega").get("owner_id");

            if (that.get("selectedMega").get("type") === 'profile')
            {
                that.set("owner_profile_pic", that.get("selectedMega").get("profile").objectAt(0).get('profile_pic_url'));
            }
            else {
                that.set("owner_profile_pic", that.get("selectedMega").get("owner_profile_pic"));
            }

//            var tempProfile = HubStar.Profile.find(idProfile);
//            var those = that;
//            tempProfile.then(function() {
//                those.get('selectedMega').set('owner_title', tempProfile.get('profile_name'));
//                those.set("emailDestination", tempProfile.get("owner_contact_email"));
//                those.set("emaiCCDestination", tempProfile.get("owner_contact_cc_emails"));
//                that.set("emaiBCCDestination",tempProfile.get("owner_contact_bcc_emails"));
//            });
        });

        console.log(that.get("selectedMega").get("owner_title"));
        $('#showpic').attr('style', 'display: block');
    },
    reviewCancel: function() {
        console.log("11");
        this.get("controllers.profile").set("isShareEmail", false);
        this.get("controllers.article").set("isShareEmail", false);
        this.get("controllers.mega").set("isShareEmail", false);
        this.get("controllers.video").set("isShareEmail", false);
        this.set("isShareEmail", false);

//        this.set("contentFollowerPhoto", null);
//        this.set("contentCreatorPhoto", null);
//        this.set("contentAdministratorPhoto", null);
//        this.set("contentEditorPhoto", null);
//        var profile = this.get("controllers.profile").get("model");
//        profile.set("profile_administrator", this.get("administrator"));
//        profile.set("profile_shareEmail", this.get("shareEmail"));
    },
    exit: function() {

    }
});