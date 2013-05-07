define([
  "ember",
  "text!templates/carouselTemplate.html"

], function(Ember, carouselTemplate){
    Ember.TEMPLATES["carousel"] = Ember.Handlebars.compile(carouselTemplate);
    
    
  var CarouselView = Ember.View.extend({

    template: Ember.Handlebars.compile(carouselTemplate)

  });
  return CarouselView;
});
