define([
    "ember",
    "text!templates/profilesTemplate.html",
    "controllers/ProfilesController",
    "jquery.ui",
    'helpers'

], function(Ember, profilesTemplate, ProfilesController) {
    Ember.TEMPLATES["profiles"] = Ember.Handlebars.compile(profilesTemplate);


    var ProfilesView = Ember.View.extend({
        template: Ember.Handlebars.compile(profilesTemplate),
        // controller: ProfilesController,
//        toggleEditing: function() {
//        //  alert("toghle");
//         //   this.get('controller').toggleEditing;
//            this.get("controller").send("toggleEditing"); 
//        },
//        changeTitle: function() {
//            var new_name = this.$("input").val();
//            //      alert(new_name);
//            this.set("profileName", new_name);
//            this.set('editing', false);
//        },
    });
    return ProfilesView;
});
