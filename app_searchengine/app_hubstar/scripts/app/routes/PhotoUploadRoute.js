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
        activate: function() {
            this.controllerFor('application').set('comingsoon', true);
        },
        deactivate: function() {
            this.controllerFor('application').set('comingsoon', false);

        },
        renderTemplate: function() {
            this.render('PhotoCreate', {
                outlet:'photoUpload',
                into: 'application'
            });

        }
    });

    return PhotoUploadRoute;
});
