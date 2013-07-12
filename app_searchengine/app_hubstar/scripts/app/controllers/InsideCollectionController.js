define([
    'ember',
    'models/MegaModel'
], function(Ember, MegaModel) {

    var InsideCollectionController = Ember.ArrayController.extend({
        content: [],
        title: null,
        is_authentic_user: false,
        needs: ['photoCreate', 'profile'],
        selectModelForUser: function(collection_id) {
            this.set('content', []);
            var address = document.URL;
            var user_id = address.split("#")[1].split("/")[2];
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
        },
        selectModelForProfile: function(collection_id) {
            var proController = this.get('controllers.profile');
            this.set("is_authentic_user", proController.get("is_authentic_user"));
            this.set('content', []);
            var address = document.URL;
            var owner_id = address.split("#")[1].split("/")[2];
            this.set('title', collection_id);
            var results = MegaModel.find({RquireType: "collection", collection_id: collection_id, owner_profile_id: owner_id});

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

        },
        newUpload: function() {
            $('#ownerUpload').attr('style', 'display:block');
            $('#tagetUplaod').attr('style', 'display:none');
        },
        back: function() {
            $('#ownerUpload').attr('style', 'display:none');
            $('#tagetUplaod').attr('style', 'display:block');
        },
        removeCollectedItem: function(collectionID, itemID)
        {
            var currentUser = App.User.find(localStorage.loginStatus);
            var currentCollection = null;
            var collectedColletionids = null;
            for (var i = 0; i < currentUser.get('collections').get('length'); i++) {
                if (currentUser.get('collections').objectAt(i).get('id') === collectionID)
                {
                    currentCollection = currentUser.get('collections').objectAt(i);
                    collectedColletionids = currentCollection.get('collection_ids');
                    var tempcollectedColletionids = collectedColletionids.replace(itemID + ",", "");
                    tempcollectedColletionids = collectedColletionids.replace(itemID, "");
                    currentCollection.set('collection_ids', tempcollectedColletionids);
                    App.store.save();
                    break;
                }
            }
            for (var i = 0; i < this.get('content').length; i++) {
                if (this.get('content').objectAt(i).get('id') === itemID) {
                    var tempItem = this.get('content').objectAt(i);
                    this.get('content').removeObject(tempItem);

                    break;
                }
            }

        }
    });
    return InsideCollectionController;
});
