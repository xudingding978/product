/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.ConversationRoute = Ember.Route.extend({
    setupController: function(controller, model) {          
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 200);
      
    },
    model: function(params) {           
        var address = document.URL;
        var user_id = address.split("#")[1].split("/")[2];
        var user = HubStar.User.find(user_id);
        var conversation_id = address.split("#")[1].split("/")[5];

        var data = null;
        for (var i = 0; i < user.get('conversations').get("length"); i++) {
            data = user.get('conversations').objectAt(i);
            if (data.get("conversation_id") === conversation_id) {
                data.set("id", data.get("conversation_id"));            
                break;
            }
        }
        return data;
    }
});


