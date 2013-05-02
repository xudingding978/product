define([
  "ember",
  "text!templates/carouselTemplate.html"

], function(Ember, carouselTemplate){
  var CarouselView = Ember.View.extend({

    template: Ember.Handlebars.compile(carouselTemplate)

  });
  return CarouselView;
});
