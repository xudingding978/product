define([
    "ember",
    "text!templates/itemProfilesTemplate.html"
], function(Ember, itemProfilesTemplate) {

    Ember.TEMPLATES["itemProfiles"] = Ember.Handlebars.compile(itemProfilesTemplate);

    var ItemProfilesView = Ember.View.extend({
        template: Ember.Handlebars.compile(itemProfilesTemplate)
    });

    return ItemProfilesView;
});