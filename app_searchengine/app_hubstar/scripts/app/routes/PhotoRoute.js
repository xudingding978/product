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

            this.controllerFor('photo').set('model', PhotoModel.find(model.id));
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
