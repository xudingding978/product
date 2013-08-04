HubStar.LoginModalView = Ember.View.extend({
      templateName: 'loginModal',
 
        didInsertElement: function() {

            this.$().draggable({
                cursor: "move",
                scroll: true,
                scrollSensitivity: 100
            });


        }
    });

