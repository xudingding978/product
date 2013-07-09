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
       

            if (model.id === undefined ||model.id==="") {
                var address = document.URL;
                var id = address.split("#")[1].split("/")[3];
   //             console.log(id);
            } else {
                var id = model.id;

            }
            this.controllerFor('user').set('switchPhoto', false);
            this.controllerFor('insideCollection').selectModelForUser(id);
            this.controllerFor('insideCollection').set('canEdit', true);


        },
        model: function(params) {
    
            this.controllerFor('user').set('switchPhoto', false);
            var address = document.URL;
            var user_id = address.split("#")[1].split("/")[2];
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
