HubStar.ReviewView = Ember.View.extend({
    templateName: 'review',
    didInsertElement: function() {


        $(document).ready(function() {
            $('#post-star').ratings(10).bind('ratingchanged', function(event, data) {
                $('#post-star-rating').text(data.rating);
            });
            
//            $("#reviewPost").mCustomScrollbar({
//                scrollButtons: {
//                    enable: false,
//                    scrollSpeed: "auto"
//                },
//                advanced: {
//                    updateOnBrowserResize: true,
//                    updateOnContentResize: true,
//                    autoScrollOnFocus: false,
//                    normalizeMouseWheelDelta: false
//                },
//                autoHideScrollbar: true,
//                mouseWheel: true,
//                theme: "dark-2",
//                set_height: 200
//            });
        });

    }
});
