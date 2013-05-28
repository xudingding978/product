define([
    'ember',
    'controllers/SearchsController',
    'models/SearchModel'

], function(
        Ember,
        SearchsController,
        SearchModel

        ) {
    "use strict";

    var SearchRoute = Ember.Route.extend({
        setupController: function() {
            this.controllerFor('searchs').set('model', SearchModel.find());
        },
//        model: function() {
//
//            return SearchModel.find();
//        },
        renderTemplate: function() {
            this.render('index', {
                into: "application"
            });
            this.render('searchs', {
                into: "index"
            });


        }
    });
    return SearchRoute;
});