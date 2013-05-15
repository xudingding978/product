define([
    'ember', 
    'models/ProfileModel',
    "controllers/ProfileNewController"

], function(
        Ember, 
        ProfileModel,
        ProfileNewController
        ) {
    "use strict";

    var NewRoute = Ember.Route.extend({
//        setupController: function(ProfileNewController, ProfileModel) {
//        },
        renderTemplate: function() {
            this.render('profileNew', {
                into: "application"
            });
        },
        model: function() {
            return ProfileModel;
        }
//        events: {
//            save: function() {
//              this.controllerFor('ProfileController').set('selected', model);
//             var new_name = this.$("#profile_name").val();
//                var newProfile = ProfileModel.createRecord({"profile_name":"aaaa"});
//                //   var newProfile = this.modelFor('profile');
//                this.transitionTo('profile', newProfile);
//
//            }
//        }
    });
    return NewRoute;
});