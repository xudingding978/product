define([
    "ember",
    "text!templates/headerTemplate.html"
], function(Ember, headerTemplate) {

    Ember.TEMPLATES["header"] = Ember.Handlebars.compile(headerTemplate);

    var HeaderView = Ember.View.extend({
        template: Ember.Handlebars.compile(headerTemplate),
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

    return HeaderView;
});