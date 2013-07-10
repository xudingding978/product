define(["ember"], function(Ember) {
    var ProfilePartnersController = Ember.Controller.extend({
        content: [],
        clientID: "",
        init: function() {


          


        },
        getClientId: function(id) {
            this.set('clientID', id);
           var data = App.Mega.find({RequireType: "partner", id: this.get('clientID')});
           console.log(data);
           
        }
    }
    );
    return ProfilePartnersController;
});
