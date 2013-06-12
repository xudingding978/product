define([
    "ember",
    "text!templates/defaultTemplate.html"
], function(Ember, defaultTemplate) {
    Ember.TEMPLATES["default"] = Ember.Handlebars.compile(defaultTemplate);
    var defaultView = Ember.View.extend({
        template: Ember.Handlebars.compile(defaultTemplate),
        didInsertElement: function() {


            if (App.get('isLogin')) {

                $('#login_icon').attr("style", "display:none");
                $('#login_detail').attr("style", "display:block");



            } else {

                $('#login_icon').attr("style", "display:block");
                $('#login_detail').attr("style", "display:none");

            }
        }

    });
    return defaultView;
});
