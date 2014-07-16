
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
        

});