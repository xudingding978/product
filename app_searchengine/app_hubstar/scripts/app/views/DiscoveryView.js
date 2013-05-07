define([
    "ember",
    "text!templates/discoveryBarTemplate.html"
], function(Ember, discoveryBarTemplate) {
    var DiscoveryView = Ember.View.extend({
        template: Ember.Handlebars.compile(discoveryBarTemplate)
    });
    return DiscoveryView;
});
