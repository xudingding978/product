HubStar.WelcomeRoute = Ember.Route.extend({
    redirect: function() {
        if (localStorage.checkUser === "newUser") {


        } else {

            this.transitionTo('searchIndexTom');

        }


    },
    activate: function() {
        HubStar.set("isLogin", true);
    },
    setupController: function() {
        this.controllerFor('searchs').defaultSearch();
        this.controllerFor('index').setLogin();

        this.controllerFor('application').set('islogin', true);

        this.controllerFor('status').set('islogin', true);
        this.controllerFor('application').set('popup', false);
       this.controllerFor('application').set('isotherpage', true);

    },
    renderTemplate: function() {

        this.render('welcome', {
            outlet: 'welcome',
            into: 'application'

        });
    }
});