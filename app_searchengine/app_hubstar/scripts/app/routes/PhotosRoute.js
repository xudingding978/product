define([
    'ember',
    'models/PhotoModel'
], function(
        Ember,
        PhotoModel
        ) {
    "use strict";

    var PhotosRoute = Ember.Route.extend({
        //     controller: ApplicationController,
        setupController: function(controller, model) {

     //   alert(model.type);
            //    this.controllerFor('photos').set('model', PhotoModel.find({id: "photo1"}));


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
            this.render('index', {
                into: "application"
            });
            this.render('photos', {
                into: "index"
            });
        }

    });
    return PhotosRoute;
});
