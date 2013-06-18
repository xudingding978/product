define([
    "ember",
    "text!templates/headerTemplate.html"
], function(Ember, headerTemplate) {

    Ember.TEMPLATES["header"] = Ember.Handlebars.compile(headerTemplate);

    var HeaderView = Ember.View.extend({

        template: Ember.Handlebars.compile(headerTemplate),

    });

    return HeaderView;
});
