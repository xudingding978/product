define([
    "ember",
    "controllers/DataController",
    "text!templates/dataItemTemplate.html"
], function(Ember, DataController, dataItemTemplate) {

    var DataItemView = Ember.View.extend({
        tagName: 'li',
        controller: DataController,
        template: Ember.Handlebars.compile(dataItemTemplate)

    });
    console.log(dataItemTemplate);
    return DataItemView;
});
