define([
    "ember",
    "text!templates/profilesTemplate.html",
    "bootstrapPopover",
    "bootstrapTooltip"

], function(Ember, profilesTemplate) {
    Ember.TEMPLATES["profiles"] = Ember.Handlebars.compile(profilesTemplate);


    var ProfilesView = Ember.View.extend({
        template: Ember.Handlebars.compile(profilesTemplate),
        didInsertElement: function() {

          $('drag_stuff').draggable({
                cancel: ".content",
                cursor: "move",
                containment: "body",
                scroll: true,
                scrollSensitivity: 100
            });

        },
        toggleEditing: function() {
            this.set('editing', !this.get('editing'));

        },
        changeTitle: function() {
            var new_name = this.$("input").val();
            //      alert(new_name);
            this.set("profileName", new_name);
            this.set('editing', false);
        },
    });
    return ProfilesView;
});
