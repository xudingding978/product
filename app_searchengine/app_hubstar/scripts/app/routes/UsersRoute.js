define([
    'ember',
    'models/UserModel'
], function(
        Ember,
        UserModel
        ) {
    "use strict";

    var UsersRoute = Ember.Route.extend({
        setupController: function(controller, model) {
            //  controller.set("indexPage",true);
            this.controllerFor('application').set('islogin', true);
            this.controllerFor('application').set('popup', false);
            this.controllerFor('application').set('isotherpage', true);
            this.controllerFor('searchs').setLoginImge();
            this.controllerFor('application').set('isotherpage', true);
            //   controller.get('application').remove();
        },
//        model: function() {
//            //   console.log( UserModel.find());
//
//            return UserModel.find();
//        },
        activate: function() {

        },
        renderTemplate: function() {

            this.render('users', {
                outlet: 'users',
                into: "application"
            });

        }

    });
    return UsersRoute;
});