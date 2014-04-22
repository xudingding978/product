HubStar.ProfileVideosController = Ember.Controller.extend({
    is_authentic_user: true,
    is_video_create_mode: false,
    getVideo: true,
    videoesContent: [],
    isRenderDeleteItemTemplate: false,
    needs: ['profile', 'permission', 'applicationFeedback'],
    getClientId: function(model) {
        var results = HubStar.Mega.find({"RquireType": "video", 'ownerid': model.get("id")});

        var that = this;
        this.set("loadingTime", true);
        results.then(function() {
            that.set('videoesContent', []);
            for (var i = 0; i < results.get("length"); i++) {
                var tempmega = results.objectAt(i);
                that.get("videoesContent").pushObject(tempmega);
            }
            that.get("controllers.profile").set("profileVideoStatistics", results.get("length"));
            that.set("loadingTime", false);
            that.relayout();
        });
        this.checkEditingMode();
    },
    videoCreateModeSwitch: function()
    {
        if (!this.get('is_video_create_mode'))
        {
            document.getElementById("body_id").style.overflow = "hidden";
        }
        else {
            document.getElementById("body_id").style.overflow = "auto";
        }
        this.set('is_video_create_mode', !this.get('is_video_create_mode'));
    },
    dropdownPhotoSetting: function(id)
    {
        this.set('delete_id', id);
//        $('#dropdown_id_' + id).toggleClass('hideClass');
            var id='#dropdown_id_' + id;
        $(id).toggleClass('hideClass');
        $(id).click(function() {
            $(this).removeClass('hideClass');
        }).mouseleave(function() {
            $(this).addClass('hideClass');
        });
        
        
    },
    checkEditingMode: function()
    {
        this.set('is_profile_editing_mode', false);
        this.set('is_user_editing_mode', false);
        
        if (HubStar.get('editingMode') === 'profile') {
            this.set('is_profile_editing_mode', true);
            var proController = this.get('controllers.profile');
            this.set('pageModel', proController.get('model'));
            this.checkAuthenticUser();
        }
        else if (HubStar.get('editingMode') === 'user') {
            this.set('is_user_editing_mode', true);
            var userController = this.get('controllers.user');
            this.set('is_authentic_user', userController.get('is_authentic_user'));
        }
        else {
            this.set('is_profile_editing_mode', false);
            this.set('is_user_editing_mode', false);
        }
        this.relayout();
    },
    relayout: function()
    {
        setTimeout(function() {
            $('#masonry_user_container').masonry("reloadItems");
            setTimeout(function() {
                $('#masonry_user_container').masonry();
            }, 100);
        }, 200);
    },
    checkAuthenticUser: function() {
        var currentUser = HubStar.User.find(localStorage.loginStatus);
       // var current_user_email = currentUser.get('email');
        var permissionController = this.get('controllers.permission');
        var that = this;
        var role = permissionController.checkAuthenticEdit(that.get("pageModel").get("profile_creator"), that.get("pageModel").get("profile_administrator"), that.get("pageModel").get("profile_editor"));
        var is_edit = false;
        if (role !== "")
        {
            is_edit = true;
        }
        //var is_authentic_user = permissionController.checkAuthenticUser(that.get("pageModel").get("owner"), that.get("pageModel").get("profile_editors"), current_user_email);

        currentUser.then(function() {
            var current_user_email = currentUser.get('email');
            var is_authentic_user = permissionController.checkAuthenticUser(that.get("pageModel").get("owner"), that.get("pageModel").get("profile_editors"), current_user_email);
            that.set("is_authentic_user", is_authentic_user || is_edit);

        });
        //return is_authentic_user||is_edit;
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
                var profile = HubStar.Profile.find(this.get("controllers.profile").get("Id"));

                profile.set("profile_video_num", this.get('videoesContent').get("length"));

                profile.store.save();
                this.get("controllers.profile").set("profileVideoStatistics", this.get('videoesContent').get("length"));
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
    }
});
