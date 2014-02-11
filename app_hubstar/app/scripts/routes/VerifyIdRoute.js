HubStar.VerifyIdRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        var address = document.URL;
        var user_id = address.split("#")[1].split("/")[2];
        var encryptaccount = user_id.split("?")[0];
        var account = this.decrypt(encryptaccount);
        var encryptpassword = user_id.split("?")[1];
        var password = this.decrypt(encryptpassword);
        this.controllerFor('application').verify(account, password);

    },
    decrypt: function(decryptString) {
        var tempstr = '';
        for (var b = 0; b < decryptString.length; b = b + 2) {
            tempstr = tempstr + String.fromCharCode(parseInt(decryptString.substr(b, 2), 16) - 10);
        }
        return tempstr;
    },
    model: function() {
        return 0;
    }
});
