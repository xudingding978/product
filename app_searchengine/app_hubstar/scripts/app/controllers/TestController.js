define(["ember", 'models/ImageFile'], function(Ember, ImageFile) {
    var TestController = Ember.ArrayController.extend({
        content: [],
        files: null,
        model: ImageFile,
        test: "test",
        getSize: function(tmpfiles) {
            //       console.log(tmpfiles);
            console.log('dddd');

            //       console.log(this.get('content'));
        },
        test: function() {
            console.log("test ok");
            alert("ok");
        },
                addFile: function(file) {

            var file = ImageFile.createRecord(file);
            this.get('content').addObject(file);

            console.log(this.get('content').length);
        }
    }
    );
    return TestController;
});
