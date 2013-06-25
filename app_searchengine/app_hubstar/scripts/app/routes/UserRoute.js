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
            this.controllerFor('searchs').setLoginImge();
            this.controllerFor('application').set('isotherpage', true);
            this.controller.set('switchPhoto', true);

        },
        model: function(params) {


            return UserModel.find(params.user_id);
         //        alert(666);
        },
        events: {
//            transitionToCollectionPhoto: function() {
//                var address = document.URL;
//                var user_id = address.split("#")[1].split("/")[2];
//                console.log(user_id);
//                this.transitionTo("collection", CollectionModel.find(user_id));
//            },
//            test11: function(id) {
//                console.log("id");
//            }
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

            $(window).scrollTop(0);
            $('#discovery_search_bar_wrapper').attr('style', "display:none");
            $('#masonry_container').attr('style', "display:none");
            $(function() {
                $('#masonry_container').masonry('remove', $('.noStyle1'));
            });

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