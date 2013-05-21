define([
    "ember",
    "text!templates/searchIsotopeTemplate.html",
    'jquery',
    'isotope',
    'search',
    'helpers'
], function(Ember, searchIsotopeTemplate) {
    Ember.TEMPLATES["searchIsotope"] = Ember.Handlebars.compile(searchIsotopeTemplate);
    var SearchIsotopeView = Ember.View.extend({
        template: Ember.Handlebars.compile(searchIsotopeTemplate),
    });
    return SearchIsotopeView;
});
