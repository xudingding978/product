define([
    "ember",
    "text!templates/photoTemplate.html",
  "controllers/ProfilesController"
], function(Ember, photoTemplate,ProfilesController) {
    Ember.TEMPLATES["photo"] = Ember.Handlebars.compile(photoTemplate);


    var PhotoView = Ember.View.extend({
        template: Ember.Handlebars.compile(photoTemplate),
        Profile_page:function(){
        }

    });
    return PhotoView;
});
