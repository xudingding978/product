define([
    "ember",
    "text!templates/loginModalTemplate.html"
], function(Ember, loginModalTemplate) {

    Ember.TEMPLATES["loginModal"] = Ember.Handlebars.compile(loginModalTemplate);

    var LoginModalView = Ember.View.extend({

        template: Ember.Handlebars.compile(loginModalTemplate),
        didInsertElement: function() {

            this.$().draggable({
                cursor: "move",
                scroll: true,
                scrollSensitivity: 100
            });

        }
    });

    return LoginModalView;
});