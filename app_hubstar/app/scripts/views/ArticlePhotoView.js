HubStar.ArticlePhotoView = Ember.View.extend({
    classNames: ["lightbox"],
    templateName: 'showAlbum',
    readContent: true,

    didInsertElement: function() {

    },
    checkReading: function() {
        $('.article-objectview-right').animate({
            width: '45%'
        }, 500, function() {
            // Animation complete.
        });


        $('.article-objectview-left').animate({
            width: '55%'
        }, 500, function() {
            // Animation complete.
        });
        $('.lightbox').attr("style", "min-width:700px");
        this.set('readContent', !this.get("readContent"));
        $('#article_action').slideToggle(1000);
    },
    checkClosed: function() {

        $('.article-objectview-right').animate({
            width: '320px'
        }, 500, function() {
            // Animation complete.
        });


        $('.article-objectview-left').animate({
            width: 'auto'
        }, 500, function() {
            // Animation complete.
        });

        $('.article-objectview-left').attr("style", "bottom: 0; top: 0; left: 0; margin: 0; position: absolute; right: 320px; overflow: hidden; transition:all 0.5 ease; ");
        this.set('readContent', !this.get("readContent"));
        $('#article_action').slideToggle(1000);
    },
    setDiscussionTag: function() {
        $('#discuss_action').slideToggle("slow");

    },
    setNameTag: function() {
        $('#poster_action').slideToggle("slow");
    },
    setPartnerTag: function() {
        $('#partner_action').slideToggle("slow");
    },
    popupAibum: function() {
       $("#collection_tab1").slideToggle("slow");
    },
    openComment: function() {

        $('#addcommetBut').attr('style', 'display:none');
        $('#commentBox').attr('style', 'display:block');
        $('.comment-insert-field').focus();
        this.get("controller").get("controllers.checkingLoginStatus").popupLogin();

    },
    closeComment: function() {

        $('#addcommetBut').attr('style', 'display:block');
        $('#commentBox').attr('style', 'display:none');


    }



});