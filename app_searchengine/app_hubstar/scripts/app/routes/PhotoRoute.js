define([
    'ember',
    'models/MegaModel',
    'models/PhotoModel'
], function(
        Ember,
        MegaModel,
        PhotoModel
        ) {
    "use strict";
    var PhotoRoute = Ember.Route.extend({
        setupController: function(controller, model) {
            var d = MegaModel.find(model.id);
            this.controllerFor('mega').actionOn(d);

            //   this.controllerFor('mega').set('model', MegaModel.find(model.id));

        },
        model: function(params) {

            return MegaModel.find(params.photo_id);
        },
        activate: function() {
            $("body").css("overflow", "hidden");
            $('#footer').attr("style", "display:none");
        },
        deactivate: function() {
   //         alert(this.get("content"));


            $("body").css("overflow", "auto");
            $('#footer').attr("style", "display:block");
        },
        renderTemplate: function() {
            var controller = this.controllerFor('mega');
            this.render('photo', {
                into: "index",
                controller: controller
            });
        }

    });
    return PhotoRoute;
});
