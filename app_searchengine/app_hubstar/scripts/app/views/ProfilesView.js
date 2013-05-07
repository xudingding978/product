define([
  "ember",
  "text!templates/profilesTemplate.html"
], function(Ember, profilesTemplate){
    Ember.TEMPLATES["profiles"] = Ember.Handlebars.compile(profilesTemplate);
   
  var ProfilesView = Ember.View.extend({
    template: Ember.Handlebars.compile(profilesTemplate)
  });
  return ProfilesView;
});
