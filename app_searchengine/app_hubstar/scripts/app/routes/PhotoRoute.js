define([
    'ember',
    'models/PhotoModel'
], function(
        Ember,
        PhotoModel
        ) {
    "use strict";

    var PhotoRoute = Ember.Route.extend({
        //     controller: ApplicationController,
        setupController: function(controller, model) {
        },
        model: function(params) {
            return PhotoModel.find(params.photo_id);
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

            this.render('photo', {
                into: "index"
            });
        }

    });
    return PhotoRoute;
});
