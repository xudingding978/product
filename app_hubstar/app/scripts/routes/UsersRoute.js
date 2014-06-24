HubStar.UsersRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        //  controller.set("indexPage",true);
        this.controllerFor('application').set('islogin', true);
        this.controllerFor('application').set('popup', false);
        this.controllerFor('application').set('isotherpage', true);
        this.controllerFor('searchs').setLoginImge();
        this.controllerFor('application').set('isotherpage', true);
        if (localStorage.getItem("loginStatus") === null || (localStorage.loginStatus === "")) {
            HubStar.set('isLogin', false);

        } else {
            HubStar.set('isLogin', true);
        }

    },
    activate: function() {

    },
    redirect: function() {

        if ((localStorage.getItem("loginStatus") === null) || (localStorage.loginStatus === "")) {
            this.transitionTo('indexIndex');
            this.controllerFor('application').set('popup', true);
        } else {
            this.transitionTo('searchIndexTom');
        }
    }


});
