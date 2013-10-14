/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.UserMessageRoute = Ember.Route.extend({
//          model: function(params) {
//
//            this.controllerFor('user').set('switchPhoto', false);
//            var address = document.URL;
//            var user_id = address.split("#")[1].split("/")[2];
//              this.controllerFor('message').set("model", model);
//            return HubStar.Mega.find({RquireType: "personalCollection", user_id: user_id, collection_id: params.collection_id});
//        },
    setupController: function(controller, model) {

        this.controllerFor('user').set('profileSelectionStatus', 'Messages');
        this.controllerFor('user').set('collectionTag', false);

        this.controllerFor('user').set('followerTag', false);
        this.controllerFor('user').set('followingTag', false);
        this.controllerFor('user').set('messageTag', true);
//            console.log(this.controllerFor('checkAuthorityStatus').);
 //      this.controllerFor('userMessage').set("model", model);
    this.controllerFor('userMessage').setUserMessage(model);
        console.log(model);

        $(window).scrollTop(0);
    },
       model: function(params) {

        var address = document.URL;
        var user_id = address.split("#")[1].split("/")[2];
return user_id;
//        var address = document.URL;
//        var user_id = address.split("#")[1].split("/")[2];
//         var model =  HubStar.User.find(params.user_id);
//         var message =  model.get("messages");
//         message.addObserver('isLoaded', function() {
//    if (message.get('isLoaded')) {
//             return message;
//    }
//});
     
       // return HubStar.Mega.find({RquireType: "personalCollection", user_id: user_id, message_id: "54813817093857045634432307356344323073"});
     
    }
});
