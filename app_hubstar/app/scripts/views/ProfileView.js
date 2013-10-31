HubStar.ProfileView = Ember.View.extend({
    templateName: 'profile',
    
    
    didInsertElement: function() {

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
