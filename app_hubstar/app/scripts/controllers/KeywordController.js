HubStar.KeywordController = Ember.Controller.extend({
//    needs: ["profile"],
    
//    dragTargetId: "",
    
//    dragIntoFront: function() {
//        var profileController = this.get('controllers.profile'); 
//        if (this.get('dragTargetIndex') < 0) {
//            
//        } else if (profileController.get('show_keyword_array').get('length')>9) {
//            
//        } else {
//            profileController.get('show_keyword_array').push(profileController.get('show_keyword_array').objectAt(this.get('dragTargetIndex')));
//        }
//    },
//    
//    changeOrder: function() {
//        
//    }
});
HubStar.KeywordController.cancel = function(event) {
    event.preventDefault();
    return false;
};
HubStar.KeywordController.Droppable = Ember.Mixin.create(HubStar.KeywordController, {
    dragEnter: HubStar.KeywordController.cancel,
    dragOver: HubStar.KeywordController.cancel,
    drop: function(event) {
//        var viewId = event.originalEvent.dataTransfer.getData('Text');
//        Ember.View.views[viewId].destroy();
        this.get('controller').dragIntoFront();
        event.preventDefault();
        return false;
    }
});

HubStar.KeywordController.Dragable = Ember.Mixin.create(HubStar.KeywordController,{
    attributeBindings: 'draggable',
    draggable: 'true',
    dragStart: function(event) {
//        var dataTransfer = event.originalEvent.dataTransfer;
        event.originalEvent.dataTransfer.setData('text/plain', 'anything');
        this.get('controller').set('dragTargetIndex', this.get('_parentView').get('contentIndex'));
//        this.set('dragTargetId', this.get('elementId'));
//        dataTransfer.setData('Text', this.get('elementId'));
    }
});