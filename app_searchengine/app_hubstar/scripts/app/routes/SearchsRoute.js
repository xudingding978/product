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

            //     localStorage.checkUser = "";
            this.controllerFor('searchs').defaultSearch();
            this.controllerFor('index').setLogin();
            console.log("search route");

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
        activate: function() {
            $('#discovery_search_bar_wrapper').attr('style', "display:block;margin: 0 0 100px 0;");
            $('#masonry_container').attr('style', "display:block;");

        },
        deactivate: function() {

        },
        renderTemplate: function() {

            if (false) {
                alert(3333);
                this.render('masonry', {
                    outlet: "masonry",
                    into: "application"
                });
            }

        }
    });
    return SearchRoute;
});
