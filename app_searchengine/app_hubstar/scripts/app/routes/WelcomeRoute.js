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
        activate: function() {
            $(window).scrollTop(0);
            $('#masonry_container').attr('style', "display:none");
               $('#discovery_search_bar_wrapper').attr('style', "display:none");
            App.set("isLogin", true);
        },
        setupController: function() {
            this.controllerFor('searchs').defaultSearch();
            this.controllerFor('index').setLogin();

            this.controllerFor('application').set('islogin', true);

            this.controllerFor('status').set('islogin', true);
            this.controllerFor('application').set('popup', false);
            this.controllerFor('application').set('isotherpage', false);



            setTimeout(function() {
                $(window).scrollTop(0);
                $('#masonry_container').attr('style', "display:none");
                    $('#discovery_search_bar_wrapper').attr('style', "display:none");
            }, 100);

        },
        renderTemplate: function() {
            this.render('welcome', {
                outlet: 'welcome',
                into: 'application'
            });
        }
    });
    return WelcomeRoute;
});
