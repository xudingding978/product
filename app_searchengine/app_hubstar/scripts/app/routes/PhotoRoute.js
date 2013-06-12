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
            // alert(model.id);
            //   controller.set('model', model);
            console.log(MegaModel.find());
            //    this.controllerFor('mega').get("content").pushObject(MegaModel.find(model.id));
                this.controllerFor('mega').actionOn(MegaModel.find(model.id));
      //      this.controllerFor('mega').set('model', MegaModel.find());
            this.controllerFor('photoDisplayArea').set('model', MegaModel.find(model.id));

        },
//        model: function() {
//            console.log("second");
//            return  MegaModel.find();
//        },
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
