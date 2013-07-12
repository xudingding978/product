define([
    'ember',
    'models/MegaModel',
    'models/ArticleModel'
], function(
        Ember,
        MegaModel,
        ArticleModel
        ) {
    "use strict";

    var ArticleRoute = Ember.Route.extend({
        //     controller: ApplicationController,
        setupController: function(controller, model) {
            var d = MegaModel.find(model.id);
            controller.getInitData(d);
        },
        model: function(params) {
            return MegaModel.find(params.article_id);
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


            this.render("article", {
                outlet: "articles",
                into: "application",
            });
        }

    });
    return ArticleRoute;
});
