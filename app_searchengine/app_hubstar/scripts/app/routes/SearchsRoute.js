define([
    'ember',
    'controllers/SearchController',
    'models/SearchModel'

], function(
        Ember,
        SearchController,
        SearchModel

        ) {
    "use strict";

    var SearchRoute = Ember.Route.extend({
        setupController: function() {
            this.controllerFor('search').set('model', SearchModel.find());
        },
//        model: function() {
//
//            return SearchModel.find();
//        },
        renderTemplate: function() {

            this.render('search', {
                into: "index"
            });

        }
    });
    return SearchRoute;
});