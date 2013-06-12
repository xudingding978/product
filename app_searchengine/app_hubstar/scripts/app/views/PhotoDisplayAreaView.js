define([
    "ember",
    "text!templates/photoDisplayAreaTemplate.html"
], function(Ember, photoDisplayAreaTemplate) {
    Ember.TEMPLATES["photoDisplayArea"] = Ember.Handlebars.compile(photoDisplayAreaTemplate);
    var PhotoDisplayAreaView = Ember.View.extend({
        template: Ember.Handlebars.compile(photoDisplayAreaTemplate),
        percentCompleteBinding: 'App.MegaController.percentComplete',
  percentChanged: function() {
  var  percentString = (this.get('controller.percentComplete') + "%");
   console.log(percentString);
  }.observes('controller.percentComplete')
    });

    return PhotoDisplayAreaView;
});
