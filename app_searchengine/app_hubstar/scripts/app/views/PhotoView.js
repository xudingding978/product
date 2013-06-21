define([
    "ember",
    "text!templates/photoTemplate.html"

], function(Ember, photoTemplate) {
    Ember.TEMPLATES["photo"] = Ember.Handlebars.compile(photoTemplate);
    var PhotoView = Ember.View.extend({
        classNames: ["lightbox"],
        content: [],
        TitleTag: false,
        PartnerTag: false,
        DiscussionTag: false,
        NameTag: false,
        template: Ember.Handlebars.compile(photoTemplate),
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

            $("#collection_tab").slideToggle("slow" );
        }

    });
   
    return PhotoView;
});
