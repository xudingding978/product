HubStar.ProfileView = Ember.View.extend({
    templateName: 'profile',
    didInsertElement: function() {
   $(document).ready(function() {
   $('span.stars').stars();
  
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

