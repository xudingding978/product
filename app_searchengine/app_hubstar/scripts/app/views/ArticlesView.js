define([
    "ember",
    "text!templates/articlesTemplate.html"
], function(Ember, articlesTemplate) {
    Ember.TEMPLATES["articles"] = Ember.Handlebars.compile(articlesTemplate);
    var ArticlesView = Ember.View.extend({
        classNames: ["lightbox"],
        template: Ember.Handlebars.compile(articlesTemplate),
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
            $('.lightbox').attr("style",  "min-width:700px");
            this.set('readContent', !this.get("readContent"));

        },
        checkClosed: function() {
            var width_test = $(window).width() - 320;

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
            $('.objectview-left').attr("style" , "bottom: 0; top: 0; left: 0; margin: 0; position: absolute; right: 320px; overflow: hidden; transition:all 0.5 ease; ");
//             $('.objectview-right').attr("style" , "bottom: 0; position: absolute; right: 0; top: 0; width: 320px; background-color: white; overflow-y: scroll; ");
            this.set('readContent', !this.get("readContent"));

        },
        didInsertElement: function() {


        },
        setTitleTag: function() {

            this.set('titleTag', !this.get('titleTag'));

        },
        setPartnerTag: function() {

            this.set('partnerTag', !this.get('partnerTag'));

        },
        setDiscussionTag: function() {

            this.set('discussionTag', !this.get('discussionTag'));

        },
        setNameTag: function() {

            this.set('nameTag', !this.get('nameTag'));

        }
    });
    return ArticlesView;
});
