HubStar.MasonryView = Ember.View.extend({
    templateName: 'masonry',
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
        if (HubStar.get('searchStart')) {
            HubStar.set('isMansonryPageLoad', true);
        }
    },
    willDestroyElement: function() {
        HubStar.set('isMansonryPageLoad', false);
    },  
    mega: function() {
        this.rerender();
    }.observes('controller.content')
});
