define([
    "ember",
    "text!templates/dataTemplate.html"
], function(Ember, dataTemplate) {
    Ember.TEMPLATES["data"] = Ember.Handlebars.compile(dataTemplate);
    var DataView = Ember.View.extend({
 
        template: Ember.Handlebars.compile(dataTemplate),

    });
    return DataView;
});
