define([
    "ember",
    "text!templates/platformBarTemplate.html"
], function(Ember, platformBarTemplate) {

    Ember.TEMPLATES["platformBar"] = Ember.Handlebars.compile(platformBarTemplate);

    var PlatformBarView = Ember.View.extend({
        template: Ember.Handlebars.compile(platformBarTemplate)
    });

    return PlatformBarView;
});