define([
    'ember',
    'controllers/IndexController',
    'models/SearchModel'
], function(
        Ember,
        IndexController,
        SearchModel
        ) {
    "use strict";

    var IndexRoute = Ember.Route.extend({
        //     controller: ApplicationController,
        setupController: function(IndexController, model) {
//            IndexController.test();
        },
        model: function() {
            return SearchModel.find();

        },
        renderTemplate: function() {
            this.render('index', {
                into: "application"
            });
        }

    });
    return IndexRoute;
});
