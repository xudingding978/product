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
  

        setupController: function(IndexController, model) {

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
