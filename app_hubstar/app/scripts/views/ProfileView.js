HubStar.ProfileView = Ember.View.extend({
     
        didInsertElement: function() {

            $(function() {
                $('#masonry_profile_container').masonry({
                    itemSelector: '.box',
                    columnWidth: 0,
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

