define([
    'ember',
    'models/MegaModel'
], function(Ember, MegaModel) {

    var InsideCollectionController = Ember.ArrayController.extend({
        content: [],
        selectModel: function() {


            var address = document.URL;
            var user_id = address.split("#")[1].split("/")[2];
            var collection_id = address.split("#")[1].split("/")[3];
            var results = MegaModel.find({RquireType: "personalCollection", user_id: user_id, collection_id: collection_id});
            this.set("content", results);
            console.log(this.get('content'));
        }

    });
    return InsideCollectionController;
});
