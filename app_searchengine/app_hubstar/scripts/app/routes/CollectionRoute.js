define([
    'ember',
    'models/CollectionModel'
], function(
        Ember,
        CollectionModel
        ) {
    "use strict";

    var CollectionRoute = Ember.Route.extend({
        setupController: function(controller, model) {

//            this.controllerFor('application').set('islogin', true);
//            this.controllerFor('application').set('popup', false);
            this.controllerFor('user').set('switchPhoto', false);
            this.controllerFor('insideCollection').selectModel();

        },
        model: function(params) {
            var address = document.URL;
            var user_id = address.split("#")[1].split("/")[2];
            return CollectionModel.find({user_id: user_id, collection_id: params.collection_id});
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