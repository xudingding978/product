define([
    "ember",
    "controllers/PhotoCreateController",
    "text!templates/PhotoCreateTemplate.html"
], function(Ember, PhotoCreateController, PhotoCreateTemplate) {
    Ember.TEMPLATES["PhotoCreate"] = Ember.Handlebars.compile(PhotoCreateTemplate);
    var DragNDropView = Ember.View.extend(PhotoCreateController.Droppable, {
        contentBinding: "photoUpload",
        template: Ember.Handlebars.compile(PhotoCreateTemplate),
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
    return DragNDropView;
});