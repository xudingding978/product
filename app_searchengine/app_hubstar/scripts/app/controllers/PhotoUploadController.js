define(["ember", 'models/PhotoModel'], function(Ember, PhotoModel) {
    var arr = [];
    var test = "test";

    var DragNDropController = Ember.ArrayController.extend({
        content: arr,
        model: PhotoModel,
        commitFiles: function(files, content) {
            for (var i = 0; i < files.length; i++) {
                (function(file) {
                    var name = file.name;
                    var type = file.type;
                    var content = arr;
                    var reader = new FileReader();
                    reader.onload = function(e) {
                        var src = e.srcElement.result;
                        var file = PhotoModel.createRecord({"name": name.toLowerCase(), "data_type": type, "src": src, "progress": Math.round(e.loaded * 100 / e.total)});
                        //      App.store.commit();
                        content.addObject(file);
                        console.log(content.length);
                    }, reader.readAsDataURL(files[i]);
                })(files[i]);

                event.preventDefault();
            }

        },
        addFile: function(file) {
            var file = PhotoModel.createRecord(file);
            this.get('content').addObject(file);
            console.log(this.get('content').length);
        },
        test: function() {
            console.log("image test");
        }
    }
    );

    DragNDropController.cancel = function(event) {
        event.preventDefault();
        return false;
    };

    DragNDropController.Droppable = Ember.Mixin.create(DragNDropController, {
        array: arr,
        model: PhotoModel,
        dragEnter: DragNDropController.cancel,
        dragOver: DragNDropController.cancel,
        t: test,
        drop: function(event) {
            var dataTransfer = event.originalEvent.dataTransfer;
            var files = dataTransfer.files;
            var arr = this.array;
            for (var i = 0; i < files.length; i++) {
                (function(file) {
                    var name = file.name;
                    var type = file.type;
                    var reader = new FileReader();
                    reader.onload = function(e) {

                        var src = e.srcElement.result;
                        var file = PhotoModel.createRecord({"name": name.toLowerCase(), "data_type": type, "src": src, "progress": Math.round(e.loaded * 100 / e.total)});
                        arr.addObject(file);
                        //         App.store.commit();
                        console.log(arr.length);
                        //             file.isSaving();


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
        }
    });
    return DragNDropController;
});
