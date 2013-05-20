define([
    "ember",
    "controllers/DragNDropController",
    "text!templates/dragNDropTemplate.html"
], function(Ember, DragNDropController, dragNDropTemplate) {

    Ember.TEMPLATES["dragndrop"] = Ember.Handlebars.compile(dragNDropTemplate);
    var DragNDropView = Ember.View.extend(DragNDropController.Droppable, {
        template: Ember.Handlebars.compile(dragNDropTemplate),


    });
    return DragNDropView;
});