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
            if (bool) {
                $('#dragAndDroppReviewArea').attr('style', "display:block");
            }
            else {
                $('#dragAndDroppReviewArea').attr('style', "display:none");
            }
        }.observes('controller.nodifyBackGround'),
        drop: function(event) {
            var dataTransfer = event.originalEvent.dataTransfer;
            var files = dataTransfer.files;
            var controller = this.get("controller");

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