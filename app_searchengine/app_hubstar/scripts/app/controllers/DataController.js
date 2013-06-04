define(['ember', 'models/SearchModel']
        , function(Ember, SearchModel) {
    var DataController = Ember.ArrayController.extend({
        content: [],
    });
    return DataController;
});
