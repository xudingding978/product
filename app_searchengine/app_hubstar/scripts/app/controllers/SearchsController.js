define([
    'models/MegaModel',
    'ember'
], function(MegaModel, Ember) {

    var SearchsController = Ember.ArrayController.extend({
        content: [],
        newSearch: function(object) {
            this.set("content", MegaModel.find(object));
        },
        checkContent: function() {
console.log(this.get("content"));


        }.observes('content'),
        test: function() {



        }
    });


    return SearchsController;
});
