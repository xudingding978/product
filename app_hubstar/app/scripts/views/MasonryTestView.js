HubStar.MasonryTestView = Ember.CollectionView.extend({
    itemViewClass: HubStar.ItemView,
    contentBinding: "controller.contentData",
    didInsertElement: function() {
          $(function() {
            $('#masonry_container').masonry({
                itemSelector: '.box',
                columnWidth: 185,
                isInitLayout: false,
                isFitWidth: true,
                transitionDuration: 0
            });
        });
    },
    willDestroyElement: function() {
        HubStar.set('isMansonryPageLoad', false);
    },
    mega: function() {
        this.rerender();
    }.observes('controller.contentData')
});