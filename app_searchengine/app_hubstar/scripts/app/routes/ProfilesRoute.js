define([
    'ember',
    'controllers/ProfilesController',
    'models/ProfileModel'
], function(
        Ember,
        ApplicationController,
        ProfileModel
        ) {
    "use strict";
    var ProfilesRoute = Ember.Route.extend({
        //     controller: ApplicationController,
//        setupController: function(controller, ProfileModel) {
//            this.controllerFor('application').set('islogin', true);
//            this.controllerFor('application').set('popup', false);
//            this.controllerFor('application').set('isotherpage', true);
//            this.controllerFor('searchs').setLoginImge();
//            this.controllerFor('application').set('isotherpage', true);
//        },
//        activate: function() {
//
//        },
//        model: function() {
//            return ProfileModel.find();
//        },
//        renderTemplate: function() {
//            this.render('profiles', {
//                into: "application"
//            });
//        }
    });
    return ProfilesRoute;
});
