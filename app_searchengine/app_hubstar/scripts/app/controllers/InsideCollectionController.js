define([
    'ember',
    'models/MegaModel'
], function(Ember, MegaModel) {

    var InsideCollectionController = Ember.ArrayController.extend({
        content: [],
        title: null,
        selectModel: function() {
   //     this.set('content', []);

            var address = document.URL;
            var user_id = address.split("#")[1].split("/")[2];
            var collection_id = address.split("#")[1].split("/")[3];
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



         console.log(this.get('content'));
        },
    });
    return InsideCollectionController;
});
