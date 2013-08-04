HubStar.PhotoView = Ember.View.extend({
        templateName: 'photo',
        classNames: ["lightbox"],
        content: [],
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
        },
        closeComment: function() {

            $('#addcommetBut').attr('style', 'display:block');
            $('#commentBox').attr('style', 'display:none');


        }

    });

