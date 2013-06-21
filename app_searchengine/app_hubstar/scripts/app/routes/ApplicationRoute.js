define([
    'ember',
    'models/UserModel'

], function(
        Ember,
        UserModel

        ) {
    "use strict";

    var ApplicationRoute = Ember.Route.extend({

        setupController: function(controller, model) {


            this.controllerFor('application').loginStatus();

        }

    });
    return ApplicationRoute;
});
