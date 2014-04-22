HubStar.KeywordController = Ember.Controller.extend({
});
HubStar.KeywordController.cancel = function(event) {
    event.preventDefault();
    return false;
};
HubStar.KeywordController.Droppable = Ember.Mixin.create(HubStar.KeywordController, {
    dragEnter: HubStar.KeywordController.cancel,
    dragOver: HubStar.KeywordController.cancel,
});

HubStar.KeywordController.Dragable = Ember.Mixin.create(HubStar.KeywordController,{
    attributeBindings: 'draggable',
    draggable: 'true'
});