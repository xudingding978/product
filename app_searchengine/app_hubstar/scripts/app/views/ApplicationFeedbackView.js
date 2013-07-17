define([
    "ember",
    "text!templates/applicationFeedbackTemplate.html"
], function(Ember, applicationFeedbackTemplate) {

    Ember.TEMPLATES["applicationFeedback"] = Ember.Handlebars.compile(applicationFeedbackTemplate);

    var UserFeedbackView = Ember.View.extend({
        template: Ember.Handlebars.compile(applicationFeedbackTemplate)
    });

    return UserFeedbackView;
});