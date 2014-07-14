HubStar.SingleFileUploaderController = Ember.Controller.extend({
            });
            HubStar.SingleFileUploaderController.cancel = function(event) {
                event.preventDefault();
                return false;
            };
            HubStar.SingleFileUploaderController.Droppable = Ember.Mixin.create({
                dragEnter: HubStar.SingleFileUploaderController.cancel,
                dragOver: HubStar.SingleFileUploaderController.cancel

            });

