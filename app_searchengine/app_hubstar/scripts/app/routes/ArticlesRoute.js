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
        model: function() {
            return ArticleModel.find();
        }


    });
    return LightBoxRoute;
});
