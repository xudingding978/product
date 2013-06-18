define([
    "ember",
    "text!templates/comingSoonTemplate.html"
], function(Ember, comingSoonTemplate) {

    Ember.TEMPLATES["comingSoon"] = Ember.Handlebars.compile(comingSoonTemplate);

    var ComingSoonView = Ember.View.extend({
  
        template: Ember.Handlebars.compile(comingSoonTemplate),
        didInsertElement: function() {
          

        }

    });

    return ComingSoonView;
});