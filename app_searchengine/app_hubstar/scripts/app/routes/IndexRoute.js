define([
    'ember'

], function(
        Ember

        ) {
    "use strict";

    var IndexRoute = Ember.Route.extend({
        //     controller: ApplicationController,
        setupController: function(ApplicationController, model) {
//            alert(ApplicationController.get('indexPage'));
//            ApplicationController.set('indexPage', true);
//            alert(ApplicationController.get('indexPage'));
        },
        renderTemplate: function() {

            this.transitionTo('profiles');
        },
//        renderTemplate: function() {
//
//            this.render('profiles', {
//                into: "application"
//            });
//        }

    });
    return IndexRoute;
});
