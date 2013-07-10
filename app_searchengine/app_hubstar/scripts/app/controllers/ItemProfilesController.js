define(["ember"], function(Ember) {
    var ItemProfilesController = Ember.Controller.extend({
        profiles: null,
        init: function() {
            this.set("profiles", App.Mega.find());
            console.log();
        },
    });
    return ItemProfilesController;
});
