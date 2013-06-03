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
        didInsertElement: function() {
            this.get('controller').addObserver('isLoaded', function() {
                console.info('inserted the element and store is loaded');
            });
        }
    });
    return IsotopeView;
});
