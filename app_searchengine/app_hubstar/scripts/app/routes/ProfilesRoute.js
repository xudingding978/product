define([
    'ember',
    'controllers/ProfilesController',
    'models/ProfileModel'
], function(
        Ember,
        ProfilesController,
        ProfileModel
        ) {
    "use strict";
    var ProfilesRoute = Ember.Route.extend({
        //     controller: ApplicationController,
        setupController: function(controller, model) {
            console.log(model);
            this.controllerFor('application').set('islogin', true);
            this.controllerFor('application').set('popup', false);
            this.controllerFor('application').set('isotherpage', true);
            this.controllerFor('searchs').setLoginImge();
            this.controllerFor('application').set('isotherpage', true);
        },
        activate: function() {

        },
        model: function() {
            return App.Profile.find();
        },
        renderTemplate: function() {
            this.render('profiles', {
                outlet: "profiles",
                into: "application"
            });
        }
    });
    return ProfilesRoute;
});
