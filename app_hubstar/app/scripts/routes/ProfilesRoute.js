HubStar.ProfilesRoute = Ember.Route.extend({

        setupController: function(controller, model) {
            this.controller.set('model', null);

            controller.set('model', model);
            this.controllerFor('application').set('islogin', true);
            this.controllerFor('application').set('popup', false);
            this.controllerFor('application').set('isotherpage', true);
            this.controllerFor('searchs').setLoginImge();
            this.controllerFor('application').set('isotherpage', true);
            $('.nothingHere').attr('style', 'display:block');
        },
        activate: function() {

        },
        redirect: function() {
//
//            if ((localStorage.getItem("loginStatus") === null) || (localStorage.loginStatus === "")) {
//
//                this.transitionTo('indexIndex');
//                this.controllerFor('application').set('popup', true);
//            }
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
