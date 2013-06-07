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
        //     controller: ApplicationController,

//        model: function() {
//            return App.SearchModel.find();
//        },
        renderTemplate: function() {
            this.render('index', {
                into: "application"
            });

            this.render('default', {
                into: "index"
            });
        }

    });
    return IndexRoute;
});
