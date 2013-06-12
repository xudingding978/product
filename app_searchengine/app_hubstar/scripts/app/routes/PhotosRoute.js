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
<<<<<<< HEAD
        
        model: function() {

            return PhotoModel.find();
        }
=======
//        model: function() {
//
//            return PhotoModel.find();
//        }
>>>>>>> db253c0e45ccd7cd9a8d35e62a4ee6181290d62e


    });
    return PhotosRoute;
});
