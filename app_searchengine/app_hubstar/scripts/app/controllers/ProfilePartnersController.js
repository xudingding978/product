define(["ember"], function(Ember) {
    var ProfilePartnersController = Ember.Controller.extend({
        content: [],
        clientID: "",
        partnerID: "",
        model: "",
        addPartner: true,
        currentAddPartnerPic: null,
        selectedPartnerPic: "",
        is_authentic_user: false,
        init: function() {
        },
        addingPartnerObserver: function() {

            var addProfilePic = this.get('currentAddPartnerPic').split("/profiles/")[1];
            this.set('selectedPartnerPic', App.Profile.find(addProfilePic).get('profile_pic_url'));
        }.observes('currentAddPartnerPic'),
        getClientId: function(model) {
            this.set('content', []);
            this.set("model", model);
            this.set('clientID', model.id);
            this.set('partnerID', model.get('profile_partner_ids'));
            var data = App.Mega.find({RequireType: "partner", profile_partner_ids: this.get('partnerID')});
            var that = this;
            data.addObserver('isLoaded', function() {
                that.checkAuthenticUser();
                if (data.get('isLoaded')) {
                    for (var i = 0; i < data.get("length"); i++) {
                        var tempmega = data.objectAt(i);
                        that.get("content").pushObject(tempmega);
                    }
                }
            });
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
                this.removePartnerObject(App.get('data').id);
                App.store.get('adapter').updateRecord(App.store, App.Profile, profileOwner);
                this.cancelDelete();
            } else {
                this.set('willDelete', true);
                App.set('data', model);
            }
        },
        removePartnerObject: function(partner_id)
        {
            var data = this.get('content');
            for (var i = 0; i < data.get("length"); i++) {
                var tempmega = data.objectAt(i);
                if (tempmega.get('id') === partner_id) {
                    data.removeObject(tempmega);
                    break;
                }
            }
        },
        cancelDelete: function() {
            this.set('willDelete', false);
            this.set('makeSureDelete', false);
            App.set('data', null);
        },
        submit: function() {
            var client_input = $('.new-collection-name_insert').val();
            if (client_input.indexOf("/profiles/") !== -1) {
                var client_id = client_input.split("/profiles/")[1];
                var temp = this.get('partnerID');
                if (temp === null || temp === "") {
                    this.set('partnerID', client_id);
                    this.pushUptoBackend(client_id);
                } else {
                    if (temp.indexOf(client_id) !== -1) {
                        alert('this partner already in your list');
                    } else {
                        this.set('partnerID', client_id + "," + temp);
                        this.pushUptoBackend(client_id);
                    }
                }

            } else {
                alert('please input valid url!!!');
            }
        },
        pushUptoBackend: function(client_id)
        {
            var profileOwner = App.Profile.find(this.get('clientID'));
            profileOwner.set('profile_partner_ids', this.get('partnerID'));
            var newPartner = App.Mega.find(client_id);
            this.get("content").pushObject(newPartner);
            App.store.get('adapter').updateRecord(App.store, App.Profile, profileOwner);
        },
        checkAuthenticUser: function() {
            var authenticUsers = this.get("model").get("owner") + "," + this.get("model").get("profile_editors");
            var currentUser = App.User.find(localStorage.loginStatus);
            var that = this;
            var email = currentUser.get('email');
            if (authenticUsers !== null && authenticUsers !== undefined && email !== null && email !== undefined) {
                this.setIsAuthenticUser(authenticUsers, email);
            }
            currentUser.addObserver('isLoaded', function() {
                email = currentUser.get('email');
                if (currentUser.get('isLoaded')) {
                    that.setIsAuthenticUser(authenticUsers, email);
                }
            });
        },
        setIsAuthenticUser: function(authenticUsers, email)
        {

            if (authenticUsers.indexOf(email) !== -1) {
                this.set('is_authentic_user', true);
            }
            else if (email.indexOf('@trendsideas.com') !== -1) {
                this.set('is_authentic_user', true);
            }
            else {
                this.set('is_authentic_user', false);
            }
        },
    }
    );
    return ProfilePartnersController;
});
