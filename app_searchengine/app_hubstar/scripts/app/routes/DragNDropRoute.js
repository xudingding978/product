define([
    'ember',
    "controllers/DragNDropController"
], function(
        Ember
        ) {
    "use strict";

    var TestRoute = Ember.Route.extend({

        renderTemplate: function() {
            this.render('dragndrop', {
                into: "application"
            });
        }
    });
    return TestRoute;
});