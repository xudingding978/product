HubStar.ProfileView = Ember.View.extend({
    templateName: 'profile',
    
    
    didInsertElement: function() {
        $(document).ready(function() {

            $('span.stars').each(function() {

                // Get the value
                var val = parseFloat($(this).text());
                //console.log(that.get('controller').get('reviews').objectAt(0).get('review_star_rating_value'));

                // Make sure that the value is in 0 - 5 range, multiply to get width
                var size = Math.max(0, (Math.min(10, val))) * 20;
                // Create stars holder
                var $span = $('<span />').width(size);
                // Replace the numerical value with stars
                $(this).html($span);
            });

        });
        $(function() {
            $('#masonry_profile_container').masonry({
                itemSelector: '.box',
                columnWidth: 185,
                isFitWidth: true
            });
        });
        $('#defualt').addClass('selected-user-stats');
        $('#user-stats > li').click(function() {
            $('#user-stats > li').removeClass('selected-user-stats');
            $(this).addClass('selected-user-stats');
        });
        
       
    }
});

