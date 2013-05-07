define([
    "models/PostModel"
],function(PostModel) {
    var DataController = Ember.Controller.extend({
        model: function() {
            return PostModel.find();
        }
    });
    return DataController;
});
