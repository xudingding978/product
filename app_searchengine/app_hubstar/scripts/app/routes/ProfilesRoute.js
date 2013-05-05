define([
    'ember',
    'controllers/ApplicationController', 'models/Postmodel'
], function(
        Ember,
        ApplicationController,
        Postmodel
        ) {
    "use strict";

    var ProfilesRoute = Ember.Route.extend({
        controller: ApplicationController,
        setupController: function(controller, Postmodel) {
         //  controller.set("indexPage",true);
         //   controller.get('application').remove();
        },
        renderTemplate: function() {

            this.render('profiles', {
                into: "application",
            });

        }

    });
    return ProfilesRoute;
});