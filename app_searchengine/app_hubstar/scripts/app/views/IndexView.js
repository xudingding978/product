define([
    "ember",
    "text!templates/indexTemplate.html"
], function(Ember, indexTemplate) {
    Ember.TEMPLATES["index"] = Ember.Handlebars.compile(indexTemplate);
    var IndexView = Ember.View.extend({
        template: Ember.Handlebars.compile(indexTemplate),


    });
    return IndexView;
});
