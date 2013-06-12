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
        
                this.controllerFor('mega').actionOn(MegaModel.find(model.id));

            this.controllerFor('photoDisplayArea').set('model', MegaModel.find(model.id));

        },
<<<<<<< HEAD
        model: function(params) {
            return PhotoModel.find(params.photo_id);
        },
=======
//        model: function() {
//            console.log("second");
//            return  MegaModel.find();
//        },
>>>>>>> db253c0e45ccd7cd9a8d35e62a4ee6181290d62e
        activate: function() {
            $("body").css("overflow", "hidden");
            $('#footer').attr("style", "display:none");
        },
        deactivate: function() {
            $("body").css("overflow", "auto");
            $('#footer').attr("style", "display:block");
        },
        renderTemplate: function() {
            console.log("next");
            var controller = this.controllerFor('mega');
            this.render('photo', {
                into: "index",
                controller: controller
            });
        }

    });
    return PhotoRoute;
});
