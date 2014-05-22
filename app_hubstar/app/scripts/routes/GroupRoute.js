HubStar.GroupRoute = Ember.Route.extend({
    setupController: function(Controller, model) {
        console.log(model);
    },
    model: function(params) {
        return HubStar.Group.find(params.group_id);
    },
    beforeModel: function(transition) {
        var model = HubStar.Group.find(transition.params.group_id);
        var that = this;
        model.then(function() {
        }, function() {
            that.transitionTo('fourOhFour', "404");
        });
    },
    events: {
    },
    redirect: function(params) {

    },
    deactivate: function() {

    },
    activate: function() {

    },
    renderTemplate: function() {
        this.render('group', {
            outlet: "group",
            into: "application"
        });
    }
});
