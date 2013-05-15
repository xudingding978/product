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
            for (var i = 0; i < files.length; i++) {
                var tempfile = files[i];
                if (tempfile) {

                    var reader = new FileReader();
                    var that = this;
                    reader.onload = function(e) {
                        var path = e.target.result;
                        console.log("path: " + path);
                        controller.addFile({"name": "ddddd", "path": path});
                        var view = that.getPath('parentView.previewImageView');
                        view.set('src', e.target.result);
                    },
                            reader.readAsDataURL(tempfile);
                }
            }
        }
    });
    return imageInputButton;
});


//    var PreviewUploadImage = Ember.View.extend({
//        fileField: Ember.TextField.extend({
//            type: 'file',
//            attributeBindings: ['multiple'],
//            multiple: true,
//            change: function(evt) {
//                var input = evt.target;
//                if (input.files && input.files[0]) {
//                    var reader = new FileReader();
//                    var that = this;
//                    reader.onload = function(e) {
//                        //that.$().parent(':eq(0)').children('img:eq(0)').attr('src', e.target.result);
//                        var view = that.getPath('parentView.previewImageView');
//                        view.printme();
//                        view.set('src', e.target.result);
//                        /* since there is a two-way binding with the img src
//                         and the model, an update to one should be reflected
//                         in the other.  However, this doesn't seem to be the case
//                         My guess is because I am not using the ember.js wrapper functions to update
//                         the src attribute.
//                         */
//                        console.log("Model src [" + App.myModel.get('myModel_src') + "]");
//
//                        //App.myModel.set('myModel_src', e.target.result);
//                    }
//                    reader.readAsDataURL(input.files[0]);
//                }
//            },
//            printme: function() {
//                console.log("In FilField view\n");
//            },
//        }),
//        previewImageView: Ember.View.extend({
//            attributeBindings: ['name', 'width', 'height', 'src'],
//            tagName: 'img',
//            viewName: 'previewImageView',
//            printme: function() {
//                console.log('in previewImageView');
//            },
//        }),
//    });
//    return PreviewUploadImage;
//});