define([
    'ember',
    'models/UserModel',
], function(
        Ember,
        UserModel

        ) {
    "use strict";

    var UsersIndexRoute = Ember.Route.extend({
        setupController: function(controller, model) {

            this.controllerFor('user').set('switchPhoto', true);
        },
        redirect: function() {

            if ((localStorage.getItem("loginStatus") === null) || (localStorage.loginStatus === "")) {

                this.transitionTo('indexIndex');
                this.controllerFor('application').set('popup', true);
            } else {
                this.transitionTo('users');
            }
        },
//        model: function(params) {
//            this.controllerFor('user').set('switchPhoto', true);
//            return UserModel.find(params.user_id);
//        },
//        renderTemplate: function() {
//
//            this.render('users', {
//          
//                into: "application"
//            });
//        }

    });
    return UsersIndexRoute;
});
