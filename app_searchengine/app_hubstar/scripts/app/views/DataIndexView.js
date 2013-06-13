define([
    "ember",
    "text!templates/dataIndexTemplate.html"
], function(Ember, dataIndexTemplate) {
    Ember.TEMPLATES["dataIndex"] = Ember.Handlebars.compile(dataIndexTemplate);
    var DataIndexView = Ember.View.extend({
        template: Ember.Handlebars.compile(dataIndexTemplate)
    });
    return DataIndexView;
});
