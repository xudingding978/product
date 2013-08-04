define([
    'ember',
    'models/MegaModel'
], function(
        Ember, mage
        ) {
    "use strict";

    var TestRoute = Ember.Route.extend({

        renderTemplate: function() {
            this.render('image', {
                into: 'application'
            });
        }
    });
    return TestRoute;
});