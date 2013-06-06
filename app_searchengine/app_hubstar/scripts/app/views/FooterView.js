define([
    "ember",
    "text!templates/footerTemplate.html"
], function(Ember, footerTemplate) {

    Ember.TEMPLATES["footer"] = Ember.Handlebars.compile(footerTemplate);

    var FooterView = Ember.View.extend({
        template: Ember.Handlebars.compile(footerTemplate)
    });

    return FooterView;
});