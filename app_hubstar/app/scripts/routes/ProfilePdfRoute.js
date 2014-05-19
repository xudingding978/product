/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.ProfilePdfRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        console.log('translate to pdf');
         console.log(controller);
         controller.getClientId(model);

    },
    model: function(params) {

        var address = document.URL;
        var profile_id = address.split("#")[1].split("/")[2];
        var model = HubStar.Profile.find(profile_id);
        return model;
    }
});

