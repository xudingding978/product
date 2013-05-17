define(["ember", 'models/Image', 'models/ProgressModel'], function(Ember, Image) {
    var arr = [];
    var progress = new Object();
    progress.val = 0;

    var DragNDropController = Ember.ArrayController.extend({
        content: arr,
        model: Image,
        progressVal: progress.val,
        addFile: function(file) {

            var file = Image.createRecord(file);

            this.get('content').addObject(file);

            console.log(this.get('content').length);
        }
    }
    );

    DragNDropController.cancel = function(event) {
        event.preventDefault();
        return false;
    };
    DragNDropController.progressValt = 11;

    DragNDropController.Droppable = Ember.Mixin.create(DragNDropController, {
        content: arr,
        progressValue: progress,
        model: Image,
        dragEnter: DragNDropController.cancel,
        dragOver: DragNDropController.cancel,
        drop: function(event) {
            var dataTransfer = event.originalEvent.dataTransfer;
            var files = dataTransfer.files;
            this.get("progressValue").val = this.get("progressValue").val + 10;
            for (var i = 0; i < files.length; i++) {
                var content = this.content;
                var tempfile = files[i];
                var reader = new FileReader();
                reader.onload = function(e) {
                    var src = e.srcElement.result;
                    console.log(src);

                    var file = Image.createRecord({"name": tempfile.name, "path": src, "progress": Math.round(e.loaded * 100 / e.total)});
                    content.addObject(file);
                    console.log(e.loaded);


   //              App.store.commit();




//                    $.ajax({
//                        url: 'http://api.develop.devbox/images/Test',
//                        type: 'POST',
//                        data: JSON.stringify(file),
//                        success: function(data) {
//                            console.log(data);
//                        }
//                    });

                },
                        reader.readAsDataURL(tempfile);
                event.preventDefault();
            }

            //   App.store.commit();

            return false;
        },
  

    });
    return DragNDropController;
});