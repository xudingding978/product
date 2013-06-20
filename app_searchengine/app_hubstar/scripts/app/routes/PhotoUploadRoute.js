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
            this.render('PhotoCreate', {
                into: 'application'
            });

        }
    });

    return PhotoUploadRoute;
});
