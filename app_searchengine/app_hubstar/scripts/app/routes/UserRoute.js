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
            App.set('editingMode', 'user');
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


                //     var data = MegaModel.find(collection_id);
                var address = document.URL;
                var user_id = address.split("#")[1].split("/")[2];
                var data = App.Collection.find(collection_id);
                this.transitionTo("collection", data);

                //             console.log(data);
            }
        },
        redirect: function() {
            if ((localStorage.getItem("loginStatus") === null) || (localStorage.loginStatus === "")) {

                this.transitionTo('indexIndex');
                this.controllerFor('application').set('popup', true);
            }
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
                outlet: "user",
                into: "application"
            });

        }

    });
    return UsersRoute;
});
