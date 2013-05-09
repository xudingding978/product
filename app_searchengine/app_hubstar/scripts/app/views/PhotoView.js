define([
    "ember",
    "text!templates/photoTemplate.html",
    "controllers/ProfileController"
], function(Ember, photoTemplate, ProfileController) {
    Ember.TEMPLATES["photo"] = Ember.Handlebars.compile(photoTemplate);

    var PhotoView = Ember.View.extend({
        template: Ember.Handlebars.compile(photoTemplate)
    });
    return PhotoView;
});
