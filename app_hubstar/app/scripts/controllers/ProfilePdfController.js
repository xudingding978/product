HubStar.ProfilePdfController = Ember.Controller.extend({
    is_authentic_user: true,
    is_pdf_create_mode: false,
    newPdfSource: '',
    newPdfName: '',
    newPdfCover: '',
    newPdfDesc: '',
    loadingTime: false,
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
                }, 100);
            }, 250);
        });

//        this.checkEditingMode();
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
    }
    
});