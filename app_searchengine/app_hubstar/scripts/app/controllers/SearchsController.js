define([
    'models/MegaModel',
    'ember'
], function(MegaModel, Ember) {

    var SearchsController = Ember.ArrayController.extend({
        content: [],
        newSearch: function(object) {
            this.set("content", MegaModel.find(object));
            //    console.log(MegaModel.find(object).toString());
            //    console.log(this.get("content"));
        },
        searchModel: function() {

            var data = MegaModel.find({});

        }
    });


    return SearchsController;
});
