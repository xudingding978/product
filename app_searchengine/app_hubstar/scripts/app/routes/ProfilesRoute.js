define([
    'ember',
    'controllers/ProfilesController',
    'models/ProfileModel'
], function(
        Ember,
        ApplicationController,
        ProfileModel
        ) {
    "use strict";
    var ProfilesRoute = Ember.Route.extend({
   //     controller: ApplicationController,
        setupController: function(controller, ProfileModel) {

        },
        model: function() {
            return ProfileModel.find();
        },
        renderTemplate: function() {
            this.render('profiles', {
                into: "application"
            });
        }
    });
    return ProfilesRoute;
});
