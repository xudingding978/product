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
    var loginChecking = true;
    var SearchRoute = Ember.Route.extend({
        setupController: function() {

            //     localStorage.checkUser = "";
            this.controllerFor('searchs').defaultSearch();
            this.controllerFor('index').setLogin();
            console.log("search route");

        },
        events: {
            transitionToPhoto: function(id) {
                this.transitionTo("photo", MegaModel.find(id));
            }
        },
                
        renderTemplate: function() {
            this.render('masonry', {
                outlet: "masonry",
                into: "application"
            });


        }
    });
    return SearchRoute;
});
