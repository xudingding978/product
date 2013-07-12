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
            this.controllerFor('mega').getInitData(d);
        },
        model: function(params) {
            return MegaModel.find(params.photo_id);
        },
        activate: function() {
            setTimeout(function() {
                $("body").css("overflow", "hidden");
                $('#footer').attr("style", "display:none");
            }, 100);
        },
        deactivate: function() {


            $("body").css("overflow", "auto");
            $('#footer').attr("style", "display:block");
        },
        renderTemplate: function() {
            var controller = this.controllerFor('mega');
//            this.render('photo', {
//                into: "index",
//                controller: controller
//            });


            this.render("photo", {
                outlet: "photos",
                into: "application",
                controller: controller
            });
        }

    });
    return PhotoRoute;
});
