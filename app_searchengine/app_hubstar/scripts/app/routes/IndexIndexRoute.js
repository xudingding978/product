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




            if (localStorage.loginStatus !== "") {
                alert('loginred');
                this.transitionTo('searchIndex');

            } else {
                this.transitionTo('index');
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

            this.render('index', {
                into: "application"
            });

            this.render('default', {
                into: "index"
            });



        }

    });
    return IndexIndexRoute;
});
