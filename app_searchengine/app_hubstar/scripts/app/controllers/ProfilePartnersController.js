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



        },
        deletePartner: function(model) {


            var message = "Do you wish to remove this partner ?";
            this.set("message", message);
            this.set('makeSureDelete', true);
            if (this.get('willDelete')) {

                this.set('partnerID', (this.get('partnerID') + ",").replace(App.get('data').id + ",", ""));
                this.set('partnerID', this.get('partnerID').substring(0, this.get('partnerID').length - 1));


                var profileOwner = App.Profile.find(this.get('clientID'));
                profileOwner.set('profile_partner_ids', this.get('partnerID'));
                App.store.get('adapter').updateRecord(App.store, App.Profile, profileOwner);

                var data = App.Mega.find({RequireType: "partner", profile_partner_ids: this.get('partnerID')});
                this.set('content', data);
                this.cancelDelete();
            } else {
                this.set('willDelete', true);
                  App.set('data', model);
            }




        },
        cancelDelete: function() {
            this.set('willDelete', false);
            this.set('makeSureDelete', false);
          
        },
    }
    );
    return ProfilePartnersController;
});
