define([
    'ember',
    'models/SearchModel',
    'controllers/SearchController'
], function(
        Ember,
        SearchModel,
        SearchController
        ) {
    "use strict";

    var SearchRoute = Ember.Route.extend({
        model: function(params) {
            return SearchModel.find(params.search_id);
        },
        renderTemplate: function() {

            this.render('search', {
                into: "index"
            });
        }
    });
    return SearchRoute;
});