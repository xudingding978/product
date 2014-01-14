HubStar.PdfUploaderView = Ember.View.extend( HubStar.PdfUploaderController.Droppable, {
    contentBinding: 'pdfUploader',
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
