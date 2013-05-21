define([
    'ember',
    'controllers/IndexController',
    'models/ProfileModel'
], function(
        Ember,
        IndexController,
        ProfileModel
        ) {
    "use strict";

    var IndexRoute = Ember.Route.extend({
        //     controller: ApplicationController,
        setupController: function(IndexController, model) {
//            IndexController.test();
        },
        model: function() {
            return ProfileModel.find();

        },
        renderTemplate: function() {
            this.render('index', {
                into: "application"
            });
        }

    });
    return IndexRoute;
});
