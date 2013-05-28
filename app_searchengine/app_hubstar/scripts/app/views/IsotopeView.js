define([
    "ember",
    "text!templates/isotopeTemplate.html",
    'jquery',
    'isotope',
    'search',
    'helpers'
], function(Ember, isotopeTemplate) {
    Ember.TEMPLATES["isotope"] = Ember.Handlebars.compile(isotopeTemplate);
    var IsotopeView = Ember.View.extend({
        
        template: Ember.Handlebars.compile(isotopeTemplate),
                
    });
    return IsotopeView;
});
