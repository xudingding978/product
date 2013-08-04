define([
    "ember",
    "text!templates/videoTemplate.html"
], function(Ember, videosTemplate) {
    Ember.TEMPLATES["video"] = Ember.Handlebars.compile(videosTemplate);
    var VideosView = Ember.View.extend({
        classNames: ["lightbox"],
        template: Ember.Handlebars.compile(videosTemplate),
        didInsertElement: function() {



        },
        testing: function() {
           


        }.observes('content.id')
    });
    return VideosView;
});
