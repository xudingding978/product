HubStar.GroupRoute = Ember.Route.extend({
    setupController: function(Controller, model) {

        this.controllerFor('application').set('islogin', true);
        this.controllerFor('application').set('popup', false);
        this.controllerFor('application').set('isotherpage', true);
        this.controllerFor('searchs').setLoginImge();
        this.controllerFor('application').set('isotherpage', true);
        this.controller.setGroup(model);
        this.controllerFor('application').set('userProfile', false);
        if (localStorage.getItem("loginStatus") === null || (localStorage.loginStatus === "")) {
            HubStar.set('isLogin', false);

        } else {
            HubStar.set('isLogin', true);
        }
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
