define([
    'ember',
    'controllers/ApplicationController', 'models/UserModel'
], function(
        Ember,
        ApplicationController,
        UserModel
        ) {
    "use strict";

    var UsersRoute = Ember.Route.extend({
        controller: ApplicationController,
        setupController: function(controller, UserModel) {
         //  controller.set("indexPage",true);
         //   controller.get('application').remove();
        },
        renderTemplate: function() {

            this.render('users', {
                into: "discoveryBar"
            });

        }

    });
    return UsersRoute;
});