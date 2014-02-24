HubStar.MasonryTestView = Ember.CollectionView.extend({
    itemViewClass: HubStar.ItemView,
    contentBinding: "controller.content",
    didInsertElement: function() {
//        var container = document.querySelector('#masonry_container');
//        
//        var msnry = new Masonry(container, {
//             itemSelector: '.box',
//                columnWidth: 185,
//                isInitLayout: false,
//                isFitWidth: true
//        });

        $(function() {
//            $('#masonry_container').masonry({
//                itemSelector: '.box',
//                columnWidth: 185,
//                isInitLayout: false,
//                isFitWidth: true,
//                transitionDuration: 0               
//            });
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
