define([
    "ember",
    "text!templates/lightBoxTemplate.html"
], function(Ember, lightBoxTemplate) {
    Ember.TEMPLATES["lightBox"] = Ember.Handlebars.compile(lightBoxTemplate);
    var LightBoxView = Ember.View.extend({
        classNames: ["lightbox"],
        template: Ember.Handlebars.compile(lightBoxTemplate),
        didInsertElement: function() {



        }
    });
    return LightBoxView;
});
