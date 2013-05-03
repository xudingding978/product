define([
    "ember",
    "text!templates/mouseEventTemplate.html"
], function(Ember, mouseEventTemplate) {

    Ember.TEMPLATES["mouseEvent"] = Ember.Handlebars.compile(mouseEventTemplate);

    var mouseEventView = Ember.View.extend();
    return mouseEventView;
});