
    HubStar.ItemProfilesController = Ember.Controller.extend({
        profiles: null,
        partnerRemove: "",
        init: function() {
            this.set("profiles", HubStar.Mega.find());
        },
        toProfilePage: function(model) {
            this.transitionToRoute('profile', model);
        },
        setPartnerRemove: function() {
            this.set('partnerRemove', false);
        }
    });