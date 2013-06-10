
define([
    'ember',
    'models/MegaModel'
], function(
        Ember,
        MegaModel
        ) {
    "use strict";
    var IndexIndexRoute = Ember.Route.extend({
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
                into: "index"
 
            });

//            this.render('status', {
//                into: "masonry",
//                controller: controller
//            });

        }

    });
    return IndexIndexRoute;
});
