define([
    "ember",
    "text!templates/afertLoginTemplate.html"
], function(Ember, afertLoginTemplate) {

    Ember.TEMPLATES["afterLogin"] = Ember.Handlebars.compile(afertLoginTemplate);

    var AfterLoginView = Ember.View.extend({

        template: Ember.Handlebars.compile(afertLoginTemplate)


    });

    return AfterLoginView;
});