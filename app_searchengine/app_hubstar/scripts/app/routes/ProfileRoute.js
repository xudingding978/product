define([
    'ember',
    'controllers/ProfileController'
], function(
        Ember,
        ProfileController
        ) {
    "use strict";

    var ProfileRoute = Ember.Route.extend({
        setupController: function(ProfilesController) {
        },

        renderTemplate: function() {

            this.render('profile', {
                into: "application"
            });
        }
    });
    return ProfileRoute;
});