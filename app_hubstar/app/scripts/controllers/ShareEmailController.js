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
    osAndBrowser: true,
    userEnvironment: "",
    owner_profile_pic: null,
    emaiBCCDestination: null,
    projectCategory: null,
    projectTimeframe: null,
    categorys: [],
    showCate: false,
    temp: [],
    subcate: [],
    projectBudget: null,
    projectExperience: null,
    email_title: "",
    needs: ['permission', 'applicationFeedback', 'user', 'profile', "mega", 'article', 'video', 'application'],
    init: function()
    {
        if (localStorage.loginStatus) {
            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
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
    closeContact: function() {
//        var megaController = this.get("controllers.mega");
//        var profileController = this.get("controllers.profile");
//        var articleController = this.get("controllers.article");
//        var videoController = this.get("controllers.video");
//
//        this.set('projectCategoryDropdown', false);
//        this.set('projectTimeframeDropdown', false);
//        this.set('projectBudgetDropdown', false);
//        this.set('projectExperienceDropdown', false);
//        this.set('showCate', false);
        this.get("controllers.profile").set("isShareEmail", false);
//        videoController.closeContact();
//        megaController.closeContact();
//        profileController.closeContact();
//        articleController.closeContact();
    },
    emailSend: function()
    {

        var projectSubCategoryItem = "";
        for (var i = 0; i < this.get('subcate').get('length'); i++) {
            if (this.get("checkbox" + i) === true) {
                projectSubCategoryItem += $('.checkbox' + i).text() + ",";
            }
        }
//        var userEnvironment = "";
//        if (this.get("osAndBrowser") === true)
//        {
//            userEnvironment = this.get("userEnvironment");
//        }
        projectSubCategoryItem = projectSubCategoryItem.substring(0, projectSubCategoryItem.length - 1);
        var tempEmail = HubStar.Email.createRecord({
            "ownerTitle": this.get("ownerTitle"),
            "displayName": this.get("displayName"),
            "displayEmail": this.get("displayEmail"),
            'recieveProfile': this.get('recieveProfile'),
            "emailBody": this.get("emailBody"),
            "emailSubject": this.get("emailSubject"),
//            "emailDestination": this.get("emailDestination"),
//            "emaiCCDestination": this.get("emaiCCDestination"),
//            "emaiBCCDestination": this.get("emaiBCCDestination"),
//            "projectCategory": this.get('projectCategorySelection').trim(),
//            "projectTimeframe": this.get('timeframeSelection').trim(),
//            "projectBudget": this.get('projectBudgetSelection').trim(),
//            "projectExperience": this.get('projectExperienceSelection').trim(),
            "objectUrl": document.URL,
//            "userEnvironment": userEnvironment,
            "projectSubCategoryItem": projectSubCategoryItem
        });

        tempEmail.store.commit();
        this.get('controllers.applicationFeedback').statusObserver(null, "Your message has been sent.");
        if (!this.get('rememberMessage')) {
            this.set("emailBody", "");
            this.set("emailSubject", "");

        }

//        this.set('projectCategorySelection', 'Please Select One ...');
//        this.set('timeframeSelection', 'Please Select One ...');
//        this.set('projectBudgetSelection', 'Please Select One ...');
//        this.set('projectExperienceSelection', 'Please Select One ...');
        this.set('showCate', false);
        this.closeContact();

    },
    setSelectedMega: function(id)
    {
        console.log("11");
        this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
        if (this.get("currentUser").get("first_name") !== null && this.get("currentUser").get("last_name")) {
            this.set("displayName", this.get("currentUser").get("first_name") + " " + this.get("currentUser").get("last_name"));
        }
        else {
            this.set("displayName", this.get("currentUser").get("display_name"));
        }
//        this.set("displayEmail", this.get("currentUser").get("email"));
        var idProfile;
        var tempMega = HubStar.Mega.find(id);
        this.set("selectedMega", tempMega);
        var that = this;
        var email_profile_pic_url = 'https://s3-ap-southeast-2.amazonaws.com/develop.devbox/profile_pic/default/defaultpic1.jpg';
        if (this.get("currentUser").get('photo_url_large').indexOf('data:image') > -1) {
            email_profile_pic_url = HubStar.get('photoDomain') + '/users/' + localStorage.loginStatus + '/user_picture/user_picture';
        } else {
            email_profile_pic_url = this.get("currentUser").get('photo_url_large');
        }


        tempMega.then(function() {
            that.set("selectedMega", tempMega);
//            that.set("emailDestination", that.get("selectedMega").get("owner_contact_email"));
//            that.set("emaiCCDestination", that.get("selectedMega").get("owner_contact_cc_emails"));
//            that.set("emaiBCCDestination", that.get("selectedMega").get("owner_contact_bcc_emails"));
            that.set("ownerTitle", that.get("selectedMega").get("owner_title"));
            idProfile = that.get("selectedMega").get("owner_id");

//            if (that.get("selectedMega").get("type") === 'profile')
//            {
//                that.set("owner_profile_pic", that.get("selectedMega").get("profile").objectAt(0).get('profile_pic_url'));
//            }
//            else {
//                that.set("owner_profile_pic", that.get("selectedMega").get("owner_profile_pic"));
//            }
//            var tempProfile = HubStar.Profile.find(idProfile);
//            var those = that;
//            tempProfile.then(function() {
//                those.get('selectedMega').set('owner_title', tempProfile.get('profile_name'));
//                those.set("emailDestination", tempProfile.get("owner_contact_email"));
//                those.set("emaiCCDestination", tempProfile.get("owner_contact_cc_emails"));
//                that.set("emaiBCCDestination",tempProfile.get("owner_contact_bcc_emails"));
//            });
        });
    },
    reviewCancel: function() {
        this.get("controllers.profile").set("isShareEmail", false);
//        this.set("contentFollowerPhoto", null);
//        this.set("contentCreatorPhoto", null);
//        this.set("contentAdministratorPhoto", null);
//        this.set("contentEditorPhoto", null);
//        var profile = this.get("controllers.profile").get("model");
//        profile.set("profile_administrator", this.get("administrator"));
//        profile.set("profile_shareEmail", this.get("shareEmail"));
    }
});