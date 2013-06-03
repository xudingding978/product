define([
    'ember',
    'controllers/IndexController',
    'models/SearchModel'
], function(
        Ember,
        IndexController,
        SearchModel
        ) {
    "use strict";

    var IndexRoute = Ember.Route.extend({
        model: function() {
            return SearchModel.find();
        },
        renderTemplate: function() {
            this.render('index', {
                into: "application"
            });
//            this.render('default', {
//                
//                into: "index"
//            });
        }
    });
    return IndexRoute;
});
