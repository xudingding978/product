define([
    'ember',
    'controllers/SearchsController',
    'models/MegaModel'

], function(
        Ember,
        SearchsController,
        MegaModel

        ) {
    "use strict";

    var SearchRoute = Ember.Route.extend({
        setupController: function() {            
            var d = MegaModel.find();
            this.controllerFor('searchs').set('content', d);
        },

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