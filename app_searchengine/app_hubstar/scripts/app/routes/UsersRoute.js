define([
    'ember',
    'models/UserModel'
], function(
        Ember,
        UserModel
        ) {
    "use strict";

    var UsersRoute = Ember.Route.extend({
        setupController: function(controller, model) {
            //  controller.set("indexPage",true);
            //   controller.get('application').remove();
        },
        model: function() {
            //   console.log( UserModel.find());

            return UserModel.find();
        },
        renderTemplate: function() {

            this.render('users', {
                outlet: 'users',
                into: "application"
            });

        }

    });
    return UsersRoute;
});