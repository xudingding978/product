define([
    'ember',
    'models/CollectionModel',
    'models/MegaModel',
    'models/ProfileModel'
], function(
        Ember,
        CollectionModel,
        MegaModel,
        ProfileModel
        ) {
    "use strict";

    var CollectionRoute = Ember.Route.extend({
        setupController: function(controller, model) {

//            this.controllerFor('application').set('islogin', true);
//            this.controllerFor('application').set('popup', false);
            this.controllerFor('user').set('switchPhoto', false);
            this.controllerFor('insideCollection').selectModel();
             this.controllerFor('insideCollection').set('canEdit', true);
            

        },
        model: function(params) {

            this.controllerFor('user').set('switchPhoto', false);

            var address = document.URL;
            var user_id = address.split("#")[1].split("/")[2];
       //     console.log();
            return MegaModel.find({RquireType: "personalCollection", user_id: user_id, collection_id: params.collection_id});
        },
        events: {
            transitionToPhoto: function(id) {
                this.transitionTo("photo", MegaModel.find(id));
            },
            transitionToProfile: function(id) {

                this.transitionTo("profile", ProfileModel.find(id));
            }
        },
        redirect: function() {

        },
        deactivate: function() {

        },
        activate: function() {

        },
        renderTemplate: function() {


//            this.render('user', {
//                outlet: "users",
//                into: "application"
//            });

        }

    });
    return CollectionRoute;
});