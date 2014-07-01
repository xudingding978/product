

HubStar.PhotoCreateView = Ember.View.extend(HubStar.SingleFileUploaderController.Droppable, {

    contentBinding: "photoCreate",
    drop: function(event) {
        var dataTransfer = event.originalEvent.dataTransfer;
        var files = dataTransfer.files;
        var controller = this.get("controller");
       var  filesize = 0;

        var photoCreateController = controller.get('controllers.photoCreate');      
        photoCreateController.fileChecking(files.length);
        photoCreateController.checkingCleanBeforeUpload();
        for (var i = 0; i < files.length; i++) {
            (function(file) {
                var name = file.name;
                var type = file.type;
                filesize = file.size;
                if(filesize>=25000000)
                {
                   this.get("controller").get('controllers.applicationFeedback').statusObserver(null, "The limit size of uploading is 25MB");
                }
                else
                {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                    photoCreateController.addPhotoObject(e, name, type, filesize);
                      
                    }, reader.readAsDataURL(files[i]);
              }
            })(files[i]);
        }
        $('#dragAndDroppArea').attr('style', "display:block");
        return false;
    }

});
