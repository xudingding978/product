define([
    "ember",
    "text!templates/loginModalTemplate.html"
], function(Ember, loginModalTemplate) {

    Ember.TEMPLATES["loginModal"] = Ember.Handlebars.compile(loginModalTemplate);

    var LoginModalView = Ember.View.extend({
        classNames: ["LoginModelSize"],
        template: Ember.Handlebars.compile(loginModalTemplate),
        didInsertElement: function() {



        }
    });

    return LoginModalView;
});