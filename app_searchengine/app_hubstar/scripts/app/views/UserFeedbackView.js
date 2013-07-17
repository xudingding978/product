define([
    "ember",
    "text!templates/userFeedbackTemplate.html"
], function(Ember, userFeedbackTemplate) {

    Ember.TEMPLATES["userFeedback"] = Ember.Handlebars.compile(userFeedbackTemplate);

    var UserFeedbackView = Ember.View.extend({
        template: Ember.Handlebars.compile(userFeedbackTemplate)
    });

    return UserFeedbackView;
});