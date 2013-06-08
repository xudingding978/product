define([
    'ember',
    'models/UserModel'

], function(
        Ember,
        UserModel

        ) {
    "use strict";

    var ApplicationRoute = Ember.Route.extend({
        //     controller: ApplicationController,
        setupController: function(controller, model) {
            if (localStorage.loginStatus !== "") {
                this.controllerFor('application').set('model', UserModel.find(localStorage.loginStatus));
                controller.setLoginIn();

            } else {
                controller.setLoginOut();

            }
        }

    });
    return ApplicationRoute;
});
