
HubStar.PdfUploaderView = Ember.View.extend( HubStar.SingleFileUploaderController.Droppable, {

    contentBinding: 'pdfUploader',
    didInsertElement: function() {
        $(document).ready(function() {
            $('#pdfInformation').mCustomScrollbar({
                scrollButtons: {
                    enable: false,
                    scrollSpeed: "auto"
                },
                advanced: {
                    updateOnBrowserResize: true,
                    updateOnContentResize: true,
                    autoScrollOnFocus: false,
                    normalizeMouseWheelDelta: false
                },
                autoHideScrollbar: true,
                mouseWheel: true,
                theme: "dark-2",
                set_height: 470
            });
        });
    }



































//    drop: function(event) {
//        var dataTransfer = event.originalEvent.dataTransfer;
//        var files = dataTransfer.files;
//        var controller = this.get("controller");
//       var  filesize = 0;
//
//        var pdfUploaderController = controller.get('controllers.pdfUploader');      
////        photoCreateController.fileChecking(files.length);
////        photoCreateController.checkingCleanBeforeUpload();
//        for (var i = 0; i < files.length; i++) {
//            (function(file) {
//                var name = file.name;
//                var type = file.type;
//                filesize = file.size;
//               // console.log(filesize);
//                if(filesize>=25000000)
//                {
//                  alert("The limit size of uploading is 25MB");
//                }
//                else
//                {
//                    var reader = new FileReader();
//                    reader.onload = function(e) {
//                    pdfUploaderController.addPdfObject(e, name, type, filesize);
//                      
//                    }, reader.readAsDataURL(files[i]);
//              }
//            })(files[i]);
//        }
//   //    console.log(filesize);
//        $('#dragAndDroppArea').attr('style', "display:block");
//        return false;
//    }

});