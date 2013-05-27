define([
    "ember",
    "text!templates/articlesTemplate.html"
], function(Ember, articlesTemplate) {
    Ember.TEMPLATES["articles"] = Ember.Handlebars.compile(articlesTemplate);
    var ArticlesView = Ember.View.extend({
        classNames: ["lightbox"],
        template: Ember.Handlebars.compile(articlesTemplate),
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
