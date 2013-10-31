/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.MessageCenterRoute = Ember.Route.extend({
    setupController: function(controller, model) {

        this.controllerFor('user').set('profileSelectionStatus', 'Messages');
        this.controllerFor('user').set('collectionTag', false);

        this.controllerFor('user').set('followerTag', false);
        this.controllerFor('user').set('followingTag', false);
        this.controllerFor('user').set('messageTag', true);
        // The following two line is used to change the selection with dark 
        this.controllerFor('conversation').selectConversation(model);     
          this.controllerFor("conversationItem").getClientId(model);
        $(window).scrollTop(0);
    },
    model: function(params) {

        var address = document.URL;
        var conversation_id = address.split("#")[1].split("/")[4];
        console.log(conversation_id);
        return conversation_id;
    }
});


