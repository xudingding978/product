define([
    "ember",
    "text!templates/profilePartnersTemplate.html"
], function(Ember, profilePartnersTemplate) {

    Ember.TEMPLATES["profilePartners"] = Ember.Handlebars.compile(profilePartnersTemplate);

    var ProfilePartnersView = Ember.View.extend({
        template: Ember.Handlebars.compile(profilePartnersTemplate)
    });

    return ProfilePartnersView;
});