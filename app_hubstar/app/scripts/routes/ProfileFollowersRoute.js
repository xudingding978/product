/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.ProfileFollowersRoute = Ember.Route.extend({
    setupController: function(controller, model) {


//        $('#user-stats > li').removeClass('selected-user-stats');
        $('#follow').addClass('selected-user-stats');
        this.controllerFor('profile').selectFollower(model);

    },
    model: function(params) {

        var address = document.URL;
        var profile_id = address.split("#")[1].split("/")[2];
        var model = HubStar.Profile.find(profile_id);
        return model;
    }
});
