
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.MessagesRoute = Ember.Route.extend({
    setupController: function(controller, model) {
//        if (this.controllerFor('notification').get("goMessage") !== undefined && this.controllerFor('notification').get("goMessage") !== null && this.controllerFor('notification').get("goMessage") !== "") {
//            console.log(this.controllerFor('notification').get("goMessage"));
//            var s= this.controllerFor('notification').get("goMessage");

        //     }
        // this.controllerFor("userMessage").goToMessage();   
        this.controllerFor('user').set('profileSelectionStatus', 'Messages');
//        if (this.controllerFor('notification').get("reply_ids") !== undefined && this.controllerFor('notification').get("reply_ids") !== null && this.controllerFor('notification').get("reply_ids") !== "")
//        {
//            model = this.controllerFor('notification').get("reply_ids");
//            console.log(model);
//            this.controllerFor('notification').set("reply_ids", "");
//        }
        this.controllerFor('messageCenter').selectMessage(model);
    },
    model: function(params) {
        var user_id = "";
//        if (this.controllerFor("notification").get("afterModel") === true)
//        {           
//            user_id = this.controllerFor("notification").get("reply_ids");
//            this.controllerFor("notification").set("afterModel",false) ;
//                 console.log(user_id);
//        }
//        else
//        {
        var address = document.URL;
        var user_id = address.split("#")[1].split("/")[2];
//        }
        return user_id;
    }
});


