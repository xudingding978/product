define([
    'ember',
    'models/SearchModel'
], function(
        Ember,
        SearchModel
        ) {
    "use strict";
    var IndexIndexRoute = Ember.Route.extend({
        redirect: function() {




            if (localStorage.getItem("loginStatus") === null || (localStorage.loginStatus === "")) {
                this.transitionTo('indexIndex');

            } else {
                alert('loginred');
                this.transitionTo('searchIndex');

            }

        },
        model: function() {
            return SearchModel.find();
        },
        activate: function() {
//      localStorage.isLogin = false;

            App.set("isLogin", false);
        },
        deactivate: function() {

//         localStorage.isLogin = true;


            App.set("isLogin", true);
        },
        renderTemplate: function() {
            var controller = this.controllerFor('application');

            this.render('index', {
                into: "application"
            });

            this.render('default', {
                into: "index",
                controller: controller
            });



        }

    });
    return IndexIndexRoute;
});
