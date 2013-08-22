HubStar.ApplicationFeedbackView = Ember.View.extend({
    templateName: 'applicationFeedback',
    didInsertElement: function() {
        var test = this.$();
        test.fadeIn(800).delay(1200);
        console.log($('#contactMeBlur').parent().attr('style'));
        console.log($('#contactMeBlur').parent().length);


        $.when(test).done(function() {
         test.fadeOut();
        });



    }
});

