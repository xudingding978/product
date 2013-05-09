define([
    'ember',
    'controllers/tabListController',
    'models/PostModel'
], function(
        Ember,
        tabListController,
        PostModel
        ) {
    "use strict";

    var IndexRoute = Ember.Route.extend({
        //     controller: ApplicationController,
        setupController: function(ApplicationController, model) {
//            alert(ApplicationController.get('indexPage'));
//            ApplicationController.set('indexPage', true);
//            alert(ApplicationController.get('indexPage'));
        },
        model: function() {
            return [{id: 'Molly', profileName: 'Molly Brandenburg Interior'}, {id: 'Colin', profileName: 'Top graphic designer!'}, {id: 'Tao', profileName: 'web developer'}];
        },
        renderTemplate: function() {
            this.render('carousel', {
                into: "application"
                //  controller: tabListController
            });
        }
    });
    return IndexRoute;
});
