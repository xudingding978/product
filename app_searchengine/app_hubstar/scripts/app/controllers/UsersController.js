define([
    "models/UserModel"
],function(
        UserModel
    ) {
    var UsersController = Ember.Controller.extend({
        model: function() {
            return UserModel.find();
        }
    });
    return UsersController;
});