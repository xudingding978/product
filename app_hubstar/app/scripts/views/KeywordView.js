HubStar.KeywordView = Ember.View.extend({
    attributeBindings: 'draggable',
    draggable: 'true',
    dragStart: function(event) {
        event.originalEvent.dataTransfer.setData('text/plain', 'anything');
        this.get('controller').set('dragTargetIndex', this.get('_parentView.contentIndex'));
    }

});
