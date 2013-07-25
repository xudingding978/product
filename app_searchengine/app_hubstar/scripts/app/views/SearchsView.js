define([
    "ember",
   // "text!templates/searchsTemplate.html"
], function(Ember) {

    var searchView = Ember.View.extend({

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