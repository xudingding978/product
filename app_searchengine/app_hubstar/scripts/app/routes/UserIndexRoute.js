define([
    'ember',
    'models/UserModel',
], function(
        Ember,
        UserModel

        ) {
    "use strict";

    var UserIndexRoute = Ember.Route.extend({
        setupController: function(controller, model) {

            this.controllerFor('user').set('switchPhoto', true);
        },
        redirect: function() {

            if ((localStorage.getItem("loginStatus") === null) || (localStorage.loginStatus === "")) {

                this.transitionTo('indexIndex');
                this.controllerFor('application').set('popup', true);
            } else {

                this.transitionTo('user');
            }
        }
    });
    return UserIndexRoute;
});
