define([
    'ember',
    'models/VideoModel'
], function(
        Ember,
        VideoModel
        ) {
    "use strict";

    var VideoRoute = Ember.Route.extend({
        //     controller: ApplicationController,
        setupController: function(IndexController, model) {

        },
        model: function(params) {
            return VideoModel.find(params.video_id);
        },
        activate: function() {
             $("body").css("overflow", "hidden");
             $('#footer').attr("style", "display:none");
        },
        deactivate: function() {
             $("body").css("overflow", "auto");
             $('#footer').attr("style", "display:block");
        },
        renderTemplate: function() {
            this.render('video', {
                into: "index"
            });
        }

    });
    return VideoRoute;
});
