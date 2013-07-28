define([
    "ember",
    "controllers/SingleFileUploaderController",
    "text!templates/singleFileUploaderTemplate.html"
], function(Ember, SingleFileUploaderController, singleFileUploaderTemplate) {
    Ember.TEMPLATES["SingleFileUploader"] = Ember.Handlebars.compile(singleFileUploaderTemplate);
        
    var SingleDragNDropView = Ember.View.extend(SingleFileUploaderController.Droppable,{
        contentBinding: "SingleFileUploader",
        template: Ember.Handlebars.compile(singleFileUploaderTemplate),
        drop: function(event) {

            return false;
        }
    });
    return SingleDragNDropView;
});