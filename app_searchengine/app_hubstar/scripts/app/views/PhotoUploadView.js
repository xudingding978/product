define([
    "ember",
    "controllers/PhotoUploadController",
    "text!templates/PhotoCreateTemplate.html"
], function(Ember, PhotoUploadController, PhotoCreateTemplate) {
    Ember.TEMPLATES["image"] = Ember.Handlebars.compile(PhotoCreateTemplate);
    var DragNDropView = Ember.View.extend(PhotoUploadController.Droppable, {
        template: Ember.Handlebars.compile(PhotoCreateTemplate)
    });
    return DragNDropView;
});