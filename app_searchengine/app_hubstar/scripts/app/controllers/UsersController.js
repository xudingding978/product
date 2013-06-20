define([
    "models/UserModel"
],function(
        UserModel
    ) {
    var UserController = Ember.Controller.extend({
//        model: function() {
//            return UserModel.find();
//        }
    });
    return UserController;
});