/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.ProfileFollowersRoute = Ember.Route.extend({
    setupController: function(controller, model) {

 if (this.controllerFor('checkingLoginStatus').popupLogin())
        {

       $(window).scrollTop(1500);      

         this.controllerFor('profile').sendEventTracking('event', 'button', 'click', 'Followers');
         this.controllerFor('profile').set('profileSelectionStatus', 'Followers');
         this.controllerFor('profile').set('partnerTag', false);
         this.controllerFor('profile').set('collectionTag', false);
         this.controllerFor('profile').set('followerProfileTag', true);         
        $('#user-stats > li').removeClass('selected-user-stats');
        $('#follow').addClass('selected-user-stats');
          this.controllerFor('userFollowers').getProfileId(model);
        }
    },
    model: function(params) {

        var address = document.URL;
        var profile_id = address.split("#")[1].split("/")[2];
        var model = HubStar.Profile.find(profile_id);
        return model;
    }
});

