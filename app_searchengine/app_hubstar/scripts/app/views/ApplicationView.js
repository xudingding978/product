define([
    "App",
    "ember",
    "text!templates/applicationTemplate.html"
], function(App, Ember, applicationTemplate) {

    Ember.TEMPLATES["application"] = Ember.Handlebars.compile(applicationTemplate);

    var ApplicationView = Ember.View.extend({
        defaultTemplate: Ember.Handlebars.compile(applicationTemplate),
        reaaarender: function() {
            this.rerender();
        }.observes('controller.test')
    });

    return ApplicationView;
});
