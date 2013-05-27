define([
    'ember'
], function(
        Ember
        ) {
    var PhotoSelectButton = Ember.TextField.extend({
        type: 'file',
        attributeBindings: ['multiple'],
        multiple: true,
        change: function(evt) {
            var input = evt.target;
            var files = input.files;
            console.log("button controller");
            var controller = this.get('controller');
            console.log(controller);
          controller.commitFiles(files);
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
    return PhotoSelectButton;
});
