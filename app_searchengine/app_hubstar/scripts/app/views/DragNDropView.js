define([
    "ember",
    "controllers/DragNDropController",
    "text!templates/dragNDropTemplate.html"
], function(Ember, DragNDropController, dragNDropTemplate) {

    Ember.TEMPLATES["dragndrop"] = Ember.Handlebars.compile(dragNDropTemplate);
    var DragNDropView = Ember.View.extend(DragNDropController.Droppable, {
        template: Ember.Handlebars.compile(dragNDropTemplate),
        childView: Ember.TextField.create({
            type: 'file',
            attributeBindings: ['multiple'],
            multiple: true,
            change: function(evt) {
                var input = evt.target;
                var files = input.files;
                var controller = this.get('controller');
                console.log("controller: " + controller);
                controller.commitFiles(files);
                console.log();

            }
        })
            
    });
    return DragNDropView;
});