define([
    "ember",
    "text!templates/searchsTemplate.html"
], function(Ember, searchTemplate) {
    Ember.TEMPLATES["searchs"] = Ember.Handlebars.compile(searchTemplate);
    var searchView = Ember.View.extend({
        template: Ember.Handlebars.compile(searchTemplate)

    });

    return searchView;
});