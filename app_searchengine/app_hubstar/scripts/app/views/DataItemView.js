define([
    "ember",
    "controllers/DataController",
    "text!templates/dataItemTemplate.html"
], function(Ember, DataController, dataItemTemplate) {

    var DataItemView = Ember.ContainerView.extend({
        tagName: 'div',
        classNames: ['child-view'],
        controller: DataController,
        template: Ember.Handlebars.compile(dataItemTemplate)

    });
    // console.log(dataItemTemplate);
    return DataItemView;
});
