HubStar.ProfilePdfController = Ember.Controller.extend({
    is_authentic_user: true,
    is_pdf_create_mode: false,
    newPdfSource: '',
    newPdfName: '',
    newPdfCover: '',
    newPdfDesc: '',
    loadingTime: false,
    is_profile_editing_mode:false,
    makeSureDelete: false,
    message: "",
    getVideo: true,
    pdfContent: [],
    isRenderDeleteItemTemplate: false,
    needs: ['profile', 'permission', 'applicationFeedback', 'pdfUploader'],

    init: function() {
        var address = document.URL;
        var profile_id = address.split("#")[1].split("/")[2];
        var model = HubStar.Profile.find(profile_id);
        this.getClientId(model);
    },
            
    getClientId: function(model) {
        var results = HubStar.Mega.find({"RquireType": "pdf", 'ownerid': model.get("id")});

        var that = this;
        this.set("loadingTime", true);
        results.then(function() {
            that.set('pdfContent', []);
            for (var i = 0; i < results.get("length"); i++) {
                var tempmega = results.objectAt(i);
                that.get("pdfContent").insertAt(0,tempmega);
            }
//            that.get("controllers.profile").set("profileVideoStatistics", results.get("length"));
            that.set("loadingTime", false);
//            that.relayout();
            setTimeout(function() {
                $('#masonry_user_container').masonry("reloadItems");
                setTimeout(function() {
                    $('#masonry_user_container').masonry();
                      $('html,body').animate({
                    scrollTop: $("#profile_submenu").offset().top-100
                });
                }, 100);
            }, 250);
        });

        this.checkEditingMode();
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
        console.log(this.get('is_profile_editing_mode'));
    },
    relayout: function()
    {
        setTimeout(function() {
            $('#masonry_user_container').masonry("reloadItems");
            setTimeout(function() {
                $('#masonry_user_container').masonry();
                 $('html,body').animate({
                    scrollTop: $("#profile_submenu").offset().top-100
                });
            }, 100);
        }, 200);
    },
    dropdownPhotoSetting: function(id)
    {
        this.set('delete_id', id);
        var ids = '#dropdown_id_' + id;
        $(ids).toggleClass('hideClass');
        $(ids).click(function() {
            $(this).removeClass('hideClass');
        }).mouseleave(function() {
            $(this).addClass('hideClass');
        });


    },
    removeCollectedItem: function(type)
    {
        this.set('message', "Remove this pdf?");
        this.set('makeSureDelete', !this.get('makeSureDelete'));

    },
    deleteConfirm: function()
    {
        var id = this.get('delete_id');
        this.deleteSelectedCollection(id);
        this.cancelDelete();
    },
    deleteSelectedCollection: function(id)
    {
        for (var i = 0; i < this.get('pdfContent').get('length'); i++) {
            var tempmega = this.get('pdfContent').objectAt(i);
            if (tempmega.get('id') === id)
            {
                console.log(tempmega.get("save_count"));
                this.get('pdfContent').removeObject(tempmega);
                if (tempmega.get("save_count") > 0)
                {
                    tempmega.set("is_deleted", true);
                    tempmega.store.save();
                } else {
                    console.log(tempmega);
                    tempmega.deleteRecord();
                    tempmega.store.save();
                }
                                
//                var profile = HubStar.Profile.find(this.get("controllers.profile").get("Id"));

//                profile.set("profile_video_num", this.get('videoesContent').get("length"));

//                profile.store.save();
//                this.get("controllers.profile").set("profileVideoStatistics", this.get('videoesContent').get("length"));
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
            
    transitionToPdf: function(id) {
    console.log(id);
    var url = "";
    for (var i = 0; i < this.get('pdfContent').get('length'); i ++) {
        if (this.get('pdfContent').objectAt(i).get('id') === id) {
            console.log(i);
            url = this.get('pdfContent').objectAt(i).get('pdf').objectAt(0).get('pdf_url');
        }
    }
    console.log(url);
        window.open(
                url
                ).focus();
    },
    
    pdfCreateModeSwitch: function()
    {
        console.log('switch');
        this.set('is_pdf_create_mode', true);
        this.transitionTo("pdfUploader");
    },

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
    }
    
});
