
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
        setupController: function() {
            this.controllerFor('searchs').defaultSearch();
            this.controllerFor('index').setLogin();

            this.controllerFor('application').set('islogin', true);
            this.controllerFor('application').set('firstTimeUser', true);

            setTimeout(function() {
                $(window).scrollTop(0);
                $('#masonry_container').attr('style', "display:none");
            }, 100);

        },
        renderTemplate: function() {
            this.render('quickstart', {
                outlet: 'quickstart',
                into: 'application'
            });
        }
    });
    return QuickstartRoute;
});
