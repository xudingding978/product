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
        redirect: function() {




            if ((localStorage.getItem("loginStatus") === null) || (localStorage.loginStatus === "")) {
                alert('please login in');
                this.transitionTo('indexIndex');

            } else {

                this.transitionTo('profiles');

            }


        },
        model: function(params) {

            return ProfileModel.find(params.profile_id);
        }, renderTemplate: function() {
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
