
HubStar.PdfUploaderController = Ember.ObjectController.extend({
    needs: ["profilePdf", "applicationFeedback", 'profile', 'megaCreate'],
    pdfArray: [],
//    newPdfName: null,
//    newPdfSource: null,
//    newPdfCover: '',
//    newPdfDesc: null,
    pdf_title: "",
    pdf_desc: "",
    profileMega: null,
    pdfInfromationEdit: false,
    init: function() {
        this.setMega();
    },
    cancel: function() {
        this.reset();
        var profilePdf = this.get('controllers.profilePdf');
        profilePdf.pdfCreateModeSwitch();
    },
    closeUploader: function() {
        console.log('close');
        this.get('controllers.profilePdf').set('is_pdf_create_mode', false);
        this.set('pdfInfromationEdit', false);
        this.reset();
        this.controllerFor('profilePdf').init();
        this.transitionTo("profilePdf");
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
        console.log('cancel');
        $('#' + param).slideToggle(1000);
        $('#pdf_id_' + param).slideToggle(200);

    },
    changeCover: function(param) {
        console.log(param);
    },
            
    seekCurrentPdf: function(pdf_id) {
        var pdf = null;
        for (var i = 0; i < this.get("pdfArray").get('length'); i ++) {
            if (this.get("pdfArray").objectAt(i).get('id') === pdf_id) {
                pdf = this.get("pdfArray").objectAt(i);
            }
        }
        return pdf;
    },
    profileStyleImageDrop: function(e, name)
    {
        this.set('pdfInfromationEdit', true);
        var target = getTarget(e, "single");
        console.log(target);
        var src = target.result;
        
        var testID = createGuid();
        testID = testID.replace('test','');
        var MegaCreateController = this.get('controllers.megaCreate');

        var mega = MegaCreateController.createNewMega(this.get("profileMega"), testID, null, 'pdf');        
//        mega.set("object_title", pdf.get('pdf_title'));
//        mega.set("object_description", pdf.get('pdf_desc'));
//        mega.set("object_image_url", pdf.get('pdf_cover_image'));
        //mega.get('pdf').pushObject(pdf);
        //var b = pdf.save();
        //pdf.get("isSaving");
        var a = mega.save();
        mega.get('isSaving');
        var that = this;
        a.then(function() {
            console.log("45645645654564564646546465465");
            requiredBackEnd('pdfs', 'saveToS3', {'id':mega.get('id'),
            'pdf_cover_image': "http://www.soompi.com/wp-content/uploads/2013/07/IU-tumblr.jpg", 'pdf_title': name.split('.')[0],
            'pdf_desc': "", 'pdf_url': src, 'pdf_profile_id': that.get('controllers.profile').get('model').get('id')}, 'POST', function(params) {
                console.log(params.pdf_url);
                var pdf_url = params.pdf_url;
                var pdf_cover_image = params.pdf_cover_image;
                var pdf = HubStar.Pdf.createRecord({'id':mega.get('id'),
                'pdf_cover_image': pdf_cover_image, 'pdf_title': name.split('.')[0],
                'pdf_desc': "", 'pdf_url': pdf_url, 'pdf_profile_id': that.get('controllers.profile').get('model').get('id')});
                pdf.store.save();
                 that.get("pdfArray").insertAt(0,pdf);
            });
                        
//            

        });
//        console.log('1111111111111111');
        var profile = HubStar.Profile.find(this.get("controllers.profile").get("Id"));


//        this.get("controllers.profile").set("profileVideoStatistics", profileVideosController.get("videoesContent").get("length"));

        profile.set("pdf_id", profile.get("'pdf_id") + "," + mega.get('id'));

        profile.store.save();
//        profilePdfController.set("loadingTime",true);
//        mega.then(function() {
//            profile.then(function() {
//                setTimeout(function() {
//                    profilePdfController.getClientId(profile);
//                }, 2000);
//            });
//        });
//
//
//        this.canel();


    },
    reset: function() {
        this.set('pdfArray', []);
    },
    submit: function() {
        console.log('submit');
        for (var i = 0; i < this.get('pdfArray').get('length'); i++) {
            this.get('pdfArray').objectAt(i).store.save();
        }
        this.closeUploader();
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
