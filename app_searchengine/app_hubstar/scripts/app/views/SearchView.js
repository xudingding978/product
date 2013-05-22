define([
    "ember",
    "text!templates/searchTemplate.html"
], function(Ember, searchTemplate) {
    Ember.TEMPLATES["search"] = Ember.Handlebars.compile(searchTemplate);
    var searchView = Ember.View.extend({
        template: Ember.Handlebars.compile(searchTemplate)

    });

    return searchView;
});