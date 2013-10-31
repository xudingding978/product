HubStar.LoginModalView = Ember.View.extend({
      templateName: 'loginModal',
 
        didInsertElement: function() {

            $("#loginModal").on("click", function() {
                that.get('controller').set('popUpMap', false);
            });

        }
    });

