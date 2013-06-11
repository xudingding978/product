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
            //   controller.get('application').remove();
        },
        model: function(params) {
            return UserModel.find(params.user_id);
        },
        redirect: function() {


            if ((localStorage.getItem("loginStatus") === null) || (localStorage.loginStatus === "")) {
                alert('please login in');
                this.transitionTo('indexIndex');

            } else {

                this.transitionTo('users');

            }


        },
        renderTemplate: function() {

            this.render('user', {
                into: "application"
            });

        }

    });
    return UsersRoute;
});