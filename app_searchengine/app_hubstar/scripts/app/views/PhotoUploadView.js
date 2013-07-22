define([
    "ember",
    "controllers/PhotoCreateController",
    "text!templates/PhotoCreateTemplate.html"
], function(Ember, PhotoCreateController, PhotoCreateTemplate) {
    Ember.TEMPLATES["PhotoCreate"] = Ember.Handlebars.compile(PhotoCreateTemplate);
    var DragNDropView = Ember.View.extend(PhotoCreateController.Droppable, {
        contentBinding: "photoUpload",
        template: Ember.Handlebars.compile(PhotoCreateTemplate),
        nodifyBackground: function()
        {
            var bool = this.get("controller").get("nodifyBackGround");

            if (bool === true) {
                $('#dragAndDroppArea').attr('style', "display:block");
            }
            else {
                $('#dragAndDroppArea').attr('style', "display:none");
            }
        }.observes('controller.nodifyBackGround'),
        drop: function(event) {
            var dataTransfer = event.originalEvent.dataTransfer;
            var files = dataTransfer.files;
            var controller = this.get("controller");
            controller.fileChecking(files.length);
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
            controller.set("nodifyBackGround", true);
            return false;
        }

    });
    return DragNDropView;
});