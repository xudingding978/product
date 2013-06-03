define([
    "ember",
    "text!templates/defaultTemplate.html"
], function(Ember, defaultTemplate) {
    Ember.TEMPLATES["default"] = Ember.Handlebars.compile(defaultTemplate);
    var defaultView = Ember.View.extend({
        template: Ember.Handlebars.compile(defaultTemplate)
//        afterRender: function(){
//            this.get('controller').set("viewRendered", true);
//        }
    });
    return defaultView;
});
