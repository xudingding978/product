define([
    'ember',
    'models/MegaModel'

], function(
        Ember,
        MegaModel
        ) {
    "use strict";

    var DataRoute = Ember.Route.extend({
        model: function() {
            return MegaModel.find();
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