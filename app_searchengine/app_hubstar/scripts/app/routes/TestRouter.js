define([
    'ember'
], function(
        Ember
        ) {
    "use strict";

    var TestRoute = Ember.Route.extend({

        renderTemplate: function() {
            this.render('test', {
                into: "application"
            });
        }
    });
    return TestRoute;
});