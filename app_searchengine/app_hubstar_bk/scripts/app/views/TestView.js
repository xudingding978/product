define([
    "ember",
    "text!templates/testTemplate.html"
], function(Ember, testTemplate) {

    Ember.TEMPLATES["test"] = Ember.Handlebars.compile(testTemplate);

    var TestView = Ember.View.extend({
        template: Ember.Handlebars.compile(testTemplate)
    });

    return TestView;
});