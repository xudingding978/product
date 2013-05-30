define([
    'ember',
    'models/PostModel'

], function(
        Ember,
        PostModel
        ) {
    "use strict";

    var DataRoute = Ember.Route.extend({
        model: function() {
            return PostModel.find();
        },
        setupController: function(DataController) {

        },
        renderTemplate: function() {
            this.render('data', {
                into: 'application'
            });
        }
    });
    return DataRoute;
});