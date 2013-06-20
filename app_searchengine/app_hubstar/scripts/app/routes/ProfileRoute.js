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
    //   var kink;
    var ProfileRoute = Ember.Route.extend({
        setupController: function(ProfileController, model) {
            console.log(model.id);
            ProfileController.setLocalLoginRecrod();
            ProfileController.setModel(model);
        },
//        redirect: function() {
//
//
////            if ((localStorage.getItem("loginStatus") === null) || (localStorage.loginStatus === "")) {
////
////                this.transitionTo('indexIndex');
////
////            } else {
//
//                this.transitionTo('profiles');
//
////            }
//
//
//        },
        deactivate: function() {

        },
        activate: function() {
            $('#discovery_search_bar_wrapper').attr('style', "display:none");
            $('#masonry_container').attr('style', "display:none");
        },
        model: function(params) {

            return ProfileModel.find(params.profile_id);
        },
        renderTemplate: function() {
            this.render('profile', {
                outlet: "profiles",
                into: "application"
            });
//            this.render('image', {
//                outlet: "photoUploader",
//                into: 'profile',
//                controller: 'photoUpload'
//            }
//            );
        }

    });
    return ProfileRoute;
});
