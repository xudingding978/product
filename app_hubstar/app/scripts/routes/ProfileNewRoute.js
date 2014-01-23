HubStar.ProfileNewRoute = Ember.Route.extend({
    renderTemplate: function() {
        this.render('profileNew', {
            outlet: "profileNew",
            into: "application"
        });
    },
    setupController: function(controller, model) {
        this.controllerFor('user').set('model', model);
        setTimeout(function() {
            $('.nothingHere').attr('style', 'display:none');
        }, 10);

        HubStar.set('editingMode', 'user');
        if (localStorage.loginStatus === null || (localStorage.loginStatus === ""))
        {
            HubStar.set("isLogin", false);
        } else {
            HubStar.set("isLogin", true);

            if (HubStar.User.find(localStorage.loginStatus).get("email").match(/@trendsideas.com/g) !== ""
                    && HubStar.User.find(localStorage.loginStatus).get("email").match(/@trendsideas.com/g) !== "undefined"
                    && HubStar.User.find(localStorage.loginStatus).get("email").match(/@trendsideas.com/g) !== null) {

                this.controllerFor('application').set("is_trends_user", true);
            } else {
                this.controllerFor('application').set("is_trends_user", false);
            }
        }
    },
    model: function() {
        var user = HubStar.User.find(localStorage.loginStatus);
        return user;
    },
    activate: function() {

    },
    deactivate: function() {
//            $("body").css("overflow", "auto");
//            $('#footer').attr("style", "display:block");
    },
    redirect: function() {

        if ((localStorage.getItem("loginStatus") === null) || (localStorage.loginStatus === "")) {

            this.transitionTo('indexIndex');
            this.controllerFor('application').set('popup', true);
        } else
        {
          //  this.transitionTo("searchIndex");
        }
    }
});
