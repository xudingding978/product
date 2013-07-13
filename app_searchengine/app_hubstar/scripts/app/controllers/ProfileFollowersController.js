define(["ember"], function(Ember) {
    var ProfileFollowersController = Ember.Controller.extend({
        content: [],
        followers: "",
        getClientId: function(model) {
            console.log(model);
            this.set('clientID', model.id);
            this.set('followers', model.get('followers'));
            console.log(this.get('clientID'));
            console.log(this.get('followers'));
            //   var data = App.Mega.find({RequireType: "partner", profile_partner_ids: this.get('partnerID')});
            this.set('content', this.get('followers'));



        },
    });
    return ProfileFollowersController;
});
