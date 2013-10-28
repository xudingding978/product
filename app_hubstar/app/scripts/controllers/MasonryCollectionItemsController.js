
HubStar.MasonryCollectionItemsController = Ember.ArrayController.extend({
    content: [],
    uploadImageContent: [],
    title: null,
    collection_id: null,
    is_authentic_user: false,
    is_profile_editing_mode: false,
    uploadOrsubmit: false,
    is_user_editing_mode: false,
    collectionID: "",
    itemID: "",
    type: "",
    needs: ['photoCreate', 'profile', 'user', 'permission', 'photoCreateInfoSetting', 'applicationFeedback'],
    user_id: null,
    init: function() {
    },
    selectModelForUser: function(collection_id) {
        this.set('content', []);
        this.set('collection_id', collection_id);
        this.set('');
        var address = document.URL;
        var user_id = address.split("#")[1].split("/")[2];
        this.set('user_id', user_id);
        this.set('collections', this.get('controllers.user').get('collections'));
        for (var i = 0; i < this.get("collections").get("length"); i++)
        {
            if (this.get("collections").objectAt(i).get("id") === collection_id)
            {
                this.set('title', this.get("collections").objectAt(i).get('title'));
            }
        }
        var results = HubStar.Mega.find({RquireType: "personalCollection", user_id: user_id, collection_id: collection_id});
        var that = this;


        results.addObserver('isLoaded', function() {


            if (results.get('isLoaded')) {

                for (var i = 0; i < this.get("content").length; i++) {
                    var tempObject = results.objectAt(i);
                    that.get("content").pushObject(tempObject);

                }
   
            }
        });
        this.checkEditingMode();

    },
    selectModelForProfile: function(collection_id, title) {
        this.set('collection_id', collection_id);
        this.resetContent();

        if (title === undefined)
        {
            var arrayUrl;
            arrayUrl = (document.URL).split("/");
            var locationUrl = arrayUrl.get("length") - 2;

            var results = HubStar.Collection.find({RquireType: "personalCollection", profile_id: arrayUrl[locationUrl], collection_id: collection_id});
            var that = this;
            results.addObserver('isLoaded', function() {
                if (results.get('isLoaded')) {
                    var titleFill = results.objectAt(0).get("title");
                    that.set('title', titleFill);
                }
            });
        }
        else {
            this.set('title', title);
        }
        this.checkEditingMode();
    }
    ,
    goBack: function() {
    a
        var lastposition = HubStar.get("scrollCollectionPosition");
        //window.history.back();

        var address = document.URL;
        var user_id = address.split("#")[1].split("/")[1];
        if (user_id === "profiles")
        {
            // this.
            this.get('controllers.profile').goToProfileRoute();
        }
        else if (user_id === "users")
        {
            this.get('controllers.user').goToUserRoute();
        }


        var lastposition = HubStar.get("scrollCollectionPosition");
        //   window.history.back();
          this.get('controllers.user').goToRouter();
        setTimeout(function() {

            $(window).scrollTop(lastposition);

        }, 200);



    },
    newUpload: function() {

        $('#ownerUpload').attr('style', 'display:block');
        $('#tagetUplaod').attr('style', 'display:none');
        $('#addNew').toggleClass('col2');
        $('#addNew').toggleClass('col4');
        var photoCreate = this.get('controllers.photoCreate');
        photoCreate.init();
        setTimeout(function() {
            $('#masonry_photo_collection_container').masonry("reload");
        }, 200);
    },
    back: function() {
        this.resetContent();
        var photoCreateController = this.get('controllers.photoCreate');
        photoCreateController.set("fileSize", 0);
        $('#ownerUpload').attr('style', 'display:none');
        $('#tagetUplaod').attr('style', 'display:block');
        this.set('uploadOrsubmit', false);
        $('#addNew').toggleClass('col2');
        $('#addNew').toggleClass('col4');
        this.reLayout();

        HubStar.set('isNewUpload', true);
        $('#dragAndDroppArea').attr('style', "display:none");

    },
    removeCollectedItem: function(collectionID, itemID, type)
    {
        var message = "Do you wish to delete this item ?";
        this.set("message", message);
        this.set('makeSureDelete', true);
        this.dropdownPhotoSetting(itemID);
        if (this.get('willDelete')) {
            var currentUser = HubStar.User.find(localStorage.loginStatus);
            var currentCollection = null;
            var collectedColletionids = null;
            for (var i = 0; i < currentUser.get('collections').get('length'); i++) {
                if (currentUser.get('collections').objectAt(i).get('id') === this.get('collectionID'))
                {
                    currentCollection = currentUser.get('collections').objectAt(i);
                    collectedColletionids = currentCollection.get('collection_ids');
                    if (collectedColletionids === null) {
                        collectedColletionids = "";
                    }
                    var tempcollectedColletionids = collectedColletionids.replace(this.get('itemID') + ",", "");
                    tempcollectedColletionids = tempcollectedColletionids.replace(this.get('itemID'), "");
                    currentCollection.set('collection_ids', tempcollectedColletionids);
                    //   this.get('controllers.applicationFeedback').statusObserver(null, "Delete Successfully.");
                    HubStar.store.save();
                    break;
                }
            }
            for (var i = 0; i < this.get('content').length; i++) {
                if (this.get('content').objectAt(i).get('id') === this.get('itemID')) {
                    var tempItem = this.get('content').objectAt(i);
                    if (this.get('type') === 'profile') {
                        tempItem.deleteRecord();
                    }
                    this.get('content').removeObject(tempItem);
                    HubStar.store.save();
                    break;
                }
            }
            this.reLayout();
            this.cancelDelete();
        } else {
            this.set('willDelete', true);
            this.set('collectionID', collectionID);
            this.set('itemID', itemID);
            this.set('type', type);
        }
    },
    reLayout: function() {

    console.log('relayout');
        setTimeout(function() {
            $('#masonry_photo_collection_container').masonry("reload");
        }, 1000);
    },
    cancelDelete: function() {
        this.set('willDelete', false);
        this.set('makeSureDelete', false);
        HubStar.set('data', null);
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
    changeCollectionCover: function(id, collection_id, HubStarModel, article) {




        // var that = this;
        for (var i = 0; i < userOrprofile.get('content').length; i++) {

            if (userOrprofile.objectAt(i).id === collection_id) {

                var currentCollection = userOrprofile.objectAt(i);
                currentCollection.set('cover', coverImge);
                currentCollection.set('optional', owner_id);
                HubStar.store.save();
                this.get('controllers.applicationFeedback').statusObserver(null, "Updated successfully.");
                break;
            }
        }
    },
    changeCollectionArticleCover: function(id, collection_id, HubStarModel) {
        this.dropdownPhotoSetting(id);
        var Mega = HubStar.Mega.find(id);
        var coverImge = Mega.get('article').objectAt(0).get('article_image_url');

        var address = document.URL;
        var owner_id = address.split("#")[1].split("/")[2];
        var userOrprofile = HubStarModel.find(owner_id).get('collections');
        if (article === "article")
        {
            var coverImge = Mega.get('article').objectAt(0).get('article_image_url');
        }
        else {
            var coverImge = Mega.get('photo').objectAt(0).get('photo_image_original_url');
        }

        for (var i = 0; i < userOrprofile.get('content').length; i++) {

            if (userOrprofile.objectAt(i).id === collection_id) {

                var currentCollection = userOrprofile.objectAt(i);
                currentCollection.set('cover', coverImge);
                currentCollection.set('optional', owner_id);
                HubStar.store.save();
                this.get('controllers.applicationFeedback').statusObserver(null, "Updated successfully.");
                break;
            }
        }
    },
    transitionToArticle: function(id) {

        this.transitionTo("article", HubStar.Article.find(id));
    },
    dropdownPhotoSetting: function(id) {
        $('#dropdown_id_' + id).toggleClass('hideClass');
    },
    resetContent: function()
    {

        this.set('content', []);
        this.set('uploadImageContent', []);
        var address = document.URL;
        var owner_id = address.split("#")[1].split("/")[2];
        var title = this.get('collection_id');
        //console.log(title);
        var results = HubStar.Mega.find({RquireType: "collection", "collection_id": title, "owner_profile_id": owner_id});
        var that = this;
        results.addObserver('isLoaded', function() {
            if (results.get('isLoaded')) {
                for (var i = 0; i < this.get("length"); i++) {
                    var tempmega = results.objectAt(i);
                    if (tempmega.get('photo').get('length') === 1 && (that.get('collection_id') === tempmega.get('collection_id')))
                    {
                        that.get("content").pushObject(tempmega);
                    }
                }
            }
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
            this.set("is_authentic_user", this.checkAuthenticUser());
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
        this.reLayout();

    }, photoUpload: function(e) {


        HubStar.store.save();

    }

});
