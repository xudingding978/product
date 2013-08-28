
    HubStar.ItemProfilesController = Ember.Controller.extend({
        profiles: null,
        partnerRemove: "",
        init: function() {
            this.set("profiles", HubStar.Mega.find());
        },
        toProfilePage: function(model) {
    
     HubStar.set("scrollPartenerPosition",$(window).scrollTop());
           this.transitionToRoute('profile', model);
           $(window).scrollTop(0); 
        },
        setPartnerRemove: function() {
            this.set('partnerRemove', false);
        }
    });
