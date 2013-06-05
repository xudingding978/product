define(["ember"], function(Ember) {

    var ApplicationController = Ember.Controller.extend({
        popupModal: function() {

            this.set('popup', !this.get('popup'));


        },
        closeModal: function() {

            this.set('popup', !this.get('popup'));


        },
        email_login: function() {

          this.set('mail', !this.get('mail'));
        },
    });

    return ApplicationController;
});
