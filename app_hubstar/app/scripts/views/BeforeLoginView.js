HubStar.BeforeLoginView = Ember.View.extend({
    templateName: 'beforeLogin',
    didInsertElement: function() {


        if (HubStar.get('isLogin')) {

            $('#login_icon').attr("style", "display:block;position: relative;float: right;");
            $('#login_detail').attr("style", "display:block;");
            $('.Dropdownstyle2').css("right", "195px");


        } else {

            $('#login_icon').attr("style", "display:block;position: relative;float: right;");
            $('#login_detail').attr("style", "display:block;");
        
            

        }
    }
});