define([
    'ember',
    'models/UserModel',
    'models/CollectionModel',
    'models/MegaModel'

], function(
        Ember,
        UserModel,
        CollectionModel,
        MegaModel
        ) {
    "use strict";

    var UsersRoute = Ember.Route.extend({
        setupController: function(controller, model) {
            //  alert('sdddddd');

            this.controllerFor('application').set('islogin', true);
            this.controllerFor('application').set('popup', false);
            this.controllerFor('application').set('isotherpage', true);
            this.controllerFor('searchs').setLoginImge();
            this.controllerFor('application').set('isotherpage', true);
            this.controller.set('switchPhoto', true);
            this.controllerFor('user').setUser();
        },
        model: function(params) {
            //  alert(params.user_id);
            return UserModel.find(params.user_id);
        },
        events: {
            transitionToCollectionPhoto: function(collection_id) {

                var address = document.URL;
                var user_id = address.split("#")[1].split("/")[2];
                console.log(collection_id);
                var data = MegaModel.find(collection_id);
                this.transitionTo("collection", data);
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
