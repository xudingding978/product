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
