define([
    "ember",
    "text!templates/carouselTemplate.html"
], function(Ember, carouselTemplate) {
    
        Ember.TEMPLATES["carousel"] = Ember.Handlebars.compile(carouselTemplate);
    
    var carouselView = Ember.View.extend({
        defaultTemplate: Ember.Handlebars.compile(carouselTemplate)
                
    });

    return carouselView;
});