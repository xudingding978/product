HubStar.ProfilePdfController = Ember.Controller.extend({
    is_authentic_user: true,
    is_pdf_create_mode: false,
    pdfInfromationEdit: false,
    newPdfSource: '',
    newPdfName: '',
    newPdfCover: '',
    newPdfDesc: '',
    getVideo: true,
    videoesContent: [],
    isRenderDeleteItemTemplate: false,
    needs: ['profile', 'permission', 'applicationFeedback'],
//    getClientId: function(model) {
//
//        var results = HubStar.Mega.find({"RquireType": "video", 'ownerid': model.get("id")});
//        var that = this;
//        results.addObserver('isLoaded', function() {
//            if (results.get('isLoaded')) {
//                that.set('videoesContent', []);
//                for (var i = 0; i < results.get("length"); i++) {
//                    var tempmega = results.objectAt(i);
//                    that.get("videoesContent").pushObject(tempmega);
//                }
//                that.get("controllers.profile").set("profileVideoStatistics",results.get("length"));
//                that.relayout();
//            }
//        });
//        this.checkEditingMode();
//    },
    closeUploader: function() {
         this.set('is_pdf_create_mode', false);
    },
    back: function() {
        this.set('pdfInfromationEdit', false);
        this.set('newPdfName', '');
        this.set('newPdfSource', '');
        this.set('newPdfCover', '');
        this.set('newPdfDesc', '');
    },
    pdfCreateModeSwitch: function()
    {
        console.log('switch');
        this.set('is_pdf_create_mode', !this.get('is_pdf_create_mode'));
    },
//    dropdownPhotoSetting: function(id)
//    {
//        this.set('delete_id', id);
//        $('#dropdown_id_' + id).toggleClass('hideClass');
//    },
//    checkEditingMode: function()
//    {
//        this.set('is_profile_editing_mode', false);
//        this.set('is_user_editing_mode', false);
//        if (HubStar.get('editingMode') === 'profile') {
//            this.set('is_profile_editing_mode', true);
//            var proController = this.get('controllers.profile');
//            this.set('pageModel', proController.get('model'));
//            this.set("is_authentic_user", this.checkAuthenticUser());
//        }
//        else if (HubStar.get('editingMode') === 'user') {
//            this.set('is_user_editing_mode', true);
//            var userController = this.get('controllers.user');
//            this.set('is_authentic_user', userController.get('is_authentic_user'));
//        }
//        else {
//            this.set('is_profile_editing_mode', false);
//            this.set('is_user_editing_mode', false);
//        }
//        this.relayout();
//    },
//    relayout: function()
//    {
//        setTimeout(function() {
//            $('#masonry_user_container').masonry("reload");
//        }, 1000);
//    },
    checkAuthenticUser: function() {
        var currentUser = HubStar.User.find(localStorage.loginStatus);
        var current_user_email = currentUser.get('email');
        var permissionController = this.get('controllers.permission');
        var that = this;
        var is_authentic_user = permissionController.checkAuthenticUser(that.get("pageModel").get("owner"), that.get("pageModel").get("profile_editors"), current_user_email);

        currentUser.addObserver('isLoaded', function() {
            var current_user_email = currentUser.get('email');
            if (currentUser.get('isLoaded')) {
                is_authentic_user = permissionController.checkAuthenticUser(that.get("pageModel").get("owner"), that.get("pageModel").get("profile_editors"), current_user_email);
            }
        });
        return is_authentic_user;
    },
    removeCollectedItem: function()
    {
        this.set('message', "Remove this video?");
        this.set('makeSureDelete', !this.get('makeSureDelete'));

    },
    deleteConfirm: function()
    {

        this.deleteSelectedCollection();
        this.cancelDelete();
    },
    deleteSelectedCollection: function()
    {
        for (var i = 0; i < this.get('videoesContent').get('length'); i++) {
            var tempmega = this.get('videoesContent').objectAt(i);
            if (tempmega.get('id') === this.get('delete_id'))
            {
                tempmega.deleteRecord();
                tempmega.store.save();
                this.get('videoesContent').removeObject(tempmega);
                this.get("controllers.profile").set("profileVideoStatistics",this.get('videoesContent').get("length"));
                break;
            }
        }


    },
    cancelDelete: function() {
        this.set('makeSureDelete', !this.get('makeSureDelete'));
        this.set('message', "");
        HubStar.set('data', null);
        $('#dropdown_id_' + this.get('delete_id')).toggleClass('hideClass');
        this.set('delete_id', null);
        this.relayout();
    },
    profileStyleImageDrop: function(e, name)
    {
        var target = getTarget(e, "single");
        var src = target.result;
//        var that = this;
        this.set('newPdfSource',src);
        this.set('newPdfName',name);
        console.log(name);
        console.log(src);
        this.set('pdfInfromationEdit', true);
//        getImageWidth(src, function(width, height) {
//            that.set('newStyleImageSource', src);
//            that.set('newStyleImageName', name);
//            that.set('currentWidth', width);
//            that.set('currentHeight', height);
//            if (that.get('newStyleImageSource') !== null && that.get('newStyleImageSource') !== "")
//            {
//                var size = "Your image size is " + width + "x" + height;
//                that.set('CurrentImageSize', size);
//                that.set('isCrop', true);
//                that.set('isUpload', true);
//
//            }
//        });
    }
});
