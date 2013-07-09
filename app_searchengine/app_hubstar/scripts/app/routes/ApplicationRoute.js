define([
    'ember',
    'models/UserModel', 'models/CategoryModel'

], function(
        Ember,
        UserModel,
        CategoryModel

        ) {
    "use strict";

    var ApplicationRoute = Ember.Route.extend({
        setupController: function(controller, model) {


            this.controllerFor('application').loginStatus();
            this.controllerFor('platformBar').set('model', App.Category.find());
        }

    });
    return ApplicationRoute;
});
