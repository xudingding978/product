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
        setupController: function(ProfileController, model) {
            ProfileController.setLocalLoginRecrod();
          
        },
        model: function(params) {

            return ProfileModel.find(params.profile_id);
        },
        renderTemplate: function() {
            this.render('profile', {
                into: "application"
            });
            this.render('image', {
                outlet: "photoUploader",
                into: 'profile',
                controller: 'photoUpload'
            }
            );
        }

    });
    return ProfileRoute;
});
