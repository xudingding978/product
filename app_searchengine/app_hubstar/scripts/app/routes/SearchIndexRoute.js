define([
    'ember'

], function(
        Ember

        ) {
    "use strict";

    var SearchIndexRoute = Ember.Route.extend({
        redirect: function() {




            if ((localStorage.getItem("loginStatus") === null) || (localStorage.loginStatus === "")) {
                alert('please login in');
                this.transitionTo('indexIndex');

            } else {

                this.transitionTo('searchIndex');

            }


        },
        activate: function() {
            App.set("isLogin", true);

        },
        deactivate: function() {

        },
        renderTemplate: function() {
            var controller = this.controllerFor('application');
            this.render('index', {
                into: "application"
            });
            this.render('searchs', {
                into: "index"
            });
//            this.render('status', {
//                into: "masonry",
//                controller: controller
//            });
        }

    });
    return SearchIndexRoute;
});
