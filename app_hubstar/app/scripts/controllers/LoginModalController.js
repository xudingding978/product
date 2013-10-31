HubStar.LoginModalController = Ember.Controller.extend({


    init: function() {

    },
    closePopupLogin:function(){
      HubStar.set('checkLoginStatus',false);
    }
}
);
