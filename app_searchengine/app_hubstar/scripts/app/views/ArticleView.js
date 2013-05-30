define([
    "ember",
    "text!templates/articleTemplate.html"
], function(Ember, articleTemplate) {
    Ember.TEMPLATES["article"] = Ember.Handlebars.compile(articleTemplate);
    var ArticleView = Ember.View.extend({
        classNames: ["lightbox"],
        template: Ember.Handlebars.compile(articleTemplate),
        didInsertElement: function() {


        },
        checkReading: function() {
            $('.objectview-right').animate({
                width: '45%'
            }, 500, function() {
                // Animation complete.
            });


            $('.objectview-left').animate({
                width: '55%'
            }, 500, function() {
                // Animation complete.
            });
            $('.lightbox').attr("style", "min-width:700px");
            this.set('readContent', !this.get("readContent"));

        },
        checkClosed: function() {

            $('.objectview-right').animate({
                width: '320px'
            }, 500, function() {
                // Animation complete.
            });


            $('.objectview-left').animate({
                width: 'auto'
            }, 500, function() {
                // Animation complete.
            });

//          $('.lightbox').attr("style" , "min-width:none");
            $('.objectview-left').attr("style", "bottom: 0; top: 0; left: 0; margin: 0; position: absolute; right: 320px; overflow: hidden; transition:all 0.5 ease; ");
//             $('.objectview-right').attr("style" , "bottom: 0; position: absolute; right: 0; top: 0; width: 320px; background-color: white; overflow-y: scroll; ");
            this.set('readContent', !this.get("readContent"));

        },
        setTitleTag: function() {
            $('.object-detail_content').slideToggle("slow");
        },
        setPartnerTag: function() {
            $('.object-partner_content').slideToggle("slow");
            //       this.set('partnerTag', !this.get('partnerTag'));

        },
        setDiscussionTag: function() {
            $('.object-discussion_content').slideToggle("slow");
            //     this.set('discussionTag', !this.get('discussionTag'));

        },
        setNameTag: function() {
            $('.object-poster_contact').slideToggle("slow");
            //       this.set('nameTag', !this.get('nameTag'));

        }
    });
    return ArticleView;
});
