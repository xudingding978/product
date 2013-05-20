define([
    "ember",
    "text!templates/articlesTemplate.html"
], function(Ember, articlesTemplate) {
    Ember.TEMPLATES["articles"] = Ember.Handlebars.compile(articlesTemplate);
    var ArticlesView = Ember.View.extend({
        classNames: ["lightbox"],
        template: Ember.Handlebars.compile(articlesTemplate),
        didInsertElement: function() {



        }
    });
    return ArticlesView;
});
