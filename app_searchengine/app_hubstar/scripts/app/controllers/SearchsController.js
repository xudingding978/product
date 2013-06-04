define([
    'models/SearchModel',
    'ember'
], function(SearchsModel, Ember) {
    var SearchsController = Ember.ArrayController.extend({
        newSearch: function(object) {

            var searchResult = App.store.createRecord(App.Search, {
                id: object.id,
                region: object.region,
                result: object.result
            });

            //     App.store.commit();

            this.transitionToRoute('search', searchResult);

        }
                     
    });
    return SearchsController;
});
