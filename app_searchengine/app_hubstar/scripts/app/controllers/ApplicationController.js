define(["ember"], function(Ember) {
    var ApplicationController = Ember.Controller.extend({
        indexPage: true,
        profileName: "leo",
        Profile_page: function() {
            this.set('indexPage', false);
        },
        toggleEditing: function() {
            alert("aa");
            this.set('editing', !this.get('editing'));

        },
        changeTitle: function() {
            var new_name = this.$("input").val();
            //      alert(new_name);
            this.set("profileName", new_name);
            this.set('editing', false);
        }
    });

    return ApplicationController;
});
