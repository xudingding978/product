define([
    "ember",
    "text!templates/photosTemplate.html"
], function(Ember, photosTemplate) {
    Ember.TEMPLATES["photos"] = Ember.Handlebars.compile(photosTemplate);
    var PhotosView = Ember.View.extend({
        classNames: ["lightbox"],
        TitleTag: false,
        PartnerTag: false,
        DiscussionTag: false,
        NameTag: false,
        template: Ember.Handlebars.compile(photosTemplate),
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
    return PhotosView;
});
