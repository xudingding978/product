HubStar.KeywordController = Ember.Controller.extend({
});
HubStar.KeywordController.cancel = function(event) {
    event.preventDefault();
    return false;
};
HubStar.KeywordController.Droppable = Ember.Mixin.create({
    dragEnter: HubStar.KeywordController.cancel,
    dragOver: HubStar.KeywordController.cancel
});

HubStar.KeywordController.Draggable = Ember.Mixin.create({
    attributeBindings: 'draggable',
    draggable: 'true',
    dragStart: function(event) {
        
    }
});