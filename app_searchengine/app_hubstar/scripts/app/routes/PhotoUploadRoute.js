define([
    'ember'
], function(
        Ember
        ) {
    "use strict";
    var PhotoUploadRoute = Ember.Route.extend({
//        setupController: function() {
//            this.controllerFor('dragNDrop');
//        },
        renderTemplate: function() {
            this.render('image', {
                into: 'application'
            });

        }
    });

    return PhotoUploadRoute;
});
