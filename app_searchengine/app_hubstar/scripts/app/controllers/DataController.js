define(['ember', 'models/MegaModel']
        , function(Ember, MegaModel) {
    var DataController = Ember.ArrayController.extend({
        content: [],
    });
    return DataController;
});
