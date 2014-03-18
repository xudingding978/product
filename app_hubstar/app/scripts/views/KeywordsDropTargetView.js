HubStar.KeywordDropTargetView = Ember.View.extend(HubStar.KeywordController.Droppable, {
    
    drop: function(event) {
    //        var viewId = event.originalEvent.dataTransfer.getData('Text');
    //        Ember.View.views[viewId].destroy();
            this.get('controller').dragIntoFront();
            event.preventDefault();
            return false;
    }
});
