define([
    "ember",
    "text!templates/photoDisplayAreaTemplate.html"
], function(Ember, photoDisplayAreaTemplate) {
    Ember.TEMPLATES["photoDisplayArea"] = Ember.Handlebars.compile(photoDisplayAreaTemplate);
    var PhotoDisplayAreaView = Ember.View.extend({
        template: Ember.Handlebars.compile(photoDisplayAreaTemplate),
                
                
        imgReturn: function() {

        }.observes('content')
    });

    return PhotoDisplayAreaView;
});
