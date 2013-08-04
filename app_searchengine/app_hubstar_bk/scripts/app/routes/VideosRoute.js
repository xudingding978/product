define([
    'ember',
    'models/VideoModel'
], function(
        Ember,
        VideoModel
        ) {
    "use strict";

    var VideosRoute = Ember.Route.extend({
        //     controller: ApplicationController,
        setupController: function(IndexController, model) {

        },
        model: function() {
            return VideoModel.find();
        }


    });
    return VideosRoute;
});
