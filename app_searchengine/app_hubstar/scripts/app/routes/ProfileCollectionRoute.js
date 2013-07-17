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

            if (model.id === undefined || model.id === "") {
                var address = document.URL;
                var id = address.split("#")[1].split("/")[3];
            } else {
                var id = model.id;

            }
            this.controllerFor('masonryCollectionItems').selectModelForProfile(id);
            this.controllerFor('profile').set('switchPhoto', false);
            this.controllerFor('masonryCollectionItems').set('uploadStuff', true);
            this.controllerFor('masonryCollectionItems').set('canEditbyOwner', true);
        },
        model: function(params) {
            this.controllerFor('profile').set('switchPhoto', false);
            var address = document.URL;
            var owner_id = address.split("#")[1].split("/")[2];
            console.log(params.profileCollection_id);
            return MegaModel.find({RquireType: "collection", collection_id: params.profileCollection_id, owner_profile_id: owner_id});

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



        }

    });
    return CollectionRoute;
});