define([
  "ember",
  "text!templates/welcomeTemplate.html"
], function(Ember, welcomeTemplate){
        Ember.TEMPLATES["welcome"] = Ember.Handlebars.compile(welcomeTemplate);
  var WelcomeView = Ember.View.extend({

    template: Ember.Handlebars.compile(welcomeTemplate)
  });
  return WelcomeView;
});
