define([
    'ember'

], function(
        Ember

        ) {
    "use strict";

    var UserIndexRoute = Ember.Route.extend({
        setupController: function(controller, model) {

            this.controllerFor('user').set('switchPhoto', true);
        },
        redirect: function() {

            if ((localStorage.getItem("loginStatus") === null) || (localStorage.loginStatus === "")) {

                this.transitionTo('indexIndex');
            } else {
                this.transitionTo('users');
            }
        },
                
                
//        renderTemplate: function() {
//
//            this.render('users', {
//          
//                into: "application"
//            });
//        }

    });
    return UserIndexRoute;
});
