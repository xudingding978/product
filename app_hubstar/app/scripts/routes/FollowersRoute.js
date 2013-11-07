/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.FollowersRoute = Ember.Route.extend({
    setupController: function(controller, model) {
 
        this.controllerFor('user').set('profileSelectionStatus', 'Followers');
        this.controllerFor('user').set('collectionTag', false);

        this.controllerFor('user').set('followerTag', true);
        this.controllerFor('user').set('followingTag', false);
        this.controllerFor('user').set('messageTag', false);


        
        $('#user-stats > li').removeClass('selected-user-stats');
        $('#ufollower').addClass('selected-user-stats');
   this.controllerFor('userFollowers').setUserFollowers(model);

        $(window).scrollTop(0);
    },
    model: function(params) {

        var address = document.URL;
        var user_id = address.split("#")[1].split("/")[2];
        return user_id;
    }
});
