define([
    'ember',
    'models/UserModel',
    'models/CollectionModel'
], function(
        Ember,
        UserModel,
        CollectionModel
        ) {
    "use strict";

    var UsersRoute = Ember.Route.extend({
        setupController: function(controller, model) {
            //  controller.set("indexPage",true);
            //   controller.get('application').remove();
            this.controllerFor('application').set('islogin', true);
            this.controllerFor('application').set('popup', false);
            this.controllerFor('application').set('isotherpage', true);

        },
        model: function(params) {
            return UserModel.find(params.user_id);
        },
        events: {
            transitionToCollectionPhoto: function(id) {
                //      alert(id);
                this.transitionTo("collection", CollectionModel.find(id));
            }
        },
        redirect: function() {

//
//            if ((localStorage.getItem("loginStatus") === null) || (localStorage.loginStatus === "")) {
//
//                this.transitionTo('indexIndex');
//
//            } else {
//
//                this.transitionTo('users');
//
//            }


        },
        deactivate: function() {

        },
        activate: function() {

        },
        renderTemplate: function() {

            this.render('user', {
                outlet: "users",
                into: "application"
            });

        }

    });
    return UsersRoute;
});