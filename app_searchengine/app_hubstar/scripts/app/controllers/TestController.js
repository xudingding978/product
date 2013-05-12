define(["ember"], function(Ember) {
    var TestController = Ember.ArrayController.extend({
        content: [],
        files: null,
        //       model: imageFile,
        formDirty: false,
        getSize: function(tmpfiles) {
            //       console.log(tmpfiles);
            console.log('dddd');

            //       console.log(this.get('content'));
        },
        test: function() {
            console.log("test ok");
            alert("ok");
        },
        addFile: function(thisfile) {
          //  this.set('files', thisfiles);
            //     this.set('content', thisfiles);
//            for (var i = 0; i < thisfiles.length; i++) { 
                     this.get('content').pushObject(thisfile);
//            }
                console.log(this.get('content'));
    //        console.log( this.get('files').length);

            // fell through --> add it to the end.

        }
    }
    );
    return TestController;
});
