HubStar.KeywordView = Ember.View.extend(HubStar.KeywordController.Dragable, {
    
    dragStart: function(event) {
//        var dataTransfer = event.originalEvent.dataTransfer;
        event.originalEvent.dataTransfer.setData('text/plain', 'anything');
        this.get('controller').set('dragTargetIndex', this.get('_parentView.contentIndex'));
//        this.set('dragTargetId', this.get('elementId'));
//        dataTransfer.setData('Text', this.get('elementId'));
    }
    
    });
