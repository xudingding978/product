define([
    'ember',
    'controllers/DataController', 'models/Postmodel'
], function(
        Ember,
        dataController,
        Postmodel
        ) {
    "use strict";

    var DataRoute = Ember.Route.extend({
        model: function() {
      //    alert(Postmodel.find);
            return Postmodel.find();
        }


//        setupController: function(dataController, Postmodel) {
//
//            alert(dataController.modelPost());
//            dataController.modelPost();
//        }
    });
    return DataRoute;
});