define(["ember"], function(Ember) {
    var ApplicationController = Ember.Controller.extend({
        indexPage: true,
        Profile_page: function() {
            this.set('indexPage', false);
        }
    });

    return ApplicationController;
});
