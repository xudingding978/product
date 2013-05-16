define([
    'ember',
    'models/ProfileModel',
    "controllers/ProfileNewController"

], function(
        Ember,
        ProfileModel,
        ProfileNewController
        ) {
    "use strict";

    var NewRoute = Ember.Route.extend({
        renderTemplate: function() {
            this.render('profileNew', {
                into: "application"
            });
        },
        model: function() {
            return ProfileModel;
        },
        activate: function() {
             $("body").css("overflow", "hidden");
        },
        deactivate: function() {
             $("body").css("overflow", "auto");
        }
    });
    return NewRoute;
});