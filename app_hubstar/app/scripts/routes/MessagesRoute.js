
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.MessagesRoute = Ember.Route.extend({
    setupController: function(controller, model) {

        this.controllerFor('user').set('profileSelectionStatus', 'Messages');
        this.controllerFor('messageCenter').selectMessage(model);
        if (this.controllerFor('notification').get("reply_ids") !== undefined && this.controllerFor('notification').get("reply_ids") !== null && this.controllerFor('notification').get("reply_ids") !== "")
        {
            model = this.controllerFor('notification').get("reply_ids");
        }
        if (this.controllerFor('notificationTop').get("reply_ids") !== undefined && this.controllerFor('notificationTop').get("reply_ids") !== null && this.controllerFor('notificationTop').get("reply_ids") !== "")
        {
            model = this.controllerFor('notificationTop').get("reply_ids");
        }
        $(window).scrollTop(550);
    },
    model: function(params) {
        var user_id = "";
        var address = document.URL;
        var user_id = address.split("#")[1].split("/")[2];
        return user_id;
    }
});


