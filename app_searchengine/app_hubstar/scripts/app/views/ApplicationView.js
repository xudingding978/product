define([
    "App",
    "ember",
    "text!templates/applicationTemplate.html"
], function(App, Ember, applicationTemplate) {

    Ember.TEMPLATES["application"] = Ember.Handlebars.compile(applicationTemplate);

    var ApplicationView = Ember.View.extend( {
        defaultTemplate: Ember.Handlebars.compile(applicationTemplate),
//        init: function() {
//         console.log(App.checkingData);
//        },
        reaaarender: function() {
            this.rerender();
        }.observes('controller.test')
    });

    return ApplicationView;
});
