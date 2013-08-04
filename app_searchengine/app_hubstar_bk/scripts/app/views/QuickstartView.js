define([
  "ember",
  "text!templates/quickstartTemplate.html"
], function(Ember, quickstartTemplate){
        Ember.TEMPLATES["quickstart"] = Ember.Handlebars.compile(quickstartTemplate);
  var QuickstartView = Ember.View.extend({

    template: Ember.Handlebars.compile(quickstartTemplate)
  });
  return QuickstartView;
});
