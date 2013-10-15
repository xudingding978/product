/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.FollowingRoute = Ember.Route.extend({
    setupController: function(controller, model) {

        this.controllerFor('user').set('profileSelectionStatus', 'Following');
        this.controllerFor('user').set('collectionTag', false);

        this.controllerFor('user').set('followerTag', false);
        this.controllerFor('user').set('followingTag', true);
        this.controllerFor('user').set('messageTag', false);

        this.controllerFor('userFollowings').setUserFollowings(model);
      
        $(window).scrollTop(0);
    },
    model: function(params) {

        var address = document.URL;
        var user_id = address.split("#")[1].split("/")[2];
        return user_id;
    }
});
