HubStar.LoginModalView = Ember.View.extend({

 
        didInsertElement: function() {

            this.$().draggable({
                cursor: "move",
                scroll: true,
                scrollSensitivity: 100
            });


        }
    });

