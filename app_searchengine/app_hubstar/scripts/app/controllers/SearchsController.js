define([
    'models/SearchModel',
    'ember'
], function(SearchsModel, Ember) {
    var SearchsController = Ember.ArrayController.extend({
        itemController: "search"
    });
    return SearchsController;
});
