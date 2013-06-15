define([
    "ember",
    "text!templates/discussionsTemplate.html"
], function(Ember, discussionsTemplate) {
    Ember.TEMPLATES["discussions"] = Ember.Handlebars.compile(discussionsTemplate);
    var DiscussionsView = Ember.View.extend({
        classNames: ["lightbox"],
        template: Ember.Handlebars.compile(discussionsTemplate),
        didInsertElement: function() {
        }
    });
    return DiscussionsView;
});
