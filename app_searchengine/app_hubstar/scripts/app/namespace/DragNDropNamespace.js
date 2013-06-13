define([
    'ember',
    'models/PhotoModel'
], function(
        Ember,
        ImageFile
        ) {

    var DragNDrop = Ember.ArrayController.extend({
        content: [],
        model: ImageFile,
        test: "test"
    });
    DragNDrop.cancel = function(event) {
        event.preventDefault();
        return false;
    };

    DragNDrop.Droppable = Ember.Mixin.create(DragNDrop, {
        content: [],
        model: ImageFile,
        dragEnter: DragNDrop.cancel,
        dragOver: DragNDrop.cancel,
        drop: function(event) {
            var dataTransfer = event.originalEvent.dataTransfer;
            var files = dataTransfer.files;
            var tempfile = files[0];
            var reader = new FileReader();
            reader.onload = function(e) {
                var path = e.target.result;
            },
                    reader.readAsDataURL(tempfile);
            var file = ImageFile.createRecord({"name": "test", "path": "path"});
            //       this.content.addObject(file);
            console.log(DragNDrop);
            event.preventDefault();
            return false;
        },
        click: function(event)
        {
            console.log("click");
        }

    });
    return DragNDrop;
});