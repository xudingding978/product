HubStar.WelcomeView = Ember.View.extend({
    templateName: 'welcome',
    didInsertElement: function() {
        $(function() {
            $('#masonry_welcome_container').masonry({
                itemSelector: '.box',
                columnWidth: 0,
                isFitWidth: true
            });
        });

        if (HubStar.get('isLogin')) {

            $('#login_icon').attr("style", "display:block;position:absolute;right:90px;");
            $('#login_detail').attr("style", "display:block;");



        } else {

            $('#login_icon').attr("style", "display:block;position:absolute;right:90px;");
            $('#login_detail').attr("style", "display:block;");

        }

    }
});
