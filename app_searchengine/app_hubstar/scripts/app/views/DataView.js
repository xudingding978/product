define([
    "ember",
    "controllers/DataController",
    "views/DataItemView"
], function(Ember, DataController, DataItemView) {
    var DataView = Ember.CollectionView.extend({
        tagName: 'ul',
        controller: DataController,
        //   contentBinding: "controller.tabs",

      itemViewClass: DataItemView
     //   itemViewClass: Ember.DataItemView.extend({templateName: "dataItemTemplate"})

    });
    //alert(DataItemView+'aaaaaaaaa');
    console.log(DataView);
    console.log(DataItemView);
    return DataView;
});
