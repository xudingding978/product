/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.UserMessageRoute = Ember.Route.extend({
    setupController: function(controller, model) {

        this.controllerFor('user').set('profileSelectionStatus', 'Messages');
        this.controllerFor('user').set('collectionTag', false);

        this.controllerFor('user').set('followerTag', false);
        this.controllerFor('user').set('followingTag', false);
        this.controllerFor('user').set('messageTag', true);
        this.controllerFor('user').set('postTag', true);
        // The following two line is used to change the selection with dark 
        $('#user-stats > li').removeClass('selected-user-stats');
        $('#post').addClass('selected-user-stats');
        this.controllerFor('userMessage').setUserMessage(model);

        $(window).scrollTop(0);
    },
    model: function(params) {

        var address = document.URL;
        var user_id = address.split("#")[1].split("/")[2];
        return user_id;

    }
});
