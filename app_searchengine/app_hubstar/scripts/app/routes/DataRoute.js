define([
    'ember',
    'controllers/DataController', 
    'models/PostModel'
], function(
        Ember,
        dataController,
        PostModel
        ) {
    "use strict";

    var DataRoute = Ember.Route.extend({
        model: function() {
            return PostModel.find();
        },


        setupController: function(dataController, PostModel) {

            alert(dataController.modelPost());
            dataController.modelPost();
        }
    });
    return DataRoute;
});