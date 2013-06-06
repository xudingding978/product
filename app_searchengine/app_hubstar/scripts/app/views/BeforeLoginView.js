define([
    "ember",
    "text!templates/beforeLoginTemplate.html"
], function(Ember, beforeLoginTemplate) {

    Ember.TEMPLATES["beforeLogin"] = Ember.Handlebars.compile(beforeLoginTemplate);

    var BeforeLoginView = Ember.View.extend({
        template: Ember.Handlebars.compile(beforeLoginTemplate)
    });

    return BeforeLoginView;
});