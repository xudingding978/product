define([
    "ember",
    "text!templates/photosTemplate.html"
], function(Ember, photosTemplate) {
    Ember.TEMPLATES["photos"] = Ember.Handlebars.compile(photosTemplate);
    var PhotosView = Ember.View.extend({
        classNames: ["lightbox"],
        template: Ember.Handlebars.compile(photosTemplate),
        didInsertElement: function() {



        }
    });
    return PhotosView;
});
