HubStar.MasonryTestView = Ember.CollectionView.extend({
    itemViewClass: HubStar.ItemView,
    contentBinding: "controller.content",
    didInsertElement: function() {
    },
    willDestroyElement: function() {
        HubStar.set('isMansonryPageLoad', false);
    },  
    mega: function() {
        this.rerender();
    }.observes('controller.content')
});
