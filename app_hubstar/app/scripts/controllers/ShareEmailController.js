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
    actions: {
        exit: function() {
            var that = this;
            this.get("controllers.profile").set("isShareEmail", false);
            this.get("controllers.article").set("isShareEmail", false);
            this.get("controllers.mega").set("isShareEmail", false);
            this.get("controllers.video").set("isShareEmail", false);
            HubStar.set("isShareEmail", false);
            if (that.get('parentTController') === 'itemFunction')
            {
                var id = this.get("objectID");
                $('#addEmail_' + id).attr('style', 'display: none');
            }
            $("#body_id").css("overflow", "auto");
        },
        emailSend: function()
        {
            var tempEmail = [this.get("emailDestination"), this.get("emailBody"), this.get('displayName'), this.get('displayEmail'), this.get("currentUser").get('photo_url_large'), this.get("owner_profile_pic"), this.get("selectedPhotoThumbnailUrl"), this.get("selectedUrl"), this.get('contentTitle'), this.get("selectedMega").get("owner_title"), this.get("selectedMega").get("owner_profile_pic")];
            requiredBackEnd('emails', 'shareemail', tempEmail, 'POST', function(params) {
            });
            this.get('controllers.applicationFeedback').statusObserver(null, "Your message has been sent.");
            this.send("exit");
        }
    },
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
    setImageID: function(id) {
        this.set("objectID", id);
    },
    setUrl: function(url) {
        this.set("selectedUrl", url);
    },
    setThumbnailUrl: function(photo_image_original_url) {
        this.set("selectedPhotoThumbnailUrl", photo_image_original_url);
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
    }
});