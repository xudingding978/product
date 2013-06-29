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
                        var src = e.srcElement.result;
                        var obj = App.Mega.createRecord({"title": name.toLowerCase(), "type": "photos", "creator": localStorage.user_id});
                        var file = App.Photo.createRecord({"photo_title": name.toLowerCase(), "photo_image_url": src, "photo_type": type});
                        obj.get("photo").pushObject(file);
                        controller.get("content").addObject(file);
                    }, reader.readAsDataURL(files[i]);
                })(files[i]);

            }
            controller.set("nodifyBackGround", true);
            return false;
        }

    });
    return DragNDropView;
});