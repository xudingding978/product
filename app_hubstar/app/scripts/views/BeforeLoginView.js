HubStar.BeforeLoginView = Ember.View.extend({

        didInsertElement: function() {


            if (HubStar.get('isLogin')) {

                $('#login_icon').attr("style", "display:block;position:absolute;right:90px;");
                $('#login_detail').attr("style", "display:block;");



            } else {

                $('#login_icon').attr("style", "display:block;position:absolute;right:90px;");
                $('#login_detail').attr("style", "display:block;");

            }
        }
})