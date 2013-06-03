define([
    "ember",
    "text!templates/dataItemTemplate.html"
], function(Ember, dataItemTemplate) {
    Ember.TEMPLATES["dataItem"] = Ember.Handlebars.compile(dataItemTemplate);
    var DataItemView = Ember.CollectionView.extend({
 
        template: Ember.Handlebars.compile(dataItemTemplate),

    });
    return DataItemView;
});
