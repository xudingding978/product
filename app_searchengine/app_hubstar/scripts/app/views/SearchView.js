define([
    "ember",
    "text!templates/searchTemplate.html"
], function(Ember, searchTemplate) {
    
    Ember.TEMPLATES["search"] = Ember.Handlebars.compile(searchTemplate);

    var searchView = Ember.View.extend({
        defaultTemplate: Ember.Handlebars.compile(searchTemplate)

    });


    console.log(" name:  " + searchView.id);
    return searchView;
});