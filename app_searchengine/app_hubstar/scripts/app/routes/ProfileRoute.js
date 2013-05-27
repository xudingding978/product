define([
    'ember',
    'models/ProfileModel',
    'controllers/ProfileController'
], function(
        Ember,
        ProfileModel,
        ProfileController
        ) {
    "use strict";
    var ProfileRoute = Ember.Route.extend({
        setupController: function(ProfileController) {
            ProfileController.setLocalLoginRecrod();
            console.log("this is local storage: ");
            console.log(localStorage.lastname);
            console.log("this is local arr length: ");
            console.log(ProfileController.imageArray);
        },
        model: function(params) {
            return ProfileModel.find(params.profile_id);
        },
        renderTemplate: function() {
            this.render('profile', {
                into: "application"
            });
            this.render('image', {
                into: 'profile',
                controller: 'photoUpload'
            });
        }

    });
    return ProfileRoute;
});
