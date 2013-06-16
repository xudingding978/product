
define([
    'ember',
    'models/MegaModel'

], function(
        Ember,
        MegaModel
        ) {
    "use strict";

    var QuickstartRoute = Ember.Route.extend({
//        model: function() {
//            return MegaModel.find();
//        },
//        setupController: function(DataController) {
//
//        },
        renderTemplate: function() {
            this.render('quickstart', {
                into: 'application'
            });
        }
    });
    return QuickstartRoute;
});
