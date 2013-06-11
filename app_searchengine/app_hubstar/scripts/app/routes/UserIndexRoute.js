define([
    'ember'

], function(
        Ember

        ) {
    "use strict";

    var ProfileIndexRoute = Ember.Route.extend({
        redirect: function() {

            this.transitionTo('users');

        },
        renderTemplate: function() {

            this.render('users', {
                into: "application"
            });
        }

    });
    return ProfileIndexRoute;
});
