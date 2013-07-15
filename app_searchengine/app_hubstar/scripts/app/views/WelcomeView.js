define([
    "ember",
    "text!templates/welcomeTemplate.html"
], function(Ember, welcomeTemplate) {
    Ember.TEMPLATES["welcome"] = Ember.Handlebars.compile(welcomeTemplate);
    var WelcomeView = Ember.View.extend({
        template: Ember.Handlebars.compile(welcomeTemplate),
        didInsertElement: function() {
            $(function() {
                $('#masonry_welcome_container').masonry({
                    itemSelector: '.box',
                    columnWidth: 0,
                    isFitWidth: true
                });
            });

            if (App.get('isLogin')) {

                $('#login_icon').attr("style", "display:block;position:absolute;right:90px;");
                $('#login_detail').attr("style", "display:block;");



            } else {

                $('#login_icon').attr("style", "display:block;position:absolute;right:90px;");
                $('#login_detail').attr("style", "display:block;");

            }

        },
    });
    return WelcomeView;
});
