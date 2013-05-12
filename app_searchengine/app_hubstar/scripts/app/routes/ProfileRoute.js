define([
    'ember',
    'controllers/ProfileController',
    'models/ProfileModel'
], function(
        Ember,
        ProfileController,
        ProfileModel
        ) {
    "use strict";

    var ProfileRoute = Ember.Route.extend({
        setupController: function(ProfileController, ProfileModel) {
        },
        model: function(params) {
            return ProfileModel.find(params.profile_id);
        },
        renderTemplate: function() {

            this.render('profile', {
                into: "application"
            });
        }
    });
    return ProfileRoute;
});