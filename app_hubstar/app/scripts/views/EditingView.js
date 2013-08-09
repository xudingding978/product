HubStar.EditingView = Ember.View.extend({
      templateName: 'editing',
        classNames: ["window-container"],
        controller: HubStar.ProfilesController,
    
        didInsertElement: function() {

            this.$().draggable({
                cancel: ".content",
                cursor: "move",
                containment: "body",
                scroll: true,
                scrollSensitivity: 100
            });

        }
    });