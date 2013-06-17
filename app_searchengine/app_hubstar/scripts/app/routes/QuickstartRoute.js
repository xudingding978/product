
define([
    'ember',
    'models/MegaModel'

], function(
        Ember,
        MegaModel
        ) {
    "use strict";

    var QuickstartRoute = Ember.Route.extend({
        redirect: function() {




            if (localStorage.checkUser === "newUser") {



            } else {

                this.transitionTo('searchIndex');

            }


        },
        renderTemplate: function() {
            this.render('quickstart', {
                into: 'application'
            });
        }
    });
    return QuickstartRoute;
});
