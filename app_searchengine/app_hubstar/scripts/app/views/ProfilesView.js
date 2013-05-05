define([
  "ember",
  "text!templates/profilesTemplate.html"

], function(Ember, profilesTemplate){
//    Ember.TEMPLATES["123"] = Ember.Handlebars.compile(profilesTemplate);
    
    
  var ProfilesView = Ember.View.extend({

    template: Ember.Handlebars.compile(profilesTemplate)

  });
  return ProfilesView;
});
