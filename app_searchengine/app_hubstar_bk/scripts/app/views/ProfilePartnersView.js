define([
    "ember",
    "text!templates/profilePartnersTemplate.html"
], function(Ember, profilePartnersTemplate) {

    Ember.TEMPLATES["profilePartners"] = Ember.Handlebars.compile(profilePartnersTemplate);

    var ProfilePartnersView = Ember.View.extend({
        template: Ember.Handlebars.compile(profilePartnersTemplate),
        didInsertElement: function() {
            $(function() {
                $('#masonry_profile_partner_container').masonry({
                    itemSelector: '.box',
                    columnWidth: 0,
                    isInitLayout: false,
                    isFitWidth: true
                });
            });
        }
    });

    return ProfilePartnersView;
});