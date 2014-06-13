HubStar.ProfilesRoute = Ember.Route.extend({
    setupController: function(controller, model) {
          this.controller.set('model', null);

        controller.set('model', model);
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
        $('.nothingHere').attr('style', 'display:block');
    },
    activate: function() {

    },
    redirect: function() {

        if ((localStorage.getItem("loginStatus") === null) || (localStorage.loginStatus === "")) {

            this.transitionTo('indexIndex');
            this.controllerFor('application').set('popup', true);
        } else
        {
            var address = document.URL;
            var profileNew = address.split("#")[1].split("/")[2];
            if (profileNew===""||profileNew===null||profileNew===undefined)
            {
                this.transitionTo("searchIndexTom");
            }
        }
    },
    deactivate: function() {

    },
    model: function() {
        return HubStar.Profile.find();
    },
    renderTemplate: function() {
        this.render('profiles', {
            outlet: "profiles",
            into: "application"
        });
    }
});
