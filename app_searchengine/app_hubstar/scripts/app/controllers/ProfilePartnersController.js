define(["ember"], function(Ember) {
    var ProfilePartnersController = Ember.Controller.extend({
        content: [],
        clientID: "",
        partnerID: "",
        addPartner: true,
        init: function() {




        },
        getClientId: function(model) {
            this.set('clientID', model.id);
            this.set('partnerID', model.get('profile_partner_ids'));
            //          console.log(this.get('clientID'));
            //         console.log(this.get('partnerID'));
            var data = App.Mega.find({RequireType: "partner", profile_partner_ids: this.get('partnerID')});
            this.set('content', data);



        },
        deletePartner: function(model) {


            var message = "Do you wish to remove this partner ?";
            this.set("message", message);
            this.set('makeSureDelete', true);
            if (this.get('willDelete')) {
                console.log("deletePartner1111111    " + this.get('partnerID'));
                this.set('partnerID', (this.get('partnerID') + ",").replace(App.get('data').id.toLowerCase() + ",", ""));
                this.set('partnerID', this.get('partnerID').substring(0, this.get('partnerID').length - 1));


                var profileOwner = App.Profile.find(this.get('clientID'));
                profileOwner.set('profile_partner_ids', this.get('partnerID'));
                App.store.get('adapter').updateRecord(App.store, App.Profile, profileOwner);


//                var data = App.Mega.find({RequireType: "partner", profile_partner_ids: this.get('partnerID')});
//                data.store.save();
//                this.set('content', data);
                this.cancelDelete();
            } else {
                this.set('willDelete', true);

                App.set('data', model);
                console.log(App.get('data').id.toLowerCase());
            }

            console.log("deletePartner2222222222     " + this.get('partnerID'));


        },
        cancelDelete: function() {
            this.set('willDelete', false);
            this.set('makeSureDelete', false);
            App.set('data', null);
        },
        submit: function() {
            var client_input = $('.new-collection-name_insert').val();
            console.log("submit   " + this.get('partnerID'));

            if (client_input.indexOf("/profiles/") !== -1) {

                var client_id = client_input.split("/profiles/")[1];
                var temp = this.get('partnerID');
                if (temp === null || temp === "") {

                    this.set('partnerID', client_id);
                    var profileOwner = App.Profile.find(this.get('clientID'));

                    profileOwner.set('profile_partner_ids', this.get('partnerID'));
                    App.store.get('adapter').updateRecord(App.store, App.Profile, profileOwner);

                } else {

                    if (temp.indexOf(client_id) !== -1) {
                        alert('this partner already in your list');
                    } else {
                        this.set('partnerID', client_id + "," + temp);


                        var profileOwner = App.Profile.find(this.get('clientID'));
                        profileOwner.set('profile_partner_ids', this.get('partnerID'));
                        App.store.get('adapter').updateRecord(App.store, App.Profile, profileOwner);

                    }


                }
//                var data = App.Mega.find({RequireType: "partner", profile_partner_ids: this.get('partnerID')});
//                data.store.save();
//                this.set('content', data);
            } else {
                alert('please input valid url!!!');
            }
            console.log("submit     " + this.get('partnerID'));
        }
    }
    );
    return ProfilePartnersController;
});
