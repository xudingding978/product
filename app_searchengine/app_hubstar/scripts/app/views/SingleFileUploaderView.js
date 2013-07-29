define([
    "ember",
    "controllers/SingleFileUploaderController",
    "text!templates/singleFileUploaderTemplate.html"
], function(Ember, SingleFileUploaderController, singleFileUploaderTemplate) {
    Ember.TEMPLATES["SingleFileUploader"] = Ember.Handlebars.compile(singleFileUploaderTemplate);

    var SingleDragNDropView = Ember.View.extend(SingleFileUploaderController.Droppable, {
        contentBinding: "SingleFileUploader",
        template: Ember.Handlebars.compile(singleFileUploaderTemplate),
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
    return SingleDragNDropView;
});