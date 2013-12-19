HubStar.ReviewView = Ember.View.extend({
    templateName: 'review',
    didInsertElement: function() {


        $(document).ready(function() {
            $('#post-star').ratings(10).bind('ratingchanged', function(event, data) {
                $('#post-star-rating').text(data.rating);
            });

        });

    }
});
