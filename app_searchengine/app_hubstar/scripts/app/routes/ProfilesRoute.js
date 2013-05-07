define([
    'ember',
    'controllers/ApplicationController', 
    'models/PostModel'
], function(
        Ember,
        ApplicationController,
        PostModel
        ) {
    "use strict";

    var ProfilesRoute = Ember.Route.extend({
        controller: ApplicationController,
        setupController: function(controller, PostModel) {
         //  controller.set("indexPage",true);
         //   controller.get('application').remove();
        },
        renderTemplate: function() {

            this.render('profiles', {
                into: "application"
            });

        }

    });
    return ProfilesRoute;
});