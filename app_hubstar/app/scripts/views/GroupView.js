HubStar.GroupView = Ember.View.extend({
    templateName: 'group',
    didInsertElement: function() {
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
