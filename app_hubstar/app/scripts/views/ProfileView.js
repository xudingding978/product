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

        var address = document.URL;
        var user_id = address.split("#")[1].split("/")[3];

        if (user_id === "partners")
        {
            $('#user-stats > li').removeClass('selected-user-stats');

            $('#partners').addClass('selected-user-stats');
            $('#user-stats > li').click(function() {
                $('#user-stats > li').removeClass('selected-user-stats');
                $(this).addClass('selected-user-stats');
            });
        }
        else if (user_id === "followers")
        {
            $('#user-stats > li').removeClass('selected-user-stats');
            $('#follow').addClass('selected-user-stats');
            $('#user-stats > li').click(function() {
                $('#user-stats > li').removeClass('selected-user-stats');
                $(this).addClass('selected-user-stats');
            });
        }
        else {
            $('#user-stats > li').removeClass('selected-user-stats');
            $('#defualt').addClass('selected-user-stats');
            $('#user-stats > li').click(function() {
                $('#user-stats > li').removeClass('selected-user-stats');
                $(this).addClass('selected-user-stats');
            });
        }


    }
});

