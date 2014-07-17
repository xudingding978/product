
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
                
            }
        },
        changeCover: function(param) {
        },
        submit: function() {
            for (var i = 0; i < this.get('pdfArray').get('length'); i++) {
                this.get('pdfArray').objectAt(i).store.save();
            }
            this.send("closeUploader");
        },
        saveDetail: function(pdf_id) {
            var pdf = this.seekCurrentPdf(pdf_id);
            if (pdf !== null) {
                pdf.set("pdf_title", this.get('pdf_title'));
                pdf.set("pdf_desc", this.get('pdf_desc'));                
                pdf.store.save();
                this.get('controllers.applicationFeedback').statusObserver(null, "Saved Successfully.");
            }
        },
        cancelDetail: function(param) {
           

        }
    },
    init: function() {
        this.setMega();
    },
//    cancel: function() {
//        this.reset();
//        var profilePdf = this.get('controllers.profilePdf');
//        profilePdf.pdfCreateModeSwitch();     
//    },
//    deletePdf: function(id) {
//        this.get('controllers.profilePdf').deleteSelectedCollection(id);
//    },
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
                    that.set("pdf_title", name.split('.')[0]);
                that.set("pdf_desc", "");
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
    commitFiles: function(evt) {
        $('#dragAndDroppArea').attr('style', "display:block");
        var input = evt.target;
        var files = input.files;
        var that = this;
//        this.fileChecking(files.length);
//        this.checkingCleanBeforeUpload();
        for (var i = 0; i < files.length; i++) {
            (function(file) {
                var name = file.name;
                var type = file.type;
                var fileSize = file.size;
                var reader = new FileReader();
                reader.onload = function(e) {
                    that.profileStyleImageDrop(e, name);
                }, reader.readAsDataURL(files[i]);
            })(files[i]);
            evt.preventDefault();
        }
    },
    reset: function() {
        this.set('pdfArray', []);
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

HubStar.PdfUploaderController.cancel = function(event) {
    event.preventDefault();
    return false;
};

