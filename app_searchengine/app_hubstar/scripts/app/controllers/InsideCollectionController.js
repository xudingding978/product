define([
    'ember',
    'models/MegaModel'
], function(Ember, MegaModel) {

    var InsideCollectionController = Ember.ArrayController.extend({
        content: [],
        title: null,
        needs: ['photoCreate'],
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
        }
    });
    return InsideCollectionController;
});
