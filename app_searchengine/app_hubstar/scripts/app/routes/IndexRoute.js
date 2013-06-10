define([
    'ember',
    'controllers/IndexController',
    'models/MegaModel'
], function(
        Ember,
        IndexController,
        MegaModel
        ) {
    "use strict";

    var IndexRoute = Ember.Route.extend({
        //     controller: ApplicationController,

//        model: function() {
//            return SearchModel.find();
//
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
