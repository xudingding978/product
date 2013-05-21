define(["ember", 'models/Image', 'models/ProgressModel'], function(Ember, Image) {
    var arr = [];
    var progress = new Object();
    progress.val = 0;

    var DragNDropController = Ember.ArrayController.extend({
        content: arr,
        model: Image,
        commitFiles: function(files, content) {
            for (var i = 0; i < files.length; i++) {
                (function(file) {
                    var name = file.name;
                    var type = file.type;
                    var content = arr;
                    var reader = new FileReader();
                    reader.onload = function(e) {
                        var src = e.srcElement.result;
                        var file = Image.createRecord({"name": name, "data_type": type, "src": src, "progress": Math.round(e.loaded * 100 / e.total)});
                        //   App.store.commit();
                        content.addObject(file);
                        console.log(content.length);

                    }, reader.readAsDataURL(files[i]);
                })(files[i]);

                event.preventDefault();
            }

        },
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

    DragNDropController.Droppable = Ember.Mixin.create(DragNDropController, {
        content: arr,
        that: this,
        model: Image,
        dragEnter: DragNDropController.cancel,
        dragOver: DragNDropController.cancel,
        drop: function(event) {
            var dataTransfer = event.originalEvent.dataTransfer;
            var files = dataTransfer.files;
            var content = this.content;

            for (var i = 0; i < files.length; i++) {
                (function(file) {
                    var name = file.name;
                    var type = file.type;

                    var reader = new FileReader();
                    reader.onload = function(e) {
                        var src = e.srcElement.result;
                        var file = Image.createRecord({"name": name, "data_type": type, "src": src, "progress": Math.round(e.loaded * 100 / e.total)});
                        //       App.store.commit();

                        content.addObject(file);
                        console.log(content.length);
//                    $.ajax({
//                        url: 'http://api.develop.devbox/images/Test',
//                        type: 'POST',
//                        data: JSON.stringify(file),
//                        success: function(data) {
//                            console.log(data);
//                        }
//                    });
                        //   console.log(path);
                        //            file.get('transaction').commit();
                        //          
                    }, reader.readAsDataURL(files[i]);
                })(files[i]);
                event.preventDefault();
            }

            return false;
        },
    });
    return DragNDropController;
});
