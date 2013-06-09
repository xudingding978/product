define([
    'ember',
    'models/SearchModel',
    'models/MegaModel'
], function(
        Ember,
          SearchModel,
        Object
        ) {
    "use strict";
    var IndexIndexRoute = Ember.Route.extend({
        redirect: function() {
<<<<<<< HEAD
            this.transitionTo('index');
=======




            if ((localStorage.getItem("loginStatus") === null) || (localStorage.loginStatus === "")) {
                this.transitionTo('index');

            } else {
                alert('loginred');
                this.transitionTo('searchIndex');

            }

>>>>>>> f7dd3d4e930511a3e00bcb817cceb0e1b4cd5f8f
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
