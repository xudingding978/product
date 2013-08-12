

HubStar.PhotoCreateView = Ember.View.extend(HubStar.PhotoCreateController.Droppable, {
 
    contentBinding: "photoCreate",
    drop: function(event) {
        var dataTransfer = event.originalEvent.dataTransfer;
        var files = dataTransfer.files;
        var controller = this.get("controller");
                                 var photoCreateController = controller.get('controllers.photoCreate');
                              
        photoCreateController.fileChecking(files.length);
        photoCreateController.checkingCleanBeforeUpload();
        for (var i = 0; i < files.length; i++) {
            (function(file) {
                var name = file.name;
                var type = file.type;
                var reader = new FileReader();
                reader.onload = function(e) {
                    photoCreateController.addPhotoObject(e, name, type);
                }, reader.readAsDataURL(files[i]);
            })(files[i]);
        }
        $('#dragAndDroppArea').attr('style', "display:block");
        return false;
    }

});
