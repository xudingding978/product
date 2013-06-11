define([
    'ember'

], function(
        Ember

        ) {
    "use strict";

    var ProfileIndexRoute = Ember.Route.extend({
        redirect: function() {

            if ((localStorage.getItem("loginStatus") === null) || (localStorage.loginStatus === "")) {
                alert('please login in');
                this.transitionTo('indexIndex');
            } else {
                this.transitionTo('users');
            }
        },
        renderTemplate: function() {

            this.render('users', {
                into: "application"
            });
        }

    });
    return ProfileIndexRoute;
});
