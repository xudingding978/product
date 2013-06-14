define([
    'ember',
    'controllers/SearchsController',
    'models/MegaModel'

], function(
        Ember,
        SearchsController,
        MegaModel

        ) {
    "use strict";

    var SearchRoute = Ember.Route.extend({
        setupController:function(controller, model) {

            
       //     this.controllerFor('searchs').set('model', MegaModel.find());
 
            this.controllerFor('searchs').searchModelLoad();
     
        },
//        model: function() {
//
//            return MegaModel.find();
//        },


        renderTemplate: function() {
            this.render('index', {
                into: "application"
            });
            this.render('searchs', {
                into: "index"
            });


        }
    });
    return SearchRoute;
});
