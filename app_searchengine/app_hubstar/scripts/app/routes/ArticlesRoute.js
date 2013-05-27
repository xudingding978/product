define([
    'ember',
    'models/ArticleModel'
], function(
        Ember,
        ArticleModel
        ) {
    "use strict";

    var LightBoxRoute = Ember.Route.extend({
        //     controller: ApplicationController,
        setupController: function(IndexController, model) {

        },
        model: function(params) {
            return ArticleModel.find(params.article_id);
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
            this.render('articles', {
                into: "index"
            });
        }

    });
    return LightBoxRoute;
});
