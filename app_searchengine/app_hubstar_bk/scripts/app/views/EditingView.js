define([
    "ember",
    "text!templates/edtingTemplate.html",
    "jquery.ui",
    "controllers/ProfilesController"
], function(Ember, edtingTemplate, ProfilesController) {
    var EditingView = Ember.View.extend({
        classNames: ["window-container"],
        controller: ProfilesController,
        template: Ember.Handlebars.compile(edtingTemplate),
        didInsertElement: function() {

            this.$().draggable({
                cancel: ".content",
                cursor: "move",
                containment: "body",
                scroll: true,
                scrollSensitivity: 100
            });

        }
    });
    return EditingView;
});
