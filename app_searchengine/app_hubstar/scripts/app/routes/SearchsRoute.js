define([
    'ember',
    'controllers/SearchsController',
    'models/MegaModel',
    'models/ProfileModel'

], function(
        Ember,
        SearchsController,
        MegaModel,
        ProfileModel

        ) {
    "use strict";
    var loginChecking = true;
    var SearchRoute = Ember.Route.extend({
        setupController: function() {

            this.controllerFor('searchs').defaultSearch();
            this.controllerFor('index').setLogin();
            this.controllerFor('application').set('islogin', true);
            this.controllerFor('status').set('islogin', true);
            this.controllerFor('application').set('popup', false);

        },
        events: {
            transitionToPhoto: function(id) {
                this.transitionTo("photo", MegaModel.find(id));
            },
            transitionToProfile: function(id) {
                console.log(id);
                this.transitionTo("profile", ProfileModel.find(id));
            }
        },
        redirect: function() {




            if (localStorage.getItem("loginStatus") === null || (localStorage.loginStatus === "")) {
                this.transitionTo('indexIndex');

            } else {

                this.transitionTo('searchIndex');

            }

        },
        activate: function() {
            //      alert(App.get("setHight"));


            $('#discovery_search_bar_wrapper').attr('style', "display:block;margin: 0 0 100px 0;");
            $('#masonry_container').attr('style', "display:block;position:relative");
            $(function() {
                $('#masonry_container').masonry({
                    itemSelector: '.box',
                    columnWidth: 0,
                    isInitLayout: false,
                    isFitWidth: true
                });
            });
            if (App.get("setHight") === null || App.get("setHight") === "null") {
                App.set("setHight", 0);
            }

            $(window).scrollTop(App.get("setHight"));
            App.set("setHight", 0);
        },
        deactivate: function() {
            App.set("setHight", $(window).scrollTop());
            //         alert(App.get("setHight"));
        },
        renderTemplate: function() {

//            if (false) {
//                alert(3333);
//                this.render('masonry', {
//                    outlet: "masonry",
//                    into: "application"
//                });
//            }

        }
    });
    return SearchRoute;
});
