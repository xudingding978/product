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
            localStorage.checkUser = "";
            this.controllerFor('searchs').defaultSearch();
        },
        events: {
            transitionToPhoto: function(id) {
                this.transitionTo("photo", MegaModel.find(id));
            }
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
