define([
    'ember',
    'models/UserModel', 'models/CateModel'

], function(
        Ember,
        UserModel,
        CateModel

        ) {
    "use strict";

    var ApplicationRoute = Ember.Route.extend({
        setupController: function(controller, model) {


            this.controllerFor('application').loginStatus();
            this.controllerFor('platformBar').setTopicModel( model);
//            console.log(model);
        },
        model: function() {
            return App.Cate.find();

        }

    });
    return ApplicationRoute;
});
