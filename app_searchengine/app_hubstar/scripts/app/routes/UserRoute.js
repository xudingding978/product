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
            $('#discovery_search_bar_wrapper').attr('style', "display:none");
            $('#masonry_container').attr('style', "display:none");
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