HubStar.IndexIndexRoute = Ember.Route.extend({
        setupController: function() {

            this.controllerFor('application').set('islogin', false);
            this.controllerFor('status').set('islogin', false);
            this.controllerFor('application').set('isotherpage', false);
        

            if (localStorage.getItem("loginStatus") === null || (localStorage.loginStatus === "")) {
            }
        },
        actions: {
            transitionToProfile: function() {
                this.controllerFor('application').set("popup", true);
            },
            transitionToPhoto: function() {
                this.controllerFor('application').set("popup", true);
            },
            transitionToArticle: function() {
                this.controllerFor('application').set("popup", true);
            }
        },
        redirect: function() {
            if (localStorage.getItem("loginStatus") === null || (localStorage.loginStatus === "")) {
                this.transitionTo('searchIndexTom');
            } else {
                
                this.transitionTo('searchIndexTom');

            }

        },
        model: function() {
            return HubStar.Mega.find();
        },
        activate: function() {


            HubStar.set("isLogin", false);
        },
        deactivate: function() {

            HubStar.set("isLogin", true);
        }

    });
