HubStar.PdfInputButtonView = Ember.TextField.extend({
    type: 'file',
    classNameBindings: ['new-btn'],
    attributeBindings: ['multiple'],
    multiple: true,
    change: function(evt) {
        
        var controller = this.get('targetObject').get('parentController');
        var PdfUploaderController = controller.get('controllers.pdfUploader');
        PdfUploaderController.commitFiles(evt);
    }
});
