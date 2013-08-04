define([
    'ember'

], function(
        Ember

        ) {
    "use strict";

    var SearchIndexRoute = Ember.Route.extend({
        redirect: function() {





        },
        activate: function() {

            App.set("isLogin", true);

        },
        deactivate: function() {

        },
        renderTemplate: function() {

        }

    });
    return SearchIndexRoute;
});
