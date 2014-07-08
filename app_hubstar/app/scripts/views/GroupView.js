HubStar.GroupView = Ember.View.extend({
    templateName: 'group',
    didInsertElement: function() {
         $(function() {
            $('#masonry_user_container').masonry({
                itemSelector: '.box',
                columnWidth: 185,
                isFitWidth: true,
                transitionDuration: 0
            });
        });
        $(document).ready(function() {
            $(window).resize(function() {
                setTimeout(function() {
                    $('#masonry_user_container').masonry("reloadItems");
                    setTimeout(function() {
                        $('#masonry_user_container').masonry();
                    }, 20);
                }, 20);
            });
        });
    }
});
