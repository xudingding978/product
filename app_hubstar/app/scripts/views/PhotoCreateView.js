

HubStar.PhotoCreateView = Ember.View.extend({
 
    contentBinding: "photoCreate",
    drop: function(event) {
        var dataTransfer = event.originalEvent.dataTransfer;
        var files = dataTransfer.files;
        var controller = this.get("controller");
        controller.fileChecking(files.length);
        controller.checkingCleanBeforeUpload();
        for (var i = 0; i < files.length; i++) {
            (function(file) {
                var name = file.name;
                var type = file.type;
                var reader = new FileReader();
                reader.onload = function(e) {
                    controller.addPhotoObject(e, controller, name, type);
                }, reader.readAsDataURL(files[i]);
            })(files[i]);
        }
        $('#dragAndDroppArea').attr('style', "display:block");
        return false;
    }

});