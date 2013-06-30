define([
    'ember',
    'models/MegaModel',
    'models/ProfileModel',
    'controllers/ProfileController'
], function(
        Ember,
        MegaModel,
        ProfileModel,
        ProfileController
        ) {
    "use strict";
    //   var kink;
    var ProfileRoute = Ember.Route.extend({
        setupController: function(ProfileController, model) {
            //     console.log(model.id);
            ProfileController.setLocalLoginRecrod();
            console.log(model);
            ProfileController.setModel(model);

            this.controllerFor('application').set('islogin', true);
            this.controllerFor('application').set('popup', false);
            this.controllerFor('application').set('isotherpage', true);
            this.controllerFor('searchs').setLoginImge();
            this.controllerFor('application').set('isotherpage', true);
            this.controllerFor('profile').set('switchPhoto', true);
        },
        events: {
            transitionToCollectionPhoto: function(collection_id) {

                var address = document.URL;
                var user_id = address.split("#")[1].split("/")[2];
                //      console.log(collection_id);
                var data = MegaModel.find(collection_id);
                this.transitionTo("profileCollection", data);
            }
        },
        deactivate: function() {

        },
        activate: function() {
            $(window).scrollTop(0);
            $('#discovery_search_bar_wrapper').attr('style', "display:none");
            $('#masonry_container').attr('style', "display:none");
            $(function() {
                $('#masonry_container').masonry('remove', $('.noStyle1'));
            });
        },
        model: function(params) {
            //  alert(333);
            //        console.log(ProfileModel.find(params.profile_id));
            console.log(ProfileModel.find(params.profile_id));
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
