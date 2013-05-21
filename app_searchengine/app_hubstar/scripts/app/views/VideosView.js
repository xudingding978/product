define([
    "ember",
    "text!templates/videosTemplate.html"
], function(Ember, videosTemplate) {
    Ember.TEMPLATES["videos"] = Ember.Handlebars.compile(videosTemplate);
    var VideosView = Ember.View.extend({
        classNames: ["lightbox"],
        template: Ember.Handlebars.compile(videosTemplate),
        didInsertElement: function() {



        }
    });
    return VideosView;
});
