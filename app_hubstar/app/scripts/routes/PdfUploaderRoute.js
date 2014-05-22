

HubStar.PdfUploaderRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        this.controllerFor('profilePdf').set('is_pdf_create_mode', true);   
    }

});