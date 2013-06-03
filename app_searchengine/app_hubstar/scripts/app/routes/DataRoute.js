define([
    'ember',
    'controllers/DataController', 
    'models/PostModel',
    'views/DiscoveryView'
], function(
        Ember,
        DataController,
        PostModel
        ) {
    "use strict";

    var DataRoute = Ember.Route.extend({
        model: function() {
            return PostModel.find();
        },
        setupController: function(DataController) {
            DataController.model;
        }
    });
    return DataRoute;
});