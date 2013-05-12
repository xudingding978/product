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
        controller: ApplicationController,
        setupController: function(controller, ProfileModel) {

        },
        model: function() {
       //      console.log("profileModel 111111111    "+ProfileModel.find());
            return ProfileModel.find();

        },
        renderTemplate: function() {

            this.render('profiles', {
                into: "application"
            });
        },
        events: {
            newProfile: function() {
//                var newProfile = ProfileModel.createRecord({"id":"new"});
//                console.log("profileModel  2222222222222   "+profileModel);
//                var profile = profileModel.createRecord("profiles"{
//                    id: "4"
//                });
                this.transitionTo('profileNew');

            }
        }
    });
    return ProfilesRoute;
});
