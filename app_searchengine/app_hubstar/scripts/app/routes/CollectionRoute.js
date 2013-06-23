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
//            this.controllerFor('application').set('isotherpage', true);

        },
        model: function(params) {
              return CollectionModel.find(params.collection_id);
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