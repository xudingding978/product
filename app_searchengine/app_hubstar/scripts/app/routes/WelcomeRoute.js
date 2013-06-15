define([
    'ember',
    'models/MegaModel'

], function(
        Ember,
        MegaModel
        ) {
    "use strict";

    var WelcomeRoute = Ember.Route.extend({
//        model: function() {
//            return MegaModel.find();
//        },
//        setupController: function(DataController) {
//
//        },
        renderTemplate: function() {
            this.render('welcome', {
                into: 'application'
            });
        }
    });
    return WelcomeRoute;
});
