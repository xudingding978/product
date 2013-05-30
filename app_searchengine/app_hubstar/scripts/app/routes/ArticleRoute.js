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

        renderTemplate: function() {
            this.render('article', {
                into: "index"
            });
        }

    });
    return LightBoxRoute;
});
