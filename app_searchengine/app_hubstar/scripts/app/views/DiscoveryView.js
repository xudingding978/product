define([
    "ember",
    "text!templates/discoveryBarTemplate.html"
], function(Ember, discoveryBarTemplate) {
      Ember.TEMPLATES["discoveryBar"] = Ember.Handlebars.compile(discoveryBarTemplate);
    var DiscoveryView = Ember.View.extend({
        template: Ember.Handlebars.compile(discoveryBarTemplate)
    });
    return DiscoveryView;
});
