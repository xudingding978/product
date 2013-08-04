HubStar.SingleDragNDropView = Ember.View.extend(HubStar.SingleFileUploaderController.Droppable, {
    
        contentBinding: "SingleFileUploader",

        drop: function(event) {
            var controller = this.get('controller');
            var dataTransfer = event.originalEvent.dataTransfer;
            var files = dataTransfer.files;
            (function(file) {
                var name = file.name;
                var reader = new FileReader();
                reader.onload = function(e) {

                    controller.profileStyleImageDrop(e, name);
                }, reader.readAsDataURL(files[0]);
            })(files[0]);
            return false;
        }
    });
