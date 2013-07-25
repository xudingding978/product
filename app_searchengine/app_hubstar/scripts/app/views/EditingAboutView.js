define([
    "ember",
    "text!templates/edtingAboutTemplate.html",
    "jquery.ui",
    "controllers/ProfilesController"
   // "wysihtml5",
  //  'bootstrap-wysihtml5'
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
