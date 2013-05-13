define([
    'ember', 'models/ProfileModel',
    "controllers/ProfileNewController"

], function(
        Ember, ProfileModel,
        ProfileNewController

        ) {
    "use strict";

    var NewRoute = Ember.Route.extend({
        renderTemplate: function() {

            this.render('profileNew', {
                into: "application"
            });
        },
        model: function() {
            //      console.log("profileModel 111111111    "+ProfileModel.find());
            return ProfileModel.find();

        },
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