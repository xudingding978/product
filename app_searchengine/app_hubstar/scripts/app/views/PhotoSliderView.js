define([
    "ember",
    "text!templates/photoSliderTemplate.html"
], function(Ember, photoSliderTemplate) {
    Ember.TEMPLATES["PhotoSlider"] = Ember.Handlebars.compile(photoSliderTemplate);
    var PhotoSliderView = Ember.View.extend({
        template: Ember.Handlebars.compile(photoSliderTemplate),
        image: "https://s3-ap-southeast-2.amazonaws.com/hubstar-dev/slide_img/kichen_a.jpg"
    });

    return PhotoSliderView;
});
