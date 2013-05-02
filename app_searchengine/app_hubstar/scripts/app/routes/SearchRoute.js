define([
    'ember',
    'controllers/SearchController'
], function(
        Ember,
        SearchController
        ) {
    "use strict";

    var SearchRoute = Ember.Route.extend({
        setupController: function(SearchController) {
        },
        renderTemplate: function() {
            this.render('selectedTab', {
                into: "application",
                controller: tabListController
            });
        }
    });
    return IndexRoute;
});