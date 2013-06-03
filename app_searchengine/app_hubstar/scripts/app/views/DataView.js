define([
    "ember",
    "controllers/DataController",
    "views/DataItemView"
], function(Ember, DataController, DataItemView) {
    var DataView = Ember.CollectionView.extend({
        controller: DataController,
        //   contentBinding: "controller.tabs",
        itemViewClass: DataItemView

    });
    return DataView;
});
