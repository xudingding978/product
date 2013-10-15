/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.PartnersRoute = Ember.Route.extend({
    setupController: function(controller, model) {

        $('#user-stats > li').removeClass('selected-user-stats');
        $('#partners').addClass('selected-user-stats');
          this.controllerFor('profile').selectPartner(model);

        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 200);
    },
    model: function(params) {

        var address = document.URL;
        var profile_id = address.split("#")[1].split("/")[2];
        var model = HubStar.Profile.find(profile_id);
        return model;
    }
});
