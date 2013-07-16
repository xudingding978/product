define([
    "ember",
   // "text!templates/searchsTemplate.html"
], function(Ember) {
  //  Ember.TEMPLATES["searchs"] = Ember.Handlebars.compile(searchTemplate);
    var searchView = Ember.View.extend({
     //   template: Ember.Handlebars.compile(searchTemplate),
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
    return searchView;
});