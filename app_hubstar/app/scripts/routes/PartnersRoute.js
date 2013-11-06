/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.PartnersRoute = Ember.Route.extend({
    setupController: function(controller, model) {
    this.controllerFor('profilePartners').getClientId(model);
          this.controllerFor('profile').selectPartner(model);
    },
    model: function(params) {

        var address = document.URL;
        var profile_id = address.split("#")[1].split("/")[2];
        var model = HubStar.Profile.find(profile_id);
        return model;
    }
});
