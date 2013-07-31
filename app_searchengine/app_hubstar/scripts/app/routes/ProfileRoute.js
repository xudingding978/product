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
   
            App.set('editingMode', 'profile');
            ProfileController.setLocalLoginRecrod();
            /******************  partner cehcking*******************/
            ProfileController.set('contactChecking', false);
            ProfileController.set('collectionTag', true);
            ProfileController.set('partnerTag', false);
            /*************************            partner cehcking           ***********8*/

            this.controllerFor('application').set('islogin', true);
            this.controllerFor('application').set('popup', false);
            this.controllerFor('application').set('isotherpage', true);
            this.controllerFor('searchs').setLoginImge();
            this.controllerFor('profile').set('switchPhoto', true);


            ProfileController.setProfile(model.id);
        },
        events: {
            transitionToCollectionPhoto: function(collection_id) {
                var address = document.URL;
                var user_id = address.split("#")[1].split("/")[2];
                var profile = App.Profile.find(user_id);
                for (var i = 0; i < profile.get('collections').get("length"); i++) {
                    var data = profile.get('collections').objectAt(i);
                    if (data.id === collection_id) {
                        break;
                    }
                }
                this.transitionTo("profileCollection", data);
            }
        },
        redirect: function() {
            if ((localStorage.getItem("loginStatus") === null) || (localStorage.loginStatus === "")) {

                this.transitionTo('indexIndex');
                this.controllerFor('application').set('popup', true);

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
        renderTemplate: function() {
            this.render('profile', {
                outlet: "profile",
                into: "application"
            });
        }

    });
    return ProfileRoute;
});
