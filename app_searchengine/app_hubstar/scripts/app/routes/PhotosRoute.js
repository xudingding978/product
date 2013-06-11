define([
    'ember',
    'models/PhotoModel'
], function(
        Ember,
        PhotoModel
        ) {
    "use strict";

    var PhotosRoute = Ember.Route.extend({
        setupController: function(controller, model) {
        },
//        model: function() {
//
//            return PhotoModel.find();
//        }


    });
    return PhotosRoute;
});
