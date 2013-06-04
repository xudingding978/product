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

            this.transitionTo('index');
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
