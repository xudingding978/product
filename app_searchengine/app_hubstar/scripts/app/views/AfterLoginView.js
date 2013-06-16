define([
    "ember",
    "text!templates/afertLoginTemplate.html"
], function(Ember, afertLoginTemplate) {

    Ember.TEMPLATES["afterLogin"] = Ember.Handlebars.compile(afertLoginTemplate);

    var AfterLoginView = Ember.View.extend({
        needs: ['searchs'],
        template: Ember.Handlebars.compile(afertLoginTemplate),
        didInsertElement: function() {
          

            if (App.get('isLogin')) {

                $('#login_icon').attr("style", "display:none");
                $('#login_detail').attr("style", "display:block");



            } else {

                $('#login_icon').attr("style", "display:block");
                $('#login_detail').attr("style", "display:none");

            }
        },
//        rerenderPage: function() {
//            //      alert(1);
//            //     console.log("dddddddddddddddddddd");
//       //       App.User.find(localStorage.loginStatus);
//            this.rerender();
//        }.observes('controller.loginInfo')
    });

    return AfterLoginView;
});