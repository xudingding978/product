define(["ember", 'models/Image', 'models/ProgressModel'], function(Ember, Image) {
    var arr = [];
    var progress = new Object();
    progress.val = 0;

    var DragNDropController = Ember.ArrayController.extend({
        content: arr,
        model: Image,
        progressVal: progress.val,
        getSize: function(tmpfiles) {
            console.log('dddd');

        },
        test: function() {
            //           var file = ImageFile.createRecord({name: "test", path: "path"});
//            console.log("name:");
//            console.log(file.get('name'));
            //   this.content.addObject(file);
            progress.val = progress.val + 10;
            this.set("progressVal", progress.val);
            //     console.log(this.get("progressValue"));
            console.log(progress.val);
            console.log(this.content);
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
            //   console.log(this.get("progressValue").val);
//            var tempVar = this.progressValue + 10;
//            this.set("progressValue", tempVar);
//            console.log(this.get("progressValue"));
            for (var i = 0; i < files.length; i++) {
                var content = this.content;

                var tempfile = files[i];
                var reader = new FileReader();
                reader.onload = function(e) {
                    var path = e.srcElement.result;
                    console.log(path);
                    //      var path = e.target.result;
//                    if (e.lengthComputable) {
//                        //     scope.progress = e.round(e.loaded * 100 / e.total)
//                        console.log("e.loaded" + e.loaded);
//                        console.log("e.total" + e.total);
//                        console.log(Math.round(e.loaded / e.total));
//                    } else {
//                        scope.progress = 'unable to compute';
//                    }

                    Image.createRecord({"name": tempfile.name, "path": path, "progress": Math.round(e.loaded * 100 / e.total)});
                    //         var progress = e.loaded;
                    console.log(e.loaded);

                    //    App.store.get('adapter').updateRecord(App.store, App.Image, file);
                    //              this.transaction.commit();
                App.store.commit();

//                    console.log("drop");
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
                    //              content.addObject(file);
                },
                        reader.readAsDataURL(tempfile);
                event.preventDefault();
            }

            //   App.store.commit();

            return false;
        }
    });
    return DragNDropController;
});