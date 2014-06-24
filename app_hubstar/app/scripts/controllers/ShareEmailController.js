HubStar.ShareEmailController = Ember.Controller.extend({
    selectedMega: null,
    displayName: null,
    displayEmail: null,
    currentUser: null,
    emailBody: null,
    emailSubject: null,
    emailDestination: null,
    emaiCCDestination: null,
    owner_profile_pic: null,
    emaiBCCDestination: null,
    temp: [],
    selectedDesc: "",
    objectID: "",
    parentTController: "",
    userName: '',
    email_profile_pic_url: "",
    selectedPhotoThumbnailUrl: "",
    email_title: "",
    contentTitle: "",
    selectedUrl: "",
    needs: ['permission', 'applicationFeedback', 'user', 'profile', "mega", 'article', 'video', 'application', 'itemFunction'],
//    init: function()
//    {
////        if (localStorage.loginStatus) {
////            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
//    },
//    checkAuthority: function() {
//        var currentUser = HubStar.User.find(localStorage.loginStatus);
//        var current_user_email = currentUser.get('email');
//        var profile = this.get("controllers.profile").get("model");
//        var permissionController = this.get('controllers.permission');
//        var role = permissionController.checkAuthenticEdit(profile.get("profile_creator"), profile.get("profile_administrator"), profile.get("profile_editor"));
//        var is_authentic_user = permissionController.checkAuthenticUser(profile.get("owner"), profile.get("profile_editors"), current_user_email);
//        if (is_authentic_user) {
//            this.set("isCreator", true);
//            this.set("isAdministrator", true);
//        }
//        else
//        {
//            if (role === "creator")
//            {
//                this.set("isCreator", true);
//                this.set("isAdministrator", true);
//            }
//            else if (role === "administrator")
//            {
//                this.set("isCreator", false);
//                this.set("isAdministrator", true);
//            }
//            else {
//                this.set("isCreator", false);
//                this.set("isAdministrator", false);
//            }
//        }
//    },
//    getClientId: function(id) {
//        this.checkAuthority();
//        this.set('loadingTime', true);
//        this.set('clientID', id);
//        var profile = this.get("controllers.profile").get("model");
//        this.set("administrator", profile.get("profile_administrator"));
//        this.set("editor", profile.get("profile_editor"));
//        var that = this;
//        requiredBackEnd('followers', 'ReadProfilePic', id, 'POST', function(params) {
//            that.set("contentFollowerPhoto", []);
//            that.set("contentCreatorPhoto", []);
//            that.set("contentAdministratorPhoto", []);
//            that.set("contentEditorPhoto", []);
//            if (params === undefined)
//            {
//            }
//            else
//            {
//                for (var i = 0; i < params.get("length"); i++)
//                {
//                    if (profile.get("profile_creator") !== null && ((profile.get("profile_creator").indexOf(params.objectAt(i).record_id) !== -1 &&
//                            (profile.get("profile_creator")[profile.get("profile_creator").indexOf(params.objectAt(i).record_id) - 1] === "," ||
//                                    profile.get("profile_creator")[profile.get("profile_creator").indexOf(params.objectAt(i).record_id) + params.objectAt(i).record_id.length] === ",")) ||
//                            profile.get("profile_creator") === params.objectAt(i).record_id))
//                    {
//                        that.get("contentCreatorPhoto").pushObject(params.objectAt(i));
//                    }
//                    else if (profile.get("profile_administrator") !== null && ((profile.get("profile_administrator").indexOf(params.objectAt(i).record_id) !== -1 &&
//                            (profile.get("profile_administrator")[profile.get("profile_administrator").indexOf(params.objectAt(i).record_id) - 1] === "," ||
//                                    profile.get("profile_administrator")[profile.get("profile_administrator").indexOf(params.objectAt(i).record_id) + params.objectAt(i).record_id.length] === ",")) ||
//                            profile.get("profile_administrator") === params.objectAt(i).record_id))
//                    {
//                        //params.objectAt(i)["isClick"] = true;
//                        that.get("contentAdministratorPhoto").pushObject(params.objectAt(i));
//                    }
//                    else if (profile.get("profile_editor") !== null && ((profile.get("profile_editor").indexOf(params.objectAt(i).record_id) !== -1 &&
//                            (profile.get("profile_editor")[profile.get("profile_editor").indexOf(params.objectAt(i).record_id) - 1] === "," ||
//                                    profile.get("profile_editor")[profile.get("profile_editor").indexOf(params.objectAt(i).record_id) + params.objectAt(i).record_id.length] === ",")) ||
//                            profile.get("profile_editor") === params.objectAt(i).record_id))
//                    {
//                        //params.objectAt(i)["isClick"] = true;
//                        that.get("contentEditorPhoto").pushObject(params.objectAt(i));
//                    }
//                    else
//                    {
//                        //params.objectAt(i)["isClick"] = false;
//                        that.get("contentFollowerPhoto").pushObject(params.objectAt(i));
//                    }
//                }
//            }
//            that.set('loadingTime', false);
//        });
//    },
    setSelectedMega: function(id)
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
        });
    },

    emailSend: function()
    {
        var tempEmail = [this.get("emailDestination"), this.get("emailBody"), this.get('displayName'), this.get('displayEmail'), this.get("currentUser").get('photo_url_large'), this.get("owner_profile_pic"), this.get("selectedPhotoThumbnailUrl"), this.get("selectedUrl"), this.get('contentTitle'), this.get("selectedMega").get("owner_title"), this.get("selectedMega").get("owner_profile_pic")];

        requiredBackEnd('emails', 'shareemail', tempEmail, 'POST', function(params) {
        });
//        console.log(this.get('displayName'));
//        console.log(this.get('displayEmail'));
//        console.log(this.get("currentUser").get('photo_url_large'));
//        console.log(this.get("owner_profile_pic"));
//        console.log(this.get("selectedPhotoThumbnailUrl"));
//        console.log(this.get("selectedUrl"));
//        console.log(this.get('contentTitle'));
//        console.log(this.get("selectedMega").get("owner_title"));
//        console.log(this.get("selectedMega").get("owner_profile_pic"));
        this.get('controllers.applicationFeedback').statusObserver(null, "Your message has been sent.");
        this.exit();
    },
    setImageID: function(id) {
        this.set("objectID", id);
    },
    setUrl: function(url){
        this.set("selectedUrl", url);
    },
    setThumbnailUrl: function(photo_image_thumbnail_url) {
        this.set("selectedPhotoThumbnailUrl", photo_image_thumbnail_url);
    },
    setRelatedController: function(parentController)
    {

        this.set('parentTController', parentController);
    },
    setTitle: function(descript) {
        this.set('contentTitle', descript);
    },
    setUser: function()
    {
        var user = HubStar.User.find(localStorage.loginStatus);
    },
    setDesc: function(desc) {
        this.set("selectedDesc", desc);
    },

    exit: function() {
        var that = this;
        this.get("controllers.profile").set("isShareEmail", false);
        this.get("controllers.article").set("isShareEmail", false);
        this.get("controllers.mega").set("isShareEmail", false);
        this.get("controllers.video").set("isShareEmail", false);

//        if (this.get('parentTController') === 'article')
//        {
//            this.get("controllers.article").eShare();
//        }
//
//        else 
        if (that.get('parentTController') === 'itemFunction')
        {
            var id = this.get("objectID");
            $('#addEmail_' + id).attr('style', 'display: none');
        }

//        else if (this.get('parentTController') === 'video')
//        {
//            this.get("controllers.video").eShare();
//        }
//        else {
//            this.get("controllers.mega").eShare();
//        }
        $("#body_id").css("overflow", "auto");
    }
});