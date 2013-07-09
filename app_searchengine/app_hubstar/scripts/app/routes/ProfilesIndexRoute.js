define([
    'ember'

], function(
        Ember

        ) {
    "use strict";

    var ProfileIndexRoute = Ember.Route.extend({
        setupController: function(controller, model) {

            this.controllerFor('profile').set('switchPhoto', true);
        },
        redirect: function() {

            if ((localStorage.getItem("loginStatus") === null) || (localStorage.loginStatus === "")) {

                this.transitionTo('indexIndex');
                this.controllerFor('application').set('popup', true);

            } else {

                this.transitionTo('profiles');

            }


        },
        deactivate: function() {
            //     $('.nothingHere').attr('style', 'display:none');
        },
        activate: function() {
            $('.nothingHere').attr('style', 'display:block');
        },
//        renderTemplate: function() {
//
//            this.render('profiles', {
//                into: "application"
//            });
//        }

    });
    return ProfileIndexRoute;
});
