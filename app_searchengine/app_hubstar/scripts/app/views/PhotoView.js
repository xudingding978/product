define([
    "ember",
    "text!templates/photoTemplate.html",
  "controllers/ApplicationController"
], function(Ember, photoTemplate,ApplicationController) {

    var PhotoView = Ember.View.extend({
        template: Ember.Handlebars.compile(photoTemplate),
        Profile_page:function(){
        }

    });
    return PhotoView;
});
