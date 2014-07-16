/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.GroupNetworkRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        if (this.controllerFor('checkingLoginStatus').popupLogin())
        {
            var that = this;
            model.then(function() {
                that.controllerFor('groupNetwork').getClientId(model.get("group_partner_ids"));
                that.controllerFor('group').send("selectPartner");
            });
        }
    },
    model: function(params) {
        var address = document.URL;
        var group_id = address.split("#")[1].split("/")[2];
        var model = HubStar.Group.find(group_id);
        return model;
    },
    renderTemplate: function() {
        this.render("groupNetwork", {
            outlet: "groupNetwork",
            into: "group"
        });
    }
});
