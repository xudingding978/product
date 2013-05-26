define([
    "ember",
    "text!templates/photosTemplate.html"
], function(Ember, photosTemplate) {
    Ember.TEMPLATES["photos"] = Ember.Handlebars.compile(photosTemplate);
    var PhotosView = Ember.View.extend({
        classNames: ["lightbox"],
        template: Ember.Handlebars.compile(photosTemplate),
        didInsertElement: function() {



        },
        setTitleTag: function() {

            this.set('TitleTag', !this.get('TitleTag'));

        },
        setPartnerTag: function() {

            this.set('PartnerTag', !this.get('PartnerTag'));

        },
        setDiscussionTag: function() {

            this.set('DiscussionTag', !this.get('DiscussionTag'));

        },
        setNameTag: function() {

            this.set('NameTag', !this.get('NameTag'));

        }
    });
    return PhotosView;
});
