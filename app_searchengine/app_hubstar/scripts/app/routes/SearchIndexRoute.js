define([
    'ember'

], function(
        Ember

        ) {
    "use strict";

    var SearchIndexRoute = Ember.Route.extend({
        redirect: function() {

            this.transitionTo('searchs');
        },
        activate: function() {
            //           localStorage.isLogin = true;
            App.set("isLogin", true);
        },
        deactivate: function() {

        },
        renderTemplate: function() {
            this.render('index', {
                into: "application"
            });
            this.render('searchs', {
                into: "index"
            });
        }

    });
    return SearchIndexRoute;
});
