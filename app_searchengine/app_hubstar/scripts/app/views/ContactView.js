define([
    "ember",
    "text!templates/contactTemplate.html",
    "jquery.ui"

], function(Ember, contactTemplate) {
   
        Ember.TEMPLATES["contact"] = Ember.Handlebars.compile(contactTemplate);
    var ContactView = Ember.View.extend({
      classNames: ["contact-container"],
        template: Ember.Handlebars.compile(contactTemplate),
        didInsertElement: function() {
//            this.$().draggable({
//                cursor: "move",
//                scroll: true,
//                scrollSensitivity: 100
//            });

        }
    });
    return ContactView;
});
