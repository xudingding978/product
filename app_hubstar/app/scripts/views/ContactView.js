HubStar.ContactView = Ember.View.extend({
    templateName: 'contact',
    classNames: ["contact-container"],
    didInsertElement: function() {

        $.fx.speeds.speedDemon = 800;
        this.$().animate({
            bottom: "80%"
        }, "speedDemon");
        this.$().before('<div id="contactMeBlur" class="blur_black" />');
        var that = this;
        $("#contactMeBlur").click(function() {
            that.controller.closeContact();
        });


        this.$().draggable({
           handle: "p" ,
          cursor: "move",
           scroll: true,
         scrollSensitivity: 100
     });


        

    }
});
