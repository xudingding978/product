define([
    'ember',
    'models/PhotoModel'
], function(
        Ember,
        PhotoModel
        ) {
    "use strict";
    var PhotoRoute = Ember.Route.extend({
        setupController: function(controller, model) {
            this.controllerFor('photo').getFirstPhoto(model.id);
            this.controllerFor('photo').setFirestPhoto();
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
