HubStar.ReviewReplyListSingleView = Ember.View.extend({
    templateName: 'reviewReplyListSingle',
    didInsertElement: function() {

    
    },
    replyView: function(event) {

          this.get("controller").transitionToRoute('reply', {id: event});
    }
   
    

});


