HubStar.ContactView = Ember.View.extend({
      classNames: ["contact-container"],
   
        didInsertElement: function() {
            this.$().draggable({
                cursor: "move",
                scroll: true,
                scrollSensitivity: 100
            });

        }
    });
