HubStar.ReviewListView = Ember.View.extend({
    templateName: 'reviewList',
    didInsertElement: function() {


        $(document).ready(function() {
            setTimeout(function() {
                $('#masonry_user_container').masonry("reloadItems");
            }, 200);
        });

    }


});


