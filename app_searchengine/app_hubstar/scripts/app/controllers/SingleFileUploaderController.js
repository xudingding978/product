define(["ember", "helper"],
        function(Ember) {
            var SingleFileUploaderController = Ember.Controller.extend({
            });
            SingleFileUploaderController.cancel = function(event) {
                event.preventDefault();
                return false;
            };
            SingleFileUploaderController.Droppable = Ember.Mixin.create(SingleFileUploaderController, {
                dragEnter: SingleFileUploaderController.cancel,
                dragOver: SingleFileUploaderController.cancel

            });


            return SingleFileUploaderController;
        });
