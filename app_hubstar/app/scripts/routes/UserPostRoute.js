/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.UserPostRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        if (this.controllerFor('checkingLoginStatus').popupLogin())
        {
                    
            this.controllerFor('user').set('profileSelectionStatus', 'Posts');
            this.controllerFor('user').set('collectionTag', false);

            this.controllerFor('user').set('followerTag', false);
            this.controllerFor('user').set('followingTag', false);
            this.controllerFor('user').set('messageTag', false);
            this.controllerFor('user').set('postTag', true);

            if (this.controllerFor('notificationTop').get("goReply") === true)
            {
                model = localStorage.loginStatus;
                var replyID = this.controllerFor('notificationTop').get("reply_ids");
                model = replyID;
                this.controllerFor('notificationTop').set("goReply", false);
            }
            if (this.controllerFor('notificationTop').get("goMessage") !== undefined && this.controllerFor('notificationTop').get("goMessage") !== null && this.controllerFor('notificationTop').get("goMessage") !== "")
            {
                model = localStorage.loginStatus;
            }
            if (this.controllerFor('notification').get("reply_ids") !== undefined && this.controllerFor('notification').get("reply_ids") !== null && this.controllerFor('notification').get("reply_ids") !== "")
            {

                model = this.controllerFor('notification').get("reply_ids");
                //this.controllerFor('notification').set("reply_ids", "");
            }
            if (this.controllerFor('notificationTop').get("reply_ids") !== undefined && this.controllerFor('notificationTop').get("reply_ids") !== null && this.controllerFor('notificationTop').get("reply_ids") !== "")
            {
                model = this.controllerFor('notificationTop').get("reply_ids");
                //this.controllerFor('notification').set("reply_ids", "");

            }
            this.controllerFor('userMessage').setUserMessage(model);
            $('#user-stats > li').removeClass('selected-user-stats');
            $('#post').addClass('selected-user-stats');
        }
    },
    model: function(params) {

        var address = document.URL;
        var user_id = address.split("#")[1].split("/")[2];
        return user_id;
    }
});
