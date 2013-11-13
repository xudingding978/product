HubStar.VideoView = Ember.View.extend({
    templateName: 'video',
    classNames: ["lightbox"],
    TitleTag: false,
    PartnerTag: false,
    DiscussionTag: false,
    NameTag: false,
    didInsertElement: function() {

    },
    setTitleTag: function() {
        $('#article_action').slideToggle(1000);
    },
    setDiscussionTag: function() {
        $('#discuss_action').slideToggle("slow");
        //     this.set('discussionTag', !this.get('discussionTag'));

    },
    setNameTag: function() {
        $('#poster_action').slideToggle("slow");
        //       this.set('nameTag', !this.get('nameTag'));

    },
    setPartnerTag: function() {
        $('#partner_action').slideToggle("slow");
        //       this.set('partnerTag', !this.get('partnerTag'));

    },
    popupAibum: function() {

        $("#collection_tab").slideToggle("slow");
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

$(document).keyup(function(e) {
    if (e.which === 27)
    { // pressed 'esc'
        // HubStar.PhotoView.prototype.closeComment();
        // HubStar.PhotoView.get('controller').closeWindow();
        window.history.back();
    }
    else if ((e.which === 38) || (e.which === 37))
    {
        //press up  or left
        // this.get('controller').prototype.previesImage();
    }
    else if ((e.which === 39) || (e.which === 40))
    {
        //press down  or  right 
        //this.get('controller').prototype.nextImage();
    }
});
