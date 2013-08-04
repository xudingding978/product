define([
    "ember",
    "text!templates/beforeLoginTemplate.html"
], function(Ember, beforeLoginTemplate) {

    Ember.TEMPLATES["beforeLogin"] = Ember.Handlebars.compile(beforeLoginTemplate);

    var BeforeLoginView = Ember.View.extend({
        template: Ember.Handlebars.compile(beforeLoginTemplate),
        didInsertElement: function() {


            if (App.get('isLogin')) {

                $('#login_icon').attr("style", "display:block;position:absolute;right:90px;");
                $('#login_detail').attr("style", "display:block;");



            } else {

                $('#login_icon').attr("style", "display:block;position:absolute;right:90px;");
                $('#login_detail').attr("style", "display:block;");

            }
        }
    });

    return BeforeLoginView;
});