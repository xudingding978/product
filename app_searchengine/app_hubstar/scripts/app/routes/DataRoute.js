define([
    'ember',
    'models/SearchModel'

], function(
        Ember,
        SearchModel
        ) {
    "use strict";

    var DataRoute = Ember.Route.extend({
        model: function() {
            return SearchModel.find();
        },
        setupController: function(DataController) {

        },
        renderTemplate: function() {
            this.render('dataIndex', {
                into: 'application'
            });
        }
    });
    return DataRoute;
});