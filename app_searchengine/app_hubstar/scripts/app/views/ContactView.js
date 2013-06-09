define([
    "ember",
    "text!templates/contactTemplate.html",
    "jquery.ui"

], function(Ember, contactTemplate) {
    var ContactView = Ember.View.extend({
        classNames: ["window-container"],
        template: Ember.Handlebars.compile(contactTemplate),
        didInsertElement: function() {

            this.$().draggable({

                cursor: "move",

                scroll: true,
                scrollSensitivity: 100
            });

        }
    });
    return ContactView;
});