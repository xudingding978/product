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
