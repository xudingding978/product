define([
    "ember",
    "text!templates/loadingSpinnerTemplate.html"
], function(Ember, loadingSpinnerTemplate) {

    Ember.TEMPLATES["loadingSpinner"] = Ember.Handlebars.compile(loadingSpinnerTemplate);

    var LoadingSpinnerView = Ember.View.extend({
        template: Ember.Handlebars.compile(loadingSpinnerTemplate)
    });

    return LoadingSpinnerView;
});