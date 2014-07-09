
HubStar.PdfUploaderController = Ember.ObjectController.extend({
    needs: ["profilePdf", "applicationFeedback", 'profile', 'megaCreate'],
    pdfArray: [],
    loadingTime: false,
    pdf_title: "",
    pdf_desc: "",
    profileMega: null,
    pdfInfromationEdit: false,
    actions: {
        closeUploader: function() {
            this.get('controllers.profilePdf').set('is_pdf_create_mode', false);
            this.set('pdfInfromationEdit', false);
            this.reset();
            this.get('controllers.profilePdf').init();
            this.transitionToRoute("profilePdf");
        },
        modifyDetail: function(pdf_id) {
            var pdf = this.seekCurrentPdf(pdf_id);
            if (pdf !== null) {
                this.set("pdf_title", pdf.get('pdf_title'));
                this.set("pdf_desc", pdf.get('pdf_desc'));
                $('#pdf_id_' + pdf_id).slideToggle(200);
                $('#' + pdf_id).slideToggle(1000);
            }
        },
        changeCover: function(param) {
        },
        saveDetail: function(pdf_id) {
            var pdf = this.seekCurrentPdf(pdf_id);
            if (pdf !== null) {
                pdf.set("pdf_title", this.get('pdf_title'));
                pdf.set("pdf_desc", this.get('pdf_desc'));
                pdf.store.save();
                $('#' + pdf_id).slideToggle(1000);
                $('#pdf_id_' + pdf_id).slideToggle(200);
            }
        },
        cancelDetail: function(param) {
            $('#' + param).slideToggle(1000);
            $('#pdf_id_' + param).slideToggle(200);

        }
    },
    init: function() {
        this.setMega();
    },
    cancel: function() {
        this.reset();
        var profilePdf = this.get('controllers.profilePdf');
        profilePdf.send("pdfCreateModeSwitch");
    },
    seekCurrentPdf: function(pdf_id) {
        var pdf = null;
        for (var i = 0; i < this.get("pdfArray").get('length'); i++) {
            if (this.get("pdfArray").objectAt(i).get('id') === pdf_id) {
                pdf = this.get("pdfArray").objectAt(i);
            }
        }
        return pdf;
    },
    profileStyleImageDrop: function(e, name)
    {
        var type = name.split('.')[name.split('.').length-1];
        if (type === "pdf") {
            this.set('pdfInfromationEdit', true);
            var target = getTarget(e, "single");
            this.set('loadingTime', true);
            var src = target.result;
            var testID = createGuid();
            testID = testID.replace('test', '');
            var MegaCreateController = this.get('controllers.megaCreate');

            var mega = MegaCreateController.createNewMega(this.get("profileMega"), testID, null, 'pdf');
            var a = mega.save();
            mega.get('isSaving');
            var that = this;
            a.then(function() {
                requiredBackEnd('pdfs', 'saveToS3', {'id': mega.get('id'),
                    'pdf_cover_image': "http://www.soompi.com/wp-content/uploads/2013/07/IU-tumblr.jpg", 'pdf_title': name.split('.')[0],
                    'pdf_desc': "", 'pdf_url': src, 'pdf_profile_id': that.get('controllers.profile').get('model').get('id')}, 'POST', function(params) {
                    var pdf_url = params.pdf_url;
                    var pdf_cover_image = params.pdf_cover_image;
                    var pdf = HubStar.Pdf.createRecord({'id': mega.get('id'),
                        'pdf_cover_image': pdf_cover_image, 'pdf_title': name.split('.')[0],
                        'pdf_desc': "", 'pdf_url': pdf_url, 'pdf_profile_id': that.get('controllers.profile').get('model').get('id')});
                    pdf.store.save();
                    that.get("pdfArray").insertAt(0, pdf);
                    that.set('loadingTime', false);
                });
            });
            var profile = HubStar.Profile.find(this.get("controllers.profile").get("Id"));
            profile.set("pdf_id", profile.get("'pdf_id") + "," + mega.get('id'));
            profile.store.save();
        }
        else
        {
            this.get('controllers.applicationFeedback').statusObserver(null, "Undefined Format");
        }
    },
    reset: function() {
        this.set('pdfArray', []);
    },
    submit: function() {
        for (var i = 0; i < this.get('pdfArray').get('length'); i++) {
            this.get('pdfArray').objectAt(i).store.save();
        }
        this.send("closeUploader");
    },
    setMega: function() {
        var profileController = this.get('controllers.profile');
        var tempmega = profileController.get("model");
        var that = this;
        that.set("profileMega", tempmega);
        if (that.get("profileMega") === null) {
            tempmega.addObserver('isLoaded', function() {
                if (tempmega.get('isLoaded')) {
                    that.set("profileMega", tempmega);
                }
            });
        }
    }
});
