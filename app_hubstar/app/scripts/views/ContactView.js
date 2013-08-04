HubStar.ContactView = Ember.View.extend({
    templateName: 'contact',
    classNames: ["contact-container"],
    didInsertElement: function() {
        this.$().draggable({
            cursor: "move",
            scroll: true,
            scrollSensitivity: 100
        });

    }
});
