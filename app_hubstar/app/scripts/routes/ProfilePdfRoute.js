/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.ProfilePdfRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        var address = document.URL;
        var l = address.split("#")[1].split("/").length;
        if (l > 4) {
            if (address.split("#")[1].split("/")[4] === "pdf")
            {
            }
            else
            {
                this.controllerFor('profile').selectPdf(model);
            }
        }
        else {
            this.controllerFor('profile').selectPdf(model);
        }

    },
    model: function(params) {

        var address = document.URL;
        var profile_id = address.split("#")[1].split("/")[2];
        var model = HubStar.Profile.find(profile_id);
        return model;
    }
});

