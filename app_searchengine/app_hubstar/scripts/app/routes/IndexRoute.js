define([
    'ember',
    'controllers/ApplicationController'
], function(
        Ember,
        ApplicationController
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
            this.render('carousel', {
                into: "application",
                //  controller: tabListController
            });
        }
    });

    return IndexRoute;
});