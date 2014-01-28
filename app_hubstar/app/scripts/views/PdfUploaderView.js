HubStar.PdfUploaderView = Ember.View.extend( HubStar.PdfUploaderController.Droppable, {
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
        
//          $( "#pdfUploaderData" )
//  .hover(function() {
//   this.get("controller").set("pdfInfromationEdit", false);
//  }, function() {
//   this.get("controller").set("pdfInfromationEdit", true);
//  });


//  var resetTimer;
//
//        var reset = function()
//        {
//            $('#pdfUploaderData').hide();
//        };
//
//        var f = function(e)
//        {
//            var srcElement = e.srcElement? e.srcElement : e.target;
//
//            if ($.inArray('Files', e.dataTransfer.types) > -1)
//            {
//                e.stopPropagation();
//                e.preventDefault();
//
//                e.dataTransfer.dropEffect = (srcElement.id === 'pdfUploaderData') ? 'copy' : 'none';
//
//                if (e.type === "dragover")
//                {
//                    if (resetTimer)
//                    {
//                        clearTimeout(resetTimer);
//                    }
//                    $('#pdfUploaderData').show();
//                    console.info('dropped on <' + srcElement.tagName.toLowerCase() + ' id="' + srcElement.id + '">\n\ne.dataTransfer.types is ' + e.dataTransfer.types + '\n\ne.dataTransfer.files.length is ' + (e.dataTransfer.files ? e.dataTransfer.files.length : 0));
//
//                }
//                else if (e.type === "dragleave")
//                {
//                    resetTimer = window.setTimeout(reset, 25);
//                }
//                else if (e.type === "drop")
//                {
//                    reset();
//                    alert('dropped on <' + srcElement.tagName.toLowerCase() + ' id="' + srcElement.id + '">\n\ne.dataTransfer.files.length is ' + (e.dataTransfer.files ? e.dataTransfer.files.length : 0));
//                }
//            }
//        };
//
//        document.body.addEventListener("dragleave", f, false);
//        document.body.addEventListener("dragover", f, false);
//        document.body.addEventListener("drop", f, false);
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