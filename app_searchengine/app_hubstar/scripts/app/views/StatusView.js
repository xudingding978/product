define([
    "ember",
    "text!templates/statusTemplate.html"
], function(Ember, statusTemplate) {
    Ember.TEMPLATES["status"] = Ember.Handlebars.compile(statusTemplate);
    var StatusView = Ember.View.extend({
        template: Ember.Handlebars.compile(statusTemplate),
        didInsertElement: function() {


            if (App.get('isLogin')) {

                $('#login_button').attr("style", "display:none");
                $('#afterLogin').attr("style", "display:block");
                $('#welcome_message').attr("style", "display:none");


            } else {

                $('#login_button').attr("style", "display:inline-block");
                $('#afterLogin').attr("style", "display:none");
                $('#welcome_message').attr("style", "display:block");
            }
        }

    });
    return StatusView;
});
