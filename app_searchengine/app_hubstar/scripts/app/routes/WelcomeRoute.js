define([
    'ember',
    'models/MegaModel'

], function(
        Ember,
        MegaModel
        ) {
    "use strict";

    var WelcomeRoute = Ember.Route.extend({
        redirect: function() {




            if (localStorage.checkUser === "newUser") {



            } else {

                this.transitionTo('searchIndex');

            }


        },
        setupController: function() {


            this.controllerFor('searchs').defaultSearch();

        },
        renderTemplate: function() {
            this.render('welcome', {
                into: 'application'
            });
        }
    });
    return WelcomeRoute;
});
