define([
    "ember",
    "text!templates/uploadResourceTemplate.html"
], function(Ember, uploadResourceTemplate) {

    Ember.TEMPLATES["uploadResource"] = Ember.Handlebars.compile(uploadResourceTemplate);

    var TestView = Ember.View.extend({
        template: Ember.Handlebars.compile(uploadResourceTemplate)
    });

    return TestView;
});