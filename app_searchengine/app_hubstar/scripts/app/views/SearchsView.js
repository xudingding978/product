define([
    "ember",
    "text!templates/searchsTemplate.html"
], function(Ember, searchTemplate) {
    Ember.TEMPLATES["searchs"] = Ember.Handlebars.compile(searchTemplate);
    var searchView = Ember.View.extend({
        template: Ember.Handlebars.compile(searchTemplate),
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

    return searchView;
});