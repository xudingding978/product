define([
    'ember',
    'controllers/tabListController',
    'models/PostModel'
], function(
        Ember,
        tabListController,
        PostModel
        ) {
    "use strict";

    var IndexRoute = Ember.Route.extend({
        model: function() {
            return PostModel.find();
        },
        setupController: function(indexController, model) {
            tabListController.showFirstTab();
        },
        renderTemplate: function() {
            this.render('selectedTab', {
                into: "application",
                controller: tabListController
            });
        }
    });

    return IndexRoute;
});