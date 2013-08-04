define([
    'ember',
    'models/UserModel', 'models/CateModel'

], function(
        Ember,
        UserModel,
        CateModel

        ) {
    "use strict";

    var ApplicationRoute = Ember.Route.extend({
        setupController: function(controller, model) {


        }

    });
    return ApplicationRoute;
});
