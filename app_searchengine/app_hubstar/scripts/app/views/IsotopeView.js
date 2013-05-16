define([
    "ember",
    "text!templates/isotopeTemplate.html",
    'isotope',
    'search'
], function(Ember, isotopeTemplate) {
    Ember.TEMPLATES["isotope"] = Ember.Handlebars.compile(isotopeTemplate);
    var IsotopeView = Ember.View.extend({
        template: Ember.Handlebars.compile(isotopeTemplate)
    });
    return IsotopeView;
});
