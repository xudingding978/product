HubStar.ReviewView = Ember.View.extend({
    templateName: 'review',
    didInsertElement: function() {


        $(document).ready(function() {
            $('#example-1').ratings(10).bind('ratingchanged', function(event, data) {
                $('#example-rating-1').text(data.rating);
            });
        });

    }
});
