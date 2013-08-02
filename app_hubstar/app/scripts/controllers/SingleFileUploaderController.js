HubStar.SingleFileUploaderController = Ember.Controller.extend({
            });
            HubStar.SingleFileUploaderController.cancel = function(event) {
                event.preventDefault();
                return false;
            };
            HubStar.SingleFileUploaderController.Droppable = Ember.Mixin.create(HubStar.SingleFileUploaderController, {
                dragEnter: HubStar.SingleFileUploaderController.cancel,
                dragOver: HubStar.SingleFileUploaderController.cancel

            });

