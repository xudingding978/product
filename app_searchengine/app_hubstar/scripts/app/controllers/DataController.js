define([
    "models/PostModel"
],function(PostModel) {
    var DataController = Ember.Controller.extend({
        modelPost: function() {
            return PostModel.find();
        }
    });
    return DataController;
});
