define([
    'ember',
    'controllers/TestController'
], function(
        Ember, TestController
        ) {
    var DragNDrop = Ember.Namespace.create();

    DragNDrop.cancel = function(event) {
        event.preventDefault();
        return false;
    };
    DragNDrop.Droppable = Ember.Mixin.create({
        dragEnter: DragNDrop.cancel,
        dragOver: DragNDrop.cancel,
        controller: TestController,
        drop: function(event) {
                 var dataTransfer = event.originalEvent.dataTransfer;
                var files = dataTransfer.files;

//            var files = event.target.files;
//            console.log(event.target);

         //   this.get('controller').getSize(files);

              this.get('controller').addFiles(files);
            event.preventDefault();

            return false;
        }
    });
    return DragNDrop;
});