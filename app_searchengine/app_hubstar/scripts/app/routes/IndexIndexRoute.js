
define([
    'ember',
    'models/MegaModel'
], function(
        Ember,
        MegaModel
        ) {
    "use strict";
    var IndexIndexRoute = Ember.Route.extend({
        setupController: function() {


            this.controllerFor('application').set('islogin', false);

            this.controllerFor('status').set('islogin', false);
            this.controllerFor('application').set('isotherpage', false);

            if (localStorage.getItem("loginStatus") === null || (localStorage.loginStatus === "")) {
                this.controllerFor('application').newSearch();
            }

        },
        events: {
            transitionToProfile: function() {
                this.controllerFor('application').set("popup", true);
            },
            transitionToPhoto: function() {
                this.controllerFor('application').set("popup", true);
            },
            transitionToArticle: function() {
                this.controllerFor('application').set("popup", true);
            }
        },
        redirect: function() {




            if (localStorage.getItem("loginStatus") === null || (localStorage.loginStatus === "")) {
                this.transitionTo('indexIndex');

            } else {

                this.transitionTo('searchIndex');

            }

        },
        model: function() {
            return MegaModel.find();
        },
        activate: function() {


            App.set("isLogin", false);
        },
        deactivate: function() {



            App.set("isLogin", true);
        },
    });
    return IndexIndexRoute;
});
