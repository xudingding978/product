HubStar.KeywordView = Ember.View.extend(HubStar.KeywordController.Dragable, {
    
    dragStart: function(event) {
        event.originalEvent.dataTransfer.setData('text/plain', 'anything');
        this.get('controller').set('dragTargetIndex', this.get('_parentView.contentIndex'));
    }
    
    });
