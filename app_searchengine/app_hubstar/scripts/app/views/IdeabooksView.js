define([
    "ember",
    "text!templates/ideabooksTemplate.html"
], function(Ember, ideabooksTemplate) {
    Ember.TEMPLATES["ideabooks"] = Ember.Handlebars.compile(ideabooksTemplate);
    var IdeabooksView = Ember.View.extend({
        classNames: ["lightbox"],
        template: Ember.Handlebars.compile(ideabooksTemplate),
        didInsertElement: function() {



        }
    });
    return IdeabooksView;
});
