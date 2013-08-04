HubStar.UserView = Ember.View.extend({
          templateName: 'user',
        didInsertElement: function() {

            $(function() {
                $('#masonry_user_container').masonry({
                    itemSelector: '.box',
                    columnWidth: 0,
                    isFitWidth: true
                });
            });




        }
    });
