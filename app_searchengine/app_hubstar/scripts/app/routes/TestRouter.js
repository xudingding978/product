define([
    'ember',
    'models/MegaModel'
], function(
        Ember, mage
        ) {
    "use strict";

    var TestRoute = Ember.Route.extend({
        model: function() {
            var temp = mage.find();
            console.log("tttttttttttttttt");
            console.log(temp);
            return temp;
        },
        renderTemplate: function() {
            this.render('test', {
                into: "application"
            });
        }
    });
    return TestRoute;
});