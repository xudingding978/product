define([
    "ember",
    "controllers/PhotoCreateController",
    "text!templates/PhotoCreateTemplate.html"
], function(Ember, PhotoCreateController, PhotoCreateTemplate) {
    Ember.TEMPLATES["PhotoCreate"] = Ember.Handlebars.compile(PhotoCreateTemplate);
    var DragNDropView = Ember.View.extend(PhotoCreateController.Droppable, {
        contentBinding: "photoUpload",
        template: Ember.Handlebars.compile(PhotoCreateTemplate)
    });
    return DragNDropView;
});