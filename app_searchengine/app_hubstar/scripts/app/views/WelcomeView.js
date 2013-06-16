define([
    "ember",
    "text!templates/welcomeTemplate.html"
], function(Ember, welcomeTemplate) {
    Ember.TEMPLATES["welcome"] = Ember.Handlebars.compile(welcomeTemplate);
    var WelcomeView = Ember.View.extend({
        template: Ember.Handlebars.compile(welcomeTemplate),
        didInsertElement: function() {


            if (App.get('isLogin')) {

                $('#login_icon').attr("style", "display:none");
                $('#login_detail').attr("style", "display:block");



            } else {

                $('#login_icon').attr("style", "display:block");
                $('#login_detail').attr("style", "display:none");

            }
        },
    });
    return WelcomeView;
});
