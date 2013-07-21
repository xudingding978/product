define([
    'ember',
    'models/MegaModel'
], function(Ember, MegaModel) {

    var MasonryCollectionItemsController = Ember.ArrayController.extend({
        content: [],
        title: null,
        is_authentic_user: false,
        needs: ['photoCreate', 'profile','permission'],
        user_id: null,
        init: function() {
            this.checkAuthenticUser();
        },
        selectModelForUser: function(collection_id) {

            this.set('content', []);
            var address = document.URL;
            var user_id = address.split("#")[1].split("/")[2];
            this.set('user_id', user_id);
            this.set('title', collection_id);
            var results = MegaModel.find({RquireType: "personalCollection", user_id: user_id, collection_id: collection_id});
            var that = this;
            results.addObserver('isLoaded', function() {
                if (results.get('isLoaded')) {
                    for (var i = 0; i < this.get("content").length; i++) {
                        var id = this.get("content").objectAt(i).id;
                        if (MegaModel.find(id)._data.hasMany.photo.length === 1)
                        {
                            that.get("content").pushObject(MegaModel.find(id));
                        }
                    }
                }
            });
            this.checkAuthenticUser();
        },
        selectModelForProfile: function(collection_id) {
            this.set('title', collection_id);
            this.resetContent();


        },
        newUpload: function() {
            $('#ownerUpload').attr('style', 'display:block');
            $('#tagetUplaod').attr('style', 'display:none');

            setTimeout(function() {
                $('#masonry_photo_collection_container').masonry("reload");
            }, 200);
        },
        back: function() {
            this.resetContent();

            $('#ownerUpload').attr('style', 'display:none');
            $('#tagetUplaod').attr('style', 'display:block');
            setTimeout(function() {
                $('#masonry_photo_collection_container').masonry("reload");
            }, 200);
        },
        removeCollectedItem: function(collectionID, itemID)
        {

            var message = "Do you wish to delete this photo ?";
            this.set("message", message);
            this.set('makeSureDelete', true);
            this.dropdownPhotoSetting(itemID);
            if (this.get('willDelete')) {
                var currentUser = App.User.find(localStorage.loginStatus);
                var currentCollection = null;
                var collectedColletionids = null;
                for (var i = 0; i < currentUser.get('collections').get('length'); i++) {
                    if (currentUser.get('collections').objectAt(i).get('id') === App.get('collectionID'))
                    {
                        currentCollection = currentUser.get('collections').objectAt(i);
                        collectedColletionids = currentCollection.get('collection_ids');
                        var tempcollectedColletionids = collectedColletionids.replace(App.get('itemID') + ",", "");
                        tempcollectedColletionids = collectedColletionids.replace(App.get('itemID'), "");
                        currentCollection.set('collection_ids', tempcollectedColletionids);
                        App.store.save();
                        break;
                    }
                }
                for (var i = 0; i < this.get('content').length; i++) {
                    if (this.get('content').objectAt(i).get('id') === App.get('itemID')) {

                        var tempItem = this.get('content').objectAt(i);
                        tempItem.deleteRecord();
                        App.store.save();
                        this.get('content').removeObject(tempItem);
                        break;
                    }
                }
                this.cancelDelete();
            } else {
                this.set('willDelete', true);
                App.set('collectionID', collectionID);
                App.set('itemID', itemID);
            }

        },
        cancelDelete: function() {
            this.set('willDelete', false);
            this.set('makeSureDelete', false);
            App.set('data', null);
        },
          checkAuthenticUser: function() {
                    var currentUser = App.User.find(localStorage.loginStatus);
                    var current_user_email = currentUser.get('email');
                    var permissionController = this.get('controllers.permission');
                    var that = this;
                    var is_authentic_user = permissionController.checkAuthenticUser(that.get("model").get("owner"), that.get("model").get("profile_editors"), current_user_email);
                    that.set("is_authentic_user", is_authentic_user);
                    currentUser.addObserver('isLoaded', function() {
                        var current_user_email = currentUser.get('email');
                        if (currentUser.get('isLoaded')) {
                            var is_authentic_user = permissionController.checkAuthenticUser(that.get("model").get("owner"), that.get("model").get("profile_editors"), current_user_email);
                            that.set("is_authentic_user", is_authentic_user);
                        }
                    });


                },
        changeCollectionCover: function(id, collection_id, AppModel) {

            this.dropdownPhotoSetting(id);
            var Mega = App.Mega.find(id);
            var coverImge = Mega.get('photo').objectAt(0).get('photo_image_original_url');
            var address = document.URL;
            console.log(address);
            var owner_id = address.split("#")[1].split("/")[2];

            var userOrprofile = AppModel.find(owner_id).get('collections');
            for (var i = 0; i < userOrprofile.get('content').length; i++) {
                if (userOrprofile.objectAt(i).id === collection_id) {
                    var currentCollection = userOrprofile.objectAt(i);
                    currentCollection.set('cover', coverImge);
                    App.store.save();
                    break;
                }
            }


        },
        dropdownPhotoSetting: function(id) {

            $('#dropdown_id_' + id).toggleClass('hideClass');
        }, resetContent: function()
        {
            var proController = this.get('controllers.profile');
            this.set("is_authentic_user", proController.get("is_authentic_user"));
            this.set('content', []);
            var address = document.URL;
            var owner_id = address.split("#")[1].split("/")[2];
            var title = this.get('title');
            var results = MegaModel.find({RquireType: "collection", "collection_id": title, "owner_profile_id": owner_id});

            var that = this;
            results.addObserver('isLoaded', function() {
                if (results.get('isLoaded')) {
                    for (var i = 0; i < this.get("content").length; i++) {
                        var id = this.get("content").objectAt(i).id;
                        if (MegaModel.find(id)._data.hasMany.photo.length === 1)
                        {
                            that.get("content").pushObject(MegaModel.find(id));
                        }
                    }
                }
            });
        }
    });
    return MasonryCollectionItemsController;
});
