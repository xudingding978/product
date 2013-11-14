/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.PostRoute = Ember.Route.extend({
    setupController: function(controller, model) {
 
        this.controllerFor('user').set('profileSelectionStatus', 'Post');
        this.controllerFor('user').set('collectionTag', false);

        this.controllerFor('user').set('followerTag', true);
        this.controllerFor('user').set('followingTag', false);
        this.controllerFor('user').set('messageTag', false);
         this.controllerFor('user').set('postTag', true);

        
        $('#user-stats > li').removeClass('selected-user-stats');
        $('#post').addClass('selected-user-stats');
        $(window).scrollTop(0);
    },
    model: function(params) {

        var address = document.URL;
        var user_id = address.split("#")[1].split("/")[2];
        return user_id;
    }
});
