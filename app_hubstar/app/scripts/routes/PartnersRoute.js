/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.PartnersRoute = Ember.Route.extend({
    setupController: function(controller, model) {
                // this.controllerFor('ProfileController').set('is_authentic_user', true);
 if (this.controllerFor('checkingLoginStatus').popupLogin())
        {

        // this.controllerFor('profile').selectPartner(model);


        this.controllerFor('profile').set('profileSelectionStatus', 'Partners');
        this.controllerFor('profile').set('reviewTag', false);
        this.controllerFor('profile').set('partnerTag', true);
        this.controllerFor('profile').set('collectionTag', false);
        this.controllerFor('profile').set('followerProfileTag', false);
        
                $('#user-stats > li').removeClass('selected-user-stats');
        $('#partners').addClass('selected-user-stats');
        this.controllerFor('profilePartners').getClientId(model);
        this.controllerFor('profile').selectPartner(model);
                setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 200);
        }
    },
    model: function(params) {

        var address = document.URL;
        var profile_id = address.split("#")[1].split("/")[2];
        var model = HubStar.Profile.find(profile_id);
        return model;
    }
});
