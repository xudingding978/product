define('controllers/ProfilesController',
    ['ember' ],
    function () {
    var ProfilesController = Ember.ObjectController.extend({
        editing: false,
        toggleEditing: function() {
       //     alert("aa");
            this.set('editing', !this.get('editing'));

        },
        changeTitle: function() {
         //   var new_name = this.$("input").val();
            //      alert(new_name);
          //  this.set("profileName", new_name);
            this.set('editing', false);
        }
    });
    return ProfilesController;
});
