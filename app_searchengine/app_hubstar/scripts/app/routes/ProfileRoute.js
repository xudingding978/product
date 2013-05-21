define([
    'ember',
    'models/ProfileModel'
], function(
        Ember,
        ProfileModel
        ) {
    "use strict";
    var ProfileRoute = Ember.Route.extend({
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
