define([
    'ember'

], function(
        Ember
        ) {


    var imageInputButton = Ember.TextField.create({
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
//            for (var i = 0; i < files.length; i++) {
//                var tempfile = files[i];
//                if (tempfile) {
//
//                    var reader = new FileReader();
//                    var that = this;
//                    reader.onload = function(e) {
//                        var path = e.target.result;
//                        console.log("path: " + path);
//                        controller.addFile({"name": "ddddd", "path": path});
//                        var view = that.getPath('parentView.previewImageView');
//                        view.set('src', e.target.result);
//                    },
//                            reader.readAsDataURL(tempfile);
//                }
//            }
        }
    });
    return imageInputButton;
});
