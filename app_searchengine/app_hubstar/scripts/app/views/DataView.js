define([
    "ember",
    "controllers/DataController",
    "views/DataItemView"
], function(Ember, DataController, DataItemView) {
    var DataView = Ember.CollectionView.extend({
        classNames: ['a-collection'],
        controller: DataController,
        content: ['a','b'],
        itemViewClass: Ember.View.extend({
            template: Ember.Handlebars.compile("The collection is empty")
        })

    });
    //alert(DataItemView+'aaaaaaaaa');
//    console.log(DataView);
//    console.log(DataItemView);
    return DataView;
});
