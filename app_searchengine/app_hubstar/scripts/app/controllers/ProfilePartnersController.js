define(["ember"], function(Ember) {
    var ProfilePartnersController = Ember.Controller.extend({
        content: [],
        clientID: "",
        partnerID: "",
        init: function() {



        },
        getClientId: function(model) {
            this.set('clientID', model.id);
            this.set('partnerID', model.get('profile_partner_ids'));
            console.log(this.get('clientID'));
            console.log(this.get('partnerID'));
            var data = App.Mega.find({RequireType: "partner", profile_partner_ids: this.get('partnerID')});
            this.set('content', data);


        }
    }
    );
    return ProfilePartnersController;
});
