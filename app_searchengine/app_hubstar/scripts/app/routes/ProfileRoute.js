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
//        model: function(params) {
//  console.log(params);
//            return "profiles[params.profile_id]";
//
//        },
        renderTemplate: function() {

            this.render('profile', {
                into: "application"
            });
        }
    });
    return ProfileRoute;
});