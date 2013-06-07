define([
    "ember",
    "text!templates/isLoadingTemplate.html"
], function(Ember, isLoadingTemplate) {
      Ember.TEMPLATES["isLoading"] = Ember.Handlebars.compile(isLoadingTemplate);
    var isLoadingView = Ember.View.extend({
        template: Ember.Handlebars.compile(isLoadingTemplate)
    });
    return isLoadingView;
});