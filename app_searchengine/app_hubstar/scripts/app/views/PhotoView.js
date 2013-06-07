define([
    "ember",
    "text!templates/photoTemplate.html"
], function(Ember, photoTemplate) {
    Ember.TEMPLATES["photo"] = Ember.Handlebars.compile(photoTemplate);
    var PhotoView = Ember.View.extend({
        classNames: ["lightbox"],
        TitleTag: false,
        PartnerTag: false,
        DiscussionTag: false,
        NameTag: false,
        template: Ember.Handlebars.compile(photoTemplate),
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
    return PhotoView;
});
